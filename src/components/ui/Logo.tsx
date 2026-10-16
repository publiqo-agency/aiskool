import { site } from "@/lib/site";

/**
 * Logotipo provisional: «A» triangular abierta con un punto (la primera letra, el primer paso)
 * + nombre. Sustituir cuando haya identidad definitiva.
 */
export function Mark({ className = "size-[26px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden fill="none" stroke="currentColor">
      <path d="M4 28 L16 5 L28 28" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="21.5" r="3.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Mark />
      <span
        className={`display text-[1.05rem] tracking-[0.02em] transition-all duration-500 ease-expo ${compact ? "max-sm:hidden" : ""}`}
      >
        {site.name}
      </span>
    </span>
  );
}
