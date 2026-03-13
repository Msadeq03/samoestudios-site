(function () {
  "use strict";

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
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
  }

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
      statusBox.className = "form-status " + (type || "");
      statusBox.textContent = message;
    }

    function getPhoneValue() {
      if (!iti) return (phoneInput?.value || "").trim();
      const value = iti.getNumber();
      return value ? value.trim() : "";
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const lang = getCurrentLang();
      const phoneValue = getPhoneValue();

      if (fullPhoneInput) {
        fullPhoneInput.value = phoneValue;
      }

      const formData = new FormData(form);

      const payload = {
        department: String(formData.get("department") || "").trim(),
        name: String(formData.get("name") || "").trim(),
        company: String(formData.get("company") || "").trim(),
        phone: phoneValue,
        email: String(formData.get("email") || "").trim(),
        location: String(formData.get("location") || "").trim(),
        description: String(formData.get("description") || "").trim(),
        website: String(formData.get("website") || "").trim(),
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
            ? "\u064A\u0631\u062C\u0649 \u0625\u0643\u0645\u0627\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629."
            : "Please complete all required fields."
        );
        return;
      }

      if (iti) {
        try {
          if (iti.promise) {
            await iti.promise;
          }

          if (!iti.isValidNumber()) {
            setStatus(
              "error",
              lang === "ar"
                ? "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0635\u062D\u064A\u062D."
                : "Please enter a valid phone number."
            );
            return;
          }
        } catch (error) {
          setStatus(
            "error",
            lang === "ar"
              ? "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641."
              : "There was a problem validating the phone number."
          );
          return;
        }
      }

      if (!payload.turnstileToken) {
        setStatus(
          "error",
          lang === "ar"
            ? "\u064A\u0631\u062C\u0649 \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0623\u0645\u0646\u064A."
            : "Please complete the security check."
        );
        return;
      }

      try {
        if (submitBtn) submitBtn.disabled = true;

        setStatus(
          "",
          lang === "ar" ? "\u062C\u0627\u0631\u064D \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631..." : "Submitting inquiry..."
        );

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (!response.ok || !result.ok) {
          throw new Error(result.message || "Request failed");
        }

        setStatus(
          "success",
          lang === "ar"
            ? "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0628\u0646\u062C\u0627\u062D."
            : "Your inquiry has been submitted successfully."
        );

        form.reset();

        if (iti) {
          iti.setCountry("iq");
        }

        if (window.turnstile) {
          window.turnstile.reset();
        }
      } catch (error) {
        setStatus(
          "error",
          error.message ||
            (lang === "ar"
              ? "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0625\u0631\u0633\u0627\u0644. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649."
              : "There was a problem sending your inquiry. Please try again.")
        );
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  function initGallery() {
    var grid = document.getElementById("galleryGrid");
    var tabsContainer = document.getElementById("galleryTabs");
    var data = window.GALLERY_DATA;

    if (!grid || !tabsContainer || !data || !data.length) return;

    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightboxImg");
    var lightboxCaption = document.getElementById("lightboxCaption");
    var lightboxCounter = document.getElementById("lightboxCounter");
    var lightboxClose = document.getElementById("lightboxClose");
    var lightboxPrev = document.getElementById("lightboxPrev");
    var lightboxNext = document.getElementById("lightboxNext");
    var lightboxOverlay = document.getElementById("lightboxOverlay");

    var currentFilter = "all";
    var currentIndex = 0;
    var filteredItems = [];

    function getLang() {
      return window.SAMOE && window.SAMOE.getLang ? window.SAMOE.getLang() : "en";
    }

    function getCaption(item) {
      var lang = getLang();
      return lang === "ar" ? (item.caption_ar || item.caption_en) : item.caption_en;
    }

    var categoryLabels = {
      all: { en: "All", ar: "\u0627\u0644\u0643\u0644" },
      render: { en: "Renders", ar: "\u062A\u0635\u0648\u0631\u0627\u062A" },
      site: { en: "Site Photos", ar: "\u0635\u0648\u0631 \u0627\u0644\u0645\u0648\u0642\u0639" }
    };

    function getCategoryLabel(cat) {
      var lang = getLang();
      if (categoryLabels[cat]) {
        return categoryLabels[cat][lang] || categoryLabels[cat].en;
      }
      return cat.charAt(0).toUpperCase() + cat.slice(1);
    }

    var categories = ["all"];
    data.forEach(function (item) {
      if (item.category && categories.indexOf(item.category) === -1) {
        categories.push(item.category);
      }
    });

    function renderTabs() {
      tabsContainer.innerHTML = "";
      categories.forEach(function (cat) {
        var btn = document.createElement("button");
        btn.className = "gallery-tab" + (cat === currentFilter ? " active" : "");
        btn.setAttribute("type", "button");
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-selected", cat === currentFilter ? "true" : "false");
        btn.textContent = getCategoryLabel(cat);
        btn.addEventListener("click", function () {
          currentFilter = cat;
          renderTabs();
          renderGrid();
        });
        tabsContainer.appendChild(btn);
      });
    }

    function renderGrid() {
      grid.innerHTML = "";
      filteredItems = currentFilter === "all"
        ? data.slice()
        : data.filter(function (item) { return item.category === currentFilter; });

      filteredItems.forEach(function (item, index) {
        var card = document.createElement("div");
        card.className = "gallery-item";
        card.style.animationDelay = (index * 0.06) + "s";
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", getCaption(item));

        var imgWrap = document.createElement("div");
        imgWrap.className = "gallery-item-img-wrap";

        var img = document.createElement("img");
        img.src = item.src;
        img.alt = getCaption(item);
        img.loading = "lazy";

        var overlay = document.createElement("div");
        overlay.className = "gallery-item-overlay";

        imgWrap.appendChild(img);
        imgWrap.appendChild(overlay);

        var caption = document.createElement("div");
        caption.className = "gallery-item-caption";
        caption.textContent = getCaption(item);

        card.appendChild(imgWrap);
        card.appendChild(caption);

        card.addEventListener("click", function () {
          openLightbox(index);
        });
        card.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openLightbox(index);
          }
        });

        grid.appendChild(card);
      });
    }

    function openLightbox(index) {
      currentIndex = index;
      updateLightbox();
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      lightboxClose.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.style.overflow = "";
    }

    function updateLightbox() {
      var item = filteredItems[currentIndex];
      if (!item) return;

      lightboxImg.src = item.src;
      lightboxImg.alt = getCaption(item);
      lightboxCaption.textContent = getCaption(item);
      lightboxCounter.textContent = (currentIndex + 1) + " / " + filteredItems.length;

      var single = filteredItems.length <= 1;
      if (single) {
        lightboxPrev.classList.add("hidden");
        lightboxNext.classList.add("hidden");
      } else {
        lightboxPrev.classList.remove("hidden");
        lightboxNext.classList.remove("hidden");
      }
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      updateLightbox();
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % filteredItems.length;
      updateLightbox();
    }

    lightboxClose.addEventListener("click", closeLightbox);
    lightboxOverlay.addEventListener("click", closeLightbox);
    lightboxPrev.addEventListener("click", prevImage);
    lightboxNext.addEventListener("click", nextImage);

    document.addEventListener("keydown", function (e) {
      if (lightbox.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    });

    var touchStartX = 0;
    lightbox.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener("touchend", function (e) {
      var diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextImage();
        else prevImage();
      }
    }, { passive: true });

    renderTabs();
    renderGrid();
  }

  function exposeGallery() {
    if (window.SAMOE) {
      window.SAMOE.initGallery = initGallery;
    } else {
      window.SAMOE = { initGallery: initGallery };
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initReveal();
    initInquiryForm();
    exposeGallery();
  });
})();
