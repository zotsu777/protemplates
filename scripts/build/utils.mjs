import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
);

export const STAGING_DIR = path.join(ROOT, "scripts", ".generated");
export const DOWNLOADS_DIR = path.join(ROOT, "public", "downloads");

export async function resetDir(dir) {
  await fs.rm(dir, { recursive: true, force: true });
  await fs.mkdir(dir, { recursive: true });
}

export async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

/** UTF-8 with a BOM + CRLF so Windows Notepad renders Arabic correctly. */
export async function writeText(file, text) {
  await ensureDir(path.dirname(file));
  const normalized = text.replace(/\r?\n/g, "\r\n");
  await fs.writeFile(file, `\uFEFF${normalized}`, "utf8");
}

/** Source files (HTML, CSS, JS, SVG) are written as plain UTF-8 LF. */
export async function writeSource(file, text) {
  await ensureDir(path.dirname(file));
  await fs.writeFile(file, text.replace(/\r?\n/g, "\n"), "utf8");
}

export async function writeBuffer(file, buffer) {
  await ensureDir(path.dirname(file));
  await fs.writeFile(file, buffer);
}

export async function listFiles(dir, base = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(absolute, base)));
    } else {
      files.push(path.relative(base, absolute).replace(/\\/g, "/"));
    }
  }

  return files.sort((a, b) => a.localeCompare(b, "en"));
}

export async function directorySize(dir) {
  const files = await listFiles(dir);
  let total = 0;
  for (const file of files) {
    const stat = await fs.stat(path.join(dir, file));
    total += stat.size;
  }
  return total;
}

export function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Shared readme/manifest text. Every package explains what is inside, how to
 * open the files and what is intentionally left as a placeholder.
 */
export function packageReadme({ name, tagline, contents, steps, notes = [] }) {
  const lines = [
    "ProTemplates — protemplates.ma",
    "=".repeat(60),
    "",
    name,
    tagline,
    "",
    "CONTENU DU PACK / محتوى الحزمة",
    "-".repeat(60),
    ...contents.map((line) => `• ${line}`),
    "",
    "DÉMARRAGE RAPIDE / البدء السريع",
    "-".repeat(60),
    ...steps.map((line, index) => `${index + 1}. ${line}`),
    "",
  ];

  if (notes.length > 0) {
    lines.push("À SAVOIR / ملاحظات", "-".repeat(60));
    lines.push(...notes.map((line) => `• ${line}`));
    lines.push("");
  }

  lines.push(
    "Les polices utilisées sont Arial (FR) et Arial / Cairo (AR). Si votre",
    "machine n'a pas Cairo, installez-la ou remplacez la police dans Word,",
    "PowerPoint ou votre éditeur SVG.",
    "",
    "Support : clubs@protemplates.ma",
    "Merci d'avoir choisi ProTemplates !",
    "",
  );

  return lines.join("\n");
}
