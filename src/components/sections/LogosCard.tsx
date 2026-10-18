import Image from "next/image";
import { clients, stats } from "@/lib/site";
import { CountUp } from "@/components/motion/CountUp";

function ClientLogo({ c }: { c: (typeof clients)[number] }) {
  const ratio = c.w / c.h;
  const height = ratio > 4 ? 26 : ratio > 2 ? 34 : 40;
  return (
    <li className="flex shrink-0 items-center gap-2.5 px-8 md:px-12" title={c.name}>
      <Image
        src={c.src}
        alt={c.name}
        width={Math.round(height * ratio)}
        height={height}
        className="h-auto w-auto opacity-60 brightness-0 transition duration-500 hover:opacity-100 color:opacity-75 color:[filter:brightness(0)_invert(22%)_sepia(60%)_saturate(2000%)_hue-rotate(245deg)]"
        style={{ height }}
        unoptimized={c.src.endsWith(".svg")}
      />
      {"wordmark" in c && c.wordmark && <span className="text-[1.35rem] font-semibold tracking-tight text-ink/60">{c.name}</span>}
    </li>
  );
}

/** Tarjeta que sube sobre el hero: empresas formadas + cifras. En «Color» es lavanda y sin sombra. */
export function LogosCard({ showStats = true }: { showStats?: boolean }) {
  return (
    <div className="container-x relative z-10">
      <div className="mx-auto max-w-[1180px] rounded-[20px] bg-surface px-4 py-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] color:rounded-[28px] color:bg-lavender color:py-8 color:shadow-none mezcla:rounded-[28px] md:px-10 md:py-14 color:md:py-10">
        <h2 className="text-center text-[1.35rem] font-medium tracking-tight text-ink color:text-[1rem] color:font-normal color:text-muted md:text-[1.9rem] color:md:text-[1.05rem]">
          Empresas que ya se han formado con nosotros.
        </h2>

        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] md:mt-10">
          <ul className="flex w-max animate-marquee items-center motion-reduce:animate-none" style={{ ["--marquee-duration" as string]: "34s" }}>
            {[...clients, ...clients].map((c, i) => (
              <ClientLogo key={c.name + i} c={c} />
            ))}
          </ul>
        </div>

        {showStats && (
        <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-line pt-8 text-center sm:grid-cols-3 md:mt-12 md:pt-10">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className={`display text-ink ${s.value !== null ? "text-[2rem] md:text-[2.6rem]" : "text-[1.3rem] md:text-[1.6rem]"}`}>
                {s.value !== null ? <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} /> : s.fallback}
              </dd>
              <dd className="mt-2 text-[0.98rem] text-muted">{s.value !== null ? s.label : statsFallbackLabel[s.label] ?? s.label}</dd>
            </div>
          ))}
        </dl>
        )}
      </div>
    </div>
  );
}

/** Subtítulos mientras no haya cifras reales. */
export const statsFallbackLabel: Record<string, string> = {
  "Profesionales formados": "Formación en tus oficinas o en directo",
  Empresas: "Presencial en cualquier ciudad",
  "Valoración media": "Con evaluación y certificado",
};
