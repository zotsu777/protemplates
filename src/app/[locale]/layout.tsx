import type { Metadata, Viewport } from "next";
import { Cairo, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { CartDrawer } from "@/components/cart/CartDrawer";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AppProviders } from "@/components/providers/AppProviders";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  DEFAULT_LOCALE,
  LOCALES,
  OG_LOCALES,
  getDirection,
  isLocale,
} from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { SITE_NAME, SITE_URL } from "@/lib/site";

import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
  colorScheme: "light",
};

function languageAlternates(path: string) {
  return Object.fromEntries([
    ...LOCALES.map((locale) => [locale, `/${locale}${path}`]),
    ["x-default", `/${DEFAULT_LOCALE}${path}`],
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = dictionaries[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict["meta.title"],
      template: `%s · ${SITE_NAME}`,
    },
    description: dict["meta.description"],
    applicationName: SITE_NAME,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(""),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALES[locale],
      url: `/${locale}`,
      title: dict["meta.title"],
      description: dict["meta.description"],
    },
    twitter: {
      card: "summary_large_image",
      title: dict["meta.title"],
      description: dict["meta.description"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = dictionaries[locale];

  const organisation = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: dict["meta.description"],
    areaServed: "MA",
    knowsLanguage: ["ar", "fr", "en"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: locale,
  };

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      className={`${inter.variable} ${cairo.variable} scroll-smooth`}
    >
      <body className="min-h-dvh bg-slate-50 font-sans text-slate-900 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          {dict["a11y.skip"]}
        </a>

        <AppProviders locale={locale} dictionary={dict}>
          <Header />
          <main id="main">{children}</main>
          <Footer locale={locale} />
          <CartDrawer />
        </AppProviders>

        <JsonLd data={organisation} />
        <JsonLd data={website} />
      </body>
    </html>
  );
}
