"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import type Lenis from "lenis";
import { focusFigure } from "@/components/motion/HeroFigure";
import { useVariant } from "@/components/variant/useVariant";

export type Service = { t: string; d: string; items: string[] };

type Els = { pins: (HTMLElement | null)[]; labels: (HTMLElement | null)[]; cards: (HTMLElement | null)[] };
type Links = {
  active: number;
  enter: (i: number) => void;
  leave: () => void;
  register: (kind: keyof Els, i: number) => (el: HTMLElement | null) => void;
  cardAt: (i: number) => HTMLElement | null;
};
type Wire = { i: number; d: string; x: number; y: number };

const LinksContext = createContext<Links | null>(null);

function useLinks() {
  const ctx = useContext(LinksContext);
  if (!ctx) throw new Error("ServicePins y ServiceCards van dentro de <ServiceLinks>");
  return ctx;
}

/** Alturas de los palos de cada marcador, para que no queden en fila sobre el paisaje. */
const pinHeights = [84, 132, 104, 70];

/**
 * Une los marcadores del banner con sus tarjetas de abajo: al señalar uno se enciende su línea hasta la tarjeta
 * (y al revés) y el paisaje de puntos se levanta debajo. Las líneas solo se pintan con cuatro columnas (lg),
 * que es cuando cada tarjeta queda bajo su marcador; en «Color» no hay marcadores.
 */
export function ServiceLinks({ children, className = "" }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const els = useRef<Els>({ pins: [], labels: [], cards: [] });
  const leaveT = useRef(0);
  const [active, setActive] = useState(-1);
  const [wires, setWires] = useState<Wire[]>([]);
  const variant = useVariant();

  const enter = useCallback((i: number) => {
    clearTimeout(leaveT.current);
    setActive(i);
  }, []);
  const leave = useCallback(() => {
    clearTimeout(leaveT.current);
    leaveT.current = window.setTimeout(() => setActive(-1), 160);
  }, []);
  const register = useCallback(
    (kind: keyof Els, i: number) => (el: HTMLElement | null) => {
      els.current[kind][i] = el;
    },
    [],
  );
  const cardAt = useCallback((i: number) => els.current.cards[i] ?? null, []);

  useEffect(() => {
    const pin = active >= 0 ? els.current.pins[active] : null;
    // Sin marcador visible (móvil o «Color») el paisaje no se mueve
    if (!pin || !pin.offsetParent) return focusFigure(null);
    const r = pin.getBoundingClientRect();
    focusFigure(r.left + r.width / 2);
  }, [active]);

  useEffect(() => () => focusFigure(null), []);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const wide = window.matchMedia("(min-width: 64rem)");

    const compute = () => {
      const st = el.getBoundingClientRect();
      if (!wide.matches || variant === "color") return setWires([]);
      const { pins, labels, cards } = els.current;
      setWires(
        cards.flatMap((card, i) => {
          const pin = pins[i];
          const label = labels[i];
          if (!card || !pin || !label) return [];
          const p = pin.getBoundingClientRect();
          const l = label.getBoundingClientRect();
          const c = card.getBoundingClientRect();
          // Baja desde el marcador, hace un codo justo encima de la tarjeta y entra a la altura del texto
          const px = p.left + p.width / 2 - st.left;
          const y0 = l.bottom - st.top + 12;
          const x = c.left - st.left + 28;
          const y = c.top - st.top;
          const ym = y - 18;
          return [{ i, x, y, d: `M${px} ${y0}V${ym - 10}Q${px} ${ym} ${px + 10} ${ym}H${x - 10}Q${x} ${ym} ${x} ${ym + 10}V${y}` }];
        }),
      );
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    wide.addEventListener("change", compute);
    document.fonts?.ready.then(compute);
    return () => {
      ro.disconnect();
      wide.removeEventListener("change", compute);
    };
  }, [variant]);

  return (
    <LinksContext value={{ active, enter, leave, register, cardAt }}>
      <div ref={root} className={`relative [--pin:#5f78ff] mezcla:[--pin:var(--color-lime)] ${className}`}>
        {children}
        {wires.length > 0 && (
          <svg aria-hidden className="pointer-events-none absolute inset-0 z-10 hidden size-full overflow-visible lg:block">
            {wires.map((w) => {
              const on = active === w.i;
              return (
                <g key={w.i}>
                  <path d={w.d} fill="none" stroke="rgb(255 255 255 / 0.22)" strokeDasharray="3 5" />
                  <path
                    d={w.d}
                    fill="none"
                    strokeWidth={1.5}
                    pathLength={1}
                    strokeDasharray={1}
                    className="transition-[stroke-dashoffset] duration-700 ease-expo"
                    style={{ stroke: "var(--pin)", strokeDashoffset: on ? 0 : 1 }}
                  />
                  <rect
                    x={w.x - 4}
                    y={w.y - 4}
                    width={8}
                    height={8}
                    className="transition-[fill,stroke] duration-300"
                    style={{ fill: on ? "var(--pin)" : "var(--color-night)", stroke: on ? "var(--pin)" : "rgb(255 255 255 / 0.35)" }}
                  />
                </g>
              );
            })}
          </svg>
        )}
      </div>
    </LinksContext>
  );
}

