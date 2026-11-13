import fs from "node:fs/promises";

import {
  AlignmentType,
  BorderStyle,
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";

import { COLORS } from "./theme.mjs";
import { ensureDir } from "./utils.mjs";

/**
 * DOCX builders. Layouts use plain paragraphs and borderless tables so the
 * files stay editable in Word, Google Docs and Pages without macros.
 */

const FONT = "Arial";
const BLUE = COLORS.blue;
const NAVY = COLORS.navy;
const SLATE = COLORS.slate600;
const LIGHT = COLORS.slate100;

function text(value, options = {}) {
  return new TextRun({
    text: value,
    font: FONT,
    ...options,
  });
}

function paragraph(value, options = {}) {
  const { rtl = false, size = 21, color = SLATE, bold = false, ...rest } = options;

  return new Paragraph({
    bidirectional: rtl,
    alignment: rest.alignment ?? (rtl ? AlignmentType.RIGHT : AlignmentType.LEFT),
    spacing: rest.spacing ?? { after: 120, line: 300 },
    ...rest,
    children: [text(value, { size, color, bold, rightToLeft: rtl })],
  });
}

function heading(value, { rtl = false, color = BLUE } = {}) {
  return new Paragraph({
    bidirectional: rtl,
    alignment: rtl ? AlignmentType.RIGHT : AlignmentType.LEFT,
    spacing: { before: 260, after: 120 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 8, color: COLORS.slate200 },
    },
    children: [
      text(value.toUpperCase(), {
        size: 19,
        bold: true,
        color,
        rightToLeft: rtl,
        characterSpacing: 20,
      }),
    ],
  });
}

function bullet(value, { rtl = false } = {}) {
  return new Paragraph({
    bidirectional: rtl,
    alignment: rtl ? AlignmentType.RIGHT : AlignmentType.LEFT,
    bullet: { level: 0 },
    spacing: { after: 80, line: 280 },
    children: [text(value, { size: 20, color: SLATE, rightToLeft: rtl })],
  });
}

function spacer(height = 120) {
  return new Paragraph({ spacing: { after: height }, children: [] });
}

function rule() {
  return new Paragraph({
    spacing: { after: 160 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: COLORS.slate200 },
    },
    children: [],
  });
}

const NO_BORDER = {
  top: { style: BorderStyle.NONE, size: 0, color: COLORS.white },
  bottom: { style: BorderStyle.NONE, size: 0, color: COLORS.white },
  left: { style: BorderStyle.NONE, size: 0, color: COLORS.white },
  right: { style: BorderStyle.NONE, size: 0, color: COLORS.white },
};

function cell(children, { width, fill, padding = 120 } = {}) {
  return new TableCell({
    width: width ? { size: width, type: WidthType.PERCENTAGE } : undefined,
    shading: fill ? { fill } : undefined,
    margins: {
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
    },
    borders: NO_BORDER,
    children,
  });
}

function grid(rows, { widths, rtl = false, headerFill = LIGHT } = {}) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: rows.map((row, rowIndex) =>
      new TableRow({
        tableHeader: rowIndex === 0,
        children: row.map((value, columnIndex) =>
          cell(
            [
              new Paragraph({
                bidirectional: rtl,
                alignment: rtl ? AlignmentType.RIGHT : AlignmentType.LEFT,
                spacing: { after: 0, line: 260 },
                children: [
                  text(value, {
                    size: rowIndex === 0 ? 18 : 19,
                    bold: rowIndex === 0,
                    color: rowIndex === 0 ? NAVY : SLATE,
                    rightToLeft: rtl,
                  }),
                ],
              }),
            ],
            {
              width: widths?.[columnIndex],
              fill: rowIndex === 0 ? headerFill : undefined,
            },
          ),
        ),
      }),
    ),
  });
}

function documentShell({ title, children }) {
  return new Document({
    creator: "ProTemplates",
    title,
    description: "Modèle professionnel ProTemplates — protemplates.ma",
    styles: {
      default: {
        document: {
          run: { font: FONT, size: 21, color: SLATE },
          paragraph: { spacing: { after: 120, line: 300 } },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: { top: 900, right: 900, bottom: 900, left: 900 },
          },
        },
        children,
      },
    ],
  });
}

async function save(buffer, outputPath) {
  await ensureDir(outputPath.replace(/[\\/][^\\/]+$/, ""));
  await fs.writeFile(outputPath, buffer);
}

function contactLine(rtl) {
  return paragraph(
    rtl
      ? "الدار البيضاء، المغرب · +212 6 00 00 00 00 · contact@exemple.ma · linkedin.com/in/exemple"
      : "Casablanca, Maroc · +212 6 00 00 00 00 · contact@exemple.ma · linkedin.com/in/exemple",
    { rtl, size: 18, color: COLORS.slate500, spacing: { after: 200 } },
  );
}

/* -------------------------------------------------------------------------- */
/* CV & cover letter                                                          */
/* -------------------------------------------------------------------------- */

