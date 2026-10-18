import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Precios de formación en IA para empresas",
  description: "Precios orientativos de formación en IA para empresas: alfabetización online desde 99 €/persona, talleres in-company desde 1.500 € y Pack Art. 4 desde 2.900 €.",
  path: "/precios",
});

const faqs = [
  { q: "¿Los precios incluyen IVA?", a: "No. Todos los precios son orientativos y sin IVA." },
  { q: "¿Qué incluye el precio de un taller in-company?", a: "Diseño y adaptación de contenidos, impartición, materiales, evaluación, certificados y registro de asistencia. Los desplazamientos fuera de la ciudad de impartición se presupuestan aparte." },
  { q: "¿Hay descuentos por volumen?", a: "Sí. A partir de varios grupos o de más de 100 personas preparamos una propuesta específica." },
  { q: "¿Se puede bonificar?", a: "Estamos estudiando cómo ofrecer formación bonificable. Pregúntanos por tu caso concreto." },
  { q: "¿Cómo se paga?", a: "Normalmente un 50 % a la confirmación y un 50 % a la finalización. Para programas largos acordamos hitos." },
];

export default function PreciosPage() {
  return (
    <>
      <PageHeader
        figure="horizon"
        eyebrow="Precios"
        title="Precios orientativos, sin sorpresas"
        crumbs={[{ name: "Precios", path: "/precios" }]}
        intro="El precio final depende del número de personas, la modalidad y la personalización. Te enviamos una propuesta cerrada en 48 h."
      />
      {/* Las tarjetas suben sobre el horizonte de puntos del banner */}
      <div className="relative z-10 -mt-32 md:-mt-44">
        <Pricing heading={false} overlap />
      </div>
      <Faq items={faqs} title="Dudas sobre precios" />
      <CtaBand />
    </>
  );
}
