import Link from "next/link";
import { prices } from "@/lib/site";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { BracketButton } from "@/components/ui/BracketButton";

/** `overlap`: sin fondo ni margen superior, para montar las tarjetas sobre el banner de la página de precios. */
export function Pricing({ heading = true, overlap = false }: { heading?: boolean; overlap?: boolean }) {
  return (
    <section className={overlap ? "pb-24 md:pb-36" : "bg-paper py-24 md:py-36"} aria-labelledby={heading ? "pricing-title" : undefined}>
      <div className="container-x">
        {heading && (
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="eyebrow tag text-muted color:text-accent">Precios</p>
              <SplitReveal id="pricing-title" className="display mt-4 text-[clamp(2rem,4vw,3.4rem)]">
                Precios claros desde el principio
              </SplitReveal>
            </div>
            <p className="text-[1.05rem] leading-[1.6] text-ink-soft md:col-span-5 md:col-start-8">
              Precios orientativos sin IVA. El presupuesto final depende del número de personas, la modalidad y el nivel de
              personalización. Respuesta en 48 h.
            </p>
          </div>
        )}
        <ul className={`${heading ? "mt-14" : ""} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {prices.map((p) => (
            <li
              key={p.label}
              className={`relative flex flex-col rounded-[18px] p-7 color:rounded-[28px] mezcla:rounded-[24px] ${p.featured ? "bg-ink text-white color:bg-violet mezcla:bg-grad" : "bg-surface text-ink"} ${overlap && p.featured ? "ring-1 ring-white/15" : ""}`}
            >
              {p.featured && <span className="eyebrow absolute top-6 right-6 rounded-full bg-accent px-3 py-1 text-[0.65rem] text-white color:bg-white color:text-violet mezcla:bg-ink">
                  Más pedido
                </span>}
              <h3 className="pr-20 text-[1.1rem] font-semibold">{p.label}</h3>
              <p className="mt-8">
                <span className="eyebrow opacity-60">desde</span>
                <span className="display mt-1 block text-[2.4rem]">{p.from}</span>
                <span className="text-[0.9rem] opacity-70">{p.unit}</span>
              </p>
              <p className="mt-6 flex-1 text-[0.98rem] leading-[1.55] opacity-80">{p.detail}</p>
              <Link href={p.href} className="eyebrow mt-8 underline-offset-4 hover:underline">
                Más información →
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <BracketButton href="/presupuesto" tone="accent" size="lg">
            Pedir presupuesto
          </BracketButton>
          <p className="text-[0.95rem] text-muted">¿Más de 100 personas? Hacemos propuesta específica.</p>
        </div>
      </div>
    </section>
  );
}
