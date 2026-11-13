/**
 * Shared chrome for the two standalone HTML products. Everything is plain
 * HTML/CSS/JS: no build step, no framework, no CDN. The language switch is a
 * 40-line script that swaps `data-fr` / `data-ar` attributes and flips the
 * document direction.
 */

export const SITE = {
  name: "Atlas Studio",
  tagline: {
    fr: "Studio de design & développement web à Casablanca",
    ar: "استوديو تصميم وتطوير ويب بالدار البيضاء",
  },
  phone: "+212 6 12 34 56 78",
  email: "contact@atlas-studio.ma",
  address: {
    fr: "24, rue Ibn Batouta, Gauthier — Casablanca",
    ar: "24، شارع ابن بطوطة، غوتييه — الدار البيضاء",
  },
  hours: {
    fr: "Lundi – Vendredi · 9h00 – 18h30",
    ar: "الاثنين – الجمعة · 9:00 – 18:30",
  },
};

/** Stylesheet shipped as `assets/styles.css` in the site package. */
export const SITE_CSS = `:root{
  --navy:#0f172a;
  --navy-soft:#1e293b;
  --blue:#2563eb;
  --blue-dark:#1d4ed8;
  --blue-light:#dbeafe;
  --emerald:#10b981;
  --emerald-dark:#047857;
  --emerald-light:#d1fae5;
  --amber:#f59e0b;
  --slate-50:#f8fafc;
  --slate-100:#f1f5f9;
  --slate-200:#e2e8f0;
  --slate-300:#cbd5e1;
  --slate-500:#64748b;
  --slate-600:#475569;
  --slate-700:#334155;
  --radius:18px;
  --shadow:0 24px 60px -32px rgba(15,23,42,.35);
  --max:1140px;
  --font:"Segoe UI",system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif;
  --font-ar:"Segoe UI","Noto Kufi Arabic","Cairo",Tahoma,Arial,sans-serif;
}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{margin:0;font-family:var(--font);color:var(--navy);background:#fff;line-height:1.65;font-size:17px}
html[lang="ar"] body{font-family:var(--font-ar);line-height:1.85}
img,svg{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3,h4{line-height:1.18;margin:0 0 .6em;letter-spacing:-.02em}
h1{font-size:clamp(2.2rem,4.6vw,3.6rem)}
h2{font-size:clamp(1.7rem,3vw,2.4rem)}
h3{font-size:1.2rem}
p{margin:0 0 1.1em;color:var(--slate-600)}
ul{padding-inline-start:1.2em;margin:0 0 1.2em;color:var(--slate-600)}
li{margin-bottom:.45em}
.container{width:min(100% - 2.5rem,var(--max));margin-inline:auto}
.eyebrow{display:inline-flex;align-items:center;gap:.55rem;font-size:.76rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--blue);margin-bottom:.9rem}
html[lang="ar"] .eyebrow{letter-spacing:0;font-size:.85rem}
.eyebrow::before{content:"";width:26px;height:2px;background:var(--emerald)}
.muted{color:var(--slate-500)}
.center{text-align:center}
.lead{font-size:1.12rem;color:var(--slate-600);max-width:62ch}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:.55rem;padding:.9rem 1.5rem;border-radius:999px;font-weight:700;font-size:.95rem;border:1px solid transparent;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,background .18s ease;font-family:inherit}
.btn:hover{transform:translateY(-2px)}
.btn-primary{background:var(--blue);color:#fff;box-shadow:0 14px 30px -16px rgba(37,99,235,.9)}
.btn-primary:hover{background:var(--blue-dark)}
.btn-ghost{background:#fff;color:var(--navy);border-color:var(--slate-200)}
.btn-ghost:hover{border-color:var(--blue);color:var(--blue)}
.btn-emerald{background:var(--emerald);color:var(--navy)}
.btn-emerald:hover{background:#0ea371}
.site-header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.94);backdrop-filter:blur(10px);border-bottom:1px solid var(--slate-200)}
.nav{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;padding:.85rem 0}
.brand{display:flex;align-items:center;gap:.7rem;font-weight:800;font-size:1.05rem;letter-spacing:-.02em}
.brand-mark{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,var(--blue),var(--emerald));color:#fff;display:grid;place-items:center;font-size:.8rem;font-weight:800}
.nav-links{display:flex;align-items:center;gap:1.6rem;font-size:.94rem;font-weight:600;color:var(--slate-600)}
.nav-links a{position:relative;padding:.3rem 0}
.nav-links a::after{content:"";position:absolute;inset-inline:0;bottom:-2px;height:2px;background:var(--blue);transform:scaleX(0);transform-origin:center;transition:transform .2s ease}
.nav-links a:hover::after,.nav-links a[aria-current="page"]::after{transform:scaleX(1)}
.nav-links a[aria-current="page"]{color:var(--navy)}
.nav-actions{display:flex;align-items:center;gap:.6rem}
.lang-toggle{display:inline-flex;align-items:center;gap:.25rem;padding:.3rem;border:1px solid var(--slate-200);border-radius:999px;background:var(--slate-50);font-size:.8rem;font-weight:700}
.lang-toggle button{border:0;background:transparent;padding:.3rem .7rem;border-radius:999px;cursor:pointer;font:inherit;color:var(--slate-500)}
.lang-toggle button[aria-pressed="true"]{background:var(--navy);color:#fff}
.nav-toggle{display:none;border:1px solid var(--slate-200);background:#fff;border-radius:10px;padding:.45rem .6rem;cursor:pointer}
.hero{position:relative;overflow:hidden;background:radial-gradient(120% 130% at 15% 0%,#1d4ed8 0%,#0f172a 58%);color:#fff;padding:5.5rem 0 6rem}
.hero::after{content:"";position:absolute;width:520px;height:520px;border-radius:50%;background:rgba(16,185,129,.18);filter:blur(10px);inset-inline-end:-160px;top:-140px}
.hero-grid{position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:3rem;align-items:center;z-index:1}
.hero p{color:#cbd5e1}
.hero .eyebrow{color:#6ee7b7}
.hero .eyebrow::before{background:#6ee7b7}
.hero-actions{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:2rem}
.hero-meta{display:flex;flex-wrap:wrap;gap:1.6rem;margin-top:2.6rem;padding-top:1.6rem;border-top:1px solid rgba(255,255,255,.16);font-size:.85rem;color:#94a3b8}
.hero-meta strong{display:block;color:#fff;font-size:1.35rem;letter-spacing:-.02em}
.hero-card{position:relative;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:24px;padding:1.6rem;backdrop-filter:blur(4px)}
.hero-card svg{width:100%;height:auto;border-radius:16px;background:#fff}
.hero-card figcaption{display:flex;justify-content:space-between;gap:1rem;font-size:.78rem;color:#94a3b8;padding-top:.9rem}
.section{padding:5rem 0}
.section-alt{background:var(--slate-50);border-block:1px solid var(--slate-200)}
.section-head{max-width:680px;margin-bottom:2.8rem}
.section-head.center{margin-inline:auto}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem}
.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:1.6rem}
.card{background:#fff;border:1px solid var(--slate-200);border-radius:var(--radius);padding:1.7rem;transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}
.card:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:var(--slate-300)}
.card-icon{width:48px;height:48px;border-radius:14px;display:grid;place-items:center;background:var(--blue-light);color:var(--blue-dark);font-weight:800;margin-bottom:1.1rem;font-size:1.05rem}
.card h3{margin-bottom:.45rem}
.card p{font-size:.95rem;margin-bottom:0}
.card-accent{border-top:3px solid var(--emerald)}
.steps{counter-reset:step;display:grid;grid-template-columns:repeat(4,1fr);gap:1.2rem}
.step{position:relative;padding-top:2.6rem}
.step::before{counter-increment:step;content:"0" counter(step);position:absolute;top:0;inset-inline-start:0;font-size:1.5rem;font-weight:800;color:var(--blue);letter-spacing:-.03em}
.step h3{font-size:1.05rem;margin-bottom:.3rem}
.step p{font-size:.92rem;margin:0}
.split{display:grid;grid-template-columns:1fr 1fr;gap:3.2rem;align-items:center}
.checklist{list-style:none;padding:0;margin:1.6rem 0 0}
.checklist li{position:relative;padding-inline-start:2rem;margin-bottom:.75rem;color:var(--slate-700)}
.checklist li::before{content:"";position:absolute;inset-inline-start:0;top:.35rem;width:20px;height:20px;border-radius:50%;background:var(--emerald-light);border:2px solid var(--emerald)}
.quote{background:var(--navy);color:#fff;border-radius:24px;padding:3rem;position:relative;overflow:hidden}
.quote::before{content:"“";position:absolute;font-size:9rem;line-height:1;top:-1rem;inset-inline-start:1.6rem;color:rgba(37,99,235,.55);font-family:Georgia,serif}
.quote blockquote{position:relative;font-size:clamp(1.2rem,2.2vw,1.6rem);font-weight:600;line-height:1.5;margin:0 0 1.4rem;max-width:52ch}
.quote footer{font-size:.9rem;color:#94a3b8}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1.2rem}
.stat{background:#fff;border:1px solid var(--slate-200);border-radius:var(--radius);padding:1.4rem}
.stat strong{display:block;font-size:2rem;letter-spacing:-.03em;color:var(--navy)}
.stat span{font-size:.86rem;color:var(--slate-500)}
.pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;align-items:stretch}
.plan{display:flex;flex-direction:column;background:#fff;border:1px solid var(--slate-200);border-radius:var(--radius);padding:1.8rem}
.plan.featured{border-color:var(--blue);box-shadow:var(--shadow);position:relative}
.plan.featured::before{content:"Recommandé";position:absolute;top:-13px;inset-inline-start:1.6rem;background:var(--blue);color:#fff;font-size:.7rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:.3rem .8rem;border-radius:999px}
html[lang="ar"] .plan.featured::before{content:"موصى به";letter-spacing:0}
.plan .price{font-size:2.2rem;font-weight:800;letter-spacing:-.03em;margin:.6rem 0 .2rem}
.plan .price small{font-size:.9rem;font-weight:600;color:var(--slate-500)}
.plan ul{list-style:none;padding:0;margin:1.2rem 0 1.6rem;font-size:.93rem}
.plan li{padding-inline-start:1.5rem;position:relative}
.plan li::before{content:"✓";position:absolute;inset-inline-start:0;color:var(--emerald-dark);font-weight:800}
.plan .btn{margin-top:auto;width:100%}
.cta-band{background:linear-gradient(120deg,var(--navy),var(--blue-dark));color:#fff;border-radius:26px;padding:3rem;display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap}
.cta-band h2{margin-bottom:.4rem;color:#fff}
.cta-band p{color:#cbd5e1;margin:0;max-width:46ch}
.site-footer{background:var(--navy);color:#94a3b8;padding:4rem 0 2rem;font-size:.92rem}
.footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr;gap:2.4rem;padding-bottom:2.6rem;border-bottom:1px solid rgba(255,255,255,.1)}
.site-footer h3{color:#fff;font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:1.1rem}
html[lang="ar"] .site-footer h3{letter-spacing:0;font-size:.95rem}
.site-footer ul{list-style:none;padding:0;margin:0}
.site-footer li{margin-bottom:.55rem}
.site-footer a:hover{color:#fff}
.site-footer .brand{color:#fff;margin-bottom:.8rem}
.footer-bottom{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;padding-top:1.6rem;font-size:.82rem;color:#64748b}
.form{display:grid;gap:1rem}
.field{display:grid;gap:.4rem}
.field label{font-size:.86rem;font-weight:700;color:var(--slate-700)}
.field input,.field select,.field textarea{font:inherit;padding:.8rem .95rem;border:1px solid var(--slate-200);border-radius:12px;background:#fff;color:var(--navy);width:100%}
.field input:focus,.field select:focus,.field textarea:focus{outline:2px solid var(--blue-light);border-color:var(--blue)}
.field textarea{min-height:140px;resize:vertical}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.form-note{font-size:.8rem;color:var(--slate-500);margin:0}
.form-status{font-size:.9rem;font-weight:600;color:var(--emerald-dark);margin:0;min-height:1.4em}
.page-hero{background:var(--slate-50);border-bottom:1px solid var(--slate-200);padding:4rem 0 3.4rem}
.page-hero p{max-width:60ch;margin-bottom:0}
.breadcrumb{font-size:.8rem;color:var(--slate-500);margin-bottom:1rem}
.breadcrumb a{color:var(--blue)}
.work-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.6rem}
.work{background:#fff;border:1px solid var(--slate-200);border-radius:var(--radius);overflow:hidden;transition:transform .2s ease,box-shadow .2s ease}
.work:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
.work-visual{aspect-ratio:16/10;display:grid;place-items:center;padding:1.4rem;background:var(--slate-100)}
.work-body{padding:1.4rem 1.6rem 1.7rem}
.work-body p{font-size:.92rem;margin-bottom:.8rem}
.tags{display:flex;flex-wrap:wrap;gap:.4rem;list-style:none;padding:0;margin:0}
.tags li{font-size:.72rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--blue-dark);background:var(--blue-light);padding:.25rem .6rem;border-radius:999px;margin:0}
.team{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem}
.person{text-align:center;background:#fff;border:1px solid var(--slate-200);border-radius:var(--radius);padding:1.8rem 1.4rem}
.avatar{width:78px;height:78px;border-radius:50%;margin:0 auto 1rem;display:grid;place-items:center;font-weight:800;font-size:1.25rem;color:#fff;background:linear-gradient(135deg,var(--blue),var(--emerald))}
.person p{font-size:.9rem;margin:0}
.faq{max-width:780px;margin-inline:auto;display:grid;gap:.8rem}
.faq details{background:#fff;border:1px solid var(--slate-200);border-radius:14px;padding:1.1rem 1.3rem}
.faq summary{cursor:pointer;font-weight:700;color:var(--navy);list-style:none;display:flex;justify-content:space-between;gap:1rem;align-items:center}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";font-size:1.3rem;color:var(--blue);line-height:1}
.faq details[open] summary::after{content:"−"}
.faq p{margin:.8rem 0 0;font-size:.93rem}
.map-placeholder{border:1px dashed var(--slate-300);border-radius:var(--radius);background:var(--slate-50);padding:2.4rem;text-align:center;color:var(--slate-500);font-size:.9rem}
.mobile-only{display:none}
@media (max-width:960px){
  .hero-grid,.split,.grid-3,.grid-2,.steps,.pricing,.work-grid,.team,.stats,.footer-grid{grid-template-columns:1fr 1fr}
  .hero-grid,.split{gap:2rem}
  .hero-card{order:-1}
  .nav-links{display:none}
  .nav-toggle{display:inline-flex}
  .site-header.open .nav-links{display:flex;position:absolute;inset-inline:0;top:100%;flex-direction:column;align-items:flex-start;gap:.4rem;background:#fff;border-bottom:1px solid var(--slate-200);padding:1rem 1.25rem 1.4rem;box-shadow:0 18px 30px -24px rgba(15,23,42,.4)}
  .site-header.open .nav-links a{padding:.6rem 0;width:100%}
  .nav-actions .btn{display:none}
  .section{padding:3.6rem 0}
  .cta-band{padding:2.2rem}
}
@media (max-width:640px){
  body{font-size:16px}
  .hero{padding:3.6rem 0 4rem}
  .hero-grid,.grid-3,.grid-2,.steps,.pricing,.work-grid,.team,.stats,.footer-grid,.form-row{grid-template-columns:1fr}
  .hero-meta{gap:1.1rem}
  .quote{padding:2rem}
  .plan.featured::before{position:static;display:inline-block;margin-bottom:.6rem}
}
@media (prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
}
`;

