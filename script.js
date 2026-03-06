// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
    else entry.target.classList.remove("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Contact form preview + submit
function buildInquiryPreview(data, lang) {
  const isAR = lang === "ar";

  if (isAR) {
    return [
      `الجهة: ${data.department === "info" ? "الاستفسارات العامة" : "العروض التجارية"}`,
      `الاسم: ${data.name || "-"}`,
      `الشركة: ${data.company || "-"}`,
      `الهاتف: ${data.phone || "-"}`,
      `البريد الإلكتروني: ${data.email || "-"}`,
      `موقع المشروع: ${data.location || "-"}`,
      "",
      "وصف المشروع / الطلب:",
      data.description || "-"
    ].join("\n");
  }

  return [
    `Department: ${data.department === "info" ? "General Inquiry" : "Client Inquiry / Commercial Proposal"}`,
    `Name: ${data.name || "-"}`,
    `Company: ${data.company || "-"}`,
    `Phone: ${data.phone || "-"}`,
    `Email: ${data.email || "-"}`,
    `Project Location: ${data.location || "-"}`,
    "",
    "Project / Description:",
    data.description || "-"
  ].join("\n");
}

const form = document.getElementById("inquiryForm");
if (form) {
  const preview = document.getElementById("messagePreview");
  const statusBox = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitInquiry");

  const getLang = () => {
    return (window.SAMOE && window.SAMOE.getLang)
      ? window.SAMOE.getLang()
      : (localStorage.getItem("samoelang") || "en");
  };

  const getData = () => ({
    department: form.department?.value || "sales",
    name: form.name?.value?.trim() || "",
    company: form.company?.value?.trim() || "",
    phone: form.phone?.value?.trim() || "",
    email: form.email?.value?.trim() || "",
    location: form.location?.value?.trim() || "",
    description: form.description?.value?.trim() || ""
  });

  const updatePreview = () => {
    const lang = getLang();
    const data = getData();
    if (preview) preview.textContent = buildInquiryPreview(data, lang);
  };

  ["input", "change"].forEach(evt => form.addEventListener(evt, updatePreview));
  updatePreview();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const lang = getLang();
    const data = getData();

    if (!data.name || !data.email || !data.description) {
      statusBox.className = "form-status error";
      statusBox.textContent = lang === "ar"
        ? "يرجى إكمال الحقول المطلوبة."
        : "Please complete the required fields.";
      return;
    }

    try {
      submitBtn.disabled = true;
      statusBox.className = "form-status";
      statusBox.textContent = lang === "ar"
        ? "جارٍ إرسال الاستفسار..."
        : "Submitting inquiry...";

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

      statusBox.className = "form-status success";
      statusBox.textContent = lang === "ar"
        ? "تم إرسال الاستفسار بنجاح."
        : "Your inquiry has been submitted successfully.";

      form.reset();
      updatePreview();
    } catch (err) {
      statusBox.className = "form-status error";
      statusBox.textContent = lang === "ar"
        ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."
        : "There was a problem sending your inquiry. Please try again.";
    } finally {
      submitBtn.disabled = false;
    }
  });
}