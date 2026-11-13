export const LOCALES = ["en", "fr", "ar"] as const;

export type Locale = (typeof LOCALES)[number];

/** Locales rendered right-to-left. */
export const RTL_LOCALES: readonly Locale[] = ["ar"];

export type Direction = "ltr" | "rtl";

/** A value translated into every supported locale. */
export type LocalizedString = Record<Locale, string>;

/** A list translated into every supported locale. */
export type LocalizedList = Record<Locale, readonly string[]>;

export type TemplateCategory =
  | "freebies"
  | "cv"
  | "pitch"
  | "web"
  | "admin"
  | "bundle";

export type CatalogFilter = "all" | TemplateCategory;

export interface TemplatePreviewContent {
  readonly badge: string;
  readonly heading: string;
  readonly sub: string;
  readonly factOne: string;
  readonly factTwo: string;
}

export interface Template {
  readonly id: string;
  readonly slug: string;
  readonly category: TemplateCategory;
  /** Price in whole Moroccan dirhams. Kept in cents-free integers for MAD. */
  readonly priceMad: number;
  readonly tools: readonly string[];
  /** Literal Tailwind gradient classes so the scanner can see them. */
  readonly gradient: { readonly from: string; readonly to: string };
  readonly title: LocalizedString;
  readonly description: LocalizedString;
  readonly includes: LocalizedList;
  readonly categoryLabel: LocalizedString;
  readonly previews: {
    readonly fr: TemplatePreviewContent;
    readonly ar: TemplatePreviewContent;
  };
}

export type PaymentMethodId = "cmi" | "bank-transfer" | "cashplus";

export interface OrderLine {
  readonly templateId: string;
  readonly title: LocalizedString;
  readonly priceMad: number;
}

export interface Order {
  readonly reference: string;
  readonly totalMad: number;
  readonly currency: "MAD";
  readonly paymentMethod: PaymentMethodId;
  readonly lines: readonly OrderLine[];
  readonly createdAt: string;
}
