import { FOOTER, HEAD, NAV } from "./shared.mjs";

/** Portfolio page with three case studies. */
export function realisationsPage() {
  return `${HEAD(
    "Réalisations — Atlas Studio",
    "Trois études de cas : cabinet dentaire, marque de cosmétiques naturels et restaurant de quartier à Casablanca.",
  )}
${NAV("realisations.html")}
<main>
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb"><a href="index.html" data-fr="Accueil" data-ar="الرئيسية">Accueil</a> · <span data-fr="Réalisations" data-ar="أعمالنا">Réalisations</span></div>
      <span class="eyebrow" data-fr="Portfolio" data-ar="معرض الأعمال">Portfolio</span>
      <h1 data-fr="Trois projets, trois problèmes résolus." data-ar="ثلاثة مشاريع، ثلاث مشاكل محلولة.">Trois projets, trois problèmes résolus.</h1>
      <p data-fr="Nous ne montrons pas des maquettes : chaque projet ci-dessous est en ligne et utilisé tous les jours par son propriétaire." data-ar="لا نعرض نماذج فقط: كل مشروع أدناه منشور ويُستعمل يومياً من صاحبه.">Nous ne montrons pas des maquettes : chaque projet ci-dessous est en ligne et utilisé tous les jours par son propriétaire.</p>
    </div>
  </section>

  <section class="section">
    <div class="container work-grid">
      <article class="work">
        <div class="work-visual">
          <svg viewBox="0 0 480 300" role="img" aria-label="Site cabinet dentaire">
            <rect width="480" height="300" fill="#eff6ff"/>
            <rect x="28" y="24" width="424" height="252" rx="12" fill="#fff"/>
            <rect x="28" y="24" width="424" height="40" rx="12" fill="#1d4ed8"/>
            <text x="52" y="50" font-family="Segoe UI,Arial" font-size="15" font-weight="700" fill="#fff">Cabinet Dentaire Atlas</text>
            <rect x="52" y="90" width="180" height="16" rx="6" fill="#0f172a"/>
            <rect x="52" y="116" width="140" height="16" rx="6" fill="#0f172a"/>
            <rect x="52" y="148" width="190" height="8" rx="4" fill="#cbd5e1"/>
            <rect x="52" y="164" width="160" height="8" rx="4" fill="#cbd5e1"/>
            <rect x="52" y="192" width="98" height="30" rx="15" fill="#10b981"/>
            <rect x="288" y="90" width="140" height="132" rx="10" fill="#dbeafe"/>
            <circle cx="358" cy="140" r="26" fill="#2563eb" opacity="0.7"/>
            <rect x="306" y="182" width="104" height="8" rx="4" fill="#93c5fd"/>
            <rect x="306" y="198" width="76" height="8" rx="4" fill="#93c5fd"/>
          </svg>
        </div>
        <div class="work-body">
          <h2 style="font-size:1.35rem" data-fr="Cabinet Dentaire Atlas" data-ar="عيادة أسنان أطلس">Cabinet Dentaire Atlas</h2>
          <p data-fr="Un cabinet à Casablanca sans site, invisible sur Google. Objectif : recevoir des demandes de rendez-vous sans passer par les réseaux sociaux." data-ar="عيادة بالدار البيضاء بلا موقع وغير مرئية على Google. الهدف: تلقي طلبات مواعيد دون المرور بالشبكات الاجتماعية.">Un cabinet à Casablanca sans site, invisible sur Google. Objectif : recevoir des demandes de rendez-vous sans passer par les réseaux sociaux.</p>
          <p data-fr="Résultat : +180 % de demandes entrantes en trois mois, et une fiche Google complétée qui apparaît en première page sur « dentiste Gauthier »." data-ar="النتيجة: +180% من الطلبات الواردة في ثلاثة أشهر، وبطاقة Google مكتملة تظهر في الصفحة الأولى على «dentiste Gauthier».">Résultat : +180 % de demandes entrantes en trois mois, et une fiche Google complétée qui apparaît en première page sur « dentiste Gauthier ».</p>
          <ul class="tags"><li>HTML</li><li>SEO local</li><li data-fr="Bilingue" data-ar="ثنائي اللغة">Bilingue</li></ul>
        </div>
      </article>

      <article class="work">
        <div class="work-visual">
          <svg viewBox="0 0 480 300" role="img" aria-label="Site cosmétiques naturels">
            <rect width="480" height="300" fill="#f0fdf4"/>
            <rect x="28" y="24" width="424" height="252" rx="12" fill="#fff"/>
            <rect x="28" y="24" width="424" height="40" rx="12" fill="#047857"/>
            <text x="52" y="50" font-family="Segoe UI,Arial" font-size="15" font-weight="700" fill="#fff">Terre &amp; Argile</text>
            <rect x="52" y="90" width="200" height="14" rx="6" fill="#0f172a"/>
            <rect x="52" y="114" width="150" height="14" rx="6" fill="#0f172a"/>
            <rect x="52" y="146" width="210" height="8" rx="4" fill="#cbd5e1"/>
            <rect x="52" y="176" width="120" height="28" rx="14" fill="#10b981"/>
            <rect x="300" y="86" width="128" height="100" rx="10" fill="#d1fae5"/>
            <rect x="322" y="150" width="84" height="30" rx="6" fill="#047857"/>
            <rect x="300" y="204" width="128" height="8" rx="4" fill="#a7f3d0"/>
            <rect x="300" y="220" width="90" height="8" rx="4" fill="#a7f3d0"/>
          </svg>
        </div>
        <div class="work-body">
          <h2 style="font-size:1.35rem" data-fr="Terre & Argile" data-ar="تير وأرغيل">Terre & Argile</h2>
          <p data-fr="Marque de cosmétiques naturels vendue dans trois villes. Le site devait expliquer les ingrédients et rassurer sur la fabrication." data-ar="علامة مستحضرات طبيعية تُباع في ثلاث مدن. كان على الموقع شرح المكونات وطمأنة الزبون على التصنيع.">Marque de cosmétiques naturels vendue dans trois villes. Le site devait expliquer les ingrédients et rassurer sur la fabrication.</p>
          <p data-fr="Résultat : un catalogue bilingue FR/AR, une page « ingrédients » qui répond aux questions récurrentes, et 35 % de messages WhatsApp en moins." data-ar="النتيجة: كتالوج ثنائي اللغة، صفحة «المكونات» تجيب عن الأسئلة المتكررة، وتراجع رسائل واتساب بنسبة 35%.">Résultat : un catalogue bilingue FR/AR, une page « ingrédients » qui répond aux questions récurrentes, et 35 % de messages WhatsApp en moins.</p>
          <ul class="tags"><li data-fr="Site vitrine" data-ar="موقع تعريفي">Site vitrine</li><li>FR / AR</li><li data-fr="Identité" data-ar="هوية">Identité</li></ul>
        </div>
      </article>

      <article class="work">
        <div class="work-visual">
          <svg viewBox="0 0 480 300" role="img" aria-label="Landing page restaurant">
            <rect width="480" height="300" fill="#fffbeb"/>
            <rect x="28" y="24" width="424" height="252" rx="12" fill="#0f172a"/>
            <rect x="28" y="24" width="424" height="6" rx="3" fill="#f59e0b"/>
            <rect x="56" y="68" width="120" height="12" rx="6" fill="#f59e0b"/>
            <rect x="56" y="96" width="220" height="20" rx="6" fill="#fff"/>
            <rect x="56" y="124" width="180" height="20" rx="6" fill="#fff"/>
            <rect x="56" y="160" width="200" height="8" rx="4" fill="#64748b"/>
            <rect x="56" y="188" width="110" height="30" rx="15" fill="#10b981"/>
            <rect x="316" y="80" width="108" height="140" rx="12" fill="#1e293b"/>
            <circle cx="370" cy="130" r="28" fill="#f59e0b" opacity="0.85"/>
            <rect x="334" y="172" width="72" height="8" rx="4" fill="#475569"/>
            <rect x="334" y="188" width="52" height="8" rx="4" fill="#475569"/>
          </svg>
        </div>
        <div class="work-body">
          <h2 style="font-size:1.35rem" data-fr="Dar Zitoun — commande en ligne" data-ar="دار زيتون — الطلب عبر الإنترنت">Dar Zitoun — commande en ligne</h2>
          <p data-fr="Restaurant de quartier qui perdait des commandes dans les messages Instagram. Nous avons conçu une landing page COD avec un menu clair." data-ar="مطعم بالحي كان يفقد طلبات في رسائل إنستغرام. صممنا صفحة هبوط COD بقائمة واضحة.">Restaurant de quartier qui perdait des commandes dans les messages Instagram. Nous avons conçu une landing page COD avec un menu clair.</p>
          <p data-fr="Résultat : coût par commande divisé par deux et un formulaire rempli en moins de 40 secondes en moyenne." data-ar="النتيجة: كلفة الطلب انخفضت بالنصف واستمارة تُملأ في أقل من 40 ثانية في المعدل.">Résultat : coût par commande divisé par deux et un formulaire rempli en moins de 40 secondes en moyenne.</p>
          <ul class="tags"><li>Landing COD</li><li data-fr="Mobile-first" data-ar="الهاتف أولاً">Mobile-first</li><li>WhatsApp</li></ul>
        </div>
      </article>

      <article class="work" style="border-style:dashed;background:#f8fafc">
        <div class="work-body" style="display:flex;flex-direction:column;justify-content:center;height:100%;text-align:center;padding:2.4rem">
          <h2 style="font-size:1.35rem" data-fr="Votre projet sera le prochain." data-ar="مشروعك سيكون التالي.">Votre projet sera le prochain.</h2>
          <p data-fr="Nous prenons trois nouveaux projets par mois pour garder la qualité. Dites-nous ce que vous faites, nous vous dirons ce qui est utile." data-ar="نقبل ثلاثة مشاريع جديدة شهرياً للحفاظ على الجودة. أخبرنا بنشاطك وسنخبرك بما هو مفيد.">Nous prenons trois nouveaux projets par mois pour garder la qualité. Dites-nous ce que vous faites, nous vous dirons ce qui est utile.</p>
          <a class="btn btn-primary" href="contact.html" style="align-self:center" data-fr="Parler de mon projet" data-ar="لنتحدث عن مشروعي">Parler de mon projet</a>
        </div>
      </article>
    </div>
  </section>
</main>
${FOOTER()}`;
}

