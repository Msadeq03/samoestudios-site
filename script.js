(function () {
  "use strict";

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */
  function initReveal() {
    const items = document.querySelectorAll(".reveal, .stagger");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(el => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

    items.forEach(el => io.observe(el));
  }

  /* ============================================================
     HEADER SCROLL STATE
     ============================================================ */
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const handler = () => {
      header.classList.toggle("scrolled", window.scrollY > 24);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
  }

  /* ============================================================
     MOBILE NAV
     ============================================================ */
  function initMobileNav() {
    const headerInner = document.querySelector(".site-header-inner");
    const nav = document.querySelector(".site-nav");
    if (!headerInner || !nav) return;
    if (document.querySelector(".nav-toggle")) return; // already injected

    // Build toggle button
    const toggle = document.createElement("button");
    toggle.className = "nav-toggle";
    toggle.setAttribute("aria-label", "Toggle navigation");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span></span><span></span><span></span>";

    // Insert before header-tools (or append)
    const tools = headerInner.querySelector(".header-tools");
    tools ? headerInner.insertBefore(toggle, tools) : headerInner.appendChild(toggle);

    // Clone lang switch into mobile nav
    const langSwitch = headerInner.querySelector(".lang-switch");
    if (langSwitch) {
      const mobileSwitch = langSwitch.cloneNode(true);
      mobileSwitch.id = "mobileLangSwitch";
      mobileSwitch.style.cssText = "margin-top:24px;";
      nav.appendChild(mobileSwitch);

      const [mEN, mAR] = mobileSwitch.querySelectorAll("button");
      const [rEN, rAR] = langSwitch.querySelectorAll("button");
      mEN?.addEventListener("click", () => rEN?.click());
      mAR?.addEventListener("click", () => rAR?.click());
    }

    let open = false;

    const open_ = () => {
      open = true;
      nav.classList.add("is-open");
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };

    const close_ = () => {
      open = false;
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    toggle.addEventListener("click", () => open ? close_() : open_());
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", close_));
    document.addEventListener("keydown", e => e.key === "Escape" && open && close_());
    window.addEventListener("resize", () => window.innerWidth > 760 && open && close_());
  }

  /* ============================================================
     ACTIVE NAV LINK
     ============================================================ */
  function initActiveNav() {
    const page = window.location.pathname.split("/").pop() || "home.html";
    document.querySelectorAll(".site-nav a").forEach(link => {
      const href = (link.getAttribute("href") || "").replace("./", "");
      if (href === page) link.classList.add("active");
    });
  }

  /* ============================================================
     CONTACT FORM
     ============================================================ */
  function initInquiryForm() {
    const form = document.getElementById("inquiryForm");
    if (!form) return;

    const statusBox = document.getElementById("formStatus");
    const submitBtn = document.getElementById("submitInquiry");
    const phoneEl   = document.getElementById("phone");
    const fullPhone = document.getElementById("full_phone");

    let iti = null;

    if (phoneEl && window.intlTelInput) {
      iti = window.intlTelInput(phoneEl, {
        initialCountry: "iq",
        separateDialCode: true,
        nationalMode: false,
        strictMode: true,
        formatOnDisplay: true,
        autoPlaceholder: "aggressive",
        loadUtils: () =>
          import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/js/utils.js")
      });
    }

    const lang = () => window.SAMOE?.getLang?.() ?? (localStorage.getItem("samoelang") || "en");

    const msg = (en, ar) => lang() === "ar" ? ar : en;

    function setStatus(type, text) {
      if (!statusBox) return;
      statusBox.className = `form-status ${type || ""}`.trim();
      statusBox.textContent = text;
      if (text) statusBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // Visual feedback on blur
    form.querySelectorAll("input[required], textarea[required], select[required]").forEach(el => {
      el.addEventListener("blur", () => {
        el.style.borderColor = (!el.value.trim()) ? "rgba(224,92,92,0.50)" : "";
      });
      el.addEventListener("input", () => { el.style.borderColor = ""; });
    });

    form.addEventListener("submit", async e => {
      e.preventDefault();

      const phone = iti ? iti.getNumber() : (phoneEl?.value ?? "");
      if (fullPhone) fullPhone.value = phone.trim();

      const fd = new FormData(form);
      const p = {
        department:     String(fd.get("department") || "").trim(),
        name:           String(fd.get("name") || "").trim(),
        company:        String(fd.get("company") || "").trim(),
        phone:          phone.trim(),
        email:          String(fd.get("email") || "").trim(),
        location:       String(fd.get("location") || "").trim(),
        description:    String(fd.get("description") || "").trim(),
        website:        String(fd.get("website") || "").trim(),
        turnstileToken: String(fd.get("turnstileToken") || "").trim()
      };

      if (!p.department || !p.name || !p.company || !p.phone || !p.email || !p.location || !p.description) {
        setStatus("error", msg("Please complete all required fields.", "يرجى إكمال جميع الحقول المطلوبة."));
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) {
        setStatus("error", msg("Please enter a valid email address.", "يرجى إدخال بريد إلكتروني صحيح."));
        return;
      }

      if (iti) {
        try {
          if (iti.promise) await iti.promise;
          if (!iti.isValidNumber()) {
            setStatus("error", msg("Please enter a valid phone number.", "يرجى إدخال رقم هاتف صحيح."));
            return;
          }
        } catch {
          setStatus("error", msg("Could not validate phone number.", "حدث خطأ في التحقق من رقم الهاتف."));
          return;
        }
      }

      if (!p.turnstileToken) {
        setStatus("error", msg("Please complete the security check.", "يرجى إكمال التحقق الأمني."));
        return;
      }

      try {
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = msg("Submitting…", "جارٍ الإرسال…");
        }

        setStatus("", msg("Sending your inquiry…", "جارٍ إرسال الاستفسار…"));

        const res  = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(p)
        });

        const data = await res.json();
        if (!res.ok || !data.ok) throw new Error(data.message || "Request failed");

        setStatus("success", msg(
          "Your inquiry has been submitted successfully. We'll be in touch shortly.",
          "تم إرسال الاستفسار بنجاح. سنتواصل معك قريباً."
        ));

        form.reset();
        iti?.setCountry("iq");
        window.turnstile?.reset();

      } catch (err) {
        setStatus("error", err.message ||
          msg("Something went wrong. Please try again.", "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."));
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          window.SAMOE?.applyLang?.(lang());
        }
      }
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  document.addEventListener("DOMContentLoaded", () => {
    initReveal();
    initHeaderScroll();
    initMobileNav();
    initActiveNav();
    initInquiryForm();
  });
})();