const STUDENT_CV = {
  fr: {
    name: "YOUSSEF BENALI",
    role: "Étudiant ingénieur en informatique — à la recherche d'un stage PFE",
    profile:
      "Étudiant en dernière année à l'ENSIAS, spécialisé en développement web et data. Je recherche un stage de fin d'études de six mois à partir de février 2026, orienté produit ou ingénierie logicielle.",
    education: [
      "2023 – 2026 · ENSIAS, Rabat — Diplôme d'ingénieur en génie informatique",
      "2021 – 2023 · CPGE MPSI/MP*, Lycée Mohammed V, Casablanca — Admission sur concours",
      "2021 · Baccalauréat sciences mathématiques, mention très bien",
    ],
    experience: [
      "2025 · Stage développeur full-stack, Novea Digital, Casablanca — application de gestion de rendez-vous (Next.js, PostgreSQL).",
      "2024 · Stage découverte, Maroc Telecom, Rabat — automatisation de rapports internes en Python.",
      "2023 · Projet associatif, club informatique ENSIAS — organisation d'un hackathon de 80 participants.",
    ],
    skills: [
      "Front-end : React, Next.js, TypeScript, Tailwind CSS",
      "Back-end : Node.js, Laravel, REST, Prisma",
      "Données : PostgreSQL, MySQL, MongoDB",
      "Outils : Git, Docker, Figma, Jira",
    ],
    languages: [
      "Arabe — langue maternelle",
      "Français — courant (C1)",
      "Anglais — professionnel (B2)",
    ],
  },
  ar: {
    name: "يوسف بنعلي",
    role: "طالب مهندس في المعلوماتية — باحث عن تدريب نهاية الدراسة",
    profile:
      "طالب في السنة الأخيرة بالمدرسة الوطنية العليا للمعلوماتية، متخصص في تطوير الويب وتحليل البيانات. أبحث عن تدريب نهاية الدراسة لمدة ستة أشهر ابتداءً من فبراير 2026 في مجال المنتج أو هندسة البرمجيات.",
    education: [
      "2023 – 2026 · المدرسة الوطنية العليا للمعلوماتية، الرباط — دبلوم مهندس في المعلوماتية",
      "2021 – 2023 · الأقسام التحضيرية MPSI/MP*، ثانوية محمد الخامس، الدار البيضاء",
      "2021 · بكالوريا علوم رياضية بميزة حسن جداً",
    ],
    experience: [
      "2025 · تدريب مطور ويب متكامل، شركة نوفيا ديجيتال، الدار البيضاء — تطبيق تدبير المواعيد.",
      "2024 · تدريب استكشافي، اتصالات المغرب، الرباط — أتمتة التقارير الداخلية بلغة Python.",
      "2023 · مشروع جمعوي، نادي المعلوماتية — تنظيم هاكاثون بمشاركة 80 طالباً.",
    ],
    skills: [
      "الواجهة: React وNext.js وTypeScript وTailwind CSS",
      "الخادم: Node.js وLaravel وREST وPrisma",
      "قواعد البيانات: PostgreSQL وMySQL وMongoDB",
      "الأدوات: Git وDocker وFigma وJira",
    ],
    languages: [
      "العربية — اللغة الأم",
      "الفرنسية — متقن (C1)",
      "الإنجليزية — مهني (B2)",
    ],
  },
};

export async function buildStudentCv(outputPath, lang) {
  const data = STUDENT_CV[lang];
  const rtl = lang === "ar";

  const children = [
    paragraph(data.name, {
      rtl,
      size: 40,
      bold: true,
      color: NAVY,
      spacing: { after: 40 },
    }),
    paragraph(data.role, {
      rtl,
      size: 21,
      color: BLUE,
      bold: true,
      spacing: { after: 100 },
    }),
    contactLine(rtl),
    rule(),
    heading(rtl ? "الملف الشخصي" : "Profil", { rtl }),
    paragraph(data.profile, { rtl }),
    heading(rtl ? "التكوين" : "Formation", { rtl }),
    ...data.education.map((item) => bullet(item, { rtl })),
    heading(rtl ? "الخبرة" : "Expérience", { rtl }),
    ...data.experience.map((item) => bullet(item, { rtl })),
    heading(rtl ? "المهارات" : "Compétences", { rtl }),
    ...data.skills.map((item) => bullet(item, { rtl })),
    heading(rtl ? "اللغات" : "Langues", { rtl }),
    ...data.languages.map((item) => bullet(item, { rtl })),
    heading(rtl ? "اهتمامات" : "Centres d'intérêt", { rtl }),
    paragraph(
      rtl
        ? "التطوير المفتوح المصدر، تنظيم الهاكاثونات، الجري، التصوير الفوتوغرافي."
        : "Open source, organisation de hackathons, course à pied, photographie.",
      { rtl },
    ),
  ];

  const doc = documentShell({
    title: rtl ? "سيرة ذاتية — يوسف بنعلي" : "CV — Youssef Benali",
    children,
  });

  await save(await Packer.toBuffer(doc), outputPath);
}

