"use client";

import { LayoutGrid } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { TemplateCard } from "@/components/catalog/TemplateCard";
import { PreviewDialog } from "@/components/preview/PreviewDialog";
import { useI18n } from "@/components/providers/LocaleProvider";
import { CATALOG_FILTERS } from "@/lib/templates";
import { cn } from "@/lib/utils";
import type { CatalogFilter, Template } from "@/types/catalog";

function parseFilter(value: string | null): CatalogFilter {
  return CATALOG_FILTERS.find((filter) => filter === value) ?? "all";
}

export function Catalog({
  templates,
  initialFilter = "all",
}: {
  templates: readonly Template[];
  initialFilter?: CatalogFilter;
}) {
  const { t } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filter, setFilter] = useState<CatalogFilter>(initialFilter);
  const [previewId, setPreviewId] = useState<string | null>(null);

  useEffect(() => {
    setFilter(parseFilter(searchParams.get("filter")));
  }, [searchParams]);

  const visibleTemplates = useMemo(
    () =>
      filter === "all"
        ? templates
        : templates.filter((template) => template.category === filter),
    [templates, filter],
  );

  const previewTemplate =
    templates.find((template) => template.id === previewId) ?? null;

  function changeFilter(next: CatalogFilter) {
    setFilter(next);

    const params = new URLSearchParams(searchParams.toString());
    if (next === "all") {
      params.delete("filter");
    } else {
      params.set("filter", next);
    }

    const query = params.toString();
    router.replace(`${pathname}${query ? `?${query}` : ""}#catalog`, {
      scroll: false,
    });
  }

  return (
    <section id="catalog" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {t("catalog.eyebrow")}
            </p>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-4xl">
              {t("catalog.title")}
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 sm:text-base">
            {t("catalog.subtitle")}
          </p>
        </div>

        <div
          role="group"
          aria-label={t("catalog.title")}
          className="no-scrollbar mb-6 flex items-center gap-2 overflow-x-auto pb-4"
        >
          {CATALOG_FILTERS.map((candidate) => {
            const isActive = candidate === filter;
            const count =
              candidate === "all"
                ? templates.length
                : templates.filter((template) => template.category === candidate)
                    .length;

            return (
              <button
                key={candidate}
                type="button"
                onClick={() => changeFilter(candidate)}
                aria-pressed={isActive}
                className={cn(
                  "shrink-0 rounded-xl border px-4 py-2.5 text-xs font-bold transition-all sm:text-sm",
                  isActive
                    ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-400",
                  !isActive &&
                    candidate === "freebies" &&
                    "text-emerald-700 hover:border-emerald-400",
                )}
              >
                {t(`category.${candidate}`)} ({count})
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="mb-6 text-xs font-semibold text-slate-500">
          {t("catalog.showing", {
            shown: visibleTemplates.length,
            total: templates.length,
          })}
        </p>

        {visibleTemplates.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onPreview={setPreviewId}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <LayoutGrid aria-hidden="true" className="h-6 w-6" />
            </span>
            <p className="mt-4 text-sm font-semibold text-slate-600">
              {t("catalog.empty")}
            </p>
            <button
              type="button"
              onClick={() => changeFilter("all")}
              className="mt-4 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-blue-500"
            >
              {t("catalog.reset")}
            </button>
          </div>
        )}
      </div>

      <PreviewDialog
        template={previewTemplate}
        onClose={() => setPreviewId(null)}
      />
    </section>
  );
}
