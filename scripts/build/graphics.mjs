import { ensureDir, writeSource } from "./utils.mjs";

/**
 * SVG graphics. Every asset is plain text + vectors: editable in Figma,
 * Illustrator, Inkscape or Affinity, and exportable at any resolution.
 */

const FONT = "Arial, Helvetica, sans-serif";

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function svg({ width, height, defs = "", body }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">
<defs>${defs}</defs>
${body}
</svg>
`;
}

function linearGradient(id, from, to, angle = 135) {
  const radians = (angle * Math.PI) / 180;
  const x2 = (Math.cos(radians) * 0.5 + 0.5).toFixed(3);
  const y2 = (Math.sin(radians) * 0.5 + 0.5).toFixed(3);
  return `<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}">
<stop offset="0" stop-color="${from}"/>
<stop offset="1" stop-color="${to}"/>
</linearGradient>`;
}

function textLines(lines, { x, y, size, lineHeight = 1.1, anchor = "start", fill = "#FFFFFF", weight = 700, family = FONT, opacity = 1 }) {
  return lines
    .map(
      (line, index) =>
        `<text x="${x}" y="${y + index * size * lineHeight}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}" opacity="${opacity}" text-anchor="${anchor}">${escapeXml(line)}</text>`,
    )
    .join("\n");
}

function brandMark({ x, y, anchor = "start", color = "#FFFFFF", size = 26, rtl = false }) {
  const text = rtl ? "ProTemplates · القوالب" : "ProTemplates";
  const sub = rtl ? "قوالب رقمية مغربية" : "Templates digitaux · Maroc";
  return `<g>
<rect x="${rtl ? x - size * 1.5 : x}" y="${y}" width="${size * 1.5}" height="${size * 1.5}" rx="${size * 0.34}" fill="${color}" opacity="0.16"/>
<text x="${rtl ? x - size * 0.75 : x + size * 0.75}" y="${y + size * 1.02}" font-family="${FONT}" font-size="${size * 0.72}" font-weight="800" fill="${color}" text-anchor="middle">PT</text>
<text x="${rtl ? x - size * 1.9 : x + size * 2}" y="${y + size * 0.72}" font-family="${FONT}" font-size="${size * 0.72}" font-weight="700" fill="${color}" text-anchor="${anchor}">${escapeXml(text)}</text>
<text x="${rtl ? x - size * 1.9 : x + size * 2}" y="${y + size * 1.28}" font-family="${FONT}" font-size="${size * 0.42}" font-weight="400" fill="${color}" opacity="0.72" text-anchor="${anchor}">${escapeXml(sub)}</text>
</g>`;
}

/**
 * Square / vertical social post.
 */
function poster({
  width,
  height,
  rtl = false,
  kicker,
  title,
  subtitle,
  badge,
  footer,
  tone = "dark",
}) {
  const isLight = tone === "light";
  const background = isLight ? "#FFFFFF" : "url(#bg)";
  const headingColor = isLight ? "#0F172A" : "#FFFFFF";
  const bodyColor = isLight ? "#475569" : "#CBD5E1";
  const accent = isLight ? "#2563EB" : "#10B981";
  const margin = Math.round(width * 0.075);
  const anchor = rtl ? "end" : "start";
  const textX = rtl ? width - margin : margin;
  const scale = width / 1080;
  const titleSize = Math.round(84 * scale);
  const subSize = Math.round(34 * scale);

  const defs = isLight
    ? ""
    : linearGradient("bg", "#0F172A", "#1D4ED8", 135) +
      linearGradient("glow", "#2563EB", "#10B981", 90);

  const body = `
