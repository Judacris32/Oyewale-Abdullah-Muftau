import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/* Best-effort rate limit: 5 messages per IP every 10 minutes.
   In-memory, so it resets per server instance. Good enough to stop casual spam. */
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > LIMIT;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages in a short time. Please try again in a few minutes." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again.", fields: parsed.error.flatten().fieldErrors }, { status: 422 });
  }

  const { name, email, organisation, topic, message, website } = parsed.data;

  // Honeypot filled: pretend it worked so bots learn nothing.
  if (website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] RESEND_API_KEY not set. Message received in development:", { name, email, organisation, topic, message });
      return NextResponse.json({ ok: true, dev: true });
    }
    console.error("[contact] RESEND_API_KEY is missing in production.");
    return NextResponse.json({ error: "The form isn't connected yet. Please email me directly instead." }, { status: 503 });
  }

  const subject = `New enquiry: ${topic} (from ${name})`;
  const text = [`Name: ${name}`, `Email: ${email}`, organisation ? `Organisation: ${organisation}` : null, `About: ${topic}`, "", message]
    .filter((l) => l !== null)
    .join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#1B1F1D">
      <h2 style="margin:0 0 12px;font-size:18px">New enquiry from your website</h2>
      <p style="margin:0"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin:0"><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${organisation ? `<p style="margin:0"><strong>Organisation:</strong> ${escapeHtml(organisation)}</p>` : ""}
      <p style="margin:0 0 16px"><strong>About:</strong> ${escapeHtml(topic)}</p>
      <div style="padding:16px;background:#FBF7F0;border-radius:8px;white-space:pre-wrap">${escapeHtml(message)}</div>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject, text, html }),
    });
    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text());
      return NextResponse.json({ error: "Your message couldn't be sent just now. Please email me directly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Network error", err);
    return NextResponse.json({ error: "Your message couldn't be sent just now. Please email me directly." }, { status: 502 });
  }
}
