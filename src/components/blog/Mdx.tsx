import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { isValidElement } from "react";
import { BracketButton } from "@/components/ui/BracketButton";
import { BlogCta } from "@/components/ui/BlogCta";
import type { BlogCategory } from "@/lib/blog";
import { formaciones } from "@/lib/formaciones";

/**
 * Componentes disponibles dentro de los artículos MDX.
 * next-mdx-remote bloquea expresiones JS: todas las props son texto y el contenido va como hijos (Markdown).
 */

/** Texto plano de un nodo React (para generar los id de los h2). */
function textOf(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Índice a partir de los «## » del cuerpo (ignora bloques de código). */
export function headingsOf(source: string) {
  return source
    .replace(/```[\s\S]*?```/g, "")
    .split("\n")
    .filter((l) => /^## /.test(l))
    .map((l) => {
      const text = l.replace(/^## /, "").replace(/[*_`]/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim();
      return { text, id: slugify(text) };
    });
}

function H2({ children }: { children?: ReactNode }) {
  return (
    <h2 id={slugify(textOf(children))} className="scroll-mt-28">
      {children}
    </h2>
  );
}

const calloutTones = {
  clave: { label: "Clave", box: "border-accent/30 bg-accent/[0.06]", tag: "text-accent" },
  dato: { label: "Dato", box: "border-line bg-surface", tag: "text-accent" },
  aviso: { label: "Ojo", box: "border-[#e0a100]/40 bg-[#fff8e6]", tag: "text-[#8a6200]" },
  legal: { label: "Aviso", box: "border-line bg-surface", tag: "text-muted" },
} as const;

/** Caja destacada. tipo: clave | dato | aviso | legal. */
export function Callout({ tipo = "clave", titulo, children }: { tipo?: keyof typeof calloutTones; titulo?: string; children?: ReactNode }) {
  const t = calloutTones[tipo] ?? calloutTones.clave;
  return (
    <aside className={`mdx-box rounded-[16px] border p-6 ${t.box}`}>
      <p className={`eyebrow ${t.tag}`}>{titulo ?? t.label}</p>
      <div className="mt-2 text-ink">{children}</div>
    </aside>
  );
}

/** Rejilla de cifras: <Stats><Stat valor="…" etiqueta="…" fuente="…" href="…" /></Stats> */
export function Stats({ children }: { children?: ReactNode }) {
  return <div className="mdx-box grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export function Stat({ valor, etiqueta, fuente, href }: { valor: string; etiqueta: string; fuente?: string; href?: string }) {
  return (
    <div className="not-prose flex flex-col rounded-[16px] bg-ink p-5 text-white">
      <span className="display text-[2.2rem] leading-none">{valor}</span>
      <span className="mt-3 text-[0.95rem] leading-[1.45] text-white/80">{etiqueta}</span>
      {fuente && (
        <span className="mt-auto pt-4 text-[0.8rem] text-white/50">
          Fuente:{" "}
          {href ? (
            <a href={href} target="_blank" rel="noopener" className="underline! underline-offset-2 hover:text-white">
              {fuente}
            </a>
          ) : (
            fuente
          )}
        </span>
      )}
    </div>
  );
}

/**
 * Barras horizontales. datos="España|21,1;UE|19,9" (separador de filas «;», de etiqueta y valor «|»).
 * El valor se muestra tal cual y se usa (con coma o punto decimal) para la longitud.
 */
export function Barras({ titulo, datos, unidad = "", fuente, href }: { titulo?: string; datos: string; unidad?: string; fuente?: string; href?: string }) {
  const rows = datos
    .split(";")
    .map((r) => r.split("|").map((s) => s.trim()))
    .filter((r) => r.length === 2)
    .map(([label, raw]) => ({ label, raw, n: Number(raw.replace(/\./g, "").replace(",", ".")) || 0 }));
  const max = Math.max(...rows.map((r) => r.n), 1);
  return (
    <figure className="mdx-box rounded-[16px] border border-line bg-surface p-6">
      {titulo && <figcaption className="font-semibold text-ink">{titulo}</figcaption>}
      <dl className="mt-5 space-y-3">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[minmax(7rem,38%)_1fr] items-center gap-3 text-[0.95rem]">
            <dt className="text-ink-soft">{r.label}</dt>
            <dd className="flex items-center gap-3">
              <span className="h-3 rounded-full bg-accent" style={{ width: `${Math.max((r.n / max) * 100, 2)}%` }} />
              <span className="shrink-0 font-semibold text-ink tabular-nums">
                {r.raw}
                {unidad}
              </span>
            </dd>
          </div>
        ))}
      </dl>
      {fuente && (
        <p className="mt-5 text-[0.8rem] text-muted">
          Fuente:{" "}
          {href ? (
            <a href={href} target="_blank" rel="noopener">
              {fuente}
            </a>
          ) : (
            fuente
          )}
        </p>
      )}
    </figure>
  );
}

