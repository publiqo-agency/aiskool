"use client";

import { useEffect, useRef } from "react";
import { variants, type Variant } from "@/lib/variant";
import { ScrollTrigger } from "@/lib/gsap";
import { setVariant, useVariant } from "./useVariant";

/** Pilla fija abajo a la izquierda para cambiar entre versiones de diseño. */
export function VariantPill() {
  const current = useVariant();
  const first = useRef(true);

  // Al cambiar de versión cambian alturas y posiciones: se recalculan los ScrollTrigger
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [current]);

  const index = variants.findIndex((v) => v.id === current);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = variants[(index + (e.key === "ArrowRight" ? 1 : variants.length - 1)) % variants.length].id;
    setVariant(next);
    (e.currentTarget.querySelector(`[data-id="${next}"]`) as HTMLElement | null)?.focus();
  };

  return (
    <div
      data-variant-pill
      role="radiogroup"
      aria-label="Versión de diseño"
      onKeyDown={onKey}
      className="fixed bottom-4 left-4 z-[70] flex items-center gap-1 rounded-full border border-black/10 bg-white/90 p-1 font-sans text-[0.8rem] font-medium text-[#17141f] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] backdrop-blur-md"
    >
      <span aria-hidden className="pl-2.5 pr-1 text-[0.7rem] tracking-wide text-black/45 uppercase max-sm:hidden">
        Versión
      </span>
      <span className="relative grid grid-cols-3">
        {/* Indicador que se desliza */}
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-[#17141f] transition-transform duration-500 ease-expo data-[v=color]:bg-grad data-[v=mezcla]:bg-[#6a4bff]"
          data-v={current}
          style={{ transform: `translateX(${Math.max(index, 0) * 100}%)` }}
        />
        {variants.map((v) => {
          const on = v.id === current;
          return (
            <button
              key={v.id}
              type="button"
              role="radio"
              aria-checked={on}
              data-id={v.id}
              tabIndex={on ? 0 : -1}
              onClick={() => setVariant(v.id as Variant)}
              className={`relative z-10 rounded-full px-3.5 py-1.5 transition-colors duration-300 ${on ? "text-white" : "text-black/60 hover:text-black"}`}
            >
              {v.label}
            </button>
          );
        })}
      </span>
    </div>
  );
}
