import type { MetadataRoute } from "next";

import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";
import { templates } from "@/lib/templates";

function alternates(path: string) {
  return Object.fromEntries([
    ...LOCALES.map((locale) => [locale, `${SITE_URL}/${locale}${path}`]),
    ["x-default", `${SITE_URL}/${DEFAULT_LOCALE}${path}`],
  ]);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const homePages: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
    alternates: { languages: alternates("") },
  }));

  const templatePages: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    templates.map((template) => ({
      url: `${SITE_URL}/${locale}/templates/${template.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages: alternates(`/templates/${template.slug}`) },
    })),
  );

  return [...homePages, ...templatePages];
}
