// =====================================================
// AUDIFEL — Main JavaScript
// i18n + Scroll Animations + Hamburger Menu + Header
// =====================================================

// --- Translations dictionary ---
const translations = {
  fr: {
    page_title: "AUDIFEL — Centre de correction auditive",
    page_desc: "AUDIFEL, votre centre de confiance pour l'appareillage auditif. Dépistage auditif gratuit et accompagnement personnalisé.",
    nav_about: "À propos", nav_solutions: "Nos solutions", nav_types: "Types d'appareils", nav_contact: "Contact",
    nav_call: "Appelez-nous", nav_rdv: "Prendre rendez-vous",
    hero_eyebrow: "Centre de correction auditive",
    hero_h1: "Tout ce dont une bonne <em>audition</em> a besoin.",
    hero_lead: "AUDIFEL vous accompagne à chaque étape : dépistage auditif gratuit, conseils personnalisés et appareils auditifs adaptés à votre quotidien.",
    hero_cta1: "Faire mon test auditif gratuit", hero_cta2: "Découvrir AUDIFEL",
    trust1_num: "100%", trust1_label: "Dépistage gratuit",
    trust2_num: "Sur mesure", trust2_label: "Conseil personnalisé",
    trust3_num: "Proximité", trust3_label: "Un centre près de chez vous",
    ql1_title: "Test auditif en ligne", ql1_p: "Évaluez votre audition en quelques minutes",
    ql2_title: "Nos appareils auditifs", ql2_p: "Des solutions adaptées à chaque besoin",
    ql3_title: "Assistance", ql3_p: "Une question ? Notre équipe vous répond",
    solutions_eyebrow: "Nos solutions", solutions_h2: "Une solution pour chaque besoin auditif",
    solutions_p: "Du premier dépistage à l'entretien de votre appareil, AUDIFEL vous accompagne sur toute la durée.",
    sol1_title: "Dépistage auditif", sol1_p: "Test gratuit et sans engagement, réalisé par un professionnel.",
    sol2_title: "Appareils auditifs", sol2_p: "Des appareils sur mesure, discrets et adaptés à votre quotidien.",
    sol2_hansaton_sub: "Technologie Allemande ↗",
    sol2_audifon_sub: "Sur mesure & Intra ↗",
    sol3_title: "Application mobile", sol3_p: "Réglez et contrôlez votre appareil directement depuis votre smartphone.",
    sol4_title: "Entretien & accessoires", sol4_p: "Piles, chargeurs et nettoyage pour prolonger la vie de votre appareil.",
    types_eyebrow: "Guide & Modèles",
    types_h2: "Les différents types d'appareils auditifs",
    types_p: "Selon votre degré de perte auditive, votre morphologie et vos habitudes de vie, nos audioprothésistes vous orientent vers le format idéal.",
    type1_badge: "Le plus plébiscité",
    type1_title: "Micro-contour (RIC)",
    type1_p: "L'écouteur est logé directement dans le conduit auditif. Ultra-discret derrière l'oreille, grand confort et Bluetooth direct.",
    type1_t1: "Ultra-discret", type1_t2: "Rechargeable", type1_t3: "Son 360°",
    type2_badge: "100% Personnalisé",
    type2_title: "Intra-auriculaire (CIC / ITE)",
    type2_p: "Moulé sur mesure selon l'empreinte de votre oreille. Se loge entièrement à l'intérieur pour une discrétion maximale.",
    type2_t1: "Sur mesure", type2_t2: "Quasi-invisible", type2_t3: "Vie active",
    type3_badge: "Puissance maximale",
    type3_title: "Contour classique (BTE)",
    type3_p: "Robuste, fiable et puissant, adapté aux pertes auditives modérées à profondes avec une autonomie prolongée.",
    type3_t1: "Grande puissance", type3_t2: "Robuste", type3_t3: "Prise en main facile",
    about_eyebrow: "Qui sommes-nous",
    about_h2: "Un accompagnement humain, à chaque étape de votre audition",
    about_p1: "Chez AUDIFEL, nous pensons que bien entendre change tout : les conversations en famille, les rires, la musique, les petits bruits du quotidien. C'est pourquoi nous mettons un point d'honneur à offrir un accompagnement attentif, sans jargon technique et sans précipitation.",
    about_p2: "Nos audioprothésistes prennent le temps d'écouter vos besoins réels avant de vous orienter vers la solution la plus adaptée — jamais l'inverse. Chaque appareil est choisi pour votre mode de vie, votre budget et votre confort.",
    badge_certified: "Certifié",
    badge_experts: "Audioprothésistes experts",
    test_h2: "Un doute sur votre audition ?",
    test_p: "Faites un dépistage auditif gratuit et sans engagement dans l'un de nos centres. Résultat expliqué clairement, le jour même.",
    test_cta: "Réserver mon créneau",
    steps_eyebrow: "Notre méthode", steps_h2: "Comment ça marche",
    steps_p: "Trois étapes simples, du premier contact à votre nouvel appareil auditif.",
    step1_title: "Dépistage auditif", step1_p: "Un test rapide et gratuit réalisé par un professionnel, pour évaluer précisément votre audition.",
    step2_title: "Conseil personnalisé", step2_p: "Nous vous présentons les solutions adaptées à votre perte auditive, votre quotidien et votre budget.",
    step3_title: "Essai & appareillage", step3_p: "Vous testez votre appareil avant de vous engager, avec un suivi et des réglages sur mesure.",
    resources_eyebrow: "Ressources", resources_h2: "Téléchargez notre brochure",
    resources_card_title: "Brochure produits AUDIFEL",
    resources_card_p: "Découvrez l'ensemble de nos appareils auditifs et services en un seul document.",
    resources_cta: "Télécharger le PDF",
    partners_eyebrow: "Nos marques", partners_h2: "Des marques partenaires de confiance",
    brand_hansaton_title: "Gamme Hansaton Fokus",
    brand_hansaton_p: "Technologie auditive de pointe alliant design ultra-fin, clarté vocale exceptionnelle et connectivité Bluetooth directe.",
    brand_audifon_title: "Gamme Audifon Wings",
    brand_audifon_p: "Solutions sur mesure en contours d'oreilles et intra-auriculaires discrets avec traitement sonore naturel haute fidélité.",
    feat_bluetooth: "Bluetooth direct",
    feat_rechargeable: "Rechargeable",
    feat_discreet: "Design ultra-discret",
    feat_custom: "Sur mesure & Intra",
    feat_sound: "Son naturel 360°",
    feat_app: "Contrôle smartphone",
    contact_eyebrow: "Contact", contact_h2: "Parlons de votre audition",
    contact_p: "Notre équipe vous répond rapidement pour organiser votre dépistage gratuit ou répondre à vos questions.",
    info_phone_label: "Téléphone", info_email_label: "Email", info_center_label: "Centres",
    info_center_value: "Adresse de votre centre, Algérie",
    form_name_label: "Nom complet", form_name_placeholder: "Votre nom",
    form_phone_label: "Téléphone", form_phone_placeholder: "+213 ...",
    form_email_label: "Email", form_email_placeholder: "vous@email.com",
    form_msg_label: "Message", form_msg_placeholder: "Décrivez votre besoin ou demandez un rendez-vous...",
    form_submit: "Envoyer ma demande", form_note: "Réponse sous 24h ouvrées. Vos données restent confidentielles.",
    form_alert: "Merci ! Votre message a bien été envoyé (démo — à connecter à votre messagerie).",
    footer_tagline: "Centre de correction auditive à votre écoute, partout en Algérie.",
    footer_nav_title: "Navigation", footer_social_title: "Suivez-nous",
    footer_copyright: "© 2026 AUDIFEL. Tous droits réservés.", footer_credit: "Site conçu avec soin."
  },
  en: {
    page_title: "AUDIFEL — Hearing Correction Center",
    page_desc: "AUDIFEL, your trusted hearing aid center. Free hearing screening and personalized support.",
    nav_about: "About", nav_solutions: "Our solutions", nav_types: "Hearing Aid Types", nav_contact: "Contact",
    nav_call: "Call us", nav_rdv: "Book an appointment",
    hero_eyebrow: "Hearing correction center",
    hero_h1: "Everything good <em>hearing</em> needs.",
    hero_lead: "AUDIFEL supports you every step of the way: free hearing screening, personalized advice, and hearing aids suited to your daily life.",
    hero_cta1: "Take my free hearing test", hero_cta2: "Discover AUDIFEL",
    trust1_num: "100%", trust1_label: "Free screening",
    trust2_num: "Tailored", trust2_label: "Personalized advice",
    trust3_num: "Nearby", trust3_label: "A center close to you",
    ql1_title: "Online hearing test", ql1_p: "Assess your hearing in a few minutes",
    ql2_title: "Our hearing aids", ql2_p: "Solutions suited to every need",
    ql3_title: "Support", ql3_p: "A question? Our team is here to help",
    solutions_eyebrow: "Our solutions", solutions_h2: "A solution for every hearing need",
    solutions_p: "From your first screening to device maintenance, AUDIFEL supports you all the way.",
    sol1_title: "Hearing screening", sol1_p: "Free, no-obligation test carried out by a professional.",
    sol2_title: "Hearing aids", sol2_p: "Custom, discreet devices suited to your daily life.",
    sol2_hansaton_sub: "German Technology ↗",
    sol2_audifon_sub: "Custom & In-Ear ↗",
    sol3_title: "Mobile app", sol3_p: "Adjust and control your device directly from your smartphone.",
    sol4_title: "Care & accessories", sol4_p: "Batteries, chargers and cleaning to extend your device's life.",
    types_eyebrow: "Guide & Styles",
    types_h2: "The different types of hearing aids",
    types_p: "Depending on your hearing loss, lifestyle and ear anatomy, our specialists guide you to the ideal format.",
    type1_badge: "Most popular",
    type1_title: "Receiver-in-Canal (RIC)",
    type1_p: "The speaker sits directly in the ear canal. Ultra-discreet behind the ear, maximum comfort, natural sound and Bluetooth.",
    type1_t1: "Ultra-discreet", type1_t2: "Rechargeable", type1_t3: "360° Sound",
    type2_badge: "100% Custom",
    type2_title: "In-The-Ear (CIC / ITE)",
    type2_p: "Custom molded from your ear impression. Sits entirely inside for maximum discretion and active lifestyles.",
    type2_t1: "Custom fit", type2_t2: "Invisible", type2_t3: "Active life",
    type3_badge: "Maximum power",
    type3_title: "Behind-The-Ear (BTE)",
    type3_p: "Durable, powerful and reliable, perfect for moderate to severe hearing loss with extended battery life.",
    type3_t1: "High power", type3_t2: "Durable", type3_t3: "Easy handling",
    about_eyebrow: "Who we are",
    about_h2: "Human support, at every stage of your hearing journey",
    about_p1: "At AUDIFEL, we believe hearing well changes everything: family conversations, laughter, music, the small everyday sounds. That's why we take pride in offering attentive support, without technical jargon and without rushing.",
    about_p2: "Our hearing care specialists take the time to listen to your real needs before guiding you to the most suitable solution — never the other way around. Every device is chosen for your lifestyle, your budget, and your comfort.",
    badge_certified: "Certified",
    badge_experts: "Expert audiologists",
    test_h2: "Not sure about your hearing?",
    test_p: "Get a free, no-obligation hearing screening at one of our centers. Results explained clearly, the same day.",
    test_cta: "Book my slot",
    steps_eyebrow: "Our method", steps_h2: "How it works",
    steps_p: "Three simple steps, from first contact to your new hearing aid.",
    step1_title: "Hearing screening", step1_p: "A quick, free test carried out by a professional to precisely assess your hearing.",
    step2_title: "Personalized advice", step2_p: "We present the solutions suited to your hearing loss, your lifestyle, and your budget.",
    step3_title: "Trial & fitting", step3_p: "You try your device before committing, with follow-up and tailored adjustments.",
    resources_eyebrow: "Resources", resources_h2: "Download our brochure",
    resources_card_title: "AUDIFEL product brochure",
    resources_card_p: "Discover all our hearing aids and services in a single document.",
    resources_cta: "Download the PDF",
    partners_eyebrow: "Our brands", partners_h2: "Trusted partner brands",
    brand_hansaton_title: "Hansaton Fokus Range",
    brand_hansaton_p: "Cutting-edge hearing technology combining ultra-slim design, exceptional speech clarity, and direct Bluetooth connectivity.",
    brand_audifon_title: "Audifon Wings Range",
    brand_audifon_p: "Custom-fit behind-the-ear and discreet in-the-ear solutions with high-fidelity natural sound processing.",
    feat_bluetooth: "Direct Bluetooth",
    feat_rechargeable: "Rechargeable",
    feat_discreet: "Ultra-discreet design",
    feat_custom: "Custom & In-the-ear",
    feat_sound: "360° Natural Sound",
    feat_app: "Smartphone control",
    contact_eyebrow: "Contact", contact_h2: "Let's talk about your hearing",
    contact_p: "Our team responds quickly to arrange your free screening or answer your questions.",
    info_phone_label: "Phone", info_email_label: "Email", info_center_label: "Centers",
    info_center_value: "Your center's address, Algeria",
    form_name_label: "Full name", form_name_placeholder: "Your name",
    form_phone_label: "Phone", form_phone_placeholder: "+213 ...",
    form_email_label: "Email", form_email_placeholder: "you@email.com",
    form_msg_label: "Message", form_msg_placeholder: "Describe your needs or request an appointment...",
    form_submit: "Send my request", form_note: "Response within 24 business hours. Your data stays confidential.",
    form_alert: "Thank you! Your message has been sent (demo — connect to your mailbox).",
    footer_tagline: "Hearing correction center, listening to you across Algeria.",
    footer_nav_title: "Navigation", footer_social_title: "Follow us",
    footer_copyright: "© 2026 AUDIFEL. All rights reserved.", footer_credit: "Site crafted with care."
  },
  ar: {
    page_title: "أوديفال — مركز تصحيح السمع",
    page_desc: "أوديفال، مركزكم الموثوق لأجهزة السمع. فحص سمعي مجاني ومرافقة شخصية.",
    nav_about: "من نحن", nav_solutions: "حلولنا", nav_types: "أنواع الأجهزة", nav_steps: "كيف تسير العملية", nav_contact: "اتصل بنا",
    nav_call: "اتصلوا بنا", nav_rdv: "احجز موعدًا",
    hero_eyebrow: "مركز تصحيح السمع",
    hero_h1: "كل ما تحتاجه <em>أذنكم</em> لسمع جيد.",
    hero_lead: "يرافقكم أوديفال في كل خطوة: فحص سمعي مجاني، نصائح شخصية، وأجهزة سمع تناسب حياتكم اليومية.",
    hero_cta1: "إجراء فحص السمع المجاني", hero_cta2: "اكتشفوا أوديفال",
    trust1_num: "100%", trust1_label: "فحص مجاني",
    trust2_num: "على المقاس", trust2_label: "نصيحة شخصية",
    trust3_num: "بالقرب منكم", trust3_label: "مركز قريب منكم",
    ql1_title: "فحص السمع عبر الإنترنت", ql1_p: "قيّموا سمعكم في دقائق معدودة",
    ql2_title: "أجهزة السمع لدينا", ql2_p: "حلول تناسب كل احتياج",
    ql3_title: "المساعدة", ql3_p: "لديكم سؤال؟ فريقنا هنا للمساعدة",
    solutions_eyebrow: "حلولنا", solutions_h2: "حل لكل احتياج سمعي",
    solutions_p: "من الفحص الأول إلى صيانة جهازكم، يرافقكم أوديفال طوال المسار.",
    sol1_title: "فحص السمع", sol1_p: "اختبار مجاني وبدون التزام، يجريه مختص.",
    sol2_title: "أجهزة السمع", sol2_p: "أجهزة على المقاس، غير ملحوظة ومناسبة لحياتكم اليومية.",
    sol2_hansaton_sub: "تقنية ألمانية ↗",
    sol2_audifon_sub: "على المقاس وداخل الأذن ↗",
    sol3_title: "تطبيق الهاتف", sol3_p: "اضبطوا وتحكموا في جهازكم مباشرة من هاتفكم الذكي.",
    sol4_title: "الصيانة والملحقات", sol4_p: "بطاريات وشواحن وتنظيف لإطالة عمر جهازكم.",
    types_eyebrow: "دليل وتصاميم",
    types_h2: "مختلف أنواع أجهزة السمع",
    types_p: "حسب درجة فقدان السمع، شكل الأذن وأسلوب حياتكم، يوجهكم أخصائيونا نحو التصميم الأمثل.",
    type1_badge: "الأكثر طلبًا",
    type1_title: "ميكرو-كونتور (RIC)",
    type1_p: "توضع السماعة مباشرة داخل القناة السمعية. فائق الدقة خلف الأذن، راحة تامة، صوت طبيعي وبلوتوث مباشر.",
    type1_t1: "فائق الدقة", type1_t2: "قابل للشحن", type1_t3: "صوت 360°",
    type2_badge: "مخصص 100%",
    type2_title: "داخل الأذن (CIC / ITE)",
    type2_p: "مصنوع على المقاس وفق بصمة أذنكم. يستقر بالكامل في الداخل لسرية تامة وأسلوب حياة نشط.",
    type2_t1: "على المقاس", type2_t2: "غير ملحوظ", type2_t3: "حياة نشطة",
    type3_badge: "أقصى قوة",
    type3_title: "خلف الأذن كلاسيكي (BTE)",
    type3_p: "متين وقوي وموثوق، ملائم لفقدان السمع المتوسط إلى الشديد مع عمر بطارية طويل وسهولة استخدام.",
    type3_t1: "قوة عالية", type3_t2: "متين ومقاوم", type3_t3: "سهل الاستخدام",
    about_eyebrow: "من نحن",
    about_h2: "مرافقة إنسانية، في كل مرحلة من رحلتكم السمعية",
    about_p1: "في أوديفال، نؤمن أن حسن السمع يغيّر كل شيء: أحاديث العائلة، الضحك، الموسيقى، وأصوات الحياة اليومية الصغيرة. لهذا نحرص على تقديم مرافقة منتبهة، بدون مصطلحات تقنية معقدة وبدون تسرّع.",
    about_p2: "يأخذ أخصائيو السمع لدينا الوقت الكافي للاستماع إلى احتياجاتكم الحقيقية قبل توجيهكم نحو الحل الأنسب — وليس العكس. يتم اختيار كل جهاز بما يناسب أسلوب حياتكم وميزانيتكم وراحتكم.",
    badge_certified: "معتمد",
    badge_experts: "أخصائيو سمع خبراء",
    test_h2: "لديكم شك بخصوص سمعكم؟",
    test_p: "استفيدوا من فحص سمعي مجاني وبدون التزام في أحد مراكزنا. نتيجة واضحة، في نفس اليوم.",
    test_cta: "احجزوا موعدكم",
    steps_eyebrow: "منهجيتنا", steps_h2: "كيف تسير العملية",
    steps_p: "ثلاث خطوات بسيطة، من أول تواصل إلى جهازكم السمعي الجديد.",
    step1_title: "فحص السمع", step1_p: "اختبار سريع ومجاني يجريه مختص، لتقييم سمعكم بدقة.",
    step2_title: "نصيحة شخصية", step2_p: "نعرض عليكم الحلول المناسبة لدرجة فقدان السمع لديكم، ولحياتكم اليومية وميزانيتكم.",
    step3_title: "تجربة وتركيب", step3_p: "تجربون جهازكم قبل الالتزام به، مع متابعة وضبط مخصص.",
    resources_eyebrow: "موارد", resources_h2: "حمّلوا كتيبنا",
    resources_card_title: "كتيب منتجات أوديفال",
    resources_card_p: "اكتشفوا جميع أجهزة السمع والخدمات لدينا في وثيقة واحدة.",
    resources_cta: "تحميل الملف PDF",
    partners_eyebrow: "علاماتنا", partners_h2: "علامات شريكة موثوقة",
    brand_hansaton_title: "مجموعة هانساتون فوكوس",
    brand_hansaton_p: "تقنية سمعية متطورة تجمع بين التصميم فائق النحافة، وضوح الصوت الاستثنائي، والاتصال المباشر عبر البلوتوث.",
    brand_audifon_title: "مجموعة أوديفون وينغز",
    brand_audifon_p: "حلول مخصصة خلف الأذن وداخل الأذن غير ملحوظة مع معالجة صوتية طبيعية عالية الدقة.",
    feat_bluetooth: "بلوتوث مباشر",
    feat_rechargeable: "قابل للشحن",
    feat_discreet: "تصميم فائق الدقة",
    feat_custom: "مخصص وداخل الأذن",
    feat_sound: "صوت طبيعي 360°",
    feat_app: "تحكم عبر الهاتف",
    contact_eyebrow: "اتصل بنا", contact_h2: "لنتحدث عن سمعكم",
    contact_p: "يرد فريقنا بسرعة لتنظيم فحصكم المجاني أو للإجابة عن أسئلتكم.",
    info_phone_label: "الهاتف", info_email_label: "البريد الإلكتروني", info_center_label: "المراكز",
    info_center_value: "عنوان مركزكم، الجزائر",
    form_name_label: "الاسم الكامل", form_name_placeholder: "اسمكم",
    form_phone_label: "الهاتف", form_phone_placeholder: "+213 ...",
    form_email_label: "البريد الإلكتروني", form_email_placeholder: "بريدكم الإلكتروني",
    form_msg_label: "الرسالة", form_msg_placeholder: "صفوا احتياجكم أو اطلبوا موعدًا...",
    form_submit: "إرسال طلبي", form_note: "الرد خلال 24 ساعة عمل. بياناتكم تبقى سرية.",
    form_alert: "شكرًا لكم! تم إرسال رسالتكم (نسخة تجريبية — يجب ربطها ببريدكم الإلكتروني).",
    footer_tagline: "مركز تصحيح السمع، نصغي إليكم في جميع أنحاء الجزائر.",
    footer_nav_title: "التصفح", footer_social_title: "تابعونا",
    footer_copyright: "© 2026 أوديفال. جميع الحقوق محفوظة.", footer_credit: "موقع صُمم بعناية."
  }
};

// --- i18n engine ---
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = t.page_title;
  document.title = t.page_title;

  const descEl = document.getElementById('page-desc');
  if (descEl) descEl.setAttribute('content', t.page_desc);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  const labelEl = document.getElementById('langBtnLabel');
  if (labelEl) labelEl.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });
  window.__currentLang = lang;
}

// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {

  // === Language switcher ===
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');

  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('open');
    });
    document.addEventListener('click', () => langMenu.classList.remove('open'));

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => {
        applyLanguage(opt.getAttribute('data-lang'));
        langMenu.classList.remove('open');
      });
    });
  }

  // === Contact form ===
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert(translations[window.__currentLang || 'fr'].form_alert);
    });
  }

  // === Sticky header with scroll detection ===
  const header = document.getElementById('mainHeader');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // === Hamburger menu ===
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when clicking a nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // === Scroll reveal animations (Intersection Observer) ===
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger animation for grid children
          const delay = entry.target.closest('.solutions-grid, .steps-grid, .ql-grid, .partners-row')
            ? Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100
            : 0;

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // === Smooth scroll for anchor links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // === Initialize language ===
  applyLanguage('fr');
});