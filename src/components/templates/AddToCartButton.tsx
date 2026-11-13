"use client";

import { Check, Download, ShoppingCart } from "lucide-react";

import { useCart } from "@/components/providers/CartProvider";
import { useI18n } from "@/components/providers/LocaleProvider";
import { useToast } from "@/components/providers/ToastProvider";
import { formatBytes, getDownload } from "@/lib/downloads";
import { localize } from "@/lib/templates";
import { cn } from "@/lib/utils";
import type { Template } from "@/types/catalog";

export function AddToCartButton({
  template,
  className,
}: {
  template: Template;
  className?: string;
}) {
  const { locale, t } = useI18n();
  const { add, items } = useCart();
  const { toast } = useToast();

  const isFree = template.priceMad === 0;
  const isInCart = items.includes(template.id);
  const download = getDownload(template.slug);

  function handleAdd() {
    const title = localize(template.title, locale);
    const result = add(template.id);
    toast(
      result === "added"
        ? t("toast.added", { title })
        : t("toast.exists", { title }),
    );
  }

  if (isFree && download) {
    return (
      <a
        href={download.href}
        download
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-colors hover:bg-emerald-400",
          className,
        )}
      >
        <Download aria-hidden="true" className="h-4 w-4" />
        {t("detail.addFree")}
        <span className="text-xs font-semibold opacity-70">
          {download.files} files · {formatBytes(download.bytes)}
        </span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      disabled={isInCart}
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold transition-colors",
        isInCart
          ? "cursor-default bg-emerald-50 text-emerald-700"
          : "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500",
        className,
      )}
    >
      {isInCart ? (
        <Check aria-hidden="true" className="h-4 w-4" />
      ) : (
        <ShoppingCart aria-hidden="true" className="h-4 w-4" />
      )}
      {isInCart
        ? t("card.inCart")
        : isFree
          ? t("detail.addFree")
          : t("detail.add")}
    </button>
  );
}
