import { notFound } from "next/navigation";
import { Suspense } from "react";

import { Catalog } from "@/components/catalog/Catalog";
import { CatalogSkeleton } from "@/components/catalog/CatalogSkeleton";
import { Hero } from "@/components/hero/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { WhyUs } from "@/components/sections/WhyUs";
import { isLocale } from "@/lib/i18n/config";
import { templates } from "@/lib/templates";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <Hero locale={locale} />

      {/* Catalog reads `?filter=` on the client, so it needs its own Suspense
          boundary to keep the page statically rendered. */}
      <Suspense fallback={<CatalogSkeleton />}>
        <Catalog templates={templates} />
      </Suspense>

      <Pricing locale={locale} />
      <WhyUs locale={locale} />
      <HowItWorks locale={locale} />
    </>
  );
}
