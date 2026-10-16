import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Team } from "@/components/sections/Team";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Nosotros: formadores de IA para empresas",
  description: "Un equipo técnico, legal y de negocio que forma a empresas en inteligencia artificial con lo que aplica en proyectos reales.",
  path: "/nosotros",
});

const values = [
  ["Prácticos", "Formamos con lo que usamos cada día en proyectos reales de IA."],
  ["Honestos", "Sin alarmismo legal ni promesas mágicas: lo que la IA hace bien y lo que no."],
  ["Cercanos", "Vamos a tus oficinas en cualquier punto de España o nos vemos online."],
];

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title="Formamos con lo que aplicamos"
        crumbs={[{ name: "Nosotros", path: "/nosotros" }]}
        intro="Somos un equipo que combina desarrollo de IA, derecho tecnológico y negocio. Por eso nuestras formaciones hablan de casos reales y no de teoría."
      />
      <section className="bg-paper pb-24">
        <ul className="container-x grid gap-4 md:grid-cols-3">
          {values.map(([t, d]) => (
            <li key={t} className="rounded-[18px] bg-surface p-7">
              <h2 className="display text-[1.6rem]">{t}</h2>
              <p className="mt-3 text-ink-soft">{d}</p>
            </li>
          ))}
        </ul>
      </section>
      <Team />
      <div className="bg-paper pt-24">
        <CtaBand />
      </div>
    </>
  );
}
