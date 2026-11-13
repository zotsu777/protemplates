import { NextResponse, type NextRequest } from "next/server";

import { LOCALES, negotiateLocale } from "@/lib/i18n/config";

/**
 * Every page lives under /{locale}. Requests without a locale prefix are
 * redirected to the visitor's best match, keeping URLs canonical and making
 * hreflang reliable.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = negotiateLocale(request.headers.get("accept-language"));
  const suffix = pathname === "/" ? "" : pathname;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${suffix}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
