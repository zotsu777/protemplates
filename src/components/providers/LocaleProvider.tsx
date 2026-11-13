"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

import { getDirection } from "@/lib/i18n/config";
import {
  interpolate,
  type Dictionary,
  type TranslationKey,
} from "@/lib/i18n/dictionaries";
import type { Direction, Locale } from "@/types/catalog";

interface LocaleContextValue {
  readonly locale: Locale;
  readonly dir: Direction;
  readonly dictionary: Dictionary;
  readonly t: (
    key: TranslationKey,
    vars?: Record<string, string | number>,
  ) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
}) {
  const value = useMemo<LocaleContextValue>(() => {
    return {
      locale,
      dir: getDirection(locale),
      dictionary,
      t: (key, vars) => interpolate(dictionary[key] ?? key, vars),
    };
  }, [locale, dictionary]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useI18n(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useI18n must be used inside <LocaleProvider>");
  }
  return context;
}
