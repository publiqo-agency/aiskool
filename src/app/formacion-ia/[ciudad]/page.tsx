import Link from "next/link";
import { notFound } from "next/navigation";
import { ciudades, getCiudad } from "@/lib/ciudades";
import { formaciones } from "@/lib/formaciones";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { BracketButton } from "@/components/ui/BracketButton";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/ui/CtaBand";

// Todas las variantes se prerenderizan en build; la navegación puede esperar a la página generada.
export const instant = false;

export function generateStaticParams() {
  return ciudades.map((c) => ({ ciudad: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/formacion-ia/[ciudad]">) {
  const { ciudad } = await params;
  const c = getCiudad(ciudad);
  if (!c) return {};
  return pageMetadata({
    title: `Formación en IA para empresas en ${c.name}`,
    description: `Formación en inteligencia artificial in-company en ${c.name}: alfabetización en IA (AI Act), ChatGPT, Copilot, Claude y agentes. En tus oficinas o online.`,
    path: `/formacion-ia/${c.slug}`,
  });
}

export default async function CiudadPage({ params }: PageProps<"/formacion-ia/[ciudad]">) {
  const { ciudad } = await params;
  const c = getCiudad(ciudad);
  if (!c) notFound();
  const destacadas = formaciones.filter((f) => f.featured);

  const faqs = [
    { q: `¿Os desplazáis a nuestras oficinas en ${c.name}?`, a: `Sí. Impartimos formación presencial en ${c.name} y en el resto de ${c.region}. Los desplazamientos se incluyen en el presupuesto.` },
    { q: "¿Se puede combinar presencial y online?", a: "Sí. Es habitual hacer una sesión presencial de arranque y continuar online en directo, o completar con el curso de alfabetización a su ritmo." },
    { q: "¿Con cuánta antelación hay que reservar?", a: "Para un taller estándar, una o dos semanas. Para programas a medida, entre dos y cuatro semanas tras el diagnóstico." },
  ];

  return (
    <>
      <PageHeader
        figure="terrain"
        eyebrow={c.region}
        title={`Formación en IA para empresas en ${c.name}`}
        crumbs={[
          { name: "Formaciones", path: "/formaciones" },
          { name: c.name, path: `/formacion-ia/${c.slug}` },
        ]}
        intro={`Formamos a equipos de empresas de ${c.name} en tus oficinas o online en directo. Trabajamos con organizaciones de sectores como ${c.focus}, adaptando cada formación a sus procesos y herramientas.`}
      >
        <div className="flex flex-wrap gap-3">
          <BracketButton href="/diagnostico" tone="accent" size="lg">
            Diagnóstico gratuito
          </BracketButton>
          <BracketButton href="/presupuesto" tone="dark" size="lg">
            Pedir presupuesto
          </BracketButton>
        </div>
      </PageHeader>

      <section className="bg-paper pb-24">
        <div className="container-x">
          <h2 className="display text-[clamp(1.6rem,3vw,2.4rem)]">Formaciones más pedidas en {c.name}</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {destacadas.map((f) => (
              <li key={f.slug} className="relative rounded-[16px] bg-surface p-6">
                <h3 className="text-[1.15rem] font-semibold">
                  <Link href={`/formaciones/${f.slug}`} className="after:absolute after:inset-0">
                    {f.title}
                  </Link>
                </h3>
                <p className="mt-2 text-[0.95rem] text-ink-soft">{f.short}</p>
                <p className="eyebrow mt-4 text-muted">Desde {f.priceFrom}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-ink-soft">
            Además, ayudamos a las empresas de {c.name} con la{" "}
            <Link href="/ai-act" className="underline underline-offset-4">
              alfabetización en IA que pide el art. 4 del AI Act
            </Link>{" "}
            y con la{" "}
            <Link href="/consultoria" className="underline underline-offset-4">
              implantación de agentes y automatizaciones
            </Link>
            .
          </p>
        </div>
      </section>

      <Faq items={faqs} title={`Formación en ${c.name}`} />

      <section className="bg-paper pb-16">
        <div className="container-x">
          <p className="eyebrow text-muted">También formamos en</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {ciudades
              .filter((x) => x.slug !== c.slug)
              .map((x) => (
                <li key={x.slug}>
                  <Link href={`/formacion-ia/${x.slug}`} className="rounded-full border border-line bg-surface px-4 py-2 text-[0.92rem] hover:border-ink">
                    {x.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