<rect width="${width}" height="${height}" fill="${background}"/>
${
  isLight
    ? `<rect x="0" y="0" width="${width}" height="${Math.round(14 * scale)}" fill="#2563EB"/>
<circle cx="${width - Math.round(80 * scale)}" cy="${height - Math.round(80 * scale)}" r="${Math.round(260 * scale)}" fill="#EFF6FF"/>`
    : `<circle cx="${width - Math.round(80 * scale)}" cy="${Math.round(120 * scale)}" r="${Math.round(320 * scale)}" fill="url(#glow)" opacity="0.22"/>
<circle cx="${Math.round(40 * scale)}" cy="${height - Math.round(60 * scale)}" r="${Math.round(240 * scale)}" fill="#10B981" opacity="0.12"/>`
}
${brandMark({ x: rtl ? width - margin : margin, y: Math.round(64 * scale), anchor, color: headingColor, size: Math.round(30 * scale), rtl })}
${
  badge
    ? `<rect x="${rtl ? textX - Math.round(310 * scale) : textX}" y="${Math.round(300 * scale)}" width="${Math.round(310 * scale)}" height="${Math.round(58 * scale)}" rx="${Math.round(29 * scale)}" fill="${accent}" opacity="${isLight ? 0.14 : 0.2}"/>
<text x="${textX + (rtl ? -Math.round(155 * scale) : Math.round(155 * scale))}" y="${Math.round(339 * scale)}" font-family="${FONT}" font-size="${Math.round(24 * scale)}" font-weight="700" fill="${accent}" text-anchor="middle">${escapeXml(badge)}</text>`
    : ""
}
<text x="${textX}" y="${Math.round(470 * scale)}" font-family="${FONT}" font-size="${Math.round(28 * scale)}" font-weight="700" letter-spacing="${Math.round(4 * scale)}" fill="${accent}" text-anchor="${anchor}">${escapeXml(kicker.toUpperCase())}</text>
${textLines(title, {
  x: textX,
  y: Math.round(620 * scale),
  size: titleSize,
  lineHeight: 1.08,
  anchor,
  fill: headingColor,
})}
${textLines(subtitle, {
  x: textX,
  y: Math.round((620 + title.length * titleSize * 1.08 + 70) * scale),
  size: subSize,
  lineHeight: 1.35,
  anchor,
  fill: bodyColor,
  weight: 400,
})}
${
  footer
    ? `<rect x="${margin}" y="${height - Math.round(150 * scale)}" width="${width - margin * 2}" height="2" fill="${isLight ? "#E2E8F0" : "#FFFFFF"}" opacity="0.25"/>
<text x="${textX}" y="${height - Math.round(95 * scale)}" font-family="${FONT}" font-size="${Math.round(24 * scale)}" font-weight="600" fill="${bodyColor}" text-anchor="${anchor}">${escapeXml(footer)}</text>`
    : ""
}
`;

  return svg({ width, height, defs, body });
}

/**
 * Personal LinkedIn banner (name + role + contact).
 */
function personalBanner({ width, height, name, role, contact, initials }) {
  const compact = height < 260;
  const margin = compact ? 34 : 64;
  const nameSize = compact ? 40 : 68;
  const roleSize = compact ? 17 : 25;
  const contactSize = compact ? 12 : 16;

  const defs =
    linearGradient("bg", "#0F172A", "#1E3A8A", 120) +
    linearGradient("accent", "#2563EB", "#10B981", 90);

  const body = `
<rect width="${width}" height="${height}" fill="url(#bg)"/>
<circle cx="${width - (compact ? 110 : 190)}" cy="${compact ? 30 : 40}" r="${compact ? 150 : 260}" fill="url(#accent)" opacity="0.25"/>
<circle cx="${width - (compact ? 70 : 120)}" cy="${height - (compact ? 30 : 40)}" r="${compact ? 110 : 200}" fill="#10B981" opacity="0.14"/>
<rect x="0" y="0" width="${compact ? 8 : 12}" height="${height}" fill="#10B981"/>
<text x="${margin}" y="${compact ? 70 : 105}" font-family="${FONT}" font-size="${nameSize}" font-weight="800" fill="#FFFFFF">${escapeXml(name)}</text>
<text x="${margin}" y="${compact ? 104 : 152}" font-family="${FONT}" font-size="${roleSize}" font-weight="600" fill="#93C5FD">${escapeXml(role)}</text>
<text x="${margin}" y="${compact ? 140 : 196}" font-family="${FONT}" font-size="${contactSize}" font-weight="400" fill="#CBD5E1">${escapeXml(contact)}</text>
<g opacity="0.9">
<circle cx="${width - (compact ? 80 : 140)}" cy="${height / 2}" r="${compact ? 44 : 78}" fill="#0F172A" stroke="#10B981" stroke-width="${compact ? 2 : 3}"/>
<text x="${width - (compact ? 80 : 140)}" y="${height / 2 + (compact ? 15 : 26)}" font-family="${FONT}" font-size="${compact ? 30 : 54}" font-weight="800" fill="#FFFFFF" text-anchor="middle">${escapeXml(initials)}</text>
</g>
<text x="${width - margin}" y="${height - (compact ? 16 : 30)}" font-family="${FONT}" font-size="${compact ? 9 : 12}" font-weight="600" fill="#94A3B8" text-anchor="end" letter-spacing="1.5">PROTEMPLATES · PROTEMPLATES.MA</text>
`;

  return svg({ width, height, defs, body });
}

function youtubeThumbnail() {
  const width = 1280;
  const height = 720;
  const defs = linearGradient("bg", "#0F172A", "#1D4ED8", 130);

  const body = `
