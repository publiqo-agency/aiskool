"use server";

import { z } from "zod";
import { sendMail, htmlTable, escapeHtml } from "@/lib/email";
import { questions, scoreAnswers } from "@/lib/aiact-test";
import { site } from "@/lib/site";

export type FormState = { ok: boolean; message?: string; errors?: Record<string, string>; result?: ReturnType<typeof scoreAnswers> };

const email = z.email({ error: "Introduce un email válido" });
/** Texto obligatorio con el mismo mensaje si falta el campo (p. ej. un select sin elegir) o está vacío. */
const required = (msg: string) => z.string({ error: msg }).trim().min(1, msg);

function fieldErrors(err: z.ZodError) {
  const out: Record<string, string> = {};
  for (const issue of err.issues) {
    const k = String(issue.path[0] ?? "form");
    out[k] ??= issue.message;
  }
  return out;
}

/** Campo trampa: si un bot lo rellena, fingimos éxito y no enviamos nada. */
const isBot = (fd: FormData) => String(fd.get("website") ?? "").length > 0;

/* ───────────── Presupuesto ───────────── */

const presupuestoSchema = z.object({
  nombre: required("Indica tu nombre"),
  email,
  empresa: required("Indica la empresa"),
  telefono: z.string().trim().optional(),
  empleados: required("Selecciona un rango"),
  modalidad: required("Selecciona una modalidad"),
  formacion: z.string().optional(),
  departamentos: z.array(z.string()).optional(),
  herramientas: z.array(z.string()).optional(),
  mensaje: z.string().trim().max(3000).optional(),
  privacidad: z.literal("on", { error: "Debes aceptar la política de privacidad" }),
});

export async function submitPresupuesto(_prev: FormState, fd: FormData): Promise<FormState> {
  if (isBot(fd)) return { ok: true };
  const parsed = presupuestoSchema.safeParse({
    ...Object.fromEntries(fd),
    departamentos: fd.getAll("departamentos").map(String),
    herramientas: fd.getAll("herramientas").map(String),
  });
  if (!parsed.success) return { ok: false, errors: fieldErrors(parsed.error), message: "Revisa los campos marcados." };
  const d = parsed.data;

  const sent = await sendMail({
    subject: `Nuevo presupuesto: ${d.empresa} (${d.empleados})`,
    replyTo: d.email,
    html: htmlTable({
      Nombre: d.nombre,
      Email: d.email,
      Teléfono: d.telefono,
      Empresa: d.empresa,
      Empleados: d.empleados,
      Modalidad: d.modalidad,
      Formación: d.formacion,
      Departamentos: d.departamentos?.join(", "),
      Herramientas: d.herramientas?.join(", "),
      Mensaje: d.mensaje,
    }),
  });
  if (!sent.ok) return { ok: false, message: `No hemos podido enviar la solicitud. Escríbenos a ${site.email}.` };

  await sendMail({
    to: d.email,
    subject: `Hemos recibido tu solicitud · ${site.name}`,
    html: `<p>Hola ${escapeHtml(d.nombre)},</p><p>Gracias por tu interés. Te enviaremos una propuesta en un máximo de 48 horas laborables.</p><p>Si quieres adelantar, puedes reservar un diagnóstico gratuito de 30 minutos en ${site.url}/diagnostico.</p><p>— Equipo ${site.name}</p>`,
  });

  return { ok: true, message: "¡Recibido! Te enviaremos una propuesta en 48 h laborables." };
}

/* ───────────── Test AI Act ───────────── */

const testSchema = z.object({
  nombre: required("Indica tu nombre"),
  email,
  empresa: required("Indica la empresa"),
  privacidad: z.literal("on", { error: "Debes aceptar la política de privacidad" }),
});

export async function submitTest(_prev: FormState, fd: FormData): Promise<FormState> {
  if (isBot(fd)) return { ok: true };
  const parsed = testSchema.safeParse(Object.fromEntries(fd));
  if (!parsed.success) return { ok: false, errors: fieldErrors(parsed.error), message: "Revisa los campos marcados." };

  const answers: Record<string, number> = {};
  for (const q of questions) {
    const v = Number(fd.get(`q_${q.id}`));
    if (!Number.isInteger(v) || !q.options[v]) return { ok: false, message: "Responde todas las preguntas." };
    answers[q.id] = v;
  }
  const result = scoreAnswers(answers);
  const d = parsed.data;

  const detail = questions.map((q) => `${q.q}\n→ ${q.options[answers[q.id]].label}`).join("\n\n");
  await sendMail({
    subject: `Test AI Act: ${d.empresa} · ${result.pct}% (${result.level.label})`,
    replyTo: d.email,
    html: htmlTable({ Nombre: d.nombre, Email: d.email, Empresa: d.empresa, Resultado: `${result.pct}% · ${result.level.label}`, Respuestas: detail }),
  });

  await sendMail({
    to: d.email,
    subject: `Tu resultado del test AI Act: ${result.level.label}`,
    html: `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#111214">
      <p>Hola ${escapeHtml(d.nombre)},</p>
      <p>Este es el resultado orientativo de <strong>${escapeHtml(d.empresa)}</strong> en el test de preparación para el artículo 4 del Reglamento Europeo de IA:</p>
      <p style="font-size:22px"><strong>${result.pct}% · ${result.level.label}</strong></p>
      <p>${result.level.text}</p>
      ${result.tips.length ? `<p><strong>Próximos pasos recomendados:</strong></p><ol>${result.tips.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ol>` : ""}
      <p>¿Lo vemos juntos? Reserva un diagnóstico gratuito de 30 minutos: ${site.url}/diagnostico</p>
      <p style="color:#6b6c70;font-size:13px">Este test es orientativo y no constituye asesoramiento jurídico.</p>
      <p>— Equipo ${site.name}</p></div>`,
  });

  return { ok: true, result };
}

/* ───────────── Recursos (lead magnets) ───────────── */

const recursoSchema = z.object({
  email,
  empresa: z.string().trim().optional(),
  recurso: required("Recurso no válido"),
  privacidad: z.literal("on", { error: "Debes aceptar la política de privacidad" }),
});

export async function requestRecurso(_prev: FormState, fd: FormData): Promise<FormState> {
  if (isBot(fd)) return { ok: true };
  const parsed = recursoSchema.safeParse(Object.fromEntries(fd));
  if (!parsed.success) return { ok: false, errors: fieldErrors(parsed.error), message: "Revisa los campos marcados." };
  const d = parsed.data;
  await sendMail({ subject: `Recurso solicitado: ${d.recurso}`, replyTo: d.email, html: htmlTable({ Email: d.email, Empresa: d.empresa, Recurso: d.recurso }) });
  return { ok: true, message: "¡Listo! Te lo enviamos por email en breve." };
}
