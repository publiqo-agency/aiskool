import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { BracketButton } from "@/components/ui/BracketButton";
import { Particles } from "@/components/three/Particles";
import { CtaBand } from "@/components/ui/CtaBand";
import { ServiceLinks, ServicePins, ServiceCards, type Service } from "@/components/sections/ServiceLinks";

export const metadata = pageMetadata({
  title: "Consultoría e implantación de agentes de IA",
  description:
    "Implantamos agentes de IA y automatizaciones en tu empresa: asistentes con tus documentos, flujos con n8n o Make e integraciones a medida. Con formación y acompañamiento.",
  path: "/consultoria",
});

const services: Service[] = [
  {
    t: "Diagnóstico de madurez",
    d: "Analizamos procesos, herramientas y datos para priorizar dónde la IA aporta más con menos riesgo.",
    items: ["Entrevistas por área", "Mapa de procesos", "Priorización por impacto y esfuerzo"],
  },
  {
    t: "Agentes y asistentes",
    d: "Asistentes internos que responden con vuestra documentación y agentes que ejecutan tareas con supervisión.",
    items: ["RAG sobre documentos propios", "Integración con correo, CRM y ERP", "Evaluación de calidad"],
  },
  {
    t: "Automatización de procesos",
    d: "Flujos con n8n, Make, Zapier o desarrollo propio para eliminar trabajo repetitivo.",
    items: ["Clasificación y extracción de documentos", "Respuestas y seguimiento", "Informes automáticos"],
  },
  {
    t: "Acompañamiento",
    d: "4–6 semanas tras la formación para que el uso se quede: sesiones de dudas, revisión de casos y métricas.",
    items: ["Sesiones de seguimiento", "Métricas de adopción", "Informe final"],
  },
];

export default function ConsultoriaPage() {
  return (
    <>
      {/* Fondo noche detrás del banner: las líneas bajan sin cortes hasta las tarjetas */}
      <ServiceLinks className="bg-night">
        <PageHeader
          figure="terrain"
          eyebrow="Consultoría"
          title="Implantamos la IA que tu equipo ya sabe usar"
          crumbs={[{ name: "Consultoría", path: "/consultoria" }]}
          intro="La formación detecta oportunidades; nuestro equipo técnico las convierte en agentes y automatizaciones que funcionan, con seguridad y supervisión humana."
          footer={<ServicePins services={services} />}
        >
          <BracketButton href="/diagnostico" tone="accent" size="lg">
            Cuéntanos tu proceso
          </BracketButton>
        </PageHeader>

        <section className="relative overflow-hidden bg-night pt-2 pb-20 text-white md:pb-28">
          <Particles shape="cloud" count={4800} size={2} color="#e9e9e4" className="absolute inset-0 opacity-60" />
          <ServiceCards services={services} />
        </section>
      </ServiceLinks>

      <section className="bg-paper py-24 md:py-32">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <h2 className="display text-[clamp(1.8rem,3.4vw,2.8rem)] md:col-span-5">Cómo trabajamos los proyectos</h2>
          <ol className="divide-y divide-line border-y border-line md:col-span-7">
            {[
              ["Caso piloto", "Un proceso acotado, con objetivo y métrica definidos desde el principio."],
              ["Prototipo en 2–4 semanas", "Funcionando con datos reales (o anonimizados) y validado por el equipo que lo usará."],
              ["Puesta en producción", "Seguridad, permisos, registro de actividad y supervisión humana donde haga falta."],
              ["Formación y traspaso", "Documentación y formación para que el equipo lo mantenga, o mantenimiento por nuestra parte."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-6 py-6">
                <span className="eyebrow mt-1 text-muted">0{i + 1}</span>
                <div>
                  <h3 className="text-[1.15rem] font-semibold">{t}</h3>
                  <p className="mt-1 text-ink-soft">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand title="¿Tienes un proceso que se repite cada día?" text="Cuéntanoslo en un diagnóstico gratuito y te decimos si tiene sentido automatizarlo." />
    </>
  );
}
