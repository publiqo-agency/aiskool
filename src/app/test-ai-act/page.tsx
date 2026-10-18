import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { AiActTest } from "@/components/forms/AiActTest";

export const metadata = pageMetadata({
  title: "Test AI Act: ¿está preparada tu empresa para el artículo 4?",
  description:
    "Test gratuito de 3 minutos para saber si tu empresa tiene medidas de alfabetización en IA según el artículo 4 del Reglamento Europeo de IA. Resultado al momento y por email.",
  path: "/test-ai-act",
});

export default function TestPage() {
  return (
    <>
      <PageHeader
        figure="pyramid"
        eyebrow="Test gratuito · 3 minutos"
        title="¿Está tu empresa preparada para el art. 4 del AI Act?"
        crumbs={[
          { name: "AI Act", path: "/ai-act" },
          { name: "Test", path: "/test-ai-act" },
        ]}
        intro={
          <>
            8 preguntas sobre el uso de IA en tu empresa. Al terminar verás tu nivel de preparación y los próximos pasos recomendados.{" "}
            <Link href="/ai-act" className="underline underline-offset-4">
              Qué dice exactamente el art. 4
            </Link>
            .
          </>
        }
      />
      <section className="bg-paper pb-24 md:pb-32">
        <div className="container-x max-w-[960px]">
          <AiActTest />
          <p className="mt-6 text-[0.9rem] text-muted">Test orientativo y divulgativo basado en el texto del art. 4. No es asesoramiento jurídico ni acredita el cumplimiento.</p>
        </div>
      </section>
    </>
  );
}
