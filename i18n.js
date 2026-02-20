(function(){
  const KEY = "samoelang";

  const dict = {
    en: {
      nav_practice: "Practice",
      nav_work: "Work",
      nav_products: "Products",
      nav_contact: "Contact",
      nav_inquiry: "Inquiry",

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

      footer_follow: "Follow",
      footer_rights: "© 2025–2026 SAMOE STUDIOS"
    },
    ar: {
      nav_practice: "الممارسة",
      nav_work: "الأعمال",
      nav_products: "المنتجات",
      nav_contact: "التواصل",
      nav_inquiry: "استفسار",

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

      footer_follow: "تابعنا",
      footer_rights: "© 2025–2026 SAMOE STUDIOS"
    }
  };

  function getLang(){
    return localStorage.getItem(KEY) || null;
  }
  function setLang(lang){
    localStorage.setItem(KEY, lang);
    applyLang(lang);
  }
  function applyLang(lang){
    const d = dict[lang] || dict.en;

    // RTL handling
    const isAR = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isAR ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", isAR);

    // Fill text by data-i18n key
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (d[key] !== undefined) el.textContent = d[key];
    });
  }

  // Public API
  window.SAMOE = { getLang, setLang, applyLang };

  // Gate: if no language chosen, force lang.html (except when already there)
  const lang = getLang();
  const path = (location.pathname.split("/").pop() || "").toLowerCase();
  if (!lang && path !== "lang.html") {
    location.replace("lang.html");
  } else {
    applyLang(lang || "en");
  }
})();