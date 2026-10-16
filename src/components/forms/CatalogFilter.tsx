"use client";

import Link from "next/link";
import { useState } from "react";
import type { Formacion, Categoria } from "@/lib/formaciones";
import { categorias } from "@/lib/formaciones";

/** Filtro por categoría del catálogo (estado local, sin recargar). */
export function CatalogFilter({ items }: { items: Formacion[] }) {
  const [cat, setCat] = useState<Categoria | "todas">("todas");
  const list = cat === "todas" ? items : items.filter((f) => f.categoria === cat);
  const options: (Categoria | "todas")[] = ["todas", ...(Object.keys(categorias) as Categoria[])];

  return (
    <div>
      <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => setCat(o)}
            aria-pressed={cat === o}
            className={`eyebrow rounded-full border px-4 py-2 transition ${cat === o ? "border-ink bg-ink text-white" : "border-line bg-surface text-ink-soft hover:border-ink"}`}
          >
            {o === "todas" ? "Todas" : categorias[o]}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((f) => (
          <li key={f.slug} className="group relative flex flex-col rounded-[18px] bg-surface p-7 transition duration-500 ease-expo hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.4)]">
            <p className="eyebrow text-muted">{categorias[f.categoria]}</p>
            <h2 className="mt-4 text-[1.35rem] font-semibold leading-tight">
              <Link href={`/formaciones/${f.slug}`} className="after:absolute after:inset-0">
                {f.title}
              </Link>
            </h2>
            <p className="mt-3 flex-1 text-ink-soft">{f.short}</p>
            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-4 text-[0.85rem]">
              <div>
                <dt className="eyebrow text-[0.65rem] text-muted">Nivel</dt>
                <dd className="mt-1">{f.level}</dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.65rem] text-muted">Duración</dt>
                <dd className="mt-1">{f.duration.split(" (")[0]}</dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.65rem] text-muted">Desde</dt>
                <dd className="mt-1">{f.priceFrom}</dd>
              </div>
            </dl>
            <span aria-hidden className="eyebrow mt-5 text-accent transition-transform duration-500 ease-expo group-hover:translate-x-1">
              Ver temario →
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