const LETTER = {
  fr: {
    sender: [
      "Youssef Benali",
      "12, rue des Orangers",
      "20250 Casablanca, Maroc",
      "+212 6 00 00 00 00",
      "youssef.benali@example.ma",
    ],
    recipient: [
      "Madame, Monsieur",
      "Service des ressources humaines",
      "Entreprise Exemple",
      "Casablanca, Maroc",
    ],
    date: "Casablanca, le 12 novembre 2026",
    subject: "Objet : candidature au stage de fin d'études — développement logiciel",
    greeting: "Madame, Monsieur,",
    paragraphs: [
      "Actuellement en dernière année du cycle d'ingénieur à l'ENSIAS, je souhaite rejoindre votre équipe pour un stage de fin d'études de six mois à partir de février 2026.",
      "Au cours de ma formation et de mes stages, j'ai développé des applications web complètes avec React, Next.js et PostgreSQL. Lors de mon stage chez Novea Digital, j'ai conçu un module de réservation utilisé quotidiennement par une trentaine de collaborateurs, ce qui m'a appris à livrer un produit utile, testé et documenté.",
      "Votre entreprise m'intéresse pour la qualité de ses produits et son ancrage marocain. Je serais heureux de contribuer à vos projets tout en apprenant auprès de votre équipe.",
      "Je reste à votre disposition pour un entretien et vous remercie de l'attention portée à ma candidature.",
    ],
    closing: "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    signature: "Youssef Benali",
  },
  ar: {
    sender: [
      "يوسف بنعلي",
      "12، شارع البرتقال",
      "20250 الدار البيضاء، المغرب",
      "+212 6 00 00 00 00",
      "youssef.benali@example.ma",
    ],
    recipient: [
      "السيدة أو السيد المدير",
      "مصلحة الموارد البشرية",
      "شركة نموذج",
      "الدار البيضاء، المغرب",
    ],
    date: "الدار البيضاء، 12 نونبر 2026",
    subject: "الموضوع: ترشح لتدريب نهاية الدراسة — تطوير البرمجيات",
    greeting: "السيدة أو السيد المدير المحترم،",
    paragraphs: [
      "أنا طالب في السنة الأخيرة بسلك المهندس بالمدرسة الوطنية العليا للمعلوماتية، وأرغب في الانضمام إلى فريقكم لتدريب نهاية الدراسة لمدة ستة أشهر ابتداءً من فبراير 2026.",
      "خلال تكويني وتداريبي، طوّرت تطبيقات ويب متكاملة باستعمال React وNext.js وPostgreSQL. وخلال تدريبي بشركة نوفيا ديجيتال، صممت وحدة لحجز المواعيد يستخدمها يومياً نحو ثلاثين مستخدماً، ما علّمني تسليم منتج مفيد ومُختبَر وموثَّق.",
      "تثير شركتكم اهتمامي بجودة منتجاتها وجذورها المغربية، وسأكون سعيداً بالمساهمة في مشاريعكم والتعلم من فريقكم.",
      "أنا رهن إشارتكم لمقابلة، وأشكركم على الاهتمام بترشيحي.",
    ],
    closing: "وتقبلوا فائق عبارات التقدير والاحترام.",
    signature: "يوسف بنعلي",
  },
};

export async function buildMotivationLetter(outputPath, lang) {
  const data = LETTER[lang];
  const rtl = lang === "ar";

  const children = [
    ...data.sender.map((line, index) =>
      paragraph(line, {
        rtl,
        size: index === 0 ? 22 : 19,
        bold: index === 0,
        color: index === 0 ? NAVY : SLATE,
        spacing: { after: 20 },
      }),
    ),
    spacer(320),
    ...data.recipient.map((line) =>
      paragraph(line, { rtl, size: 19, spacing: { after: 20 } }),
    ),
    spacer(260),
    paragraph(data.date, { rtl, size: 19, color: COLORS.slate500 }),
    spacer(140),
    paragraph(data.subject, { rtl, size: 21, bold: true, color: NAVY }),
    spacer(180),
    paragraph(data.greeting, { rtl, size: 20 }),
    ...data.paragraphs.map((item) =>
      paragraph(item, { rtl, size: 20, spacing: { after: 180, line: 320 } }),
    ),
    spacer(220),
    paragraph(data.closing, { rtl, size: 20 }),
    spacer(520),
    paragraph(data.signature, { rtl, size: 22, bold: true, color: NAVY }),
  ];

  const doc = documentShell({
    title: rtl ? "رسالة تحفيزية" : "Lettre de motivation",
    children,
  });

  await save(await Packer.toBuffer(doc), outputPath);
}

