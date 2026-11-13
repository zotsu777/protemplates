import { ensureDir, writeSource } from "../utils.mjs";

/**
 * Single-file cash-on-delivery landing page. Everything (CSS, JS, icons) is
 * inlined so the buyer can upload one file to any host, or open it locally.
 */

const CSS = `:root{
  --navy:#0f172a;--navy-soft:#1e293b;--blue:#2563eb;--blue-dark:#1d4ed8;
  --emerald:#10b981;--emerald-dark:#047857;--amber:#f59e0b;
  --slate-50:#f8fafc;--slate-100:#f1f5f9;--slate-200:#e2e8f0;--slate-400:#94a3b8;
  --slate-500:#64748b;--slate-600:#475569;--slate-700:#334155;
  --font:"Segoe UI",system-ui,-apple-system,Arial,sans-serif;
  --font-ar:"Segoe UI","Noto Kufi Arabic","Cairo",Tahoma,Arial,sans-serif;
}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:var(--font);color:var(--navy);background:#fff;line-height:1.65;font-size:17px}
html[lang="ar"] body{font-family:var(--font-ar);line-height:1.9}
img,svg{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
h1,h2,h3{line-height:1.15;margin:0 0 .6em;letter-spacing:-.02em}
p{margin:0 0 1em;color:var(--slate-600)}
.container{width:min(100% - 2.2rem,1080px);margin-inline:auto}
.topbar{background:var(--navy);color:#cbd5e1;font-size:.78rem;letter-spacing:.02em}
.topbar .container{display:flex;justify-content:space-between;gap:1rem;align-items:center;padding:.55rem 0;flex-wrap:wrap}
.topbar strong{color:#fff}
.header{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.96);backdrop-filter:blur(10px);border-bottom:1px solid var(--slate-200)}
.header .container{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.75rem 0}
.brand{display:flex;align-items:center;gap:.6rem;font-weight:800;font-size:1.05rem}
.brand-mark{width:36px;height:36px;border-radius:11px;background:linear-gradient(135deg,var(--blue),var(--emerald));color:#fff;display:grid;place-items:center;font-size:.75rem;font-weight:800}
.lang{display:inline-flex;gap:.2rem;padding:.25rem;border:1px solid var(--slate-200);border-radius:999px;background:var(--slate-50)}
.lang button{border:0;background:transparent;font:inherit;font-size:.78rem;font-weight:700;color:var(--slate-500);padding:.3rem .7rem;border-radius:999px;cursor:pointer}
.lang button[aria-pressed="true"]{background:var(--navy);color:#fff}
.header .cta{display:inline-flex;align-items:center;gap:.4rem;background:var(--emerald);color:var(--navy);font-weight:800;font-size:.85rem;padding:.6rem 1.1rem;border-radius:999px}
.hero{background:radial-gradient(120% 130% at 20% 0%,#1d4ed8 0%,#0f172a 60%);color:#fff;padding:4rem 0 4.6rem;overflow:hidden;position:relative}
.hero::after{content:"";position:absolute;width:460px;height:460px;border-radius:50%;background:rgba(16,185,129,.16);inset-inline-end:-150px;top:-120px}
.hero-grid{position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:3rem;align-items:center;z-index:1}
.badge{display:inline-flex;align-items:center;gap:.45rem;background:rgba(16,185,129,.16);color:#6ee7b7;font-size:.75rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:.45rem .9rem;border-radius:999px;margin-bottom:1.2rem}
html[lang="ar"] .badge{letter-spacing:0;font-size:.85rem}
.hero h1{font-size:clamp(1.9rem,4vw,3rem);color:#fff}
.hero p{color:#cbd5e1;font-size:1.05rem}
.hero-points{list-style:none;padding:0;margin:1.4rem 0 1.8rem}
.hero-points li{position:relative;padding-inline-start:1.9rem;margin-bottom:.5rem;color:#e2e8f0;font-size:.95rem}
.hero-points li::before{content:"✓";position:absolute;inset-inline-start:0;color:#34d399;font-weight:800}
.price-row{display:flex;align-items:baseline;gap:.8rem;margin:1.4rem 0 .3rem}
.price-row .old{color:#94a3b8;text-decoration:line-through;font-size:1.05rem}
.price-row .now{font-size:2.4rem;font-weight:800;letter-spacing:-.03em;color:#fff}
.price-note{font-size:.85rem;color:#fbbf24}
.buttons{display:flex;flex-wrap:wrap;gap:.7rem;margin-top:1.6rem}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.9rem 1.5rem;border-radius:999px;font-weight:800;font-size:.95rem;border:1px solid transparent;cursor:pointer;font-family:inherit;transition:transform .18s ease,background .18s ease}
.btn:hover{transform:translateY(-2px)}
.btn-emerald{background:var(--emerald);color:var(--navy)}
.btn-emerald:hover{background:#0ea371}
.btn-ghost{background:transparent;color:#fff;border-color:rgba(255,255,255,.35)}
.btn-ghost:hover{border-color:#fff}
.product{position:relative;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);border-radius:26px;padding:1.2rem}
.product svg{border-radius:18px;background:#fff}
.product figcaption{display:flex;justify-content:space-between;gap:.8rem;font-size:.74rem;color:#94a3b8;padding:.8rem .3rem 0}
.strip{background:var(--slate-50);border-bottom:1px solid var(--slate-200)}
.strip ul{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;list-style:none;margin:0;padding:1.4rem 0;text-align:center;font-size:.9rem;font-weight:700;color:var(--slate-700)}
.strip li span{display:block;font-size:1.25rem;margin-bottom:.2rem}
.section{padding:4.2rem 0}
.section-alt{background:var(--slate-50);border-block:1px solid var(--slate-200)}
.section-head{max-width:640px;margin:0 auto 2.6rem;text-align:center}
.kicker{display:inline-block;font-size:.74rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--blue);margin-bottom:.7rem}
html[lang="ar"] .kicker{letter-spacing:0;font-size:.85rem}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem}
.feature{background:#fff;border:1px solid var(--slate-200);border-radius:18px;padding:1.5rem}
.feature .icon{width:46px;height:46px;border-radius:13px;background:#dbeafe;color:var(--blue-dark);display:grid;place-items:center;font-weight:800;margin-bottom:.9rem}
.feature h3{font-size:1.05rem;margin-bottom:.3rem}
.feature p{font-size:.92rem;margin:0}
.split{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center}
.visual-card{background:#fff;border:1px solid var(--slate-200);border-radius:22px;padding:1.6rem}
.visual-card .row{display:flex;justify-content:space-between;align-items:center;padding:.7rem 0;border-bottom:1px solid var(--slate-100);font-size:.9rem;color:var(--slate-600)}
.visual-card .row:last-child{border-bottom:0}
.visual-card strong{color:var(--navy)}
.order{display:grid;grid-template-columns:.9fr 1.1fr;gap:2.4rem;align-items:start}
.order-card{background:#fff;border:1px solid var(--slate-200);border-radius:22px;padding:1.8rem;box-shadow:0 30px 60px -44px rgba(15,23,42,.55)}
.form{display:grid;gap:.9rem}
.field{display:grid;gap:.35rem}
.field label{font-size:.83rem;font-weight:700;color:var(--slate-700)}
.field input,.field select,.field textarea{font:inherit;padding:.8rem .95rem;border:1px solid var(--slate-200);border-radius:12px;background:#fff;width:100%;color:var(--navy)}
.field input:focus,.field select:focus,.field textarea:focus{outline:2px solid #dbeafe;border-color:var(--blue)}
.field textarea{min-height:90px;resize:vertical}
.form-note{font-size:.76rem;color:var(--slate-500);margin:0}
.form-status{font-size:.9rem;font-weight:700;color:var(--emerald-dark);margin:0;min-height:1.3em}
.reviews{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem}
.review{background:#fff;border:1px solid var(--slate-200);border-radius:18px;padding:1.5rem}
.stars{color:var(--amber);letter-spacing:.15em;font-size:.9rem;margin-bottom:.6rem}
.review p{font-size:.92rem;margin-bottom:.9rem}
.reviewer{display:flex;align-items:center;gap:.6rem;font-size:.82rem;color:var(--slate-500)}
.reviewer span:first-child{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--emerald));color:#fff;display:grid;place-items:center;font-weight:800;font-size:.75rem}
.faq{max-width:760px;margin-inline:auto;display:grid;gap:.7rem}
.faq details{background:#fff;border:1px solid var(--slate-200);border-radius:14px;padding:1rem 1.2rem}
.faq summary{cursor:pointer;font-weight:700;list-style:none;display:flex;justify-content:space-between;gap:1rem;align-items:center;font-size:.95rem}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";color:var(--blue);font-size:1.25rem;line-height:1}
.faq details[open] summary::after{content:"−"}
.faq p{margin:.7rem 0 0;font-size:.9rem}
.footer{background:var(--navy);color:#94a3b8;padding:2.6rem 0;font-size:.84rem}
.footer .container{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap}
.footer strong{color:#fff}
.sticky-cta{position:fixed;inset-inline:0;bottom:0;z-index:60;background:#fff;border-top:1px solid var(--slate-200);padding:.7rem 1rem;display:none;align-items:center;justify-content:space-between;gap:.8rem;box-shadow:0 -12px 30px -24px rgba(15,23,42,.6)}
.sticky-cta strong{font-size:1.1rem}
.sticky-cta .btn{flex:0 0 auto}
@media (max-width:900px){
  .hero-grid,.split,.order,.grid-3,.reviews{grid-template-columns:1fr}
  .product{order:-1;max-width:440px;margin-inline:auto}
  .sticky-cta{display:flex}
  body{padding-bottom:64px}
  .section{padding:3.2rem 0}
  .hero{padding:3rem 0 3.4rem}
}
@media (max-width:640px){
  .strip ul{grid-template-columns:1fr;gap:.6rem;text-align:start}
  .header .cta{display:none}
  .price-row .now{font-size:2rem}
}
@media (prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}
`;

