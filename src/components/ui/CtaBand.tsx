import { BracketButton } from "@/components/ui/BracketButton";

/** Banda de conversión al final de las páginas interiores. */
export function CtaBand({
  title = "¿Por dónde empieza tu equipo?",
  text = "Reserva un diagnóstico gratuito de 30 minutos. Te proponemos un itinerario y un presupuesto en 48 h.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-paper pb-24 md:pb-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 rounded-[22px] bg-ink p-8 text-white md:flex-row md:items-end md:justify-between md:p-14">
          <div>
            <h2 className="display max-w-[20ch] text-[clamp(1.8rem,3.4vw,2.8rem)]">{title}</h2>
            <p className="mt-4 max-w-[56ch] text-white/70">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BracketButton href="/diagnostico" tone="accent" size="lg">
              Diagnóstico gratuito
            </BracketButton>
            <BracketButton href="/presupuesto" tone="dark" size="lg">
              Pedir presupuesto
            </BracketButton>
          </div>
        </div>
      </div>
    </section>
  );
}