/** Índice de servicios clavado en el paisaje del banner. Al pulsar baja hasta la tarjeta. */
export function ServicePins({ services }: { services: Service[] }) {
  const { active, enter, leave, register, cardAt } = useLinks();

  const goTo = (i: number) => {
    const card = cardAt(i);
    if (!card) return;
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) lenis.scrollTo(card, { offset: -(window.innerHeight - card.offsetHeight) / 2 });
    else card.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
  };

  return (
    <ol className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {services.map((s, i) => {
        const on = active === i;
        return (
          <li key={s.t} className={`transition-opacity duration-300 ${active >= 0 && !on ? "opacity-45" : ""}`}>
            <button
              type="button"
              aria-controls={`servicio-${i + 1}`}
              onPointerEnter={(e) => e.pointerType !== "touch" && enter(i)}
              onPointerLeave={(e) => e.pointerType !== "touch" && leave()}
              onFocus={() => enter(i)}
              onBlur={leave}
              onClick={() => {
                enter(i);
                goTo(i);
              }}
              className="group/pin flex w-full cursor-pointer flex-col items-start gap-3 rounded-[6px] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--pin)"
            >
              {/* Marcador: late mientras no hay ninguno señalado y se rellena al señalarlo */}
              <span aria-hidden className="hidden flex-col items-start color:hidden md:flex">
                <span
                  ref={register("pins", i)}
                  className={`relative size-[13px] border-[1.5px] border-(--pin) bg-night transition-[scale,box-shadow] duration-500 ease-expo ${
                    on ? "scale-130 shadow-[0_0_0_6px_rgb(255_255_255/0.06),0_0_26px_var(--pin)]" : ""
                  }`}
                >
                  <span className={`absolute inset-[2px] bg-(--pin) transition-[scale] duration-300 ease-expo ${on ? "scale-100" : "scale-0 group-hover/pin:scale-100"}`} />
                  {active < 0 && (
                    <span className="absolute -inset-[1.5px] animate-pin-pulse border-[1.5px] border-(--pin) motion-reduce:hidden" style={{ animationDelay: `${i * 0.65}s` }} />
                  )}
                </span>
                <span className="relative ml-[6px] border-l border-dashed border-white/40" style={{ height: pinHeights[i] }}>
                  <span className={`absolute top-0 -left-px h-full w-px origin-top bg-(--pin) transition-[scale] duration-500 ease-expo ${on ? "scale-y-100" : "scale-y-0"}`} />
                </span>
              </span>
              <span className="eyebrow text-(--pin) color:text-white/70">0{i + 1}</span>
              <span className="text-[1.2rem] leading-tight font-semibold [text-shadow:0_1px_14px_rgb(13_14_17/0.95)]">{s.t}</span>
              <span
                ref={register("labels", i)}
                className={`eyebrow transition-colors duration-300 ${on ? "text-(--pin) color:text-white" : "text-white/50"}`}
              >
                Ver detalle ↓
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

/** Tarjetas de servicio en cuatro columnas, cada una bajo su marcador del banner. */
export function ServiceCards({ services }: { services: Service[] }) {
  const { active, enter, leave, register } = useLinks();

  return (
    <ul className="container-x relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => {
        const on = active === i;
        return (
          <li
            key={s.t}
            id={`servicio-${i + 1}`}
            ref={register("cards", i)}
            onPointerEnter={(e) => e.pointerType !== "touch" && enter(i)}
            onPointerLeave={(e) => e.pointerType !== "touch" && leave()}
            className={`rounded-[18px] border bg-night/80 p-7 backdrop-blur-sm transition-[border-color,box-shadow,opacity] duration-300 ${
              on ? "border-(--pin) shadow-[0_24px_60px_-30px_var(--pin)]" : "border-night-line"
            } ${active >= 0 && !on ? "opacity-60" : ""}`}
          >
            <p className={`eyebrow transition-colors duration-300 ${on ? "text-(--pin)" : "text-white/40"}`}>0{i + 1}</p>
            <h2 className="mt-4 text-[1.35rem] leading-tight font-semibold">{s.t}</h2>
            <p className="mt-3 text-white/70">{s.d}</p>
            <ul className="mt-6 space-y-1.5 text-white/60">
              {s.items.map((it) => (
                <li key={it}>— {it}</li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
