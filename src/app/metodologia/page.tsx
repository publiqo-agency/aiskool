import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Methodology } from "@/components/sections/Methodology";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Metodología: cómo formamos a tu equipo en IA",
  description: "Diagnóstico, diseño a medida, formación práctica y seguimiento con métricas de adopción y registro de evidencias para el art. 4 del AI Act.",
  path: "/metodologia",
});

const principles = [
  ["Tus casos, no ejemplos genéricos", "Trabajamos con tareas reales de cada puesto (con datos ficticios o anonimizados)."],
  ["70 % práctica", "Cada sesión termina con algo hecho: plantillas, flujos o un entregable."],
  ["Por perfiles", "Dirección, equipos de negocio y perfiles técnicos tienen necesidades distintas."],
  ["Con criterio", "Enseñamos cuándo no usar IA y cómo verificar lo que produce."],
  ["Medible", "Encuesta inicial y final, métricas de uso y un informe para dirección."],
];

export default function MetodologiaPage() {
  return (
    <>
      <PageHeader
        figure="terrain"
        eyebrow="Metodología"
        title="Así formamos a tu equipo"
        crumbs={[{ name: "Metodología", path: "/metodologia" }]}
        intro="Un proceso en cuatro fases para que la formación se traduzca en uso real y en evidencias documentadas."
      />
      <section className="bg-paper pb-24">
        <ul className="container-x grid gap-4 md:grid-cols-5">
          {principles.map(([t, d]) => (
            <li key={t} className="rounded-[16px] bg-surface p-6">
              <h2 className="text-[1.1rem] font-semibold">{t}</h2>
              <p className="mt-2 text-[0.95rem] text-ink-soft">{d}</p>
            </li>
          ))}
        </ul>
      </section>
      <Methodology />
      <div className="pt-24 bg-paper">
        <CtaBand />
      </div>
    </>
  );
}
