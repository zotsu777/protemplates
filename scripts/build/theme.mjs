/** Brand palette used across PPTX, DOCX, XLSX and SVG output. */
export const COLORS = {
  navy: "0F172A",
  navySoft: "1E293B",
  blue: "2563EB",
  blueDark: "1D4ED8",
  blueLight: "DBEAFE",
  emerald: "10B981",
  emeraldDark: "047857",
  emeraldLight: "D1FAE5",
  amber: "F59E0B",
  rose: "F43F5E",
  slate100: "F1F5F9",
  slate200: "E2E8F0",
  slate300: "CBD5E1",
  slate500: "64748B",
  slate600: "475569",
  slate700: "334155",
  white: "FFFFFF",
};

/** SVG-friendly hex values (same palette, #-prefixed). */
export const HEX = Object.fromEntries(
  Object.entries(COLORS).map(([name, value]) => [name, `#${value}`]),
);

export const FONT_FR = "Arial";
export const FONT_AR = "Arial";

/** 16:9 layout in inches. */
export const SLIDE = { width: 13.333, height: 7.5 };

/** Square social format in inches (1080 × 1080 px at 120 dpi). */
export const SQUARE = { width: 9, height: 9 };
