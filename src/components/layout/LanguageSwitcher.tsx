"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useI18n } from "@/components/providers/LocaleProvider";
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_NAMES,
  switchLocalePath,
} from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className="flex items-center rounded-xl border border-slate-200 bg-slate-100 p-1"
    >
      {LOCALES.map((candidate) => {
        const isActive = candidate === locale;

        return (
          <Link
            key={candidate}
            href={switchLocalePath(pathname, candidate)}
            hrefLang={candidate}
            lang={candidate}
            title={LOCALE_NAMES[candidate]}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "rounded-lg px-2.5 py-1 text-xs font-bold transition-colors",
              isActive
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-900",
            )}
          >
            {LOCALE_LABELS[candidate]}
          </Link>
        );
      })}
    </div>
  );
}
