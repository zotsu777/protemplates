import type { LocalizedString } from "@/types/catalog";
import type { TranslationKey } from "@/lib/i18n/dictionaries";

export type ContentIcon =
  | "tag"
  | "languages"
  | "wallet"
  | "bolt"
  | "gem"
  | "play"
  | "card";

export interface TrustPoint {
  readonly icon: ContentIcon;
  readonly titleKey: TranslationKey;
  readonly subKey: TranslationKey;
}

export const TRUST_POINTS: readonly TrustPoint[] = [
  {
    icon: "tag",
    titleKey: "trust.price.title",
    subKey: "trust.price.sub",
  },
  {
    icon: "languages",
    titleKey: "trust.bilingual.title",
    subKey: "trust.bilingual.sub",
  },
  {
    icon: "wallet",
    titleKey: "trust.payment.title",
    subKey: "trust.payment.sub",
  },
  {
    icon: "bolt",
    titleKey: "trust.speed.title",
    subKey: "trust.speed.sub",
  },
];

export interface WhyPillar {
  readonly icon: ContentIcon;
  readonly title: LocalizedString;
  readonly body: LocalizedString;
}

export const WHY_PILLARS: readonly WhyPillar[] = [
  {
    icon: "gem",
    title: {
      en: "Agency-grade design quality",
      fr: "Une qualité de design d’agence",
      ar: "جودة تصميم بمعايير الوكالات",
    },
    body: {
      en: "Crafted by Moroccan designers and developers in Figma, VS Code and WordPress. Clean typography, responsive grids and full file ownership — zero platform lock-in.",
      fr: "Réalisé par des designers et développeurs marocains sur Figma, VS Code et WordPress. Typographie soignée, grilles responsives et propriété complète des fichiers — aucune dépendance à une plateforme.",
      ar: "من إبداع مصممين ومطورين مغاربة على Figma وVS Code وWordPress. طباعة أنيقة وشبكات متجاوبة وملكية كاملة للملفات — دون الارتباط بأي منصة.",
    },
  },
  {
    icon: "play",
    title: {
      en: "Under 30-min edit + written guides",
      fr: "Modifiable en 30 min + guides écrits",
      ar: "تعديل في 30 دقيقة + أدلة مكتوبة",
    },
    body: {
      en: "No technical expertise required. Each template ships with short step-by-step tutorials in Darija/Arabic and French, so you can customise and publish fast.",
      fr: "Aucune compétence technique requise. Chaque template inclut des tutoriels courts et progressifs en darija/arabe et en français pour personnaliser et publier rapidement.",
      ar: "بدون الحاجة لخبرة تقنية. كل قالب يأتي بدروس قصيرة خطوة بخطوة بالدارجة/العربية والفرنسية لتخصيصه ونشره بسرعة.",
    },
  },
  {
    icon: "card",
    title: {
      en: "Local MAD payment & native RTL",
      fr: "Paiement local en MAD & RTL natif",
      ar: "دفع محلي بالدرهم ودعم RTL أصلي",
    },
    body: {
      en: "Pay in MAD with CMI cards, CIH/Attijariwafa transfer or CashPlus — no international debit card needed. Engineered natively for Arabic (RTL) and French.",
      fr: "Payez en MAD par carte CMI, virement CIH/Attijariwafa ou CashPlus — sans carte bancaire internationale. Conçu nativement pour l’arabe (RTL) et le français.",
      ar: "ادفع بالدرهم عبر بطاقة CMI أو تحويل CIH/التجاري وفا بنك أو CashPlus — دون الحاجة لبطاقة دولية. مصمم أصلاً للعربية (RTL) والفرنسية.",
    },
  },
];

export interface WorkflowStep {
  readonly title: LocalizedString;
  readonly body: LocalizedString;
}

export const WORKFLOW_STEPS: readonly WorkflowStep[] = [
  {
    title: {
      en: "Choose & pay in MAD",
      fr: "Choisissez et payez en MAD",
      ar: "اختر وادفع بالدرهم",
    },
    body: {
      en: "Pick a template and pay locally via CMI, bank transfer or CashPlus.",
      fr: "Choisissez un template et payez localement par CMI, virement ou CashPlus.",
      ar: "اختر قالباً وادفع محلياً عبر CMI أو تحويل بنكي أو CashPlus.",
    },
  },
  {
    title: {
      en: "Follow the 10-minute guide",
      fr: "Suivez le guide de 10 minutes",
      ar: "اتبع الدليل في 10 دقائق",
    },
    body: {
      en: "Watch the AR/FR walkthrough to swap text, colours and logo.",
      fr: "Suivez le tutoriel AR/FR pour remplacer textes, couleurs et logo.",
      ar: "شاهد الشرح بالعربية والفرنسية لتبديل النصوص والألوان والشعار.",
    },
  },
  {
    title: {
      en: "Export or go live",
      fr: "Exportez ou mettez en ligne",
      ar: "صدّر أو أطلق موقعك",
    },
    body: {
      en: "Present your PFE, apply for jobs or launch your business site.",
      fr: "Présentez votre PFE, postulez ou lancez le site de votre entreprise.",
      ar: "اعرض مشروع تخرجك أو قدّم للوظائف أو أطلق موقع مشروعك.",
    },
  },
];
