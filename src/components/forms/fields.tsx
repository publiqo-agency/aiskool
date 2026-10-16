import Link from "next/link";
import type { ReactNode } from "react";

export const inputCls =
  "mt-2 block w-full rounded-[10px] border border-line bg-surface px-4 py-3 text-[1rem] text-ink outline-none transition placeholder:text-muted/70 focus:border-ink aria-[invalid=true]:border-red-600";

export function Field({ label, name, error, children, hint }: { label: string; name: string; error?: string; children: ReactNode; hint?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-ink-soft">
        {label}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-[0.85rem] text-muted">{hint}</p>}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-[0.85rem] text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

/** Campo trampa invisible para bots (honeypot). */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        No rellenar
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function Privacy({ error }: { error?: string }) {
  return (
    <div>
      <label className="flex items-start gap-3 text-[0.92rem] text-ink-soft">
        <input type="checkbox" name="privacidad" className="mt-1 size-4 accent-[var(--accent)]" required />
        <span>
          He leído y acepto la{" "}
          <Link href="/privacidad" className="underline underline-offset-2">
            política de privacidad
          </Link>
          . Usaremos tus datos solo para responder a tu solicitud.
        </span>
      </label>
      {error && <p className="mt-1.5 text-[0.85rem] text-red-700">{error}</p>}
    </div>
  );
}

export function Submit({ pending, children }: { pending: boolean; children: ReactNode }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="eyebrow inline-flex h-[52px] items-center justify-center rounded-[8px] bg-accent px-7 text-accent-ink transition hover:brightness-110 disabled:opacity-60"
    >
      {pending ? "Enviando…" : children}
    </button>
  );
}
