"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useVariant } from "@/components/variant/useVariant";
import type { ParticleCanvasProps } from "./ParticleCanvas";

const load = () => import("./ParticleCanvas");
const ParticleCanvas = dynamic(load, { ssr: false });

/** Paletas de la versión «Mezcla»: más luminosa sobre fondo oscuro, sin lima sobre fondo claro. */
const onDark = ["#8b74ff", "#ff7a5c", "#ff6fa5", "#5f86ff", "#c8f169", "#ffffff"];
const onLight = ["#6a4bff", "#ff5a36", "#e8407f", "#2e5bff"];

function isDarkColor(hex = "#e8e8e4") {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.5;
}

/**
 * Carga diferida del canvas de partículas: el chunk se descarga en reposo, el canvas se monta
 * con más de una pantalla de antelación (contexto WebGL y shader listos antes de llegar)
 * y se pausa (frameloop "never") cuando sale de pantalla.
 */
export function Particles({ className = "", ...props }: Omit<ParticleCanvasProps, "active">) {
  const variant = useVariant();
  const palette = props.palette ?? (variant === "mezcla" ? (isDarkColor(props.color) ? onLight : onDark) : undefined);
  const wrap = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    // Precarga del chunk de three.js sin competir con la carga inicial
    const idle = window.requestIdleCallback?.(() => void load(), { timeout: 3000 });
    const timer = idle === undefined ? window.setTimeout(() => void load(), 1500) : undefined;

    const near = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setMounted(true);
        near.disconnect();
      },
      { rootMargin: "150% 0px" },
    );
    const visible = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { rootMargin: "200px 0px" });
    near.observe(el);
    visible.observe(el);
    return () => {
      if (idle !== undefined) window.cancelIdleCallback(idle);
      window.clearTimeout(timer);
      near.disconnect();
      visible.disconnect();
    };
  }, []);

  return (
    <div ref={wrap} className={`pointer-events-none ${className}`} aria-hidden>
      {mounted && <ParticleCanvas {...props} palette={palette} active={active} className="!pointer-events-none" />}
    </div>
  );
}
