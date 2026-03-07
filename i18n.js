(function () {
  "use strict";

  const STORAGE_KEY = "samoelang";

  const dict = {
    en: {
      nav_practice: "Practice",
      nav_work: "Work",
      nav_products: "Products",
      nav_contact: "Contact",
      nav_inquiry: "Inquiry",

      gate_title: "Select language",
      gate_sub: "Choose your preferred language to continue.",

      hero_kicker: "MENA-based • International capability",
      hero_title: "SAMOE STUDIOS",
      hero_slogan: "Architecture, interiors, and delivery — from concept to execution.",
      hero_sub: "Studio-led accountability with a trusted partner network. Headquarters: Erbil, Iraq.",

      case_title: "Special Lady — Retail transformation",
      case_tag: "Iraq • Retail • Rebrand • Renovation • Systems",
      case_desc: "Rebrand and spatial expansion integrating architectural redesign, rollout coordination, and operational systems alignment.",

      tl_start: "Project start",
      tl_end: "Full delivery",
      tl_start_val: "October 2025",
      tl_end_val: "April 2026",
      view_case: "View case study",

      home_section_1_kicker: "Studio positioning",
      home_section_1_title: "A delivery-led studio model",
      home_section_1_copy: "SAMOE STUDIOS operates where concept quality and execution discipline need to meet. The studio structure is built around direction, documentation, supplier alignment, and delivery control.",
      home_link_practice: "Explore the practice",

      home_section_2_kicker: "Selected work",
      home_section_3_kicker: "Products",
      home_feature_title: "Direction, structure, accountability",
      home_feature_copy: "The studio does not position itself as image-only design. The core value is building coherent project systems that can move from concept into real implementation with control.",

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

      work_kicker: "Work",
      work_title: "Work",
      work_sub: "Selected case study",
      work_case_desc: "The studio is leading the rebrand and spatial expansion of Special Lady, integrating architectural redesign, expansion coordination, and operational systems alignment.",
      scope_t: "Scope",
      scope_d: "Concept, redesign, renovation support, implementation coordination.",
      systems_t: "Systems",
      systems_d: "Documentation discipline, procurement control, operational alignment.",
      outcome_t: "Outcome",
      outcome_d: "Brand coherence, execution accountability, improved customer experience.",
      more_cases: "More case studies will be published as documentation is finalized.",

      products_kicker: "Products",
      products_title: "Coming soon",
      products_sub: "Retail fixtures (racks, shelves, tables, counters) and furniture + lighting for retail and residential environments.",

      contact_kicker: "Contact",
      contact_title: "Inquiry",
      contact_sub: "Contact SAMOE STUDIOS LTD for general inquiries, project discussions, and commercial proposals.",
      contact_form_title: "Send an inquiry",
      contact_form_sub: "Fill in your details and submit directly through the website.",
      contact_general_label: "General inquiries",
      contact_general_desc: "General public contact and website inquiries.",
      contact_sales_label: "Commercial proposals",
      contact_sales_desc: "Client inquiries and commercial proposals.",
      contact_registered_office: "Registered office",

      f_department: "Inquiry type",
      f_department_sales: "Client inquiry / commercial proposal",
      f_department_info: "General inquiry",
      f_name: "Name",
      f_company: "Company",
      f_phone: "Phone",
      f_email: "Email",
      f_location: "Project location",
      f_desc: "Project / Description",
      f_desc_ph: "Brief scope, location, timeline, any constraints...",
      send_inquiry: "Submit inquiry",

      footer_nav_title: "Navigation",
      footer_contact_title: "Contact",
      footer_social_title: "Social",
      footer_copy: "Architecture, interiors, and delivery — from concept to execution.",
      footer_rights: "© 2025–2026 SAMOE STUDIOS LTD"
    },

    ar: {
      nav_practice: "الممارسة",
      nav_work: "الأعمال",
      nav_products: "المنتجات",
      nav_contact: "التواصل",
      nav_inquiry: "استفسار",

      gate_title: "اختر اللغة",
      gate_sub: "اختر لغتك المفضلة للمتابعة.",

      hero_kicker: "الشرق الأوسط وشمال أفريقيا • إمكانية العمل دولياً",
      hero_title: "SAMOE STUDIOS",
      hero_slogan: "عمارة، تصميم داخلي، وتسليم — من الفكرة إلى التنفيذ.",
      hero_sub: "قيادة استوديو مع شبكة شركاء موثوقة لضمان الجودة. المقر: أربيل، العراق.",

      case_title: "Special Lady — تطوير متجر تجزئة",
      case_tag: "العراق • تجزئة • إعادة علامة • تجديد • أنظمة",
      case_desc: "إعادة علامة وتوسعة مكانية مع إعادة تصميم معماري وتنسيق التنفيذ ومواءمة الأنظمة التشغيلية.",

      tl_start: "بداية المشروع",
      tl_end: "التسليم الكامل",
      tl_start_val: "أكتوبر 2025",
      tl_end_val: "أبريل 2026",
      view_case: "عرض دراسة الحالة",

      home_section_1_kicker: "تموضع الاستوديو",
      home_section_1_title: "نموذج استوديو يقوده التسليم",
      home_section_1_copy: "يعمل SAMOE STUDIOS في المساحة التي يجب أن تلتقي فيها جودة الفكرة مع انضباط التنفيذ. ويقوم هيكل الاستوديو على التوجيه والتوثيق ومواءمة الموردين وضبط التسليم.",
      home_link_practice: "استكشف الممارسة",

      home_section_2_kicker: "الأعمال المختارة",
      home_section_3_kicker: "المنتجات",
      home_feature_title: "توجيه، هيكلة، مساءلة",
      home_feature_copy: "الاستوديو لا يتموضع كتصميم صور فقط. القيمة الأساسية هي بناء أنظمة مشروع مترابطة يمكن أن تنتقل من الفكرة إلى التنفيذ الحقيقي مع ضبط واضح.",

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

      work_kicker: "الأعمال",
      work_title: "الأعمال",
      work_sub: "دراسة حالة مختارة",
      work_case_desc: "يقود الاستوديو مشروع إعادة العلامة والتوسعة المكانية لـ Special Lady، مع دمج إعادة التصميم المعماري وتنسيق التوسعة ومواءمة الأنظمة التشغيلية.",
      scope_t: "النطاق",
      scope_d: "فكرة، إعادة تصميم، دعم تجديد، وتنسيق التنفيذ.",
      systems_t: "الأنظمة",
      systems_d: "انضباط توثيق، ضبط مشتريات، ومواءمة تشغيلية.",
      outcome_t: "النتيجة",
      outcome_d: "تماسك العلامة، مساءلة تنفيذ، وتحسين تجربة العميل.",
      more_cases: "سيتم نشر المزيد من دراسات الحالة عند اكتمال التوثيق.",

      products_kicker: "المنتجات",
      products_title: "قريباً",
      products_sub: "تجهيزات تجزئة (ستاندات، رفوف، طاولات، كاونترات) وأثاث + إنارة للتجزئة والسكن.",

      contact_kicker: "التواصل",
      contact_title: "استفسار",
      contact_sub: "تواصل مع SAMOE STUDIOS LTD للاستفسارات العامة، مناقشات المشاريع، والعروض التجارية.",
      contact_form_title: "إرسال استفسار",
      contact_form_sub: "املأ بياناتك وأرسل مباشرة من خلال الموقع.",
      contact_general_label: "الاستفسارات العامة",
      contact_general_desc: "للتواصل العام واستفسارات الموقع الإلكتروني.",
      contact_sales_label: "العروض التجارية",
      contact_sales_desc: "لاستفسارات العملاء والعروض التجارية.",
      contact_registered_office: "العنوان المسجل",

      f_department: "نوع الاستفسار",
      f_department_sales: "استفسار عميل / عرض تجاري",
      f_department_info: "استفسار عام",
      f_name: "الاسم",
      f_company: "الشركة",
      f_phone: "رقم الهاتف",
      f_email: "البريد الإلكتروني",
      f_location: "موقع المشروع",
      f_desc: "المشروع / الوصف",
      f_desc_ph: "نطاق مختصر، الموقع، الجدول الزمني، أي قيود...",
      send_inquiry: "إرسال الاستفسار",

      footer_nav_title: "التنقل",
      footer_contact_title: "التواصل",
      footer_social_title: "الحسابات",
      footer_copy: "عمارة، تصميم داخلي، وتسليم — من الفكرة إلى التنفيذ.",
      footer_rights: "© 2025–2026 SAMOE STUDIOS LTD"
    }
  };

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || "en";
    } catch (error) {
      return "en";
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {}
    applyLang(lang);
  }

  function applyLang(lang) {
    const current = dict[lang] || dict.en;
    const isArabic = lang === "ar";

    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", isArabic);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (current[key] !== undefined) {
        el.textContent = current[key];
      }
    });

    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (current[key] !== undefined) {
        el.setAttribute("placeholder", current[key]);
      }
    });
  }

  function initLanguageSwitcher(enButtonId, arButtonId) {
    const enBtn = document.getElementById(enButtonId);
    const arBtn = document.getElementById(arButtonId);

    if (!enBtn || !arBtn) return;

    const updateState = (lang) => {
      enBtn.classList.toggle("active", lang === "en");
      arBtn.classList.toggle("active", lang === "ar");
    };

    const current = getLang();
    updateState(current);

    enBtn.addEventListener("click", () => {
      setLang("en");
      updateState("en");
    });

    arBtn.addEventListener("click", () => {
      setLang("ar");
      updateState("ar");
    });
  }

  window.SAMOE = {
    getLang,
    setLang,
    applyLang,
    initLanguageSwitcher
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(getLang());
  });
})();