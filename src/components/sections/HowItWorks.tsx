import { WORKFLOW_STEPS } from "@/lib/content";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/catalog";

export function HowItWorks({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 pb-16 sm:pb-24"
      aria-labelledby="how-it-works-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {dict["how.eyebrow"]}
              </p>
              <h2
                id="how-it-works-title"
                className="mt-1 text-2xl font-extrabold"
              >
                {dict["how.title"]}
              </h2>
            </div>

            <ol className="grid w-full flex-1 grid-cols-1 gap-6 sm:grid-cols-3">
              {WORKFLOW_STEPS.map((step, index) => (
                <li key={step.title.en} className="flex items-start gap-3.5">
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold",
                      index === WORKFLOW_STEPS.length - 1
                        ? "bg-emerald-500 text-slate-950"
                        : "bg-blue-600 text-white",
                    )}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-white">
                      {step.title[locale]}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      {step.body[locale]}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
