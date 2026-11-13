/**
 * Deck content for the two PowerPoint products. Copy is authored in French and
 * Arabic (not machine-translated) so both files can be presented as-is after
 * swapping the school / company details.
 */

const PFE_FR = [
  {
    kind: "title",
    eyebrow: "SOUTENANCE DE FIN D'ÉTUDES · PFE",
    title: "Plateforme digitale de gestion des stages",
    subtitle:
      "Conception et développement d'une application web qui connecte les étudiants, les écoles et les entreprises marocaines.",
    meta: [
      "Présenté par :\nYoussef Benali",
      "Encadré par :\nPr. Amine El Fassi",
      "Établissement :\nENSIAS — 2026",
    ],
    notes:
      "Bonjour à tous. Je m'appelle Youssef Benali et je vais vous présenter mon projet de fin d'études consacré à la digitalisation de la gestion des stages.",
  },
  {
    kind: "agenda",
    eyebrow: "PLAN DE LA PRÉSENTATION",
    title: "Ce que nous allons voir",
    items: [
      "Contexte & problématique",
      "Objectifs du projet",
      "Étude de l'existant",
      "Analyse des besoins",
      "Cahier des charges",
      "Méthodologie & planning",
      "Architecture & technologies",
      "Modélisation UML",
      "Sécurité & performance",
      "Réalisation & démonstration",
      "Tests & résultats",
      "Conclusion & perspectives",
    ],
    notes: "La présentation suit la structure classique d'un rapport PFE.",
  },
  {
    kind: "bullets",
    eyebrow: "01 · CONTEXTE",
    title: "Un processus encore largement manuel",
    bullets: [
      "Les conventions de stage circulent par e-mail, WhatsApp et papier.",
      "Les écoles perdent la trace des étudiants placés et des évaluations.",
      "Les entreprises reçoivent des candidatures non qualifiées et mal structurées.",
      "Les délais de signature dépassent souvent trois semaines.",
      "Aucun tableau de bord fiable pour piloter les stages à l'échelle d'un établissement.",
    ],
    callout: {
      value: "68 %",
      label:
        "des étudiants interrogés déclarent avoir vécu un retard administratif pendant leur recherche de stage.",
    },
    notes:
      "Le chiffre provient de notre enquête interne menée auprès de 120 étudiants de trois écoles.",
  },
  {
    kind: "bullets",
    eyebrow: "02 · OBJECTIFS",
    title: "Digitaliser le cycle de vie complet du stage",
    bullets: [
      "Centraliser les offres, candidatures et conventions dans une seule plateforme.",
      "Permettre aux entreprises de publier et suivre leurs offres en autonomie.",
      "Générer automatiquement les conventions et attestations au format PDF.",
      "Donner aux encadrants un tableau de bord temps réel des stages en cours.",
      "Réduire de 60 % le temps de traitement administratif.",
    ],
    notes:
      "Objectif mesurable : passer de 21 jours à moins de 8 jours entre la validation et la signature.",
  },
  {
    kind: "bullets",
    eyebrow: "03 · ÉTUDE DE L'EXISTANT",
    title: "Des outils partiels, jamais connectés",
    bullets: [
      "Excel partagé : aucune gestion des droits ni historique fiable.",
      "Groupes WhatsApp : informations perdues et pièces jointes éparpillées.",
      "Plateformes internationales : interface anglophone, prix en euros, non adaptées au cadre marocain.",
      "Logiciels scolaires internes : centrés sur la scolarité, pas sur le stage.",
      "Aucun outil ne couvre à la fois l'école, l'étudiant et l'entreprise.",
    ],
    notes: "Le tableau comparatif détaillé figure en annexe du rapport.",
  },
  {
    kind: "bullets",
    eyebrow: "04 · ANALYSE DES BESOINS",
    title: "Trois profils, un seul flux de travail",
    bullets: [
      "Étudiant : créer son profil, postuler, suivre l'état de sa convention, télécharger ses documents.",
      "Entreprise : publier une offre, consulter les candidatures, valider un stage, évaluer le stagiaire.",
      "Administration : valider les conventions, affecter un encadrant, exporter les statistiques.",
      "Besoins non fonctionnels : responsive, accessible, sécurisé, bilingue FR/AR.",
      "Contrainte : hébergement local et paiement en dirhams.",
    ],
    notes:
      "Les personas et les user stories sont détaillés dans le chapitre 2 du mémoire.",
  },
  {
    kind: "bullets",
    eyebrow: "05 · CAHIER DES CHARGES",
    title: "Périmètre fonctionnel du MVP",
    bullets: [
      "Authentification par rôle (étudiant, entreprise, administration).",
      "Gestion des offres de stage avec filtres par ville, filière et durée.",
      "Workflow de candidature : envoyée, présélectionnée, acceptée, refusée.",
      "Génération de conventions PDF avec numérotation automatique.",
      "Notifications e-mail et tableau de bord statistique.",
      "Exports CSV pour les rapports de fin de semestre.",
    ],
    callout: {
      value: "6",
      label:
        "modules livrés dans le MVP, chacun avec ses tests d'acceptation.",
    },
    notes: "Le backlog complet contient 74 user stories priorisées en MoSCoW.",
  },
  {
    kind: "bullets",
    eyebrow: "06 · MÉTHODOLOGIE",
    title: "Scrum adapté à un projet solo",
    bullets: [
      "Sprints de deux semaines, revue et rétrospective à chaque fin de cycle.",
      "Product backlog priorisé avec la méthode MoSCoW.",
      "Tableau Kanban : à faire, en cours, en revue, terminé.",
      "Tests automatisés et revue de code avant chaque fusion.",
      "Documentation continue dans Notion et diagrammes versionnés.",
    ],
    callout: {
      value: "7",
      label: "sprints planifiés sur 14 semaines, dont 2 de marge.",
    },
    notes: "Le rythme a été ajusté après le sprint 3 pour absorber les exams.",
  },
  {
    kind: "roadmap",
    eyebrow: "07 · PLANIFICATION",
    title: "Quatorze semaines, sept sprints",
    phases: [
      {
        when: "SEMAINES 1–2",
        title: "Cadrage",
        detail: "Analyse de l'existant, entretiens, rédaction du cahier des charges.",
      },
      {
        when: "SEMAINES 3–4",
        title: "Conception",
        detail: "Architecture, maquettes Figma, modèle de données et diagrammes UML.",
      },
      {
        when: "SEMAINES 5–10",
        title: "Développement",
        detail: "Trois sprints de développement, déploiement continu sur un environnement de test.",
      },
      {
        when: "SEMAINES 11–14",
        title: "Tests & mémoire",
        detail: "Tests utilisateurs, corrections, rédaction et préparation de la soutenance.",
      },
    ],
    notes: "Le diagramme de Gantt détaillé est fourni en annexe.",
  },
  {
    kind: "layers",
    eyebrow: "08 · ARCHITECTURE",
    title: "Architecture en trois couches",
    layers: [
      {
        title: "Couche présentation",
        detail: "Next.js 15 · React 19 · Tailwind CSS · rendu serveur et composants clients",
      },
      {
        title: "Couche métier",
        detail: "API REST · validation Zod · règles de gestion et workflow de convention",
      },
      {
        title: "Couche données",
        detail: "PostgreSQL · Prisma ORM · stockage objet pour les PDF et pièces jointes",
      },
    ],
    notes:
      "Chaque couche est indépendante, ce qui permet de changer la base ou le front sans réécrire le métier.",
  },
  {
    kind: "bullets",
    eyebrow: "09 · TECHNOLOGIES",
    title: "Des choix justifiés et durables",
    bullets: [
      "Next.js 15 : rendu serveur, routes API et excellent référencement.",
      "TypeScript : typage strict partagé entre le front et le back.",
      "PostgreSQL : intégrité relationnelle et requêtes analytiques.",
      "Prisma : migrations versionnées et requêtes typées.",
      "Tailwind CSS : interface responsive et cohérente.",
      "Vercel + Neon : déploiement continu et base managée.",
    ],
    callout: {
      value: "0",
      label: "dépendance à un CMS propriétaire : le code reste la propriété de l'école.",
    },
    notes: "Chaque technologie est comparée à ses alternatives dans le mémoire.",
  },
  {
    kind: "bullets",
    eyebrow: "10 · MODÉLISATION UML",
    title: "Cas d'utilisation principaux",
    bullets: [
      "Étudiant : s'inscrire, postuler, consulter sa convention.",
      "Entreprise : publier une offre, présélectionner, valider un stage.",
      "Encadrant académique : suivre, évaluer, signer.",
      "Administrateur : gérer les comptes, les filières et les exports.",
      "Système : notifier, générer les PDF, archiver les conventions.",
    ],
    notes:
      "Le diagramme global distingue les acteurs internes et les acteurs externes.",
  },
  {
    kind: "bullets",
    eyebrow: "11 · MODÉLISATION UML",
    title: "Un modèle de données normalisé",
    bullets: [
      "Utilisateur (id, rôle, nom, email, mot de passe haché).",
      "Étudiant, Entreprise et Encadrant : spécialisations du profil.",
      "Offre (titre, description, ville, durée, entreprise).",
      "Candidature (étudiant, offre, statut, date, score).",
      "Convention (candidature, numéro, dates, statut, PDF).",
      "Évaluation (convention, note, commentaire, auteur).",
    ],
    callout: {
      value: "11",
      label: "tables reliées par des contraintes d'intégrité référentielle.",
    },
    notes: "Le diagramme de classes complet est en annexe B.",
  },
  {
    kind: "bullets",
    eyebrow: "12 · MODÉLISATION UML",
    title: "Séquence : validation d'une convention",
    bullets: [
      "L'étudiant soumet sa candidature et choisit une entreprise.",
      "L'entreprise accepte la candidature et renseigne les dates.",
      "Le système crée la convention en statut « en attente ».",
      "L'encadrant vérifie les informations et signe électroniquement.",
      "Le système génère le PDF, notifie les trois parties et archive le document.",
    ],
    notes:
      "Ce scénario est le plus critique : il déclenche la génération du document officiel.",
  },
  {
    kind: "bullets",
    eyebrow: "13 · SÉCURITÉ & PERFORMANCE",
    title: "Sécuriser sans compliquer l'usage",
    bullets: [
      "Mots de passe hachés avec bcrypt et sessions signées HttpOnly.",
      "Contrôle d'accès basé sur les rôles à chaque route API.",
      "Validation systématique des entrées avec Zod.",
      "Limitation du débit sur l'authentification et les formulaires.",
      "Sauvegardes quotidiennes et journal d'audit des actions sensibles.",
      "Objectif de performance : première page utile en moins de 2 secondes.",
    ],
    callout: {
      value: "98 / 100",
      label: "score Lighthouse sur les pages principales en production.",
    },
    notes: "Un test d'intrusion léger a été réalisé avec OWASP ZAP.",
  },
  {
    kind: "bullets",
    eyebrow: "14 · RÉALISATION",
    title: "Du prototype à l'application déployée",
    bullets: [
      "Tableau de bord étudiant : candidatures, statuts et documents.",
      "Espace entreprise : création d'offre en trois étapes.",
      "Vue administration : conventions à valider et statistiques par filière.",
      "Génération PDF : convention, attestation de stage, évaluation.",
      "Interface bilingue français / arabe avec bascule RTL immédiate.",
    ],
    notes:
      "La démonstration en direct couvre le parcours complet, de l'offre à la convention signée.",
  },
  {
    kind: "kpi",
    eyebrow: "15 · TESTS & RÉSULTATS",
    title: "Des résultats mesurés, pas supposés",
    items: [
      {
        value: "42",
        label: "tests automatisés",
        note: "Unitaires et d'intégration sur les parcours critiques.",
      },
      {
        value: "8 j",
        label: "délai de signature",
        note: "Contre 21 jours en moyenne avant le projet.",
      },
      {
        value: "94 %",
        label: "satisfaction testeurs",
        note: "18 étudiants et 4 entreprises lors du test pilote.",
      },
      {
        value: "2 s",
        label: "temps de chargement",
        note: "Mesuré sur une connexion 4G à Casablanca.",
      },
    ],
    notes:
      "Les tests utilisateurs ont eu lieu sur deux semaines avec des scénarios réels.",
  },
  {
    kind: "closing",
    eyebrow: "16 · CONCLUSION",
    title: "Merci de votre attention",
    subtitle:
      "La plateforme est déployée et prête pour un pilote sur une filière complète. Les perspectives portent sur la signature électronique qualifiée et l'intégration avec les systèmes scolaires.",
    contact: "Youssef Benali · youssef.benali@example.ma · protemplates.ma",
    notes:
      "Je vous remercie pour votre attention et je suis disponible pour vos questions.",
  },
];

