"use client";

import { useEffect, useRef } from "react";

export type Pattern = "grid" | "wave" | "rays" | "helix";

/**
 * Ilustración animada de puntos en canvas 2D (una por tarjeta).
 * Solo anima mientras es visible y respeta prefers-reduced-motion.
 */
export function DotIllustration({ pattern, color = "#111214", className = "" }: { pattern: Pattern; color?: string; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = false;
    let t = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const dot = (x: number, y: number, s: number, a = 1) => {
      ctx.globalAlpha = Math.max(0, Math.min(1, a));
      ctx.beginPath();
      ctx.arc(x, y, s, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      const cx = w / 2;
      const cy = h / 2;

      if (pattern === "grid") {
        // Retícula que se ordena: los puntos «encajan» siguiendo una diagonal
        const cols = 16;
        const rows = 20;
        const gx = w / (cols + 1);
        const gy = h / (rows + 1);
        for (let i = 0; i < cols; i++)
          for (let j = 0; j < rows; j++) {
            const phase = Math.sin(t * 0.8 + (i + j) * 0.25);
            const s = 0.6 + Math.max(0, phase) * 1.6;
            dot(gx * (i + 1), gy * (j + 1), s, 0.35 + Math.max(0, phase) * 0.65);
          }
      } else if (pattern === "wave") {
        const lines = 22;
        const pts = 46;
        for (let l = 0; l < lines; l++)
          for (let p = 0; p < pts; p++) {
            const x = (p / (pts - 1)) * w * 0.9 + w * 0.05;
            const base = (l / (lines - 1)) * h * 0.5 + h * 0.25;
            const y = base + Math.sin(p * 0.22 + t + l * 0.18) * h * 0.12;
            dot(x, y, 0.9, 0.25 + (l / lines) * 0.6);
          }
      } else if (pattern === "rays") {
        const rays = 28;
        const pts = 26;
        for (let r = 0; r < rays; r++) {
          const ang = (r / rays) * Math.PI * 2 + t * 0.15;
          for (let p = 1; p < pts; p++) {
            const d = (p / pts) * Math.min(w, h) * 0.48;
            const pulse = (Math.sin(t * 1.5 - p * 0.35) + 1) / 2;
            dot(cx + Math.cos(ang) * d, cy + Math.sin(ang) * d * 0.9, 0.5 + pulse * 1.1, 0.2 + pulse * 0.7);
          }
        }
      } else {
        // hélice (doble espiral)
        const pts = 140;
        for (let s = 0; s < 2; s++)
          for (let p = 0; p < pts; p++) {
            const k = p / pts;
            const ang = k * Math.PI * 6 + t + s * Math.PI;
            const x = cx + Math.cos(ang) * w * 0.28;
            const y = k * h * 0.86 + h * 0.07;
            const depth = (Math.sin(ang) + 1) / 2;
            dot(x, y, 0.6 + depth * 1.6, 0.2 + depth * 0.8);
            if (p % 7 === 0 && s === 0) {
              for (let q = 1; q < 8; q++) {
                const x2 = cx + Math.cos(ang) * w * 0.28 * (1 - (q / 8) * 2);
                dot(x2, y, 0.5, 0.25);
              }
            }
          }
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      t += 0.012;
      draw();
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    };

    resize();
    draw();
    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [pattern, color]);

  return <canvas ref={ref} className={className} aria-hidden />;
}
