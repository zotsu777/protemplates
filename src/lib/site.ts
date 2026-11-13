export const SITE_NAME = "ProTemplates";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://protemplates.ma"
).replace(/\/$/, "");

export const SUPPORT_EMAIL = "clubs@protemplates.ma";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
