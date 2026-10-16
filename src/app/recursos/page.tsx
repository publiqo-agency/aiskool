import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { RecursoForm } from "@/components/forms/RecursoForm";
import { BracketButton } from "@/components/ui/BracketButton";

export const metadata = pageMetadata({
  title: "Recursos gratuitos: plantilla de política de uso de IA y checklist AI Act",
  description: "Descarga gratis una plantilla de política de uso de IA para empresas y un checklist del artículo 4 del AI Act.",
  path: "/recursos",
});

// TODO(cliente): preparar los documentos (PDF/DOCX) que se envían por email al solicitarlos.
const resources = [
  {
    id: "politica-uso-ia",
    t: "Plantilla de política de uso de IA",
    d: "Documento editable con herramientas permitidas, datos prohibidos, revisión humana, responsables y canal de dudas.",
  },
  {
    id: "checklist-art-4",
    t: "Checklist art. 4 AI Act",
    d: "Lista de comprobación para saber qué medidas de alfabetización tienes y cuáles te faltan.",
  },
  {
    id: "guia-datos-ia",
    t: "Guía: qué datos no meter en una IA",
    d: "Una página para imprimir y compartir con la plantilla.",
  },
];

export default function RecursosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recursos gratuitos"
        title="Recursos para ordenar el uso de IA"
        crumbs={[{ name: "Recursos", path: "/recursos" }]}
        intro="Plantillas y guías prácticas que usamos con nuestros clientes. Te las enviamos por email."
      />
      <section className="bg-paper pb-24 md:pb-32">
        <ul className="container-x grid gap-4 md:grid-cols-3">
          {resources.map((r) => (
            <li key={r.id} className="flex flex-col rounded-[18px] bg-surface p-7">
              <h2 className="text-[1.3rem] font-semibold">{r.t}</h2>
              <p className="mt-3 flex-1 text-ink-soft">{r.d}</p>
              <RecursoForm recurso={r.id} />
            </li>
          ))}
          <li className="flex flex-col rounded-[18px] bg-ink p-7 text-white">
            <h2 className="text-[1.3rem] font-semibold">Test AI Act</h2>
            <p className="mt-3 flex-1 text-white/70">8 preguntas para saber si tu empresa tiene medidas de alfabetización en IA.</p>
            <div className="mt-6">
              <BracketButton href="/test-ai-act" tone="accent">
                Hacer el test
              </BracketButton>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
