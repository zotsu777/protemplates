import { ContentGlyph } from "@/components/ui/ContentGlyph";
import { WHY_PILLARS } from "@/lib/content";
import { dictionaries } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/types/catalog";

export function WhyUs({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <section id="why-us" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            {dict["why.eyebrow"]}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-extrabold text-slate-900 sm:text-4xl">
            {dict["why.title"]}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {WHY_PILLARS.map((pillar) => (
            <article
              key={pillar.icon}
              className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
                <ContentGlyph name={pillar.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                {pillar.title[locale]}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {pillar.body[locale]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
