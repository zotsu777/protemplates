"use client";

import { useState } from "react";

import { useI18n } from "@/components/providers/LocaleProvider";
import { PreviewCanvas } from "@/components/preview/PreviewCanvas";
import { cn } from "@/lib/utils";
import type { Direction, Template } from "@/types/catalog";

export function TemplatePreviewPanel({ template }: { template: Template }) {
  const { t } = useI18n();
  const [direction, setDirection] = useState<Direction>("ltr");

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {t("preview.title")}
        </h2>

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

      <PreviewCanvas template={template} direction={direction} />
    </div>
  );
}
