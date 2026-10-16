import { Suspense } from "react";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { PresupuestoForm } from "@/components/forms/PresupuestoForm";

export const metadata = pageMetadata({
  title: "Pedir presupuesto de formación en IA",
  description: "Cuéntanos cuántas personas, qué departamentos y qué modalidad. Te enviamos una propuesta de formación en IA en 48 h laborables.",
  path: "/presupuesto",
});

const steps = ["Nos cuentas qué necesitáis", "Te proponemos itinerario y precio en 48 h", "Ajustamos el temario con un diagnóstico", "Formamos y documentamos"];

export default function PresupuestoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Presupuesto"
        title="Pide tu propuesta de formación"
        crumbs={[{ name: "Presupuesto", path: "/presupuesto" }]}
        intro="Dos minutos de formulario. Respondemos con un itinerario y un precio cerrado en un máximo de 48 horas laborables."
      />
      <section className="bg-paper pb-24 md:pb-32">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="h-[720px] rounded-[18px] bg-surface" />}>
              <PresupuestoForm />
            </Suspense>
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-[18px] bg-ink p-7 text-white lg:sticky lg:top-28">
              <p className="eyebrow text-white/60">Cómo sigue</p>
              <ol className="mt-6 space-y-5">
                {steps.map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span className="eyebrow mt-0.5 text-white/40">0{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
