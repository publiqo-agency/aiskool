"use client";

import { useActionState, useEffect } from "react";
import { requestRecurso, type FormState } from "@/app/actions";
import { track } from "@/components/ui/Analytics";
import { Honeypot, Privacy, Submit, inputCls } from "./fields";

export function RecursoForm({ recurso }: { recurso: string }) {
  const [state, action, pending] = useActionState<FormState, FormData>(requestRecurso, { ok: false });
  const e = state.errors ?? {};

  useEffect(() => {
    if (state.ok) track("resource_request", { resource: recurso });
  }, [state.ok, recurso]);

  if (state.ok) return <p role="status" className="mt-6 font-medium text-ink">{state.message}</p>;

  return (
    <form action={action} className="relative mt-6 grid gap-3" noValidate>
      <Honeypot />
      <input type="hidden" name="recurso" value={recurso} />
      <label className="sr-only" htmlFor={`email-${recurso}`}>
        Email de trabajo
      </label>
      <input id={`email-${recurso}`} name="email" type="email" placeholder="Email de trabajo" autoComplete="email" className={inputCls} aria-invalid={!!e.email} required />
      {e.email && <p className="text-[0.85rem] text-red-700">{e.email}</p>}
      <Privacy error={e.privacidad} />
      <div>
        <Submit pending={pending}>Recibir por email</Submit>
      </div>
    </form>
  );
}
