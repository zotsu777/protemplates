import { NextResponse } from "next/server";
import { z } from "zod";

import { paymentProvider } from "@/lib/payments";
import { getTemplateById } from "@/lib/templates";
import type { Order } from "@/types/catalog";

const checkoutSchema = z.object({
  items: z.array(z.string().trim().min(1)).min(1).max(20),
  paymentMethod: z.enum(["cmi", "bank-transfer", "cashplus"]),
});

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "invalid_json" },
      { status: 400 },
    );
  }

  const parsed = checkoutSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_payload", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  // Never trust client-supplied prices: re-resolve every line from the catalog
  // and de-duplicate ids so a repeated id cannot be charged twice.
  const uniqueIds = [...new Set(parsed.data.items)];
  const templates = uniqueIds.map((id) => getTemplateById(id));

  if (templates.some((template) => template === undefined)) {
    return NextResponse.json({ error: "unknown_template" }, { status: 400 });
  }

  const resolved = templates.flatMap((template) => (template ? [template] : []));
  const totalMad = resolved.reduce((sum, template) => sum + template.priceMad, 0);
  const paymentMethod = parsed.data.paymentMethod;

  const intent = await paymentProvider.createIntent({
    amountMad: totalMad,
    method: paymentMethod,
  });

  const order: Order = {
    reference: intent.reference,
    totalMad,
    currency: "MAD",
    paymentMethod,
    createdAt: intent.createdAt,
    lines: resolved.map((template) => ({
      templateId: template.id,
      title: template.title,
      priceMad: template.priceMad,
    })),
  };

  return NextResponse.json(order, { status: 201 });
}
