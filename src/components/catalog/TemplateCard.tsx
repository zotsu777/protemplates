"use client";

import { Check, Clock, Eye, Languages, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";

import { useCart } from "@/components/providers/CartProvider";
import { useI18n } from "@/components/providers/LocaleProvider";
import { useToast } from "@/components/providers/ToastProvider";
import { formatMad } from "@/lib/format";
import { localize } from "@/lib/templates";
import { cn } from "@/lib/utils";
import type { Template } from "@/types/catalog";

interface TemplateCardProps {
  template: Template;
  onPreview: (templateId: string) => void;
}

export function TemplateCard({ template, onPreview }: TemplateCardProps) {
  const { locale, t } = useI18n();
  const { add, items } = useCart();
  const { toast } = useToast();

  const isFree = template.priceMad === 0;
  const isInCart = items.includes(template.id);
  const title = localize(template.title, locale);

  function handleAdd() {
    const result = add(template.id);
    toast(
      result === "added"
        ? t("toast.added", { title })
        : t("toast.exists", { title }),
    );
  }

  return (
    <article className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0 dark:border-slate-800 dark:bg-slate-900">
      <div>
        <div
          className={cn(
            "relative flex h-48 flex-col justify-between overflow-hidden bg-gradient-to-br p-5",
            template.gradient.from,
            template.gradient.to,
          )}
        >
          <div className="z-10 flex items-center justify-between gap-2">
            <span className="rounded-lg bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-900 backdrop-blur-sm">
              {localize(template.categoryLabel, locale)}
            </span>
            <span
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-extrabold shadow-sm",
                isFree
                  ? "bg-emerald-500 text-slate-950"
                  : "bg-slate-900 text-white",
              )}
            >
              {isFree ? `${formatMad(0, locale)} · ${t("card.free")}` : formatMad(template.priceMad, locale)}
            </span>
          </div>

          <div
            aria-hidden="true"
            className="relative z-10 mx-auto w-full max-w-[260px] translate-y-2 rounded-t-xl border border-white bg-white/95 p-3.5 shadow-lg"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[9px] font-bold text-blue-700">
                AR RTL + FR
              </span>
            </div>
            <div className="mb-1.5 h-2.5 w-3/4 rounded bg-slate-800" />
            <div className="mb-2.5 h-2 w-1/2 rounded bg-blue-500/40" />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-6 rounded border border-slate-200/60 bg-slate-100" />
              <div className="h-6 rounded border border-emerald-200/60 bg-emerald-50" />
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
              <Languages aria-hidden="true" className="h-3 w-3" />
              {t("card.bilingual")}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400">
              <Clock aria-hidden="true" className="h-3 w-3" />
              {t("card.editTime")}
            </span>
          </div>

          <h3 className="text-lg font-extrabold leading-snug text-slate-900 dark:text-slate-50">
            <Link
              href={`/${locale}/templates/${template.slug}`}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {title}
            </Link>
          </h3>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">
            {localize(template.description, locale)}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {template.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-md border border-slate-200/80 bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-2.5 border-t border-slate-100 bg-slate-50/70 px-5 py-3.5 dark:border-slate-800 dark:bg-slate-950/70">
        <button
          type="button"
          onClick={() => onPreview(template.id)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <Eye aria-hidden="true" className="h-3.5 w-3.5" />
          {t("card.preview")}
        </button>

        <button
          type="button"
          onClick={handleAdd}
          disabled={isInCart}
          className={cn(
            "inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-bold transition-colors",
            isInCart
              ? "cursor-default bg-emerald-50 text-emerald-700"
              : "bg-blue-600 text-white shadow-sm hover:bg-blue-500",
          )}
        >
          {isInCart ? (
            <Check aria-hidden="true" className="h-3.5 w-3.5" />
          ) : isFree ? (
            <Plus aria-hidden="true" className="h-3.5 w-3.5" />
          ) : (
            <ShoppingCart aria-hidden="true" className="h-3.5 w-3.5" />
          )}
          {isInCart
            ? t("card.inCart")
            : isFree
              ? t("card.addFree")
              : t("card.add")}
        </button>
      </div>
    </article>
  );
}
