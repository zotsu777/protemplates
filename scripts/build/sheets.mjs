import ExcelJS from "exceljs";

import { COLORS } from "./theme.mjs";
import { ensureDir } from "./utils.mjs";

/**
 * XLSX builders. All totals are real Excel formulas (not baked numbers), so the
 * files keep working when the buyer edits quantities or prices.
 */

const ARGB = (hex) => `FF${hex}`;

const BORDER = {
  top: { style: "thin", color: { argb: ARGB(COLORS.slate200) } },
  bottom: { style: "thin", color: { argb: ARGB(COLORS.slate200) } },
  left: { style: "thin", color: { argb: ARGB(COLORS.slate200) } },
  right: { style: "thin", color: { argb: ARGB(COLORS.slate200) } },
};

const MONEY = '#,##0.00" MAD"';

function paint(cell, { fill, color, bold, size = 11, align = "left" }) {
  if (fill) {
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: ARGB(fill) },
    };
  }
  cell.font = {
    name: "Arial",
    size,
    bold: Boolean(bold),
    color: { argb: ARGB(color ?? COLORS.slate700) },
  };
  cell.alignment = { vertical: "middle", horizontal: align, wrapText: true };
}

function box(sheet, range) {
  const [start, end] = range.split(":");
  const startCell = sheet.getCell(start);
  const endCell = sheet.getCell(end);

  for (let row = startCell.row; row <= endCell.row; row += 1) {
    for (let col = startCell.col; col <= endCell.col; col += 1) {
      sheet.getCell(row, col).border = BORDER;
    }
  }
}

