import { SplitReveal } from "@/components/motion/SplitReveal";
import { BracketButton } from "@/components/ui/BracketButton";

/**
 * TODO(cliente): sustituir por personas reales (nombre, cargo, foto en /public/team, LinkedIn).
 * Mientras tanto se muestran los perfiles del equipo sin nombres inventados.
 */
const profiles = [
  { area: "Técnico", title: "Desarrollo y agentes", text: "Construimos agentes, automatizaciones e integraciones con modelos de lenguaje en producción." },
  { area: "Regulación", title: "AI Act y uso responsable", text: "Explicamos el Reglamento de IA y la protección de datos en lenguaje claro y os ayudamos a ordenar políticas y evidencias." },
  { area: "Negocio", title: "Marketing y ventas", text: "Aplicamos la IA a procesos comerciales y de marketing con resultados medibles." },
];

export function Team() {
  return (
    <section className="relative rounded-t-[22px] bg-night pt-24 text-white color:-mt-9 color:rounded-t-[36px] mezcla:glow md:pt-36" aria-labelledby="team-title">
      <div className="container-x text-center">
        <p className="eyebrow tag text-white/60 color:mx-auto color:text-white">Equipo</p>
        <SplitReveal id="team-title" className="display mx-auto mt-4 max-w-[20ch] text-[clamp(2rem,4.4vw,3.8rem)]">
          Formadores que usan la IA cada día
        </SplitReveal>
        <p className="mx-auto mt-6 max-w-[58ch] eyebrow leading-[1.7] text-white/60">
          No somos un catálogo de vídeos. Somos un equipo técnico y de negocio que forma con lo que aplica en proyectos reales.
        </p>
        <div className="mt-8">
          <BracketButton href="/nosotros" tone="dark">
            Conoce al equipo
          </BracketButton>
        </div>
      </div>
      <ul className="container-x mt-16 grid gap-4 pb-24 md:mt-20 md:grid-cols-3 md:pb-36">
        {profiles.map((p) => (
          <li key={p.area} className="group relative overflow-hidden rounded-[18px] bg-night-soft p-7 color:rounded-[28px] mezcla:rounded-[24px] md:p-9">
            <div aria-hidden className="mb-10 grid h-[180px] place-items-center rounded-[12px] border border-night-line color:mesh color:rounded-[20px] color:border-0 mezcla:border-white/10">
              <span className="display text-[4.5rem] text-white/10 color:text-white/70 mezcla:text-grad transition duration-700 ease-expo group-hover:scale-110 group-hover:text-white/25">
                {p.area.slice(0, 1)}
              </span>
            </div>
            <p className="eyebrow text-white/50">{p.area}</p>
            <h3 className="mt-3 text-[1.35rem] font-semibold">{p.title}</h3>
            <p className="mt-3 text-white/65">{p.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
