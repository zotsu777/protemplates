import { ensureDir, writeSource } from "../utils.mjs";
import { SCRIPT, SITE_CSS } from "./shared.mjs";
import { homePage, servicesPage } from "./pages-main.mjs";
import { aboutPage, contactPage, realisationsPage } from "./site-pages.mjs";
import { buildCodLanding } from "./cod.mjs";

const PAGES = [
  ["index.html", homePage],
  ["services.html", servicesPage],
  ["realisations.html", realisationsPage],
  ["a-propos.html", aboutPage],
  ["contact.html", contactPage],
];

export async function buildShowcaseSite(dir) {
  await ensureDir(`${dir}/assets`);
  await writeSource(`${dir}/assets/styles.css`, SITE_CSS);
  await writeSource(`${dir}/assets/script.js`, SCRIPT);

  for (const [file, render] of PAGES) {
    await writeSource(`${dir}/${file}`, render());
  }

  await writeSource(
    `${dir}/LIRE-MOI.txt`,
    [
      "SITE VITRINE 5 PAGES — FR / AR",
      "=============================",
      "",
      "Contenu du dossier :",
      "  index.html          Accueil",
      "  services.html       Services et tarifs",
      "  realisations.html   Portfolio / études de cas",
      "  a-propos.html       Présentation et équipe",
      "  contact.html        Formulaire et coordonnées",
      "  assets/styles.css   Toute la mise en forme",
      "  assets/script.js    Langue FR/AR, menu mobile, formulaire démo",
      "",
      "1. Ouvrez index.html dans votre navigateur.",
      "2. Ouvrez les fichiers .html dans un éditeur de texte (VS Code, Notepad++).",
      "   Les textes sont lisibles directement : data-fr=\"...\" data-ar=\"...\".",
      "3. Remplacez le nom « Atlas Studio », le téléphone, l'e-mail et l'adresse.",
      "4. Déposez le dossier complet sur votre hébergement (cPanel, Netlify, Vercel).",
      "",
      "Changer les couleurs :",
      "   ouvrez assets/styles.css et modifiez les variables --navy, --blue, --emerald.",
      "   Tout le site se met à jour automatiquement.",
      "",
      "Ajouter une page :",
      "   dupliquez index.html, changez le titre et le contenu,",
      "   puis ajoutez un lien dans la navigation de chaque page.",
      "",
      "Le sélecteur FR / AR en haut à droite :",
      "   - change la langue de tous les éléments ayant data-fr et data-ar ;",
      "   - bascule la page en RTL pour l'arabe ;",
      "   - mémorise le choix dans le navigateur.",
      "",
      "Les formulaires sont en mode démonstration (aucun envoi).",
      "Connectez-les à Formspree, EmailJS, Basin ou votre propre API.",
      "",
      "ProTemplates — protemplates.ma",
    ].join("\r\n"),
  );
}

export { buildCodLanding };
