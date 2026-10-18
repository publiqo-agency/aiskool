import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { CalEmbed } from "@/components/forms/CalEmbed";
import { BracketButton } from "@/components/ui/BracketButton";

export const metadata = pageMetadata({
  title: "Diagnóstico gratuito de IA para tu empresa",
  description: "30 minutos con nuestro equipo para analizar cómo usa la IA tu empresa, qué riesgos hay y qué formación necesita cada equipo. Sin compromiso.",
  path: "/diagnostico",
});

const agenda = [
  "Qué herramientas de IA se usan hoy y cómo",
  "Riesgos de datos y situación frente al art. 4 del AI Act",
  "Qué equipos ganarían más con formación o automatización",
  "Propuesta de itinerario y siguiente paso",
];

export default function DiagnosticoPage() {
  return (
    <>
      <PageHeader
        figure="horizon"
        eyebrow="Gratis · 30 minutos · online"
        title="Diagnóstico gratuito de IA"
        crumbs={[{ name: "Diagnóstico", path: "/diagnostico" }]}
        intro="Una videollamada con nuestro equipo para entender dónde está tu empresa y por dónde empezar. Sin presentaciones comerciales eternas."
      />
      <section className="bg-paper pb-24 md:pb-32">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <p className="eyebrow text-muted">Qué revisamos</p>
            <ol className="mt-6 space-y-5 border-t border-line pt-6">
              {agenda.map((a, i) => (
                <li key={a} className="flex gap-4 text-[1.05rem]">
                  <span className="eyebrow mt-1 text-muted">0{i + 1}</span>
                  {a}
                </li>
              ))}
            </ol>
          </aside>
          <div className="lg:col-span-8">
            {site.calLink ? (
              <CalEmbed link={site.calLink} />
            ) : (
              <div className="rounded-[18px] bg-surface p-8 md:p-12">
                <p className="display text-[1.6rem]">Reserva tu diagnóstico</p>
                <p className="mt-4 max-w-[52ch] text-ink-soft">
                  Escríbenos y te proponemos dos horarios esta misma semana, o déjanos tus datos en el formulario de presupuesto.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <BracketButton href={`mailto:${site.email}?subject=Diagnóstico gratuito`} tone="accent" size="lg">
                    Escribir a {site.email}
                  </BracketButton>
                  <BracketButton href="/presupuesto" size="lg">
                    Formulario
                  </BracketButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
