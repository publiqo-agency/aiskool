import { formaciones } from "@/lib/formaciones";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { CatalogFilter } from "@/components/forms/CatalogFilter";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Formaciones de IA para empresas",
  description:
    "Catálogo de formaciones de inteligencia artificial para empresas: alfabetización en IA, ChatGPT, Claude, Copilot, Gemini, agentes, y formación por departamento. In-company u online.",
  path: "/formaciones",
});

export default function FormacionesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catálogo"
        title="Formaciones de IA para empresas"
        crumbs={[{ name: "Formaciones", path: "/formaciones" }]}
        intro="Todas las formaciones se adaptan a tu empresa: tus casos, tus herramientas y tu sector. Presenciales en cualquier ciudad de España u online en directo."
      />
      <section className="bg-paper pb-24 md:pb-32">
        <div className="container-x">
          <CatalogFilter items={formaciones} />
        </div>
      </section>
      <CtaBand title="¿No sabes cuál encaja con tu equipo?" />
    </>
  );
}