const EXEC_CV = {
  fr: {
    name: "SALMA EL IDRISSI",
    role: "Responsable marketing digital & croissance — 6 ans d'expérience",
    profile:
      "Responsable acquisition et croissance pour des marques e-commerce au Maroc et en Afrique de l'Ouest. J'ai piloté des budgets publicitaires de 1,2 M MAD et construit des équipes de contenu de zéro.",
    experience: [
      "2023 – aujourd'hui · Head of Growth, Souk Digital, Casablanca — +180 % de revenu e-commerce en 18 mois, équipe de 6 personnes.",
      "2021 – 2023 · Responsable acquisition, Atlas Beauty, Casablanca — coût d'acquisition divisé par deux sur Meta et TikTok.",
      "2019 – 2021 · Chargée de marketing, Startup Factory, Rabat — lancement de 12 campagnes pour des TPE locales.",
    ],
    education: [
      "2019 · Master en marketing digital, ISCAE Casablanca",
      "2017 · Licence en commerce international, Université Hassan II",
      "Certifications : Google Analytics 4, Meta Blueprint, Scrum Master",
    ],
    skills: [
      "Stratégie : positionnement, tunnel de conversion, tests A/B",
      "Média : Meta Ads, TikTok Ads, Google Ads, email marketing",
      "Analyse : GA4, Looker Studio, SQL, tableaux de bord",
      "Management : recrutement, brief créatif, gestion de budget",
    ],
    languages: [
      "Arabe — langue maternelle",
      "Français — bilingue",
      "Anglais — courant",
    ],
  },
  ar: {
    name: "سلمى الإدريسي",
    role: "مسؤولة التسويق الرقمي والنمو — 6 سنوات خبرة",
    profile:
      "مسؤولة اكتساب ونمو لعلامات التجارة الإلكترونية في المغرب وغرب أفريقيا. أدرت ميزانيات إعلانية بلغت 1.2 مليون درهم وبنيت فرق محتوى من الصفر.",
    experience: [
      "2023 – الآن · مديرة النمو، سوق ديجيتال، الدار البيضاء — زيادة 180% في إيراد التجارة الإلكترونية خلال 18 شهراً، فريق من 6 أشخاص.",
      "2021 – 2023 · مسؤولة الاكتساب، أطلس بيوتي، الدار البيضاء — خفض كلفة الاكتساب إلى النصف على Meta وTikTok.",
      "2019 – 2021 · مسؤولة تسويق، ستارتب فاكتوري، الرباط — إطلاق 12 حملة لمقاولات محلية صغرى.",
    ],
    education: [
      "2019 · ماستر في التسويق الرقمي، المعهد العالي للتجارة وإدارة المقاولات بالدار البيضاء",
      "2017 · إجازة في التجارة الدولية، جامعة الحسن الثاني",
      "شهادات: Google Analytics 4 وMeta Blueprint وScrum Master",
    ],
    skills: [
      "الاستراتيجية: التموضع، مسار التحويل، اختبارات A/B",
      "الإعلانات: Meta Ads وTikTok Ads وGoogle Ads والبريد الإلكتروني",
      "التحليل: GA4 وLooker Studio وSQL ولوحات القيادة",
      "الإدارة: التوظيف، الموجز الإبداعي، تدبير الميزانية",
    ],
    languages: [
      "العربية — اللغة الأم",
      "الفرنسية — ثنائية اللغة",
      "الإنجليزية — متقنة",
    ],
  },
};

export async function buildExecutiveCv(outputPath, lang) {
  const data = EXEC_CV[lang];
  const rtl = lang === "ar";

  const children = [
    paragraph(data.name, {
      rtl,
      size: 40,
      bold: true,
      color: NAVY,
      spacing: { after: 40 },
    }),
    paragraph(data.role, {
      rtl,
      size: 21,
      color: BLUE,
      bold: true,
      spacing: { after: 100 },
    }),
    contactLine(rtl),
    rule(),
    heading(rtl ? "الملف المهني" : "Profil", { rtl }),
    paragraph(data.profile, { rtl }),
    heading(rtl ? "الخبرة المهنية" : "Expérience professionnelle", { rtl }),
    ...data.experience.map((item) => bullet(item, { rtl })),
    heading(rtl ? "التكوين والشهادات" : "Formation & certifications", { rtl }),
    ...data.education.map((item) => bullet(item, { rtl })),
    heading(rtl ? "المهارات" : "Compétences clés", { rtl }),
    ...data.skills.map((item) => bullet(item, { rtl })),
    heading(rtl ? "اللغات" : "Langues", { rtl }),
    ...data.languages.map((item) => bullet(item, { rtl })),
  ];

  const doc = documentShell({
    title: rtl ? "سيرة ذاتية — سلمى الإدريسي" : "CV — Salma El Idrissi",
    children,
  });

  await save(await Packer.toBuffer(doc), outputPath);
}

/* -------------------------------------------------------------------------- */
/* Auto-entrepreneur invoice / quote                                          */
/* -------------------------------------------------------------------------- */

const COMPANY_FR = [
  "VOTRE NOM OU RAISON SOCIALE",
  "Adresse : 12, rue Exemple, Casablanca",
  "ICE : 002849102000045 · IF : 40218763",
  "Auto-entrepreneur · RC : 123456",
  "Téléphone : +212 6 00 00 00 00 · contact@exemple.ma",
];

