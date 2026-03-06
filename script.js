// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
    else entry.target.classList.remove("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Contact form submit
const form = document.getElementById("inquiryForm");

if (form) {
  const statusBox = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitInquiry");
  const phoneInput = document.getElementById("phone");
  const fullPhoneInput = document.getElementById("full_phone");

  let iti = null;

  if (phoneInput && window.intlTelInput) {
    iti = window.intlTelInput(phoneInput, {
      initialCountry: "auto",
      separateDialCode: true,
      nationalMode: false,
      strictMode: true,
      formatOnDisplay: true,
      autoPlaceholder: "aggressive",
      geoIpLookup: async (callback) => {
        try {
          const res = await fetch("https://ipapi.co/json/");
          const data = await res.json();
          callback((data && data.country_code ? data.country_code : "iq").toLowerCase());
        } catch {
          callback("iq");
        }
      },
      loadUtils: () => Promise.resolve(window.intlTelInputUtils)
    });
  }

  const getLang = () => {
    return (window.SAMOE && window.SAMOE.getLang)
      ? window.SAMOE.getLang()
      : (localStorage.getItem("samoelang") || "en");
  };

  const setStatus = (type, message) => {
    statusBox.className = `form-status ${type || ""}`.trim();
    statusBox.textContent = message;
  };

  const getPhoneValue = () => {
    if (!iti) return (phoneInput?.value || "").trim();
    const val = iti.getNumber();
    return val ? val.trim() : "";
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const lang = getLang();

    const turnstileToken = form.querySelector('input[name="turnstileToken"]')?.value?.trim() || "";
    const phoneValue = getPhoneValue();
    if (fullPhoneInput) fullPhoneInput.value = phoneValue;

    const data = {
      department: form.department?.value?.trim() || "sales",
      name: form.name?.value?.trim() || "",
      company: form.company?.value?.trim() || "",
      phone: phoneValue,
      email: form.email?.value?.trim() || "",
      location: form.location?.value?.trim() || "",
      description: form.description?.value?.trim() || "",
      website: form.website?.value?.trim() || "",
      turnstileToken
    };

    if (!data.department || !data.name || !data.company || !data.phone || !data.email || !data.location || !data.description) {
      setStatus(
        "error",
        lang === "ar" ? "يرجى إكمال جميع الحقول المطلوبة." : "Please complete all required fields."
      );
      return;
    }

    if (iti && !iti.isValidNumber()) {
      setStatus(
        "error",
        lang === "ar" ? "يرجى إدخال رقم هاتف صحيح." : "Please enter a valid phone number."
      );
      return;
    }

    if (!turnstileToken) {
      setStatus(
        "error",
        lang === "ar" ? "يرجى إكمال التحقق الأمني." : "Please complete the security check."
      );
      return;
    }

    try {
      submitBtn.disabled = true;
      setStatus("", lang === "ar" ? "جارٍ إرسال الاستفسار..." : "Submitting inquiry...");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (!res.ok || !result.ok) {
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
        const widget = form.querySelector(".cf-turnstile");
        if (widget) {
          window.turnstile.reset(widget);
        }
      }
    } catch (err) {
      setStatus(
        "error",
        lang === "ar"
          ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."
          : "There was a problem sending your inquiry. Please try again."
      );
    } finally {
      submitBtn.disabled = false;
    }
  });
}