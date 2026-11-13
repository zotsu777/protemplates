"use client";

import {
  Banknote,
  Check,
  CreditCard,
  Download,
  Landmark,
  Loader2,
  Lock,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useCart } from "@/components/providers/CartProvider";
import { useI18n } from "@/components/providers/LocaleProvider";
import { Dialog } from "@/components/ui/Dialog";
import { formatBytes, getDownload } from "@/lib/downloads";
import { formatMad } from "@/lib/format";
import { PAYMENT_METHODS, type PaymentIcon } from "@/lib/payments";
import { getTemplateById, localize } from "@/lib/templates";
import { cn } from "@/lib/utils";
import type { Order, PaymentMethodId } from "@/types/catalog";

const PAYMENT_ICONS: Record<PaymentIcon, typeof CreditCard> = {
  card: CreditCard,
  bank: Landmark,
  cash: Banknote,
};

type CheckoutState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; order: Order }
  | { status: "error" };

export function CartDrawer() {
  const { locale, t } = useI18n();
  const { items, isOpen, closeCart, remove, clear } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodId>("cmi");
  const [state, setState] = useState<CheckoutState>({ status: "idle" });

  useEffect(() => {
    if (isOpen) {
      setState({ status: "idle" });
      setPaymentMethod("cmi");
    }
  }, [isOpen]);

  const lines = items.flatMap((id) => {
    const template = getTemplateById(id);
    return template ? [template] : [];
  });

  const totalMad = lines.reduce((sum, template) => sum + template.priceMad, 0);
  const isSubmitting = state.status === "submitting";

  async function handleCheckout() {
    if (lines.length === 0) return;
    setState({ status: "submitting" });

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: lines.map((template) => template.id),
          paymentMethod,
        }),
      });

      if (!response.ok) throw new Error("Checkout failed");

      const order = (await response.json()) as Order;
      clear();
      setState({ status: "success", order });
    } catch {
      setState({ status: "error" });
    }
  }

  const paymentLabel =
    PAYMENT_METHODS.find(
      (method) =>
        method.id ===
        (state.status === "success"
          ? state.order.paymentMethod
          : paymentMethod),
    )?.labelKey ?? "payment.cmi";

  return (
    <Dialog
      open={isOpen}
      onClose={closeCart}
      labelledBy="cart-drawer-title"
      align="end"
      panelClassName="animate-drawer-in flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <div className="flex items-center gap-2.5">
          <ShoppingBag aria-hidden="true" className="h-5 w-5 text-blue-600" />
          <h2
            id="cart-drawer-title"
            className="text-lg font-extrabold text-slate-900"
          >
            {t("cart.title")}
          </h2>
        </div>
        <button
          type="button"
          onClick={closeCart}
          aria-label={t("cart.close")}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200"
        >
          <X aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overscroll-contain p-6">
        {state.status === "success" ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white shadow-md">
              <Check aria-hidden="true" className="h-7 w-7" />
            </div>

            <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-extrabold text-emerald-800">
              {t("checkout.successBadge")} · {state.order.reference}
            </p>

            <h3 className="mt-3 text-xl font-extrabold text-slate-900">
              {t("checkout.successTitle")}
            </h3>

            <p className="mt-1.5 text-xs text-slate-600">
              {t("checkout.successBody", {
                total: formatMad(state.order.totalMad, locale),
                method: t(paymentLabel),
              })}
            </p>

            <ul className="mt-5 space-y-2 text-start">
              {state.order.lines.map((line) => {
                const template = getTemplateById(line.templateId);
                const title = template
                  ? localize(template.title, locale)
                  : line.title[locale];
                const download = template
                  ? getDownload(template.slug)
                  : undefined;

                return (
                  <li
                    key={line.templateId}
                    className="flex items-center justify-between gap-2 rounded-xl border border-emerald-200/80 bg-white p-3 shadow-sm"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold text-slate-900">
                        {title}
                      </p>
                      <p className="text-[10px] text-slate-500">
                        {download
                          ? `${download.files} files · ${formatBytes(download.bytes)}`
                          : t("checkout.fileHint")}
                      </p>
                    </div>
                    {download ? (
                      <a
                        href={download.href}
                        download
                        className="shrink-0 rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white transition-colors hover:bg-blue-600"
                      >
                        <Download
                          aria-hidden="true"
                          className="me-1 inline h-3 w-3"
                        />
                        {t("checkout.download")}
                      </a>
                    ) : (
                      <span className="shrink-0 rounded-lg bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-500">
                        {t("checkout.fileHint")}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={closeCart}
              className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-xs font-bold text-white transition-colors hover:bg-blue-500"
            >
              {t("cart.continue")}
            </button>
          </div>
        ) : lines.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-14 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-2xl text-slate-400">
              <ShoppingBag aria-hidden="true" className="h-6 w-6" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">
              {t("cart.emptyTitle")}
            </h3>
            <p className="mt-1 max-w-xs text-xs text-slate-500">
              {t("cart.emptyBody")}
            </p>
            <Link
              href={`/${locale}?filter=freebies#catalog`}
              onClick={closeCart}
              className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-blue-500"
            >
              {t("cart.emptyCta")}
            </Link>
          </div>
        ) : (
          <ul className="space-y-3">
            {lines.map((template) => {
              const title = localize(template.title, locale);

              return (
                <li
                  key={template.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase text-blue-600">
                      {localize(template.categoryLabel, locale)}
                    </p>
                    <p className="truncate text-sm font-bold text-slate-900">
                      {title}
                    </p>
                    <p className="mt-0.5 text-xs font-extrabold text-emerald-700">
                      {template.priceMad === 0
                        ? `${formatMad(0, locale)} · ${t("card.free")}`
                        : formatMad(template.priceMad, locale)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(template.id)}
                    aria-label={t("cart.remove", { title })}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
                  >
                    <Trash2 aria-hidden="true" className="h-4 w-4" />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {state.status !== "success" && lines.length > 0 ? (
        <div className="border-t border-slate-200 bg-slate-50 p-6">
          <fieldset>
            <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-600">
              {t("cart.paymentLabel")}
            </legend>
            <div className="grid grid-cols-3 gap-2">
              {PAYMENT_METHODS.map((method) => {
                const Icon = PAYMENT_ICONS[method.icon];
                const isActive = method.id === paymentMethod;

                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "rounded-xl border p-2.5 text-center transition-all",
                      isActive
                        ? "border-2 border-blue-600 bg-blue-50/60"
                        : "border-slate-200 bg-white hover:border-blue-400",
                    )}
                  >
                    <Icon
                      aria-hidden="true"
                      className={cn(
                        "mx-auto mb-1 h-4 w-4",
                        isActive ? "text-blue-600" : "text-slate-500",
                      )}
                    />
                    <span className="block text-[11px] font-bold text-slate-900">
                      {t(method.labelKey)}
                    </span>
                    <span className="mt-0.5 block text-[9px] text-slate-500">
                      {t(method.hintKey)}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mb-4 mt-4 flex items-center justify-between text-base font-extrabold text-slate-900">
            <span>{t("cart.total")}</span>
            <span className="text-2xl text-blue-600">
              {formatMad(totalMad, locale)}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
            ) : (
              <Lock aria-hidden="true" className="h-4 w-4" />
            )}
            {isSubmitting ? t("cart.processing") : t("cart.checkout")}
          </button>

          {state.status === "error" ? (
            <p
              role="alert"
              className="mt-2 text-center text-xs font-semibold text-rose-600"
            >
              {t("checkout.error")}
            </p>
          ) : (
            <p className="mt-2 text-center text-[11px] text-slate-500">
              {t("cart.note")}
            </p>
          )}
        </div>
      ) : null}
    </Dialog>
  );
}
