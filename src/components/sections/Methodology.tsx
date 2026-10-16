"use client";

import { useRef } from "react";
import { methodology } from "@/lib/site";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { Particles } from "@/components/three/Particles";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { BracketButton } from "@/components/ui/BracketButton";

const tones = {
  cobalt: "bg-cobalt text-white",
  sage: "bg-sage text-ink",
  sand: "bg-sand text-ink",
  night: "bg-surface text-ink",
} as const;

/** Texto fijo a la izquierda y tarjetas que se apilan al hacer scroll. */
export function Methodology() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: { trigger: next, start: "top bottom", end: "top 20%", scrub: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative bg-night text-white" aria-labelledby="method-title">
      <div className="container-x grid gap-10 py-24 md:grid-cols-12 md:py-36">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <p className="eyebrow text-white/60">Metodología</p>
            <SplitReveal id="method-title" className="display mt-4 text-[clamp(2rem,4vw,3.4rem)]">
              Formar no es dar una charla
            </SplitReveal>
            <div className="mt-6 h-px w-full bg-night-line" />
            <p className="mt-6 max-w-[46ch] eyebrow leading-[1.7] text-white/60">
              Diagnóstico, diseño a medida, práctica y seguimiento. Medimos la adopción y te entregamos la documentación.
            </p>
            <div className="mt-8">
              <BracketButton href="/metodologia" tone="dark">
                Ver el proceso
              </BracketButton>
            </div>
            <Particles shape="cloud" count={2200} size={2.2} color="#d8d8d4" opacity={0.7} className="relative mt-6 hidden h-[340px] md:block" />
          </div>
        </div>
        <ol className="flex flex-col gap-5 md:col-span-7">
          {methodology.map((m) => (
            <li
              key={m.n}
              className={`stack-card sticky top-24 flex min-h-[380px] origin-top flex-col justify-between rounded-[20px] p-7 md:top-28 md:min-h-[440px] md:p-10 ${tones[m.tone]}`}
            >
              <h3 className="display text-[clamp(1.6rem,2.6vw,2.3rem)]">{m.title}</h3>
              <div>
                <p className="eyebrow opacity-70">{m.n}</p>
                <div className="mt-3 h-px w-full bg-current opacity-20" />
                <p className="mt-5 max-w-[48ch] text-[1.1rem] leading-[1.55]">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
