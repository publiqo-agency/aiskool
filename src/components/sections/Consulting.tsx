import { Particles } from "@/components/three/Particles";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { BracketButton } from "@/components/ui/BracketButton";

const items = [
  { t: "Agentes a medida", d: "Asistentes internos con vuestros documentos y procesos, con supervisión humana." },
  { t: "Automatizaciones", d: "Flujos con n8n, Make o desarrollo propio conectados a correo, CRM y ERP." },
  { t: "Acompañamiento", d: "4–6 semanas tras la formación para que el uso se quede, con métricas de adopción." },
];

/** Bloque de consultoría e implantación con malla de partículas tipo terreno. */
export function Consulting() {
  return (
    <section className="relative overflow-hidden bg-night pb-24 text-white color:pt-24 mezcla:glow md:pb-36 color:md:pt-36" aria-labelledby="consulting-title">
      <div className="container-x grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow tag text-white/60 color:text-white">Consultoría e implantación</p>
          <SplitReveal id="consulting-title" className="display mt-4 text-[clamp(2rem,3.8vw,3.2rem)]">
            Y cuando el equipo está listo, lo construimos
          </SplitReveal>
          <div className="mt-6 h-px bg-night-line" />
          <p className="mt-6 eyebrow leading-[1.7] text-white/60">
            Nuestro equipo técnico implanta los agentes y automatizaciones que salen de la formación.
          </p>
          <div className="mt-8">
            <BracketButton href="/consultoria" tone="dark">
              Hablemos de tu proceso
            </BracketButton>
          </div>
        </div>
        <Particles shape="terrain" count={5200} size={2} color="#e9e9e4" className="relative h-[340px] color:hidden md:col-span-7 md:h-[460px]" />
        {/* «Color»: panel de degradado en lugar del terreno de partículas */}
        <div aria-hidden className="mesh grain relative hidden h-[340px] rounded-[32px] color:block md:col-span-7 md:h-[460px]" />
      </div>
      <ul className="container-x mt-6 grid gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <li key={it.t} className="rounded-[16px] border border-night-line p-6 color:rounded-[24px] color:border-transparent color:bg-white/8 mezcla:rounded-[22px]">
            <p className="eyebrow text-white/40 mezcla:text-lime">0{i + 1}</p>
            <h3 className="mt-4 text-[1.25rem] font-semibold">{it.t}</h3>
            <p className="mt-2 text-white/65">{it.d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
