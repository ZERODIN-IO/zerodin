"use server";

// The contact form sends via the ZERODIN Postmark account.
//
// This is separate from the ATHELOS Postmark account. The env vars are
// prefixed with ZERODIN_ so there is no ambiguity: if the ATHELOS project
// and this project share a Vercel team, they read different keys.
//
// Env vars required (add to Vercel project env vars):
//   ZERODIN_POSTMARK_API_KEY       — the ZERODIN Postmark server token
//   ZERODIN_POSTMARK_FROM_ADDRESS  — the sender, e.g. noreply@zerodin.pro
//   ZERODIN_CONTACT_TO_ADDRESS     — the recipient, e.g. security@zerodin.pro
//   ZERODIN_POSTMARK_STREAM        — optional, defaults to "outbound"
//
// Until the domain is registered and the Postmark account is configured,
// the action returns a fallback message. Once the env vars are set, the
// form sends for real.

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactResult {
  ok: boolean;
  messageId?: string;
  error?: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactResult> {
  const apiKey = process.env.ZERODIN_POSTMARK_API_KEY;
  const fromAddress =
    process.env.ZERODIN_POSTMARK_FROM_ADDRESS || "noreply@zerodin.pro";
  const toAddress =
    process.env.ZERODIN_CONTACT_TO_ADDRESS || "security@zerodin.pro";
  const stream = process.env.ZERODIN_POSTMARK_STREAM || "outbound";

  if (!apiKey) {
    return {
      ok: false,
      error:
        "Contact form is not configured yet. Email security@zerodin.pro directly.",
    };
  }

  try {
    const response = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": apiKey,
      },
      body: JSON.stringify({
        From: fromAddress,
        To: toAddress,
        ReplyTo: data.email,
        Subject: `[ZERODIN Contact] ${data.subject}`,
        TextBody: `From: ${data.name} <${data.email}>\n\nSubject: ${data.subject}\n\n${data.message}`,
        HtmlBody: `
          <p><strong>From:</strong> ${data.name} &lt;${data.email}&gt;</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <hr />
          <p>${data.message.replace(/\n/g, "<br />")}</p>
        `,
        MessageStream: stream,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return {
        ok: false,
        error: `Postmark returned ${response.status}: ${errorBody.slice(0, 200)}`,
      };
    }

    const result = await response.json();
    return { ok: true, messageId: result.MessageID };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
