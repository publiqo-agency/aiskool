"use client";

import { useRef } from "react";
import { Particles } from "@/components/three/Particles";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { BracketButton } from "@/components/ui/BracketButton";
import { Mark } from "@/components/ui/Logo";
import { LogosCard } from "./LogosCard";
import { HeroColor } from "./HeroColor";

/**
 * Las tres versiones del hero están en el DOM y se muestran por CSS según <html data-variant>:
 * así no hay salto al hidratar. Los canvas solo se montan en la versión visible.
 */
export function Hero() {
  return (
    <>
      <div className="color:hidden">
        <HeroClassic />
      </div>
      <div className="hidden color:block">
        <HeroColor />
      </div>
    </>
  );
}

/**
 * Hero oscuro y alargado: la esfera de partículas queda fija mientras se hace scroll,
 * se ordena en una retícula y sube la tarjeta blanca con las empresas formadas.
 * En «Mezcla» lleva brillos de color detrás y la esfera teñida.
 */
function HeroClassic() {
  const wrap = useRef<HTMLElement>(null);

  return (
    <section ref={wrap} className="relative bg-night text-white" aria-labelledby="hero-title">
      {/* Capa fija con el campo de partículas */}
      <div className="absolute inset-0" aria-hidden>
        <div className="sticky top-0 h-dvh overflow-hidden">
          <div className="glow grain absolute inset-0 hidden mezcla:block" />
          <Particles
            shape="sphere"
            count={2900}
            size={3.2}
            color="#e9e9e4"
            scrollTrigger={wrap}
            scrollStart="top top"
            scrollEnd="bottom 60%"
            className="absolute inset-0"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night to-transparent" />
        </div>
      </div>

      {/* Primera pantalla */}
      <div className="container-x relative z-10 flex min-h-dvh flex-col pt-28 pb-8 md:pt-32">
        <h1 id="hero-title" className="display flex flex-1 flex-col justify-center gap-[0.35em] text-[clamp(2.2rem,5.6vw,5.6rem)]">
          <SplitReveal as="span" immediate className="block max-w-[11ch]">
            Formamos equipos
          </SplitReveal>
          <SplitReveal as="span" immediate delay={0.15} className="block max-w-[13ch] self-end text-right">
            que usan la IA <span className="mezcla:text-grad">con criterio</span>
          </SplitReveal>
        </h1>

        <div className="mt-10 grid items-end gap-6 border-t border-white/15 pt-6 md:grid-cols-12">
          <div className="flex flex-wrap gap-3 md:col-span-4">
            <BracketButton href="/diagnostico" tone="dark" size="lg">
              Diagnóstico gratuito
            </BracketButton>
            <BracketButton href="/test-ai-act" tone="dark" size="lg" className="text-white/70">
              Test AI Act
            </BracketButton>
          </div>
          <p className="eyebrow leading-[1.6] text-white/60 md:col-span-6 md:col-start-6">
            Formación en inteligencia artificial para empresas. Alfabetización según el art. 4 del AI Act, ChatGPT, Claude, Copilot,
            agentes y automatización. En tus oficinas, en cualquier punto de España, u online en directo.
          </p>
          <Mark className="hidden size-[44px] justify-self-end text-white mezcla:text-lime md:col-span-1 md:block" />
        </div>
      </div>

      {/* Extensión del hero: tarjeta de empresas formadas */}
      <div className="relative z-10 pt-[12vh] pb-[18vh]">
        <LogosCard />
      </div>
    </section>
  );
}
