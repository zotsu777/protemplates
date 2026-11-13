import { ArrowRight, Gift } from "lucide-react";
import Link from "next/link";

import { ContentGlyph } from "@/components/ui/ContentGlyph";
import { TRUST_POINTS } from "@/lib/content";
import { dictionaries } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/types/catalog";

export function Hero({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <section className="relative overflow-hidden bg-slate-900 pb-20 pt-14 text-white sm:pb-28 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 sm:text-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"
            />
            {dict["hero.badge"]}
          </p>

          <h1 className="text-balance text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            {dict["hero.titleBefore"]}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              {dict["hero.titleHighlight"]}
            </span>
            {dict["hero.titleAfter"]}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-xl">
            {dict["hero.subtitle"]}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`/${locale}?filter=all#catalog`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500 sm:w-auto"
            >
              {dict["hero.primary"]}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 rtl:rotate-180"
              />
            </Link>

            <Link
              href={`/${locale}?filter=freebies#catalog`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-7 py-4 text-base font-bold text-white transition-colors hover:border-emerald-400/50 hover:bg-slate-800 sm:w-auto"
            >
              <Gift aria-hidden="true" className="h-4 w-4 text-emerald-400" />
              {dict["hero.secondary"]}
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-3 text-start sm:gap-4 lg:grid-cols-4">
            {TRUST_POINTS.map((point) => (
              <div
                key={point.titleKey}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-800/50 p-3.5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                  <ContentGlyph name={point.icon} className="h-4 w-4" />
                </span>
                <div>
                  <dt className="text-xs font-bold text-white sm:text-sm">
                    {dict[point.titleKey]}
                  </dt>
                  <dd className="text-[11px] text-slate-400">
                    {dict[point.subKey]}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
