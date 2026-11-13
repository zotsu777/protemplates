import type {
  CatalogFilter,
  Locale,
  LocalizedString,
  Template,
  TemplateCategory,
} from "@/types/catalog";

/**
 * Product catalog. Prices are whole Moroccan dirhams.
 *
 * Copy is authored per locale rather than machine-translated, so the French
 * and Arabic storefronts read naturally instead of like localised English.
 */
export const templates: readonly Template[] = [
  {
    id: "tpl-free-cv",
    slug: "bilingual-student-cv",
    category: "freebies",
    priceMad: 0,
    tools: ["Word", "Figma"],
    gradient: { from: "from-emerald-500", to: "to-teal-600" },
    title: {
      en: "Bilingual Student CV + Cover Letter",
      fr: "CV Étudiant Bilingue + Lettre de Motivation",
      ar: "سيرة ذاتية للطالب ثنائية اللغة + رسالة تحفيزية",
    },
    categoryLabel: {
      en: "Freebie · CV",
      fr: "Gratuit · CV",
      ar: "مجاني · سيرة ذاتية",
    },
    description: {
      en: "Clean, ATS-friendly resume and motivation letter for Moroccan engineering, business and university graduates applying for internships (PFE) or first jobs.",
      fr: "Un CV et une lettre de motivation clairs et compatibles ATS, pensés pour les diplômés marocains en ingénierie, commerce et université qui postulent à un stage PFE ou à un premier emploi.",
      ar: "سيرة ذاتية ورسالة تحفيزية بتصميم نظيف ومتوافق مع أنظمة ATS، موجّهة لخريجي الهندسة والتجارة والجامعات المغاربة الباحثين عن تدريب نهاية الدراسة أو أول وظيفة.",
    },
    includes: {
      en: [
        "French (LTR) + Arabic (RTL) CV layouts",
        "Matching motivation letter",
        "12-minute Darija/French customization video",
      ],
      fr: [
        "Maquettes de CV en français (LTR) et en arabe (RTL)",
        "Lettre de motivation assortie",
        "Vidéo de personnalisation de 12 min (darija/français)",
      ],
      ar: [
        "نموذجان للسيرة الذاتية: فرنسي (LTR) وعربي (RTL)",
        "رسالة تحفيزية متناسقة مع التصميم",
        "فيديو شرح للتخصيص مدته 12 دقيقة بالدارجة والفرنسية",
      ],
    },
    previews: {
      fr: {
        badge: "CV Étudiant · Français (LTR)",
        heading: "Youssef Benali — Ingénieur Logiciel Junior",
        sub: "Stage PFE · Casablanca / Rabat · +212 6 00 00 00 00",
        factOne: "Formation : ENSIAS — Génie informatique (2023–2026)",
        factTwo: "Compétences : React, Node.js, SQL, gestion de projet agile",
      },
      ar: {
        badge: "سيرة ذاتية · العربية (RTL)",
        heading: "يوسف بنعلي — مهندس برمجيات مبتدئ",
        sub: "تدريب نهاية الدراسة · الدار البيضاء / الرباط",
        factOne: "التكوين: المدرسة الوطنية العليا للمعلوماتية وتحليل النظم",
        factTwo: "المهارات: تطوير الويب، قواعد البيانات، إدارة المشاريع",
      },
    },
  },
  {
    id: "tpl-free-invoice",
    slug: "auto-entrepreneur-invoice-kit",
    category: "freebies",
    priceMad: 0,
    tools: ["Word", "Excel"],
    gradient: { from: "from-teal-500", to: "to-emerald-600" },
    title: {
      en: "Auto-Entrepreneur Invoice & Quote Kit",
      fr: "Kit Facture & Devis Auto-Entrepreneur",
      ar: "حزمة الفاتورة وعرض السعر للمقاول الذاتي",
    },
    categoryLabel: {
      en: "Freebie · Admin",
      fr: "Gratuit · Admin",
      ar: "مجاني · إداري",
    },
    description: {
      en: "Compliant Moroccan Auto-Entrepreneur Devis and Facture templates, with built-in ICE, IF and taxe professionnelle fields.",
      fr: "Modèles de devis et de factures conformes au statut d’auto-entrepreneur marocain, avec les champs ICE, IF et taxe professionnelle intégrés.",
      ar: "نماذج عرض سعر وفاتورة متوافقة مع نظام المقاول الذاتي المغربي، مع حقول ICE وIF والضريبة المهنية مدمجة.",
    },
    includes: {
      en: [
        "Auto-calculating Excel and Word files",
        "Pre-filled ICE & auto-entrepreneur legal mentions",
        "Arabic and French dual-language headers",
      ],
      fr: [
        "Fichiers Excel et Word à calcul automatique",
        "Mentions légales ICE et auto-entrepreneur préremplies",
        "En-têtes bilingues arabe et français",
      ],
      ar: [
        "ملفات Excel وWord بحساب تلقائي",
        "بيانات قانونية جاهزة: ICE ونظام المقاول الذاتي",
        "ترويسات ثنائية اللغة بالعربية والفرنسية",
      ],
    },
    previews: {
      fr: {
        badge: "Facture Auto-Entrepreneur · FR",
        heading: "FACTURE N° 2026-014 — Services digitaux",
        sub: "ICE : 002849102000045 · Statut auto-entrepreneur",
        factOne: "Prestation : création d’identité visuelle — 2 500,00 MAD",
        factTwo: "Net à payer : 2 500,00 MAD (TVA non applicable)",
      },
      ar: {
        badge: "فاتورة المقاول الذاتي · عربي",
        heading: "فاتورة رقم 2026-014 — خدمات رقمية",
        sub: "المعرف الموحد للمقاولة (ICE): 002849102000045",
        factOne: "الخدمة: تصميم الهوية البصرية — 2,500.00 درهم",
        factTwo: "المبلغ الصافي للأداء: 2,500.00 درهم",
      },
    },
  },
  {
    id: "tpl-pfe-deck",
    slug: "pfe-defense-pitch-deck",
    category: "pitch",
    priceMad: 49,
    tools: ["PowerPoint", "Figma"],
    gradient: { from: "from-blue-600", to: "to-indigo-700" },
    title: {
      en: "PFE Graduation Defense Pitch Deck",
      fr: "Pitch Deck de Soutenance PFE",
      ar: "عرض تقديمي لمناقشة مشروع التخرج (PFE)",
    },
    categoryLabel: {
      en: "Pitch deck",
      fr: "Pitch deck",
      ar: "عرض تقديمي",
    },
    description: {
      en: "Impress your jury with a structured 18-slide defense deck covering problem, methodology, architecture, demo and results.",
      fr: "Impressionnez votre jury avec un deck de soutenance structuré de 18 slides : problématique, méthodologie, architecture, démo et résultats.",
      ar: "أبهِر لجنة المناقشة بعرض منظم من 18 شريحة يغطي الإشكالية والمنهجية والهندسة والعرض التجريبي والنتائج.",
    },
    includes: {
      en: [
        "18 widescreen 16:9 slides",
        "Separate Arabic RTL and French LTR master slides",
        "Editable architecture diagrams and Gantt charts",
      ],
      fr: [
        "18 slides 16:9 grand écran",
        "Masques dédiés RTL arabe et LTR français",
        "Diagrammes d’architecture et diagrammes de Gantt modifiables",
      ],
      ar: [
        "18 شريحة بمقاس 16:9",
        "قوالب رئيسية منفصلة للعربية (RTL) والفرنسية (LTR)",
        "مخططات هندسة معمارية ومخططات جانت قابلة للتعديل",
      ],
    },
    previews: {
      fr: {
        badge: "Soutenance PFE · 18 slides",
        heading: "Architecture & méthodologie du projet",
        sub: "Chapitre 3 : conception UML et réalisation technique",
        factOne: "01. Analyse des besoins & cahier des charges",
        factTwo: "02. Stack technique & résultats des tests",
      },
      ar: {
        badge: "عرض مشروع التخرج · 18 شريحة",
        heading: "هندسة ومنهجية إنجاز المشروع",
        sub: "الفصل الثالث: التصميم التقني ومراحل التنفيذ",
        factOne: "01. تحليل المتطلبات ودفتر التحملات",
        factTwo: "02. التقنيات المعتمدة ونتائج الاختبار",
      },
    },
  },
  {
    id: "tpl-exec-cv",
    slug: "executive-cv-linkedin-banner",
    category: "cv",
    priceMad: 59,
    tools: ["Word", "Figma"],
    gradient: { from: "from-indigo-600", to: "to-blue-700" },
    title: {
      en: "Executive Bilingual CV + LinkedIn Banner",
      fr: "CV Cadre Bilingue + Bannière LinkedIn",
      ar: "سيرة ذاتية تنفيذية ثنائية اللغة + غلاف لينكدإن",
    },
    categoryLabel: {
      en: "CV & resume",
      fr: "CV & lettre",
      ar: "سيرة ذاتية",
    },
    description: {
      en: "Designed for young professionals and freelancers in Morocco. Includes matching French/Arabic CVs and a high-contrast LinkedIn banner.",
      fr: "Conçu pour les jeunes professionnels et freelances au Maroc. Comprend des CV français/arabe assortis et une bannière LinkedIn à fort contraste.",
      ar: "مصمّمة للمهنيين الشباب والمستقلين في المغرب. تشمل سيرتين متطابقتين بالفرنسية والعربية وغلاف لينكدإن عالي التباين.",
    },
    includes: {
      en: [
        "Two-page and one-page minimalist layouts",
        "Matching LinkedIn banner (Figma)",
        "Action-verb cheat sheet in French and Arabic",
      ],
      fr: [
        "Maquettes minimalistes 1 et 2 pages",
        "Bannière LinkedIn assortie (Figma)",
        "Liste de verbes d’action en français et en arabe",
      ],
      ar: [
        "تصميمان بسيطان: صفحة واحدة وصفحتان",
        "غلاف لينكدإن متناسق (Figma)",
        "قائمة أفعال قوية بالفرنسية والعربية",
      ],
    },
    previews: {
      fr: {
        badge: "CV Professionnel · FR",
        heading: "Salma El Idrissi — Chef de Projet Digital",
        sub: "4 ans d’expérience · Marrakech · Disponible immédiatement",
        factOne:
          "Expérience : responsable acquisition & croissance e-commerce",
        factTwo: "Certifications : Google Analytics, Meta Ads, Scrum Master",
      },
      ar: {
        badge: "سيرة ذاتية احترافية · عربي",
        heading: "سلمى الإدريسي — مديرة مشاريع رقمية",
        sub: "4 سنوات من الخبرة · مراكش · متاحة للعمل فوراً",
        factOne: "الخبرة: مسؤولة التسويق الرقمي ونمو التجارة الإلكترونية",
        factTwo: "الشهادات: تحليلات جوجل، إدارة المشاريع المرنة",
      },
    },
  },
  {
    id: "tpl-admin-pack",
    slug: "moroccan-tpe-admin-pack",
    category: "admin",
    priceMad: 69,
    tools: ["Word", "Excel"],
    gradient: { from: "from-slate-700", to: "to-slate-900" },
    title: {
      en: "Moroccan SARL & TPE Admin Docs Pack",
      fr: "Pack Documents Administratifs SARL & TPE",
      ar: "حزمة الوثائق الإدارية للشركات الصغرى (SARL وTPE)",
    },
    categoryLabel: {
      en: "Admin & legal",
      fr: "Admin & juridique",
      ar: "إداري وقانوني",
    },
    description: {
      en: "Essential administrative templates for Moroccan small businesses: devis, facture, bon de livraison, CDD/CDI contract and NDA.",
      fr: "Les documents administratifs indispensables aux petites entreprises marocaines : devis, facture, bon de livraison, contrat CDD/CDI et NDA.",
      ar: "وثائق إدارية أساسية للمقاولات الصغرى المغربية: عرض سعر، فاتورة، وصل تسليم، عقد عمل محدد أو غير محدد المدة، واتفاقية سرية.",
    },
    includes: {
      en: [
        "10 print-ready business documents",
        "Bilingual French/Arabic legal clauses",
        "Automatic VAT (20%) calculators in Excel",
      ],
      fr: [
        "10 documents professionnels prêts à imprimer",
        "Clauses juridiques bilingues français/arabe",
        "Calculateurs de TVA (20%) automatiques sur Excel",
      ],
      ar: [
        "10 وثائق جاهزة للطباعة",
        "بنود قانونية ثنائية اللغة بالفرنسية والعربية",
        "حاسبات ضريبة القيمة المضافة (20%) تلقائياً في Excel",
      ],
    },
    previews: {
      fr: {
        badge: "Pack administratif TPE · 10 docs",
        heading: "Bon de livraison & contrat de prestation",
        sub: "Conforme aux normes commerciales marocaines (RC / ICE / CNSS)",
        factOne: "Modèles inclus : devis, facture, BL, contrat CDD, NDA",
        factTwo: "Personnalisation du logo et du cachet en 5 minutes",
      },
      ar: {
        badge: "حزمة الوثائق الإدارية للمقاولات · 10 نماذج",
        heading: "وصل التسليم وعقد تقديم الخدمات",
        sub: "متوافق مع المعايير التجارية المغربية (السجل التجاري و ICE)",
        factOne: "النماذج: عرض ثمن، فاتورة، وصل تسليم، عقد عمل",
        factTwo: "تخصيص الشعار وختم الشركة في أقل من 5 دقائق",
      },
    },
  },
  {
    id: "tpl-investor-deck",
    slug: "startup-investor-pitch-deck",
    category: "pitch",
    priceMad: 79,
    tools: ["PowerPoint", "Figma"],
    gradient: { from: "from-blue-700", to: "to-cyan-600" },
    title: {
      en: "Startup Investor & Incubator Pitch Deck",
      fr: "Pitch Deck Investisseurs & Incubateurs",
      ar: "عرض تقديمي للمستثمرين والحاضنات",
    },
    categoryLabel: {
      en: "Pitch deck",
      fr: "Pitch deck",
      ar: "عرض تقديمي",
    },
    description: {
      en: "Built for Moroccan startups pitching to incubators such as Technopark and UM6P, and to angel investors. Includes a business model canvas and financial slides.",
      fr: "Pensé pour les startups marocaines qui pitchent devant des incubateurs comme Technopark et UM6P, ou des business angels. Inclut un business model canvas et des slides financières.",
      ar: "مصمم للشركات الناشئة المغربية التي تعرض مشاريعها على الحاضنات مثل تكنوبارك وUM6P وعلى المستثمرين الأفراد. يشمل نموذج العمل التجاري وشرائح مالية.",
    },
    includes: {
      en: [
        "22 investor-tested slides, from problem to ask",
        "Business Model Canvas and SWOT visuals",
        "MAD financial projection tables",
      ],
      fr: [
        "22 slides testées par des investisseurs, du problème à l’ask",
        "Business Model Canvas et SWOT visuels",
        "Tableaux de projections financières en MAD",
      ],
      ar: [
        "22 شريحة مجرّبة أمام المستثمرين، من الإشكالية إلى الطلب",
        "نموذج العمل التجاري وتحليل SWOT بصري",
        "جداول توقعات مالية بالدرهم",
      ],
    },
    previews: {
      fr: {
        badge: "Investor pitch deck · 22 slides",
        heading: "Opportunité de marché & modèle économique",
        sub: "Croissance digitale MENAT +18%/an · Traction & unit economics",
        factOne: "Revenus : vente directe (49–299 MAD) + abonnements TPE",
        factTwo: "Besoin de financement : 250 000 MAD pour l’accélération",
      },
      ar: {
        badge: "عرض المستثمرين والحاضنات · 22 شريحة",
        heading: "فرصة السوق ونموذج العمل التجاري",
        sub: "نمو السوق الرقمي بنسبة 18% سنوياً · المؤشرات المالية",
        factOne: "مصادر الدخل: بيع القوالب (49–299 درهم) + اشتراكات",
        factTwo: "التمويل المطلوب: 250,000 درهم لتوسيع المنصة",
      },
    },
  },
  {
    id: "tpl-cod-landing",
    slug: "cod-ecommerce-landing-page",
    category: "web",
    priceMad: 129,
    tools: ["VS Code", "HTML/Tailwind"],
    gradient: { from: "from-emerald-600", to: "to-blue-600" },
    title: {
      en: "Moroccan E-Commerce COD Landing Page",
      fr: "Landing Page E-Commerce COD (Maroc)",
      ar: "صفحة هبوط للتجارة الإلكترونية بالدفع عند الاستلام",
    },
    categoryLabel: {
      en: "Website · COD",
      fr: "Site web · COD",
      ar: "موقع · دفع عند الاستلام",
    },
    description: {
      en: "High-converting cash-on-delivery product landing page for Moroccan e-commerce sellers, with a city selector and WhatsApp order button.",
      fr: "Landing page produit COD à forte conversion pour les e-commerçants marocains, avec sélecteur de ville et bouton de commande WhatsApp.",
      ar: "صفحة هبوط منتج عالية التحويل للدفع عند الاستلام، مخصصة لتجار التجارة الإلكترونية المغاربة، مع اختيار المدينة وزر طلب عبر واتساب.",
    },
    includes: {
      en: [
        "Single-folder HTML5 + Tailwind CSS source",
        "Built-in Arabic RTL and French switcher",
        "COD order form with Moroccan city dropdown",
      ],
      fr: [
        "Code HTML5 + Tailwind CSS en un seul dossier",
        "Sélecteur arabe RTL et français intégré",
        "Formulaire COD avec liste déroulante des villes marocaines",
      ],
      ar: [
        "كود HTML5 + Tailwind CSS في مجلد واحد",
        "مبدّل لغة عربي (RTL) وفرنسي مدمج",
        "نموذج طلب بالدفع عند الاستلام مع قائمة المدن المغربية",
      ],
    },
    previews: {
      fr: {
        badge: "Landing page e-commerce COD · FR",
        heading: "Montre connectée Pro — Livraison gratuite 24h",
        sub: "Paiement à la livraison partout au Maroc · Garantie 1 an",
        factOne: "Formulaire rapide : nom complet + téléphone + ville",
        factTwo: "Prix promo : 299 MAD au lieu de 450 MAD",
      },
      ar: {
        badge: "صفحة هبوط للدفع عند الاستلام · عربي",
        heading: "ساعة ذكية احترافية — توصيل مجاني خلال 24 ساعة",
        sub: "الدفع نقداً عند الاستلام في جميع المدن المغربية",
        factOne: "نموذج طلب سريع: الاسم الكامل + رقم الهاتف + المدينة",
        factTwo: "ثمن العرض: 299 درهم فقط بدلاً من 450 درهم",
      },
    },
  },
  {
    id: "tpl-tpe-website",
    slug: "tpe-agency-website",
    category: "web",
    priceMad: 149,
    tools: ["WordPress", "VS Code"],
    gradient: { from: "from-blue-600", to: "to-slate-900" },
    title: {
      en: "TPE Agency & Service Showcase Website",
      fr: "Site Vitrine Agence & Services TPE",
      ar: "موقع تعريفي للوكالات والمقاولات الصغرى",
    },
    categoryLabel: {
      en: "Website · TPE",
      fr: "Site web · TPE",
      ar: "موقع · مقاولة صغرى",
    },
    description: {
      en: "A complete five-page responsive business website for Moroccan clinics, law firms, agencies and local SMEs. No monthly platform fees.",
      fr: "Un site vitrine responsive de cinq pages pour les cliniques, cabinets d’avocats, agences et PME marocaines. Aucun abonnement mensuel.",
      ar: "موقع تعريفي متكامل من خمس صفحات ومتجاوب، للعيادات ومكاتب المحاماة والوكالات والمقاولات المحلية المغربية. بدون اشتراكات شهرية.",
    },
    includes: {
      en: [
        "Five pages: home, services, about, portfolio, contact",
        "Full Arabic RTL and French bilingual toggle",
        "25-minute deployment and hosting tutorial",
      ],
      fr: [
        "Cinq pages : accueil, services, à propos, portfolio, contact",
        "Bascule bilingue arabe RTL et français",
        "Tutoriel de déploiement et d’hébergement de 25 min",
      ],
      ar: [
        "خمس صفحات: الرئيسية، الخدمات، من نحن، الأعمال، اتصل بنا",
        "تبديل كامل بين العربية (RTL) والفرنسية",
        "درس فيديو للنشر والاستضافة مدته 25 دقيقة",
      ],
    },
    previews: {
      fr: {
        badge: "Site vitrine entreprise · 5 pages",
        heading: "Cabinet conseil & expertise comptable à Casa",
        sub: "Accompagnement création SARL, fiscalité et gestion TPE",
        factOne:
          "Nos services : création d’entreprise, bilan, conseil juridique",
        factTwo: "Prise de rendez-vous en ligne & intégration WhatsApp",
      },
      ar: {
        badge: "موقع تعريفي للمقاولات · 5 صفحات",
        heading: "مكتب الاستشارة والمحاسبة بالدار البيضاء",
        sub: "مواكبة تأسيس الشركات والمحاسبة للمقاولات الصغرى",
        factOne: "خدماتنا: تأسيس المقاولات، التصريحات الضريبية، الاستشارة",
        factTwo: "حجز موعد مباشر عبر الموقع أو عبر واتساب",
      },
    },
  },
  {
    id: "tpl-startup-bundle",
    slug: "startup-launch-bundle",
    category: "bundle",
    priceMad: 249,
    tools: ["Figma", "VS Code", "PowerPoint"],
    gradient: { from: "from-amber-500", to: "to-blue-600" },
    title: {
      en: "Complete Moroccan Startup Launch Bundle",
      fr: "Pack de Lancement Startup Maroc Complet",
      ar: "الحزمة المتكاملة لإطلاق شركة ناشئة مغربية",
    },
    categoryLabel: {
      en: "Startup bundle",
      fr: "Pack startup",
      ar: "حزمة شركة ناشئة",
    },
    description: {
      en: "Our flagship all-in-one pack: five-page showcase website, 22-slide investor deck, brand identity kit and Moroccan invoice and contract pack.",
      fr: "Notre pack phare tout-en-un : site vitrine de cinq pages, deck investisseurs de 22 slides, kit d’identité de marque et pack factures et contrats marocains.",
      ar: "حزمتنا الشاملة: موقع تعريفي من خمس صفحات، عرض للمستثمرين من 22 شريحة، حزمة هوية بصرية، وحزمة فواتير وعقود مغربية.",
    },
    includes: {
      en: [
        "TPE bilingual website (worth 149 MAD)",
        "Investor pitch deck (worth 79 MAD)",
        "Admin pack + social media kit (worth 120 MAD)",
      ],
      fr: [
        "Site TPE bilingue (valeur 149 MAD)",
        "Pitch deck investisseurs (valeur 79 MAD)",
        "Pack admin + kit réseaux sociaux (valeur 120 MAD)",
      ],
      ar: [
        "موقع ثنائي اللغة للمقاولات الصغرى (قيمته 149 درهماً)",
        "عرض للمستثمرين (قيمته 79 درهماً)",
        "حزمة إدارية + حزمة شبكات اجتماعية (قيمتها 120 درهماً)",
      ],
    },
    previews: {
      fr: {
        badge: "Pack complet startup · économisez 40%",
        heading: "Site web + pitch deck + identité + docs légaux",
        sub: "Tout le nécessaire pour lancer votre projet au Maroc en un week-end",
        factOne: "Inclus : code source du site + 22 slides + kit logo",
        factTwo: "Support prioritaire WhatsApp + guides vidéo AR/FR",
      },
      ar: {
        badge: "الحزمة المتكاملة للمقاولات الناشئة · وفر 40%",
        heading: "موقع إلكتروني + عرض استثماري + هوية بصرية + وثائق",
        sub: "كل ما تحتاجه لإطلاق مشروعك بالمغرب في عطلة نهاية أسبوع واحدة",
        factOne: "يشمل: موقع متكامل + 22 شريحة عرض + نماذج الفواتير",
        factTwo: "دعم فني مباشر + فيديوهات شرح بالعربية والفرنسية",
      },
    },
  },
  {
    id: "tpl-social-kit",
    slug: "instagram-social-media-kit",
    category: "social",
    priceMad: 89,
    tools: ["Figma", "PowerPoint", "Canva"],
    gradient: { from: "from-fuchsia-500", to: "to-rose-500" },
    title: {
      en: "Instagram & Social Media Kit — 12 Editable Visuals",
      fr: "Kit Instagram & Réseaux Sociaux — 12 Visuels Éditables",
      ar: "حزمة إنستغرام وشبكات التواصل — 12 تصميماً قابلاً للتعديل",
    },
    categoryLabel: {
      en: "Social kit",
      fr: "Kit social",
      ar: "حزمة الشبكات الاجتماعية",
    },
    description: {
      en: "Twelve vector visuals covering every format you need — square posts, 4:5, stories, LinkedIn banners, YouTube thumbnail, X header — plus two 10-slide carousels in PowerPoint, in French and Arabic.",
      fr: "Douze visuels vectoriels qui couvrent tous les formats utiles — posts carrés, 4:5, stories, bannières LinkedIn, miniature YouTube, en-tête X — et deux carrousels de 10 slides dans PowerPoint, en français et en arabe.",
      ar: "اثنا عشر تصميماً متجهياً تغطي كل الصيغ المطلوبة — منشورات مربعة، 4:5، ستوري، بانرات لينكد إن، مصغّرة يوتيوب، ترويسة X — مع عرضين متسلسلين من 10 شرائح داخل PowerPoint، بالفرنسية والعربية.",
    },
    includes: {
      en: [
        "12 SVG visuals: 1080×1080, 4:5, 1080×1920, LinkedIn, YouTube, X, Facebook",
        "Two 10-slide carousels (.pptx) in French and Arabic RTL",
        "Layered, editable text — no flattened PNG exports",
      ],
      fr: [
        "12 visuels SVG : 1080×1080, 4:5, 1080×1920, LinkedIn, YouTube, X, Facebook",
        "Deux carrousels de 10 slides (.pptx) en français et en arabe RTL",
        "Textes calques et modifiables — aucun export PNG aplati",
      ],
      ar: [
        "12 تصميماً SVG: 1080×1080 و4:5 و1080×1920 ولينكد إن ويوتيوب وX وفايسبوك",
        "عرضان متسلسلان من 10 شرائح (.pptx) بالفرنسية والعربية RTL",
        "نصوص قابلة للتعديل بالكامل — دون تصدير صور مسطحة",
      ],
    },
    previews: {
      fr: {
        badge: "Kit réseaux sociaux · 12 formats",
        heading: "5 erreurs qui tuent votre présence Instagram",
        sub: "Carrousel de 10 slides · posts 1080×1080 · stories 1080×1920",
        factOne: "Formats inclus : Instagram, LinkedIn, YouTube, Facebook, X",
        factTwo: "Fichiers SVG vectoriels + carrousels PowerPoint éditables",
      },
      ar: {
        badge: "حزمة الشبكات الاجتماعية · 12 صيغة",
        heading: "5 أخطاء تقتل حضورك على إنستغرام",
        sub: "عرض متسلسل من 10 شرائح · منشورات 1080×1080 · ستوري 1080×1920",
        factOne: "الصيغ: إنستغرام، لينكد إن، يوتيوب، فايسبوك، X",
        factTwo: "ملفات SVG متجهية + عروض PowerPoint قابلة للتعديل",
      },
    },
  },
];

