import { Layers, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

import { PartnerButton } from "@/components/layout/PartnerButton";
import { dictionaries } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/types/catalog";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1a4.2 4.2 0 0 1 3.8-2.1c4 0 4.8 2.5 4.8 5.8V21h-4v-5.6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21h-4V9Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M16.6 5.82A5.62 5.62 0 0 1 15.33 2h-3.1v12.4a2.6 2.6 0 1 1-1.85-2.49V8.74a5.72 5.72 0 1 0 4.95 5.66V8.2a8.7 8.7 0 0 0 4.67 1.35V6.44a5.6 5.6 0 0 1-3.4-.62Z" />
    </svg>
  );
}

const MARKETPLACE_LINKS = [
  { key: "footer.freePack", filter: "freebies" },
  { key: "footer.cvDecks", filter: "cv" },
  { key: "footer.webTiers", filter: "web" },
  { key: "footer.adminDocs", filter: "admin" },
] as const;

export function Footer({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2.5 text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Layers aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="text-xl font-extrabold">
                Pro<span className="text-blue-500">Templates</span>
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-relaxed">
              {dict["footer.tagline"]}
            </p>

            <div className="mt-5 flex items-center gap-3">
              {[
                {
                  name: "Instagram",
                  icon: <InstagramIcon className="h-4 w-4" />,
                  href: "https://instagram.com/protemplates.ma",
                },
                {
                  name: "TikTok",
                  icon: <TikTokIcon className="h-4 w-4" />,
                  href: "https://tiktok.com/@protemplates.ma",
                },
                {
                  name: "LinkedIn",
                  icon: <LinkedInIcon className="h-4 w-4" />,
                  href: "https://linkedin.com/company/protemplates-ma",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={dict["footer.social"].replace(
                    "{network}",
                    social.name,
                  )}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 transition-colors hover:border-blue-500 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              {dict["footer.marketplace"]}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {MARKETPLACE_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={`/${locale}?filter=${link.filter}#catalog`}
                    className="transition-colors hover:text-white"
                  >
                    {dict[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              {dict["footer.campus"]}
            </h2>
            <p className="mt-4 text-sm leading-relaxed">
              {dict["footer.campusBody"]}
            </p>
            <PartnerButton />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>{dict["footer.rights"].replace("{year}", String(year))}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <ShieldCheck aria-hidden="true" className="h-4 w-4 text-emerald-500" />
              {dict["footer.verified"]}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
              {dict["footer.original"]}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
