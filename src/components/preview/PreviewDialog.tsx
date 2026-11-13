"use client";

import { Check, CirclePlay, Download, Languages, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useCart } from "@/components/providers/CartProvider";
import { useI18n } from "@/components/providers/LocaleProvider";
import { useToast } from "@/components/providers/ToastProvider";
import { PreviewCanvas } from "@/components/preview/PreviewCanvas";
import { Dialog } from "@/components/ui/Dialog";
import { formatBytes, getDownload } from "@/lib/downloads";
import { formatMad } from "@/lib/format";
import { localize } from "@/lib/templates";
import { cn } from "@/lib/utils";
import type { Direction, Template } from "@/types/catalog";

interface PreviewDialogProps {
  template: Template | null;
  onClose: () => void;
}

export function PreviewDialog({ template, onClose }: PreviewDialogProps) {
  const { locale, t } = useI18n();
  const { add, items } = useCart();
  const { toast } = useToast();
  const [direction, setDirection] = useState<Direction>("ltr");

  useEffect(() => {
    setDirection("ltr");
  }, [template?.id]);

  const isInCart = template ? items.includes(template.id) : false;
  const isFree = template?.priceMad === 0;
  const download = template ? getDownload(template.slug) : undefined;

  function handleAdd() {
    if (!template) return;
    const title = localize(template.title, locale);
    const result = add(template.id);
    toast(
      result === "added"
        ? t("toast.added", { title })
        : t("toast.exists", { title }),
    );
  }

  return (
    <Dialog
      open={template !== null}
      onClose={onClose}
      labelledBy="preview-dialog-title"
      panelClassName="max-h-[90vh] w-full max-w-4xl overflow-y-auto overscroll-contain rounded-2xl border border-slate-200 bg-white shadow-2xl"
    >
      {template ? (
        <>
          <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur sm:px-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
                {localize(template.categoryLabel, locale)}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                <CirclePlay aria-hidden="true" className="h-3.5 w-3.5" />
                {t("preview.tutorial")}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label={t("preview.close")}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-12">
            <div className="flex flex-col lg:col-span-7">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {t("preview.title")}
                </span>

                <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1">
                  {(["ltr", "rtl"] as const).map((candidate) => (
                    <button
                      key={candidate}
                      type="button"
                      onClick={() => setDirection(candidate)}
                      aria-pressed={direction === candidate}
                      className={cn(
                        "rounded-lg px-3 py-1.5 text-xs font-bold transition-all",
                        direction === candidate
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900",
                      )}
                    >
                      {candidate === "ltr" ? t("preview.ltr") : t("preview.rtl")}
                    </button>
                  ))}
                </div>
              </div>

              <PreviewCanvas
                template={template}
                direction={direction}
                className="flex-1"
              />
            </div>

            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <h2
                  id="preview-dialog-title"
                  className="text-2xl font-extrabold text-slate-900"
                >
                  {localize(template.title, locale)}
                </h2>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <span className="text-3xl font-extrabold text-blue-600">
                    {isFree
                      ? `${formatMad(0, locale)} · ${t("preview.free")}`
                      : formatMad(template.priceMad, locale)}
                  </span>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                    {t("preview.oneTime")}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {localize(template.description, locale)}
                </p>

                <div className="mt-5">
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t("preview.tools")}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {template.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t("preview.includes")}
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {template.includes[locale].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-2.5 border-t border-slate-200 pt-4">
                {isFree && download ? (
                  <a
                    href={download.href}
                    download
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-colors hover:bg-emerald-400"
                  >
                    <Download aria-hidden="true" className="h-4 w-4" />
                    {t("detail.addFree")}
                    <span className="text-xs font-semibold opacity-70">
                      {download.files} files · {formatBytes(download.bytes)}
                    </span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={handleAdd}
                    disabled={isInCart}
                    className={cn(
                      "flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all",
                      isInCart
                        ? "cursor-default bg-emerald-50 text-emerald-700"
                        : "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500",
                    )}
                  >
                    {isInCart ? (
                      <Check aria-hidden="true" className="h-4 w-4" />
                    ) : (
                      <ShoppingCart aria-hidden="true" className="h-4 w-4" />
                    )}
                    {isInCart ? t("preview.inCart") : t("preview.add")}
                  </button>
                )}
                <p className="text-center text-[11px] text-slate-500">
                  <Languages
                    aria-hidden="true"
                    className="me-1 inline h-3 w-3 text-blue-500"
                  />
                  {t("preview.instant")}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </Dialog>
  );
}
