import type { Locale } from "@/types/catalog";

/**
 * UI chrome strings. Product content lives in `lib/templates.ts` so that
 * translators can work on catalog copy independently from interface copy.
 *
 * `en` is the source of truth: its shape defines the Dictionary type, so a
 * missing or misspelled key in `fr` / `ar` fails the build.
 */
const en = {
  "meta.description":
    "Ready-to-edit CVs, PFE pitch decks, websites and Moroccan admin documents. Native Arabic (RTL) and French support with local MAD checkout — editable in under 30 minutes.",

  "a11y.skip": "Skip to content",
  "a11y.openMenu": "Open menu",
  "a11y.closeMenu": "Close menu",
  "a11y.cartCount": "{count} items in cart",

  "brand.market": "MA",

  "nav.catalog": "Catalog",
  "nav.pricing": "Pricing",
  "nav.why": "Why us",
  "nav.how": "How it works",
  "nav.cart": "Cart",

  "lang.label": "Language",

  "hero.badge": "Built for Moroccan students, freelancers & TPEs",
  "hero.titleBefore": "Professional digital templates starting at ",
  "hero.titleHighlight": "49 MAD",
  "hero.titleAfter": "",
  "hero.subtitle":
    "Ready-to-edit CVs, PFE pitch decks, websites and Moroccan admin documents. Native Arabic (RTL) and French support, with local MAD checkout — editable in under 30 minutes.",
  "hero.primary": "Explore templates",
  "hero.secondary": "Get the free starter pack",

  "trust.price.title": "From 49 MAD",
  "trust.price.sub": "Up to 80% cheaper",
  "trust.bilingual.title": "Arabic (RTL) & FR",
  "trust.bilingual.sub": "100% bilingual ready",
  "trust.payment.title": "Local MAD payment",
  "trust.payment.sub": "CMI, bank & CashPlus",
  "trust.speed.title": "Edit in under 30 min",
  "trust.speed.sub": "Step-by-step guides",

  "catalog.eyebrow": "Curated library",
  "catalog.title": "Ready-to-use digital templates",
  "catalog.subtitle":
    "Every template ships with clean source files, lifetime updates and beginner video tutorials in Arabic and French.",
  "catalog.showing": "Showing {shown} of {total} templates",
  "catalog.empty": "No templates in this category yet.",
  "catalog.reset": "Show all templates",
  "catalog.viewAll": "Browse the full catalog",

  "category.all": "All templates",
  "category.freebies": "Freebies",
  "category.cv": "CVs & resumes",
  "category.pitch": "Pitch decks",
  "category.web": "Websites & landing pages",
  "category.admin": "Admin & legal docs",
  "category.bundle": "Startup bundles",

  "card.preview": "Preview",
  "card.add": "Add to cart",
  "card.addFree": "Add for free",
  "card.inCart": "In cart",
  "card.bilingual": "AR (RTL) + FR",
  "card.editTime": "Under 30 min edit",
  "card.free": "Free",
  "card.viewDetails": "View details",

  "preview.title": "Interactive layout preview",
  "preview.ltr": "LTR (Français)",
  "preview.rtl": "RTL (العربية)",
  "preview.tools": "Compatible tools",
  "preview.includes": "What’s included",
  "preview.add": "Add to cart",
  "preview.inCart": "In cart",
  "preview.instant": "Instant download after local MAD payment",
  "preview.oneTime": "One-time payment",
  "preview.close": "Close preview",
  "preview.ready": "Ready to export",
  "preview.footerLtr": "Native left-to-right alignment (LTR)",
  "preview.footerRtl": "Native right-to-left alignment (RTL)",
  "preview.tutorial": "AR/FR video tutorial included",
  "preview.free": "Free",

  "cart.title": "Your cart",
  "cart.close": "Close cart",
  "cart.emptyTitle": "Your cart is empty",
  "cart.emptyBody":
    "Explore our CVs, PFE pitch decks and websites, or grab the free starter pack.",
  "cart.emptyCta": "Browse freebies",
  "cart.paymentLabel": "Local Moroccan payment method",
  "cart.total": "Total",
  "cart.checkout": "Complete instant order",
  "cart.processing": "Processing…",
  "cart.remove": "Remove {title} from cart",
  "cart.continue": "Continue browsing",
  "cart.note": "One-time payment · lifetime updates",

  "payment.cmi": "CMI card",
  "payment.cmiHint": "Moroccan bank cards",
  "payment.bank": "Bank transfer",
  "payment.bankHint": "CIH / Attijariwafa",
  "payment.cash": "CashPlus",
  "payment.cashHint": "CashPlus / Wafacash",

  "checkout.successBadge": "Order confirmed",
  "checkout.successTitle": "Your files are ready",
  "checkout.successBody":
    "Paid {total} via {method}. Download your source files and AR/FR tutorial guides below.",
  "checkout.download": "Download",
  "checkout.fileHint": "ZIP source + AR/FR video guide",
  "checkout.error": "Something went wrong. Please try again.",

  "toast.added": "“{title}” added to cart",
  "toast.exists": "“{title}” is already in your cart",
  "toast.download": "Preparing {file}…",
  "toast.partner":
    "Partnership inquiry opened — contact clubs@protemplates.ma",

  "pricing.eyebrow": "Transparent local pricing",
  "pricing.title": "Built for student & TPE budgets",
  "pricing.subtitle":
    "Pay once in Moroccan dirhams. No hidden subscriptions, no foreign-currency bank fees.",
  "pricing.bestValue": "Best value",
  "pricing.perForever": "/ forever",

  "why.eyebrow": "Our competitive edge",
  "why.title": "Envato quality · Canva ease · 100% Moroccan fit",
  "how.eyebrow": "Fast workflow",
  "how.title": "From download to launch in three steps",

  "footer.tagline":
    "Empowering Moroccan students, auto-entrepreneurs and micro-enterprises with accessible, high-converting digital templates in Arabic (RTL) and French.",
  "footer.marketplace": "Marketplace",
  "footer.campus": "Campus & incubators",
  "footer.campusBody":
    "Running a university club or startup incubator in Morocco? Partner with us for free student workshops and promo codes.",
  "footer.partner": "Partner with us",
  "footer.rights": "© {year} ProTemplates Morocco. All rights reserved.",
  "footer.verified": "CMI & local MAD verified",
  "footer.original": "100% original IP",
  "footer.social": "ProTemplates on {network}",
  "footer.freePack": "Free starter pack (0 MAD)",
  "footer.cvDecks": "CVs & PFE pitch decks",
  "footer.webTiers": "TPE websites & landing pages",
  "footer.adminDocs": "Moroccan admin & invoices",

  "detail.back": "All templates",
  "detail.overview": "Overview",
  "detail.includes": "What’s included",
  "detail.tools": "Works with",
  "detail.category": "Category",
  "detail.related": "You may also like",
  "detail.add": "Add to cart",
  "detail.addFree": "Download for free",
  "detail.instant": "Instant download after payment",
  "detail.guarantee": "Lifetime updates · full source files",

  "notFound.title": "Page not found",
  "notFound.body":
    "The page you’re looking for doesn’t exist or has moved.",
  "notFound.cta": "Back to the catalog",
};

