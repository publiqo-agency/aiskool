"use client";

import { useEffect, useRef } from "react";
import { useVariant } from "@/components/variant/useVariant";

export type Figure = "torus" | "terrain" | "pyramid" | "orbits" | "horizon";

type Colors = { base: string; palette: string[] | null; accent: string; mono: string };
type Draw = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number, c: Colors) => void;

const TAU = Math.PI * 2;

/** Paletas de la versión «Mezcla», las mismas que las partículas de la home. */
const onDark = ["#8b74ff", "#ff7a5c", "#ff6fa5", "#5f86ff", "#c8f169", "#ffffff"];
const onLight = ["#ff5a36", "#e8407f", "#6a4bff", "#2e5bff"];

/** Ratón sobre la figura que se está pintando: cada HeroFigure lo fija justo antes de dibujar su fotograma. */
type Field = { x: number; y: number; f: number; r: number; n: number };
let field: Field | null = null;

/** Pico del paisaje bajo el servicio señalado en el banner: X en pantalla, o null para aplanarlo. */
let focusX: number | null = null;
export const focusFigure = (x: number | null) => {
  focusX = x;
};
/** Pico de la figura que se está pintando (X en el canvas y fuerza), como `field`. */
let peak: { x: number; f: number } | null = null;

const jitter = (n: number) => {
  const s = Math.sin(n * 12.9898) * 43758.5453;
  return s - Math.floor(s);
};

