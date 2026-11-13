import AdmZip from "adm-zip";
import fs from "node:fs/promises";
import path from "node:path";

import { PFE_DECK, INVESTOR_DECK } from "./build/deck-content.mjs";
import { renderDeck } from "./build/deck.mjs";
import {
  ADMIN_DOCS,
  buildAdminDoc,
  buildExecutiveCv,
  buildInvoiceDoc,
  buildMotivationLetter,
  buildStudentCv,
} from "./build/docs.mjs";
import { buildExecutiveGraphics, buildSocialKit } from "./build/graphics.mjs";
import { buildInvoiceWorkbook, buildVatWorkbook } from "./build/sheets.mjs";
import { CAROUSEL_AR, CAROUSEL_FR, renderCarousel } from "./build/social-deck.mjs";
import { buildCodLanding, buildShowcaseSite } from "./build/sites/index.mjs";
import {
  DOWNLOADS_DIR,
  ROOT,
  STAGING_DIR,
  directorySize,
  ensureDir,
  formatBytes,
  listFiles,
  packageReadme,
  resetDir,
  writeText,
} from "./build/utils.mjs";

const PACKAGES = [];

function register(slug, dir, meta) {
  PACKAGES.push({ slug, dir, ...meta });
}

/* -------------------------------------------------------------------------- */
/* 1. Free bilingual student CV                                               */
/* -------------------------------------------------------------------------- */

async function buildFreeCv() {
  const dir = path.join(STAGING_DIR, "bilingual-student-cv");
  await ensureDir(dir);

  await buildStudentCv(path.join(dir, "CV-etudiant-FR.docx"), "fr");
  await buildStudentCv(path.join(dir, "CV-etudiant-AR.docx"), "ar");
  await buildMotivationLetter(path.join(dir, "Lettre-motivation-FR.docx"), "fr");
  await buildMotivationLetter(path.join(dir, "Lettre-motivation-AR.docx"), "ar");

  await writeText(
    path.join(dir, "LIRE-MOI.txt"),
    packageReadme({
      name: "CV étudiant bilingue + lettre de motivation",
      tagline:
        "Deux CV et deux lettres prêts à éditer, en français et en arabe (RTL natif).",
      contents: [
        "CV-etudiant-FR.docx — CV une page, français, compatible ATS",
        "CV-etudiant-AR.docx — CV une page, arabe, mise en page RTL",
        "Lettre-motivation-FR.docx — lettre formelle en français",
        "Lettre-motivation-AR.docx — lettre formelle en arabe",
      ],
      steps: [
        "Ouvrez le fichier .docx dans Word, Google Docs ou LibreOffice.",
        "Remplacez le nom, les coordonnées et les expériences par les vôtres.",
        "Enregistrez en PDF (Fichier > Enregistrer sous > PDF) avant d'envoyer.",
      ],
      notes: [
        "La police Arial est utilisée partout pour rester compatible avec les ordinateurs des recruteurs.",
        "Si vous ouvrez la version arabe sur un poste sans police arabe, installez Cairo ou Noto Kufi Arabic.",
        "Le CV tient sur une page ; supprimez une expérience plutôt que de réduire la police sous 10 pt.",
      ],
    }),
  );

  register("bilingual-student-cv", dir, {
    label: "CV + lettre de motivation (FR/AR)",
    fileCount: 5,
  });
}

/* -------------------------------------------------------------------------- */
/* 2. Free auto-entrepreneur invoice kit                                      */
/* -------------------------------------------------------------------------- */

