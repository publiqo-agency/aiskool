"use client";

import { stats } from "@/lib/site";
import { Gradient } from "@/components/three/Gradient";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ScrubWords } from "@/components/motion/ScrubWords";
import { CountUp } from "@/components/motion/CountUp";
import { BracketButton } from "@/components/ui/BracketButton";
import { LogosCard, statsFallbackLabel } from "./LogosCard";

/**
 * Hero de la versión «Color»: degradado vivo a sangre, titular centrado en minúscula,
 * cifras y una gran tarjeta oscura que sube con una frase que se enciende al hacer scroll.
 */
export function HeroColor() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#1a0b33] text-white">
        <Gradient className="absolute inset-0" />

        <div className="container-x relative z-10 flex min-h-[94dvh] flex-col items-center justify-center pt-32 pb-20 text-center">
          {/* Solo una de las dos cabeceras está visible; la otra va con display:none */}
          <p role="heading" aria-level={1} className="display max-w-[16ch] text-[clamp(2.5rem,6.2vw,5.6rem)]">
            <SplitReveal as="span" immediate className="block">
              Formamos equipos que usan la IA con criterio
            </SplitReveal>
          </p>
          <p className="mt-7 max-w-[58ch] text-[1.08rem] leading-[1.6] text-white/85 md:text-[1.2rem]">
            Formación en inteligencia artificial para empresas: alfabetización según el art. 4 del AI Act, ChatGPT, Claude, Copilot,
            agentes y automatización. En tus oficinas o online en directo.
          </p>

          <dl className="mt-12 grid w-full max-w-[860px] grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="display text-[clamp(1.6rem,3vw,2.6rem)] font-normal">
                  {s.value !== null ? <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} /> : s.fallback}
                </dd>
                <dd className="mt-1 text-[0.92rem] text-white/75">{s.value !== null ? s.label : statsFallbackLabel[s.label] ?? s.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <BracketButton href="/diagnostico" tone="dark" size="lg" className="!bg-white !text-ink">
              Diagnóstico gratuito
            </BracketButton>
            <BracketButton href="/test-ai-act" tone="dark" size="lg">
              Test AI Act
            </BracketButton>
          </div>
        </div>

        {/* Tarjeta que sube sobre el degradado */}
        <div className="relative z-10 px-3 pb-3 md:px-6 md:pb-6">
          <div className="relative grid min-h-[78vh] place-items-center overflow-hidden rounded-[28px] bg-[#120a22] px-6 py-24 md:rounded-[36px] md:px-16">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(60%_70%_at_85%_40%,rgb(122_84_255/0.55),transparent_70%),radial-gradient(40%_50%_at_10%_100%,rgb(232_64_127/0.25),transparent_70%)]"
            />
            <ScrubWords
              text="Con método, con criterio y sin poner en riesgo vuestros datos."
              className="display relative max-w-[18ch] text-center text-[clamp(2.2rem,6vw,5.8rem)] text-white"
            />
          </div>
        </div>
      </section>

      <div className="bg-paper pt-16 md:pt-24">
        <LogosCard showStats={false} />
      </div>
    </>
  );
}