export const CATALOG_FILTERS: readonly CatalogFilter[] = [
  "all",
  "freebies",
  "cv",
  "pitch",
  "web",
  "social",
  "admin",
  "bundle",
];

export const TEMPLATE_CATEGORIES: readonly TemplateCategory[] = [
  "freebies",
  "cv",
  "pitch",
  "web",
  "social",
  "admin",
  "bundle",
];

export function localize(
  value: LocalizedString,
  locale: Locale,
): string {
  return value[locale];
}

export function getTemplateById(id: string): Template | undefined {
  return templates.find((template) => template.id === id);
}

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((template) => template.slug === slug);
}

export function getTemplatesByFilter(filter: CatalogFilter): readonly Template[] {
  return filter === "all"
    ? templates
    : templates.filter((template) => template.category === filter);
}

export function countTemplates(filter: CatalogFilter): number {
  return getTemplatesByFilter(filter).length;
}

export function getRelatedTemplates(
  template: Template,
  limit = 3,
): readonly Template[] {
  const sameCategory = templates.filter(
    (candidate) =>
      candidate.id !== template.id && candidate.category === template.category,
  );

  const padding = templates.filter(
    (candidate) =>
      candidate.id !== template.id &&
      candidate.category !== template.category,
  );

  return [...sameCategory, ...padding].slice(0, limit);
}

/** Lowest paid price, used for structured data price ranges. */
export const MIN_PAID_PRICE_MAD = Math.min(
  ...templates.filter((template) => template.priceMad > 0).map((t) => t.priceMad),
);