const BODY = `<div class="topbar">
  <div class="container">
    <span data-fr="Livraison gratuite partout au Maroc · Paiement à la réception" data-ar="توصيل مجاني في كل المغرب · الدفع عند الاستلام">Livraison gratuite partout au Maroc · Paiement à la réception</span>
    <span><strong dir="ltr">+212 6 12 34 56 78</strong></span>
  </div>
</div>

<header class="header">
  <div class="container">
    <a class="brand" href="#top"><span class="brand-mark">AS</span><span data-fr="AtlasShop" data-ar="أطلس شوب">AtlasShop</span></a>
    <div style="display:flex;align-items:center;gap:.6rem">
      <div class="lang" role="group" aria-label="Langue / اللغة">
        <button type="button" data-lang="fr" aria-pressed="true">FR</button>
        <button type="button" data-lang="ar" aria-pressed="false">AR</button>
      </div>
      <a class="cta" href="#commander" data-fr="Commander" data-ar="اطلب الآن">Commander</a>
    </div>
  </div>
</header>

<main id="top">
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <span class="badge" data-fr="Stock limité · offre de lancement" data-ar="الكمية محدودة · عرض الإطلاق">Stock limité · offre de lancement</span>
        <h1 data-fr="La montre connectée qui suit votre santé, pas seulement vos pas." data-ar="الساعة الذكية التي تتابع صحتك، لا خطواتك فقط.">La montre connectée qui suit votre santé, pas seulement vos pas.</h1>
        <p data-fr="Écran AMOLED, autonomie de 7 jours, appels Bluetooth et suivi du sommeil. Vous payez uniquement à la réception, après vérification du colis." data-ar="شاشة AMOLED، بطارية تدوم 7 أيام، مكالمات بلوتوث وتتبع النوم. تدفع فقط عند الاستلام بعد التحقق من الطرد.">Écran AMOLED, autonomie de 7 jours, appels Bluetooth et suivi du sommeil. Vous payez uniquement à la réception, après vérification du colis.</p>
        <ul class="hero-points">
          <li data-fr="Paiement à la livraison — aucun risque" data-ar="الدفع عند الاستلام — بدون أي مخاطرة">Paiement à la livraison — aucun risque</li>
          <li data-fr="Livraison en 24 à 48 h dans les grandes villes" data-ar="التوصيل في 24 إلى 48 ساعة في المدن الكبرى">Livraison en 24 à 48 h dans les grandes villes</li>
          <li data-fr="Garantie 1 an et retour sous 7 jours" data-ar="ضمان سنة وإرجاع خلال 7 أيام">Garantie 1 an et retour sous 7 jours</li>
        </ul>
        <div class="price-row">
          <span class="old" data-fr="450 MAD" data-ar="450 درهم">450 MAD</span>
          <span class="now" data-fr="299 MAD" data-ar="299 درهم">299 MAD</span>
        </div>
        <p class="price-note" data-fr="Offre valable jusqu'à épuisement du stock." data-ar="العرض ساري حتى نفاد الكمية.">Offre valable jusqu'à épuisement du stock.</p>
        <div class="buttons">
          <a class="btn btn-emerald" href="#commander" data-fr="Commander maintenant" data-ar="اطلب الآن">Commander maintenant</a>
          <a class="btn btn-ghost" href="#avis" data-fr="Voir les avis clients" data-ar="اقرأ آراء العملاء">Voir les avis clients</a>
        </div>
      </div>

      <figure class="product">
        <svg viewBox="0 0 520 420" role="img" aria-label="Montre connectée">
          <rect width="520" height="420" fill="#f8fafc"/>
          <circle cx="410" cy="70" r="130" fill="#dbeafe"/>
          <circle cx="90" cy="360" r="110" fill="#d1fae5"/>
          <rect x="196" y="26" width="128" height="76" rx="18" fill="#1e293b"/>
          <rect x="196" y="318" width="128" height="76" rx="18" fill="#1e293b"/>
          <rect x="168" y="62" width="184" height="296" rx="46" fill="#0f172a"/>
          <rect x="180" y="76" width="160" height="268" rx="38" fill="#111c33"/>
          <circle cx="260" cy="210" r="86" fill="#1d4ed8" opacity="0.18"/>
          <text x="260" y="176" text-anchor="middle" font-family="Segoe UI,Arial" font-size="52" font-weight="800" fill="#ffffff">72</text>
          <text x="260" y="202" text-anchor="middle" font-family="Segoe UI,Arial" font-size="16" font-weight="700" fill="#6ee7b7">BPM</text>
          <rect x="206" y="228" width="108" height="7" rx="3.5" fill="#334155"/>
          <rect x="206" y="228" width="72" height="7" rx="3.5" fill="#10b981"/>
          <text x="260" y="268" text-anchor="middle" font-family="Segoe UI,Arial" font-size="15" fill="#94a3b8">8 420 pas · 6,1 km</text>
          <text x="260" y="298" text-anchor="middle" font-family="Segoe UI,Arial" font-size="15" fill="#94a3b8">Batterie 7 jours</text>
          <circle cx="260" cy="210" r="88" fill="none" stroke="#2563eb" stroke-width="2" opacity="0.5"/>
        </svg>
        <figcaption>
          <span data-fr="Écran AMOLED 1,43&quot;" data-ar="شاشة AMOLED 1.43 بوصة">Écran AMOLED 1,43&quot;</span>
          <span data-fr="Étanche IP68" data-ar="مقاومة للماء IP68">Étanche IP68</span>
          <span data-fr="2 bracelets inclus" data-ar="سواران في العلبة">2 bracelets inclus</span>
        </figcaption>
      </figure>
    </div>
  </section>

  <div class="strip">
    <div class="container">
      <ul>
        <li><span>🚚</span><span data-fr="Livraison 24–48 h" data-ar="توصيل 24–48 ساعة">Livraison 24–48 h</span></li>
        <li><span>💵</span><span data-fr="Paiement à la réception" data-ar="الدفع عند الاستلام">Paiement à la réception</span></li>
        <li><span>🛡️</span><span data-fr="Garantie 1 an" data-ar="ضمان سنة">Garantie 1 an</span></li>
      </ul>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker" data-fr="Pourquoi cette montre" data-ar="لماذا هذه الساعة">Pourquoi cette montre</span>
        <h2 data-fr="Tout ce dont vous avez besoin. Rien de superflu." data-ar="كل ما تحتاجه. لا شيء زائد.">Tout ce dont vous avez besoin. Rien de superflu.</h2>
        <p data-fr="Un produit simple à utiliser, pensé pour le quotidien au Maroc : appels clairs, batterie qui tient la semaine, et un suivi de santé lisible." data-ar="منتج سهل الاستخدام، مصمم للحياة اليومية في المغرب: مكالمات واضحة، بطارية تدوم أسبوعاً، ومتابعة صحية مفهومة.">Un produit simple à utiliser, pensé pour le quotidien au Maroc : appels clairs, batterie qui tient la semaine, et un suivi de santé lisible.</p>
      </div>
      <div class="grid-3">
        <article class="feature"><div class="icon">♥</div><h3 data-fr="Santé au quotidien" data-ar="صحة يومية">Santé au quotidien</h3><p data-fr="Fréquence cardiaque, oxygène, sommeil et respiration suivis en continu, avec des rappels de mouvement." data-ar="نبض القلب والأوكسجين والنوم والتنفس تُتابع باستمرار مع تذكيرات الحركة.">Fréquence cardiaque, oxygène, sommeil et respiration suivis en continu, avec des rappels de mouvement.</p></article>
        <article class="feature"><div class="icon">📞</div><h3 data-fr="Appels Bluetooth" data-ar="مكالمات بلوتوث">Appels Bluetooth</h3><p data-fr="Répondez depuis la montre, écoutez vos messages et vos notifications sans sortir votre téléphone." data-ar="أجب من الساعة واستمع إلى رسائلك وإشعاراتك دون إخراج هاتفك.">Répondez depuis la montre, écoutez vos messages et vos notifications sans sortir votre téléphone.</p></article>
        <article class="feature"><div class="icon">🔋</div><h3 data-fr="7 jours d'autonomie" data-ar="بطارية 7 أيام">7 jours d'autonomie</h3><p data-fr="Une charge par semaine en usage normal, 20 jours en mode économie. Câble magnétique inclus." data-ar="شحنة واحدة أسبوعياً في الاستعمال العادي، و20 يوماً في وضع التوفير. كابل مغناطيسي مرفق.">Une charge par semaine en usage normal, 20 jours en mode économie. Câble magnétique inclus.</p></article>
        <article class="feature"><div class="icon">🏃</div><h3 data-fr="120 modes sportifs" data-ar="120 وضعاً رياضياً">120 modes sportifs</h3><p data-fr="Course, football, natation, musculation : vos séances sont enregistrées avec distance et calories." data-ar="الجري وكرة القدم والسباحة ورفع الأثقال: تُسجَّل حصصك بالمسافة والسعرات.">Course, football, natation, musculation : vos séances sont enregistrées avec distance et calories.</p></article>
        <article class="feature"><div class="icon">☀</div><h3 data-fr="Écran lisible dehors" data-ar="شاشة مقروءة في الشمس">Écran lisible dehors</h3><p data-fr="Dalle AMOLED lumineuse, verre antireflet et 12 cadrans interchangeables selon votre style." data-ar="شاشة AMOLED ساطعة وزجاج مضاد للانعكاس و12 واجهة قابلة للتبديل.">Dalle AMOLED lumineuse, verre antireflet et 12 cadrans interchangeables selon votre style.</p></article>
        <article class="feature"><div class="icon">🤝</div><h3 data-fr="Service en darija" data-ar="خدمة بالدارجة">Service en darija</h3><p data-fr="Une équipe basée à Casablanca répond sur WhatsApp en darija, français ou arabe." data-ar="فريق بالدار البيضاء يجيب عبر واتساب بالدارجة أو الفرنسية أو العربية.">Une équipe basée à Casablanca répond sur WhatsApp en darija, français ou arabe.</p></article>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container split">
      <div>
        <span class="kicker" data-fr="Comparatif" data-ar="مقارنة">Comparatif</span>
        <h2 data-fr="299 MAD. Pas 1 200 MAD." data-ar="299 درهماً، لا 1200 درهم.">299 MAD. Pas 1 200 MAD.</h2>
        <p data-fr="Le même usage quotidien qu'une grande marque, sans payer l'importation ni les campagnes publicitaires. Les fonctions essentielles sont là, la facture est divisée par quatre." data-ar="نفس الاستعمال اليومي لعلامة كبرى، دون دفع تكاليف الاستيراد أو الإعلانات. الوظائف الأساسية موجودة والفاتورة أقل بأربع مرات.">Le même usage quotidien qu'une grande marque, sans payer l'importation ni les campagnes publicitaires. Les fonctions essentielles sont là, la facture est divisée par quatre.</p>
        <ul class="hero-points" style="margin-top:1.2rem">
          <li style="color:#334155" data-fr="Aucun abonnement mensuel" data-ar="بدون اشتراك شهري">Aucun abonnement mensuel</li>
          <li style="color:#334155" data-fr="Compatible Android et iPhone" data-ar="متوافقة مع أندرويد وآيفون">Compatible Android et iPhone</li>
          <li style="color:#334155" data-fr="Notice en français et en arabe" data-ar="دليل بالفرنسية والعربية">Notice en français et en arabe</li>
        </ul>
      </div>
      <div class="visual-card">
        <div class="row"><span data-fr="Écran" data-ar="الشاشة">Écran</span><strong data-fr="AMOLED 1,43&quot;" data-ar="AMOLED 1.43 بوصة">AMOLED 1,43&quot;</strong></div>
        <div class="row"><span data-fr="Autonomie" data-ar="البطارية">Autonomie</span><strong data-fr="7 jours" data-ar="7 أيام">7 jours</strong></div>
        <div class="row"><span data-fr="Étanchéité" data-ar="مقاومة الماء">Étanchéité</span><strong>IP68</strong></div>
        <div class="row"><span data-fr="Appels" data-ar="المكالمات">Appels</span><strong data-fr="Bluetooth 5.3" data-ar="بلوتوث 5.3">Bluetooth 5.3</strong></div>
        <div class="row"><span data-fr="Modes sportifs" data-ar="الأوضاع الرياضية">Modes sportifs</span><strong>120</strong></div>
        <div class="row"><span data-fr="Garantie" data-ar="الضمان">Garantie</span><strong data-fr="12 mois" data-ar="12 شهراً">12 mois</strong></div>
        <div class="row"><span data-fr="Prix" data-ar="الثمن">Prix</span><strong style="color:#047857">299 MAD</strong></div>
      </div>
    </div>
  </section>

  <section class="section" id="commander">
    <div class="container order">
      <div>
        <span class="kicker" data-fr="Commande" data-ar="الطلب">Commande</span>
        <h2 data-fr="Commandez en 30 secondes" data-ar="اطلب في 30 ثانية">Commandez en 30 secondes</h2>
        <p data-fr="Remplissez le formulaire, nous vous appelons pour confirmer. Vous payez au livreur, après avoir ouvert le colis." data-ar="املأ الاستمارة وسنتصل بك للتأكيد. تدفع للموصّل بعد فتح الطرد.">Remplissez le formulaire, nous vous appelons pour confirmer. Vous payez au livreur, après avoir ouvert le colis.</p>
        <ul class="hero-points" style="margin-top:1.4rem">
          <li style="color:#334155" data-fr="1. Vous commandez sans payer" data-ar="1. تطلب دون دفع">1. Vous commandez sans payer</li>
          <li style="color:#334155" data-fr="2. Nous confirmons par téléphone" data-ar="2. نؤكد بالهاتف">2. Nous confirmons par téléphone</li>
          <li style="color:#334155" data-fr="3. Vous recevez sous 24–48 h" data-ar="3. تستلم خلال 24–48 ساعة">3. Vous recevez sous 24–48 h</li>
          <li style="color:#334155" data-fr="4. Vous payez au livreur" data-ar="4. تدفع للموصّل">4. Vous payez au livreur</li>
        </ul>
      </div>
      <div class="order-card">
        <form class="form" data-demo-form>
          <div class="field">
            <label for="name" data-fr="Nom complet" data-ar="الاسم الكامل">Nom complet</label>
            <input id="name" name="name" type="text" autocomplete="name" required data-fr-placeholder="Ex. Youssef Benali" data-ar-placeholder="مثال: يوسف بنعلي" placeholder="Ex. Youssef Benali">
          </div>
          <div class="field">
            <label for="phone" data-fr="Téléphone (WhatsApp de préférence)" data-ar="الهاتف (واتساب مفضل)">Téléphone (WhatsApp de préférence)</label>
            <input id="phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required dir="ltr" placeholder="06 00 00 00 00">
          </div>
          <div class="field">
            <label for="city" data-fr="Ville" data-ar="المدينة">Ville</label>
            <select id="city" name="city" required>
              <option value="Casablanca" data-fr="Casablanca" data-ar="الدار البيضاء">Casablanca</option>
              <option value="Rabat" data-fr="Rabat" data-ar="الرباط">Rabat</option>
              <option value="Marrakech" data-fr="Marrakech" data-ar="مراكش">Marrakech</option>
              <option value="Fès" data-fr="Fès" data-ar="فاس">Fès</option>
              <option value="Tanger" data-fr="Tanger" data-ar="طنجة">Tanger</option>
              <option value="Agadir" data-fr="Agadir" data-ar="أكادير">Agadir</option>
              <option value="Autre" data-fr="Autre ville" data-ar="مدينة أخرى">Autre ville</option>
            </select>
          </div>
          <div class="field">
            <label for="address" data-fr="Adresse de livraison" data-ar="عنوان التوصيل">Adresse de livraison</label>
            <textarea id="address" name="address" required data-fr-placeholder="Quartier, rue, numéro, repère…" data-ar-placeholder="الحي، الشارع، الرقم، علامة…" placeholder="Quartier, rue, numéro, repère…"></textarea>
          </div>
          <div class="field">
            <label for="quantity" data-fr="Quantité" data-ar="الكمية">Quantité</label>
            <select id="quantity" name="quantity">
              <option value="1">1 × 299 MAD</option>
              <option value="2" data-fr="2 × 550 MAD (économisez 48 MAD)" data-ar="2 × 550 درهم (توفير 48 درهماً)">2 × 550 MAD (économisez 48 MAD)</option>
              <option value="3" data-fr="3 × 790 MAD (économisez 107 MAD)" data-ar="3 × 790 درهم (توفير 107 دراهم)">3 × 790 MAD (économisez 107 MAD)</option>
            </select>
          </div>
          <button class="btn btn-emerald" type="submit" data-fr="Confirmer ma commande" data-ar="تأكيد طلبي">Confirmer ma commande</button>
          <p class="form-status" role="status"></p>
          <p class="form-note" data-fr="Démonstration : ce formulaire n'envoie rien. Connectez-le à votre service e-mail, à WhatsApp Business ou à un webhook." data-ar="نسخة تجريبية: هذه الاستمارة لا ترسل شيئاً. اربطها بخدمة بريدك أو واتساب للأعمال أو webhook.">Démonstration : ce formulaire n'envoie rien. Connectez-le à votre service e-mail, à WhatsApp Business ou à un webhook.</p>
        </form>
      </div>
    </div>
  </section>

  <section class="section section-alt" id="avis">
    <div class="container">
      <div class="section-head">
        <span class="kicker" data-fr="Avis clients" data-ar="آراء العملاء">Avis clients</span>
        <h2 data-fr="Ils ont commandé avant vous" data-ar="طلبوا قبلك">Ils ont commandé avant vous</h2>
      </div>
      <div class="reviews">
        <article class="review"><div class="stars">★★★★★</div><p data-fr="« Reçue en 24 h à Casablanca. La batterie tient vraiment une semaine et les appels sont clairs. »" data-ar="«وصلت في 24 ساعة بالدار البيضاء. البطارية تدوم فعلاً أسبوعاً والمكالمات واضحة.»">« Reçue en 24 h à Casablanca. La batterie tient vraiment une semaine et les appels sont clairs. »</p><div class="reviewer"><span>YB</span><span data-fr="Youssef B. — Casablanca" data-ar="يوسف ب. — الدار البيضاء">Youssef B. — Casablanca</span></div></article>
        <article class="review"><div class="stars">★★★★★</div><p data-fr="« J'ai payé au livreur après avoir testé la montre devant lui. Aucune mauvaise surprise. »" data-ar="«دفعت للموصّل بعد تجربة الساعة أمامه. لا مفاجآت سيئة.»">« J'ai payé au livreur après avoir testé la montre devant lui. Aucune mauvaise surprise. »</p><div class="reviewer"><span>SE</span><span data-fr="Salma E. — Rabat" data-ar="سلمى إ. — الرباط">Salma E. — Rabat</span></div></article>
        <article class="review"><div class="stars">★★★★☆</div><p data-fr="« Bon rapport qualité-prix pour le sport. L'application pourrait être plus complète mais le service répond vite. »" data-ar="«جودة جيدة مقابل الثمن للرياضة. التطبيق يمكن أن يكون أكمل لكن الخدمة تجيب بسرعة.»">« Bon rapport qualité-prix pour le sport. L'application pourrait être plus complète mais le service répond vite. »</p><div class="reviewer"><span>MA</span><span data-fr="Mehdi A. — Marrakech" data-ar="مهدي أ. — مراكش">Mehdi A. — Marrakech</span></div></article>
      </div>
    </div>
  </section>

  <section class="section" id="faq">
    <div class="container">
      <div class="section-head">
        <span class="kicker" data-fr="Questions fréquentes" data-ar="أسئلة شائعة">Questions fréquentes</span>
        <h2 data-fr="Tout ce qu'il faut savoir avant de commander" data-ar="كل ما تحتاج معرفته قبل الطلب">Tout ce qu'il faut savoir avant de commander</h2>
      </div>
      <div class="faq">
        <details open><summary data-fr="Je paie quand ?" data-ar="متى أدفع؟">Je paie quand ?</summary><p data-fr="Uniquement à la réception du colis, en espèces au livreur. Aucun paiement en ligne n'est demandé." data-ar="فقط عند استلام الطرد، نقداً للموصّل. لا يُطلب أي دفع إلكتروني.">Uniquement à la réception du colis, en espèces au livreur. Aucun paiement en ligne n'est demandé.</p></details>
        <details><summary data-fr="La livraison est-elle vraiment gratuite ?" data-ar="هل التوصيل مجاني فعلاً؟">La livraison est-elle vraiment gratuite ?</summary><p data-fr="Oui, pour toutes les villes desservies. Aucun frais n'est ajouté au moment de la réception." data-ar="نعم، في كل المدن المشمولة. لا تُضاف أي رسوم عند الاستلام.">Oui, pour toutes les villes desservies. Aucun frais n'est ajouté au moment de la réception.</p></details>
        <details><summary data-fr="Puis-je retourner le produit ?" data-ar="هل يمكنني إرجاع المنتج؟">Puis-je retourner le produit ?</summary><p data-fr="Vous disposez de 7 jours après réception. Contactez-nous sur WhatsApp, nous organisons le retour et le remboursement." data-ar="لديك 7 أيام بعد الاستلام. تواصل معنا على واتساب لتنظيم الإرجاع والاسترداد.">Vous disposez de 7 jours après réception. Contactez-nous sur WhatsApp, nous organisons le retour et le remboursement.</p></details>
        <details><summary data-fr="La montre fonctionne-t-elle avec mon téléphone ?" data-ar="هل تعمل الساعة مع هاتفي؟">La montre fonctionne-t-elle avec mon téléphone ?</summary><p data-fr="Elle est compatible avec Android 6.0+ et iOS 12+. L'application est gratuite et disponible en français, arabe et anglais." data-ar="متوافقة مع أندرويد 6.0+ وiOS 12+. التطبيق مجاني ومتاح بالفرنسية والعربية والإنجليزية.">Elle est compatible avec Android 6.0+ et iOS 12+. L'application est gratuite et disponible en français, arabe et anglais.</p></details>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="container">
    <span><strong>AtlasShop</strong> — <span data-fr="Modèle de landing page COD par ProTemplates" data-ar="قالب صفحة هبوط COD من ProTemplates">Modèle de landing page COD par ProTemplates</span></span>
    <span data-fr="© 2026 · protemplates.ma" data-ar="© 2026 · protemplates.ma">© 2026 · protemplates.ma</span>
  </div>
</footer>

<div class="sticky-cta">
  <span><strong>299 MAD</strong><br><span style="font-size:.75rem;color:#64748b" data-fr="Paiement à la livraison" data-ar="الدفع عند الاستلام">Paiement à la livraison</span></span>
  <a class="btn btn-emerald" href="#commander" data-fr="Commander" data-ar="اطلب الآن">Commander</a>
</div>

<script>
(function () {
  var KEY = "atlas-cod-lang";
  var html = document.documentElement;
  function apply(lang) {
    var ar = lang === "ar";
    html.lang = ar ? "ar" : "fr";
    html.dir = ar ? "rtl" : "ltr";
    document.querySelectorAll("[data-fr][data-ar]").forEach(function (node) {
      var value = node.getAttribute(ar ? "data-ar" : "data-fr");
      if (value !== null) node.textContent = value;
    });
    document.querySelectorAll("[data-fr-placeholder][data-ar-placeholder]").forEach(function (node) {
      node.setAttribute("placeholder", node.getAttribute(ar ? "data-ar-placeholder" : "data-fr-placeholder"));
    });
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  if (stored === "ar") apply("ar");
  document.querySelectorAll("[data-lang]").forEach(function (button) {
    button.addEventListener("click", function () { apply(button.dataset.lang); });
  });
  var form = document.querySelector("form[data-demo-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = form.querySelector(".form-status");
      status.textContent = html.lang === "ar"
        ? "شكراً! هذه نسخة تجريبية — اربط الاستمارة بخدمة بريدك أو واتساب."
        : "Merci ! Ceci est une démo — connectez le formulaire à votre service e-mail ou WhatsApp.";
      form.reset();
    });
  }
})();
</script>`;