<rect width="${width}" height="${height}" fill="url(#bg)"/>
<circle cx="1120" cy="60" r="280" fill="#10B981" opacity="0.16"/>
<circle cx="80" cy="700" r="220" fill="#2563EB" opacity="0.4"/>
<rect x="0" y="0" width="12" height="${height}" fill="#10B981"/>
<rect x="64" y="70" width="270" height="58" rx="29" fill="#10B981" opacity="0.18"/>
<text x="199" y="108" font-family="${FONT}" font-size="24" font-weight="800" fill="#10B981" text-anchor="middle" letter-spacing="2">NOUVELLE VIDÉO</text>
<text x="64" y="300" font-family="${FONT}" font-size="88" font-weight="800" fill="#FFFFFF">CRÉEZ VOTRE</text>
<text x="64" y="396" font-family="${FONT}" font-size="88" font-weight="800" fill="#93C5FD">SITE VITRINE</text>
<text x="64" y="486" font-family="${FONT}" font-size="40" font-weight="600" fill="#CBD5E1">en 25 minutes, sans coder</text>
<g transform="translate(1080 560)">
<circle r="86" fill="#FFFFFF"/>
<circle r="70" fill="#10B981"/>
<path d="M-22 -34 L48 0 L-22 34 Z" fill="#0F172A"/>
</g>
<text x="64" y="640" font-family="${FONT}" font-size="22" font-weight="600" fill="#94A3B8">protemplates.ma · modèles PowerPoint, Word, Excel et HTML</text>
`;

  return svg({ width, height, defs, body });
}

function facebookCover() {
  const width = 820;
  const height = 312;
  const defs = linearGradient("bg", "#0F172A", "#1E40AF", 120);

  const body = `
<rect width="${width}" height="${height}" fill="url(#bg)"/>
<circle cx="730" cy="40" r="170" fill="#10B981" opacity="0.18"/>
<rect x="0" y="0" width="10" height="${height}" fill="#10B981"/>
<text x="44" y="96" font-family="${FONT}" font-size="26" font-weight="800" fill="#FFFFFF">ProTemplates</text>
<text x="44" y="146" font-family="${FONT}" font-size="38" font-weight="800" fill="#FFFFFF">Des modèles prêts à éditer.</text>
<text x="44" y="190" font-family="${FONT}" font-size="20" font-weight="600" fill="#93C5FD">CV · Pitch decks · Sites · Documents admin</text>
<text x="44" y="256" font-family="${FONT}" font-size="18" font-weight="600" fill="#CBD5E1">À partir de 49 MAD · Paiement local · AR / FR</text>
`;

  return svg({ width, height, defs, body });
}

function xHeader() {
  const width = 1500;
  const height = 500;
  const defs =
    linearGradient("bg", "#0F172A", "#312E81", 120) +
    linearGradient("accent", "#2563EB", "#10B981", 90);

  const body = `
