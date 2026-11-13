import {
  Check,
  ChevronRight,
  CirclePlay,
  Languages,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/JsonLd";
import { AddToCartButton } from "@/components/templates/AddToCartButton";
import { RelatedTemplates } from "@/components/templates/RelatedTemplates";
import { TemplatePreviewPanel } from "@/components/templates/TemplatePreviewPanel";
import { formatMad } from "@/lib/format";
import { DEFAULT_LOCALE, LOCALES, isLocale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { absoluteUrl } from "@/lib/site";
import {
  getRelatedTemplates,
  getTemplateBySlug,
  templates,
} from "@/lib/templates";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    templates.map((template) => ({ locale, slug: template.slug })),
  );
}

function languageAlternates(slug: string) {
  return Object.fromEntries([
    ...LOCALES.map((locale) => [locale, `/${locale}/templates/${slug}`]),
    ["x-default", `/${DEFAULT_LOCALE}/templates/${slug}`],
  ]);
}

async function resolveParams(params: Promise<{ locale: string; slug: string }>) {
  const resolved = await params;
  if (!isLocale(resolved.locale)) return null;
  const template = getTemplateBySlug(resolved.slug);
  if (!template) return null;
  return { locale: resolved.locale, template };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const resolved = await resolveParams(params);
  if (!resolved) return {};

  const { locale, template } = resolved;
  const title = template.title[locale];
  const description = template.description[locale];

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/templates/${template.slug}`,
      languages: languageAlternates(template.slug),
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `/${locale}/templates/${template.slug}`,
    },
  };
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolved = await resolveParams(params);
  if (!resolved) notFound();

  const { locale, template } = resolved;
  const dict = dictionaries[locale];
  const isFree = template.priceMad === 0;
  const related = getRelatedTemplates(template);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: template.title[locale],
    description: template.description[locale],
    sku: template.id,
    category: template.categoryLabel[locale],
    brand: {
      "@type": "Brand",
      name: "ProTemplates",
    },
    offers: {
      "@type": "Offer",
      price: template.priceMad,
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/${locale}/templates/${template.slug}`),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict["nav.catalog"],
        item: absoluteUrl(`/${locale}`),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: template.title[locale],
        item: absoluteUrl(`/${locale}/templates/${template.slug}`),
      },
    ],
  };

  return (
    <>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500">
              <li>
                <Link
                  href={`/${locale}?filter=${template.category}#catalog`}
                  className="transition-colors hover:text-blue-600"
                >
                  {dict["detail.back"]}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </li>
              <li aria-current="page" className="text-slate-800">
                {template.title[locale]}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <TemplatePreviewPanel template={template} />
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
                    {template.categoryLabel[locale]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                    <CirclePlay aria-hidden="true" className="h-3.5 w-3.5" />
                    {dict["preview.tutorial"]}
                  </span>
                </div>

                <h1 className="mt-4 text-balance text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  {template.title[locale]}
                </h1>

                <div className="mt-3 flex flex-wrap items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-blue-600">
                    {isFree
                      ? `${formatMad(0, locale)} · ${dict["card.free"]}`
                      : formatMad(template.priceMad, locale)}
                  </span>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                    {dict["preview.oneTime"]}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {template.description[locale]}
                </p>

                <div className="mt-6">
                  <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {dict["detail.tools"]}
                  </h2>
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

                <div className="mt-6">
                  <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {dict["detail.includes"]}
                  </h2>
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

                <div className="mt-8 border-t border-slate-200 pt-5">
                  <AddToCartButton template={template} />
                  <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-500">
                    <Zap aria-hidden="true" className="h-3 w-3 text-amber-500" />
                    {dict["detail.instant"]}
                  </p>
                </div>

                <ul className="mt-5 space-y-2 rounded-xl bg-slate-50 p-4 text-[11px] font-semibold text-slate-600">
                  <li className="flex items-center gap-2">
                    <ShieldCheck
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-emerald-600"
                    />
                    {dict["detail.guarantee"]}
                  </li>
                  <li className="flex items-center gap-2">
                    <Languages
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-blue-600"
                    />
                    {dict["card.bilingual"]}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-slate-200 bg-white py-16"
        aria-labelledby="related-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="related-title"
            className="mb-8 text-2xl font-extrabold text-slate-900 sm:text-3xl"
          >
            {dict["detail.related"]}
          </h2>
          <RelatedTemplates templates={related} />
        </div>
      </section>

      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