export function codLandingHtml() {
  return `<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AtlasShop — Montre connectée, paiement à la livraison au Maroc</title>
<meta name="description" content="Montre connectée à 299 MAD, paiement à la livraison partout au Maroc. Livraison 24–48 h, garantie 1 an, retour sous 7 jours.">
<meta name="theme-color" content="#0f172a">
<style>${CSS}</style>
</head>
<body>
${BODY}
</body>
</html>
`;
}

export async function buildCodLanding(dir) {
  await ensureDir(dir);
  await writeSource(`${dir}/index.html`, codLandingHtml());
  await writeSource(
    `${dir}/LIRE-MOI.txt`,
    [
      "LANDING PAGE COD — PAIEMENT À LA LIVRAISON",
      "=========================================",
      "",
      "Ce dossier contient un seul fichier : index.html.",
      "Il fonctionne sans serveur, sans base de données et sans installation.",
      "",
      "1. Ouvrez index.html dans votre navigateur pour prévisualiser.",
      "2. Modifiez les textes directement dans le fichier (ils sont en clair).",
      "3. Remplacez le numéro de téléphone, le nom de la marque et les prix.",
      "4. Déposez le fichier sur n'importe quel hébergement (cPanel, Netlify, Vercel, GitHub Pages).",
      "",
      "Pour recevoir les commandes :",
      "- Le formulaire est volontairement en mode démonstration.",
      "- Connectez-le à Formspree, EmailJS, Google Forms ou un webhook WhatsApp.",
      "- Ou remplacez le bouton par un lien wa.me avec un message pré-rempli.",
      "",
      "Bilingue français / arabe : le bouton FR / AR en haut à droite change la langue",
      "et l'orientation de la page sans rechargement.",
      "",
      "Les visuels sont des SVG intégrés : remplacez le bloc <svg> du produit par",
      "vos propres photos (JPG ou WebP) si vous en avez.",
      "",
      "ProTemplates — protemplates.ma",
    ].join("\r\n"),
  );
}