const COMPANY_AR = [
  "اسمكم أو الاسم التجاري",
  "العنوان: 12، شارع نموذج، الدار البيضاء",
  "المعرف الموحد للمقاولة: 002849102000045",
  "مقاول ذاتي · السجل التجاري: 123456",
  "الهاتف: +212 6 00 00 00 00 · contact@exemple.ma",
];

const INVOICE_ITEMS = [
  ["Création d'identité visuelle", "1", "1 500,00"],
  ["Déclinaison réseaux sociaux (8 visuels)", "1", "700,00"],
  ["Charte typographique et couleurs", "1", "300,00"],
];

export async function buildInvoiceDoc(outputPath, { lang, kind }) {
  const rtl = lang === "ar";
  const isQuote = kind === "devis";
  const title = isQuote
    ? rtl
      ? "عرض سعر"
      : "DEVIS"
    : rtl
      ? "فاتورة"
      : "FACTURE";
  const number = isQuote ? "DV-2026-014" : "FA-2026-014";

  const labels = rtl
    ? {
        number: "الرقم",
        date: "التاريخ",
        client: "العميل",
        clientDetails: "شركة نموذج · ICE: 001234567000089",
        validity: isQuote ? "صلاحية العرض" : "تاريخ الاستحقاق",
        validityValue: isQuote ? "30 يوماً" : "30 نونبر 2026",
        designation: "البيان",
        quantity: "الكمية",
        unit: "الثمن الوحدوي",
        total: "المجموع",
        subtotal: "المجموع قبل الضريبة",
        vat: "الضريبة على القيمة المضافة (غير مطبقة)",
        net: "المبلغ الصافي للأداء",
        payment: "طريقة الأداء",
        paymentValue: "تحويل بنكي · CIH Bank — RIB 230 780 0000000000000000",
        legal:
          "مقاول ذاتي مسجل — لا تخضع الفاتورة للضريبة على القيمة المضافة طبقاً للنظام الخاص بالمقاول الذاتي.",
        signatureClient: "توقيع العميل",
        signatureSeller: "توقيع المقاول",
      }
    : {
        number: "Numéro",
        date: "Date",
        client: "Client",
        clientDetails: "Entreprise Exemple SARL · ICE : 001234567000089",
        validity: isQuote ? "Validité" : "Échéance",
        validityValue: isQuote ? "30 jours" : "30 novembre 2026",
        designation: "Désignation",
        quantity: "Qté",
        unit: "Prix unitaire",
        total: "Total",
        subtotal: "Total hors taxes",
        vat: "TVA (non applicable)",
        net: "Net à payer",
        payment: "Mode de règlement",
        paymentValue: "Virement bancaire · CIH Bank — RIB 230 780 0000000000000000",
        legal:
          "Auto-entrepreneur immatriculé — TVA non applicable conformément au régime des auto-entrepreneurs.",
        signatureClient: "Signature du client",
        signatureSeller: "Signature de l'auto-entrepreneur",
      };

  const company = rtl ? COMPANY_AR : COMPANY_FR;

  const items = rtl
    ? [
        ["تصميم الهوية البصرية", "1", "1 500,00"],
        ["تكييف الشبكات الاجتماعية (8 تصاميم)", "1", "700,00"],
        ["دليل الخطوط والألوان", "1", "300,00"],
      ]
    : INVOICE_ITEMS;

  const rows = [
    [labels.designation, labels.quantity, labels.unit, labels.total],
    ...items.map((item) => [item[0], item[1], item[2], item[2]]),
  ];

  const children = [
    ...company.map((line, index) =>
      paragraph(line, {
        rtl,
        size: index === 0 ? 24 : 17,
        bold: index === 0,
        color: index === 0 ? NAVY : SLATE,
        spacing: { after: 20 },
      }),
    ),
    spacer(200),
    paragraph(title, {
      rtl,
      size: 36,
      bold: true,
      color: BLUE,
      alignment: AlignmentType.RIGHT,
      spacing: { after: 60 },
    }),
    paragraph(`${labels.number} : ${number}`, {
      rtl,
      size: 19,
      color: SLATE,
      alignment: AlignmentType.RIGHT,
      spacing: { after: 240 },
    }),
    grid(
      [
        [labels.client, labels.date],
        [labels.clientDetails, rtl ? "12 نونبر 2026" : "12 novembre 2026"],
        [labels.validity, ""],
        [labels.validityValue, ""],
      ],
      { widths: [62, 38], rtl, headerFill: LIGHT },
    ),
    spacer(240),
    grid(rows, { widths: [46, 12, 21, 21], rtl, headerFill: LIGHT }),
    spacer(80),
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            cell([new Paragraph({ children: [] })]),
            cell(
              [
                new Paragraph({
                  alignment: rtl ? AlignmentType.RIGHT : AlignmentType.LEFT,
                  spacing: { after: 60 },
                  children: [text(labels.subtotal, { size: 18, color: SLATE })],
                }),
                new Paragraph({
                  alignment: rtl ? AlignmentType.RIGHT : AlignmentType.LEFT,
                  spacing: { after: 60 },
                  children: [text(labels.vat, { size: 18, color: SLATE })],
                }),
                new Paragraph({
                  alignment: rtl ? AlignmentType.RIGHT : AlignmentType.LEFT,
                  spacing: { after: 0 },
                  children: [
                    text(`${labels.net} : 2 500,00 MAD`, {
                      size: 22,
                      bold: true,
                      color: NAVY,
                    }),
                  ],
                }),
              ],
              { width: 55, fill: COLORS.slate100 },
            ),
          ],
        }),
      ],
    }),
    spacer(240),
    paragraph(`${labels.payment} : ${labels.paymentValue}`, { rtl, size: 18 }),
    paragraph(labels.legal, { rtl, size: 16, color: COLORS.slate500 }),
    spacer(520),
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            cell([
              new Paragraph({
                alignment: rtl ? AlignmentType.RIGHT : AlignmentType.LEFT,
                children: [text(labels.signatureClient, { size: 18, bold: true })],
              }),
            ]),
            cell([
              new Paragraph({
                alignment: rtl ? AlignmentType.RIGHT : AlignmentType.LEFT,
                children: [text(labels.signatureSeller, { size: 18, bold: true })],
              }),
            ]),
          ],
        }),
      ],
    }),
  ];

  const doc = documentShell({
    title: `${title} ${number}`,
    children,
  });

  await save(await Packer.toBuffer(doc), outputPath);
}

