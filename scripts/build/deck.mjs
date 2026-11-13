import pptxgen from "pptxgenjs";

import { COLORS, FONT_AR, FONT_FR, SLIDE } from "./theme.mjs";

/**
 * Small renderer on top of pptxgenjs. Every deck in the store uses the same
 * chrome (accent bar, eyebrow, footer, slide number) so the files feel like a
 * coherent product line rather than a pile of generated slides.
 */

function createPresentation({ title, subject, rtl }) {
  const pptx = new pptxgen();
  pptx.defineLayout({
    name: "PROTEMPLATES_16x9",
    width: SLIDE.width,
    height: SLIDE.height,
  });
  pptx.layout = "PROTEMPLATES_16x9";
  pptx.author = "ProTemplates";
  pptx.company = "ProTemplates Morocco";
  pptx.title = title;
  pptx.subject = subject;
  pptx.lang = rtl ? "ar-MA" : "fr-MA";
  pptx.theme = {
    headFontFace: rtl ? FONT_AR : FONT_FR,
    bodyFontFace: rtl ? FONT_AR : FONT_FR,
    lang: rtl ? "ar-MA" : "fr-MA",
  };
  return pptx;
}

function textOptions(rtl) {
  return {
    fontFace: rtl ? FONT_AR : FONT_FR,
    rtlMode: rtl,
    align: rtl ? "right" : "left",
  };
}

function addChrome(slide, { rtl, index, total, label }) {
  slide.background = { color: COLORS.white };

  slide.addShape("rect", {
    x: 0,
    y: 0,
    w: SLIDE.width,
    h: 0.09,
    fill: { color: COLORS.blue },
    line: { color: COLORS.blue, width: 0 },
  });

  if (label) {
    slide.addText(label.toUpperCase(), {
      ...textOptions(rtl),
      x: 0.7,
      y: 0.32,
      w: SLIDE.width - 3.0,
      h: 0.3,
      fontSize: 10,
      bold: true,
      charSpacing: 1.4,
      color: COLORS.blue,
    });
  }

  slide.addText("ProTemplates · protemplates.ma", {
    ...textOptions(rtl),
    x: 0.7,
    y: SLIDE.height - 0.5,
    w: 6.5,
    h: 0.3,
    fontSize: 8,
    color: COLORS.slate500,
  });

  slide.addText(`${String(index).padStart(2, "0")} / ${String(total).padStart(2, "0")}`, {
    ...textOptions(rtl),
    x: SLIDE.width - 2.0,
    y: SLIDE.height - 0.5,
    w: 1.3,
    h: 0.3,
    fontSize: 9,
    bold: true,
    color: COLORS.slate500,
    align: rtl ? "left" : "right",
  });
}

