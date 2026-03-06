// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
    else entry.target.classList.remove("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const form = document.getElementById("inquiryForm");

if (form) {
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
      loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/js/utils.js")
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
    const phoneValue = getPhoneValue();

    if (fullPhoneInput) {
      fullPhoneInput.value = phoneValue;
    }

    const fd = new FormData(form);

    const data = {
      department: String(fd.get("department") || "").trim(),
      name: String(fd.get("name") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      phone: phoneValue,
      email: String(fd.get("email") || "").trim(),
      location: String(fd.get("location") || "").trim(),
      description: String(fd.get("description") || "").trim(),
      website: String(fd.get("website") || "").trim(),
      turnstileToken: String(fd.get("turnstileToken") || "").trim()
    };

    console.log("Submitting form data:", data);

    if (!data.department || !data.name || !data.company || !data.phone || !data.email || !data.location || !data.description) {
      setStatus(
        "error",
        lang === "ar" ? "يرجى إكمال جميع الحقول المطلوبة." : "Please complete all required fields."
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
            lang === "ar" ? "يرجى إدخال رقم هاتف صحيح." : "Please enter a valid phone number."
          );
          return;
        }
      } catch (err) {
        console.error("Phone validation error:", err);
        setStatus(
          "error",
          lang === "ar" ? "حدث خطأ في التحقق من رقم الهاتف." : "There was a problem validating the phone number."
        );
        return;
      }
    }

    if (!data.turnstileToken) {
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
      console.log("Backend response:", result);

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
        window.turnstile.reset();
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus(
        "error",
        err.message || (lang === "ar"
          ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."
          : "There was a problem sending your inquiry. Please try again.")
      );
    } finally {
      submitBtn.disabled = false;
    }
  });
}