<rect width="${width}" height="${height}" fill="url(#bg)"/>
<circle cx="1330" cy="60" r="300" fill="url(#accent)" opacity="0.2"/>
<circle cx="120" cy="470" r="190" fill="#10B981" opacity="0.12"/>
<text x="80" y="150" font-family="${FONT}" font-size="30" font-weight="800" fill="#FFFFFF">ProTemplates</text>
<text x="80" y="248" font-family="${FONT}" font-size="64" font-weight="800" fill="#FFFFFF">L'infrastructure digitale</text>
<text x="80" y="320" font-family="${FONT}" font-size="64" font-weight="800" fill="#93C5FD">des TPE marocaines</text>
<text x="80" y="404" font-family="${FONT}" font-size="26" font-weight="500" fill="#CBD5E1">Modèles PowerPoint, Word, Excel et HTML — en arabe et en français.</text>
<text x="80" y="452" font-family="${FONT}" font-size="18" font-weight="700" fill="#10B981" letter-spacing="2">PROTEMPLATES.MA</text>
`;

  return svg({ width, height, defs, body });
}

function avatar() {
  const width = 1080;
  const height = 1080;
  const defs =
    `<radialGradient id="bg" cx="30%" cy="25%" r="80%">
<stop offset="0" stop-color="#1D4ED8"/>
<stop offset="1" stop-color="#0F172A"/>
</radialGradient>` + linearGradient("accent", "#2563EB", "#10B981", 90);

  const body = `