function addTitle(slide, slideData, { rtl }) {
  slide.background = { color: COLORS.navy };

  slide.addShape("ellipse", {
    x: SLIDE.width - 3.6,
    y: -1.6,
    w: 5.6,
    h: 5.6,
    fill: { color: COLORS.blue, transparency: 78 },
    line: { color: COLORS.blue, width: 0 },
  });
  slide.addShape("ellipse", {
    x: SLIDE.width - 1.9,
    y: 3.4,
    w: 2.8,
    h: 2.8,
    fill: { color: COLORS.emerald, transparency: 82 },
    line: { color: COLORS.emerald, width: 0 },
  });
  slide.addShape("rect", {
    x: 0,
    y: 0,
    w: 0.14,
    h: SLIDE.height,
    fill: { color: COLORS.blue },
    line: { color: COLORS.blue, width: 0 },
  });

  slide.addText(slideData.eyebrow, {
    ...textOptions(rtl),
    x: 0.85,
    y: 1.15,
    w: SLIDE.width - 5.0,
    h: 0.4,
    fontSize: 12,
    bold: true,
    charSpacing: 2,
    color: COLORS.emerald,
  });

  slide.addText(slideData.title, {
    ...textOptions(rtl),
    x: 0.85,
    y: 1.7,
    w: 10.6,
    h: 2.5,
    fontSize: slideData.title.length > 52 ? 32 : 40,
    bold: true,
    color: COLORS.white,
    lineSpacingMultiple: 1.05,
    valign: "top",
  });

  slide.addText(slideData.subtitle, {
    ...textOptions(rtl),
    x: 0.85,
    y: 4.25,
    w: 9.4,
    h: 1.0,
    fontSize: 16,
    color: COLORS.slate300,
    lineSpacingMultiple: 1.3,
    valign: "top",
  });

  const meta = slideData.meta ?? [];
  if (meta.length > 0) {
    const columnWidth = 3.4;
    meta.forEach((item, position) => {
      const x = rtl
        ? SLIDE.width - 0.85 - columnWidth * (position + 1)
        : 0.85 + columnWidth * position;
      slide.addText(item, {
        ...textOptions(rtl),
        x,
        y: SLIDE.height - 1.35,
        w: columnWidth - 0.3,
        h: 0.7,
        fontSize: 10.5,
        color: COLORS.slate300,
        lineSpacingMultiple: 1.2,
      });
    });
  }

  slide.addText(slideData.footer ?? "ProTemplates · protemplates.ma", {
    ...textOptions(rtl),
    x: 0.85,
    y: SLIDE.height - 0.48,
    w: 8,
    h: 0.3,
    fontSize: 8,
    color: COLORS.slate500,
  });

  slide.addNotes(slideData.notes ?? "");
}

function addBullets(slide, slideData, context) {
  const { rtl, index, total } = context;
  addChrome(slide, { rtl, index, total, label: slideData.eyebrow });

  slide.addText(slideData.title, {
    ...textOptions(rtl),
    x: 0.7,
    y: 1.05,
    w: SLIDE.width - 1.4,
    h: 1.1,
    fontSize: 27,
    bold: true,
    color: COLORS.navy,
    valign: "top",
  });

  const hasCallout = Boolean(slideData.callout);
  const bulletWidth = hasCallout ? SLIDE.width - 5.5 : SLIDE.width - 1.4;

  slide.addText(
    slideData.bullets.map((bullet) => ({
      text: bullet,
      options: { bullet: { indent: 18 }, breakLine: true },
    })),
    {
      ...textOptions(rtl),
      x: 0.75,
      y: 2.25,
      w: bulletWidth,
      h: 4.3,
      fontSize: slideData.bullets.length > 5 ? 15 : 17,
      color: COLORS.slate700,
      lineSpacingMultiple: 1.45,
      valign: "top",
      paraSpaceAfterPt: 8,
    },
  );

  if (hasCallout) {
    const x = SLIDE.width - 4.35;
    slide.addShape("roundRect", {
      x,
      y: 2.25,
      w: 3.65,
      h: 3.4,
      rectRadius: 0.08,
      fill: { color: COLORS.slate100 },
      line: { color: COLORS.slate200, width: 1 },
    });
    slide.addShape("rect", {
      x,
      y: 2.25,
      w: 3.65,
      h: 0.08,
      fill: { color: COLORS.emerald },
      line: { color: COLORS.emerald, width: 0 },
    });
    slide.addText(slideData.callout.value, {
      ...textOptions(rtl),
      x: x + 0.3,
      y: 2.6,
      w: 3.05,
      h: 1.0,
      fontSize: 34,
      bold: true,
      color: COLORS.navy,
      valign: "middle",
    });
    slide.addText(slideData.callout.label, {
      ...textOptions(rtl),
      x: x + 0.3,
      y: 3.65,
      w: 3.05,
      h: 1.6,
      fontSize: 12,
      color: COLORS.slate600,
      lineSpacingMultiple: 1.3,
      valign: "top",
    });
  }

  slide.addNotes(slideData.notes ?? "");
}

