(function () {
  "use strict";

  var STORAGE_KEY = "samoelang";

  var dict = {
    en: {
      nav_practice: "Practice",
      nav_work: "Work",
      nav_products: "Products",
      nav_contact: "Contact",
      nav_inquiry: "Inquiry",
      home_home: "Home",

      gate_title: "Select language",
      gate_sub: "Choose your preferred language to continue.",

      hero_kicker: "MENA-based \u2022 International capability",
      hero_title: "SAMOE STUDIOS",
      hero_slogan: "Architecture, interiors, and delivery \u2014 from concept to execution.",
      hero_sub: "Studio-led accountability with a trusted partner network. Headquarters: Erbil, Iraq.",

      case_title: "Special Lady \u2014 Retail transformation",
      case_tag: "Iraq \u2022 Retail \u2022 Rebrand \u2022 Renovation \u2022 Systems",
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

      studio_strip_headquarters: "Headquarters",
      studio_strip_registered_office: "Registered office",
      studio_strip_focus: "Focus",
      studio_strip_headquarters_value: "Erbil, Iraq",
      studio_strip_registered_office_value: "London, United Kingdom",
      studio_strip_focus_value: "Architecture / Interiors / Delivery",

      practice_kicker: "Practice",
      practice_title: "Practice",
      practice_sub: "MENA-based, able to work internationally. Headquarters: Erbil, Iraq.",

      who_title: "Who we are",
      who_sub: "Studio-led accountability",
      who_p1: "SAMOE STUDIOS is a multidisciplinary architectural and delivery practice. We lead projects from early planning through design development, documentation, procurement, and implementation\u2014combining studio-led direction with a vetted execution network to control quality and outcomes.",
      who_p2: "We operate across retail, residential, commercial, and institutional work\u2014engaging where we can bring structure, spatial intelligence, and delivery discipline.",

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
      d1: "01 \u2014 Discovery: Objectives, constraints, budget logic, timeline, success KPIs.",
      d2: "02 \u2014 Design + Documentation: Concept \u2192 detailed design, BOQ alignment, technical packages, execution clarity.",
      d3: "03 \u2014 Procurement + Partners: Supplier strategy, approvals, and partner selection under SAMOE standards.",
      d4: "04 \u2014 Implementation + QA: Site coordination, inspections, punch lists, handover \u2014 measurable quality control.",

      delivery_step_1_title: "Discovery",
      delivery_step_2_title: "Design + Documentation",
      delivery_step_3_title: "Procurement + Partners",
      delivery_step_4_title: "Implementation + QA",

      name_title: "The name",
      name_sub: "SAMOE (pronounced \u201CSah-moe\u201D)",
      name_p: "SAMOE is intentionally not an acronym. It functions as a studio mark\u2014adaptable across sectors, places, and project scales.",

      work_kicker: "Work",
      work_title: "Work",
      work_sub: "Selected case study",
      work_case_desc: "The studio is leading the rebrand and spatial expansion of Special Lady, integrating architectural redesign, expansion coordination, and operational systems alignment.",

      work_meta_client: "Client",
      work_meta_sector: "Sector",
      work_meta_location: "Location",
      work_meta_type: "Type",
      work_meta_sector_value: "Retail",
      work_meta_location_value: "Erbil, Iraq",
      work_meta_type_value: "Rebrand / Renovation / Systems",

      scope_t: "Scope",
      scope_d: "Concept, redesign, renovation support, implementation coordination.",
      systems_t: "Systems",
      systems_d: "Documentation discipline, procurement control, operational alignment.",
      outcome_t: "Outcome",
      outcome_d: "Brand coherence, execution accountability, improved customer experience.",
      more_cases: "More case studies will be published as documentation is finalized.",

      gallery_kicker: "Documentation",
      gallery_title: "Project gallery",

      products_kicker: "Products",
      products_title: "Coming soon",
      products_sub: "Retail fixtures (racks, shelves, tables, counters) and furniture + lighting for retail and residential environments.",
      products_panel_label: "Planned categories",
      products_status_label: "Status",
      products_status_title: "Product line in development",
      products_status_copy: "This section will expand as the studio formalizes product design, sourcing, and rollout readiness.",
      products_cat_1: "Retail fixtures",
      products_cat_2: "Display systems",
      products_cat_3: "Counters and tables",
      products_cat_4: "Shelving and storage",
      products_cat_5: "Furniture",
      products_cat_6: "Lighting",

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
      footer_copy: "Architecture, interiors, and delivery \u2014 from concept to execution.",
      footer_rights: "\u00A9 2025\u20132026 SAMOE STUDIOS LTD"
    },

    ar: {
      nav_practice: "\u0627\u0644\u0645\u0645\u0627\u0631\u0633\u0629",
      nav_work: "\u0627\u0644\u0623\u0639\u0645\u0627\u0644",
      nav_products: "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",
      nav_contact: "\u0627\u0644\u062A\u0648\u0627\u0635\u0644",
      nav_inquiry: "\u0627\u0633\u062A\u0641\u0633\u0627\u0631",
      home_home: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",

      gate_title: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0644\u063A\u0629",
      gate_sub: "\u0627\u062E\u062A\u0631 \u0644\u063A\u062A\u0643 \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u0629.",

      hero_kicker: "\u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637 \u0648\u0634\u0645\u0627\u0644 \u0623\u0641\u0631\u064A\u0642\u064A\u0627 \u2022 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0639\u0645\u0644 \u062F\u0648\u0644\u064A\u0627\u064B",
      hero_title: "SAMOE STUDIOS",
      hero_slogan: "\u0639\u0645\u0627\u0631\u0629\u060C \u062A\u0635\u0645\u064A\u0645 \u062F\u0627\u062E\u0644\u064A\u060C \u0648\u062A\u0633\u0644\u064A\u0645 \u2014 \u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0625\u0644\u0649 \u0627\u0644\u062A\u0646\u0641\u064A\u0630.",
      hero_sub: "\u0642\u064A\u0627\u062F\u0629 \u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0645\u0639 \u0634\u0628\u0643\u0629 \u0634\u0631\u0643\u0627\u0621 \u0645\u0648\u062B\u0648\u0642\u0629 \u0644\u0636\u0645\u0627\u0646 \u0627\u0644\u062C\u0648\u062F\u0629. \u0627\u0644\u0645\u0642\u0631: \u0623\u0631\u0628\u064A\u0644\u060C \u0627\u0644\u0639\u0631\u0627\u0642.",

      case_title: "Special Lady \u2014 \u062A\u0637\u0648\u064A\u0631 \u0645\u062A\u062C\u0631 \u062A\u062C\u0632\u0626\u0629",
      case_tag: "\u0627\u0644\u0639\u0631\u0627\u0642 \u2022 \u062A\u062C\u0632\u0626\u0629 \u2022 \u0625\u0639\u0627\u062F\u0629 \u0639\u0644\u0627\u0645\u0629 \u2022 \u062A\u062C\u062F\u064A\u062F \u2022 \u0623\u0646\u0638\u0645\u0629",
      case_desc: "\u0625\u0639\u0627\u062F\u0629 \u0639\u0644\u0627\u0645\u0629 \u0648\u062A\u0648\u0633\u0639\u0629 \u0645\u0643\u0627\u0646\u064A\u0629 \u0645\u0639 \u0625\u0639\u0627\u062F\u0629 \u062A\u0635\u0645\u064A\u0645 \u0645\u0639\u0645\u0627\u0631\u064A \u0648\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0648\u0645\u0648\u0627\u0621\u0645\u0629 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629.",

      tl_start: "\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
      tl_end: "\u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",
      tl_start_val: "\u0623\u0643\u062A\u0648\u0628\u0631 2025",
      tl_end_val: "\u0623\u0628\u0631\u064A\u0644 2026",
      view_case: "\u0639\u0631\u0636 \u062F\u0631\u0627\u0633\u0629 \u0627\u0644\u062D\u0627\u0644\u0629",

      home_section_1_kicker: "\u062A\u0645\u0648\u0636\u0639 \u0627\u0644\u0627\u0633\u062A\u0648\u062F\u064A\u0648",
      home_section_1_title: "\u0646\u0645\u0648\u0630\u062C \u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u064A\u0642\u0648\u062F\u0647 \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
      home_section_1_copy: "\u064A\u0639\u0645\u0644 SAMOE STUDIOS \u0641\u064A \u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u062A\u064A \u064A\u062C\u0628 \u0623\u0646 \u062A\u0644\u062A\u0642\u064A \u0641\u064A\u0647\u0627 \u062C\u0648\u062F\u0629 \u0627\u0644\u0641\u0643\u0631\u0629 \u0645\u0639 \u0627\u0646\u0636\u0628\u0627\u0637 \u0627\u0644\u062A\u0646\u0641\u064A\u0630. \u0648\u064A\u0642\u0648\u0645 \u0647\u064A\u0643\u0644 \u0627\u0644\u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0639\u0644\u0649 \u0627\u0644\u062A\u0648\u062C\u064A\u0647 \u0648\u0627\u0644\u062A\u0648\u062B\u064A\u0642 \u0648\u0645\u0648\u0627\u0621\u0645\u0629 \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646 \u0648\u0636\u0628\u0637 \u0627\u0644\u062A\u0633\u0644\u064A\u0645.",
      home_link_practice: "\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0645\u0645\u0627\u0631\u0633\u0629",

      home_section_2_kicker: "\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629",
      home_section_3_kicker: "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",
      home_feature_title: "\u062A\u0648\u062C\u064A\u0647\u060C \u0647\u064A\u0643\u0644\u0629\u060C \u0645\u0633\u0627\u0621\u0644\u0629",
      home_feature_copy: "\u0627\u0644\u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0644\u0627 \u064A\u062A\u0645\u0648\u0636\u0639 \u0643\u062A\u0635\u0645\u064A\u0645 \u0635\u0648\u0631 \u0641\u0642\u0637. \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0647\u064A \u0628\u0646\u0627\u0621 \u0623\u0646\u0638\u0645\u0629 \u0645\u0634\u0631\u0648\u0639 \u0645\u062A\u0631\u0627\u0628\u0637\u0629 \u064A\u0645\u0643\u0646 \u0623\u0646 \u062A\u0646\u062A\u0642\u0644 \u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0625\u0644\u0649 \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u062D\u0642\u064A\u0642\u064A \u0645\u0639 \u0636\u0628\u0637 \u0648\u0627\u0636\u062D.",

      studio_strip_headquarters: "\u0627\u0644\u0645\u0642\u0631",
      studio_strip_registered_office: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0633\u062C\u0644",
      studio_strip_focus: "\u0627\u0644\u062A\u0631\u0643\u064A\u0632",
      studio_strip_headquarters_value: "\u0623\u0631\u0628\u064A\u0644\u060C \u0627\u0644\u0639\u0631\u0627\u0642",
      studio_strip_registered_office_value: "\u0644\u0646\u062F\u0646\u060C \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629",
      studio_strip_focus_value: "\u0639\u0645\u0627\u0631\u0629 / \u062A\u0635\u0645\u064A\u0645 \u062F\u0627\u062E\u0644\u064A / \u062A\u0633\u0644\u064A\u0645",

      practice_kicker: "\u0627\u0644\u0645\u0645\u0627\u0631\u0633\u0629",
      practice_title: "\u0627\u0644\u0645\u0645\u0627\u0631\u0633\u0629",
      practice_sub: "\u0645\u0642\u0631\u0651\u0646\u0627 \u0641\u064A \u0623\u0631\u0628\u064A\u0644\u060C \u0627\u0644\u0639\u0631\u0627\u0642. \u0646\u062D\u0646 \u0645\u062A\u0645\u0631\u0643\u0632\u0648\u0646 \u0641\u064A \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637 \u0648\u0634\u0645\u0627\u0644 \u0623\u0641\u0631\u064A\u0642\u064A\u0627 \u0645\u0639 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0639\u0645\u0644 \u062F\u0648\u0644\u064A\u0627\u064B.",

      who_title: "\u0645\u0646 \u0646\u062D\u0646",
      who_sub: "\u0645\u0633\u0627\u0621\u0644\u0629 \u064A\u0642\u0648\u062F\u0647\u0627 \u0627\u0644\u0627\u0633\u062A\u0648\u062F\u064A\u0648",
      who_p1: "SAMOE STUDIOS \u0645\u0645\u0627\u0631\u0633\u0629 \u0645\u062A\u0639\u062F\u062F\u0629 \u0627\u0644\u062A\u062E\u0635\u0635\u0627\u062A \u0641\u064A \u0627\u0644\u0639\u0645\u0627\u0631\u0629 \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645. \u0646\u0642\u0648\u062F \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0646 \u0627\u0644\u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0645\u0628\u0643\u0631 \u0645\u0631\u0648\u0631\u0627\u064B \u0628\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u0644\u062A\u0648\u062B\u064A\u0642 \u0648\u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u2014 \u0645\u0639 \u0642\u064A\u0627\u062F\u0629 \u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0648\u0634\u0628\u0643\u0629 \u062A\u0646\u0641\u064A\u0630 \u0645\u0648\u062B\u0648\u0642\u0629 \u0644\u0636\u0628\u0637 \u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u0646\u062A\u0627\u0626\u062C.",
      who_p2: "\u0646\u0639\u0645\u0644 \u0639\u0628\u0631 \u0627\u0644\u062A\u062C\u0632\u0626\u0629 \u0648\u0627\u0644\u0633\u0643\u0646\u064A \u0648\u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0648\u0627\u0644\u0645\u0624\u0633\u0633\u064A \u2014 \u0648\u0646\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u062A\u064A \u0646\u0633\u062A\u0637\u064A\u0639 \u0641\u064A\u0647\u0627 \u062A\u0642\u062F\u064A\u0645 \u0647\u064A\u0643\u0644\u0629 \u0648\u0627\u0636\u062D\u0629 \u0648\u0630\u0643\u0627\u0621 \u0645\u0643\u0627\u0646\u064A \u0648\u0627\u0646\u0636\u0628\u0627\u0637 \u0641\u064A \u0627\u0644\u062A\u0633\u0644\u064A\u0645.",

      offer_title: "\u0645\u0627\u0630\u0627 \u0646\u0642\u062F\u0645",
      offer_sub: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",
      s1_t: "\u0639\u0645\u0627\u0631\u0629 + \u062A\u0635\u0645\u064A\u0645 \u062F\u0627\u062E\u0644\u064A",
      s1_d: "\u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0625\u0644\u0649 \u062A\u0635\u0645\u064A\u0645 \u062A\u0641\u0635\u064A\u0644\u064A \u062C\u0627\u0647\u0632 \u0644\u0644\u062A\u0646\u0641\u064A\u0630.",
      s2_t: "\u062A\u0635\u0645\u064A\u0645 \u062A\u062C\u0632\u0626\u0629 + \u0623\u0646\u0638\u0645\u0629 \u062A\u0634\u063A\u064A\u0644",
      s2_d: "\u0641\u0631\u0648\u0639 \u0631\u0626\u064A\u0633\u064A\u0629\u060C \u062A\u0648\u0633\u0639\u0627\u062A\u060C \u062A\u062C\u062F\u064A\u062F\u0627\u062A\u060C \u0648\u0645\u0648\u0627\u0621\u0645\u0629 \u062A\u0634\u063A\u064A\u0644\u064A\u0629.",
      s3_t: "\u062A\u0646\u0641\u064A\u0630 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629",
      s3_d: "\u0631\u0628\u0637 \u0647\u0648\u064A\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0628\u0627\u0644\u0645\u0643\u0627\u0646 \u0648\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u0627\u0644\u062A\u062C\u0631\u0628\u0629.",
      s4_t: "\u062A\u0648\u062B\u064A\u0642 \u0641\u0646\u064A + BOQ",
      s4_d: "\u062D\u0632\u0645 \u062A\u0646\u0641\u064A\u0630\u064A\u0629 \u0648\u062A\u0648\u0627\u0641\u0642 BOQ \u0644\u0636\u0645\u0627\u0646 \u062C\u0627\u0647\u0632\u064A\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630.",
      s5_t: "\u0645\u0634\u062A\u0631\u064A\u0627\u062A + \u0625\u062F\u0627\u0631\u0629 \u0645\u0648\u0631\u062F\u064A\u0646",
      s5_d: "\u0627\u0639\u062A\u0645\u0627\u062F\u0627\u062A \u0645\u0648\u0627\u062F\u060C \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0645\u0648\u0631\u062F\u064A\u0646\u060C \u0648\u062A\u0648\u0631\u064A\u062F \u0645\u0636\u0628\u0648\u0637 \u0627\u0644\u062C\u0648\u062F\u0629.",
      s6_t: "\u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0639\u0628\u0631 \u0634\u0628\u0643\u0629 \u0634\u0631\u0643\u0627\u0621",
      s6_d: "\u062A\u0634\u0637\u064A\u0628\u0627\u062A\u060C \u0646\u062C\u0627\u0631\u0629\u060C \u0625\u0646\u0627\u0631\u0629\u060C \u0644\u0627\u0641\u062A\u0627\u062A\u060C MEP\u060C \u0648\u062A\u0646\u0641\u064A\u0630 \u0623\u0646\u0638\u0645\u0629 \u0648\u0641\u0642 \u0645\u0639\u0627\u064A\u064A\u0631 SAMOE.",

      delivery_title: "\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
      delivery_sub: "\u0643\u064A\u0641 \u0646\u0646\u0641\u0630",
      d1: "01 \u2014 \u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641: \u0627\u0644\u0623\u0647\u062F\u0627\u0641\u060C \u0627\u0644\u0642\u064A\u0648\u062F\u060C \u0645\u0646\u0637\u0642 \u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629\u060C \u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A\u060C \u0648\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0646\u062C\u0627\u062D.",
      d2: "02 \u2014 \u0627\u0644\u062A\u0635\u0645\u064A\u0645 + \u0627\u0644\u062A\u0648\u062B\u064A\u0642: \u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0625\u0644\u0649 \u062A\u0635\u0645\u064A\u0645 \u062A\u0641\u0635\u064A\u0644\u064A\u060C \u062A\u0648\u0627\u0641\u0642 BOQ\u060C \u062D\u0632\u0645 \u0641\u0646\u064A\u0629\u060C \u0648\u0636\u0648\u062D \u0627\u0644\u062A\u0646\u0641\u064A\u0630.",
      d3: "03 \u2014 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A + \u0627\u0644\u0634\u0631\u0643\u0627\u0621: \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646\u060C \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F\u0627\u062A\u060C \u0648\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0648\u0641\u0642 \u0645\u0639\u0627\u064A\u064A\u0631 SAMOE.",
      d4: "04 \u2014 \u0627\u0644\u062A\u0646\u0641\u064A\u0630 + \u0636\u0645\u0627\u0646 \u0627\u0644\u062C\u0648\u062F\u0629: \u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0645\u0648\u0642\u0639\u060C \u0641\u062D\u0648\u0635\u0627\u062A\u060C \u0642\u0648\u0627\u0626\u0645 \u0645\u0644\u0627\u062D\u0638\u0627\u062A\u060C \u062A\u0633\u0644\u064A\u0645 \u2014 \u0645\u0639 \u0636\u0628\u0637 \u062C\u0648\u062F\u0629 \u0642\u0627\u0628\u0644 \u0644\u0644\u0642\u064A\u0627\u0633.",

      delivery_step_1_title: "\u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641",
      delivery_step_2_title: "\u0627\u0644\u062A\u0635\u0645\u064A\u0645 + \u0627\u0644\u062A\u0648\u062B\u064A\u0642",
      delivery_step_3_title: "\u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A + \u0627\u0644\u0634\u0631\u0643\u0627\u0621",
      delivery_step_4_title: "\u0627\u0644\u062A\u0646\u0641\u064A\u0630 + \u0636\u0645\u0627\u0646 \u0627\u0644\u062C\u0648\u062F\u0629",

      name_title: "\u0627\u0644\u0627\u0633\u0645",
      name_sub: "SAMOE (\u062A\u064F\u0646\u0637\u0642: \u0633\u0627-\u0645\u0648)",
      name_p: "SAMOE \u0644\u064A\u0633 \u0627\u062E\u062A\u0635\u0627\u0631\u0627\u064B. \u0647\u0648 \u0639\u0644\u0627\u0645\u0629 \u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0643\u064A\u0641 \u0639\u0628\u0631 \u0627\u0644\u0642\u0637\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u0623\u0645\u0627\u0643\u0646 \u0648\u062D\u062C\u0645 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639.",

      work_kicker: "\u0627\u0644\u0623\u0639\u0645\u0627\u0644",
      work_title: "\u0627\u0644\u0623\u0639\u0645\u0627\u0644",
      work_sub: "\u062F\u0631\u0627\u0633\u0629 \u062D\u0627\u0644\u0629 \u0645\u062E\u062A\u0627\u0631\u0629",
      work_case_desc: "\u064A\u0642\u0648\u062F \u0627\u0644\u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0645\u0634\u0631\u0648\u0639 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0648\u0627\u0644\u062A\u0648\u0633\u0639\u0629 \u0627\u0644\u0645\u0643\u0627\u0646\u064A\u0629 \u0644\u0640 Special Lady\u060C \u0645\u0639 \u062F\u0645\u062C \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064A \u0648\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u062A\u0648\u0633\u0639\u0629 \u0648\u0645\u0648\u0627\u0621\u0645\u0629 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629.",

      work_meta_client: "\u0627\u0644\u0639\u0645\u064A\u0644",
      work_meta_sector: "\u0627\u0644\u0642\u0637\u0627\u0639",
      work_meta_location: "\u0627\u0644\u0645\u0648\u0642\u0639",
      work_meta_type: "\u0627\u0644\u0646\u0648\u0639",
      work_meta_sector_value: "\u062A\u062C\u0632\u0626\u0629",
      work_meta_location_value: "\u0623\u0631\u0628\u064A\u0644\u060C \u0627\u0644\u0639\u0631\u0627\u0642",
      work_meta_type_value: "\u0625\u0639\u0627\u062F\u0629 \u0639\u0644\u0627\u0645\u0629 / \u062A\u062C\u062F\u064A\u062F / \u0623\u0646\u0638\u0645\u0629",

      scope_t: "\u0627\u0644\u0646\u0637\u0627\u0642",
      scope_d: "\u0641\u0643\u0631\u0629\u060C \u0625\u0639\u0627\u062F\u0629 \u062A\u0635\u0645\u064A\u0645\u060C \u062F\u0639\u0645 \u062A\u062C\u062F\u064A\u062F\u060C \u0648\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u062A\u0646\u0641\u064A\u0630.",
      systems_t: "\u0627\u0644\u0623\u0646\u0638\u0645\u0629",
      systems_d: "\u0627\u0646\u0636\u0628\u0627\u0637 \u062A\u0648\u062B\u064A\u0642\u060C \u0636\u0628\u0637 \u0645\u0634\u062A\u0631\u064A\u0627\u062A\u060C \u0648\u0645\u0648\u0627\u0621\u0645\u0629 \u062A\u0634\u063A\u064A\u0644\u064A\u0629.",
      outcome_t: "\u0627\u0644\u0646\u062A\u064A\u062C\u0629",
      outcome_d: "\u062A\u0645\u0627\u0633\u0643 \u0627\u0644\u0639\u0644\u0627\u0645\u0629\u060C \u0645\u0633\u0627\u0621\u0644\u0629 \u062A\u0646\u0641\u064A\u0630\u060C \u0648\u062A\u062D\u0633\u064A\u0646 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0639\u0645\u064A\u0644.",
      more_cases: "\u0633\u064A\u062A\u0645 \u0646\u0634\u0631 \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u062F\u0631\u0627\u0633\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u0629 \u0639\u0646\u062F \u0627\u0643\u062A\u0645\u0627\u0644 \u0627\u0644\u062A\u0648\u062B\u064A\u0642.",

      gallery_kicker: "\u0627\u0644\u062A\u0648\u062B\u064A\u0642",
      gallery_title: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",

      products_kicker: "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",
      products_title: "\u0642\u0631\u064A\u0628\u0627\u064B",
      products_sub: "\u062A\u062C\u0647\u064A\u0632\u0627\u062A \u062A\u062C\u0632\u0626\u0629 (\u0633\u062A\u0627\u0646\u062F\u0627\u062A\u060C \u0631\u0641\u0648\u0641\u060C \u0637\u0627\u0648\u0644\u0627\u062A\u060C \u0643\u0627\u0648\u0646\u062A\u0631\u0627\u062A) \u0648\u0623\u062B\u0627\u062B + \u0625\u0646\u0627\u0631\u0629 \u0644\u0644\u062A\u062C\u0632\u0626\u0629 \u0648\u0627\u0644\u0633\u0643\u0646.",
      products_panel_label: "\u0627\u0644\u0641\u0626\u0627\u062A \u0627\u0644\u0645\u062E\u0637\u0637\u0629",
      products_status_label: "\u0627\u0644\u062D\u0627\u0644\u0629",
      products_status_title: "\u062E\u0637 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0642\u064A\u062F \u0627\u0644\u062A\u0637\u0648\u064A\u0631",
      products_status_copy: "\u0633\u064A\u062A\u0648\u0633\u0639 \u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645 \u0645\u0639 \u0627\u0633\u062A\u0643\u0645\u0627\u0644 \u0627\u0644\u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A\u060C \u0648\u0627\u0644\u062A\u0648\u0631\u064A\u062F\u060C \u0648\u0627\u0644\u0627\u0633\u062A\u0639\u062F\u0627\u062F \u0644\u0644\u0637\u0631\u062D \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630.",
      products_cat_1: "\u062A\u062C\u0647\u064A\u0632\u0627\u062A \u062A\u062C\u0632\u0626\u0629",
      products_cat_2: "\u0623\u0646\u0638\u0645\u0629 \u0639\u0631\u0636",
      products_cat_3: "\u0643\u0627\u0648\u0646\u062A\u0631\u0627\u062A \u0648\u0637\u0627\u0648\u0644\u0627\u062A",
      products_cat_4: "\u0631\u0641\u0648\u0641 \u0648\u062A\u062E\u0632\u064A\u0646",
      products_cat_5: "\u0623\u062B\u0627\u062B",
      products_cat_6: "\u0625\u0646\u0627\u0631\u0629",

      contact_kicker: "\u0627\u0644\u062A\u0648\u0627\u0635\u0644",
      contact_title: "\u0627\u0633\u062A\u0641\u0633\u0627\u0631",
      contact_sub: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 SAMOE STUDIOS LTD \u0644\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629\u060C \u0645\u0646\u0627\u0642\u0634\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639\u060C \u0648\u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629.",
      contact_form_title: "\u0625\u0631\u0633\u0627\u0644 \u0627\u0633\u062A\u0641\u0633\u0627\u0631",
      contact_form_sub: "\u0627\u0645\u0644\u0623 \u0628\u064A\u0627\u0646\u0627\u062A\u0643 \u0648\u0623\u0631\u0633\u0644 \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0645\u0648\u0642\u0639.",
      contact_general_label: "\u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629",
      contact_general_desc: "\u0644\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0639\u0627\u0645 \u0648\u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A.",
      contact_sales_label: "\u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629",
      contact_sales_desc: "\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629.",
      contact_registered_office: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0633\u062C\u0644",

      f_department: "\u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631",
      f_department_sales: "\u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0639\u0645\u064A\u0644 / \u0639\u0631\u0636 \u062A\u062C\u0627\u0631\u064A",
      f_department_info: "\u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0639\u0627\u0645",
      f_name: "\u0627\u0644\u0627\u0633\u0645",
      f_company: "\u0627\u0644\u0634\u0631\u0643\u0629",
      f_phone: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
      f_email: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
      f_location: "\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
      f_desc: "\u0627\u0644\u0645\u0634\u0631\u0648\u0639 / \u0627\u0644\u0648\u0635\u0641",
      f_desc_ph: "\u0646\u0637\u0627\u0642 \u0645\u062E\u062A\u0635\u0631\u060C \u0627\u0644\u0645\u0648\u0642\u0639\u060C \u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A\u060C \u0623\u064A \u0642\u064A\u0648\u062F...",
      send_inquiry: "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631",

      footer_nav_title: "\u0627\u0644\u062A\u0646\u0642\u0644",
      footer_contact_title: "\u0627\u0644\u062A\u0648\u0627\u0635\u0644",
      footer_social_title: "\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A",
      footer_copy: "\u0639\u0645\u0627\u0631\u0629\u060C \u062A\u0635\u0645\u064A\u0645 \u062F\u0627\u062E\u0644\u064A\u060C \u0648\u062A\u0633\u0644\u064A\u0645 \u2014 \u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0625\u0644\u0649 \u0627\u0644\u062A\u0646\u0641\u064A\u0630.",
      footer_rights: "\u00A9 2025\u20132026 SAMOE STUDIOS LTD"
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
    var current = dict[lang] || dict.en;
    var isArabic = lang === "ar";

    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", isArabic);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (current[key] !== undefined) {
        el.textContent = current[key];
      }
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (current[key] !== undefined) {
        el.setAttribute("placeholder", current[key]);
      }
    });
  }

  function initLanguageSwitcher(enButtonId, arButtonId) {
    var enBtn = document.getElementById(enButtonId);
    var arBtn = document.getElementById(arButtonId);

    if (!enBtn || !arBtn) return;

    var updateState = function (lang) {
      enBtn.classList.toggle("active", lang === "en");
      arBtn.classList.toggle("active", lang === "ar");
    };

    var current = getLang();
    updateState(current);

    enBtn.addEventListener("click", function () {
      setLang("en");
      updateState("en");
    });

    arBtn.addEventListener("click", function () {
      setLang("ar");
      updateState("ar");
    });
  }

  window.SAMOE = {
    getLang: getLang,
    setLang: setLang,
    applyLang: applyLang,
    initLanguageSwitcher: initLanguageSwitcher
  };

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getLang());
  });
})();
