"use client";

import { useActionState, useEffect, useState } from "react";
import { questions } from "@/lib/aiact-test";
import { submitTest, type FormState } from "@/app/actions";
import { track } from "@/components/ui/Analytics";
import { BracketButton } from "@/components/ui/BracketButton";
import { Field, Honeypot, Privacy, Submit, inputCls } from "./fields";

/** Test paso a paso: preguntas → datos de contacto → resultado (también por email). */
export function AiActTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [state, action, pending] = useActionState<FormState, FormData>(submitTest, { ok: false });
  const total = questions.length;
  const onContact = step >= total;
  const e = state.errors ?? {};

  useEffect(() => {
    if (state.ok) track("aiact_test_completed", { score: state.result?.pct });
  }, [state.ok, state.result?.pct]);

  if (state.ok && state.result) {
    const r = state.result;
    return (
      <div role="status" className="rounded-[20px] bg-surface p-7 md:p-12">
        <p className="eyebrow text-muted">Tu resultado</p>
        <p className="display mt-4 text-[clamp(2.4rem,6vw,4.4rem)]">{r.pct}%</p>
        <p className="mt-2 text-[1.4rem] font-semibold">{r.level.label}</p>
        <p className="mt-3 max-w-[60ch] text-ink-soft">{r.level.text}</p>
        {r.tips.length > 0 && (
          <>
            <h2 className="eyebrow mt-10 text-muted">Próximos pasos recomendados</h2>
            <ol className="mt-4 space-y-3">
              {r.tips.map((t, i) => (
                <li key={t} className="flex gap-4">
                  <span className="eyebrow mt-1 text-muted">0{i + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </>
        )}
        <p className="mt-8 text-[0.9rem] text-muted">Te hemos enviado este informe por email. Test orientativo, no constituye asesoramiento jurídico.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <BracketButton href="/diagnostico" tone="accent" size="lg">
            Revisarlo en un diagnóstico gratuito
          </BracketButton>
          <BracketButton href="/ai-act" size="lg">
            Ver Pack Cumplimiento Art. 4
          </BracketButton>
        </div>
      </div>
    );
  }

  const q = questions[Math.min(step, total - 1)];

  return (
    <form action={action} className="relative rounded-[20px] bg-surface p-6 md:p-12" noValidate>
      <Honeypot />
      {Object.entries(answers).map(([id, v]) => (
        <input key={id} type="hidden" name={`q_${id}`} value={v} />
      ))}

      {/* Progreso */}
      <div className="flex items-center justify-between eyebrow text-muted">
        <span>{onContact ? "Último paso" : `Pregunta ${step + 1} de ${total}`}</span>
        <span>{Math.round((Math.min(step, total) / total) * 100)}%</span>
      </div>
      <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-line" aria-hidden>
        <div className="h-full bg-accent transition-all duration-700 ease-expo" style={{ width: `${(Math.min(step, total) / total) * 100}%` }} />
      </div>

      {!onContact ? (
        <fieldset key={q.id} className="mt-10">
          <legend className="text-[clamp(1.3rem,2.4vw,1.8rem)] font-semibold leading-tight">{q.q}</legend>
          {q.help && <p className="mt-3 text-muted">{q.help}</p>}
          <div className="mt-8 grid gap-3">
            {q.options.map((o, i) => (
              <button
                key={o.label}
                type="button"
                onClick={() => {
                  setAnswers((a) => ({ ...a, [q.id]: i }));
                  setStep((s) => s + 1);
                }}
                className={`rounded-[12px] border px-5 py-4 text-left text-[1.05rem] transition hover:border-ink ${answers[q.id] === i ? "border-ink bg-paper" : "border-line"}`}
              >
                {o.label}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button type="button" onClick={() => setStep((s) => s - 1)} className="eyebrow mt-8 text-muted hover:text-ink">
              ← Anterior
            </button>
          )}
        </fieldset>
      ) : (
        <div className="mt-10">
          <p className="text-[clamp(1.3rem,2.4vw,1.8rem)] font-semibold leading-tight">¿A dónde te enviamos el resultado?</p>
          <p className="mt-3 text-muted">Lo verás en pantalla y te mandamos el informe con los próximos pasos.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Field label="Nombre" name="nombre" error={e.nombre}>
              <input id="nombre" name="nombre" autoComplete="name" className={inputCls} aria-invalid={!!e.nombre} required />
            </Field>
            <Field label="Email de trabajo" name="email" error={e.email}>
              <input id="email" name="email" type="email" autoComplete="email" className={inputCls} aria-invalid={!!e.email} required />
            </Field>
            <Field label="Empresa" name="empresa" error={e.empresa}>
              <input id="empresa" name="empresa" autoComplete="organization" className={inputCls} aria-invalid={!!e.empresa} required />
            </Field>
          </div>
          <div className="mt-6">
            <Privacy error={e.privacidad} />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Submit pending={pending}>Ver mi resultado</Submit>
            <button type="button" onClick={() => setStep(total - 1)} className="eyebrow text-muted hover:text-ink">
              ← Volver
            </button>
            {state.message && !state.ok && (
              <p role="alert" className="text-[0.95rem] text-red-700">
                {state.message}
              </p>
            )}
          </div>
        </div>
      )}
    </form>
  );
}