export const HEAD = (title, description) => `<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#0f172a">
<link rel="stylesheet" href="assets/styles.css">
</head>
<body>`;

export const NAV = (current = "") => {
  const link = (href, fr, ar) =>
    `<a href="${href}"${href === current ? ' aria-current="page"' : ""} data-fr="${fr}" data-ar="${ar}">${fr}</a>`;
  return `<header class="site-header" id="site-header">
  <div class="container nav">
    <a class="brand" href="index.html">
      <span class="brand-mark">AS</span>
      <span data-fr="Atlas Studio" data-ar="أطلس ستوديو">Atlas Studio</span>
    </a>
    <nav class="nav-links" aria-label="Navigation">
      ${link("index.html", "Accueil", "الرئيسية")}
      ${link("services.html", "Services", "الخدمات")}
      ${link("realisations.html", "Réalisations", "أعمالنا")}
      ${link("a-propos.html", "À propos", "من نحن")}
      ${link("contact.html", "Contact", "اتصل بنا")}
    </nav>
    <div class="nav-actions">
      <div class="lang-toggle" role="group" aria-label="Langue / اللغة">
        <button type="button" data-lang="fr" aria-pressed="true">FR</button>
        <button type="button" data-lang="ar" aria-pressed="false">AR</button>
      </div>
      <a class="btn btn-primary" href="contact.html" data-fr="Devis gratuit" data-ar="عرض سعر مجاني">Devis gratuit</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-header" aria-label="Menu">☰</button>
    </div>
  </div>
</header>`;
};

