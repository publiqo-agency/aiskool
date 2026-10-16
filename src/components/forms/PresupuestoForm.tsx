"use client";

import { useActionState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { submitPresupuesto, type FormState } from "@/app/actions";
import { formaciones } from "@/lib/formaciones";
import { track } from "@/components/ui/Analytics";
import { Field, Honeypot, Privacy, Submit, inputCls } from "./fields";

const departamentos = ["Dirección", "Marketing", "Ventas", "RR. HH.", "Legal", "Finanzas", "Atención al cliente", "Operaciones", "Tecnología", "Toda la plantilla"];
const herramientas = ["ChatGPT", "Claude", "Microsoft 365 Copilot", "Gemini", "n8n / Make / Zapier", "Ninguna todavía"];

export function PresupuestoForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(submitPresupuesto, { ok: false });
  const params = useSearchParams();
  const pre = params.get("formacion") ?? "";
  const e = state.errors ?? {};

  useEffect(() => {
    if (state.ok) track("generate_lead", { form: "presupuesto" });
  }, [state.ok]);

  if (state.ok) {
    return (
      <div role="status" className="rounded-[18px] bg-surface p-8">
        <p className="display text-[1.6rem]">Solicitud enviada</p>
        <p className="mt-3 text-ink-soft">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="relative grid gap-6 rounded-[18px] bg-surface p-6 md:grid-cols-2 md:p-10" noValidate>
      <Honeypot />
      <Field label="Nombre" name="nombre" error={e.nombre}>
        <input id="nombre" name="nombre" autoComplete="name" className={inputCls} aria-invalid={!!e.nombre} required />
      </Field>
      <Field label="Email de trabajo" name="email" error={e.email}>
        <input id="email" name="email" type="email" autoComplete="email" className={inputCls} aria-invalid={!!e.email} required />
      </Field>
      <Field label="Empresa" name="empresa" error={e.empresa}>
        <input id="empresa" name="empresa" autoComplete="organization" className={inputCls} aria-invalid={!!e.empresa} required />
      </Field>
      <Field label="Teléfono (opcional)" name="telefono">
        <input id="telefono" name="telefono" type="tel" autoComplete="tel" className={inputCls} />
      </Field>
      <Field label="Personas a formar" name="empleados" error={e.empleados}>
        <select id="empleados" name="empleados" defaultValue="" className={inputCls} aria-invalid={!!e.empleados} required>
          <option value="" disabled>
            Selecciona
          </option>
          {["1–10", "11–25", "26–50", "51–100", "101–250", "Más de 250"].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>
      <Field label="Modalidad" name="modalidad" error={e.modalidad}>
        <select id="modalidad" name="modalidad" defaultValue="" className={inputCls} aria-invalid={!!e.modalidad} required>
          <option value="" disabled>
            Selecciona
          </option>
          {["Presencial en nuestras oficinas", "Online en directo", "Online a su ritmo", "Combinada", "No lo sé todavía"].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </Field>
      <div className="md:col-span-2">
        <Field label="Formación de interés" name="formacion">
          <select id="formacion" name="formacion" defaultValue={pre} className={inputCls}>
            <option value="">Aún no lo sé / a medida</option>
            {formaciones.map((f) => (
              <option key={f.slug} value={f.slug}>
                {f.title}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <fieldset className="md:col-span-2">
        <legend className="eyebrow text-ink-soft">Departamentos</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {departamentos.map((d) => (
            <label key={d} className="cursor-pointer">
              <input type="checkbox" name="departamentos" value={d} className="peer sr-only" />
              <span className="block rounded-full border border-line px-4 py-2 text-[0.92rem] transition peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-accent">
                {d}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="md:col-span-2">
        <legend className="eyebrow text-ink-soft">Herramientas que ya usáis</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {herramientas.map((d) => (
            <label key={d} className="cursor-pointer">
              <input type="checkbox" name="herramientas" value={d} className="peer sr-only" />
              <span className="block rounded-full border border-line px-4 py-2 text-[0.92rem] transition peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-accent">
                {d}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="md:col-span-2">
        <Field label="¿Qué necesitáis? (opcional)" name="mensaje">
          <textarea id="mensaje" name="mensaje" rows={4} className={inputCls} placeholder="Objetivos, fechas, ciudad…" />
        </Field>
      </div>
      <div className="md:col-span-2">
        <Privacy error={e.privacidad} />
      </div>
      <div className="flex flex-wrap items-center gap-4 md:col-span-2">
        <Submit pending={pending}>Enviar solicitud</Submit>
        {state.message && !state.ok && (
          <p role="alert" className="text-[0.95rem] text-red-700">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
