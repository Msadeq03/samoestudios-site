// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
    else entry.target.classList.remove("is-visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Contact form -> build message + open IG DM
function buildInquiryMessage(data, lang){
  const isAR = lang === "ar";
  if (isAR){
    return [
      "مرحباً SAMOE STUDIOS — أود إرسال استفسار.",
      "",
      `الاسم: ${data.name || "-"}`,
      `الشركة: ${data.company || "-"}`,
      `الهاتف: ${data.phone || "-"}`,
      `البريد: ${data.email || "-"}`,
      "",
      "وصف المشروع:",
      data.description || "-"
    ].join("\n");
  }
  return [
    "Hello SAMOE STUDIOS — I'd like to make an inquiry.",
    "",
    `Name: ${data.name || "-"}`,
    `Company: ${data.company || "-"}`,
    `Phone: ${data.phone || "-"}`,
    `Email: ${data.email || "-"}`,
    "",
    "Project / Description:",
    data.description || "-"
  ].join("\n");
}

function openInstagramDM(message){
  const encoded = encodeURIComponent(message);
  const url = `https://ig.me/m/samoestudios?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

const form = document.getElementById("inquiryForm");
if (form){
  const preview = document.getElementById("messagePreview");

  const makePreview = () => {
    const lang = (window.SAMOE && window.SAMOE.getLang) ? window.SAMOE.getLang() : (localStorage.getItem("samoelang") || "en");
    const data = {
      name: form.name?.value?.trim() || "",
      company: form.company?.value?.trim() || "",
      phone: form.phone?.value?.trim() || "",
      email: form.email?.value?.trim() || "",
      description: form.description?.value?.trim() || "",
    };
    const msg = buildInquiryMessage(data, lang);
    if (preview) preview.textContent = msg;
    return msg;
  };

  ["input", "change"].forEach(evt => form.addEventListener(evt, makePreview));
  makePreview();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    openInstagramDM(makePreview());
  });

  const dmBtn = document.getElementById("openDM");
  if (dmBtn){
    dmBtn.addEventListener("click", () => openInstagramDM(makePreview()));
  }
}