async function buildFreeInvoice() {
  const dir = path.join(STAGING_DIR, "auto-entrepreneur-invoice-kit");
  await ensureDir(dir);

  await buildInvoiceWorkbook(path.join(dir, "Facture-Devis-auto-entrepreneur.xlsx"));
  await buildInvoiceDoc(path.join(dir, "Modele-Facture-FR.docx"), {
    lang: "fr",
    kind: "facture",
  });
  await buildInvoiceDoc(path.join(dir, "Modele-Devis-FR.docx"), {
    lang: "fr",
    kind: "devis",
  });
  await buildInvoiceDoc(path.join(dir, "Modele-Facture-AR.docx"), {
    lang: "ar",
    kind: "facture",
  });
  await buildInvoiceDoc(path.join(dir, "Modele-Devis-AR.docx"), {
    lang: "ar",
    kind: "devis",
  });

  await writeText(
    path.join(dir, "LIRE-MOI.txt"),
    packageReadme({
      name: "Factures & devis — auto-entrepreneur marocain",
      tagline:
        "Un classeur Excel avec calculs automatiques et quatre modèles Word bilingues.",
      contents: [
        "Facture-Devis-auto-entrepreneur.xlsx — 2 factures + 1 devis avec formules",
        "Modele-Facture-FR.docx — facture française, mentions légales incluses",
        "Modele-Devis-FR.docx — devis français avec validité 30 jours",
        "Modele-Facture-AR.docx — facture en arabe, mise en page RTL",
        "Modele-Devis-AR.docx — devis en arabe",
      ],
      steps: [
        "Ouvrez l'onglet « Paramètres » du fichier Excel et saisissez vos informations.",
        "Remplissez les lignes de prestation : les totaux se recalculent seuls.",
        "Pour un document PDF propre, utilisez les modèles Word et exportez en PDF.",
      ],
      notes: [
        "La TVA est marquée « non applicable » car le régime auto-entrepreneur en est exonéré.",
        "Si vous facturez sous un autre régime, activez la ligne TVA dans Excel ou modifiez le taux.",
        "Ces modèles sont des aides : faites valider vos mentions par votre comptable.",
      ],
    }),
  );

  register("auto-entrepreneur-invoice-kit", dir, {
    label: "Factures & devis Excel + Word",
    fileCount: 6,
  });
}

/* -------------------------------------------------------------------------- */
/* 3 & 6. Pitch decks                                                         */
/* -------------------------------------------------------------------------- */

async function buildDeckPackage({ deck, slug, label, notes }) {
  const dir = path.join(STAGING_DIR, slug);
  await ensureDir(dir);

  await renderDeck({
    title: deck.title.fr,
    subject: "Modèle de présentation ProTemplates",
    rtl: false,
    slides: deck.slides.fr,
    outputPath: path.join(dir, `${slug === "pfe-defense-pitch-deck" ? "Soutenance-PFE-FR" : "Pitch-investisseurs-FR"}.pptx`),
  });
  await renderDeck({
    title: deck.title.ar,
    subject: "قالب عرض من ProTemplates",
    rtl: true,
    slides: deck.slides.ar,
    outputPath: path.join(dir, `${slug === "pfe-defense-pitch-deck" ? "Soutenance-PFE-AR" : "Pitch-investisseurs-AR"}.pptx`),
  });

  await writeText(path.join(dir, "LIRE-MOI.txt"), packageReadme(notes));

  register(slug, dir, { label, fileCount: 3 });
}

/* -------------------------------------------------------------------------- */
/* 4. Executive CV + LinkedIn banner                                          */
/* -------------------------------------------------------------------------- */

async function buildExecCv() {
  const dir = path.join(STAGING_DIR, "executive-cv-linkedin-banner");
  await ensureDir(dir);

  await buildExecutiveCv(path.join(dir, "CV-executif-FR.docx"), "fr");
  await buildExecutiveCv(path.join(dir, "CV-executif-AR.docx"), "ar");
  await buildExecutiveGraphics(path.join(dir, "bannieres"));

  await writeText(
    path.join(dir, "LIRE-MOI.txt"),
    packageReadme({
      name: "CV exécutif + bannière LinkedIn",
      tagline:
        "Un CV de direction et deux bannières LinkedIn vectorielles, en français et en arabe.",
      contents: [
        "CV-executif-FR.docx — CV deux pages orienté résultats",
        "CV-executif-AR.docx — même CV en arabe RTL",
        "bannieres/linkedin-banner-1584x396.svg — format bureau",
        "bannieres/linkedin-banner-1128x191.svg — format compact",
      ],
      steps: [
        "Modifiez le CV dans Word puis exportez-le en PDF.",
        "Ouvrez le SVG dans Figma, Illustrator, Inkscape ou Canva (import SVG).",
        "Remplacez le nom, le poste et les initiales, puis exportez en PNG pour LinkedIn.",
      ],
      notes: [
        "Les bannières sont vectorielles : elles restent nettes à toutes les tailles.",
        "LinkedIn compresse les images : exportez en PNG à 2× pour garder un rendu net.",
        "Le CV met en avant les chiffres ; gardez ce style en remplaçant les exemples par vos résultats.",
      ],
    }),
  );

  register("executive-cv-linkedin-banner", dir, {
    label: "CV exécutif + bannières LinkedIn",
    fileCount: 5,
  });
}

/* -------------------------------------------------------------------------- */
/* 5. Moroccan TPE admin pack                                                 */
/* -------------------------------------------------------------------------- */

