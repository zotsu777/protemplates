import type { Locale } from "@/types/catalog";

const LOCALE_TAGS: Record<Locale, string> = {
  en: "en-MA",
  fr: "fr-MA",
  ar: "ar-MA",
};

/**
 * Formats a price in Moroccan dirhams. Prices are stored as whole dirhams,
 * which matches how the products are sold (49, 79, 149 MAD — no centimes).
 */
export function formatMad(amount: number, locale: Locale = "en"): string {
  const value = new Intl.NumberFormat(LOCALE_TAGS[locale], {
    maximumFractionDigits: 0,
  }).format(amount);

  return `${value} MAD`;
}

/** "49–79 MAD" style range used by the pricing tiers. */
export function formatMadRange(min: number, max: number, locale: Locale): string {
  const format = new Intl.NumberFormat(LOCALE_TAGS[locale], {
    maximumFractionDigits: 0,
  });
  return `${format.format(min)}–${format.format(max)} MAD`;
}
