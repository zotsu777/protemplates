"use client";

import type { ReactNode } from "react";

import { CartProvider } from "@/components/providers/CartProvider";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/types/catalog";

export function AppProviders({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
}) {
  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <ToastProvider>
        <CartProvider>{children}</CartProvider>
      </ToastProvider>
    </LocaleProvider>
  );
}