export type Dictionary = typeof en;
export type TranslationKey = keyof Dictionary;

const fr: Dictionary = {
  "meta.description":
    "CV, pitch decks PFE, sites web et documents administratifs marocains prêts à modifier. Support natif arabe (RTL) et français, paiement local en MAD, personnalisable en moins de 30 minutes.",

  "a11y.skip": "Aller au contenu",
  "a11y.openMenu": "Ouvrir le menu",
  "a11y.closeMenu": "Fermer le menu",
  "a11y.cartCount": "{count} articles dans le panier",

  "brand.market": "MA",

  "nav.catalog": "Catalogue",
  "nav.pricing": "Tarifs",
  "nav.why": "Avantages",
  "nav.how": "Fonctionnement",
  "nav.cart": "Panier",

  "lang.label": "Langue",

  "hero.badge": "Conçu pour les étudiants, freelances et TPE au Maroc",
  "hero.titleBefore": "Templates digitaux professionnels dès ",
  "hero.titleHighlight": "49 MAD",
  "hero.titleAfter": "",
  "hero.subtitle":
    "CV, pitch decks PFE, sites web et documents administratifs marocains prêts à modifier. Support natif arabe (RTL) et français, paiement local en MAD, personnalisable en moins de 30 minutes.",
  "hero.primary": "Explorer les templates",
  "hero.secondary": "Pack découverte gratuit",

  "trust.price.title": "Dès 49 MAD",
  "trust.price.sub": "Jusqu’à 80% moins cher",
  "trust.bilingual.title": "Arabe (RTL) & FR",
  "trust.bilingual.sub": "100% bilingue",
  "trust.payment.title": "Paiement en MAD",
  "trust.payment.sub": "CMI, virement & CashPlus",
  "trust.speed.title": "Prêt en moins de 30 min",
  "trust.speed.sub": "Tutoriels pas à pas",

  "catalog.eyebrow": "Bibliothèque sélectionnée",
  "catalog.title": "Templates digitaux prêts à l’emploi",
  "catalog.subtitle":
    "Chaque template inclut des fichiers sources propres, les mises à jour à vie et des tutoriels vidéo pour débutants en arabe et en français.",
  "catalog.showing": "Affichage de {shown} templates sur {total}",
  "catalog.empty": "Aucun template dans cette catégorie pour le moment.",
  "catalog.reset": "Afficher tous les templates",
  "catalog.viewAll": "Voir tout le catalogue",

  "category.all": "Tous les templates",
  "category.freebies": "Gratuits",
  "category.cv": "CV & lettres",
  "category.pitch": "Pitch decks",
  "category.web": "Sites & landing pages",
  "category.admin": "Docs admin & juridiques",
  "category.bundle": "Packs startup",

  "card.preview": "Aperçu",
  "card.add": "Ajouter au panier",
  "card.addFree": "Ajouter gratuitement",
  "card.inCart": "Dans le panier",
  "card.bilingual": "AR (RTL) + FR",
  "card.editTime": "Modifiable en moins de 30 min",
  "card.free": "Gratuit",
  "card.viewDetails": "Voir le détail",

  "preview.title": "Aperçu de mise en page interactif",
  "preview.ltr": "LTR (Français)",
  "preview.rtl": "RTL (العربية)",
  "preview.tools": "Outils compatibles",
  "preview.includes": "Ce qui est inclus",
  "preview.add": "Ajouter au panier",
  "preview.inCart": "Dans le panier",
  "preview.instant": "Téléchargement immédiat après paiement en MAD",
  "preview.oneTime": "Paiement unique",
  "preview.close": "Fermer l’aperçu",
  "preview.ready": "Prêt à exporter",
  "preview.footerLtr": "Alignement natif de gauche à droite (LTR)",
  "preview.footerRtl": "Alignement natif de droite à gauche (RTL)",
  "preview.tutorial": "Tutoriel vidéo AR/FR inclus",
  "preview.free": "Gratuit",

  "cart.title": "Votre panier",
  "cart.close": "Fermer le panier",
  "cart.emptyTitle": "Votre panier est vide",
  "cart.emptyBody":
    "Découvrez nos CV, pitch decks PFE et sites web, ou récupérez le pack découverte gratuit.",
  "cart.emptyCta": "Voir les gratuits",
  "cart.paymentLabel": "Moyen de paiement marocain",
  "cart.total": "Total",
  "cart.checkout": "Finaliser la commande",
  "cart.processing": "Traitement…",
  "cart.remove": "Retirer {title} du panier",
  "cart.continue": "Continuer la navigation",
  "cart.note": "Paiement unique · mises à jour à vie",

  "payment.cmi": "Carte CMI",
  "payment.cmiHint": "Cartes bancaires marocaines",
  "payment.bank": "Virement bancaire",
  "payment.bankHint": "CIH / Attijariwafa",
  "payment.cash": "CashPlus",
  "payment.cashHint": "CashPlus / Wafacash",

  "checkout.successBadge": "Commande confirmée",
  "checkout.successTitle": "Vos fichiers sont prêts",
  "checkout.successBody":
    "{total} réglés via {method}. Téléchargez vos fichiers sources et les guides vidéo AR/FR ci-dessous.",
  "checkout.download": "Télécharger",
  "checkout.fileHint": "Source ZIP + guide vidéo AR/FR",
  "checkout.error": "Une erreur est survenue. Merci de réessayer.",

  "toast.added": "« {title} » ajouté au panier",
  "toast.exists": "« {title} » est déjà dans votre panier",
  "toast.download": "Préparation de {file}…",
  "toast.partner":
    "Demande de partenariat ouverte — contactez clubs@protemplates.ma",

  "pricing.eyebrow": "Tarification locale transparente",
  "pricing.title": "Pensé pour les budgets étudiants & TPE",
  "pricing.subtitle":
    "Payez une seule fois en dirhams. Aucun abonnement caché, aucuns frais de change.",
  "pricing.bestValue": "Meilleur rapport qualité-prix",
  "pricing.perForever": "/ à vie",

  "why.eyebrow": "Notre différence",
  "why.title": "Qualité Envato · Simplicité Canva · 100% adapté au Maroc",
  "how.eyebrow": "Workflow rapide",
  "how.title": "Du téléchargement au lancement en trois étapes",

  "footer.tagline":
    "Nous donnons aux étudiants, auto-entrepreneurs et TPE marocains des templates digitaux accessibles et performants, en arabe (RTL) et en français.",
  "footer.marketplace": "Marketplace",
  "footer.campus": "Campus & incubateurs",
  "footer.campusBody":
    "Vous animez un club universitaire ou un incubateur au Maroc ? Devenez partenaire pour des ateliers étudiants gratuits et des codes promo.",
  "footer.partner": "Devenir partenaire",
  "footer.rights": "© {year} ProTemplates Morocco. Tous droits réservés.",
  "footer.verified": "CMI & paiement MAD vérifiés",
  "footer.original": "100% propriété intellectuelle originale",
  "footer.social": "ProTemplates sur {network}",
  "footer.freePack": "Pack découverte gratuit (0 MAD)",
  "footer.cvDecks": "CV & pitch decks PFE",
  "footer.webTiers": "Sites TPE & landing pages",
  "footer.adminDocs": "Documents admin & factures marocains",

  "detail.back": "Tous les templates",
  "detail.overview": "Présentation",
  "detail.includes": "Ce qui est inclus",
  "detail.tools": "Compatible avec",
  "detail.category": "Catégorie",
  "detail.related": "Vous aimerez aussi",
  "detail.add": "Ajouter au panier",
  "detail.addFree": "Télécharger gratuitement",
  "detail.instant": "Téléchargement immédiat après paiement",
  "detail.guarantee": "Mises à jour à vie · fichiers sources complets",

  "notFound.title": "Page introuvable",
  "notFound.body": "La page que vous cherchez n’existe pas ou a été déplacée.",
  "notFound.cta": "Retour au catalogue",
};

