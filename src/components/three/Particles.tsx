"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { ParticleCanvasProps } from "./ParticleCanvas";

const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false });

/**
 * Carga diferida del canvas de partículas: solo se monta cerca del viewport
 * y se pausa (frameloop "never") cuando sale de pantalla.
 */
export function Particles({ className = "", ...props }: Omit<ParticleCanvasProps, "active">) {
  const wrap = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMounted(true);
        setActive(entry.isIntersecting);
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className={`pointer-events-none ${className}`} aria-hidden>
      {mounted && <ParticleCanvas {...props} active={active} className="!pointer-events-none" />}
    </div>
  );
}