function invoiceSheet(workbook, { name, title, number, tva }) {
  const sheet = workbook.addWorksheet(name, {
    pageSetup: { paperSize: 9, orientation: "portrait", fitToPage: true },
  });

  sheet.columns = [
    { width: 42 },
    { width: 10 },
    { width: 18 },
    { width: 20 },
  ];

  sheet.mergeCells("A1:D2");
  const brand = sheet.getCell("A1");
  brand.value = "VOTRE NOM OU RAISON SOCIALE";
  paint(brand, {
    fill: COLORS.navy,
    color: COLORS.white,
    bold: true,
    size: 18,
    align: "left",
  });

  sheet.mergeCells("A3:D3");
  const company = sheet.getCell("A3");
  company.value =
    "12, rue Exemple, Casablanca · ICE 002849102000045 · IF 40218763 · Auto-entrepreneur · +212 6 00 00 00 00";
  paint(company, { fill: COLORS.navy, color: COLORS.slate300, size: 9 });

  sheet.mergeCells("A5:B6");
  const titleCell = sheet.getCell("A5");
  titleCell.value = title;
  paint(titleCell, { color: COLORS.blue, bold: true, size: 26 });

  sheet.getCell("D5").value = "Numéro";
  paint(sheet.getCell("D5"), { color: COLORS.slate500, size: 9 });
  sheet.getCell("D6").value = number;
  paint(sheet.getCell("D6"), { color: COLORS.navy, bold: true, size: 13, align: "right" });

  const meta = [
    ["Date d'émission", "12/11/2026", "Échéance", "12/12/2026"],
    ["Client", "Entreprise Exemple SARL", "ICE client", "001234567000089"],
    ["Adresse", "Casablanca, Maroc", "Bon de commande", "BC-2026-031"],
  ];

  meta.forEach((row, index) => {
    const current = 8 + index;
    row.forEach((value, column) => {
      const cell = sheet.getCell(current, column + 1);
      cell.value = value;
      paint(cell, {
        fill: column % 2 === 0 ? COLORS.slate100 : COLORS.white,
        bold: column % 2 === 0,
        color: column % 2 === 0 ? COLORS.slate700 : COLORS.slate600,
        size: 10,
      });
    });
  });
  box(sheet, "A8:D10");

  const headerRow = 12;
  ["Désignation", "Qté", "Prix unitaire", "Total"].forEach((label, column) => {
    const cell = sheet.getCell(headerRow, column + 1);
    cell.value = label;
    paint(cell, {
      fill: COLORS.blue,
      color: COLORS.white,
      bold: true,
      size: 10,
      align: column === 0 ? "left" : "right",
    });
  });

  const items = [
    ["Création d'identité visuelle", 1, 1500],
    ["Déclinaison réseaux sociaux (8 visuels)", 1, 700],
    ["Charte typographique et couleurs", 1, 300],
    ["", null, null],
    ["", null, null],
    ["", null, null],
  ];

  items.forEach((item, index) => {
    const row = headerRow + 1 + index;
    sheet.getCell(row, 1).value = item[0];
    sheet.getCell(row, 2).value = item[1];
    sheet.getCell(row, 3).value = item[2];
    sheet.getCell(row, 4).value = {
      formula: `IF(OR(B${row}="",C${row}=""),0,B${row}*C${row})`,
    };

    paint(sheet.getCell(row, 1), { size: 10 });
    paint(sheet.getCell(row, 2), { size: 10, align: "center" });
    paint(sheet.getCell(row, 3), { size: 10, align: "right" });
    paint(sheet.getCell(row, 4), { size: 10, align: "right", bold: true });
    sheet.getCell(row, 3).numFmt = MONEY;
    sheet.getCell(row, 4).numFmt = MONEY;
  });

  const firstItem = headerRow + 1;
  const lastItem = headerRow + items.length;
  const totalsStart = lastItem + 2;

  const totals = [
    ["Total hors taxes", `SUM(D${firstItem}:D${lastItem})`],
    ["Remise éventuelle", 0],
    ...(tva
      ? [["TVA 20 %", `D${totalsStart}*0.2`]]
      : [["TVA", "Non applicable"]]),
  ];

  totals.forEach((entry, index) => {
    const row = totalsStart + index;
    sheet.mergeCells(`A${row}:C${row}`);
    const label = sheet.getCell(row, 1);
    label.value = entry[0];
    paint(label, { size: 10, bold: true, align: "right", fill: COLORS.slate100 });

    const value = sheet.getCell(row, 4);
    if (typeof entry[1] === "number" || String(entry[1]).startsWith("SUM") || String(entry[1]).includes("*")) {
      value.value = typeof entry[1] === "number" ? entry[1] : { formula: entry[1] };
      value.numFmt = MONEY;
    } else {
      value.value = entry[1];
    }
    paint(value, { size: 10, bold: true, align: "right", fill: COLORS.slate100 });
    box(sheet, `A${row}:D${row}`);
  });

  const netRow = totalsStart + totals.length;
  sheet.mergeCells(`A${netRow}:C${netRow}`);
  const netLabel = sheet.getCell(netRow, 1);
  netLabel.value = "NET À PAYER";
  paint(netLabel, {
    fill: COLORS.navy,
    color: COLORS.white,
    bold: true,
    size: 12,
    align: "right",
  });

  const netValue = sheet.getCell(netRow, 4);
  netValue.value = tva
    ? { formula: `D${totalsStart}+D${totalsStart + 1}+D${totalsStart + 2}` }
    : { formula: `D${totalsStart}+D${totalsStart + 1}` };
  netValue.numFmt = MONEY;
  paint(netValue, {
    fill: COLORS.navy,
    color: COLORS.white,
    bold: true,
    size: 12,
    align: "right",
  });
  box(sheet, `A${netRow}:D${netRow}`);

  sheet.mergeCells(`A${netRow + 2}:D${netRow + 2}`);
  const payment = sheet.getCell(netRow + 2, 1);
  payment.value =
    "Règlement par virement bancaire · CIH Bank — RIB 230 780 0000000000000000";
  paint(payment, { size: 9, color: COLORS.slate600 });

  sheet.mergeCells(`A${netRow + 3}:D${netRow + 4}`);
  const legal = sheet.getCell(netRow + 3, 1);
  legal.value = tva
    ? "TVA applicable au taux de 20 %. Document à conserver conformément à la réglementation en vigueur."
    : "Auto-entrepreneur immatriculé — TVA non applicable conformément au régime des auto-entrepreneurs.";
  paint(legal, { size: 8, color: COLORS.slate500 });

  sheet.getRow(1).height = 34;
  return sheet;
}