export const FOOTER = () => `<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="brand"><span class="brand-mark">AS</span><span data-fr="Atlas Studio" data-ar="أطلس ستوديو">Atlas Studio</span></div>
        <p data-fr="Studio de design et développement web basé à Casablanca. Nous aidons les TPE marocaines à lancer une présence en ligne claire et rentable." data-ar="استوديو للتصميم وتطوير الويب بالدار البيضاء. نساعد المقاولات الصغرى المغربية على إطلاق حضور رقمي واضح ومربح.">Studio de design et développement web basé à Casablanca. Nous aidons les TPE marocaines à lancer une présence en ligne claire et rentable.</p>
      </div>
      <div>
        <h3 data-fr="Navigation" data-ar="التنقل">Navigation</h3>
        <ul>
          <li><a href="services.html" data-fr="Nos services" data-ar="خدماتنا">Nos services</a></li>
          <li><a href="realisations.html" data-fr="Réalisations" data-ar="أعمالنا">Réalisations</a></li>
          <li><a href="a-propos.html" data-fr="À propos" data-ar="من نحن">À propos</a></li>
          <li><a href="contact.html" data-fr="Contact" data-ar="اتصل بنا">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 data-fr="Services" data-ar="الخدمات">Services</h3>
        <ul>
          <li data-fr="Site vitrine" data-ar="موقع تعريفي">Site vitrine</li>
          <li data-fr="Identité visuelle" data-ar="هوية بصرية">Identité visuelle</li>
          <li data-fr="Landing page" data-ar="صفحة هبوط">Landing page</li>
          <li data-fr="Maintenance & SEO" data-ar="الصيانة وتحسين الظهور">Maintenance & SEO</li>
        </ul>
      </div>
      <div>
        <h3 data-fr="Contact" data-ar="التواصل">Contact</h3>
        <ul>
          <li><a href="tel:+212612345678" dir="ltr">+212 6 12 34 56 78</a></li>
          <li><a href="mailto:contact@atlas-studio.ma">contact@atlas-studio.ma</a></li>
          <li data-fr="24, rue Ibn Batouta, Gauthier — Casablanca" data-ar="24، شارع ابن بطوطة، غوتييه — الدار البيضاء">24, rue Ibn Batouta, Gauthier — Casablanca</li>
          <li data-fr="Lun – Ven · 9h00 – 18h30" data-ar="الاثنين – الجمعة · 9:00 – 18:30">Lun – Ven · 9h00 – 18h30</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-fr="© 2026 Atlas Studio. Tous droits réservés." data-ar="© 2026 أطلس ستوديو. جميع الحقوق محفوظة.">© 2026 Atlas Studio. Tous droits réservés.</span>
      <span data-fr="Modèle ProTemplates — personnalisez librement ce site." data-ar="قالب ProTemplates — عدّل هذا الموقع بحرية.">Modèle ProTemplates — personnalisez librement ce site.</span>
    </div>
  </div>
</footer>
<script src="assets/script.js"></script>
</body>
</html>`;

