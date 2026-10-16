"use client";

import { useRef } from "react";
import { pillars } from "@/lib/site";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { DotIllustration } from "@/components/motion/DotIllustration";
import { BracketButton } from "@/components/ui/BracketButton";

const tones = {
  night: { card: "bg-night text-white", dot: "#f3f2ee" },
  cobalt: { card: "bg-cobalt text-white", dot: "#ffffff" },
  sage: { card: "bg-sage text-ink", dot: "#111214" },
  sand: { card: "bg-sand text-ink", dot: "#111214" },
} as const;

/** Panel claro que sube sobre el hero + los 4 pilares. */
export function Intro() {
  const cards = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".pillar", {
        yPercent: 18,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: cards.current, start: "top 85%", once: true },
      });
    },
    { scope: cards },
  );

  return (
    <section className="relative z-20 -mt-6 rounded-t-[22px] bg-paper pt-24 pb-24 md:pt-36 md:pb-36" aria-labelledby="intro-title">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-muted">El problema</p>
          <SplitReveal id="intro-title" className="display mt-4 text-[clamp(2rem,4.2vw,3.6rem)]">
            Tu equipo ya usa IA. La pregunta es cómo.
          </SplitReveal>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="border-t border-line pt-6">
            <p className="text-[1.15rem] leading-[1.6] text-ink-soft md:text-[1.25rem]">
              Correos redactados con ChatGPT, contratos resumidos con cuentas personales, informes que nadie revisa. La IA ya está dentro
              de tu empresa, con o sin política. Enseñamos a cada equipo a usarla bien: con método, con criterio y sin poner en riesgo
              vuestros datos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BracketButton href="/formaciones">Ver formaciones</BracketButton>
              <BracketButton href="/metodologia" className="text-muted">
                Cómo trabajamos
              </BracketButton>
            </div>
          </div>
        </div>
      </div>

      <ul ref={cards} className="container-x mt-20 grid grid-cols-1 sm:grid-cols-2 md:mt-28 lg:grid-cols-4">
        {pillars.map((p, i) => {
          const t = tones[p.tone];
          return (
            <li
              key={p.n}
              className={`pillar relative flex min-h-[520px] flex-col rounded-[20px] p-7 md:min-h-[600px] ${t.card} ${i > 0 ? "lg:-ml-5" : ""} max-lg:mt-[-16px] max-sm:first:mt-0 sm:max-lg:[&:nth-child(-n+2)]:mt-0`}
              style={{ zIndex: i + 1 }}
            >
              <h3 className="display text-center text-[clamp(1.6rem,2.4vw,2.2rem)]">{p.title}</h3>
              <DotIllustration pattern={p.pattern} color={t.dot} className="mx-auto mt-6 h-[260px] w-full max-w-[260px] flex-1" />
              <p className="eyebrow mt-6 text-center opacity-70">
                {p.n} / 0{pillars.length}
              </p>
              <p className="mx-auto mt-3 max-w-[30ch] text-center text-[0.98rem] leading-[1.5] opacity-90">{p.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