async function buildAdminPack() {
  const dir = path.join(STAGING_DIR, "moroccan-tpe-admin-pack");
  await ensureDir(dir);

  for (const doc of ADMIN_DOCS) {
    await buildAdminDoc(path.join(dir, `${doc.file}.docx`), doc);
  }
  await buildVatWorkbook(path.join(dir, "Suivi-TVA-Mensuelle.xlsx"));

  await writeText(
    path.join(dir, "LIRE-MOI.txt"),
    packageReadme({
      name: "Pack administratif TPE marocaine — 10 documents",
      tagline:
        "Devis, facture, bons, contrats CDD/CDI, NDA, attestation, relance, PV et suivi TVA.",
      contents: [
        "01-Devis-Commercial.docx",
        "02-Facture.docx",
        "03-Bon-de-Livraison.docx",
        "04-Bon-de-Commande.docx",
        "05-Contrat-CDD.docx",
        "06-Contrat-CDI.docx",
        "07-Accord-Confidentialite-NDA.docx",
        "08-Attestation-de-Travail.docx",
        "09-Lettre-de-Relance.docx",
        "10-PV-de-Reception.docx",
        "Suivi-TVA-Mensuelle.xlsx — calculateur + suivi des 12 mois",
      ],
      steps: [
        "Ouvrez le document dont vous avez besoin dans Word.",
        "Remplacez les champs en gras (ICE, IF, RC, montants, dates).",
        "Faites relire les contrats par votre comptable ou votre avocat avant signature.",
      ],
      notes: [
        "Les documents sont bilingues : titre et clauses en français, titre en arabe.",
        "Les montants et taux sont des exemples à adapter à votre activité.",
        "Le Code du travail marocain évolue : vérifiez les durées et indemnités en vigueur.",
      ],
    }),
  );

  register("moroccan-tpe-admin-pack", dir, {
    label: "10 documents administratifs + suivi TVA",
    fileCount: 12,
  });
}

/* -------------------------------------------------------------------------- */
/* 7. COD landing page                                                        */
/* -------------------------------------------------------------------------- */

async function buildLanding() {
  const dir = path.join(STAGING_DIR, "cod-ecommerce-landing-page");
  await buildCodLanding(dir);

  register("cod-ecommerce-landing-page", dir, {
    label: "Landing page COD (1 fichier HTML)",
    fileCount: 2,
  });
}

/* -------------------------------------------------------------------------- */
/* 8. Five-page TPE website                                                    */
/* -------------------------------------------------------------------------- */

async function buildWebsite() {
  const dir = path.join(STAGING_DIR, "tpe-agency-website");
  await buildShowcaseSite(dir);

  register("tpe-agency-website", dir, {
    label: "Site vitrine 5 pages FR/AR",
    fileCount: 8,
  });
}

/* -------------------------------------------------------------------------- */
/* 9. Startup bundle                                                          */
/* -------------------------------------------------------------------------- */

