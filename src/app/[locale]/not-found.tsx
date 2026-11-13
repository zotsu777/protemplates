"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dictionaries";

export default function LocaleNotFound() {
  const params = useParams<{ locale?: string }>();
  const locale =
    params?.locale && isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const dict = dictionaries[locale];

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-6xl font-extrabold text-slate-200">404</p>
      <h1 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
        {dict["notFound.title"]}
      </h1>
      <p className="mt-2 text-sm text-slate-600">{dict["notFound.body"]}</p>
      <Link
        href={`/${locale}?filter=all#catalog`}
        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4 rtl:rotate-180" />
        {dict["notFound.cta"]}
      </Link>
    </section>
  );
}