const dot = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number, a: number) => {
  if (field) {
    // Como el shader de las partículas: los puntos se apartan del cursor, crecen un poco y vuelven al irse
    if (field.f > 0.001) {
      const dx = x - field.x;
      const dy = y - field.y;
      const d = Math.hypot(dx, dy) + 0.001;
      if (d < field.r) {
        const k = (1 - d / field.r) ** 2 * field.f;
        const push = field.r * (0.45 + jitter(field.n) * 0.3) * k;
        x += (dx / d) * push;
        y += (dy / d) * push;
        r *= 1 + k * 0.6;
        a += k * 0.4;
      }
    }
    field.n++;
  }
  ctx.globalAlpha = Math.max(0, Math.min(1, a));
  ctx.beginPath();
  ctx.arc(x, y, r, 0, TAU);
  ctx.fill();
};

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function random(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let r = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

/** Toro que gira despacio sobre sí mismo mientras los puntos fluyen por el anillo. */
function torus(): Draw {
  const pts: [number, number, number][] = [];
  for (let i = 0; i < 72; i++) for (let j = 0; j < 28; j++) pts.push([(i / 72) * TAU, (j / 28) * TAU, (i * 7 + j * 13) % 6]);
  return (ctx, w, h, t, c) => {
    const s = Math.min(w, h) * 0.34;
    const cx = w * 0.5;
    const cy = h * 0.5;
    const ay = t * 0.35;
    const ax = 0.95 + Math.sin(t * 0.3) * 0.1;
    const [cy1, sy1, cx1, sx1] = [Math.cos(ay), Math.sin(ay), Math.cos(ax), Math.sin(ax)];
    for (const [u0, v, k] of pts) {
      const u = u0 + t * 0.1;
      const x = (1 + 0.42 * Math.cos(v)) * Math.cos(u);
      const y = 0.42 * Math.sin(v);
      const z = (1 + 0.42 * Math.cos(v)) * Math.sin(u);
      const x1 = x * cy1 + z * sy1;
      const z1 = -x * sy1 + z * cy1;
      const y1 = y * cx1 - z1 * sx1;
      const z2 = y * sx1 + z1 * cx1;
      const f = 3.2 / (3.2 + z2);
      const depth = (1.4 - z2) / 2.8;
      ctx.fillStyle = c.palette ? c.palette[k % c.palette.length] : c.base;
      dot(ctx, cx + x1 * s * f, cy + y1 * s * f, (0.5 + depth * 1.7) * f, 0.12 + depth * 0.88);
    }
  };
}

/** Paisaje de puntos en perspectiva que ondula hacia el horizonte. */
function terrain(): Draw {
  return (ctx, w, h, t0, c) => {
    const t = t0 * 1.33;
    const cols = Math.max(60, Math.min(140, Math.round(w / 12)));
    const rows = 38;
    const horizon = h * 0.1;
    const spread = Math.max(70, w * 0.055);
    for (let j = 0; j < rows; j++) {
      const z = j / (rows - 1);
      const d = 4.2 - z * 3.4;
      const a = 0.08 + (1 - d / 4.2) * 0.95;
      for (let i = 0; i < cols; i++) {
        const xw = (i / (cols - 1) - 0.5) * 4.8;
        let hg = 0.22 * Math.sin(xw * 1.6 + t * 1.1 + z * 3) * Math.cos(z * 4.2 - t * 0.7) + 0.1 * Math.sin(xw * 3.1 - t * 0.8);
        const sx = w / 2 + (xw * w * 0.28) / d;
        if (sx < -10 || sx > w + 10) continue;
        // El terreno se levanta y se enciende bajo el servicio señalado
        const g = peak && peak.f > 0.001 ? Math.exp(-(((sx - peak.x) / spread) ** 2)) * peak.f : 0;
        hg += g * 0.42 * (0.35 + z * 0.65);
        const lift = Math.max(0, hg) * 1.6;
        ctx.fillStyle = g > 0.55 ? c.accent : c.palette ? c.palette[Math.min(3, Math.floor((i / cols) * 4))] : c.base;
        dot(ctx, sx, horizon + ((1.1 - hg) * h * 0.62) / d, 0.35 + 1.5 / d + lift, a + lift * 0.3);
      }
    }
  };
}

const tiers = ["Riesgo inaceptable", "Alto riesgo", "Riesgo limitado", "Riesgo mínimo"];

/** Pirámide de riesgo del AI Act en cuatro niveles separados, girando despacio. */
function pyramid(): Draw {
  const gap = 0.08;
  const tierH = (2 - gap * 3) / 4;
  const pts: [number, number, number, number][] = [];
  for (let k = 0; k < 4; k++) {
    const y0 = -1 + k * (tierH + gap);
    for (let r = 0; r <= 9; r++) {
      const y = y0 + (r / 9) * tierH;
      const hw = ((y + 1) / 2) * 0.95;
      const n = Math.max(1, Math.round((hw * 2) / 0.055));
      for (let f = 0; f < 4; f++)
        for (let i = 0; i < n; i++) {
          const s = -hw + (i / n) * hw * 2;
          const [x, z] = f === 0 ? [s, hw] : f === 1 ? [hw, -s] : f === 2 ? [-s, -hw] : [-hw, s];
          pts.push([x, y, z, k]);
        }
    }
  }
  return (ctx, w, h, t, c) => {
    // Pirámide y etiquetas centradas como grupo; sin sitio, solo la pirámide
    const labels = w > 520;
    const s = Math.min(labels ? (w - 230) / 2.84 : w * 0.34, h * 0.36);
    const cx = labels ? (w - (2.84 * s + 190)) / 2 + 1.42 * s : w * 0.5;
    const cy = h * 0.5;
    const ay = t * 0.3 + 0.6;
    const ax = 0.32;
    const [ca, sa, cb, sb] = [Math.cos(ay), Math.sin(ay), Math.cos(ax), Math.sin(ax)];
    for (const [x, y, z, k] of pts) {
      const x1 = x * ca + z * sa;
      const z1 = -x * sa + z * ca;
      const y1 = y * cb - z1 * sb;
      const z2 = y * sb + z1 * cb;
      const f = 3.4 / (3.4 + z2);
      const depth = (1.1 - z2) / 2.2;
      ctx.fillStyle = k === 0 ? c.accent : c.palette ? c.palette[k % c.palette.length] : c.base;
      dot(ctx, cx + x1 * s * f, cy + y1 * s * f, (0.6 + depth * 1.5) * f, 0.15 + depth * 0.85);
    }
    if (!labels) return;
    // Etiquetas de cada nivel, a la altura de su centro
    ctx.fillStyle = c.base;
    ctx.font = `500 11px ${c.mono}`;
    ctx.textBaseline = "middle";
    const lx = cx + s * 1.42 + 24;
    tiers.forEach((label, k) => {
      const ym = -1 + k * (tierH + gap) + tierH / 2;
      const ly = cy + ym * cb * s;
      dot(ctx, lx, ly, 2.2, k === 0 ? 1 : 0.5);
      ctx.globalAlpha = 0.6;
      ctx.fillText(label.toUpperCase(), lx + 14, ly);
    });
  };
}

/** Cuatro órbitas de puntos que se cruzan, con inclinaciones según la semilla (portadas del blog). */
function orbits(seed: number): Draw {
  const rnd = random(seed);
  const rings = [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ].map(([gx, gy]) => ({ gx, gy, tilt: 0.45 + rnd() * 0.85, dir: rnd() > 0.5 ? 1 : -1, ph: rnd() * TAU }));
  return (ctx, w, h, t, c) => {
    const m = Math.min(w, h);
    const r = m * 0.25;
    ctx.fillStyle = c.palette ? c.palette[2] : c.base;
    ctx.globalAlpha = 0.14;
    for (let x = 12; x < w; x += 24) for (let y = 12; y < h; y += 24) ctx.fillRect(x, y, 1.4, 1.4);
    rings.forEach((g, k) => {
      const ox = w / 2 + g.gx * m * 0.17;
      const oy = h / 2 + g.gy * m * 0.15;
      const tilt = g.tilt + Math.sin(t * 0.7 + k) * 0.15;
      const ct = Math.cos(tilt);
      const st = Math.sin(tilt);
      ctx.fillStyle = c.palette ? c.palette[k % c.palette.length] : c.base;
      for (let i = 0; i < 110; i++) {
        const a = (i / 110) * TAU + g.ph + t * 0.8 * g.dir;
        const depth = (1 - Math.sin(a) * st) / 2;
        dot(ctx, ox + Math.cos(a) * r, oy + Math.sin(a) * ct * r, 0.8 + depth * 2.2, 0.25 + depth * 0.75);
      }
    });
  };
}

/** Esfera enorme que asoma por abajo como un horizonte. */
function horizon(): Draw {
  const n = 3400;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const pts: [number, number, number, number][] = [];
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const rr = Math.sqrt(1 - y * y);
    pts.push([Math.cos(i * golden) * rr, y, Math.sin(i * golden) * rr, i % 6]);
  }
  return (ctx, w, h, t, c) => {
    const R = Math.max(w * 0.4, Math.min(h * 0.5, w * 0.9));
    const cx = w / 2;
    const cy = h + R * 0.42;
    const ay = t * 0.3;
    const ax = -0.38;
    const [c1, s1, c2, s2] = [Math.cos(ay), Math.sin(ay), Math.cos(ax), Math.sin(ax)];
    for (const [x, y, z, k] of pts) {
      const x1 = x * c1 + z * s1;
      const z1 = -x * s1 + z * c1;
      const y1 = y * c2 - z1 * s2;
      const z2 = y * s2 + z1 * c2;
      if (z2 > 0.35) continue;
      const py = cy - y1 * R;
      if (py > h + 4) continue;
      const depth = (1 - z2) / 2;
      ctx.fillStyle = c.palette ? c.palette[k % c.palette.length] : c.base;
      dot(ctx, cx + x1 * R, py, 0.6 + depth * 1.9, 0.12 + depth * 0.7 + (1 - Math.abs(z2)) * 0.15);
    }
  };
}