async function buildBundle() {
  const dir = path.join(STAGING_DIR, "startup-launch-bundle");
  await ensureDir(dir);

  const deckDir = path.join(dir, "01-Pitch-investisseurs");
  await ensureDir(deckDir);
  await renderDeck({
    title: INVESTOR_DECK.title.fr,
    subject: "Modèle de présentation ProTemplates",
    rtl: false,
    slides: INVESTOR_DECK.slides.fr,
    outputPath: path.join(deckDir, "Pitch-investisseurs-FR.pptx"),
  });
  await renderDeck({
    title: INVESTOR_DECK.title.ar,
    subject: "قالب عرض من ProTemplates",
    rtl: true,
    slides: INVESTOR_DECK.slides.ar,
    outputPath: path.join(deckDir, "Pitch-investisseurs-AR.pptx"),
  });

  const adminDir = path.join(dir, "02-Pack-administratif");
  await ensureDir(adminDir);
  for (const doc of ADMIN_DOCS) {
    await buildAdminDoc(path.join(adminDir, `${doc.file}.docx`), doc);
  }
  await buildVatWorkbook(path.join(adminDir, "Suivi-TVA-Mensuelle.xlsx"));

  await buildShowcaseSite(path.join(dir, "03-Site-vitrine"));
  await buildCodLanding(path.join(dir, "04-Landing-COD"));
  const socialDir = path.join(dir, "05-Kit-reseaux-sociaux");
  await buildSocialKit(path.join(socialDir, "visuels"));
  await renderCarousel({
    outputPath: path.join(socialDir, "Carrousel-Instagram-FR.pptx"),
    slides: CAROUSEL_FR,
    rtl: false,
  });
  await renderCarousel({
    outputPath: path.join(socialDir, "Carrousel-Instagram-AR.pptx"),
    slides: CAROUSEL_AR,
    rtl: true,
  });

  await writeText(
    path.join(dir, "LIRE-MOI.txt"),
    packageReadme({
      name: "Pack lancement startup — 5 produits réunis",
      tagline:
        "Pitch investisseurs, pack administratif, site vitrine, landing COD et kit social.",
      contents: [
        "01-Pitch-investisseurs/ — présentation 22 slides FR et AR",
        "02-Pack-administratif/ — 10 documents Word + suivi TVA Excel",
        "03-Site-vitrine/ — site 5 pages bilingue, HTML autonome",
        "04-Landing-COD/ — landing page paiement à la livraison",
        "05-Kit-reseaux-sociaux/ — visuels SVG et carrousel PowerPoint",
      ],
      steps: [
        "Commencez par le LIRE-MOI de chaque sous-dossier : ils sont indépendants.",
        "Remplacez partout le nom, le téléphone, l'e-mail et l'adresse par les vôtres.",
        "Les fichiers sont à vous : conservez-les dans un dossier sauvegardé.",
      ],
      notes: [
        "Vous payez une seule fois, sans abonnement ni licence à renouveler.",
        "Les visuels SVG s'ouvrent dans Figma, Illustrator, Inkscape et Canva.",
        "Les polices utilisées sont Arial (FR) et Arial / Cairo (AR).",
      ],
    }),
  );

  register("startup-launch-bundle", dir, {
    label: "Bundle 5 produits (deck, admin, site, COD, social)",
    fileCount: 30,
  });
}

/* -------------------------------------------------------------------------- */
/* 10. Instagram / social media kit                                           */
/* -------------------------------------------------------------------------- */

async function buildSocialKitPackage() {
  const dir = path.join(STAGING_DIR, "instagram-social-media-kit");
  await ensureDir(dir);

  await buildSocialKit(path.join(dir, "visuels"));

  await renderCarousel({
    outputPath: path.join(dir, "Carrousel-Instagram-FR.pptx"),
    slides: CAROUSEL_FR,
    rtl: false,
  });
  await renderCarousel({
    outputPath: path.join(dir, "Carrousel-Instagram-AR.pptx"),
    slides: CAROUSEL_AR,
    rtl: true,
  });

  await writeText(
    path.join(dir, "LIRE-MOI.txt"),
    packageReadme({
      name: "Kit réseaux sociaux — Instagram, LinkedIn, YouTube",
      tagline:
        "12 visuels vectoriels bilingues et deux carrousels PowerPoint éditables.",
      contents: [
        "visuels/post-square-1080-fr.svg — post carré 1080 × 1080",
        "visuels/post-square-1080-ar.svg — post carré en arabe",
        "visuels/post-square-light-1080-fr.svg — variante claire",
        "visuels/post-4x5-1080x1350-fr.svg — format 4:5",
        "visuels/story-1080x1920-fr.svg — story / reel FR",
        "visuels/story-1080x1920-ar.svg — story AR",
        "visuels/quote-square-1080-fr.svg — citation",
        "visuels/linkedin-banner-1584x396.svg — bannière LinkedIn",
        "visuels/linkedin-banner-1128x191.svg — bannière compacte",
        "visuels/linkedin-post-1200x1200.svg — post LinkedIn",
        "visuels/youtube-thumbnail-1280x720.svg — miniature YouTube",
        "visuels/facebook-cover-820x312.svg — couverture Facebook",
        "visuels/x-header-1500x500.svg — bannière X",
        "visuels/profile-avatar-1080.svg — avatar / logo",
        "Carrousel-Instagram-FR.pptx — 10 slides carrées éditables",
        "Carrousel-Instagram-AR.pptx — 10 slides en arabe RTL",
      ],
      steps: [
        "Ouvrez le SVG dans Figma, Illustrator, Inkscape ou importez-le dans Canva.",
        "Remplacez le texte, le logo et les couleurs de la marque.",
        "Exportez en PNG (2×) pour Instagram, ou en JPG pour Facebook.",
        "Pour le carrousel, modifiez le texte dans PowerPoint puis exportez chaque slide en image.",
      ],
      notes: [
        "Les tailles respectent les recommandations 2026 des plateformes.",
        "Les visuels sont vectoriels : aucune perte de qualité à l'agrandissement.",
        "Le carrousel est un fichier PowerPoint carré ; chaque slide peut être exportée en PNG depuis PowerPoint.",
      ],
    }),
  );

  register("instagram-social-media-kit", dir, {
    label: "12 visuels SVG + 2 carrousels PPTX",
    fileCount: 18,
  });
}