function addAgenda(slide, slideData, context) {
  const { rtl, index, total } = context;
  addChrome(slide, { rtl, index, total, label: slideData.eyebrow });

  slide.addText(slideData.title, {
    ...textOptions(rtl),
    x: 0.7,
    y: 1.05,
    w: SLIDE.width - 1.4,
    h: 0.9,
    fontSize: 27,
    bold: true,
    color: COLORS.navy,
  });

  const items = slideData.items;
  const half = Math.ceil(items.length / 2);

  items.forEach((item, position) => {
    const column = position < half ? 0 : 1;
    const row = position % half;
    const x = rtl
      ? SLIDE.width - 0.7 - 5.55 * (column + 1) - 0.45
      : 0.7 + 5.55 * column;
    const y = 2.35 + row * 0.95;

    slide.addShape("ellipse", {
      x,
      y,
      w: 0.52,
      h: 0.52,
      fill: { color: COLORS.blue },
      line: { color: COLORS.blue, width: 0 },
    });
    slide.addText(String(position + 1).padStart(2, "0"), {
      x,
      y,
      w: 0.52,
      h: 0.52,
      fontSize: 11,
      bold: true,
      color: COLORS.white,
      align: "center",
      valign: "middle",
      fontFace: FONT_FR,
    });
    slide.addText(item, {
      ...textOptions(rtl),
      x: x + (rtl ? -4.55 : 0.7),
      y: y + 0.02,
      w: 4.5,
      h: 0.6,
      fontSize: 14.5,
      bold: true,
      color: COLORS.slate700,
      valign: "middle",
    });
  });

  slide.addNotes(slideData.notes ?? "");
}

function addLayers(slide, slideData, context) {
  const { rtl, index, total } = context;
  addChrome(slide, { rtl, index, total, label: slideData.eyebrow });

  slide.addText(slideData.title, {
    ...textOptions(rtl),
    x: 0.7,
    y: 1.0,
    w: SLIDE.width - 1.4,
    h: 0.9,
    fontSize: 26,
    bold: true,
    color: COLORS.navy,
  });

  const layers = slideData.layers;
  const boxHeight = 0.95;
  const gap = 0.22;
  const startY =
    2.05 + ((5.0 - (layers.length * boxHeight + (layers.length - 1) * gap)) / 2);
  const palette = [
    COLORS.blue,
    COLORS.blueDark,
    COLORS.navySoft,
    COLORS.navy,
    COLORS.emeraldDark,
  ];

  layers.forEach((layer, position) => {
    const y = startY + position * (boxHeight + gap);
    const inset = position * 0.45;

    slide.addShape("roundRect", {
      x: 0.8 + inset,
      y,
      w: SLIDE.width - 1.6 - inset * 2,
      h: boxHeight,
      rectRadius: 0.06,
      fill: { color: palette[position % palette.length] },
      line: { color: palette[position % palette.length], width: 0 },
    });

    slide.addText(layer.title, {
      ...textOptions(rtl),
      x: 1.1 + inset,
      y,
      w: 5.2,
      h: boxHeight,
      fontSize: 15,
      bold: true,
      color: COLORS.white,
      valign: "middle",
    });

    slide.addText(layer.detail, {
      ...textOptions(rtl),
      x: 6.4,
      y,
      w: SLIDE.width - 7.4 - inset,
      h: boxHeight,
      fontSize: 11,
      color: COLORS.slate200,
      valign: "middle",
      lineSpacingMultiple: 1.15,
    });
  });

  slide.addNotes(slideData.notes ?? "");
}

