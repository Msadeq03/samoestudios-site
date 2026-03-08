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
      statusBox.className = `form-status ${type || ""}`.trim();
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
            ? "يرجى إكمال جميع الحقول المطلوبة."
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
                ? "يرجى إدخال رقم هاتف صحيح."
                : "Please enter a valid phone number."
            );
            return;
          }
        } catch (error) {
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
        if (submitBtn) submitBtn.disabled = true;

        setStatus(
          "",
          lang === "ar" ? "جارٍ إرسال الاستفسار..." : "Submitting inquiry..."
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
            ? "تم إرسال الاستفسار بنجاح."
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
              ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."
              : "There was a problem sending your inquiry. Please try again.")
        );
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initReveal();
    initInquiryForm();
  });
})();