<rect width="${width}" height="${height}" fill="url(#bg)"/>
<circle cx="820" cy="240" r="300" fill="url(#accent)" opacity="0.22"/>
<circle cx="240" cy="880" r="240" fill="#10B981" opacity="0.12"/>
<circle cx="540" cy="540" r="330" fill="none" stroke="#FFFFFF" stroke-width="3" opacity="0.12"/>
<text x="540" y="600" font-family="${FONT}" font-size="260" font-weight="800" fill="#FFFFFF" text-anchor="middle">PT</text>
<text x="540" y="760" font-family="${FONT}" font-size="44" font-weight="700" fill="#93C5FD" text-anchor="middle" letter-spacing="4">PROTEMPLATES</text>
<text x="540" y="820" font-family="${FONT}" font-size="24" font-weight="500" fill="#94A3B8" text-anchor="middle">Templates digitaux · Maroc</text>
`;

  return svg({ width, height, defs, body });
}

const POSTERS = [
  {
    file: "post-square-1080-fr.svg",
    width: 1080,
    height: 1080,
    rtl: false,
    tone: "dark",
    badge: "NOUVEAU",
    kicker: "Guide gratuit",
    title: ["5 erreurs qui", "tuent votre", "présence Instagram"],
    subtitle: ["Enregistrez ce post", "et appliquez la méthode."],
    footer: "@protemplates.ma · protemplates.ma",
  },
  {
    file: "post-square-1080-ar.svg",
    width: 1080,
    height: 1080,
    rtl: true,
    tone: "dark",
    badge: "جديد",
    kicker: "دليل مجاني",
    title: ["5 أخطاء تقتل", "حضورك على", "إنستغرام"],
    subtitle: ["احفظ هذا المنشور", "وطبّق الطريقة."],
    footer: "@protemplates.ma · protemplates.ma",
  },
  {
    file: "post-square-light-1080-fr.svg",
    width: 1080,
    height: 1080,
    rtl: false,
    tone: "light",
    badge: "MÉTHODE",
    kicker: "En 3 étapes",
    title: ["Promesse.", "Preuve.", "Action."],
    subtitle: ["Une marque claire", "vend sans crier."],
    footer: "Votre marque · @votremarque",
  },
  {
    file: "post-4x5-1080x1350-fr.svg",
    width: 1080,
    height: 1350,
    rtl: false,
    tone: "dark",
    badge: "OFFRE",
    kicker: "Pack startup",
    title: ["Site vitrine +", "pitch deck +", "identité visuelle"],
    subtitle: ["249 MAD au lieu de 397 MAD.", "Fichiers sources inclus."],
    footer: "@protemplates.ma · protemplates.ma",
  },
  {
    file: "story-1080x1920-fr.svg",
    width: 1080,
    height: 1920,
    rtl: false,
    tone: "dark",
    badge: "SWIPE UP",
    kicker: "Nouveau template",
    title: ["Votre site", "vitrine en", "25 minutes"],
    subtitle: ["HTML autonome,", "bilingue AR / FR,", "sans abonnement."],
    footer: "Lien en bio · protemplates.ma",
  },
  {
    file: "story-1080x1920-ar.svg",
    width: 1080,
    height: 1920,
    rtl: true,
    tone: "dark",
    badge: "اسحب للأعلى",
    kicker: "قالب جديد",
    title: ["موقعك", "التعريفي في", "25 دقيقة"],
    subtitle: ["HTML مستقل،", "ثنائي اللغة،", "بدون اشتراك."],
    footer: "الرابط في البايو · protemplates.ma",
  },
  {
    file: "quote-square-1080-fr.svg",
    width: 1080,
    height: 1080,
    rtl: false,
    tone: "light",
    badge: "À RETENIR",
    kicker: "Citation",
    title: ["« Une marque", "claire vend", "sans crier. »"],
    subtitle: ["— ProTemplates", "Guide identité de marque"],
    footer: "@protemplates.ma",
  },
];

const LINKEDIN_BANNERS = [
  { file: "linkedin-banner-1584x396.svg", width: 1584, height: 396 },
  { file: "linkedin-banner-1128x191.svg", width: 1128, height: 191 },
];

export async function buildSocialKit(dir) {
  await ensureDir(dir);

  for (const posterData of POSTERS) {
    await writeSource(
      `${dir}/${posterData.file}`,
      poster(posterData),
    );
  }

  // LinkedIn personal banner used by the executive CV product.
  await writeSource(
    `${dir}/linkedin-banner-personal-1584x396.svg`,
    personalBanner({
      width: 1584,
      height: 396,
      name: "SALMA EL IDRISSI",
      role: "Responsable marketing digital & croissance",
      contact: "Casablanca, Maroc · contact@exemple.ma · linkedin.com/in/salma",
      initials: "SE",
    }),
  );
  await writeSource(
    `${dir}/linkedin-banner-personal-1128x191.svg`,
    personalBanner({
      width: 1128,
      height: 191,
      name: "SALMA EL IDRISSI",
      role: "Responsable marketing digital & croissance",
      contact: "Casablanca · contact@exemple.ma",
      initials: "SE",
    }),
  );

  for (const banner of LINKEDIN_BANNERS) {
    await writeSource(
      `${dir}/${banner.file}`,
      personalBanner({
        width: banner.width,
        height: banner.height,
        name: "VOTRE NOM",
        role: "Votre fonction · votre expertise",
        contact: "Casablanca, Maroc · contact@exemple.ma · linkedin.com/in/vous",
        initials: "VN",
      }),
    );
  }

  await writeSource(`${dir}/linkedin-post-1200x1200.svg`, poster({
    width: 1200,
    height: 1200,
    rtl: false,
    tone: "dark",
    badge: "CONSEIL",
    kicker: "Croissance",
    title: ["Votre offre", "doit tenir", "en une phrase."],
    subtitle: ["Pour qui, quel problème,", "quel résultat."],
    footer: "ProTemplates · @protemplates.ma",
  }));

  await writeSource(`${dir}/youtube-thumbnail-1280x720.svg`, youtubeThumbnail());
  await writeSource(`${dir}/facebook-cover-820x312.svg`, facebookCover());
  await writeSource(`${dir}/x-header-1500x500.svg`, xHeader());
  await writeSource(`${dir}/profile-avatar-1080.svg`, avatar());
}

export async function buildExecutiveGraphics(dir) {
  await ensureDir(dir);

  for (const banner of LINKEDIN_BANNERS) {
    await writeSource(
      `${dir}/${banner.file}`,
      personalBanner({
        width: banner.width,
        height: banner.height,
        name: "SALMA EL IDRISSI",
        role: "Responsable marketing digital & croissance",
        contact: "Casablanca, Maroc · contact@exemple.ma · linkedin.com/in/salma",
        initials: "SE",
      }),
    );
  }
}
