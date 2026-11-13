import pptxgen from "pptxgenjs";

import { COLORS, FONT_AR, FONT_FR } from "./theme.mjs";

/**
 * 1080 × 1080 px carousel built as a PowerPoint file. 9 × 9 inches keeps the
 * square ratio while leaving the text fully editable — no flattened PNGs.
 */

const SIZE = 9;

const CAROUSEL_FR = [
  {
    kicker: "PROTEMPLATES · CARROUSEL",
    title: "5 erreurs qui tuent votre présence Instagram",
    body: "Faites défiler →",
    tone: "dark",
  },
  {
    kicker: "LE CONSTAT",
    title: "Vous publiez tous les jours. Personne ne vous suit.",
    body:
      "Ce n'est pas un problème de fréquence. C'est un problème de clarté, de promesse et de preuve.",
    tone: "blue",
  },
  {
    kicker: "ERREUR 01",
    title: "Vous parlez de vous, pas de votre client.",
    body:
      "Remplacez « notre expertise » par « ce que vous gagnez ». Une marque utile se raconte à travers la vie de son client.",
    tone: "light",
  },
  {
    kicker: "ERREUR 02",
    title: "Votre visuel ne s'arrête pas au scroll.",
    body:
      "Un mot lisible sur mobile, une seule idée, un contraste fort. Testez votre post à 30 % de sa taille.",
    tone: "light",
  },
  {
    kicker: "ERREUR 03",
    title: "Vous n'avez pas de promesse claire.",
    body:
      "En une phrase : pour qui, quel problème, quel résultat. Si vous hésitez, votre audience hésite aussi.",
    tone: "light",
  },
  {
    kicker: "ERREUR 04",
    title: "Vous ignorez le 4:5 et les stories.",
    body:
      "Le format vertical occupe plus d'écran. Déclinez chaque idée en post carré, 4:5 et story 9:16.",
    tone: "light",
  },
  {
    kicker: "ERREUR 05",
    title: "Vous ne mesurez rien.",
    body:
      "Trois chiffres suffisent : enregistrements, partages, messages reçus. Le reste est du bruit.",
    tone: "light",
  },
  {
    kicker: "LA MÉTHODE",
    title: "Promesse. Preuve. Action.",
    body:
      "1. Une promesse concrète. 2. Une preuve visible (résultat, capture, témoignage). 3. Une action simple à faire maintenant.",
    tone: "emerald",
  },
  {
    kicker: "À RETENIR",
    title: "« Une marque claire vend sans crier. »",
    body:
      "La clarté n'est pas une question de budget. C'est une question de choix éditoriaux.",
    tone: "dark",
  },
  {
    kicker: "VOTRE PROCHAIN POST",
    title: "Enregistrez ce carrousel et appliquez la méthode.",
    body:
      "Remplacez @votremarque par votre compte et publiez la première slide aujourd'hui.",
    tone: "blue",
  },
];

const CAROUSEL_AR = [
  {
    kicker: "ProTemplates · عرض متسلسل",
    title: "5 أخطاء تقتل حضورك على إنستغرام",
    body: "اسحب ←",
    tone: "dark",
  },
  {
    kicker: "الملاحظة",
    title: "تنشر كل يوم، ولا يتابعك أحد.",
    body:
      "المشكلة ليست في عدد المنشورات، بل في الوضوح والوعد والدليل.",
    tone: "blue",
  },
  {
    kicker: "الخطأ 01",
    title: "تتحدث عن نفسك لا عن عميلك.",
    body:
      "استبدل «خبرتنا» بـ«ما الذي تكسبه أنت». العلامة المفيدة تُروى من خلال حياة عميلها.",
    tone: "light",
  },
  {
    kicker: "الخطأ 02",
    title: "تصميمك لا يوقف التمرير.",
    body:
      "كلمة واحدة مقروءة على الهاتف، فكرة واحدة، تباين قوي. اختبر منشورك بحجم 30%.",
    tone: "light",
  },
  {
    kicker: "الخطأ 03",
    title: "لا تملك وعداً واضحاً.",
    body:
      "في جملة واحدة: لمن؟ أي مشكلة؟ أي نتيجة؟ إذا ترددت، فجمهورك يتردد أيضاً.",
    tone: "light",
  },
  {
    kicker: "الخطأ 04",
    title: "تتجاهل مقاس 4:5 والستوري.",
    body:
      "المقاس العمودي يشغل مساحة أكبر. أعد صياغة كل فكرة في مربع و4:5 وستوري 9:16.",
    tone: "light",
  },
  {
    kicker: "الخطأ 05",
    title: "لا تقيس شيئاً.",
    body:
      "ثلاثة أرقام تكفي: الحفظ، المشاركة، الرسائل الواردة. الباقي ضجيج.",
    tone: "light",
  },
  {
    kicker: "الطريقة",
    title: "وعد. دليل. فعل.",
    body:
      "1. وعد ملموس. 2. دليل مرئي (نتيجة، لقطة، شهادة). 3. خطوة بسيطة تُنجز الآن.",
    tone: "emerald",
  },
  {
    kicker: "خلاصة",
    title: "«العلامة الواضحة تبيع دون صراخ.»",
    body: "الوضوح ليس مسألة ميزانية، بل قرارات تحريرية.",
    tone: "dark",
  },
  {
    kicker: "منشورك القادم",
    title: "احفظ هذا العرض وطبّق الطريقة.",
    body:
      "استبدل @votremarque بحسابك وانشر الشريحة الأولى اليوم.",
    tone: "blue",
  },
];

