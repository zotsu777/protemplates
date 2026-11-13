import type {
  LocalizedList,
  LocalizedString,
  TemplateCategory,
} from "@/types/catalog";

export interface PricingTier {
  readonly id: string;
  readonly eyebrow: LocalizedString;
  readonly name: LocalizedString;
  readonly price: string;
  /** Dictionary key for the price suffix, e.g. "/ forever". */
  readonly priceSuffixKey: "pricing.perForever" | null;
  readonly description: LocalizedString;
  readonly features: LocalizedList;
  readonly cta: {
    readonly label: LocalizedString;
    readonly filter?: TemplateCategory;
  };
  readonly variant: "muted" | "light" | "dark";
  readonly badgeKey: "pricing.bestValue" | null;
}

export const PRICING_TIERS: readonly PricingTier[] = [
  {
    id: "free",
    eyebrow: { en: "Freebies", fr: "Gratuits", ar: "مجانية" },
    name: {
      en: "Free Starter Pack",
      fr: "Pack découverte",
      ar: "الحزمة المجانية",
    },
    price: "0",
    priceSuffixKey: "pricing.perForever",
    description: {
      en: "Test our Arabic RTL and French quality before you buy.",
      fr: "Testez la qualité de nos fichiers arabe RTL et français avant d’acheter.",
      ar: "اختبر جودة ملفاتنا العربية (RTL) والفرنسية قبل الشراء.",
    },
    features: {
      en: [
        "1 bilingual student CV",
        "Auto-entrepreneur invoice",
        "Quick-start video guide",
      ],
      fr: [
        "1 CV étudiant bilingue",
        "Facture auto-entrepreneur",
        "Guide vidéo de démarrage",
      ],
      ar: [
        "سيرة ذاتية واحدة للطالب ثنائية اللغة",
        "فاتورة المقاول الذاتي",
        "دليل فيديو للبدء السريع",
      ],
    },
    cta: {
      label: {
        en: "Download freebies",
        fr: "Télécharger les gratuits",
        ar: "تحميل المجاني",
      },
      filter: "freebies",
    },
    variant: "muted",
    badgeKey: null,
  },
  {
    id: "student",
    eyebrow: {
      en: "Most popular for students",
      fr: "Le plus choisi par les étudiants",
      ar: "الأكثر اختياراً من الطلبة",
    },
    name: {
      en: "Student & Individual",
      fr: "Étudiant & indépendant",
      ar: "الطالب والفرد",
    },
    price: "49–79",
    priceSuffixKey: null,
    description: {
      en: "Stand out in PFE defenses and job interviews.",
      fr: "Démarquez-vous en soutenance PFE et en entretien.",
      ar: "تميّز في مناقشة مشروع التخرج ومقابلات العمل.",
    },
    features: {
      en: [
        "ATS-friendly CVs (AR + FR)",
        "PFE & startup pitch decks",
        "Legal contracts & quotes",
        "Editable in under 30 minutes",
      ],
      fr: [
        "CV compatibles ATS (AR + FR)",
        "Pitch decks PFE & startup",
        "Contrats & devis juridiques",
        "Modifiable en moins de 30 minutes",
      ],
      ar: [
        "سير ذاتية متوافقة مع ATS (عربي + فرنسي)",
        "عروض PFE والشركات الناشئة",
        "عقود وعروض أسعار قانونية",
        "قابلة للتعديل في أقل من 30 دقيقة",
      ],
    },
    cta: {
      label: {
        en: "Browse individual docs",
        fr: "Voir les documents",
        ar: "تصفح الوثائق الفردية",
      },
      filter: "cv",
    },
    variant: "light",
    badgeKey: null,
  },
  {
    id: "web",
    eyebrow: {
      en: "Freelancers & TPE",
      fr: "Freelances & TPE",
      ar: "المستقلون والمقاولات الصغرى",
    },
    name: {
      en: "Web & Landing Pages",
      fr: "Sites & landing pages",
      ar: "المواقع وصفحات الهبوط",
    },
    price: "99–149",
    priceSuffixKey: null,
    description: {
      en: "Full source-code ownership with zero platform lock-in.",
      fr: "Le code source vous appartient, sans dépendance à une plateforme.",
      ar: "ملكية كاملة للكود المصدري دون الارتباط بأي منصة.",
    },
    features: {
      en: [
        "Responsive HTML / WordPress",
        "Built-in Arabic RTL switcher",
        "WhatsApp order integration",
        "Deployment tutorial included",
      ],
      fr: [
        "HTML / WordPress responsive",
        "Sélecteur arabe RTL intégré",
        "Intégration de commande WhatsApp",
        "Tutoriel de déploiement inclus",
      ],
      ar: [
        "HTML / WordPress متجاوب",
        "مبدّل لغة عربي (RTL) مدمج",
        "ربط الطلبات عبر واتساب",
        "درس نشر مرفق",
      ],
    },
    cta: {
      label: {
        en: "Explore web templates",
        fr: "Explorer les sites web",
        ar: "تصفح قوالب المواقع",
      },
      filter: "web",
    },
    variant: "dark",
    badgeKey: "pricing.bestValue",
  },
  {
    id: "bundle",
    eyebrow: {
      en: "Complete launch kit",
      fr: "Kit de lancement complet",
      ar: "حزمة إطلاق متكاملة",
    },
    name: {
      en: "Startup Bundle",
      fr: "Pack startup",
      ar: "حزمة الشركة الناشئة",
    },
    price: "199–299",
    priceSuffixKey: null,
    description: {
      en: "Everything a Moroccan TPE needs to launch professionally.",
      fr: "Tout ce dont une TPE marocaine a besoin pour se lancer professionnellement.",
      ar: "كل ما تحتاجه مقاولة مغربية صغيرة للانطلاق باحترافية.",
    },
    features: {
      en: [
        "Full showcase website",
        "Investor pitch deck (20 slides)",
        "Brand kit + social templates",
        "Moroccan invoice & quote pack",
      ],
      fr: [
        "Site vitrine complet",
        "Pitch deck investisseurs (20 slides)",
        "Kit de marque + templates réseaux sociaux",
        "Pack factures & devis marocains",
      ],
      ar: [
        "موقع تعريفي متكامل",
        "عرض للمستثمرين (20 شريحة)",
        "حزمة هوية بصرية + قوالب شبكات اجتماعية",
        "حزمة فواتير وعروض أسعار مغربية",
      ],
    },
    cta: {
      label: {
        en: "View startup bundles",
        fr: "Voir les packs startup",
        ar: "عرض حزم الشركات الناشئة",
      },
      filter: "bundle",
    },
    variant: "light",
    badgeKey: null,
  },
];
