"use client";

import { useI18n } from "@/components/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import type { Direction, Template } from "@/types/catalog";

/**
 * The live LTR/RTL mockup shared by the catalog preview modal and the
 * template detail page. `dir` is scoped to the canvas so the surrounding page
 * keeps its own direction.
 */
export function PreviewCanvas({
  template,
  direction,
  className,
  compact = false,
}: {
  template: Template;
  direction: Direction;
  className?: string;
  compact?: boolean;
}) {
  const { t } = useI18n();
  const data = template.previews[direction === "rtl" ? "ar" : "fr"];

  return (
    <div
      dir={direction}
      className={cn(
        "rounded-2xl border-2 border-slate-200 bg-slate-50",
        compact ? "p-4" : "p-4 sm:p-6",
        direction === "rtl" && "font-arabic",
        className,
      )}
    >
      <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-md">
        <div className="mb-4 flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
            {data.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-400">
            ProTemplates
          </span>
        </div>

        <div
          className={cn(
            "mb-4 rounded-xl bg-gradient-to-r p-5 text-white",
            template.gradient.from,
            template.gradient.to,
          )}
        >
          <p className="text-lg font-extrabold leading-snug sm:text-xl">
            {data.heading}
          </p>
          <p className="mt-1.5 text-xs text-white/90 sm:text-sm">{data.sub}</p>
        </div>

        <div className="space-y-3">
          <p className="rounded-xl border border-slate-200/70 bg-slate-50 p-3.5 text-xs font-semibold text-slate-800 sm:text-sm">
            {data.factOne}
          </p>
          <p className="rounded-xl border border-blue-200/70 bg-blue-50/60 p-3.5 text-xs font-semibold text-blue-900 sm:text-sm">
            {data.factTwo}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
          <span>
            {direction === "rtl"
              ? t("preview.footerRtl")
              : t("preview.footerLtr")}
          </span>
          <span className="font-bold text-emerald-600">
            ✓ {t("preview.ready")}
          </span>
        </div>
      </div>
    </div>
  );
}