function palette(tone) {
  switch (tone) {
    case "dark":
      return {
        background: COLORS.navy,
        text: COLORS.white,
        muted: COLORS.slate300,
        accent: COLORS.emerald,
        kicker: COLORS.emerald,
      };
    case "blue":
      return {
        background: COLORS.blueDark,
        text: COLORS.white,
        muted: COLORS.blueLight,
        accent: COLORS.white,
        kicker: COLORS.emeraldLight,
      };
    case "emerald":
      return {
        background: COLORS.emerald,
        text: COLORS.navy,
        muted: COLORS.navySoft,
        accent: COLORS.navy,
        kicker: COLORS.navy,
      };
    default:
      return {
        background: COLORS.white,
        text: COLORS.navy,
        muted: COLORS.slate600,
        accent: COLORS.blue,
        kicker: COLORS.blue,
      };
  }
}

function renderCarousel({ outputPath, slides, rtl }) {
  const pptx = new pptxgen();
  pptx.defineLayout({ name: "PROTEMPLATES_SQUARE", width: SIZE, height: SIZE });
  pptx.layout = "PROTEMPLATES_SQUARE";
  pptx.author = "ProTemplates";
  pptx.company = "ProTemplates Morocco";
  pptx.title = rtl
    ? "Carrousel Instagram — 10 slides (AR)"
    : "Carrousel Instagram — 10 slides (FR)";
  pptx.lang = rtl ? "ar-MA" : "fr-MA";

  const fontFace = rtl ? FONT_AR : FONT_FR;

  slides.forEach((data, position) => {
    const slide = pptx.addSlide();
    const colors = palette(data.tone);
    const index = position + 1;

    slide.background = { color: colors.background };

    // Decorative geometry: keeps each square visually distinct without images.
    if (data.tone === "light") {
      slide.addShape("rect", {
        x: 0,
        y: 0,
        w: SIZE,
        h: 0.28,
        fill: { color: colors.accent },
        line: { color: colors.accent, width: 0 },
      });
      slide.addShape("ellipse", {
        x: SIZE - 2.6,
        y: SIZE - 2.6,
        w: 3.4,
        h: 3.4,
        fill: { color: COLORS.slate100 },
        line: { color: COLORS.slate100, width: 0 },
      });
    } else {
      slide.addShape("ellipse", {
        x: -1.5,
        y: SIZE - 3.1,
        w: 4.4,
        h: 4.4,
        fill: { color: colors.accent, transparency: 82 },
        line: { color: colors.accent, width: 0 },
      });
      slide.addShape("rect", {
        x: 0,
        y: 0,
        w: SIZE,
        h: 0.28,
        fill: { color: colors.accent },
        line: { color: colors.accent, width: 0 },
      });
    }

    slide.addText("ProTemplates", {
      x: 0.75,
      y: 0.62,
      w: 4.5,
      h: 0.4,
      fontSize: 13,
      bold: true,
      color: colors.text,
      fontFace: FONT_FR,
      align: rtl ? "right" : "left",
      rtlMode: false,
    });
    slide.addText(`${String(index).padStart(2, "0")}`, {
      x: SIZE - 1.35,
      y: 0.52,
      w: 0.6,
      h: 0.5,
      fontSize: 18,
      bold: true,
      color: colors.accent,
      fontFace: FONT_FR,
      align: rtl ? "left" : "right",
    });

    slide.addText(data.kicker.toUpperCase(), {
      x: 0.75,
      y: 1.55,
      w: SIZE - 1.5,
      h: 0.45,
      fontSize: 11,
      bold: true,
      charSpacing: 1.6,
      color: colors.kicker,
      fontFace,
      rtlMode: rtl,
      align: rtl ? "right" : "left",
    });

    slide.addText(data.title, {
      x: 0.75,
      y: 2.2,
      w: SIZE - 1.5,
      h: 2.7,
      fontSize: data.title.length > 46 ? 27 : 34,
      bold: true,
      color: colors.text,
      fontFace,
      rtlMode: rtl,
      align: rtl ? "right" : "left",
      valign: "top",
      lineSpacingMultiple: 1.08,
    });

    slide.addText(data.body, {
      x: 0.75,
      y: 5.25,
      w: SIZE - 1.5,
      h: 2.0,
      fontSize: 14,
      color: colors.muted,
      fontFace,
      rtlMode: rtl,
      align: rtl ? "right" : "left",
      valign: "top",
      lineSpacingMultiple: 1.35,
    });

    // Progress dots.
    const dotY = SIZE - 0.62;
    const totalWidth = slides.length * 0.24;
    const startX = rtl ? SIZE - 0.75 - totalWidth : 0.75;

    slides.forEach((_, dot) => {
      slide.addShape("ellipse", {
        x: startX + dot * 0.24,
        y: dotY,
        w: 0.11,
        h: 0.11,
        fill: {
          color: dot === position ? colors.accent : colors.muted,
          transparency: dot === position ? 0 : 60,
        },
        line: { color: colors.background, width: 0 },
      });
    });

    slide.addNotes(
      rtl
        ? "بدّل النص والصورة والشعار، ثم صدّر الشرائح كصور من PowerPoint."
        : "Remplacez le texte, le visuel et le logo, puis exportez les slides en images depuis PowerPoint.",
    );
  });

  return pptx.writeFile({ fileName: outputPath, compression: true });
}

export { CAROUSEL_FR, CAROUSEL_AR, renderCarousel };