/* -------------------------------------------------------------------------- */
/* Moroccan admin pack — 10 bilingual documents                               */
/* -------------------------------------------------------------------------- */

export const ADMIN_DOCS = [
  {
    file: "01-Devis-Commercial",
    titleFr: "DEVIS COMMERCIAL",
    titleAr: "عرض سعر تجاري",
    fields: [
      ["Numéro de devis", "DV-2026-014"],
      ["Date d'émission", "12/11/2026"],
      ["Validité", "30 jours"],
      ["Client", "Entreprise Exemple SARL"],
      ["ICE client", "001234567000089"],
    ],
    intro:
      "Suite à votre demande, nous avons le plaisir de vous adresser le devis ci-dessous pour la prestation décrite. Ce document n'engage ni le client ni le prestataire avant signature.",
    clauses: [
      "Objet : création d'une identité visuelle complète (logo, charte couleurs, déclinaisons réseaux sociaux).",
      "Montant total : 2 500,00 MAD hors taxes, TVA non applicable au titre du régime auto-entrepreneur.",
      "Acompte de 50 % à la commande ; solde à la livraison des fichiers sources.",
      "Délai de réalisation : 10 jours ouvrables à compter de la réception de l'acompte.",
      "Deux séries de retouches sont incluses. Toute demande supplémentaire fera l'objet d'un avenant.",
    ],
  },
  {
    file: "02-Facture",
    titleFr: "FACTURE",
    titleAr: "فاتورة",
    fields: [
      ["Numéro de facture", "FA-2026-014"],
      ["Date", "12/11/2026"],
      ["Échéance", "12/12/2026"],
      ["Client", "Entreprise Exemple SARL"],
      ["ICE client", "001234567000089"],
      ["Bon de commande", "BC-2026-031"],
    ],
    intro:
      "Conformément au devis accepté, nous vous adressons la facture relative à la prestation réalisée. Le règlement doit être effectué à l'échéance indiquée.",
    clauses: [
      "Prestation : identité visuelle complète et déclinaisons réseaux sociaux — 2 500,00 MAD.",
      "TVA non applicable, article 4 du régime fiscal des auto-entrepreneurs.",
      "Règlement par virement bancaire au profit du compte indiqué en bas de facture.",
      "Tout retard de paiement pourra entraîner des pénalités conformément à la législation en vigueur.",
      "En cas de contestation, le client dispose de 7 jours pour signaler une anomalie par écrit.",
    ],
  },
  {
    file: "03-Bon-de-Livraison",
    titleFr: "BON DE LIVRAISON",
    titleAr: "وصل التسليم",
    fields: [
      ["Numéro de bon", "BL-2026-008"],
      ["Date de livraison", "12/11/2026"],
      ["Commande liée", "BC-2026-031"],
      ["Client", "Entreprise Exemple SARL"],
      ["Adresse de livraison", "Casablanca, Maroc"],
    ],
    intro:
      "Le présent bon atteste la livraison des articles désignés ci-dessous. La signature du client vaut réception sans réserve, sauf mention contraire portée sur le document.",
    clauses: [
      "Articles livrés conformes au bon de commande et au devis accepté.",
      "Le client dispose de 48 heures pour formuler des réserves écrites.",
      "Les fichiers sources sont remis par lien de téléchargement sécurisé.",
      "La facture correspondante est émise séparément.",
    ],
  },
  {
    file: "04-Bon-de-Commande",
    titleFr: "BON DE COMMANDE",
    titleAr: "طلب شراء",
    fields: [
      ["Numéro de commande", "BC-2026-031"],
      ["Date", "10/11/2026"],
      ["Fournisseur", "Votre entreprise"],
      ["ICE fournisseur", "002849102000045"],
      ["Adresse de livraison", "Casablanca, Maroc"],
    ],
    intro:
      "Nous confirmons par la présente la commande des prestations suivantes, conformément au devis accepté. Le présent bon vaut engagement d'achat dans la limite des conditions indiquées.",
    clauses: [
      "Prestation commandée : identité visuelle et déclinaisons réseaux sociaux.",
      "Montant : 2 500,00 MAD, payable selon les conditions du devis.",
      "Livraison attendue au plus tard le 26/11/2026.",
      "Toute modification de périmètre doit faire l'objet d'un avenant écrit.",
      "Le fournisseur s'engage à respecter la confidentialité des informations transmises.",
    ],
  },
  {
    file: "05-Contrat-CDD",
    titleFr: "CONTRAT DE TRAVAIL À DURÉE DÉTERMINÉE",
    titleAr: "عقد عمل محدد المدة",
    fields: [
      ["Employeur", "Entreprise Exemple SARL"],
      ["Salarié", "Nom et prénom"],
      ["Fonction", "Chargé(e) de marketing digital"],
      ["Date de début", "01/12/2026"],
      ["Date de fin", "31/05/2027"],
      ["Salaire brut mensuel", "7 500,00 MAD"],
    ],
    intro:
      "Entre les soussignés, il a été convenu ce qui suit, dans le respect du Code du travail marocain et de la convention collective applicable.",
    clauses: [
      "Le salarié est engagé pour une durée déterminée de six mois, renouvelable une seule fois par accord écrit.",
      "Période d'essai : un mois, renouvelable une fois pour les fonctions non permanentes.",
      "Le salarié exercera ses fonctions sous l'autorité du responsable marketing.",
      "Rémunération mensuelle brute de 7 500,00 MAD, payable au plus tard le dernier jour ouvrable du mois.",
      "Le contrat peut être rompu avant terme dans les cas prévus par le Code du travail.",
      "Le salarié s'engage à respecter les règles internes et la confidentialité des données de l'entreprise.",
    ],
  },
  {
    file: "06-Contrat-CDI",
    titleFr: "CONTRAT DE TRAVAIL À DURÉE INDÉTERMINÉE",
    titleAr: "عقد عمل غير محدد المدة",
    fields: [
      ["Employeur", "Entreprise Exemple SARL"],
      ["Salarié", "Nom et prénom"],
      ["Fonction", "Développeur(se) full-stack"],
      ["Date d'embauche", "01/12/2026"],
      ["Lieu de travail", "Casablanca"],
      ["Salaire brut mensuel", "11 000,00 MAD"],
    ],
    intro:
      "Les parties conviennent d'un contrat de travail à durée indéterminée régi par le Code du travail marocain, la convention collective et le règlement intérieur de l'employeur.",
    clauses: [
      "Le salarié est engagé à temps plein, soit 44 heures par semaine selon l'organisation interne.",
      "Période d'essai de trois mois, renouvelable une fois pour les postes de cadre.",
      "Rémunération brute mensuelle de 11 000,00 MAD, versée par virement bancaire.",
      "Le salarié bénéficie des congés payés légaux et de la couverture CNSS et AMO.",
      "La rupture du contrat respecte les délais de préavis prévus par la loi et la convention collective.",
      "Une clause de confidentialité et de non-concurrence limitée dans le temps et l'espace s'applique.",
    ],
  },
  {
    file: "07-Accord-Confidentialite-NDA",
    titleFr: "ACCORD DE CONFIDENTIALITÉ (NDA)",
    titleAr: "اتفاقية سرية",
    fields: [
      ["Partie divulgatrice", "Entreprise Exemple SARL"],
      ["Partie réceptrice", "Prestataire / partenaire"],
      ["Date d'effet", "12/11/2026"],
      ["Durée", "3 ans"],
      ["Objet", "Projet digital confidentiel"],
    ],
    intro:
      "Dans le cadre de discussions commerciales, les parties peuvent échanger des informations confidentielles. Le présent accord définit les obligations de chaque partie.",
    clauses: [
      "Sont confidentielles toutes les informations techniques, commerciales, financières et stratégiques communiquées.",
      "La partie réceptrice s'engage à ne pas divulguer ces informations à des tiers sans accord écrit préalable.",
      "Les informations déjà publiques ou développées indépendamment sont exclues du périmètre.",
      "Les obligations de confidentialité restent en vigueur pendant trois ans après la fin des discussions.",
      "Toute violation pourra entraîner des dommages et intérêts et une action en justice.",
      "La restitution ou la destruction des documents est obligatoire à la première demande.",
    ],
  },
  {
    file: "08-Attestation-de-Travail",
    titleFr: "ATTESTATION DE TRAVAIL",
    titleAr: "شهادة عمل",
    fields: [
      ["Employeur", "Entreprise Exemple SARL"],
      ["Salarié", "Nom et prénom"],
      ["Fonction", "Chargé(e) de marketing digital"],
      ["Période", "01/12/2026 — 31/05/2027"],
      ["ICE", "001234567000089"],
    ],
    intro:
      "Nous, soussignés Entreprise Exemple SARL, attestons par la présente que la personne désignée ci-dessus a été employée au sein de notre société.",
    clauses: [
      "L'intéressé(e) a exercé les fonctions indiquées dans le cadre d'un contrat à durée déterminée.",
      "Il/elle a fait preuve de sérieux et de professionnalisme durant toute la période.",
      "La présente attestation est délivrée à la demande de l'intéressé(e) pour servir et valoir ce que de droit.",
    ],
  },
  {
    file: "09-Lettre-de-Relance",
    titleFr: "LETTRE DE RELANCE DE PAIEMENT",
    titleAr: "رسالة تذكير بالأداء",
    fields: [
      ["Client", "Entreprise Exemple SARL"],
      ["Facture concernée", "FA-2026-014"],
      ["Montant", "2 500,00 MAD"],
      ["Date d'échéance", "12/12/2026"],
      ["Retard constaté", "15 jours"],
    ],
    intro:
      "Sauf erreur de notre part, la facture mentionnée ci-dessus demeure impayée à ce jour. Nous vous prions de bien vouloir procéder au règlement dans les meilleurs délais.",
    clauses: [
      "Montant restant dû : 2 500,00 MAD, toutes taxes comprises.",
      "Nous vous invitons à effectuer le virement sur le compte indiqué sur la facture.",
      "Si le règlement a déjà été effectué, merci de nous transmettre une preuve de paiement.",
      "À défaut de règlement sous huit jours, des pénalités de retard pourront être appliquées.",
      "Nous restons à votre disposition pour convenir d'un échéancier si nécessaire.",
    ],
  },
  {
    file: "10-PV-de-Reception",
    titleFr: "PROCÈS-VERBAL DE RÉCEPTION",
    titleAr: "محضر استلام",
    fields: [
      ["Projet", "Identité visuelle et site vitrine"],
      ["Maître d'ouvrage", "Entreprise Exemple SARL"],
      ["Prestataire", "Votre entreprise"],
      ["Date de réception", "12/11/2026"],
      ["Référence devis", "DV-2026-014"],
    ],
    intro:
      "Le maître d'ouvrage et le prestataire constatent ensemble la réception des livrables listés ci-dessous, conformément au devis et au bon de commande.",
    clauses: [
      "Livrables remis : fichiers sources, guide de marque et site vitrine déployé.",
      "Les livrables ont été vérifiés et jugés conformes au périmètre convenu.",
      "Réserves éventuelles : aucune réserve majeure n'a été constatée à la date de signature.",
      "La réception vaut validation finale et déclenche le paiement du solde.",
      "La garantie de correction des anomalies bloquantes court pendant 30 jours après réception.",
    ],
  },
];

