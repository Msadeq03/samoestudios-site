(function(){
  const KEY = "samoelang";

  const dict = {
    en: {
      // NAV
      nav_practice: "Practice",
      nav_work: "Work",
      nav_products: "Products",
      nav_contact: "Contact",
      nav_inquiry: "Inquiry",

      // GATE
      gate_title: "Select language",
      gate_sub: "Choose your preferred language to continue.",

      // HOME
      hero_kicker: "MENA-based • International capability",
      hero_title: "SAMOE STUDIOS",
      hero_slogan: "Architecture, interiors, and delivery — from concept to execution.",
      hero_sub: "Studio-led accountability with a trusted partner network. Headquarters: Erbil, Iraq.",

      sec_current_title: "Current Project",
      sec_current_sub: "Selected case study",
      case_title: "Special Lady — Retail transformation",
      case_tag: "Iraq • Retail • Rebrand • Renovation • Systems",
      case_desc: "Rebrand and spatial expansion integrating architectural redesign, rollout coordination, and operational systems alignment.",
      tl_start: "Project start",
      tl_end: "Full delivery",
      tl_start_val: "October 2025",
      tl_end_val: "April 2026",
      view_case: "View case study",

      // PRACTICE
      practice_kicker: "Practice",
      practice_title: "Practice",
      practice_sub: "MENA-based, able to work internationally. Headquarters: Erbil, Iraq.",

      who_title: "Who we are",
      who_sub: "Studio-led accountability",
      who_p1: "SAMOE STUDIOS is a multidisciplinary architectural and delivery practice. We lead projects from early planning through design development, documentation, procurement, and implementation—combining studio-led direction with a vetted execution network to control quality and outcomes.",
      who_p2: "We operate across retail, residential, commercial, and institutional work—engaging where we can bring structure, spatial intelligence, and delivery discipline.",

      offer_title: "What we offer",
      offer_sub: "Core services",
      s1_t: "Architecture + Interiors",
      s1_d: "Concept to detailed design with execution clarity.",
      s2_t: "Retail Design + Rollout Systems",
      s2_d: "Flagships, expansions, refurbishments, operational alignment.",
      s3_t: "Rebrand Implementation",
      s3_d: "Spatial identity integration across environments and touchpoints.",
      s4_t: "Technical Documentation + BOQ",
      s4_d: "Technical packages and BOQ alignment for execution readiness.",
      s5_t: "Procurement + Supplier Management",
      s5_d: "Material approvals, supplier strategy, quality-controlled sourcing.",
      s6_t: "Partner Network Delivery",
      s6_d: "Fit-out, joinery, lighting, signage, MEP, and systems implementation under SAMOE standards.",

      delivery_title: "Delivery model",
      delivery_sub: "How we execute",
      d1: "01 — Discovery: Objectives, constraints, budget logic, timeline, success KPIs.",
      d2: "02 — Design + Documentation: Concept → detailed design, BOQ alignment, technical packages, execution clarity.",
      d3: "03 — Procurement + Partners: Supplier strategy, approvals, and partner selection under SAMOE standards.",
      d4: "04 — Implementation + QA: Site coordination, inspections, punch lists, handover — measurable quality control.",

      name_title: "The name",
      name_sub: "SAMOE (pronounced “Sah-moe”)",
      name_p: "SAMOE is intentionally not an acronym. It functions as a studio mark—adaptable across sectors, places, and project scales.",

      // WORK PAGE
      work_kicker: "Work",
      work_title: "Work",
      work_sub: "Selected case study",
      scope_t: "Scope",
      scope_d: "Concept, redesign, renovation support, implementation coordination.",
      systems_t: "Systems",
      systems_d: "Documentation discipline, procurement control, operational alignment.",
      outcome_t: "Outcome",
      outcome_d: "Brand coherence, execution accountability, improved customer experience.",
      more_cases: "More case studies will be published as documentation is finalized.",

      // PRODUCTS
      products_kicker: "Products",
      products_title: "Coming soon",
      products_sub: "Retail fixtures (racks, shelves, tables, counters) and furniture + lighting for retail and residential environments.",

      // CONTACT
      contact_kicker: "Contact",
      contact_title: "Inquiry",
      contact_sub: "Fill in your details. We will generate a message and open Instagram DM so you can send it.",
      f_name: "Name",
      f_company: "Company",
      f_phone: "Phone",
      f_email: "Email",
      f_desc: "Project / Description",
      f_desc_ph: "Brief scope, location, timeline, any constraints...",

      open_dm: "Open Instagram DM",
      open_dm2: "Open with preview text",

      // FOOTER
      footer_follow: "Follow",
      footer_rights: "© 2025–2026 SAMOE STUDIOS"
    },

    ar: {
      // NAV
      nav_practice: "الممارسة",
      nav_work: "الأعمال",
      nav_products: "المنتجات",
      nav_contact: "التواصل",
      nav_inquiry: "استفسار",

      // GATE
      gate_title: "اختر اللغة",
      gate_sub: "اختر لغتك المفضلة للمتابعة.",

      // HOME
      hero_kicker: "الشرق الأوسط وشمال أفريقيا • إمكانية العمل دولياً",
      hero_title: "SAMOE STUDIOS",
      hero_slogan: "عمارة، تصميم داخلي، وتسليم — من الفكرة إلى التنفيذ.",
      hero_sub: "قيادة استوديو مع شبكة شركاء موثوقة لضمان الجودة. المقر: أربيل، العراق.",

      sec_current_title: "المشروع الحالي",
      sec_current_sub: "دراسة حالة مختارة",
      case_title: "Special Lady — تطوير متجر تجزئة",
      case_tag: "العراق • تجزئة • إعادة علامة • تجديد • أنظمة",
      case_desc: "إعادة علامة وتوسعة مكانية مع إعادة تصميم معماري وتنسيق التنفيذ ومواءمة الأنظمة التشغيلية.",
      tl_start: "بداية المشروع",
      tl_end: "التسليم الكامل",
      tl_start_val: "أكتوبر 2025",
      tl_end_val: "أبريل 2026",
      view_case: "عرض دراسة الحالة",

      // PRACTICE
      practice_kicker: "الممارسة",
      practice_title: "الممارسة",
      practice_sub: "مقرّنا في أربيل، العراق. نحن متمركزون في منطقة الشرق الأوسط وشمال أفريقيا مع إمكانية العمل دولياً.",

      who_title: "من نحن",
      who_sub: "مساءلة يقودها الاستوديو",
      who_p1: "SAMOE STUDIOS ممارسة متعددة التخصصات في العمارة والتسليم. نقود المشاريع من التخطيط المبكر مروراً بتطوير التصميم والتوثيق والمشتريات والتنفيذ — مع قيادة استوديو وشبكة تنفيذ موثوقة لضبط الجودة والنتائج.",
      who_p2: "نعمل عبر التجزئة والسكني والتجاري والمؤسسي — ونختار المشاريع التي نستطيع فيها تقديم هيكلة واضحة وذكاء مكاني وانضباط في التسليم.",

      offer_title: "ماذا نقدم",
      offer_sub: "الخدمات الأساسية",
      s1_t: "عمارة + تصميم داخلي",
      s1_d: "من الفكرة إلى تصميم تفصيلي جاهز للتنفيذ.",
      s2_t: "تصميم تجزئة + أنظمة تشغيل",
      s2_d: "فروع رئيسية، توسعات، تجديدات، ومواءمة تشغيلية.",
      s3_t: "تنفيذ إعادة العلامة",
      s3_d: "ربط هوية العلامة بالمكان والتفاصيل والتجربة.",
      s4_t: "توثيق فني + BOQ",
      s4_d: "حزم تنفيذية وتوافق BOQ لضمان جاهزية التنفيذ.",
      s5_t: "مشتريات + إدارة موردين",
      s5_d: "اعتمادات مواد، استراتيجية موردين، وتوريد مضبوط الجودة.",
      s6_t: "التسليم عبر شبكة شركاء",
      s6_d: "تشطيبات، نجارة، إنارة، لافتات، MEP، وتنفيذ أنظمة وفق معايير SAMOE.",

      delivery_title: "نموذج التسليم",
      delivery_sub: "كيف ننفذ",
      d1: "01 — الاكتشاف: الأهداف، القيود، منطق الميزانية، الجدول الزمني، ومؤشرات النجاح.",
      d2: "02 — التصميم + التوثيق: من الفكرة إلى تصميم تفصيلي، توافق BOQ، حزم فنية، وضوح التنفيذ.",
      d3: "03 — المشتريات + الشركاء: استراتيجية الموردين، الاعتمادات، واختيار الشركاء وفق معايير SAMOE.",
      d4: "04 — التنفيذ + ضمان الجودة: تنسيق الموقع، فحوصات، قوائم ملاحظات، تسليم — مع ضبط جودة قابل للقياس.",

      name_title: "الاسم",
      name_sub: "SAMOE (تُنطق: سا-مو)",
      name_p: "SAMOE ليس اختصاراً. هو علامة استوديو قابلة للتكيف عبر القطاعات والأماكن وحجم المشاريع.",

      // WORK
      work_kicker: "الأعمال",
      work_title: "الأعمال",
      work_sub: "دراسة حالة مختارة",
      scope_t: "النطاق",
      scope_d: "فكرة، إعادة تصميم، دعم تجديد، وتنسيق التنفيذ.",
      systems_t: "الأنظمة",
      systems_d: "انضباط توثيق، ضبط مشتريات، ومواءمة تشغيلية.",
      outcome_t: "النتيجة",
      outcome_d: "تماسك العلامة، مساءلة تنفيذ، وتحسين تجربة العميل.",
      more_cases: "سيتم نشر المزيد من دراسات الحالة عند اكتمال التوثيق.",

      // PRODUCTS
      products_kicker: "المنتجات",
      products_title: "قريباً",
      products_sub: "تجهيزات تجزئة (ستاندات، رفوف، طاولات، كاونترات) وأثاث + إنارة للتجزئة والسكن.",

      // CONTACT
      contact_kicker: "التواصل",
      contact_title: "استفسار",
      contact_sub: "املأ بياناتك. سننشئ رسالة جاهزة ونفتح محادثة إنستغرام لإرسالها.",
      f_name: "الاسم",
      f_company: "الشركة",
      f_phone: "رقم الهاتف",
      f_email: "البريد الإلكتروني",
      f_desc: "المشروع / الوصف",
      f_desc_ph: "نطاق مختصر، الموقع، الجدول الزمني، أي قيود...",

      open_dm: "فتح رسالة إنستغرام",
      open_dm2: "فتح مع نص المعاينة",

      // FOOTER
      footer_follow: "تابعنا",
      footer_rights: "© 2025–2026 SAMOE STUDIOS"
    }
  };

  function getLang(){
    return localStorage.getItem(KEY) || "en";
  }

  function setLang(lang){
    localStorage.setItem(KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang){
    const d = dict[lang] || dict.en;
    const isAR = lang === "ar";

    document.documentElement.lang = lang;
    document.documentElement.dir = isAR ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", isAR);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (d[key] !== undefined) el.textContent = d[key];
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const key = el.getAttribute("data-i18n-ph");
      if (d[key] !== undefined) el.setAttribute("placeholder", d[key]);
    });
  }

  window.SAMOE = { getLang, setLang, applyLang };

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(getLang());
  });
})();