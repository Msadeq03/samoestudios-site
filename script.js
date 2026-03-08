(function () {
  "use strict";

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.10, rootMargin: "0px 0px -32px 0px" }
    );

    items.forEach((item) => observer.observe(item));
  }

  /* ============================================================
     MOBILE NAV TOGGLE
     ============================================================ */
  function initMobileNav() {
    // Inject toggle button into header if not already present
    const headerInner = document.querySelector(".site-header-inner");
    const nav = document.querySelector(".site-nav");
    if (!headerInner || !nav) return;

    // Don't add twice
    if (document.querySelector(".nav-toggle")) return;

    const toggle = document.createElement("button");
    toggle.className = "nav-toggle";
    toggle.setAttribute("aria-label", "Toggle navigation");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = `<span></span><span></span><span></span>`;

    // Insert before header-tools
    const headerTools = headerInner.querySelector(".header-tools");
    if (headerTools) {
      headerInner.insertBefore(toggle, headerTools);
    } else {
      headerInner.appendChild(toggle);
    }

    // Also inject lang switch into nav for mobile
    const langSwitch = headerInner.querySelector(".lang-switch");
    if (langSwitch) {
      const mobileLang = langSwitch.cloneNode(true);
      mobileLang.className = "lang-switch header-tools-mobile-lang";
      mobileLang.id = "mobileLangSwitch";
      nav.appendChild(mobileLang);

      // Sync mobile lang buttons with the real ones
      const [mEN, mAR] = mobileLang.querySelectorAll("button");
      const [rEN, rAR] = langSwitch.querySelectorAll("button");
      if (mEN && rEN) {
        mEN.addEventListener("click", () => rEN.click());
      }
      if (mAR && rAR) {
        mAR.addEventListener("click", () => rAR.click());
      }
    }

    let isOpen = false;

    function openNav() {
      isOpen = true;
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      // Animate hamburger to X
      const spans = toggle.querySelectorAll("span");
      if (spans[0]) spans[0].style.transform = "rotate(45deg) translate(4px, 4px)";
      if (spans[1]) spans[1].style.opacity = "0";
      if (spans[2]) spans[2].style.transform = "rotate(-45deg) translate(4px, -4px)";
    }

    function closeNav() {
      isOpen = false;
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      const spans = toggle.querySelectorAll("span");
      if (spans[0]) spans[0].style.transform = "";
      if (spans[1]) spans[1].style.opacity = "";
      if (spans[2]) spans[2].style.transform = "";
    }

    toggle.addEventListener("click", () => {
      isOpen ? closeNav() : openNav();
    });

    // Close on nav link click
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) closeNav();
    });

    // Close on resize back to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760 && isOpen) closeNav();
    });
  }

  /* ============================================================
     ACTIVE NAV LINK
     ============================================================ */
  function initActiveNav() {
    const currentPath = window.location.pathname.split("/").pop() || "home.html";
    document.querySelectorAll(".site-nav a").forEach((link) => {
      const href = (link.getAttribute("href") || "").replace("./", "");
      if (href === currentPath) {
        link.style.color = "var(--navy)";
        link.style.fontWeight = "900";
      }
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
    const phoneInput = document.getElementById("phone");
    const fullPhoneInput = document.getElementById("full_phone");

    let iti = null;

    if (phoneInput && window.intlTelInput) {
      iti = window.intlTelInput(phoneInput, {
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

    function getCurrentLang() {
      return window.SAMOE?.getLang
        ? window.SAMOE.getLang()
        : (localStorage.getItem("samoelang") || "en");
    }

    function setStatus(type, message) {
      if (!statusBox) return;
      statusBox.className = `form-status ${type || ""}`.trim();
      statusBox.textContent = message;
      if (message && statusBox.scrollIntoView) {
        statusBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    function getPhoneValue() {
      if (!iti) return (phoneInput?.value || "").trim();
      return (iti.getNumber() || "").trim();
    }

    // Real-time validation feedback
    form.querySelectorAll("input, textarea, select").forEach((field) => {
      field.addEventListener("blur", () => {
        if (field.required && !field.value.trim()) {
          field.style.borderColor = "rgba(161,38,38,0.50)";
        } else {
          field.style.borderColor = "";
        }
      });
      field.addEventListener("input", () => {
        field.style.borderColor = "";
      });
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const lang = getCurrentLang();
      const phoneValue = getPhoneValue();

      if (fullPhoneInput) {
        fullPhoneInput.value = phoneValue;
      }

      const formData = new FormData(form);

      const payload = {
        department:     String(formData.get("department") || "").trim(),
        name:           String(formData.get("name") || "").trim(),
        company:        String(formData.get("company") || "").trim(),
        phone:          phoneValue,
        email:          String(formData.get("email") || "").trim(),
        location:       String(formData.get("location") || "").trim(),
        description:    String(formData.get("description") || "").trim(),
        website:        String(formData.get("website") || "").trim(),
        turnstileToken: String(formData.get("turnstileToken") || "").trim()
      };

      const requiredMissing =
        !payload.department ||
        !payload.name ||
        !payload.company ||
        !payload.phone ||
        !payload.email ||
        !payload.location ||
        !payload.description;

      if (requiredMissing) {
        setStatus(
          "error",
          lang === "ar"
            ? "يرجى إكمال جميع الحقول المطلوبة."
            : "Please complete all required fields."
        );
        return;
      }

      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(payload.email)) {
        setStatus(
          "error",
          lang === "ar"
            ? "يرجى إدخال بريد إلكتروني صحيح."
            : "Please enter a valid email address."
        );
        return;
      }

      if (iti) {
        try {
          if (iti.promise) await iti.promise;
          if (!iti.isValidNumber()) {
            setStatus(
              "error",
              lang === "ar"
                ? "يرجى إدخال رقم هاتف صحيح."
                : "Please enter a valid phone number."
            );
            return;
          }
        } catch {
          setStatus(
            "error",
            lang === "ar"
              ? "حدث خطأ في التحقق من رقم الهاتف."
              : "There was a problem validating the phone number."
          );
          return;
        }
      }

      if (!payload.turnstileToken) {
        setStatus(
          "error",
          lang === "ar"
            ? "يرجى إكمال التحقق الأمني."
            : "Please complete the security check."
        );
        return;
      }

      try {
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = lang === "ar" ? "جارٍ الإرسال..." : "Submitting...";
        }

        setStatus(
          "",
          lang === "ar" ? "جارٍ إرسال الاستفسار..." : "Submitting your inquiry..."
        );

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (!response.ok || !result.ok) {
          throw new Error(result.message || "Request failed");
        }

        setStatus(
          "success",
          lang === "ar"
            ? "تم إرسال الاستفسار بنجاح. سنتواصل معك قريباً."
            : "Your inquiry has been submitted successfully. We'll be in touch shortly."
        );

        form.reset();

        if (iti) iti.setCountry("iq");
        if (window.turnstile) window.turnstile.reset();

      } catch (error) {
        setStatus(
          "error",
          error.message ||
            (lang === "ar"
              ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."
              : "There was a problem sending your inquiry. Please try again.")
        );
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          const i18nKey = submitBtn.getAttribute("data-i18n");
          if (i18nKey && window.SAMOE?.getLang) {
            // Re-apply i18n text
            window.SAMOE.applyLang(window.SAMOE.getLang());
          } else {
            submitBtn.textContent = lang === "ar" ? "إرسال الاستفسار" : "Submit inquiry";
          }
        }
      }
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  document.addEventListener("DOMContentLoaded", () => {
    initReveal();
    initMobileNav();
    initActiveNav();
    initInquiryForm();
  });
})();