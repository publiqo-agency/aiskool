import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { BracketButton } from "@/components/ui/BracketButton";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "AI Act y alfabetización en IA (art. 4): qué debe hacer tu empresa",
  description:
    "Qué exige el artículo 4 del Reglamento Europeo de IA sobre alfabetización, a quién afecta y cómo documentarlo. Pack Art. 4: formación, política de uso, inventario y evidencias.",
  path: "/ai-act",
});

/*
 * Redacción del art. 4 verificada en EUR-Lex: Reglamento (UE) 2026/1744 (DOUE 24/7/2026, en vigor el 27/7/2026).
 * No somos abogados: esta página informa y vende formación y documentación, nunca asesoramiento jurídico ni
 * «certificación» de cumplimiento. Ver docs/LIMITES-LEGALES.md antes de tocar el texto.
 */

const pack = [
  { t: "Inventario de IA", d: "Qué herramientas y sistemas de IA se usan, en qué procesos y por quién. Incluye los usos «en la sombra» con cuentas personales." },
  { t: "Política de uso", d: "Normas claras y breves: herramientas permitidas, datos prohibidos, revisión humana, responsables y canal de dudas." },
  { t: "Formación por perfiles", d: "Alfabetización común para toda la plantilla y módulos específicos para quien usa IA en decisiones o procesos sensibles." },
  { t: "Evidencias", d: "Registro de asistencia, contenidos, evaluaciones y fechas. Un dossier que puedes enseñar si te piden explicar qué has hecho." },
  { t: "Revisión anual", d: "Actualización del inventario, la política y la formación cuando cambian las herramientas o los usos." },
];

const faqs = [
  {
    q: "¿A qué empresas afecta el artículo 4?",
    a: "A los proveedores y a los responsables del despliegue de sistemas de IA. En la práctica, cualquier empresa cuya plantilla use herramientas de IA en su trabajo (por ejemplo, un asistente como ChatGPT o Copilot) es responsable del despliegue y debe adoptar medidas de alfabetización.",
  },
  {
    q: "¿Exige un certificado o un número mínimo de horas?",
    a: "No. No fija horas, títulos ni certificados oficiales, y tampoco exige que la imparta un formador acreditado. Pide medidas adecuadas teniendo en cuenta los conocimientos técnicos, la experiencia y la formación de las personas, y el contexto en el que se usa la IA. Por eso conviene diseñar la formación por perfiles y documentarla.",
  },
  {
    q: "¿Hay multas por no cumplir el artículo 4?",
    a: "El régimen sancionador concreto depende de cada Estado miembro. Desconfía de mensajes que asocian el art. 4 a multas de 35 millones: esa cifra corresponde a las prácticas de IA prohibidas, no a la alfabetización. El riesgo real de no formar es otro: errores, fugas de datos y no poder demostrar diligencia.",
  },
  {
    q: "¿Qué relación tiene con el RGPD?",
    a: "Son normas distintas que se complementan. Muchos riesgos del uso diario de IA son de protección de datos: introducir datos personales de clientes o empleados en herramientas no autorizadas. Nuestra formación cubre ambos aspectos.",
  },
  {
    q: "¿Qué pasa con los sistemas de alto riesgo?",
    a: "Si usas IA en ámbitos como selección de personal, evaluación de empleados o acceso a servicios esenciales, hay obligaciones adicionales (supervisión humana, formación específica, información). En la formación te enseñamos a reconocerlos; la valoración jurídica de cada caso corresponde a tu asesoría legal.",
  },
];

const keyPoints = [
  "Pide adoptar medidas, no un certificado",
  "Sin horas mínimas ni formador acreditado",
  "Contenido formativo. No es asesoramiento jurídico",
];