function addKpi(slide, slideData, context) {
  const { rtl, index, total } = context;
  addChrome(slide, { rtl, index, total, label: slideData.eyebrow });

  slide.addText(slideData.title, {
    ...textOptions(rtl),
    x: 0.7,
    y: 1.05,
    w: SLIDE.width - 1.4,
    h: 0.9,
    fontSize: 27,
    bold: true,
    color: COLORS.navy,
  });

  const items = slideData.items;
  const gap = 0.28;
  const cardWidth = (SLIDE.width - 1.4 - gap * (items.length - 1)) / items.length;

  items.forEach((item, position) => {
    const x = rtl
      ? SLIDE.width - 0.7 - (cardWidth + gap) * (position + 1) + gap
      : 0.7 + (cardWidth + gap) * position;

    slide.addShape("roundRect", {
      x,
      y: 2.5,
      w: cardWidth,
      h: 3.2,
      rectRadius: 0.08,
      fill: { color: COLORS.slate100 },
      line: { color: COLORS.slate200, width: 1 },
    });
    slide.addShape("rect", {
      x,
      y: 2.5,
      w: cardWidth,
      h: 0.09,
      fill: { color: position === 0 ? COLORS.blue : COLORS.emerald },
      line: { color: COLORS.white, width: 0 },
    });
    slide.addText(item.value, {
      ...textOptions(rtl),
      x: x + 0.28,
      y: 2.85,
      w: cardWidth - 0.56,
      h: 1.1,
      fontSize: 30,
      bold: true,
      color: COLORS.navy,
      valign: "middle",
    });
    slide.addText(item.label, {
      ...textOptions(rtl),
      x: x + 0.28,
      y: 3.95,
      w: cardWidth - 0.56,
      h: 0.7,
      fontSize: 13,
      bold: true,
      color: COLORS.blueDark,
      lineSpacingMultiple: 1.2,
    });
    slide.addText(item.note ?? "", {
      ...textOptions(rtl),
      x: x + 0.28,
      y: 4.65,
      w: cardWidth - 0.56,
      h: 0.9,
      fontSize: 10,
      color: COLORS.slate500,
      lineSpacingMultiple: 1.2,
      valign: "top",
    });
  });

  slide.addNotes(slideData.notes ?? "");
}

function addRoadmap(slide, slideData, context) {
  const { rtl, index, total } = context;
  addChrome(slide, { rtl, index, total, label: slideData.eyebrow });

  slide.addText(slideData.title, {
    ...textOptions(rtl),
    x: 0.7,
    y: 1.05,
    w: SLIDE.width - 1.4,
    h: 0.9,
    fontSize: 27,
    bold: true,
    color: COLORS.navy,
  });

  const phases = slideData.phases;
  const gap = 0.25;
  const cardWidth = (SLIDE.width - 1.4 - gap * (phases.length - 1)) / phases.length;

  slide.addShape("line", {
    x: 1.1,
    y: 2.75,
    w: SLIDE.width - 2.2,
    h: 0,
    line: { color: COLORS.slate300, width: 2 },
  });

  phases.forEach((phase, position) => {
    const x = rtl
      ? SLIDE.width - 0.7 - (cardWidth + gap) * (position + 1) + gap
      : 0.7 + (cardWidth + gap) * position;

    slide.addShape("ellipse", {
      x: x + 0.2,
      y: 2.5,
      w: 0.5,
      h: 0.5,
      fill: { color: position === 0 ? COLORS.emerald : COLORS.blue },
      line: { color: COLORS.white, width: 3 },
    });

    slide.addText(phase.when, {
      ...textOptions(rtl),
      x,
      y: 3.2,
      w: cardWidth,
      h: 0.3,
      fontSize: 10,
      bold: true,
      color: COLORS.blue,
      charSpacing: 1,
    });

    slide.addText(phase.title, {
      ...textOptions(rtl),
      x,
      y: 3.55,
      w: cardWidth,
      h: 0.8,
      fontSize: 16,
      bold: true,
      color: COLORS.navy,
      lineSpacingMultiple: 1.1,
    });

    slide.addText(phase.detail, {
      ...textOptions(rtl),
      x,
      y: 4.4,
      w: cardWidth,
      h: 1.5,
      fontSize: 11,
      color: COLORS.slate600,
      lineSpacingMultiple: 1.3,
      valign: "top",
    });
  });

  slide.addNotes(slideData.notes ?? "");
}