/** Shared runtime: language switch, mobile menu, reveal on scroll. */
export const SCRIPT = `(function () {
  var STORAGE_KEY = "atlas-template-lang";
  var html = document.documentElement;

  function apply(lang) {
    var ar = lang === "ar";
    html.lang = ar ? "ar" : "fr";
    html.dir = ar ? "rtl" : "ltr";
    document.querySelectorAll("[data-fr][data-ar]").forEach(function (node) {
      var value = node.getAttribute(ar ? "data-ar" : "data-fr");
      if (value !== null) node.textContent = value;
    });
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (error) {}
  }

  var stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (error) {}
  if (stored === "ar") apply("ar");

  document.querySelectorAll("[data-lang]").forEach(function (button) {
    button.addEventListener("click", function () { apply(button.dataset.lang); });
  });

  var header = document.getElementById("site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    header.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.querySelector("form[data-demo-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = form.querySelector(".form-status");
      var ar = html.lang === "ar";
      if (status) {
        status.textContent = ar
          ? "شكراً! هذه نسخة تجريبية — اربط الاستمارة بخدمة بريدك أو واتساب."
          : "Merci ! Ceci est une démo — connectez le formulaire à votre service e-mail ou WhatsApp.";
      }
      form.reset();
    });
  }

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
`;
