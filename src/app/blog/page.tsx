import Link from "next/link";
import { getPosts, blogCategories, type BlogCategory } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Blog de IA para empresas",
  description: "Guías prácticas sobre IA en la empresa: AI Act y alfabetización, herramientas, IA por departamento, agentes y automatización.",
  path: "/blog",
});

const fmt = (d: string) => new Date(d).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <>
      <PageHeader
        figure="orbits"
        tone="light"
        seed="blog"
        eyebrow="Blog"
        title="IA en la empresa, explicada con criterio"
        crumbs={[{ name: "Blog", path: "/blog" }]}
        intro="Guías prácticas, sin humo, para equipos y responsables que quieren usar bien la inteligencia artificial."
      />
      <section className="bg-paper pb-24">
        <div className="container-x">
          <nav aria-label="Categorías" className="flex flex-wrap gap-2">
            {(Object.keys(blogCategories) as BlogCategory[]).map((c) => (
              <Link key={c} href={`/blog/categoria/${c}`} className="eyebrow rounded-full border border-line bg-surface px-4 py-2 text-ink-soft hover:border-ink">
                {blogCategories[c].label}
              </Link>
            ))}
          </nav>

          {posts.length === 0 ? (
            <div className="mt-12 rounded-[18px] border border-dashed border-line p-10 text-center">
              <p className="display text-[1.6rem]">Primeros artículos en camino</p>
              <p className="mx-auto mt-3 max-w-[52ch] text-ink-soft">
                Mientras tanto, prueba el{" "}
                <Link href="/test-ai-act" className="underline underline-offset-4">
                  test del AI Act
                </Link>{" "}
                o descarga nuestros{" "}
                <Link href="/recursos" className="underline underline-offset-4">
                  recursos gratuitos
                </Link>
                .
              </p>
            </div>
          ) : (
            <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <li key={p.slug} className="relative flex flex-col rounded-[18px] bg-surface p-7">
                  <p className="eyebrow text-muted">{blogCategories[p.category]?.label}</p>
                  <h2 className="mt-4 text-[1.3rem] font-semibold leading-tight">
                    <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-ink-soft">{p.description}</p>
                  <p className="eyebrow mt-6 text-muted">{fmt(p.date)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
