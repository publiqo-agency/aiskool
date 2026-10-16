"use client";

import Link from "next/link";
import { useRef } from "react";
import { departments } from "@/lib/site";
import { ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { Particles } from "@/components/three/Particles";
import { SplitReveal } from "@/components/motion/SplitReveal";

/**
 * Lista tipográfica enfocada: el departamento que pasa por el centro de la pantalla
 * se ve en negro y el resto se desvanece, sobre un túnel de partículas.
 */
export function FocusList() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap_items(root.current);
      if (!items.length || prefersReducedMotion()) return;
      const update = () => {
        const mid = window.innerHeight / 2;
        items.forEach((el) => {
          const r = el.getBoundingClientRect();
          const d = Math.abs(r.top + r.height / 2 - mid) / (window.innerHeight * 0.5);
          const k = Math.max(0, 1 - d);
          el.style.opacity = String(0.14 + k * 0.86);
          el.style.filter = `blur(${(1 - k) * 2.2}px)`;
          el.style.transform = `scale(${0.94 + k * 0.06})`;
        });
      };
      const st = ScrollTrigger.create({ trigger: root.current, start: "top bottom", end: "bottom top", onUpdate: update });
      update();
      return () => st.kill();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-mist py-24 md:py-36" aria-labelledby="focus-title">
      <Particles shape="tunnel" count={4200} size={2.4} color="#111214" opacity={0.55} className="absolute inset-0" />
      <div className="container-x relative text-center">
        <p className="eyebrow text-muted">Por departamento</p>
        <SplitReveal id="focus-title" className="display mx-auto mt-4 max-w-[18ch] text-[clamp(2rem,4.4vw,3.8rem)] text-ink">
          Cada área usa la IA a su manera
        </SplitReveal>
        <p className="mx-auto mt-6 max-w-[56ch] text-[1.08rem] leading-[1.6] text-ink-soft">
          Itinerarios con los casos, las herramientas y los riesgos de cada equipo. Elige el tuyo.
        </p>
      </div>
      <ul className="container-x relative mt-16 flex flex-col items-center md:mt-24">
        {departments.map((d) => (
          <li key={d.label} className="focus-item will-change-[opacity,filter,transform]">
            <Link
              href={d.href}
              className="display block py-1 text-center text-[clamp(1.9rem,5.4vw,5rem)] text-ink transition-colors hover:text-accent"
            >
              {d.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function gsap_items(root: HTMLElement | null) {
  return root ? Array.from(root.querySelectorAll<HTMLElement>(".focus-item")) : [];
}