const makers: Record<Figure, (seed: number) => Draw> = { torus, terrain, pyramid, orbits, horizon };

/**
 * Figura de puntos animada (canvas 2D) para los banners de las páginas interiores.
 * Los puntos se apartan del ratón como en las partículas de la home y del footer.
 * Solo anima mientras es visible, respeta prefers-reduced-motion y no se monta en la versión «Color».
 */
export function HeroFigure({
  figure,
  tone = "dark",
  seed = "",
  className = "",
}: {
  figure: Figure;
  tone?: "dark" | "light";
  seed?: string;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const variant = useVariant();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || variant === "color") return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const draw = makers[figure](hash(seed || figure));
    const dark = tone === "dark";
    const mezcla = variant === "mezcla";
    const colors: Colors = {
      base: dark ? "#e9e9e4" : "#111214",
      palette: mezcla ? (dark ? onDark : onLight) : null,
      accent: mezcla ? (dark ? "#c8f169" : "#6a4bff") : dark ? "#5f78ff" : "#2b47ff",
      mono: getComputedStyle(document.body).getPropertyValue("--font-plex-mono").trim() || "ui-monospace, monospace",
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = false;
    let w = 0;
    let h = 0;
    const start = performance.now();
    let last = start;
    // El canvas no recibe eventos (pointer-events: none para no tapar textos y botones): se escucha en window
    let client: { x: number; y: number } | null = null;
    const m: Field = { x: 0, y: 0, f: 0, r: 120, n: 0 };
    const pk = { x: 0, f: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      m.r = Math.max(90, Math.min(170, Math.min(w, h) * 0.22));
    };

    // El cursor se sigue con algo de retraso y la fuerza entra y sale suave
    const track = (dt: number) => {
      const r = canvas.getBoundingClientRect();
      const inside = !!client && client.x > r.left - 20 && client.x < r.right + 20 && client.y > r.top - 20 && client.y < r.bottom + 20;
      if (inside && client) {
        const x = client.x - r.left;
        const y = client.y - r.top;
        if (m.f < 0.01) {
          m.x = x;
          m.y = y;
        }
        const k = Math.min(1, dt * 7);
        m.x += (x - m.x) * k;
        m.y += (y - m.y) * k;
      }
      m.f += ((inside ? 1 : 0) - m.f) * Math.min(1, dt * 3);

      if (focusX !== null) {
        const x = focusX - r.left;
        if (pk.f < 0.02) pk.x = x;
        pk.x += (x - pk.x) * Math.min(1, dt * 5);
      }
      pk.f += ((focusX !== null ? 1 : 0) - pk.f) * Math.min(1, dt * 5);
    };

    const paint = (now: number) => {
      track(Math.min(0.05, Math.max(0, (now - last) / 1000)));
      last = now;
      ctx.clearRect(0, 0, w, h);
      m.n = 0;
      field = m;
      peak = pk;
      // t avanza ~0,36 unidades por segundo
      draw(ctx, w, h, reduce ? 8 : ((now - start) / 1000) * 0.36, colors);
      field = null;
      peak = null;
      ctx.globalAlpha = 1;
    };

    const loop = (now: number) => {
      paint(now);
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    };

    resize();
    paint(start);
    const ro = new ResizeObserver(() => {
      resize();
      paint(performance.now());
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    const onMove = (e: PointerEvent) => (client = { x: e.clientX, y: e.clientY });
    const onLeave = () => (client = null);
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
    }

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [figure, tone, seed, variant]);

  return <canvas ref={ref} className={className} aria-hidden />;
}
