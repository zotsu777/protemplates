import { FOOTER, HEAD, NAV } from "./shared.mjs";

/** Home page of the five-page showcase website. */
export function homePage() {
  return `${HEAD(
    "Atlas Studio — Sites web & identité visuelle pour TPE au Maroc",
    "Studio de design et développement web à Casablanca. Sites vitrines, identité visuelle et landing pages pour les TPE marocaines, en français et en arabe.",
  )}
${NAV("index.html")}
<main>
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <span class="eyebrow" data-fr="Studio digital · Casablanca" data-ar="استوديو رقمي · الدار البيضاء">Studio digital · Casablanca</span>
        <h1 data-fr="Un site clair. Une image pro. Des clients qui appellent." data-ar="موقع واضح. صورة مهنية. عملاء يتصلون.">Un site clair. Une image pro. Des clients qui appellent.</h1>
        <p class="lead" data-fr="Nous concevons des sites vitrines et des identités visuelles pour les petites entreprises marocaines. Livraison en 15 jours, en français et en arabe, sans abonnement." data-ar="نصمم مواقع تعريفية وهويات بصرية للمقاولات الصغرى المغربية. التسليم في 15 يوماً، بالفرنسية والعربية، وبدون اشتراك.">Nous concevons des sites vitrines et des identités visuelles pour les petites entreprises marocaines. Livraison en 15 jours, en français et en arabe, sans abonnement.</p>
        <div class="hero-actions">
          <a class="btn btn-emerald" href="contact.html" data-fr="Demander un devis" data-ar="اطلب عرض سعر">Demander un devis</a>
          <a class="btn btn-ghost" href="realisations.html" data-fr="Voir nos réalisations" data-ar="شاهد أعمالنا">Voir nos réalisations</a>
        </div>
        <div class="hero-meta">
          <div><strong>42</strong><span data-fr="projets livrés" data-ar="مشروعاً منجزاً">projets livrés</span></div>
          <div><strong>15 j</strong><span data-fr="délai moyen" data-ar="متوسط المدة">délai moyen</span></div>
          <div><strong>4,9/5</strong><span data-fr="satisfaction client" data-ar="رضا العملاء">satisfaction client</span></div>
        </div>
      </div>
      <figure class="hero-card">
        <svg viewBox="0 0 560 400" role="img" aria-label="Aperçu d'un site vitrine">
          <rect width="560" height="400" rx="14" fill="#ffffff"/>
          <rect x="0" y="0" width="560" height="44" rx="14" fill="#f1f5f9"/>
          <circle cx="26" cy="22" r="6" fill="#f43f5e"/><circle cx="46" cy="22" r="6" fill="#f59e0b"/><circle cx="66" cy="22" r="6" fill="#10b981"/>
          <rect x="96" y="13" width="200" height="18" rx="9" fill="#e2e8f0"/>
          <rect x="34" y="76" width="180" height="14" rx="7" fill="#dbeafe"/>
          <rect x="34" y="104" width="300" height="26" rx="6" fill="#0f172a"/>
          <rect x="34" y="138" width="250" height="26" rx="6" fill="#0f172a"/>
          <rect x="34" y="184" width="280" height="9" rx="4.5" fill="#cbd5e1"/>
          <rect x="34" y="201" width="240" height="9" rx="4.5" fill="#cbd5e1"/>
          <rect x="34" y="232" width="112" height="34" rx="17" fill="#2563eb"/>
          <rect x="156" y="232" width="112" height="34" rx="17" fill="#f1f5f9"/>
          <rect x="352" y="76" width="174" height="190" rx="14" fill="#1d4ed8"/>
          <circle cx="439" cy="146" r="38" fill="#10b981" opacity="0.85"/>
          <rect x="374" y="200" width="130" height="10" rx="5" fill="#93c5fd"/>
          <rect x="374" y="220" width="96" height="10" rx="5" fill="#93c5fd"/>
          <rect x="34" y="304" width="150" height="66" rx="12" fill="#f8fafc" stroke="#e2e8f0"/>
          <rect x="200" y="304" width="150" height="66" rx="12" fill="#f8fafc" stroke="#e2e8f0"/>
          <rect x="366" y="304" width="160" height="66" rx="12" fill="#f8fafc" stroke="#e2e8f0"/>
        </svg>
        <figcaption><span data-fr="Modèle responsive" data-ar="قالب متجاوب">Modèle responsive</span><span data-fr="FR / AR" data-ar="فرنسية / عربية">FR / AR</span></figcaption>
      </figure>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow" data-fr="Ce que nous faisons" data-ar="ما نقوم به">Ce que nous faisons</span>
        <h2 data-fr="Trois offres. Aucune mauvaise surprise." data-ar="ثلاث عروض. بلا مفاجآت.">Trois offres. Aucune mauvaise surprise.</h2>
        <p data-fr="Chaque projet commence par un appel de 30 minutes et se termine par une formation pour que vous soyez autonome." data-ar="كل مشروع يبدأ بمكالمة 30 دقيقة وينتهي بتكوين لتكون مستقلاً.">Chaque projet commence par un appel de 30 minutes et se termine par une formation pour que vous soyez autonome.</p>
      </div>
      <div class="grid-3">
        <article class="card">
          <div class="card-icon">01</div>
          <h3 data-fr="Site vitrine" data-ar="موقع تعريفي">Site vitrine</h3>
          <p data-fr="5 pages essentielles, formulaire de contact, carte, galerie et référencement local. Livré en HTML autonome ou sur votre hébergement." data-ar="5 صفحات أساسية، استمارة تواصل، خريطة، معرض صور وتحسين الظهور المحلي. يُسلَّم HTML مستقلاً أو على استضافتك.">5 pages essentielles, formulaire de contact, carte, galerie et référencement local. Livré en HTML autonome ou sur votre hébergement.</p>
        </article>
        <article class="card card-accent">
          <div class="card-icon">02</div>
          <h3 data-fr="Identité visuelle" data-ar="هوية بصرية">Identité visuelle</h3>
          <p data-fr="Logo, palette, typographies, cartes de visite et déclinaisons réseaux sociaux. Fichiers sources inclus pour imprimer où vous voulez." data-ar="شعار، ألوان، خطوط، بطاقات زيارة وتصاميم لشبكات التواصل. ملفات مصدرية للطباعة أينما شئت.">Logo, palette, typographies, cartes de visite et déclinaisons réseaux sociaux. Fichiers sources inclus pour imprimer où vous voulez.</p>
        </article>
        <article class="card">
          <div class="card-icon">03</div>
          <h3 data-fr="Landing page COD" data-ar="صفحة هبوط COD">Landing page COD</h3>
          <p data-fr="Page de vente optimisée pour le paiement à la livraison : preuve sociale, formulaire court et suivi des conversions." data-ar="صفحة بيع محسّنة للدفع عند الاستلام: دليل اجتماعي، استمارة قصيرة وتتبع التحويلات.">Page de vente optimisée pour le paiement à la livraison : preuve sociale, formulaire court et suivi des conversions.</p>
        </article>
      </div>
      <div style="margin-top:2rem"><a class="btn btn-ghost" href="services.html" data-fr="Détail des services et tarifs" data-ar="تفاصيل الخدمات والأثمنة">Détail des services et tarifs</a></div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow" data-fr="Méthode" data-ar="المنهجية">Méthode</span>
        <h2 data-fr="Quatre étapes, quinze jours" data-ar="أربع مراحل، خمسة عشر يوماً">Quatre étapes, quinze jours</h2>
      </div>
      <div class="steps">
        <div class="step"><h3 data-fr="Appel & cadrage" data-ar="مكالمة وتأطير">Appel & cadrage</h3><p data-fr="30 minutes pour comprendre votre activité, vos clients et vos objectifs réels." data-ar="30 دقيقة لفهم نشاطك وعملائك وأهدافك الحقيقية.">30 minutes pour comprendre votre activité, vos clients et vos objectifs réels.</p></div>
        <div class="step"><h3 data-fr="Conception" data-ar="التصميم">Conception</h3><p data-fr="Structure, textes et maquettes. Vous validez avant que la moindre ligne soit écrite." data-ar="الهيكلة والنصوص والنماذج. توافق قبل كتابة أي سطر.">Structure, textes et maquettes. Vous validez avant que la moindre ligne soit écrite.</p></div>
        <div class="step"><h3 data-fr="Développement" data-ar="التطوير">Développement</h3><p data-fr="Intégration responsive, version arabe RTL, performance et référencement de base." data-ar="إدماج متجاوب، نسخة عربية RTL، أداء وتحسين ظهور أساسي.">Intégration responsive, version arabe RTL, performance et référencement de base.</p></div>
        <div class="step"><h3 data-fr="Livraison & formation" data-ar="التسليم والتكوين">Livraison & formation</h3><p data-fr="Mise en ligne, accès aux fichiers et une heure de formation pour modifier vos textes." data-ar="النشر، الوصول إلى الملفات وساعة تكوين لتعديل نصوصك.">Mise en ligne, accès aux fichiers et une heure de formation pour modifier vos textes.</p></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container split">
      <div>
        <span class="eyebrow" data-fr="Réalisations" data-ar="أعمالنا">Réalisations</span>
        <h2 data-fr="Des projets simples, livrés proprement" data-ar="مشاريع بسيطة، منجزة باحتراف">Des projets simples, livrés proprement</h2>
        <p data-fr="Un cabinet dentaire, une marque de cosmétiques naturels, un restaurant de quartier : chaque projet avait le même enjeu — être trouvé et rassurer." data-ar="عيادة أسنان، علامة مستحضرات طبيعية، مطعم بالحي: كل مشروع كان له نفس التحدي — أن يُوجَد ويطمئن.">Un cabinet dentaire, une marque de cosmétiques naturels, un restaurant de quartier : chaque projet avait le même enjeu — être trouvé et rassurer.</p>
        <ul class="checklist">
          <li data-fr="+180 % de demandes entrantes pour le cabinet dentaire" data-ar="+180% من الطلبات الواردة لعيادة الأسنان">+180 % de demandes entrantes pour le cabinet dentaire</li>
          <li data-fr="Site bilingue pour une marque vendue dans 3 villes" data-ar="موقع ثنائي اللغة لعلامة تُباع في 3 مدن">Site bilingue pour une marque vendue dans 3 villes</li>
          <li data-fr="Landing COD avec un coût par commande divisé par deux" data-ar="صفحة COD بكلفة طلب أقل بالنصف">Landing COD avec un coût par commande divisé par deux</li>
        </ul>
        <a class="btn btn-ghost" href="realisations.html" data-fr="Voir les études de cas" data-ar="شاهد دراسات الحالة">Voir les études de cas</a>
      </div>
      <div class="quote">
        <blockquote data-fr="« Ils ont compris notre métier en une réunion. Le site est clair, rapide, et les patients réservent directement depuis leur téléphone. »" data-ar="«فهموا مهنتنا في اجتماع واحد. الموقع واضح وسريع والمرضى يحجزون مباشرة من هواتفهم.»">« Ils ont compris notre métier en une réunion. Le site est clair, rapide, et les patients réservent directement depuis leur téléphone. »</blockquote>
        <footer data-fr="Dr. Amine B. — Cabinet dentaire, Casablanca" data-ar="د. أمين ب. — عيادة أسنان، الدار البيضاء">Dr. Amine B. — Cabinet dentaire, Casablanca</footer>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="stats">
        <div class="stat"><strong>42</strong><span data-fr="projets livrés depuis 2022" data-ar="مشروعاً منجزاً منذ 2022">projets livrés depuis 2022</span></div>
        <div class="stat"><strong>15 j</strong><span data-fr="délai moyen de livraison" data-ar="متوسط مدة التسليم">délai moyen de livraison</span></div>
        <div class="stat"><strong>98 %</strong><span data-fr="clients qui recommandent" data-ar="عملاء يوصون بنا">clients qui recommandent</span></div>
        <div class="stat"><strong>0</strong><span data-fr="abonnement obligatoire" data-ar="اشتراك إلزامي">abonnement obligatoire</span></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-band">
        <div>
          <h2 data-fr="Parlons de votre projet." data-ar="لنتحدث عن مشروعك.">Parlons de votre projet.</h2>
          <p data-fr="Un appel de 30 minutes suffit pour savoir ce dont vous avez besoin — et ce dont vous n'avez pas besoin." data-ar="مكالمة 30 دقيقة تكفي لمعرفة ما تحتاجه — وما لا تحتاجه.">Un appel de 30 minutes suffit pour savoir ce dont vous avez besoin — et ce dont vous n'avez pas besoin.</p>
        </div>
        <a class="btn btn-emerald" href="contact.html" data-fr="Réserver un appel" data-ar="احجز مكالمة">Réserver un appel</a>
      </div>
    </div>
  </section>
</main>
${FOOTER()}`;
}