/** About page: story, values, team. */
export function aboutPage() {
  return `${HEAD(
    "À propos — Atlas Studio",
    "Un studio de deux personnes basé à Casablanca, spécialisé dans les sites et identités pour les petites entreprises marocaines.",
  )}
${NAV("a-propos.html")}
<main>
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb"><a href="index.html" data-fr="Accueil" data-ar="الرئيسية">Accueil</a> · <span data-fr="À propos" data-ar="من نحن">À propos</span></div>
      <span class="eyebrow" data-fr="Le studio" data-ar="الاستوديو">Le studio</span>
      <h1 data-fr="Deux personnes, un seul standard." data-ar="شخصان، معيار واحد.">Deux personnes, un seul standard.</h1>
      <p data-fr="Atlas Studio est un petit studio de Casablanca. Nous préférons livrer dix projets dont nous sommes fiers plutôt que cinquante sites génériques." data-ar="أطلس ستوديو استوديو صغير بالدار البيضاء. نفضل إنجاز عشرة مشاريع نفتخر بها على خمسين موقعاً عاماً.">Atlas Studio est un petit studio de Casablanca. Nous préférons livrer dix projets dont nous sommes fiers plutôt que cinquante sites génériques.</p>
    </div>
  </section>

  <section class="section">
    <div class="container split">
      <div>
        <span class="eyebrow" data-fr="Notre histoire" data-ar="قصتنا">Notre histoire</span>
        <h2 data-fr="Né d'un constat simple" data-ar="وُلد من ملاحظة بسيطة">Né d'un constat simple</h2>
        <p data-fr="En 2022, nous avons aidé un ami qui venait d'ouvrir un cabinet. Il avait payé 8 000 MAD pour un site lent, illisible sur mobile, sans version arabe. Nous avons refait le site en dix jours pour un quart du prix." data-ar="في 2022 ساعدنا صديقاً فتح عيادة حديثاً. دفع 8000 درهم لموقع بطيء غير مقروء على الهاتف وبدون نسخة عربية. أعدنا بناء الموقع في عشرة أيام بربع الثمن.">En 2022, nous avons aidé un ami qui venait d'ouvrir un cabinet. Il avait payé 8 000 MAD pour un site lent, illisible sur mobile, sans version arabe. Nous avons refait le site en dix jours pour un quart du prix.</p>
        <p data-fr="Depuis, nous appliquons la même règle : un site doit être rapide, lisible sur un téléphone à 2 000 MAD, et compréhensible par une personne pressée." data-ar="منذ ذلك الحين نطبق نفس القاعدة: الموقع يجب أن يكون سريعاً، مقروءاً على هاتف بثمن 2000 درهم، ومفهوماً لشخص مستعجل.">Depuis, nous appliquons la même règle : un site doit être rapide, lisible sur un téléphone à 2 000 MAD, et compréhensible par une personne pressée.</p>
        <ul class="checklist">
          <li data-fr="Prix annoncé avant de commencer" data-ar="الثمن معلن قبل البدء">Prix annoncé avant de commencer</li>
          <li data-fr="Fichiers livrés, pas de plateforme captive" data-ar="ملفات مسلَّمة، لا منصة مغلقة">Fichiers livrés, pas de plateforme captive</li>
          <li data-fr="Arabe et français dès la conception" data-ar="العربية والفرنسية منذ التصميم">Arabe et français dès la conception</li>
        </ul>
      </div>
      <div class="quote">
        <blockquote data-fr="« Un bon site ne se voit pas. Il se remarque quand les clients appellent. »" data-ar="«الموقع الجيد لا يُرى. يُلاحَظ عندما يتصل العملاء.»">« Un bon site ne se voit pas. Il se remarque quand les clients appellent. »</blockquote>
        <footer data-fr="L'équipe Atlas Studio" data-ar="فريق أطلس ستوديو">L'équipe Atlas Studio</footer>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow" data-fr="Nos principes" data-ar="مبادئنا">Nos principes</span>
        <h2 data-fr="Ce que nous refusons de faire" data-ar="ما نرفض فعله">Ce que nous refusons de faire</h2>
      </div>
      <div class="grid-3">
        <article class="card"><div class="card-icon">✕</div><h3 data-fr="Pas de faux avis" data-ar="لا آراء مزيفة">Pas de faux avis</h3><p data-fr="Nous n'inventons pas de témoignages. Si nous n'avons pas de client dans votre secteur, nous le disons." data-ar="لا نختلق شهادات. إن لم يكن لدينا عميل في قطاعك، نقول ذلك.">Nous n'inventons pas de témoignages. Si nous n'avons pas de client dans votre secteur, nous le disons.</p></article>
        <article class="card"><div class="card-icon">✕</div><h3 data-fr="Pas de dépendance cachée" data-ar="لا تبعية خفية">Pas de dépendance cachée</h3><p data-fr="Vous recevez les fichiers et les accès. Vous pouvez partir chez un autre prestataire sans tout perdre." data-ar="تستلم الملفات والصلاحيات. يمكنك الانتقال لمزود آخر دون فقدان كل شيء.">Vous recevez les fichiers et les accès. Vous pouvez partir chez un autre prestataire sans tout perdre.</p></article>
        <article class="card"><div class="card-icon">✕</div><h3 data-fr="Pas de jargon" data-ar="لا مصطلحات غامضة">Pas de jargon</h3><p data-fr="Nous expliquons ce que fait chaque page, pourquoi elle existe et comment la modifier vous-même." data-ar="نشرح وظيفة كل صفحة ولماذا وُجدت وكيف تعدّلها بنفسك.">Nous expliquons ce que fait chaque page, pourquoi elle existe et comment la modifier vous-même.</p></article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow" data-fr="L'équipe" data-ar="الفريق">L'équipe</span>
        <h2 data-fr="Deux profils complémentaires" data-ar="تخصصان متكاملان">Deux profils complémentaires</h2>
      </div>
      <div class="team" style="grid-template-columns:repeat(2,minmax(0,1fr));max-width:720px;margin-inline:auto">
        <article class="person">
          <div class="avatar">YA</div>
          <h3 data-fr="Yassine A." data-ar="ياسين أ.">Yassine A.</h3>
          <p class="muted" data-fr="Développement & SEO" data-ar="التطوير وSEO">Développement & SEO</p>
          <p data-fr="Dix ans de développement web. Il s'occupe de la technique, de la vitesse et du référencement." data-ar="عشر سنوات في تطوير الويب. يتولى التقنية والسرعة وتحسين الظهور.">Dix ans de développement web. Il s'occupe de la technique, de la vitesse et du référencement.</p>
        </article>
        <article class="person">
          <div class="avatar">SE</div>
          <h3 data-fr="Salma E." data-ar="سلمى إ.">Salma E.</h3>
          <p class="muted" data-fr="Design & contenu" data-ar="التصميم والمحتوى">Design & contenu</p>
          <p data-fr="Directrice artistique. Elle écrit les textes, construit les identités et dessine les interfaces." data-ar="مديرة فنية. تكتب النصوص وتبني الهويات وتصمم الواجهات.">Directrice artistique. Elle écrit les textes, construit les identités et dessine les interfaces.</p>
        </article>
      </div>
      <p class="center" style="margin-top:2rem"><a class="btn btn-primary" href="contact.html" data-fr="Travailler avec nous" data-ar="اعمل معنا">Travailler avec nous</a></p>
    </div>
  </section>
</main>
${FOOTER()}`;
}