const PFE_AR = [
  {
    kind: "title",
    eyebrow: "مناقشة مشروع نهاية الدراسة · PFE",
    title: "منصة رقمية لإدارة التداريب",
    subtitle:
      "تصميم وتطوير تطبيق ويب يربط الطلبة والمؤسسات الجامعية والمقاولات المغربية.",
    meta: [
      "من إعداد:\nيوسف بنعلي",
      "تحت إشراف:\nالدكتور أمين الفاسي",
      "المؤسسة:\nالمدرسة الوطنية العليا للمعلوماتية — 2026",
    ],
    notes:
      "أهلاً بكم. سأقدّم مشروع نهاية الدراسة الذي يهدف إلى رقمنة تدبير التداريب.",
  },
  {
    kind: "agenda",
    eyebrow: "خطة العرض",
    title: "محاور العرض",
    items: [
      "السياق والإشكالية",
      "أهداف المشروع",
      "دراسة الوضع الحالي",
      "تحليل الحاجيات",
      "دفتر التحملات",
      "المنهجية والتخطيط",
      "الهندسة والتقنيات",
      "التصميم بنمذجة UML",
      "الأمن والأداء",
      "الإنجاز والعرض التجريبي",
      "الاختبارات والنتائج",
      "الخلاصة والآفاق",
    ],
    notes: "يتبع العرض البنية الكلاسيكية لتقرير مشروع التخرج.",
  },
  {
    kind: "bullets",
    eyebrow: "01 · السياق",
    title: "مسلسل إداري لا يزال ورقياً",
    bullets: [
      "اتفاقيات التدريب تنتقل عبر البريد وواتساب والورق.",
      "المؤسسات تفقد تتبع الطلبة المتدربين والتقييمات.",
      "المقاولات تتوصل بترشيحات غير مؤهلة وغير منظمة.",
      "مدة التوقيع تتجاوز غالباً ثلاثة أسابيع.",
      "غياب لوحة قيادة موثوقة لمتابعة التداريب على مستوى المؤسسة.",
    ],
    callout: {
      value: "68 %",
      label:
        "من الطلبة المستَجوبين صرّحوا بتعرضهم لتأخير إداري أثناء البحث عن تدريب.",
    },
    notes: "الرقم مستخرج من استمارة داخلية شملت 120 طالباً من ثلاث مؤسسات.",
  },
  {
    kind: "bullets",
    eyebrow: "02 · الأهداف",
    title: "رقمنة المسار الكامل للتدريب",
    bullets: [
      "تجميع العروض والترشيحات والاتفاقيات في منصة واحدة.",
      "تمكين المقاولات من نشر عروضها وتتبعها باستقلالية.",
      "توليد اتفاقيات وشهادات التدريب تلقائياً بصيغة PDF.",
      "توفير لوحة قيادة آنية للمشرفين الأكاديميين.",
      "تقليص زمن المعالجة الإدارية بنسبة 60%.",
    ],
    notes:
      "الهدف القابل للقياس: الانتقال من 21 يوماً إلى أقل من 8 أيام بين المصادقة والتوقيع.",
  },
  {
    kind: "bullets",
    eyebrow: "03 · دراسة الوضع الحالي",
    title: "أدوات جزئية وغير مترابطة",
    bullets: [
      "ملفات Excel مشتركة: لا إدارة للصلاحيات ولا أثر موثوق.",
      "مجموعات واتساب: معلومات ضائعة ومرفقات مبعثرة.",
      "منصات دولية: واجهة بالإنجليزية وأسعار بالأورو وغير ملائمة للسياق المغربي.",
      "برامج المؤسسات الداخلية: موجهة للتمدرس لا للتدريب.",
      "لا توجد أداة تغطي المؤسسة والطالب والمقاولة في آن واحد.",
    ],
    notes: "جدول المقارنة المفصل موجود في ملحق التقرير.",
  },
  {
    kind: "bullets",
    eyebrow: "04 · تحليل الحاجيات",
    title: "ثلاثة أدوار، مسار عمل واحد",
    bullets: [
      "الطالب: إنشاء الملف، الترشح، تتبع الاتفاقية، تحميل الوثائق.",
      "المقاولة: نشر عرض، دراسة الترشيحات، المصادقة، تقييم المتدرب.",
      "الإدارة: المصادقة على الاتفاقيات، تعيين المشرف، تصدير الإحصائيات.",
      "حاجيات غير وظيفية: متجاوب، سهل الوصول، آمن، ثنائي اللغة.",
      "قيد أساسي: الاستضافة المحلية والدفع بالدرهم.",
    ],
    notes: "شخصيات المستخدمين وقصص المستخدم مفصلة في الفصل الثاني.",
  },
  {
    kind: "bullets",
    eyebrow: "05 · دفتر التحملات",
    title: "النطاق الوظيفي للنسخة الأولى",
    bullets: [
      "مصادقة حسب الدور: طالب، مقاولة، إدارة.",
      "تدبير عروض التدريب مع تصفية حسب المدينة والتخصص والمدة.",
      "مسار الترشيح: مُرسل، مُنتقى، مقبول، مرفوض.",
      "توليد اتفاقيات PDF بترقيم تلقائي.",
      "إشعارات بريدية ولوحة إحصائيات.",
      "تصدير CSV لتقارير نهاية الفصل.",
    ],
    callout: {
      value: "6",
      label: "وحدات وظيفية في النسخة الأولى مع اختبارات قبول لكل واحدة.",
    },
    notes: "قائمة المتطلبات الكاملة تضم 74 قصة مستخدم مرتبة بطريقة MoSCoW.",
  },
  {
    kind: "bullets",
    eyebrow: "06 · المنهجية",
    title: "Scrum مُكيَّف مع مشروع فردي",
    bullets: [
      "دورات من أسبوعين مع مراجعة واسترجاع في نهاية كل دورة.",
      "ترتيب أولويات المتطلبات بطريقة MoSCoW.",
      "لوحة كانبان: قيد الإنجاز، قيد التنفيذ، قيد المراجعة، منجز.",
      "اختبارات آلية ومراجعة الكود قبل كل دمج.",
      "توثيق مستمر ومخططات محفوظة بنسخها.",
    ],
    callout: {
      value: "7",
      label: "دورات مخططة على 14 أسبوعاً، منها أسبوعان للهامش.",
    },
    notes: "تم تعديل الإيقاع بعد الدورة الثالثة لاستيعاب فترة الامتحانات.",
  },
  {
    kind: "roadmap",
    eyebrow: "07 · التخطيط",
    title: "أربعة عشر أسبوعاً وسبع دورات",
    phases: [
      {
        when: "الأسبوعان 1–2",
        title: "التأطير",
        detail: "دراسة الوضع الحالي، المقابلات، كتابة دفتر التحملات.",
      },
      {
        when: "الأسبوعان 3–4",
        title: "التصميم",
        detail: "الهندسة، نماذج Figma، نموذج البيانات ومخططات UML.",
      },
      {
        when: "الأسابيع 5–10",
        title: "التطوير",
        detail: "ثلاث دورات تطوير مع نشر مستمر في بيئة اختبار.",
      },
      {
        when: "الأسابيع 11–14",
        title: "الاختبار والتقرير",
        detail: "اختبارات المستخدمين، التصحيحات، كتابة التقرير والتحضير للمناقشة.",
      },
    ],
    notes: "مخطط جانت المفصل مرفق في الملاحق.",
  },
  {
    kind: "layers",
    eyebrow: "08 · الهندسة",
    title: "هندسة من ثلاث طبقات",
    layers: [
      {
        title: "طبقة العرض",
        detail: "Next.js 15 · React 19 · Tailwind CSS · عرض من الخادم ومكونات تفاعلية",
      },
      {
        title: "طبقة منطق العمل",
        detail: "واجهة REST · تحقق Zod · قواعد التدبير ومسار الاتفاقية",
      },
      {
        title: "طبقة البيانات",
        detail: "PostgreSQL · Prisma ORM · تخزين الملفات وملفات PDF",
      },
    ],
    notes: "كل طبقة مستقلة، ما يسمح بتغيير قاعدة البيانات دون إعادة كتابة المنطق.",
  },
  {
    kind: "bullets",
    eyebrow: "09 · التقنيات",
    title: "اختيارات مبرَّرة وقابلة للاستمرار",
    bullets: [
      "Next.js 15: عرض من الخادم ومسارات API وتحسين محركات البحث.",
      "TypeScript: أنواع صارمة مشتركة بين الواجهة والخادم.",
      "PostgreSQL: سلامة العلاقات واستعلامات تحليلية.",
      "Prisma: ترحيلات مُرقَّمة واستعلامات مُنمَّطة.",
      "Tailwind CSS: واجهة متجاوبة ومتناسقة.",
      "Vercel + Neon: نشر مستمر وقاعدة بيانات مُدارة.",
    ],
    callout: {
      value: "0",
      label: "ارتباط بنظام إدارة محتوى مغلق: الكود يبقى ملكاً للمؤسسة.",
    },
    notes: "كل تقنية مقارنة ببدائلها في التقرير.",
  },
  {
    kind: "bullets",
    eyebrow: "10 · نمذجة UML",
    title: "حالات الاستخدام الأساسية",
    bullets: [
      "الطالب: التسجيل، الترشح، الاطلاع على الاتفاقية.",
      "المقاولة: نشر عرض، انتقاء، المصادقة على التدريب.",
      "المشرف الأكاديمي: التتبع، التقييم، التوقيع.",
      "المدير: تدبير الحسابات والمسالك والتصدير.",
      "النظام: الإشعارات، توليد PDF، أرشفة الاتفاقيات.",
    ],
    notes: "المخطط العام يميز بين الفاعلين الداخليين والخارجيين.",
  },
  {
    kind: "bullets",
    eyebrow: "11 · نمذجة UML",
    title: "نموذج بيانات مُطبَّع",
    bullets: [
      "المستخدم (المعرّف، الدور، الاسم، البريد، كلمة المرور المشفرة).",
      "الطالب والمقاولة والمشرف: تخصيصات للملف الشخصي.",
      "العرض (العنوان، الوصف، المدينة، المدة، المقاولة).",
      "الترشيح (الطالب، العرض، الحالة، التاريخ، النقطة).",
      "الاتفاقية (الترشيح، الرقم، التواريخ، الحالة، PDF).",
      "التقييم (الاتفاقية، النقطة، الملاحظة، الكاتب).",
    ],
    callout: {
      value: "11",
      label: "جدولاً مرتبطاً بقيود سلامة مرجعية.",
    },
    notes: "مخطط الأصناف الكامل موجود في الملحق ب.",
  },
  {
    kind: "bullets",
    eyebrow: "12 · نمذجة UML",
    title: "التسلسل: المصادقة على اتفاقية",
    bullets: [
      "الطالب يرسل ترشيحه ويختار المقاولة.",
      "المقاولة تقبل الترشيح وتحدد التواريخ.",
      "النظام ينشئ الاتفاقية في حالة «قيد الانتظار».",
      "المشرف يتحقق من المعلومات ويوقّع إلكترونياً.",
      "النظام يولّد PDF ويشعر الأطراف الثلاثة ويؤرشف الوثيقة.",
    ],
    notes: "هذا السيناريو هو الأكثر حساسية لأنه يُنتج الوثيقة الرسمية.",
  },
  {
    kind: "bullets",
    eyebrow: "13 · الأمن والأداء",
    title: "تأمين دون تعقيد الاستخدام",
    bullets: [
      "تشفير كلمات المرور بـ bcrypt وجلسات موقعة HttpOnly.",
      "تحكم في الوصول حسب الدور في كل مسار API.",
      "تحقق منهجي من المدخلات باستخدام Zod.",
      "تحديد معدل الطلبات على المصادقة والاستمارات.",
      "نسخ احتياطي يومي وسجل تدقيق للعمليات الحساسة.",
      "هدف الأداء: أول صفحة مفيدة في أقل من ثانيتين.",
    ],
    callout: {
      value: "98 / 100",
      label: "نقطة Lighthouse على الصفحات الرئيسية في الإنتاج.",
    },
    notes: "تم إجراء اختبار اختراق خفيف باستخدام OWASP ZAP.",
  },
  {
    kind: "bullets",
    eyebrow: "14 · الإنجاز",
    title: "من النموذج الأولي إلى التطبيق المنشور",
    bullets: [
      "لوحة الطالب: الترشيحات والحالات والوثائق.",
      "فضاء المقاولة: إنشاء عرض في ثلاث خطوات.",
      "واجهة الإدارة: الاتفاقيات المنتظرة والإحصائيات حسب المسلك.",
      "توليد PDF: الاتفاقية، شهادة التدريب، التقييم.",
      "واجهة ثنائية اللغة مع تبديل فوري لاتجاه RTL.",
    ],
    notes: "العرض المباشر يغطي المسار الكامل من العرض إلى الاتفاقية الموقعة.",
  },
  {
    kind: "kpi",
    eyebrow: "15 · الاختبارات والنتائج",
    title: "نتائج مقيسة لا مفترضة",
    items: [
      {
        value: "42",
        label: "اختباراً آلياً",
        note: "وحدات وتكامل على المسارات الحرجة.",
      },
      {
        value: "8 أيام",
        label: "مدة التوقيع",
        note: "مقابل 21 يوماً في المتوسط قبل المشروع.",
      },
      {
        value: "94 %",
        label: "رضا المختبِرين",
        note: "18 طالباً و4 مقاولات في التجربة الأولى.",
      },
      {
        value: "2 ثانية",
        label: "زمن التحميل",
        note: "على اتصال 4G بالدار البيضاء.",
      },
    ],
    notes: "اختبارات المستخدمين جرت على مدى أسبوعين بسيناريوهات حقيقية.",
  },
  {
    kind: "closing",
    eyebrow: "16 · الخلاصة",
    title: "شكراً على حسن استماعكم",
    subtitle:
      "المنصة منشورة وجاهزة لتجربة على مسلك كامل. الآفاق تشمل التوقيع الإلكتروني المؤهل والاندماج مع الأنظمة الجامعية.",
    contact: "يوسف بنعلي · youssef.benali@example.ma · protemplates.ma",
    notes: "شكراً على انتباهكم، وأنا رهن إشارتكم للأسئلة.",
  },
];