export async function buildInvoiceWorkbook(outputPath) {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "ProTemplates";
  workbook.created = new Date();

  invoiceSheet(workbook, {
    name: "Facture",
    title: "FACTURE",
    number: "FA-2026-014",
    tva: false,
  });

  invoiceSheet(workbook, {
    name: "Devis",
    title: "DEVIS",
    number: "DV-2026-014",
    tva: false,
  });

  const settings = workbook.addWorksheet("Paramètres");
  settings.columns = [{ width: 32 }, { width: 60 }];

  settings.getCell("A1").value = "VOS INFORMATIONS";
  paint(settings.getCell("A1"), {
    fill: COLORS.navy,
    color: COLORS.white,
    bold: true,
    size: 14,
  });
  settings.mergeCells("A1:B1");

  const rows = [
    ["Nom / raison sociale", "Votre nom ou celui de votre auto-entreprise"],
    ["Adresse", "12, rue Exemple, Casablanca"],
    ["ICE", "002849102000045"],
    ["IF", "40218763"],
    ["Téléphone", "+212 6 00 00 00 00"],
    ["E-mail", "contact@exemple.ma"],
    ["Banque", "CIH Bank"],
    ["RIB", "230 780 0000000000000000"],
    ["Taux de TVA", "Non applicable (auto-entrepreneur)"],
  ];

  rows.forEach((row, index) => {
    const current = 3 + index;
    settings.getCell(current, 1).value = row[0];
    settings.getCell(current, 2).value = row[1];
    paint(settings.getCell(current, 1), {
      fill: COLORS.slate100,
      bold: true,
      size: 10,
    });
    paint(settings.getCell(current, 2), { size: 10 });
    box(settings, `A${current}:B${current}`);
  });

  settings.mergeCells("A14:B16");
  const note = settings.getCell("A14");
  note.value =
    "Modifiez cette feuille puis recopiez les informations dans les onglets Facture et Devis. Les totaux se recalculent automatiquement.";
  paint(note, { size: 9, color: COLORS.slate600 });

  await ensureDir(outputPath.replace(/[\\/][^\\/]+$/, ""));
  await workbook.xlsx.writeFile(outputPath);
}

