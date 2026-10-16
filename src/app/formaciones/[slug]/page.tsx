import Link from "next/link";
import { notFound } from "next/navigation";
import { formaciones, getFormacion, categorias } from "@/lib/formaciones";
import { pageMetadata, JsonLd, courseJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { BracketButton } from "@/components/ui/BracketButton";
import { CtaBand } from "@/components/ui/CtaBand";
import { Faq } from "@/components/sections/Faq";

// Todas las variantes se prerenderizan en build; la navegación puede esperar a la página generada.
export const instant = false;

export function generateStaticParams() {
  return formaciones.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps<"/formaciones/[slug]">) {
  const { slug } = await params;
  const f = getFormacion(slug);
  if (!f) return {};
  return pageMetadata({ title: `${f.title}: formación para empresas`, description: `${f.short} ${f.duration}. ${f.formats.join(", ")}.`, path: `/formaciones/${f.slug}` });
}

export default async function FormacionPage({ params }: PageProps<"/formaciones/[slug]">) {
  const { slug } = await params;
  const f = getFormacion(slug);
  if (!f) notFound();

  const related = formaciones.filter((x) => x.slug !== f.slug && (x.categoria === f.categoria || x.featured)).slice(0, 3);
  const faqs = [
    { q: `¿Para quién es la formación «${f.title}»?`, a: `${f.audience}. Nivel ${f.level.toLowerCase()}.` },
    { q: "¿Cuánto dura?", a: `${f.duration}. Adaptamos la duración y el calendario a tu equipo.` },
    { q: "¿Se puede hacer presencial?", a: `Sí. Modalidades disponibles: ${f.formats.join(", ").toLowerCase()}. Nos desplazamos a cualquier ciudad de España.` },
    { q: "¿Cuánto cuesta?", a: `Desde ${f.priceFrom} (sin IVA). El precio final depende del número de personas, la modalidad y la personalización.` },
  ];

  return (
    <>
      <JsonLd data={courseJsonLd({ title: f.title, description: f.short, path: `/formaciones/${f.slug}`, duration: f.duration, formats: f.formats })} />
      <PageHeader
        eyebrow={categorias[f.categoria]}
        title={f.title}
        crumbs={[
          { name: "Formaciones", path: "/formaciones" },
          { name: f.title, path: `/formaciones/${f.slug}` },
        ]}
        intro={f.intro}
      >
        <div className="flex flex-wrap gap-3">
          <BracketButton href={`/presupuesto?formacion=${f.slug}`} tone="accent" size="lg">
            Pedir presupuesto
          </BracketButton>
          <BracketButton href="/diagnostico" size="lg">
            Hablar con el equipo
          </BracketButton>
        </div>
      </PageHeader>

      <section className="bg-paper pb-20">
        <div className="container-x">
          <dl className="grid gap-px overflow-hidden rounded-[18px] bg-line sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Para quién", f.audience],
              ["Duración", f.duration],
              ["Modalidad", f.formats.join(" · ")],
              ["Nivel", f.level],
              ["Desde", `${f.priceFrom} + IVA`],
            ].map(([k, v]) => (
              <div key={k} className="bg-surface p-6">
                <dt className="eyebrow text-muted">{k}</dt>
                <dd className="mt-2 text-[1rem]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-paper pb-24 md:pb-32">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="display text-[clamp(1.6rem,2.8vw,2.4rem)]">Qué sabrá hacer tu equipo</h2>
            <ul className="mt-8 space-y-4">
              {f.outcomes.map((o) => (
                <li key={o} className="flex gap-4 text-[1.05rem] leading-[1.5]">
                  <span aria-hidden className="mt-[0.55em] size-[7px] shrink-0 rounded-[2px] bg-accent" />
                  {o}
                </li>
              ))}
            </ul>
            {f.tools.length > 0 && (
              <>
                <h3 className="eyebrow mt-12 text-muted">Herramientas</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {f.tools.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-surface px-3 py-1.5 text-[0.9rem]">
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="display text-[clamp(1.6rem,2.8vw,2.4rem)]">Temario</h2>
            <ol className="mt-8 divide-y divide-line border-y border-line">
              {f.modules.map((m, i) => (
                <li key={m.title} className="py-6">
                  <p className="eyebrow text-muted">Módulo {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-[1.2rem] font-semibold">{m.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-ink-soft">
                    {m.items.map((it) => (
                      <li key={it}>— {it}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[0.95rem] text-muted">El temario se ajusta tras el diagnóstico con casos de tu empresa.</p>
          </div>
        </div>
      </section>

      <Faq items={faqs} title={`Sobre «${f.title}»`} />

      {related.length > 0 && (
        <section className="bg-paper pb-24">
          <div className="container-x">
            <h2 className="display text-[clamp(1.4rem,2.4vw,2rem)]">También te puede interesar</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug} className="relative rounded-[16px] bg-surface p-6">
                  <p className="eyebrow text-muted">{categorias[r.categoria]}</p>
                  <h3 className="mt-3 text-[1.15rem] font-semibold">
                    <Link href={`/formaciones/${r.slug}`} className="after:absolute after:inset-0">
                      {r.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-ink-soft">{r.short}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
