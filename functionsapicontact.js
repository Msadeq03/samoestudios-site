export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    if (!env.RESEND_API_KEY) {
      return json(
        { ok: false, message: "Missing RESEND_API_KEY environment variable." },
        500
      );
    }

    const body = await request.json();

    const department = String(body.department || "sales").trim();
    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const location = String(body.location || "").trim();
    const description = String(body.description || "").trim();

    if (!name || !email || !description) {
      return json(
        { ok: false, message: "Missing required fields." },
        400
      );
    }

    const recipient =
      department === "info"
        ? "info@samoestudios.com"
        : "sales@samoestudios.com";

    const subject =
      department === "info"
        ? "General Inquiry — SAMOE STUDIOS"
        : "Client Inquiry / Commercial Proposal — SAMOE STUDIOS";

    const text = [
      "New website inquiry",
      "",
      `Department: ${department === "info" ? "General Inquiry" : "Client Inquiry / Commercial Proposal"}`,
      `Name: ${name}`,
      `Company: ${company || "-"}`,
      `Phone: ${phone || "-"}`,
      `Email: ${email}`,
      `Project Location: ${location || "-"}`,
      "",
      "Project / Description:",
      description
    ].join("\n");

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.65;color:#0a0f1a;">
        <h2 style="margin:0 0 16px 0;">New website inquiry</h2>
        <table style="border-collapse:collapse;width:100%;max-width:720px;">
          <tr><td style="padding:8px 0;font-weight:bold;width:180px;">Department</td><td style="padding:8px 0;">${escapeHtml(department === "info" ? "General Inquiry" : "Client Inquiry / Commercial Proposal")}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Name</td><td style="padding:8px 0;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Company</td><td style="padding:8px 0;">${escapeHtml(company || "-")}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Phone</td><td style="padding:8px 0;">${escapeHtml(phone || "-")}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Email</td><td style="padding:8px 0;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Project Location</td><td style="padding:8px 0;">${escapeHtml(location || "-")}</td></tr>
        </table>

        <div style="margin-top:20px;">
          <div style="font-weight:bold;margin-bottom:8px;">Project / Description</div>
          <div style="white-space:pre-wrap;border:1px solid #d8deea;padding:14px;background:#f7f9fc;">${escapeHtml(description)}</div>
        </div>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "SAMOE STUDIOS <noreply@samoestudios.com>",
        to: [recipient],
        reply_to: email,
        subject,
        text,
        html
      })
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      return json(
        { ok: false, message: resendData?.message || "Failed to send email." },
        500
      );
    }

    return json({ ok: true, message: "Inquiry sent successfully." }, 200);
  } catch (error) {
    return json(
      { ok: false, message: error?.message || "Unexpected server error." },
      500
    );
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}