export async function buildAdminDoc(outputPath, doc) {
  const children = [
    ...COMPANY_FR.map((line, index) =>
      paragraph(line, {
        size: index === 0 ? 22 : 16,
        bold: index === 0,
        color: index === 0 ? NAVY : SLATE,
        spacing: { after: 20 },
      }),
    ),
    spacer(180),
    paragraph(doc.titleFr, {
      size: 30,
      bold: true,
      color: BLUE,
      spacing: { after: 40 },
    }),
    paragraph(doc.titleAr, {
      rtl: true,
      size: 22,
      bold: true,
      color: NAVY,
      spacing: { after: 200 },
    }),
    grid(
      doc.fields.map(([label, value]) => [label, value]),
      { widths: [38, 62], headerFill: LIGHT },
    ),
    spacer(220),
    paragraph(doc.intro, { size: 20, spacing: { after: 160, line: 320 } }),
    ...doc.clauses.map((clause, index) =>
      paragraph(`${index + 1}. ${clause}`, {
        size: 19,
        spacing: { after: 100, line: 300 },
      }),
    ),
    spacer(420),
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            cell([
              new Paragraph({
                children: [text("Le client / العميل", { size: 18, bold: true })],
              }),
              new Paragraph({
                spacing: { before: 600 },
                children: [text("Signature et cachet", { size: 16, color: SLATE })],
              }),
            ]),
            cell([
              new Paragraph({
                children: [
                  text("Le prestataire / المقاول", { size: 18, bold: true }),
                ],
              }),
              new Paragraph({
                spacing: { before: 600 },
                children: [text("Signature et cachet", { size: 16, color: SLATE })],
              }),
            ]),
          ],
        }),
      ],
    }),
    spacer(120),
    paragraph(
      "Document généré par ProTemplates — à adapter à votre situation et à faire valider par un professionnel du droit.",
      { size: 14, color: COLORS.slate500 },
    ),
  ];

  const docFile = documentShell({
    title: `${doc.titleFr} — ProTemplates`,
    children,
  });

  await save(await Packer.toBuffer(docFile), outputPath);
}
