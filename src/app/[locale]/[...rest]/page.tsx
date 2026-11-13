import { notFound } from "next/navigation";

/**
 * Catches any unmatched path below a locale (e.g. /en/typo) and renders the
 * localised 404 boundary inside the normal layout.
 */
export default function CatchAllPage() {
  notFound();
}
