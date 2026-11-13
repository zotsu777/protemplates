import { Check } from "lucide-react";
import Link from "next/link";

import { dictionaries } from "@/lib/i18n/dictionaries";
import { PRICING_TIERS } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/catalog";

export function Pricing({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-y border-slate-200/80 bg-white py-16 sm:py-24 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            {dict["pricing.eyebrow"]}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-slate-50">
            {dict["pricing.title"]}
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base dark:text-slate-400">
            {dict["pricing.subtitle"]}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRICING_TIERS.map((tier) => {
            const isDark = tier.variant === "dark";
            const isMuted = tier.variant === "muted";
            const href = `/${locale}?filter=${tier.cta.filter ?? "all"}#catalog`;

            return (
              <article
                key={tier.id}
                className={cn(
                  "relative flex flex-col justify-between rounded-2xl border p-6",
                  isDark
                    ? "border-2 border-blue-600 bg-slate-900 text-white shadow-xl"
                    : "border-slate-200 shadow-sm",
                  isMuted && "bg-slate-50",
                  tier.variant === "light" && "bg-white",
                )}
              >
                {tier.badgeKey ? (
                  <span className="absolute -top-3 end-6 rounded-full bg-emerald-500 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-slate-950">
                    {dict[tier.badgeKey]}
                  </span>
                ) : null}

                <div>
                  <span
                    className={cn(
                      "inline-block rounded-lg px-2.5 py-1 text-xs font-bold",
                      isDark
                        ? "bg-blue-500/20 text-blue-300"
                        : tier.id === "free"
                          ? "bg-emerald-100 text-emerald-800"
                          : tier.id === "bundle"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-blue-50 text-blue-700",
                    )}
                  >
                    {tier.eyebrow[locale]}
                  </span>

                  <h3
                    className={cn(
                      "mt-4 text-xl font-extrabold",
                      isDark ? "text-white" : "text-slate-900",
                    )}
                  >
                    {tier.name[locale]}
                  </h3>

                  <div className="mt-3 flex items-baseline gap-1">
                    <span
                      className={cn(
                        "text-4xl font-extrabold",
                        isDark ? "text-white" : "text-slate-900",
                      )}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={cn(
                        "text-base font-bold",
                        isDark ? "text-emerald-400" : "text-slate-700",
                      )}
                    >
                      {dict["pricing.currency"]}
                    </span>
                    {tier.priceSuffixKey ? (
                      <span
                        className={cn(
                          "text-xs font-semibold",
                          isDark ? "text-slate-400" : "text-slate-500",
                        )}
                      >
                        {dict[tier.priceSuffixKey]}
                      </span>
                    ) : null}
                  </div>

                  <p
                    className={cn(
                      "mt-3 text-sm",
                      isDark ? "text-slate-300" : "text-slate-600",
                    )}
                  >
                    {tier.description[locale]}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm">
                    {tier.features[locale].map((feature) => (
                      <li
                        key={feature}
                        className={cn(
                          "flex items-start gap-2",
                          isDark ? "text-slate-200" : "text-slate-700",
                        )}
                      >
                        <Check
                          aria-hidden="true"
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            isDark ? "text-emerald-400" : "text-blue-600",
                          )}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={href}
                  className={cn(
                    "mt-8 block w-full rounded-xl py-3 text-center text-sm font-bold transition-colors",
                    isDark
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : tier.id === "free"
                        ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
                        : "bg-slate-900 text-white hover:bg-blue-600",
                  )}
                >
                  {tier.cta.label[locale]}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
