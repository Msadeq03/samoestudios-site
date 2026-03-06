// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
    else entry.target.classList.remove("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Contact form -> build professional email draft
function getInquiryRecipient(department){
  return department === "info" ? "info@samoestudios.com" : "sales@samoestudios.com";
}

function getInquirySubject(data, lang){
  const isAR = lang === "ar";
  if (isAR){
    return data.department === "info"
      ? "استفسار عام — SAMOE STUDIOS"
      : "استفسار عميل / عرض تجاري — SAMOE STUDIOS";
  }
  return data.department === "info"
    ? "General Inquiry — SAMOE STUDIOS"
    : "Client Inquiry / Commercial Proposal — SAMOE STUDIOS";
}

function buildInquiryMessage(data, lang){
  const isAR = lang === "ar";

  if (isAR){
    return [
      "مرحباً SAMOE STUDIOS LTD،",
      "",
      data.department === "info"
        ? "أود إرسال استفسار عام."
        : "أود مناقشة مشروع أو عرض تجاري.",
      "",
      `الاسم: ${data.name || "-"}`,
      `الشركة: ${data.company || "-"}`,
      `الهاتف: ${data.phone || "-"}`,
      `البريد الإلكتروني: ${data.email || "-"}`,
      `موقع المشروع: ${data.location || "-"}`,
      "",
      "وصف المشروع / الطلب:",
      data.description || "-",
      "",
      "مع الشكر،"
    ].join("\n");
  }

  return [
    "Hello SAMOE STUDIOS LTD,",
    "",
    data.department === "info"
      ? "I would like to make a general inquiry."
      : "I would like to discuss a project inquiry / commercial proposal.",
    "",
    `Name: ${data.name || "-"}`,
    `Company: ${data.company || "-"}`,
    `Phone: ${data.phone || "-"}`,
    `Email: ${data.email || "-"}`,
    `Project Location: ${data.location || "-"}`,
    "",
    "Project / Description:",
    data.description || "-",
    "",
    "Kind regards,"
  ].join("\n");
}

function openMailClient(recipient, subject, body){
  const url = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

const form = document.getElementById("inquiryForm");
if (form){
  const preview = document.getElementById("messagePreview");
  const previewBtn = document.getElementById("openEmailPreview");

  const makePreview = () => {
    const lang = (window.SAMOE && window.SAMOE.getLang)
      ? window.SAMOE.getLang()
      : (localStorage.getItem("samoelang") || "en");

    const data = {
      department: form.department?.value || "sales",
      name: form.name?.value?.trim() || "",
      company: form.company?.value?.trim() || "",
      phone: form.phone?.value?.trim() || "",
      email: form.email?.value?.trim() || "",
      location: form.location?.value?.trim() || "",
      description: form.description?.value?.trim() || "",
    };

    const recipient = getInquiryRecipient(data.department);
    const subject = getInquirySubject(data, lang);
    const body = buildInquiryMessage(data, lang);

    if (preview){
      preview.textContent = `To: ${recipient}\nSubject: ${subject}\n\n${body}`;
    }

    return { recipient, subject, body };
  };

  ["input", "change"].forEach(evt => form.addEventListener(evt, makePreview));
  makePreview();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const draft = makePreview();
    openMailClient(draft.recipient, draft.subject, draft.body);
  });

  if (previewBtn){
    previewBtn.addEventListener("click", () => makePreview());
  }
}