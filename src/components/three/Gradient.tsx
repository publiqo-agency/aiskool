"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

const GradientCanvas = dynamic(() => import("./GradientCanvas"), { ssr: false });

/**
 * Fondo de degradado vivo. Debajo siempre hay un degradado CSS (`mesh`) por si no hay WebGL;
 * el canvas solo se monta cuando el bloque es visible (no con display:none) y se pausa fuera de pantalla.
 */
export function Gradient({ className = "" }: { className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStill(prefersReducedMotion());
          setMounted(true);
        }
        setActive(entry.isIntersecting);
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className={`mesh pointer-events-none ${className}`} aria-hidden>
      {mounted && <GradientCanvas active={active} still={still} className="!absolute inset-0 !pointer-events-none" />}
    </div>
  );
}