/** Proceso en fases: pasos="Diagnóstico|Piloto|Producción". */
export function Flujo({ pasos, titulo }: { pasos: string; titulo?: string }) {
  const items = pasos.split("|").map((s) => s.trim()).filter(Boolean);
  return (
    <figure className="mdx-box">
      {titulo && <figcaption className="mb-4 font-semibold text-ink">{titulo}</figcaption>}
      <ol className="mdx-flujo">
        {items.map((p, i) => (
          <li key={p}>
            <span className="eyebrow text-accent">{String(i + 1).padStart(2, "0")}</span>
            <span className="mt-1 block font-semibold leading-snug text-ink">{p}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

/** Lista numerada con aspecto de pasos: envuelve una lista «1. …» de Markdown. */
export function Steps({ children }: { children?: ReactNode }) {
  return <div className="mdx-box mdx-steps">{children}</div>;
}

/** Lista de comprobación: envuelve una lista «- …» de Markdown. */
export function Checklist({ titulo, children }: { titulo?: string; children?: ReactNode }) {
  return (
    <div className="mdx-box mdx-checklist rounded-[16px] border border-line bg-surface p-6">
      {titulo && <p className="font-semibold text-ink">{titulo}</p>}
      {children}
    </div>
  );
}

/** Cronología: <Timeline><Hito fecha="…" titulo="…">texto</Hito></Timeline> */
export function Timeline({ children }: { children?: ReactNode }) {
  return <ol className="mdx-box mdx-timeline">{children}</ol>;
}

export function Hito({ fecha, titulo, children }: { fecha: string; titulo: string; children?: ReactNode }) {
  return (
    <li>
      <span className="eyebrow text-accent">{fecha}</span>
      <p className="mt-1 font-semibold text-ink">{titulo}</p>
      {children && <div className="mt-1 text-[0.98rem]">{children}</div>}
    </li>
  );
}

/** Dos columnas de ventajas / inconvenientes. */
export function Columnas({ children }: { children?: ReactNode }) {
  return <div className="mdx-box grid gap-3 md:grid-cols-2">{children}</div>;
}

export function Pros({ titulo = "A favor", children }: { titulo?: string; children?: ReactNode }) {
  return (
    <div className="mdx-pros rounded-[16px] border border-line bg-surface p-6">
      <p className="eyebrow text-accent">{titulo}</p>
      {children}
    </div>
  );
}

export function Contras({ titulo = "En contra", children }: { titulo?: string; children?: ReactNode }) {
  return (
    <div className="mdx-contras rounded-[16px] border border-line bg-surface p-6">
      <p className="eyebrow text-muted">{titulo}</p>
      {children}
    </div>
  );
}

/** Caja «¿Formación para tu equipo?» con datos reales del catálogo. */
export function FormacionCard({ slug }: { slug: string }) {
  const f = formaciones.find((x) => x.slug === slug);
  if (!f) return null;
  return (
    <aside className="not-prose mdx-box rounded-[16px] border border-line bg-surface p-7">
      <p className="eyebrow text-accent">¿Formación para tu equipo?</p>
      <p className="mt-2 text-[1.3rem] font-semibold leading-snug text-ink">{f.title}</p>
      <p className="mt-2 text-ink-soft">{f.short}</p>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[0.9rem] text-muted">
        <li>{f.duration}</li>
        <li>{f.formats.join(" · ")}</li>
        <li>
          Desde {f.priceFrom} <span className="text-[0.8rem]">+ IVA</span>
        </li>
      </ul>
      <div className="mt-5 flex flex-wrap gap-3">
        <BracketButton href={`/formaciones/${f.slug}`} tone="accent">
          Ver la formación
        </BracketButton>
        <BracketButton href={`/presupuesto?formacion=${f.slug}`}>Pedir presupuesto</BracketButton>
      </div>
    </aside>
  );
}

/** Lista de fuentes al final del artículo: envuelve una lista de enlaces en Markdown. */
export function Fuentes({ children }: { children?: ReactNode }) {
  return (
    <section className="mdx-box mdx-fuentes border-t border-line pt-6">
      <p className="eyebrow text-muted">Fuentes</p>
      {children}
    </section>
  );
}

function A({ href = "", ...rest }: ComponentProps<"a">) {
  if (href.startsWith("/")) return <Link href={href} {...rest} />;
  if (href.startsWith("#")) return <a href={href} {...rest} />;
  return <a href={href} target="_blank" rel="noopener" {...rest} />;
}

function Table(props: ComponentProps<"table">) {
  return (
    <div className="mdx-box mdx-table">
      <table {...props} />
    </div>
  );
}

export function mdxComponents(category: BlogCategory) {
  return {
    h2: H2,
    a: A,
    table: Table,
    CtaInline: () => <BlogCta category={category} />,
    Callout,
    Stats,
    Stat,
    Barras,
    Flujo,
    Steps,
    Checklist,
    Timeline,
    Hito,
    Columnas,
    Pros,
    Contras,
    FormacionCard,
    Fuentes,
  };
}