/** Services + pricing page. */
export function servicesPage() {
  return `${HEAD(
    "Services & tarifs — Atlas Studio",
    "Sites vitrines, identité visuelle, landing pages COD et maintenance. Tarifs en dirhams, livraison en 15 jours.",
  )}
${NAV("services.html")}
<main>
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb"><a href="index.html" data-fr="Accueil" data-ar="الرئيسية">Accueil</a> · <span data-fr="Services" data-ar="الخدمات">Services</span></div>
      <span class="eyebrow" data-fr="Nos services" data-ar="خدماتنا">Nos services</span>
      <h1 data-fr="Des livrables clairs, à prix fixe." data-ar="مخرجات واضحة، بثمن ثابت.">Des livrables clairs, à prix fixe.</h1>
      <p data-fr="Pas de devis flou ni d'heures facturées à la surprise. Chaque offre décrit exactement ce que vous recevez, dans quel délai et à quel prix." data-ar="لا عروض غامضة ولا ساعات تُحسب بالمفاجأة. كل عرض يوضح بالضبط ما تستلمه وفي أي مدة وبأي ثمن.">Pas de devis flou ni d'heures facturées à la surprise. Chaque offre décrit exactement ce que vous recevez, dans quel délai et à quel prix.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="grid-2">
        <article class="card">
          <div class="card-icon">A</div>
          <h3 data-fr="Site vitrine 5 pages" data-ar="موقع تعريفي 5 صفحات">Site vitrine 5 pages</h3>
          <p data-fr="La base complète pour exister en ligne et rassurer vos futurs clients." data-ar="الأساس الكامل لتكون موجوداً على الإنترنت وتطمئن عملاءك.">La base complète pour exister en ligne et rassurer vos futurs clients.</p>
          <ul class="checklist">
            <li data-fr="Accueil, services, réalisations, à propos, contact" data-ar="الرئيسية، الخدمات، الأعمال، من نحن، اتصل بنا">Accueil, services, réalisations, à propos, contact</li>
            <li data-fr="Design responsive mobile, tablette et ordinateur" data-ar="تصميم متجاوب للهاتف واللوحي والحاسوب">Design responsive mobile, tablette et ordinateur</li>
            <li data-fr="Version française et arabe avec bascule RTL" data-ar="نسخة فرنسية وعربية مع تبديل RTL">Version française et arabe avec bascule RTL</li>
            <li data-fr="Formulaire de contact et lien WhatsApp" data-ar="استمارة تواصل ورابط واتساب">Formulaire de contact et lien WhatsApp</li>
            <li data-fr="Référencement local et fiche Google" data-ar="تحسين الظهور المحلي وبطاقة Google">Référencement local et fiche Google</li>
          </ul>
        </article>
        <article class="card card-accent">
          <div class="card-icon">B</div>
          <h3 data-fr="Identité visuelle complète" data-ar="هوية بصرية كاملة">Identité visuelle complète</h3>
          <p data-fr="Pour lancer une marque cohérente sur le web, en imprimé et sur les réseaux." data-ar="لإطلاق علامة متناسقة على الويب والطباعة والشبكات.">Pour lancer une marque cohérente sur le web, en imprimé et sur les réseaux.</p>
          <ul class="checklist">
            <li data-fr="Logo principal, secondaire et version monochrome" data-ar="شعار رئيسي وثانوي ونسخة أحادية اللون">Logo principal, secondaire et version monochrome</li>
            <li data-fr="Palette de couleurs et règles typographiques" data-ar="لوحة ألوان وقواعد الخطوط">Palette de couleurs et règles typographiques</li>
            <li data-fr="Cartes de visite, en-tête et signature e-mail" data-ar="بطاقات زيارة، ترويسة وتوقيع بريد">Cartes de visite, en-tête et signature e-mail</li>
            <li data-fr="10 visuels pour Instagram et Facebook" data-ar="10 تصاميم لإنستغرام وفايسبوك">10 visuels pour Instagram et Facebook</li>
            <li data-fr="Guide de marque PDF de 12 pages" data-ar="دليل العلامة PDF من 12 صفحة">Guide de marque PDF de 12 pages</li>
          </ul>
        </article>
        <article class="card">
          <div class="card-icon">C</div>
          <h3 data-fr="Landing page COD" data-ar="صفحة هبوط COD">Landing page COD</h3>
          <p data-fr="Une seule page, un seul objectif : générer des commandes en paiement à la livraison." data-ar="صفحة واحدة وهدف واحد: توليد طلبات بالدفع عند الاستلام.">Une seule page, un seul objectif : générer des commandes en paiement à la livraison.</p>
          <ul class="checklist">
            <li data-fr="Structure de vente éprouvée (preuve, offre, objections)" data-ar="هيكلة بيع مجرَّبة (دليل، عرض، اعتراضات)">Structure de vente éprouvée (preuve, offre, objections)</li>
            <li data-fr="Formulaire court et bouton WhatsApp" data-ar="استمارة قصيرة وزر واتساب">Formulaire court et bouton WhatsApp</li>
            <li data-fr="Bilingue FR / AR et rapide sur mobile" data-ar="ثنائية اللغة وسريعة على الهاتف">Bilingue FR / AR et rapide sur mobile</li>
            <li data-fr="Suivi des conversions (Meta Pixel ou GA4)" data-ar="تتبع التحويلات (Meta Pixel أو GA4)">Suivi des conversions (Meta Pixel ou GA4)</li>
            <li data-fr="2 variantes de titres pour tester" data-ar="نسختان من العناوين للاختبار">2 variantes de titres pour tester</li>
          </ul>
        </article>
        <article class="card">
          <div class="card-icon">D</div>
          <h3 data-fr="Maintenance & SEO local" data-ar="الصيانة والظهور المحلي">Maintenance & SEO local</h3>
          <p data-fr="Votre site reste à jour, rapide et visible dans votre ville." data-ar="موقعك يبقى محدثاً وسريعاً ومرئياً في مدينتك.">Votre site reste à jour, rapide et visible dans votre ville.</p>
          <ul class="checklist">
            <li data-fr="Mises à jour de contenu et sauvegardes mensuelles" data-ar="تحديثات المحتوى ونسخ احتياطية شهرية">Mises à jour de contenu et sauvegardes mensuelles</li>
            <li data-fr="Optimisation des pages pour Google Maps" data-ar="تحسين الصفحات لخرائط Google">Optimisation des pages pour Google Maps</li>
            <li data-fr="Rapport mensuel simple : visites, appels, demandes" data-ar="تقرير شهري بسيط: زيارات، مكالمات، طلبات">Rapport mensuel simple : visites, appels, demandes</li>
            <li data-fr="Corrections techniques et surveillance de la vitesse" data-ar="إصلاحات تقنية ومراقبة السرعة">Corrections techniques et surveillance de la vitesse</li>
            <li data-fr="Support WhatsApp du lundi au vendredi" data-ar="دعم واتساب من الاثنين إلى الجمعة">Support WhatsApp du lundi au vendredi</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow" data-fr="Tarifs" data-ar="الأثمنة">Tarifs</span>
        <h2 data-fr="Trois formules, tout compris" data-ar="ثلاث صيغ، كل شيء مشمول">Trois formules, tout compris</h2>
        <p data-fr="Les prix incluent la conception, l'intégration et une heure de formation. L'hébergement et le nom de domaine restent à votre nom." data-ar="الأثمنة تشمل التصميم والإدماج وساعة تكوين. الاستضافة واسم النطاق يبقيان باسمك.">Les prix incluent la conception, l'intégration et une heure de formation. L'hébergement et le nom de domaine restent à votre nom.</p>
      </div>
      <div class="pricing">
        <article class="plan">
          <h3 data-fr="Essentiel" data-ar="الأساسي">Essentiel</h3>
          <p class="muted" data-fr="Pour démarrer proprement" data-ar="للانطلاق باحتراف">Pour démarrer proprement</p>
          <div class="price">2 900 <small>MAD</small></div>
          <ul>
            <li data-fr="Site 5 pages responsive" data-ar="موقع 5 صفحات متجاوب">Site 5 pages responsive</li>
            <li data-fr="Version FR ou AR" data-ar="نسخة فرنسية أو عربية">Version FR ou AR</li>
            <li data-fr="Formulaire de contact" data-ar="استمارة تواصل">Formulaire de contact</li>
            <li data-fr="Livraison en 15 jours" data-ar="التسليم في 15 يوماً">Livraison en 15 jours</li>
          </ul>
          <a class="btn btn-ghost" href="contact.html" data-fr="Choisir Essentiel" data-ar="اختر الأساسي">Choisir Essentiel</a>
        </article>
        <article class="plan featured">
          <h3 data-fr="Bilingue" data-ar="ثنائي اللغة">Bilingue</h3>
          <p class="muted" data-fr="Le plus demandé" data-ar="الأكثر طلباً">Le plus demandé</p>
          <div class="price">4 500 <small>MAD</small></div>
          <ul>
            <li data-fr="Site 5 pages responsive" data-ar="موقع 5 صفحات متجاوب">Site 5 pages responsive</li>
            <li data-fr="FR + AR avec bascule RTL" data-ar="فرنسية + عربية مع RTL">FR + AR avec bascule RTL</li>
            <li data-fr="Logo et palette de couleurs" data-ar="شعار ولوحة ألوان">Logo et palette de couleurs</li>
            <li data-fr="SEO local et Google Maps" data-ar="SEO محلي وخرائط Google">SEO local et Google Maps</li>
            <li data-fr="2 séries de retouches" data-ar="جولتان من التعديلات">2 séries de retouches</li>
          </ul>
          <a class="btn btn-primary" href="contact.html" data-fr="Choisir Bilingue" data-ar="اختر ثنائي اللغة">Choisir Bilingue</a>
        </article>
        <article class="plan">
          <h3 data-fr="Croissance" data-ar="النمو">Croissance</h3>
          <p class="muted" data-fr="Site + acquisition" data-ar="موقع + اكتساب">Site + acquisition</p>
          <div class="price">7 900 <small>MAD</small></div>
          <ul>
            <li data-fr="Tout le pack Bilingue" data-ar="كل ما في ثنائي اللغة">Tout le pack Bilingue</li>
            <li data-fr="Landing page COD dédiée" data-ar="صفحة هبوط COD مخصصة">Landing page COD dédiée</li>
            <li data-fr="10 visuels réseaux sociaux" data-ar="10 تصاميم للشبكات">10 visuels réseaux sociaux</li>
            <li data-fr="Suivi des conversions" data-ar="تتبع التحويلات">Suivi des conversions</li>
            <li data-fr="1 mois de maintenance offert" data-ar="شهر صيانة مجاني">1 mois de maintenance offert</li>
          </ul>
          <a class="btn btn-ghost" href="contact.html" data-fr="Choisir Croissance" data-ar="اختر النمو">Choisir Croissance</a>
        </article>
      </div>
      <p class="center muted" style="margin-top:1.6rem;font-size:.86rem" data-fr="Tarifs hors hébergement (environ 600 MAD/an) et hors nom de domaine. Paiement en 2 fois possible." data-ar="الأثمنة دون الاستضافة (حوالي 600 درهم سنوياً) ودون اسم النطاق. الدفع على قسطين ممكن.">Tarifs hors hébergement (environ 600 MAD/an) et hors nom de domaine. Paiement en 2 fois possible.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow" data-fr="Questions fréquentes" data-ar="أسئلة شائعة">Questions fréquentes</span>
        <h2 data-fr="Avant de commencer" data-ar="قبل البدء">Avant de commencer</h2>
      </div>
      <div class="faq">
        <details open><summary data-fr="Qui rédige les textes du site ?" data-ar="من يكتب نصوص الموقع؟">Qui rédige les textes du site ?</summary><p data-fr="Nous partons de vos informations et rédigeons une première version. Vous corrigez ensuite : c'est vous qui connaissez vos clients." data-ar="ننطلق من معلوماتك ونكتب نسخة أولى. تصححها بعد ذلك: أنت من يعرف عملاءك.">Nous partons de vos informations et rédigeons une première version. Vous corrigez ensuite : c'est vous qui connaissez vos clients.</p></details>
        <details><summary data-fr="Puis-je modifier le site moi-même ?" data-ar="هل يمكنني تعديل الموقع بنفسي؟">Puis-je modifier le site moi-même ?</summary><p data-fr="Oui. Les fichiers sont du HTML simple, livrés avec un guide d'une page. Une heure de formation est incluse." data-ar="نعم. الملفات HTML بسيطة ومرفقة بدليل من صفحة واحدة. ساعة تكوين مشمولة.">Oui. Les fichiers sont du HTML simple, livrés avec un guide d'une page. Une heure de formation est incluse.</p></details>
        <details><summary data-fr="Travaillez-vous avec des entreprises hors Casablanca ?" data-ar="هل تعملون مع مقاولات خارج الدار البيضاء؟">Travaillez-vous avec des entreprises hors Casablanca ?</summary><p data-fr="Oui, tout se fait à distance. Nous avons des clients à Rabat, Marrakech, Agadir et Tanger." data-ar="نعم، كل شيء يتم عن بعد. لدينا عملاء في الرباط ومراكش وأكادير وطنجة.">Oui, tout se fait à distance. Nous avons des clients à Rabat, Marrakech, Agadir et Tanger.</p></details>
        <details><summary data-fr="Que se passe-t-il après la livraison ?" data-ar="ماذا يحدث بعد التسليم؟">Que se passe-t-il après la livraison ?</summary><p data-fr="30 jours de garantie pour corriger les anomalies. Ensuite, la maintenance est optionnelle, sans engagement." data-ar="ضمان 30 يوماً لإصلاح الأخطاء. بعدها الصيانة اختيارية وبدون التزام.">30 jours de garantie pour corriger les anomalies. Ensuite, la maintenance est optionnelle, sans engagement.</p></details>
      </div>
    </div>
  </section>
</main>
${FOOTER()}`;
}