export async function buildVatWorkbook(outputPath) {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "ProTemplates";
  workbook.created = new Date();

  /* ------------------------------- Calculator ------------------------------ */
  const calc = workbook.addWorksheet("Calculateur TVA");
  calc.columns = [{ width: 34 }, { width: 22 }];

  calc.mergeCells("A1:B2");
  calc.getCell("A1").value = "CALCULATEUR TVA — MAROC";
  paint(calc.getCell("A1"), {
    fill: COLORS.navy,
    color: COLORS.white,
    bold: true,
    size: 16,
  });

  const input = [
    ["Montant hors taxes (MAD)", 10000],
    ["Taux de TVA (%)", 20],
  ];

  input.forEach((row, index) => {
    const current = 4 + index;
    calc.getCell(current, 1).value = row[0];
    calc.getCell(current, 2).value = row[1];
    paint(calc.getCell(current, 1), {
      fill: COLORS.slate100,
      bold: true,
      size: 10,
    });
    paint(calc.getCell(current, 2), { size: 10, align: "right" });
    box(calc, `A${current}:B${current}`);
  });
  calc.getCell("B4").numFmt = MONEY;

  const outputs = [
    ["TVA calculée", { formula: "B4*B5/100" }],
    ["Montant toutes taxes comprises", { formula: "B4+B6" }],
  ];
  outputs.forEach((row, index) => {
    const current = 6 + index;
    calc.getCell(current, 1).value = row[0];
    calc.getCell(current, 2).value = row[1];
    calc.getCell(current, 2).numFmt = MONEY;
    paint(calc.getCell(current, 1), { bold: true, size: 10 });
    paint(calc.getCell(current, 2), {
      bold: true,
      size: 11,
      align: "right",
      fill: COLORS.emeraldLight,
    });
    box(calc, `A${current}:B${current}`);
  });

  calc.mergeCells("A9:B9");
  calc.getCell("A9").value = "CALCUL INVERSE (À PARTIR DU TTC)";
  paint(calc.getCell("A9"), {
    fill: COLORS.blue,
    color: COLORS.white,
    bold: true,
    size: 11,
  });

  calc.getCell("A10").value = "Montant toutes taxes comprises";
  calc.getCell("B10").value = 12000;
  calc.getCell("B10").numFmt = MONEY;
  paint(calc.getCell("A10"), { fill: COLORS.slate100, bold: true, size: 10 });
  paint(calc.getCell("B10"), { size: 10, align: "right" });
  box(calc, "A10:B10");

  calc.getCell("A11").value = "Montant hors taxes";
  calc.getCell("B11").value = { formula: "B10/(1+B5/100)" };
  calc.getCell("B11").numFmt = MONEY;
  paint(calc.getCell("A11"), { bold: true, size: 10 });
  paint(calc.getCell("B11"), { bold: true, size: 10, align: "right" });
  box(calc, "A11:B11");

  calc.getCell("A12").value = "TVA déductible";
  calc.getCell("B12").value = { formula: "B10-B11" };
  calc.getCell("B12").numFmt = MONEY;
  paint(calc.getCell("A12"), { bold: true, size: 10 });
  paint(calc.getCell("B12"), { bold: true, size: 10, align: "right" });
  box(calc, "A12:B12");

  calc.mergeCells("A14:B16");
  calc.getCell("A14").value =
    "Ce calculateur est un outil d'aide. Vérifiez le taux applicable à votre activité et le régime fiscal dont vous relevez auprès de votre comptable.";
  paint(calc.getCell("A14"), { size: 9, color: COLORS.slate500 });

  /* ------------------------------ Declarations ----------------------------- */
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const decl = workbook.addWorksheet("Déclarations");
  decl.columns = [
    { width: 14 },
    { width: 18 },
    { width: 18 },
    { width: 18 },
    { width: 18 },
  ];

  decl.getCell("A1").value = "SUIVI MENSUEL DE LA TVA";
  paint(decl.getCell("A1"), {
    fill: COLORS.navy,
    color: COLORS.white,
    bold: true,
    size: 14,
  });
  decl.mergeCells("A1:E1");

  const headers = [
    "Mois",
    "CA hors taxes",
    "TVA collectée",
    "TVA déductible",
    "TVA à payer",
  ];
  headers.forEach((label, index) => {
    const cell = decl.getCell(3, index + 1);
    cell.value = label;
    paint(cell, {
      fill: COLORS.blue,
      color: COLORS.white,
      bold: true,
      size: 10,
      align: "center",
    });
  });

  months.forEach((month, index) => {
    const row = 4 + index;
    decl.getCell(row, 1).value = month;
    decl.getCell(row, 2).value = 0;
    decl.getCell(row, 3).value = { formula: `B${row}*20/100` };
    decl.getCell(row, 4).value = 0;
    decl.getCell(row, 5).value = { formula: `C${row}-D${row}` };

    for (let column = 1; column <= 5; column += 1) {
      const cell = decl.getCell(row, column);
      if (column > 1) cell.numFmt = MONEY;
      paint(cell, { size: 10, align: column === 1 ? "left" : "right" });
    }
  });

  const totalRow = 4 + months.length;
  decl.getCell(totalRow, 1).value = "TOTAL";
  for (let column = 2; column <= 5; column += 1) {
    const letter = String.fromCharCode(64 + column);
    decl.getCell(totalRow, column).value = {
      formula: `SUM(${letter}4:${letter}${totalRow - 1})`,
    };
    decl.getCell(totalRow, column).numFmt = MONEY;
  }
  for (let column = 1; column <= 5; column += 1) {
    paint(decl.getCell(totalRow, column), {
      fill: COLORS.slate100,
      bold: true,
      size: 10,
      align: column === 1 ? "left" : "right",
    });
  }

  await ensureDir(outputPath.replace(/[\\/][^\\/]+$/, ""));
  await workbook.xlsx.writeFile(outputPath);
}
