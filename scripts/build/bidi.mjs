/**
 * PowerPoint's bidi algorithm moves the neutral space that follows a Latin
 * token to the other side of that token inside an RTL paragraph, so
 * "مقاس 4:5 والستوري" renders as "مقاس 4:5والستوري". A right-to-left mark
 * (U+200F) directly after the token gives the following space an RTL context,
 * which keeps the gap. The mark is zero-width and invisible when rendered.
 */

const LATIN_TOKEN =
  /([@A-Za-z0-9][@A-Za-z0-9@#%+.,:;!?()/&'’"\-–—]*)(\s+)(?=[\u0600-\u06FF])/g;

/** Adds bidi marks so Arabic text keeps its spaces around Latin tokens. */
export function fixBidiSpacing(value, rtl) {
  if (!rtl) return value;
  return value.replace(LATIN_TOKEN, "$1\u200F$2");
}