function addQuote(slide, slideData, { rtl }) {
  slide.background = { color: COLORS.navy };
  slide.addShape("rect", {
    x: 0,
    y: 0,
    w: SLIDE.width,
    h: 0.1,
    fill: { color: COLORS.emerald },
    line: { color: COLORS.emerald, width: 0 },
  });

  slide.addText("“", {
    x: 0.8,
    y: 0.7,
    w: 2.2,
    h: 2.2,
    fontSize: 120,
    bold: true,
    color: COLORS.blue,
    fontFace: FONT_FR,
  });

  slide.addText(slideData.quote, {
    ...textOptions(rtl),
    x: 1.0,
    y: 2.15,
    w: SLIDE.width - 2.0,
    h: 2.6,
    fontSize: 28,
    bold: true,
    color: COLORS.white,
    lineSpacingMultiple: 1.3,
    valign: "top",
  });

  slide.addText(slideData.author, {
    ...textOptions(rtl),
    x: 1.0,
    y: 5.1,
    w: SLIDE.width - 2.0,
    h: 0.6,
    fontSize: 13,
    color: COLORS.emerald,
  });

  slide.addNotes(slideData.notes ?? "");
}

function addClosing(slide, slideData, { rtl }) {
  slide.background = { color: COLORS.navy };

  slide.addShape("ellipse", {
    x: -1.4,
    y: SLIDE.height - 3.2,
    w: 4.6,
    h: 4.6,
    fill: { color: COLORS.blue, transparency: 82 },
    line: { color: COLORS.blue, width: 0 },
  });
  slide.addShape("rect", {
    x: 0,
    y: 0,
    w: SLIDE.width,
    h: 0.1,
    fill: { color: COLORS.emerald },
    line: { color: COLORS.emerald, width: 0 },
  });

  slide.addText(slideData.title, {
    ...textOptions(rtl),
    x: 0.9,
    y: 2.0,
    w: SLIDE.width - 1.8,
    h: 1.6,
    fontSize: 46,
    bold: true,
    color: COLORS.white,
    valign: "middle",
  });

  slide.addText(slideData.subtitle, {
    ...textOptions(rtl),
    x: 0.9,
    y: 3.75,
    w: SLIDE.width - 1.8,
    h: 1.0,
    fontSize: 17,
    color: COLORS.slate300,
    lineSpacingMultiple: 1.3,
  });

  slide.addText(slideData.contact, {
    ...textOptions(rtl),
    x: 0.9,
    y: 5.15,
    w: SLIDE.width - 1.8,
    h: 0.5,
    fontSize: 12,
    bold: true,
    color: COLORS.emerald,
  });

  slide.addNotes(slideData.notes ?? "");
}

export function renderDeck({ title, subject, rtl, slides, outputPath }) {
  const pptx = createPresentation({ title, subject, rtl });
  const total = slides.length;

  slides.forEach((slideData, position) => {
    const slide = pptx.addSlide();
    const index = position + 1;
    const context = { rtl, index, total };

    switch (slideData.kind) {
      case "title":
        addTitle(slide, slideData, context);
        break;
      case "agenda":
        addAgenda(slide, slideData, context);
        break;
      case "layers":
        addLayers(slide, slideData, context);
        break;
      case "kpi":
        addKpi(slide, slideData, context);
        break;
      case "roadmap":
        addRoadmap(slide, slideData, context);
        break;
      case "quote":
        addQuote(slide, slideData, context);
        break;
      case "closing":
        addClosing(slide, slideData, context);
        break;
      default:
        addBullets(slide, slideData, context);
    }
  });

  return pptx.writeFile({ fileName: outputPath, compression: true });
}
