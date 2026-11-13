import AdmZip from "adm-zip";
import ExcelJS from "exceljs";
import fs from "node:fs";
import path from "node:path";

let failures = 0;
const fail = (msg) => { failures++; console.log("FAIL", msg); };

for (const zipFile of fs.readdirSync("public/downloads").filter(f => f.endsWith(".zip"))) {
  const zip = new AdmZip(path.join("public/downloads", zipFile));
  const entries = zip.getEntries();
  let docx = 0, pptx = 0, xlsx = 0, svg = 0, html = 0;
  for (const entry of entries) {
    const name = entry.entryName;
    const data = entry.getData();
    if (name.endsWith(".docx")) {
      docx++;
      const inner = new AdmZip(data).getEntry("word/document.xml");
      if (!inner) fail(`${zipFile}:${name} missing document.xml`);
      else {
        const xml = inner.getData().toString("utf8");
        if (xml.length < 1000) fail(`${zipFile}:${name} suspiciously small`);
        if (!/[\u0600-\u06FF]/.test(xml) && name.includes("-AR")) fail(`${zipFile}:${name} has no Arabic`);
      }
    }
    if (name.endsWith(".pptx")) {
      pptx++;
      const inner = new AdmZip(data);
      const slides = inner.getEntries().filter(e => /ppt\/slides\/slide\d+\.xml$/.test(e.entryName));
      if (slides.length < 9) fail(`${zipFile}:${name} only ${slides.length} slides`);
      const hasAr = slides.some(s => /[\u0600-\u06FF]/.test(s.getData().toString("utf8")));
      if (name.includes("-AR") && !hasAr) fail(`${zipFile}:${name} slides have no Arabic`);
    }
    if (name.endsWith(".xlsx")) {
      xlsx++;
      const wb = new ExcelJS.Workbook();
      await wb.xlsx.load(data);
      if (!wb.worksheets.length) fail(`${zipFile}:${name} no sheets`);
    }
    if (name.endsWith(".svg")) {
      svg++;
      const text = data.toString("utf8");
      if (!text.startsWith("<svg")) fail(`${zipFile}:${name} is not valid SVG`);
      if (!text.includes("</svg>")) fail(`${zipFile}:${name} unclosed SVG`);
    }
    if (name.endsWith(".html")) {
      html++;
      const text = data.toString("utf8");
      if (!text.includes("</html>")) fail(`${zipFile}:${name} unclosed HTML`);
    }
  }
  console.log(`${zipFile.padEnd(38)} docx:${docx} pptx:${pptx} xlsx:${xlsx} svg:${svg} html:${html} files:${entries.length}`);
}
console.log(failures === 0 ? "ALL CHECKS PASSED" : `${failures} FAILURES`);
process.exit(failures ? 1 : 0);
