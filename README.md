# ProTemplates

Production rewrite of the ProTemplates storefront — a Moroccan digital-template
marketplace for students, freelancers and small businesses (TPE).

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4 and React 19.
Trilingual storefront (English / French / Arabic) with real RTL layout, local
MAD pricing and a pluggable payment layer.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /en
```

| Script                      | Purpose                                        |
| --------------------------- | ---------------------------------------------- |
| `npm run dev`               | Development server (hot reload)                |
| `npm run build`             | Production build (40 static pages)             |
| `npm start`                 | Serve the production build                     |
| `npm run lint`              | ESLint (next/core-web-vitals)                  |
| `npm run typecheck`         | `tsc --noEmit`                                 |
| `npm run generate:downloads`| Rebuild every template ZIP in `public/downloads` |

Optional environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com   # canonical URLs, sitemap, hreflang
```

## Project structure

```
src/
├─ app/
│  ├─ [locale]/                 Root layout + routes (en | fr | ar)
│  │  ├─ layout.tsx             <html lang/dir>, fonts, metadata, providers
│  │  ├─ page.tsx               Hero · Catalog · Pricing · Why us · How it works
│  │  ├─ not-found.tsx
│  │  └─ templates/[slug]/      Statically generated product pages
│  ├─ api/checkout/route.ts     Validated mock checkout endpoint
│  ├─ sitemap.ts  robots.ts     SEO routes (all locales + hreflang)
│  └─ globals.css               Tailwind theme, fonts, motion
├─ components/
│  ├─ layout/                   Header, Footer, language switcher
│  ├─ hero/                     Hero section
│  ├─ catalog/                  Catalog grid, cards, filter, skeleton
│  ├─ preview/                  LTR/RTL preview canvas + modal
│  ├─ cart/                     Slide-over cart + checkout
│  ├─ sections/                 Pricing, Why us, How it works
│  ├─ templates/                Product page components
│  ├─ providers/                Locale, cart (localStorage), toast
│  ├─ seo/                      JSON-LD
│  └─ ui/                       Dialog primitive, icon mapping
├─ lib/
│  ├─ templates.ts              Product catalog (copy in 3 locales)
│  ├─ pricing.ts  content.ts    Pricing tiers, pillars, workflow steps
│  ├─ i18n/                     Locale config + typed dictionaries
│  ├─ payments.ts               PaymentProvider interface + mock adapter
│  ├─ format.ts                 MAD formatting
│  ├─ downloads.ts              Typed access to generated ZIP metadata
│  ├─ downloads.generated.json  ZIP sizes/counts (committed)
│  └─ site.ts                   Site constants
├─ types/catalog.ts             Shared domain types
└─ middleware.ts                Locale negotiation + redirects

scripts/
├─ generate-templates.mjs       Builds all 10 packages + manifest
└─ build/                       DOCX, XLSX, PPTX, SVG and HTML generators

public/downloads/               Generated ZIP archives (committed)
```

## Localisation

- URLs are locale-prefixed: `/en`, `/fr`, `/ar`. `/` redirects to the visitor's
  best match from `Accept-Language`.
- `<html lang="ar" dir="rtl">` is set server-side, so RTL needs no client JS.
- UI strings live in `src/lib/i18n/dictionaries.ts`. `en` defines the schema —
  adding a key to `en` without adding it to `fr`/`ar` fails `tsc`.
- Product copy lives with the product in `src/lib/templates.ts`, so translators
  can edit catalog text without touching interface strings.
- Every page emits `hreflang` alternates and a canonical URL.

## Catalog

Templates are typed objects in `src/lib/templates.ts`:

```ts
{
  id: "tpl-pfe-deck",
  slug: "pfe-defense-pitch-deck",   // drives /[locale]/templates/[slug]
  category: "pitch",                // freebies | cv | pitch | web | social | admin | bundle
  priceMad: 49,
  tools: ["PowerPoint", "Figma"],
  gradient: { from: "from-blue-600", to: "to-indigo-700" },
  title: { en, fr, ar },
  description: { en, fr, ar },
  includes: { en: [], fr: [], ar: [] },
  previews: { fr: {...}, ar: {...} }, // LTR/RTL mockup content
}
```

Adding a template automatically produces its detail page, sitemap entry,
category counts and related-product links.

## Download packages

Every product ships a real, editable archive in `public/downloads/<slug>.zip`.
The generators use `docx`, `exceljs`, `pptxgenjs` and plain SVG/HTML strings —
no flattened PNG exports, no placeholder files:

| Slug | Contents |
| ---- | -------- |
| `bilingual-student-cv` | 2 CV + 2 cover letters (FR/AR RTL) |
| `auto-entrepreneur-invoice-kit` | Excel workbook + 4 invoice/quote DOCX |
| `pfe-defense-pitch-deck` | 18-slide thesis defence deck, FR + AR |
| `executive-cv-linkedin-banner` | 2 executive CV DOCX + 2 LinkedIn SVG |
| `moroccan-tpe-admin-pack` | 10 admin/legal DOCX + VAT tracker XLSX |
| `startup-investor-pitch-deck` | 22-slide investor deck, FR + AR |
| `cod-ecommerce-landing-page` | Single-file bilingual COD landing page |
| `tpe-agency-website` | 5-page FR/AR showcase site |
| `startup-launch-bundle` | Deck + admin pack + site + landing + social kit |
| `instagram-social-media-kit` | 12 SVG formats + 2 carousel PPTX |

Regenerate after changing any generator:

```bash
npm run generate:downloads
```

This rewrites the ZIPs, `public/downloads/manifest.json` and
`src/lib/downloads.generated.json` (file counts and sizes shown in the UI).
Both are committed, so a plain `npm run build` works without running the
generator.

**Free products** link straight to their ZIP from the card, the preview dialog
and the detail page. **Paid products** go through the cart and the success
screen of the checkout drawer lists one download link per purchased item.

> Gating note: ZIPs are served as static files under `/downloads`, so anyone
> with the URL can fetch them. The current checkout is a mock. For real
> protection, move the archives to private storage and issue short-lived signed
> URLs from the checkout route once a payment provider is connected.

## Payments

`src/lib/payments.ts` defines a `PaymentProvider` interface. The UI only talks
to that interface, so going live means writing one adapter:

```ts
export const cmiProvider: PaymentProvider = {
  id: "cmi",
  async createIntent({ amountMad, method }) {
    // call the CMI / Stripe / PayPal API here
  },
};
```

Then point `paymentProvider` at it. The checkout route re-prices every line from
the catalog server-side — client-supplied prices are never trusted — and
de-duplicates item ids.

> The shipped adapter is a mock: it approves instantly and stores nothing.

## Accessibility

- Dialogs (cart, preview) trap focus, close on `Escape`/backdrop, lock body
  scroll and restore focus to the trigger.
- Toasts announce via `aria-live="polite"`.
- Filters use `aria-pressed`, the cart count has a descriptive label, and there
  is a skip-to-content link.
- `prefers-reduced-motion` disables all animation.

## Deploy

Any Node 20+ host works (Vercel is the simplest):

```bash
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the public domain so canonicals, hreflang and the
sitemap point at the right place.
