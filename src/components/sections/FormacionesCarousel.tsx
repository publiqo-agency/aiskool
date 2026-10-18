"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { formaciones, categorias } from "@/lib/formaciones";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { BracketButton } from "@/components/ui/BracketButton";

const featured = formaciones.filter((f) => f.featured).concat(formaciones.filter((f) => !f.featured && f.categoria === "herramientas"));

/** Carrusel con la tarjeta central destacada y las laterales atenuadas. */
export function FormacionesCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });
  const [selected, setSelected] = useState(0);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  const onSelect = useCallback(() => embla && setSelected(embla.selectedScrollSnap()), [embla]);
  useEffect(() => {
    if (!embla) return;
    // El carrusel arranca en el índice 0 (estado inicial); solo nos suscribimos a los cambios
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    return () => {
      embla.off("select", onSelect);
      embla.off("reInit", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <section className="overflow-hidden bg-mist pt-10 pb-24 md:pb-36" aria-labelledby="carousel-title">
      <div className="container-x text-center">
        <p className="eyebrow tag text-muted color:mx-auto color:text-accent">Formaciones</p>
        <SplitReveal id="carousel-title" className="display mx-auto mt-4 max-w-[20ch] text-[clamp(1.8rem,3.4vw,2.8rem)]">
          De la base común a los agentes
        </SplitReveal>
        <div className="mt-8">
          <BracketButton href="/formaciones">Ver catálogo completo</BracketButton>
        </div>
      </div>

      <div
        className="relative mt-14 cursor-none md:mt-20"
        onPointerMove={(e) => {
          if (e.pointerType !== "mouse") return;
          const r = e.currentTarget.getBoundingClientRect();
          setCursor({ x: e.clientX - r.left, y: e.clientY - r.top });
        }}
        onPointerLeave={() => setCursor(null)}
      >
        <div ref={emblaRef} className="overflow-hidden">
          <ul className="flex touch-pan-y">
            {featured.map((f, i) => {
              const active = i === selected;
              return (
                <li key={f.slug} className="min-w-0 shrink-0 grow-0 basis-[82%] px-2 sm:basis-[46%] lg:basis-[28%] md:px-3">
                  <article
                    className={`relative flex h-full min-h-[440px] flex-col rounded-[20px] p-7 transition-all duration-700 ease-expo color:rounded-[28px] mezcla:rounded-[26px] ${
                      active
                        ? "scale-100 bg-surface opacity-100 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] color:bg-white"
                        : "scale-[0.92] bg-surface/60 opacity-55 color:bg-white/70"
                    }`}
                  >
                    <span aria-hidden className="absolute top-5 left-5 size-[8px] border-t border-l border-ink/50 color:hidden mezcla:hidden" />
                    <span aria-hidden className="absolute top-5 right-5 size-[8px] border-t border-r border-ink/50 color:hidden mezcla:hidden" />
                    <span aria-hidden className="mx-auto mb-5 hidden h-1.5 w-16 rounded-full bg-grad mezcla:block" />
                    <p className="eyebrow tag text-center text-muted color:mx-auto color:text-accent">{categorias[f.categoria]}</p>
                    <h3 className="display mt-6 text-center text-[1.65rem]">{f.title}</h3>
                    <p className="mt-6 flex-1 text-center text-[1rem] leading-[1.55] text-ink-soft">{f.short}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-5 text-[0.85rem]">
                      <div>
                        <dt className="eyebrow text-muted">Duración</dt>
                        <dd className="mt-1">{f.duration}</dd>
                      </div>
                      <div>
                        <dt className="eyebrow text-muted">Desde</dt>
                        <dd className="mt-1">{f.priceFrom}</dd>
                      </div>
                    </dl>
                    <Link href={`/formaciones/${f.slug}`} className="eyebrow mt-6 text-center text-ink underline-offset-4 hover:underline">
                      <span className="absolute inset-0" aria-hidden />
                      Ver temario
                    </Link>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Cursor de arrastre */}
        {cursor && (
          <span
            aria-hidden
            className="pointer-events-none absolute z-10 grid size-[76px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink eyebrow text-[0.65rem] text-white color:bg-accent mezcla:bg-grad max-md:hidden"
            style={{ left: cursor.x, top: cursor.y }}
          >
            Arrastra
          </span>
        )}
      </div>

      <div className="mt-10 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => embla?.scrollPrev()}
          className="grid size-[38px] place-items-center rounded-[6px] bg-surface text-ink transition hover:bg-ink hover:text-white color:size-[48px] color:rounded-full color:bg-accent color:text-white mezcla:rounded-full"
          aria-label="Anterior"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => embla?.scrollNext()}
          className="grid size-[38px] place-items-center rounded-[6px] bg-surface text-ink transition hover:bg-ink hover:text-white color:size-[48px] color:rounded-full color:bg-accent color:text-white mezcla:rounded-full"
          aria-label="Siguiente"
        >
          →
        </button>
      </div>
    </section>
  );
}
