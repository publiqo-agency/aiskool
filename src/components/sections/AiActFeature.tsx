import { SplitReveal } from "@/components/motion/SplitReveal";
import { BracketButton } from "@/components/ui/BracketButton";

const included = [
  "Formación de alfabetización por perfiles",
  "Política de uso de IA adaptada a tu empresa",
  "Inventario de herramientas y usos de IA",
  "Registro de asistencia y evaluación (evidencia)",
  "Revisión y actualización anual",
];

/** Bloque destacado: Alfabetización en IA y art. 4 del AI Act. */
export function AiActFeature() {
  return (
    <section className="bg-paper pb-24 md:pb-36" aria-labelledby="aiact-title">
      <div className="container-x">
        <div className="relative grid overflow-hidden rounded-[22px] bg-night text-white color:grain color:rounded-[32px] color:bg-[linear-gradient(135deg,#5b3df5_0%,#3b2bd0_45%,#2e5bff_100%)] mezcla:glow mezcla:rounded-[28px] md:grid-cols-2">
          <div className="p-7 md:p-14">
            <p className="eyebrow tag text-white/60 color:text-white">Servicio clave · Art. 4 AI Act</p>
            <SplitReveal id="aiact-title" className="display mt-4 text-[clamp(1.7rem,3vw,2.7rem)]">
              Alfabetización en IA para toda la plantilla
            </SplitReveal>
            <p className="mt-6 max-w-[52ch] text-[1.08rem] leading-[1.65] text-white/75">
              El Reglamento Europeo de IA pide a las empresas que usan IA adoptar medidas para que su personal aprenda a usarla con
              criterio. No basta con un vídeo: necesitas formación adecuada a cada perfil y poder demostrar lo que has hecho. Sin
              alarmismos y con la documentación en orden.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <BracketButton href="/test-ai-act" tone="accent" size="lg" className="color:!bg-white color:!text-ink">
                Haz el test en 3 minutos
              </BracketButton>
              <BracketButton href="/ai-act" tone="dark" size="lg">
                Qué exige el art. 4
              </BracketButton>
            </div>
          </div>
          <div className="border-t border-night-line p-7 color:border-white/20 md:border-t-0 md:border-l md:p-14">
            <p className="eyebrow tag text-white/60 color:text-white">Pack Art. 4</p>
            <ul className="mt-6 divide-y divide-night-line border-y border-night-line color:divide-white/20 color:border-white/20">
              {included.map((item, i) => (
                <li key={item} className="flex items-baseline gap-5 py-4 text-[1.05rem]">
                  <span className="eyebrow text-white/40 color:text-white/60 mezcla:text-lime">0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.9rem] leading-[1.6] text-white/50 color:text-white/75">
              Te ayudamos a documentar las medidas; la responsabilidad de cumplimiento sigue siendo de la empresa. No es
              asesoramiento jurídico ni una certificación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
