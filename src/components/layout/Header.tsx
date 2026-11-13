"use client";

import { Layers, Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useCart } from "@/components/providers/CartProvider";
import { useI18n } from "@/components/providers/LocaleProvider";
import type { TranslationKey } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

const NAV_LINKS: readonly { readonly href: string; readonly key: TranslationKey }[] =
  [
    { href: "#catalog", key: "nav.catalog" },
    { href: "#pricing", key: "nav.pricing" },
    { href: "#why-us", key: "nav.why" },
    { href: "#how-it-works", key: "nav.how" },
  ];

export function Header() {
  const { locale, t } = useI18n();
  const { count, openCart, isHydrated } = useCart();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="ProTemplates"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-slate-900 text-white shadow-md transition-transform group-hover:scale-105">
            <Layers aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="flex items-baseline">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Pro<span className="text-blue-600">Templates</span>
            </span>
            <span className="ms-1.5 hidden rounded-md border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 sm:inline-block">
              {t("brand.market")}
            </span>
          </span>
        </Link>

        <nav
          aria-label={t("nav.catalog")}
          className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}${link.href}`}
              className="transition-colors hover:text-blue-600"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={openCart}
            aria-label={t(count === 1 ? "a11y.cartCountOne" : "a11y.cartCount", {
              count,
            })}
            className="relative flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600"
          >
            <ShoppingBag aria-hidden="true" className="h-4 w-4" />
            <span className="hidden sm:inline">{t("nav.cart")}</span>
            <span
              aria-hidden="true"
              className={cn(
                "flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-extrabold",
                count > 0
                  ? "bg-emerald-500 text-slate-950"
                  : "bg-slate-700 text-slate-200",
              )}
            >
              {isHydrated ? count : 0}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 md:hidden"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-nav"
          aria-label={t("nav.catalog")}
          className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={`/${locale}${link.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