const INVESTOR_FR = [
  {
    kind: "title",
    eyebrow: "PITCH INVESTISSEURS & INCUBATEURS",
    title: "ProTemplates — l'infrastructure digitale des TPE marocaines",
    subtitle:
      "Des modèles professionnels éditables, en arabe et en français, accessibles en dirhams. Un marché de 1,2 million de TPE mal servi par les outils internationaux.",
    meta: [
      "Levée recherchée :\n250 000 MAD",
      "Stade :\nAmorçage · premier revenu",
      "Contact :\nclubs@protemplates.ma",
    ],
    notes: "Objectif de la rencontre : présenter la traction et les besoins de financement.",
  },
  {
    kind: "agenda",
    eyebrow: "PLAN",
    title: "Douze minutes, une décision",
    items: [
      "Problème & solution",
      "Produit & démonstration",
      "Marché & concurrence",
      "Modèle économique",
      "Go-to-market",
      "Traction & unit economics",
      "Projections financières",
      "Équipe & feuille de route",
      "Risques & cadre légal",
      "Impact & utilisation des fonds",
      "Ce que nous demandons",
    ],
    notes: "Une version courte de 5 minutes est également disponible.",
  },
  {
    kind: "bullets",
    eyebrow: "01 · PROBLÈME",
    title: "Créer une entreprise au Maroc reste un parcours du combattant documentaire",
    bullets: [
      "Une TPE passe en moyenne 11 heures sur ses documents administratifs le premier mois.",
      "Les modèles gratuits trouvés en ligne sont en français, non conformes et mal structurés.",
      "Les créateurs de contenu paient 30 à 60 € par mois pour des outils sans arabe natif.",
      "Les agences facturent 3 000 à 8 000 MAD pour un simple site vitrine.",
      "Résultat : les petits entrepreneurs lancent tard, ou pas du tout.",
    ],
    callout: {
      value: "11 h",
      label: "perdues en moyenne par une TPE pour produire ses premiers documents.",
    },
    notes: "Source : enquête auprès de 64 auto-entrepreneurs et TPE en 2025.",
  },
  {
    kind: "bullets",
    eyebrow: "02 · SOLUTION",
    title: "Une bibliothèque de fichiers sources, pas un abonnement de plus",
    bullets: [
      "Modèles PowerPoint, Word, Excel, SVG et HTML prêts à éditer.",
      "Bilingue arabe (RTL) et français dès la conception.",
      "Paiement local en MAD : CMI, virement, CashPlus.",
      "Prix unique de 49 à 249 MAD, sans abonnement.",
      "Guides vidéo de 10 à 25 minutes en darija et en français.",
    ],
    callout: {
      value: "4×",
      label: "moins cher qu'une agence pour un site vitrine complet.",
    },
    notes: "Le client possède les fichiers : aucun verrouillage de plateforme.",
  },
  {
    kind: "bullets",
    eyebrow: "03 · PRODUIT",
    title: "Dix produits, un système de design commun",
    bullets: [
      "CV et lettres bilingues, compatibles ATS.",
      "Pitch decks PFE et investisseurs de 18 à 22 slides.",
      "Sites vitrines et landing pages COD en HTML autonome.",
      "Pack administratif marocain : devis, factures, contrats, NDA.",
      "Kit réseaux sociaux : 8 formats SVG + carrousel PowerPoint.",
      "Chaque achat déclenche un téléchargement ZIP immédiat.",
    ],
    notes: "La démonstration montre le parcours d'achat complet en moins de 90 secondes.",
  },
  {
    kind: "kpi",
    eyebrow: "04 · MARCHÉ",
    title: "Un marché large, local et sous-équipé",
    items: [
      {
        value: "1,2 M",
        label: "TPE et auto-entrepreneurs",
        note: "Source : HCP et registre national, 2025.",
      },
      {
        value: "380 000",
        label: "étudiants du supérieur",
        note: "Dont 120 000 en fin de cycle chaque année.",
      },
      {
        value: "180 M",
        label: "MAD de marché adressable",
        note: "Estimation à 150 MAD de panier moyen annuel.",
      },
      {
        value: "12 %",
        label: "croissance du e-commerce",
        note: "Croissance annuelle du commerce en ligne marocain.",
      },
    ],
    notes: "Le marché adressable est volontairement limité aux primo-entrepreneurs digitalisés.",
  },
  {
    kind: "bullets",
    eyebrow: "05 · CONCURRENCE",
    title: "Les alternatives ignorent la langue et le paiement local",
    bullets: [
      "Envato / Creative Market : 20–80 $, en anglais, carte internationale obligatoire.",
      "Canva Pro : 120 MAD/mois, modèles génériques, export limité.",
      "Modèles gratuits : non conformes au droit marocain, sans support.",
      "Agences locales : 3 000–8 000 MAD, délai de 2 à 4 semaines.",
      "ProTemplates : 49–249 MAD, arabe natif, paiement local, livraison instantanée.",
    ],
    notes: "Notre différenciation est la combinaison langue + conformité + prix + paiement.",
  },
  {
    kind: "layers",
    eyebrow: "06 · AVANTAGE CONCURRENTIEL",
    title: "Quatre barrières construites produit par produit",
    layers: [
      {
        title: "Contenu local",
        detail: "Documents conformes au cadre marocain : ICE, IF, TVA, CNSS, SARL, auto-entrepreneur.",
      },
      {
        title: "Bilingue natif",
        detail: "Mise en page RTL réelle, pas une traduction automatique ajoutée après coup.",
      },
      {
        title: "Distribution",
        detail: "TikTok, Instagram et campus : acquisition organique à coût quasi nul.",
      },
      {
        title: "Fichiers sources",
        detail: "PowerPoint, Word, Excel et HTML : le client reste propriétaire de ses fichiers.",
      },
    ],
    notes: "Chaque barrière est difficile à copier rapidement par un acteur international.",
  },
  {
    kind: "bullets",
    eyebrow: "07 · BUSINESS MODEL",
    title: "Vente unitaire, packs et licences campus",
    bullets: [
      "Produits unitaires : 49 à 149 MAD, marge brute supérieure à 90 %.",
      "Pack startup : 249 MAD, panier moyen le plus élevé.",
      "Licence campus : 4 900 MAD par établissement et par an.",
      "Packs personnalisés pour incubateurs et programmes d'accompagnement.",
      "Aucun abonnement obligatoire : la confiance passe par le prix unique.",
    ],
    callout: {
      value: "92 %",
      label: "de marge brute sur les ventes directes, hébergement inclus.",
    },
    notes: "Les licences campus représentent le principal levier de revenu récurrent.",
  },
  {
    kind: "roadmap",
    eyebrow: "08 · GO-TO-MARKET",
    title: "Trois canaux, dans cet ordre",
    phases: [
      {
        when: "MOIS 1–2",
        title: "Contenu court",
        detail: "TikTok et Instagram : démonstrations de 30 secondes, avant/après.",
      },
      {
        when: "MOIS 2–4",
        title: "Campus",
        detail: "Ateliers gratuits dans les clubs étudiants et incubateurs universitaires.",
      },
      {
        when: "MOIS 4–6",
        title: "Partenariats",
        detail: "Technopark, UM6P, programmes d'accompagnement et comptables.",
      },
      {
        when: "MOIS 6–12",
        title: "Récurrence",
        detail: "Licences campus et packs personnalisés pour les TPE accompagnées.",
      },
    ],
    notes: "Le coût d'acquisition cible est inférieur à 15 MAD par client payant.",
  },
  {
    kind: "kpi",
    eyebrow: "09 · TRACTION",
    title: "Les premiers signaux sont là",
    items: [
      {
        value: "9",
        label: "produits livrés",
        note: "Plus de 40 fichiers sources générés et testés.",
      },
      {
        value: "3",
        label: "clubs partenaires",
        note: "Casablanca, Rabat et Marrakech.",
      },
      {
        value: "180",
        label: "téléchargements",
        note: "Sur les trois premiers mois, sans publicité payante.",
      },
      {
        value: "24 %",
        label: "taux de conversion",
        note: "Visiteurs du catalogue vers ajout au panier.",
      },
    ],
    notes: "Ces chiffres correspondent au pilote mené avant la refonte de la plateforme.",
  },
  {
    kind: "kpi",
    eyebrow: "10 · UNIT ECONOMICS",
    title: "Un modèle simple à piloter",
    items: [
      {
        value: "95 MAD",
        label: "panier moyen",
        note: "Objectif à 140 MAD avec les packs.",
      },
      {
        value: "8 MAD",
        label: "coût variable",
        note: "Hébergement, paiement et support.",
      },
      {
        value: "15 MAD",
        label: "coût d'acquisition",
        note: "Cible des campagnes organiques et campus.",
      },
      {
        value: "72 MAD",
        label: "marge par commande",
        note: "Avant coûts fixes.",
      },
    ],
    notes: "Le point mort est atteint à 210 commandes par mois.",
  },
  {
    kind: "kpi",
    eyebrow: "11 · PROJECTIONS",
    title: "Trois ans, trois paliers",
    items: [
      {
        value: "180 k",
        label: "MAD de revenus — an 1",
        note: "1 800 commandes à 100 MAD de panier moyen.",
      },
      {
        value: "620 k",
        label: "MAD de revenus — an 2",
        note: "Ajout des licences campus et des packs TPE.",
      },
      {
        value: "1,4 M",
        label: "MAD de revenus — an 3",
        note: "Développement régional et offres B2B.",
      },
      {
        value: "Q3 2027",
        label: "rentabilité",
        note: "Avec une équipe de quatre personnes.",
      },
    ],
    notes: "Hypothèses détaillées dans le modèle financier fourni en annexe.",
  },
  {
    kind: "bullets",
    eyebrow: "12 · ÉQUIPE",
    title: "Produit, design et distribution au même endroit",
    bullets: [
      "Yassine A. — fondateur, développement produit et paiement.",
      "Salma E. — design de marque, direction artistique et kits sociaux.",
      "Deux freelances — vidéo et community management.",
      "Comité informel de trois entrepreneurs TPE pour valider les contenus.",
      "Réseau de clubs étudiants pour les ateliers et la distribution.",
    ],
    notes: "L'équipe est complémentaire et basée à Casablanca.",
  },
  {
    kind: "roadmap",
    eyebrow: "13 · FEUILLE DE ROUTE",
    title: "Douze mois pour installer la marque",
    phases: [
      {
        when: "T1",
        title: "Consolidation",
        detail: "Finaliser les dix produits, la livraison ZIP et le paiement CMI.",
      },
      {
        when: "T2",
        title: "Acquisition",
        detail: "Lancer les contenus courts et les ateliers campus.",
      },
      {
        when: "T3",
        title: "Récurrence",
        detail: "Signer cinq licences campus et deux partenariats incubateurs.",
      },
      {
        when: "T4",
        title: "Extension",
        detail: "Ajouter les packs B2B et préparer l'ouverture au Maghreb.",
      },
    ],
    notes: "Chaque trimestre a un objectif commercial unique et mesurable.",
  },
  {
    kind: "bullets",
    eyebrow: "14 · PARTENARIATS",
    title: "Des relais de distribution déjà identifiés",
    bullets: [
      "Clubs étudiants : ateliers gratuits, codes promo, visibilité immédiate.",
      "Incubateurs : contenu offert aux cohortes, licence annuelle.",
      "Experts-comptables : pack admin recommandé à leurs clients auto-entrepreneurs.",
      "Écoles et universités : licence campus pour les modules d'entrepreneuriat.",
      "Agences web : marque blanche sur les sites vitrines.",
    ],
    notes: "Le partenariat est structuré autour d'une commission de 20 % ou d'une licence.",
  },
  {
    kind: "bullets",
    eyebrow: "15 · RISQUES",
    title: "Ce qui pourrait nous ralentir — et notre réponse",
    bullets: [
      "Copie des visuels : marque forte, mises à jour continues et communauté.",
      "Fuite des fichiers : livraison par lien signé à terme, licence claire.",
      "Dépendance aux plateformes sociales : liste e-mail et SEO dès le mois 1.",
      "Saisonnalité étudiante : diversification vers les TPE et les indépendants.",
      "Paiement en ligne incomplet : virement et CashPlus en attendant la certification CMI.",
    ],
    notes: "Chaque risque a un propriétaire et un indicateur de suivi.",
  },
  {
    kind: "bullets",
    eyebrow: "16 · CADRE LÉGAL",
    title: "Une structure simple et conforme",
    bullets: [
      "Société à responsabilité limitée (SARL) au capital social adapté.",
      "Facturation avec ICE, IF, RC et TVA lorsque applicable.",
      "Conditions générales de vente et licence d'utilisation par produit.",
      "Protection des données personnelles alignée sur la loi 09-08.",
      "Propriété intellectuelle : contenus originaux, polices sous licence libre.",
    ],
    notes: "Le conseil juridique est externalisé auprès d'un cabinet casablancais.",
  },
  {
    kind: "bullets",
    eyebrow: "17 · IMPACT",
    title: "Réduire la barrière à l'entrepreneuriat",
    bullets: [
      "Permettre à un jeune de lancer son activité sans budget d'agence.",
      "Valoriser le travail des designers et développeurs marocains.",
      "Donner aux étudiants des supports professionnels pour leur premier emploi.",
      "Créer une bibliothèque numérique en arabe, rare sur ce segment.",
      "Former 1 000 étudiants par an via des ateliers gratuits.",
    ],
    notes: "L'impact est mesuré par le nombre d'ateliers et de projets lancés.",
  },
  {
    kind: "kpi",
    eyebrow: "18 · UTILISATION DES FONDS",
    title: "250 000 MAD, quatre postes",
    items: [
      {
        value: "90 k",
        label: "produit & contenu",
        note: "Design, vidéo et nouveaux formats.",
      },
      {
        value: "70 k",
        label: "acquisition",
        note: "Contenus courts, campus et SEO.",
      },
      {
        value: "50 k",
        label: "technique",
        note: "Paiement CMI, livraison sécurisée, infrastructure.",
      },
      {
        value: "40 k",
        label: "juridique & support",
        note: "SARL, licences, support client.",
      },
    ],
    notes: "Le budget couvre 12 mois avec une marge de sécurité de deux mois.",
  },
  {
    kind: "bullets",
    eyebrow: "19 · ASK",
    title: "Ce que nous demandons",
    bullets: [
      "250 000 MAD pour financer 12 mois de croissance.",
      "Accès à un réseau d'incubateurs et de programmes campus.",
      "Mentorat sur le paiement en ligne et les licences institutionnelles.",
      "Mise en relation avec des experts-comptables et des agences.",
      "Objectif : 2 500 commandes et 8 licences campus en 12 mois.",
    ],
    callout: {
      value: "18 mois",
      label: "d'autonomie financière visée après la levée.",
    },
    notes: "Nous sommes ouverts à une prise de participation minoritaire.",
  },
  {
    kind: "closing",
    eyebrow: "20 · MERCI",
    title: "Construisons l'outil que les TPE marocaines attendent",
    subtitle:
      "ProTemplates transforme des heures de travail administratif en fichiers prêts à l'emploi, en arabe et en français, payés en dirhams.",
    contact: "clubs@protemplates.ma · protemplates.ma · Casablanca, Maroc",
    notes: "Merci. Nous serons ravis de répondre à vos questions.",
  },
];