/** Contact page with a demo form and practical details. */
export function contactPage() {
  return `${HEAD(
    "Contact — Atlas Studio",
    "Parlez-nous de votre projet : formulaire, téléphone, WhatsApp et adresse à Casablanca.",
  )}
${NAV("contact.html")}
<main>
  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb"><a href="index.html" data-fr="Accueil" data-ar="الرئيسية">Accueil</a> · <span data-fr="Contact" data-ar="اتصل بنا">Contact</span></div>
      <span class="eyebrow" data-fr="Contact" data-ar="التواصل">Contact</span>
      <h1 data-fr="Décrivez votre projet en trois lignes." data-ar="صف مشروعك في ثلاثة أسطر.">Décrivez votre projet en trois lignes.</h1>
      <p data-fr="Nous répondons sous 24 heures ouvrables, par e-mail ou WhatsApp. Le premier appel est gratuit et sans engagement." data-ar="نجيب خلال 24 ساعة عمل، بالبريد أو واتساب. المكالمة الأولى مجانية وبدون التزام.">Nous répondons sous 24 heures ouvrables, par e-mail ou WhatsApp. Le premier appel est gratuit et sans engagement.</p>
    </div>
  </section>

  <section class="section">
    <div class="container split">
      <div>
        <h2 data-fr="Coordonnées" data-ar="معلومات التواصل">Coordonnées</h2>
        <p data-fr="Le plus simple : un message WhatsApp avec votre activité et ce que vous voulez obtenir." data-ar="الأبسط: رسالة واتساب بنشاطك وما تريد تحقيقه.">Le plus simple : un message WhatsApp avec votre activité et ce que vous voulez obtenir.</p>
        <ul class="checklist">
          <li><a href="tel:+212612345678" dir="ltr">+212 6 12 34 56 78</a></li>
          <li><a href="mailto:contact@atlas-studio.ma">contact@atlas-studio.ma</a></li>
          <li data-fr="24, rue Ibn Batouta, Gauthier — Casablanca" data-ar="24، شارع ابن بطوطة، غوتييه — الدار البيضاء">24, rue Ibn Batouta, Gauthier — Casablanca</li>
          <li data-fr="Lundi – Vendredi · 9h00 – 18h30" data-ar="الاثنين – الجمعة · 9:00 – 18:30">Lundi – Vendredi · 9h00 – 18h30</li>
        </ul>
        <div class="map-placeholder" style="margin-top:1.4rem">
          <span data-fr="Intégrez ici une carte Google Maps (iframe) ou une capture d'écran de votre localisation." data-ar="أدرج هنا خريطة Google Maps (iframe) أو لقطة لموقعك.">Intégrez ici une carte Google Maps (iframe) ou une capture d'écran de votre localisation.</span>
        </div>
      </div>

      <div class="card">
        <h2 style="font-size:1.4rem" data-fr="Demander un devis" data-ar="طلب عرض سعر">Demander un devis</h2>
        <form class="form" data-demo-form>
          <div class="form-row">
            <div class="field">
              <label for="name" data-fr="Nom complet" data-ar="الاسم الكامل">Nom complet</label>
              <input id="name" name="name" type="text" autocomplete="name" required placeholder="Youssef Benali">
            </div>
            <div class="field">
              <label for="phone" data-fr="Téléphone" data-ar="الهاتف">Téléphone</label>
              <input id="phone" name="phone" type="tel" autocomplete="tel" required dir="ltr" placeholder="06 00 00 00 00">
            </div>
          </div>
          <div class="field">
            <label for="email" data-fr="E-mail" data-ar="البريد الإلكتروني">E-mail</label>
            <input id="email" name="email" type="email" autocomplete="email" required dir="ltr" placeholder="vous@exemple.ma">
          </div>
          <div class="field">
            <label for="activity" data-fr="Votre activité" data-ar="نشاطك">Votre activité</label>
            <input id="activity" name="activity" type="text" data-fr-placeholder="Ex. cabinet dentaire, restaurant, e-commerce…" data-ar-placeholder="مثال: عيادة أسنان، مطعم، تجارة إلكترونية…" placeholder="Ex. cabinet dentaire, restaurant, e-commerce…">
          </div>
          <div class="field">
            <label for="budget" data-fr="Budget envisagé" data-ar="الميزانية المتوقعة">Budget envisagé</label>
            <select id="budget" name="budget">
              <option data-fr="Moins de 3 000 MAD" data-ar="أقل من 3000 درهم">Moins de 3 000 MAD</option>
              <option data-fr="3 000 – 5 000 MAD" data-ar="3000 – 5000 درهم">3 000 – 5 000 MAD</option>
              <option data-fr="5 000 – 9 000 MAD" data-ar="5000 – 9000 درهم">5 000 – 9 000 MAD</option>
              <option data-fr="Plus de 9 000 MAD" data-ar="أكثر من 9000 درهم">Plus de 9 000 MAD</option>
              <option data-fr="Je ne sais pas encore" data-ar="لا أعرف بعد">Je ne sais pas encore</option>
            </select>
          </div>
          <div class="field">
            <label for="message" data-fr="Votre projet" data-ar="مشروعك">Votre projet</label>
            <textarea id="message" name="message" required data-fr-placeholder="Ce que vous vendez, à qui, et ce que vous attendez du site." data-ar-placeholder="ماذا تبيع، لمن، وما تنتظره من الموقع." placeholder="Ce que vous vendez, à qui, et ce que vous attendez du site."></textarea>
          </div>
          <button class="btn btn-primary" type="submit" data-fr="Envoyer la demande" data-ar="إرسال الطلب">Envoyer la demande</button>
          <p class="form-status" role="status"></p>
          <p class="form-note" data-fr="Démonstration : ce formulaire n'envoie rien. Connectez-le à Formspree, EmailJS ou votre backend." data-ar="نسخة تجريبية: هذه الاستمارة لا ترسل شيئاً. اربطها بـ Formspree أو EmailJS أو خادمك.">Démonstration : ce formulaire n'envoie rien. Connectez-le à Formspree, EmailJS ou votre backend.</p>
        </form>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-head center"><h2 data-fr="Une question rapide ?" data-ar="سؤال سريع؟">Une question rapide ?</h2></div>
      <div class="faq">
        <details open><summary data-fr="Combien de temps prend un site ?" data-ar="كم يستغرق الموقع؟">Combien de temps prend un site ?</summary><p data-fr="15 jours ouvrables en moyenne, à condition de recevoir vos textes et photos dans les trois premiers jours." data-ar="15 يوم عمل في المعدل، بشرط تلقي نصوصك وصورك في الأيام الثلاثة الأولى.">15 jours ouvrables en moyenne, à condition de recevoir vos textes et photos dans les trois premiers jours.</p></details>
        <details><summary data-fr="Puis-je payer en plusieurs fois ?" data-ar="هل يمكنني الدفع على أقساط؟">Puis-je payer en plusieurs fois ?</summary><p data-fr="Oui : 50 % à la commande, 50 % à la livraison. Pour les projets de plus de 7 000 MAD, trois fois sont possibles." data-ar="نعم: 50% عند الطلب و50% عند التسليم. للمشاريع التي تفوق 7000 درهم، يمكن الدفع على ثلاث دفعات.">Oui : 50 % à la commande, 50 % à la livraison. Pour les projets de plus de 7 000 MAD, trois fois sont possibles.</p></details>
        <details><summary data-fr="Travaillez-vous le samedi ?" data-ar="هل تعملون يوم السبت؟">Travaillez-vous le samedi ?</summary><p data-fr="Nous répondons aux urgences uniquement, pour les sites déjà en ligne." data-ar="نجيب على الحالات المستعجلة فقط، للمواقع المنشورة بالفعل.">Nous répondons aux urgences uniquement, pour les sites déjà en ligne.</p></details>
      </div>
    </div>
  </section>
</main>
${FOOTER()}`;
}