/* -------------------------------------------------------------------------- */
/* Zip + manifest                                                             */
/* -------------------------------------------------------------------------- */

async function main() {
  await resetDir(STAGING_DIR);
  await ensureDir(DOWNLOADS_DIR);

  const started = Date.now();
  console.log("Building packages…");

  await buildFreeCv();
  await buildFreeInvoice();
  await buildDeckPackage({
    deck: PFE_DECK,
    slug: "pfe-defense-pitch-deck",
    label: "Deck PFE 18 slides (FR/AR)",
    notes: {
      name: "Soutenance PFE — PowerPoint 18 slides",
      tagline:
        "Une trame complète de soutenance de fin d'études, en français et en arabe RTL.",
      contents: [
        "Soutenance-PFE-FR.pptx — 18 slides avec notes du présentateur",
        "Soutenance-PFE-AR.pptx — 18 slides en arabe, alignement RTL",
      ],
      steps: [
        "Ouvrez le fichier correspondant à votre langue de soutenance.",
        "Remplacez le titre, le nom, l'école et les chiffres par les vôtres.",
        "Lisez les notes du présentateur : elles donnent un script par slide.",
        "Exportez en PDF pour éviter toute modification involontaire le jour J.",
      ],
      notes: [
        "La structure suit le plan attendu : contexte, objectifs, existant, besoins, conception, réalisation, tests, conclusion.",
        "Les slides 12 à 16 contiennent des exemples de diagrammes UML à remplacer par les vôtres.",
        "Conservez 10 à 12 minutes de parole : coupez des slides plutôt que d'accélérer.",
      ],
    },
  });
  await buildExecCv();
  await buildAdminPack();
  await buildDeckPackage({
    deck: INVESTOR_DECK,
    slug: "startup-investor-pitch-deck",
    label: "Deck investisseurs 22 slides (FR/AR)",
    notes: {
      name: "Pitch investisseurs — PowerPoint 22 slides",
      tagline:
        "Une présentation d'amorçage complète : problème, marché, modèle, traction, équipe, demande.",
      contents: [
        "Pitch-investisseurs-FR.pptx — 22 slides avec notes",
        "Pitch-investisseurs-AR.pptx — 22 slides en arabe RTL",
      ],
      steps: [
        "Remplacez les chiffres de marché et de traction par vos sources.",
        "Adaptez la diapositive « ask » au montant réellement recherché.",
        "Chronométrez-vous : la version complète dure 12 minutes.",
      ],
      notes: [
        "Chaque slide répond à une seule question d'investisseur.",
        "Les projections sont des exemples : remplacez-les par votre modèle financier.",
        "Gardez la même police et la même palette pour rester crédible.",
      ],
    },
  });
  await buildLanding();
  await buildWebsite();
  await buildBundle();
  await buildSocialKitPackage();

  const manifest = {};

  for (const pkg of PACKAGES) {
    const zip = new AdmZip();
    zip.addLocalFolder(pkg.dir);
    const zipPath = path.join(DOWNLOADS_DIR, `${pkg.slug}.zip`);
    zip.writeZip(zipPath);

    const stat = await fs.stat(zipPath);
    const files = await listFiles(pkg.dir);
    const rawBytes = await directorySize(pkg.dir);

    manifest[pkg.slug] = {
      href: `/downloads/${pkg.slug}.zip`,
      bytes: stat.size,
      rawBytes,
      files: files.length,
      label: pkg.label,
    };

    console.log(
      `  ✓ ${pkg.slug.padEnd(34)} ${String(files.length).padStart(3)} files · ${formatBytes(stat.size)}`,
    );
  }

  manifest.generatedAt = new Date().toISOString();

  const manifestPath = path.join(ROOT, "src", "lib", "downloads.generated.json");
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  await fs.writeFile(
    path.join(DOWNLOADS_DIR, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );

  await fs.rm(STAGING_DIR, { recursive: true, force: true });

  console.log(
    `\nDone in ${((Date.now() - started) / 1000).toFixed(1)}s — ${PACKAGES.length} packages written to public/downloads.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