const ar: Dictionary = {
  "meta.description":
    "سير ذاتية وعروض مشاريع تخرج ومواقع ووثائق إدارية مغربية جاهزة للتعديل. دعم كامل للعربية (RTL) والفرنسية مع دفع محلي بالدرهم وتعديل في أقل من 30 دقيقة.",

  "a11y.skip": "تخطي إلى المحتوى",
  "a11y.openMenu": "فتح القائمة",
  "a11y.closeMenu": "إغلاق القائمة",
  "a11y.cartCount": "{count} عناصر في السلة",

  "brand.market": "MA",

  "nav.catalog": "القوالب",
  "nav.pricing": "الأسعار",
  "nav.why": "لماذا نحن",
  "nav.how": "كيف يعمل",
  "nav.cart": "السلة",

  "lang.label": "اللغة",

  "hero.badge": "مصمم للطلبة والمستقلين والمقاولات الصغرى بالمغرب",
  "hero.titleBefore": "قوالب رقمية احترافية ابتداءً من ",
  "hero.titleHighlight": "49 درهماً",
  "hero.titleAfter": "",
  "hero.subtitle":
    "سير ذاتية وعروض مشاريع تخرج ومواقع ووثائق إدارية مغربية جاهزة للتعديل. دعم كامل للعربية (RTL) والفرنسية مع دفع محلي بالدرهم وتعديل في أقل من 30 دقيقة.",
  "hero.primary": "تصفح القوالب",
  "hero.secondary": "احصل على الحزمة المجانية",

  "trust.price.title": "ابتداءً من 49 درهماً",
  "trust.price.sub": "أرخص بنسبة تصل إلى 80%",
  "trust.bilingual.title": "عربي (RTL) وفرنسي",
  "trust.bilingual.sub": "جاهز ثنائي اللغة 100%",
  "trust.payment.title": "دفع محلي بالدرهم",
  "trust.payment.sub": "CMI وتحويل بنكي وCashPlus",
  "trust.speed.title": "تعديل في أقل من 30 دقيقة",
  "trust.speed.sub": "أدلة خطوة بخطوة",

  "catalog.eyebrow": "مكتبة مختارة بعناية",
  "catalog.title": "قوالب رقمية جاهزة للاستخدام",
  "catalog.subtitle":
    "كل قالب يأتي بملفات مصدر نظيفة وتحديثات مدى الحياة وفيديوهات تعليمية للمبتدئين بالعربية والفرنسية.",
  "catalog.showing": "عرض {shown} من {total} قالباً",
  "catalog.empty": "لا توجد قوالب في هذه الفئة بعد.",
  "catalog.reset": "عرض كل القوالب",
  "catalog.viewAll": "تصفح المكتبة كاملة",

  "category.all": "كل القوالب",
  "category.freebies": "مجانية",
  "category.cv": "سير ذاتية",
  "category.pitch": "عروض تقديمية",
  "category.web": "مواقع وصفحات هبوط",
  "category.admin": "وثائق إدارية وقانونية",
  "category.bundle": "حزم الشركات الناشئة",

  "card.preview": "معاينة",
  "card.add": "أضف إلى السلة",
  "card.addFree": "أضف مجاناً",
  "card.inCart": "في السلة",
  "card.bilingual": "عربي (RTL) + فرنسي",
  "card.editTime": "تعديل أقل من 30 دقيقة",
  "card.free": "مجاني",
  "card.viewDetails": "عرض التفاصيل",

  "preview.title": "معاينة تفاعلية للتنسيق",
  "preview.ltr": "LTR (Français)",
  "preview.rtl": "RTL (العربية)",
  "preview.tools": "الأدوات المتوافقة",
  "preview.includes": "ما يتضمنه",
  "preview.add": "أضف إلى السلة",
  "preview.inCart": "في السلة",
  "preview.instant": "تحميل فوري بعد الدفع المحلي بالدرهم",
  "preview.oneTime": "دفعة واحدة",
  "preview.close": "إغلاق المعاينة",
  "preview.ready": "جاهز للتصدير",
  "preview.footerLtr": "محاذاة أصلية من اليسار إلى اليمين (LTR)",
  "preview.footerRtl": "محاذاة أصلية من اليمين إلى اليسار (RTL)",
  "preview.tutorial": "درس فيديو بالعربية والفرنسية",
  "preview.free": "مجاني",

  "cart.title": "سلتك",
  "cart.close": "إغلاق السلة",
  "cart.emptyTitle": "سلتك فارغة",
  "cart.emptyBody":
    "تصفح السير الذاتية وعروض مشاريع التخرج والمواقع، أو احصل على الحزمة المجانية.",
  "cart.emptyCta": "تصفح المجاني",
  "cart.paymentLabel": "طريقة الدفع المغربية",
  "cart.total": "المجموع",
  "cart.checkout": "إتمام الطلب فوراً",
  "cart.processing": "جارٍ المعالجة…",
  "cart.remove": "إزالة {title} من السلة",
  "cart.continue": "متابعة التصفح",
  "cart.note": "دفعة واحدة · تحديثات مدى الحياة",

  "payment.cmi": "بطاقة CMI",
  "payment.cmiHint": "البطاقات البنكية المغربية",
  "payment.bank": "تحويل بنكي",
  "payment.bankHint": "CIH / التجاري وفا بنك",
  "payment.cash": "CashPlus",
  "payment.cashHint": "CashPlus / وفا كاش",

  "checkout.successBadge": "تم تأكيد الطلب",
  "checkout.successTitle": "ملفاتك جاهزة",
  "checkout.successBody":
    "تم دفع {total} عبر {method}. حمّل ملفاتك المصدرية وأدلة الفيديو بالعربية والفرنسية أدناه.",
  "checkout.download": "تحميل",
  "checkout.fileHint": "ملف ZIP + دليل فيديو بالعربية والفرنسية",
  "checkout.error": "حدث خطأ ما. يرجى المحاولة مرة أخرى.",

  "toast.added": "تمت إضافة «{title}» إلى السلة",
  "toast.exists": "«{title}» موجود بالفعل في سلتك",
  "toast.download": "جارٍ تجهيز {file}…",
  "toast.partner": "تم فتح نموذج الشراكة — تواصل مع clubs@protemplates.ma",

  "pricing.eyebrow": "أسعار محلية شفافة",
  "pricing.title": "مناسبة لميزانيات الطلبة والمقاولات الصغرى",
  "pricing.subtitle":
    "ادفع مرة واحدة بالدرهم المغربي. بدون اشتراكات خفية أو رسوم تحويل العملة.",
  "pricing.bestValue": "أفضل قيمة",
  "pricing.perForever": "/ مدى الحياة",

  "why.eyebrow": "ميزتنا التنافسية",
  "why.title": "جودة Envato · سهولة Canva · ملاءمة 100% للسوق المغربي",
  "how.eyebrow": "خطوات سريعة",
  "how.title": "من التحميل إلى الإطلاق في ثلاث خطوات",

  "footer.tagline":
    "نمكّن الطلبة والمقاولين الذاتيين والمقاولات الصغرى بالمغرب من قوالب رقمية عالية الأداء بالعربية (RTL) والفرنسية.",
  "footer.marketplace": "المتجر",
  "footer.campus": "الجامعات والحاضنات",
  "footer.campusBody":
    "تدير نادياً جامعياً أو حاضنة أعمال في المغرب؟ كن شريكاً واحصل على ورشات مجانية للطلبة وأكواد خصم.",
  "footer.partner": "كن شريكاً",
  "footer.rights": "© {year} ProTemplates Morocco. جميع الحقوق محفوظة.",
  "footer.verified": "CMI والدفع بالدرهم موثقان",
  "footer.original": "ملكية فكرية أصلية 100%",
  "footer.social": "ProTemplates على {network}",
  "footer.freePack": "الحزمة المجانية (0 درهم)",
  "footer.cvDecks": "السير الذاتية وعروض PFE",
  "footer.webTiers": "مواقع المقاولات الصغرى وصفحات الهبوط",
  "footer.adminDocs": "الوثائق الإدارية والفواتير المغربية",

  "detail.back": "كل القوالب",
  "detail.overview": "نظرة عامة",
  "detail.includes": "ما يتضمنه",
  "detail.tools": "يعمل مع",
  "detail.category": "الفئة",
  "detail.related": "قد يعجبك أيضاً",
  "detail.add": "أضف إلى السلة",
  "detail.addFree": "تحميل مجاني",
  "detail.instant": "تحميل فوري بعد الدفع",
  "detail.guarantee": "تحديثات مدى الحياة · ملفات مصدر كاملة",

  "notFound.title": "الصفحة غير موجودة",
  "notFound.body": "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
  "notFound.cta": "العودة إلى المكتبة",
};

export const dictionaries: Record<Locale, Dictionary> = { en, fr, ar };

export function interpolate(
  template: string,
  vars?: Record<string, string | number>,
): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}
