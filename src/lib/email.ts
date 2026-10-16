import "server-only";
import { Resend } from "resend";
import { site } from "./site";

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.RESEND_FROM ?? `${site.name} <onboarding@resend.dev>`;
const to = process.env.LEADS_TO_EMAIL ?? site.email;

const resend = apiKey ? new Resend(apiKey) : null;

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export function htmlTable(rows: Record<string, string | undefined>) {
  return `<table cellpadding="6" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">${Object.entries(rows)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="color:#6b6c70;vertical-align:top">${escape(k)}</td><td>${escape(v!).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;
}

type Mail = { subject: string; html: string; replyTo?: string; to?: string };

/** Envía un email. Sin RESEND_API_KEY (desarrollo) lo registra en consola y devuelve ok. */
export async function sendMail({ subject, html, replyTo, to: dest }: Mail): Promise<{ ok: boolean }> {
  if (!resend) {
    console.info(`[email:dev] ${subject} → ${dest ?? to}`);
    return { ok: true };
  }
  const { error } = await resend.emails.send({ from, to: dest ?? to, subject, html, replyTo });
  if (error) {
    console.error("[email] error", error);
    return { ok: false };
  }
  return { ok: true };
}

export { escape as escapeHtml };