const INVESTOR_AR = [
  {
    kind: "title",
    eyebrow: "عرض أمام المستثمرين والحاضنات",
    title: "ProTemplates — البنية الرقمية للمقاولات الصغرى المغربية",
    subtitle:
      "قوالب مهنية قابلة للتعديل بالعربية والفرنسية، بأثمنة بالدرهم. سوق يضم 1.2 مليون مقاولة صغرى تخدمها الأدوات الدولية بشكل ضعيف.",
    meta: [
      "التمويل المطلوب:\n250,000 درهم",
      "المرحلة:\nالانطلاق · أول إيراد",
      "التواصل:\nclubs@protemplates.ma",
    ],
    notes: "هدف اللقاء: عرض المؤشرات والحاجيات التمويلية.",
  },
  {
    kind: "agenda",
    eyebrow: "الخطة",
    title: "اثنتا عشرة دقيقة وقرار واحد",
    items: [
      "الإشكالية والحل",
      "المنتج والعرض التجريبي",
      "السوق والمنافسة",
      "نموذج العمل",
      "استراتيجية الدخول",
      "المؤشرات والاقتصاد الوحدوي",
      "التوقعات المالية",
      "الفريق وخارطة الطريق",
      "المخاطر والإطار القانوني",
      "الأثر واستخدام التمويل",
      "طلبنا",
    ],
    notes: "توجد نسخة قصيرة من خمس دقائق أيضاً.",
  },
  {
    kind: "bullets",
    eyebrow: "01 · الإشكالية",
    title: "تأسيس مقاولة بالمغرب لا يزال مساراً وثائقياً شاقاً",
    bullets: [
      "المقاولة الصغرى تقضي 11 ساعة في المتوسط على وثائقها الإدارية في الشهر الأول.",
      "القوالب المجانية على الإنترنت بالفرنسية وغير مطابقة وسيئة التنظيم.",
      "صناع المحتوى يدفعون 30 إلى 60 يورو شهرياً لأدوات لا تدعم العربية أصلاً.",
      "الوكالات تطلب 3,000 إلى 8,000 درهم لموقع تعريفي بسيط.",
      "النتيجة: المقاولون الصغار ينطلقون متأخرين أو لا ينطلقون.",
    ],
    callout: {
      value: "11 ساعة",
      label: "يخسرها متوسط المقاولات الصغرى لإنتاج وثائقها الأولى.",
    },
    notes: "المصدر: استقصاء شمل 64 مقاولاً ذاتياً ومقاولة صغرى في 2025.",
  },
  {
    kind: "bullets",
    eyebrow: "02 · الحل",
    title: "مكتبة ملفات مصدرية، لا اشتراك إضافي",
    bullets: [
      "قوالب PowerPoint وWord وExcel وSVG وHTML جاهزة للتعديل.",
      "ثنائية اللغة بالعربية (RTL) والفرنسية منذ التصميم.",
      "دفع محلي بالدرهم: CMI وتحويل بنكي وCashPlus.",
      "ثمن واحد من 49 إلى 249 درهماً دون اشتراك.",
      "أدلة فيديو من 10 إلى 25 دقيقة بالدارجة والفرنسية.",
    ],
    callout: {
      value: "4×",
      label: "أرخص من وكالة لموقع تعريفي متكامل.",
    },
    notes: "الملفات ملك للعميل: لا ارتباط بأي منصة.",
  },
  {
    kind: "bullets",
    eyebrow: "03 · المنتج",
    title: "عشرة منتجات ونظام تصميم موحد",
    bullets: [
      "سير ذاتية ورسائل ثنائية اللغة متوافقة مع ATS.",
      "عروض PFE واستثمارية من 18 إلى 22 شريحة.",
      "مواقع تعريفية وصفحات هبوط للدفع عند الاستلام بصيغة HTML مستقلة.",
      "حزمة إدارية مغربية: عروض أسعار، فواتير، عقود، اتفاقيات سرية.",
      "حزمة شبكات اجتماعية: 8 صيغ SVG وعرض PowerPoint.",
      "كل عملية شراء تفتح تحميلاً فورياً بصيغة ZIP.",
    ],
    notes: "العرض يبيّن مسار الشراء الكامل في أقل من 90 ثانية.",
  },
  {
    kind: "kpi",
    eyebrow: "04 · السوق",
    title: "سوق واسع ومحلي وغير مجهّز",
    items: [
      {
        value: "1.2 مليون",
        label: "مقاولة صغرى ومقاول ذاتي",
        note: "المصدر: المندوبية السامية للتخطيط والسجل الوطني، 2025.",
      },
      {
        value: "380 ألفاً",
        label: "طالب في التعليم العالي",
        note: "منهم 120 ألفاً في نهاية المسار سنوياً.",
      },
      {
        value: "180 مليون",
        label: "درهم سوق قابل للاستهداف",
        note: "تقدير بسلة سنوية متوسطة 150 درهماً.",
      },
      {
        value: "12 %",
        label: "نمو التجارة الإلكترونية",
        note: "نمو سنوي للتجارة عبر الإنترنت بالمغرب.",
      },
    ],
    notes: "السوق القابل للاستهداف محدود عمداً بالمقاولين الرقميين الجدد.",
  },
  {
    kind: "bullets",
    eyebrow: "05 · المنافسة",
    title: "البدائل تتجاهل اللغة والدفع المحلي",
    bullets: [
      "Envato وCreative Market: 20–80 دولاراً، بالإنجليزية وبطاقة دولية إلزامية.",
      "Canva Pro: 120 درهماً شهرياً، قوالب عامة وتصدير محدود.",
      "القوالب المجانية: غير مطابقة للقانون المغربي وبدون دعم.",
      "الوكالات المحلية: 3,000–8,000 درهم ومدة 2 إلى 4 أسابيع.",
      "ProTemplates: 49–249 درهماً، عربية أصلية، دفع محلي وتسليم فوري.",
    ],
    notes: "تميّزنا هو الجمع بين اللغة والمطابقة والثمن والدفع.",
  },
  {
    kind: "layers",
    eyebrow: "06 · الميزة التنافسية",
    title: "أربع حواجز تُبنى منتجاً بعد منتج",
    layers: [
      {
        title: "محتوى محلي",
        detail: "وثائق مطابقة للإطار المغربي: ICE وIF والتضامن الاجتماعي وSARL والمقاول الذاتي.",
      },
      {
        title: "ثنائية أصلية",
        detail: "تنسيق RTL حقيقي، لا ترجمة آلية مضافة لاحقاً.",
      },
      {
        title: "التوزيع",
        detail: "تيك توك وإنستغرام والجامعات: اكتساب عضوي بكلفة شبه معدومة.",
      },
      {
        title: "ملفات مصدرية",
        detail: "PowerPoint وWord وExcel وHTML: العميل يملك ملفاته.",
      },
    ],
    notes: "كل حاجز يصعب نسخه بسرعة من طرف لاعب دولي.",
  },
  {
    kind: "bullets",
    eyebrow: "07 · نموذج العمل",
    title: "بيع بالوحدة وحزم وتراخيص جامعية",
    bullets: [
      "منتجات فردية: 49 إلى 149 درهماً، هامش إجمالي يفوق 90%.",
      "حزمة الشركة الناشئة: 249 درهماً، أعلى سلة متوسطة.",
      "ترخيص جامعي: 4,900 درهم لكل مؤسسة سنوياً.",
      "حزم مخصصة للحاضنات وبرامج المواكبة.",
      "دون اشتراك إلزامي: الثقة تُبنى بالثمن الواحد.",
    ],
    callout: {
      value: "92 %",
      label: "هامش إجمالي على البيع المباشر، بما فيه الاستضافة.",
    },
    notes: "التراخيص الجامعية هي الرافعة الأساسية للإيراد المتكرر.",
  },
  {
    kind: "roadmap",
    eyebrow: "08 · استراتيجية الدخول",
    title: "ثلاث قنوات بهذا الترتيب",
    phases: [
      {
        when: "الشهران 1–2",
        title: "محتوى قصير",
        detail: "تيك توك وإنستغرام: عروض من 30 ثانية، قبل وبعد.",
      },
      {
        when: "الشهران 2–4",
        title: "الجامعات",
        detail: "ورشات مجانية في الأندية الطلابية وحاضنات الجامعات.",
      },
      {
        when: "الشهران 4–6",
        title: "الشراكات",
        detail: "تكنوبارك وUM6P وبرامج المواكبة والمحاسبون.",
      },
      {
        when: "الأشهر 6–12",
        title: "التكرار",
        detail: "تراخيص جامعية وحزم مخصصة للمقاولات الصغرى المواكبة.",
      },
    ],
    notes: "كلفة الاكتساب المستهدفة أقل من 15 درهماً لكل عميل مؤدٍ.",
  },
  {
    kind: "kpi",
    eyebrow: "09 · المؤشرات",
    title: "الإشارات الأولى موجودة",
    items: [
      {
        value: "9",
        label: "منتجات منجزة",
        note: "أكثر من 40 ملفاً مصدرياً مولّداً ومختبراً.",
      },
      {
        value: "3",
        label: "أندية شريكة",
        note: "الدار البيضاء والرباط ومراكش.",
      },
      {
        value: "180",
        label: "تحميلاً",
        note: "في الأشهر الثلاثة الأولى دون إعلانات مدفوعة.",
      },
      {
        value: "24 %",
        label: "نسبة التحويل",
        note: "من زوار المكتبة إلى إضافة للسلة.",
      },
    ],
    notes: "هذه الأرقام تخص التجربة الأولى قبل إعادة بناء المنصة.",
  },
  {
    kind: "kpi",
    eyebrow: "10 · الاقتصاد الوحدوي",
    title: "نموذج بسيط قابل للقيادة",
    items: [
      {
        value: "95 درهماً",
        label: "السلة المتوسطة",
        note: "الهدف 140 درهماً مع الحزم.",
      },
      {
        value: "8 دراهم",
        label: "الكلفة المتغيرة",
        note: "الاستضافة والدفع والدعم.",
      },
      {
        value: "15 درهماً",
        label: "كلفة الاكتساب",
        note: "هدف الحملات العضوية والجامعية.",
      },
      {
        value: "72 درهماً",
        label: "هامش الطلب",
        note: "قبل الكلف الثابتة.",
      },
    ],
    notes: "نقطة التعادل عند 210 طلبات شهرياً.",
  },
  {
    kind: "kpi",
    eyebrow: "11 · التوقعات",
    title: "ثلاث سنوات وثلاث مراحل",
    items: [
      {
        value: "180 ألف",
        label: "درهم إيرادات — السنة 1",
        note: "1,800 طلب بسلة متوسطة 100 درهم.",
      },
      {
        value: "620 ألف",
        label: "درهم إيرادات — السنة 2",
        note: "إضافة التراخيص الجامعية وحزم المقاولات.",
      },
      {
        value: "1.4 مليون",
        label: "درهم إيرادات — السنة 3",
        note: "توسع إقليمي وعروض B2B.",
      },
      {
        value: "الربع 3 2027",
        label: "الربحية",
        note: "بفريق من أربعة أشخاص.",
      },
    ],
    notes: "الفرضيات مفصلة في النموذج المالي المرفق.",
  },
  {
    kind: "bullets",
    eyebrow: "12 · الفريق",
    title: "المنتج والتصميم والتوزيع في مكان واحد",
    bullets: [
      "ياسين أ. — المؤسس، تطوير المنتج والدفع.",
      "سلمى إ. — هوية العلامة والإدارة الفنية والحزم الاجتماعية.",
      "مستقلان — الفيديو وإدارة المجتمع.",
      "لجنة غير رسمية من ثلاثة مقاولين لمراجعة المحتوى.",
      "شبكة أندية طلابية للورشات والتوزيع.",
    ],
    notes: "الفريق متكامل ومقرّه الدار البيضاء.",
  },
  {
    kind: "roadmap",
    eyebrow: "13 · خارطة الطريق",
    title: "اثنا عشر شهراً لتثبيت العلامة",
    phases: [
      {
        when: "الربع 1",
        title: "التجميع",
        detail: "إتمام المنتجات العشرة والتحميل ZIP والدفع عبر CMI.",
      },
      {
        when: "الربع 2",
        title: "الاكتساب",
        detail: "إطلاق المحتوى القصير وورشات الجامعات.",
      },
      {
        when: "الربع 3",
        title: "التكرار",
        detail: "توقيع خمسة تراخيص جامعية وشراكة مع حاضنتين.",
      },
      {
        when: "الربع 4",
        title: "التوسع",
        detail: "إضافة حزم B2B والتحضير لفتح السوق المغاربي.",
      },
    ],
    notes: "لكل ربع هدف تجاري واحد قابل للقياس.",
  },
  {
    kind: "bullets",
    eyebrow: "14 · الشراكات",
    title: "قنوات توزيع محددة مسبقاً",
    bullets: [
      "الأندية الطلابية: ورشات مجانية وأكواد خصم وحضور فوري.",
      "الحاضنات: محتوى مجاني للدفعات وترخيص سنوي.",
      "المحاسبون: حزمة إدارية موصى بها لعملائهم.",
      "المدارس والجامعات: ترخيص جامعي لوحدات المقاولة.",
      "وكالات الويب: علامة بيضاء على المواقع التعريفية.",
    ],
    notes: "الشراكة تقوم على عمولة 20% أو ترخيص.",
  },
  {
    kind: "bullets",
    eyebrow: "15 · المخاطر",
    title: "ما قد يعرقلنا — وكيف نجيب",
    bullets: [
      "نسخ التصاميم: علامة قوية وتحديثات مستمرة ومجتمع.",
      "تسريب الملفات: تسليم بروابط موقعة لاحقاً وترخيص واضح.",
      "الاعتماد على الشبكات الاجتماعية: قائمة بريدية وSEO من الشهر الأول.",
      "موسمية الطلبة: تنويع نحو المقاولات والمستقلين.",
      "الدفع الإلكتروني غير مكتمل: تحويل وCashPlus في انتظار شهادة CMI.",
    ],
    notes: "لكل خطر مسؤول ومؤشر تتبع.",
  },
  {
    kind: "bullets",
    eyebrow: "16 · الإطار القانوني",
    title: "هيكلة بسيطة ومطابقة",
    bullets: [
      "شركة ذات مسؤولية محدودة (SARL) برأس مال مناسب.",
      "فوترة بـ ICE وIF والسجل التجاري والضريبة عند الاقتضاء.",
      "شروط بيع عامة وترخيص استخدام لكل منتج.",
      "حماية المعطيات الشخصية وفق القانون 09-08.",
      "الملكية الفكرية: محتويات أصلية وخطوط مرخصة.",
    ],
    notes: "الاستشارة القانونية خارجية لدى مكتب بالدار البيضاء.",
  },
  {
    kind: "bullets",
    eyebrow: "17 · الأثر",
    title: "تقليص حاجز المقاولة",
    bullets: [
      "تمكين شاب من إطلاق نشاطه دون ميزانية وكالة.",
      "تثمين عمل المصممين والمطورين المغاربة.",
      "منح الطلبة دعائم مهنية لأول وظيفة.",
      "إنشاء مكتبة رقمية بالعربية نادرة في هذا القطاع.",
      "تكوين 1,000 طالب سنوياً عبر ورشات مجانية.",
    ],
    notes: "يُقاس الأثر بعدد الورشات والمشاريع المطلقة.",
  },
  {
    kind: "kpi",
    eyebrow: "18 · استخدام التمويل",
    title: "250,000 درهم وأربعة بنود",
    items: [
      {
        value: "90 ألف",
        label: "المنتج والمحتوى",
        note: "التصميم والفيديو والصيغ الجديدة.",
      },
      {
        value: "70 ألف",
        label: "الاكتساب",
        note: "المحتوى القصير والجامعات وSEO.",
      },
      {
        value: "50 ألف",
        label: "التقنية",
        note: "الدفع CMI والتسليم الآمن والبنية التحتية.",
      },
      {
        value: "40 ألف",
        label: "القانون والدعم",
        note: "تأسيس SARL والتراخيص ودعم العملاء.",
      },
    ],
    notes: "الميزانية تغطي 12 شهراً بهامش أمان لشهرين.",
  },
  {
    kind: "bullets",
    eyebrow: "19 · الطلب",
    title: "ما نطلبه",
    bullets: [
      "250,000 درهم لتمويل 12 شهراً من النمو.",
      "الوصول إلى شبكة حاضنات وبرامج جامعية.",
      "مواكبة في الدفع الإلكتروني والتراخيص المؤسسية.",
      "ربطنا بمحاسبين ووكالات.",
      "الهدف: 2,500 طلب و8 تراخيص جامعية في 12 شهراً.",
    ],
    callout: {
      value: "18 شهراً",
      label: "من الاستقلال المالي المستهدف بعد التمويل.",
    },
    notes: "نحن منفتحون على مساهمة أقلية في الرأسمال.",
  },
  {
    kind: "closing",
    eyebrow: "20 · شكراً",
    title: "لنبنِ الأداة التي تنتظرها المقاولات المغربية",
    subtitle:
      "ProTemplates تحوّل ساعات العمل الإداري إلى ملفات جاهزة بالعربية والفرنسية، تُدفع بالدرهم.",
    contact: "clubs@protemplates.ma · protemplates.ma · الدار البيضاء، المغرب",
    notes: "شكراً لكم. يسعدنا الإجابة عن أسئلتكم.",
  },
];

export const PFE_DECK = {
  slug: "pfe-defense-pitch-deck",
  title: {
    fr: "Soutenance PFE — 18 slides",
    ar: "مناقشة مشروع التخرج — 18 شريحة",
  },
  slides: { fr: PFE_FR, ar: PFE_AR },
};

export const INVESTOR_DECK = {
  slug: "startup-investor-pitch-deck",
  title: {
    fr: "Pitch investisseurs — 22 slides",
    ar: "عرض المستثمرين — 22 شريحة",
  },
  slides: { fr: INVESTOR_FR, ar: INVESTOR_AR },
};