export default function AiActPage() {
  return (
    <>
      <PageHeader
        figure="pyramid"
        eyebrow="Reglamento Europeo de IA · Art. 4"
        title="Alfabetización en IA: qué debe hacer tu empresa"
        crumbs={[{ name: "AI Act", path: "/ai-act" }]}
        intro="El AI Act pide a las empresas que usan IA que adopten medidas para que su personal aprenda a usarla con criterio. Te explicamos qué significa, sin alarmismos, y te ayudamos a documentarlo."
        footer={
          <ul className="grid gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
            {keyPoints.map((p, i) => (
              <li key={p} className="flex items-baseline gap-4">
                <span className="eyebrow text-white/40 color:text-white/70">0{i + 1}</span>
                <span className="text-white/85">{p}</span>
              </li>
            ))}
          </ul>
        }
      >
        <div className="flex flex-wrap gap-3">
          <BracketButton href="/test-ai-act" tone="accent" size="lg">
            Haz el test (3 min)
          </BracketButton>
          <BracketButton href="/presupuesto?formacion=alfabetizacion-ia" tone="dark" size="lg">
            Pedir el Pack Art. 4
          </BracketButton>
        </div>
      </PageHeader>

      <section className="bg-paper pb-24">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <article className="prose-ia md:col-span-7">
            <h2>Qué dice el artículo 4</h2>
            <p>
              El artículo 4 del Reglamento (UE) 2024/1689, conocido como <strong>AI Act</strong>, trata la <strong>alfabetización en IA</strong>.
              Se aplica desde el 2 de febrero de 2025 y se dirige a quienes desarrollan sistemas de IA y a quienes los utilizan en su
              actividad profesional. La idea es sencilla: las personas que trabajan con IA deben entender lo suficiente sobre ella para
              usarla de forma informada, conocer sus oportunidades y sus riesgos y saber qué daños puede causar.
            </p>
            <p>
              Desde el 27 de julio de 2026, el Reglamento (UE) 2026/1744, conocido como «Digital Omnibus», da al artículo 4 una
              redacción nueva: las empresas deben <strong>adoptar medidas para apoyar</strong> la alfabetización de su personal según
              sus conocimientos, su experiencia y el contexto de uso, sin estar obligadas a garantizar un nivel concreto en cada
              persona. Medidas razonables y proporcionadas, no un examen ni un título obligatorio.
            </p>
            <h2>Qué significa en la práctica</h2>
            <ul>
              <li>Saber qué herramientas de IA se usan en la empresa y para qué.</li>
              <li>Formar a cada persona según su puesto y el uso que hace de la IA.</li>
              <li>Fijar normas claras de uso: qué se puede hacer y qué no.</li>
              <li>Guardar evidencias de lo que se ha hecho y revisarlo periódicamente.</li>
            </ul>
            <h2>Qué no significa</h2>
            <p>
              No obliga a que cada empleado tenga un certificado oficial ni a impartir un número concreto de horas. Y no es la parte
              del Reglamento con las sanciones más altas: las cifras millonarias que circulan corresponden a las prácticas prohibidas.
              Conviene tomárselo en serio por lo que protege, que es tu empresa frente a errores, fugas de datos y decisiones mal
              tomadas, no por miedo.
            </p>
            <p>
              ¿Quieres saber dónde estás? <Link href="/test-ai-act">Haz el test gratuito</Link> o revisa la{" "}
              <Link href="/formaciones/alfabetizacion-ia">formación de alfabetización en IA</Link>.
            </p>
          </article>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="rounded-[18px] bg-night p-7 text-white md:sticky md:top-28">
              <p className="eyebrow text-white/60">Pack Art. 4</p>
              <p className="display mt-4 text-[2.2rem]">desde 2.900 €</p>
              <p className="text-white/60">por empresa · IVA no incluido</p>
              <ul className="mt-6 space-y-2 text-white/80">
                {pack.map((p) => (
                  <li key={p.t}>— {p.t}</li>
                ))}
              </ul>
              <div className="mt-8">
                <BracketButton href="/presupuesto?formacion=alfabetizacion-ia" tone="accent">
                  Pedir propuesta
                </BracketButton>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-mist py-24 md:py-32">
        <div className="container-x">
          <p className="eyebrow text-muted">Qué incluye el pack</p>
          <h2 className="display mt-4 max-w-[22ch] text-[clamp(1.8rem,3.6vw,3rem)]">Formación y documentación, en un solo proyecto</h2>
          <ol className="mt-12 grid gap-4 md:grid-cols-5">
            {pack.map((p, i) => (
              <li key={p.t} className="rounded-[16px] bg-surface p-6">
                <p className="eyebrow text-muted">0{i + 1}</p>
                <h3 className="mt-4 text-[1.15rem] font-semibold">{p.t}</h3>
                <p className="mt-2 text-[0.95rem] text-ink-soft">{p.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[0.9rem] text-muted">
            Formamos y te ayudamos a documentar las medidas; la responsabilidad del cumplimiento sigue siendo de la empresa. No
            prestamos asesoramiento jurídico ni certificamos el cumplimiento: para cuestiones legales concretas, consulta con tu
            asesoría legal.
          </p>
        </div>
      </section>

      <div className="pt-24 bg-paper md:pt-32">
        <Faq items={faqs} title="Dudas sobre el AI Act" />
      </div>
      <CtaBand title="Ordena el uso de IA en tu empresa" text="Inventario, política, formación y evidencias. Empezamos por un diagnóstico gratuito." />
    </>
  );
}
