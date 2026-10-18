import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { formaciones } from "@/lib/formaciones";
import { PageHeader } from "@/components/ui/PageHeader";
import { BracketButton } from "@/components/ui/BracketButton";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Cursos de IA online para empresas",
  description: "Cursos de inteligencia artificial online para plantillas: alfabetización en IA a tu ritmo con evaluación, certificado y registro para el art. 4 del AI Act.",
  path: "/cursos",
});

const online = formaciones.filter((f) => f.formats.includes("Online a tu ritmo"));

export default function CursosPage() {
  return (
    <>
      <PageHeader
        figure="torus"
        eyebrow="Online a tu ritmo"
        title="Cursos de IA online"
        crumbs={[{ name: "Cursos", path: "/cursos" }]}
        intro="Para plantillas grandes o distribuidas: cursos online con evaluación y certificado, combinables con sesiones en directo."
      />
      <section className="bg-paper pb-24">
        <ul className="container-x grid gap-4 md:grid-cols-2">
          {online.map((f) => (
            <li key={f.slug} className="rounded-[18px] bg-surface p-7 md:p-10">
              <p className="eyebrow text-muted">{f.duration}</p>
              <h2 className="display mt-4 text-[1.8rem]">{f.title}</h2>
              <p className="mt-4 text-ink-soft">{f.short}</p>
              <p className="mt-6">
                <span className="eyebrow text-muted">desde </span>
                <span className="text-[1.4rem] font-semibold">{f.priceFrom}</span>
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BracketButton href={`/presupuesto?formacion=${f.slug}`} tone="accent">
                  Licencias para mi equipo
                </BracketButton>
                <BracketButton href={`/formaciones/${f.slug}`}>Ver temario</BracketButton>
              </div>
            </li>
          ))}
          <li className="rounded-[18px] border border-dashed border-line p-7 md:p-10">
            <p className="eyebrow text-muted">Próximamente</p>
            <h2 className="display mt-4 text-[1.8rem]">Más cursos online</h2>
            <p className="mt-4 text-ink-soft">
              Prompting para equipos, IA y protección de datos, y herramientas por departamento. Mientras tanto, todas las{" "}
              <Link href="/formaciones" className="underline underline-offset-4">
                formaciones
              </Link>{" "}
              están disponibles online en directo.
            </p>
          </li>
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
