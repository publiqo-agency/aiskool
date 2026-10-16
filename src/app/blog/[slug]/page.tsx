import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getPosts, blogCategories } from "@/lib/blog";
import { pageMetadata, JsonLd, articleJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { BlogCta } from "@/components/ui/BlogCta";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/ui/CtaBand";

// Todas las variantes se prerenderizan en build; la navegación puede esperar a la página generada.
export const instant = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  // Con Cache Components hace falta al menos un parámetro; el marcador devuelve 404.
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "__placeholder__" }];
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return pageMetadata({ title: post.meta.title, description: post.meta.description, path: `/blog/${slug}`, type: "article" });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const { meta, content } = post;
  const cat = blogCategories[meta.category];
  const related = (await getPosts()).filter((p) => p.category === meta.category && p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleJsonLd({ title: meta.title, description: meta.description, path: `/blog/${slug}`, date: meta.date, updated: meta.updated, author: meta.author })} />
      <PageHeader
        eyebrow={cat?.label}
        title={meta.title}
        crumbs={[
          { name: "Blog", path: "/blog" },
          { name: meta.title, path: `/blog/${slug}` },
        ]}
      />
      <section className="bg-paper pb-20">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <article className="md:col-span-8">
            {meta.tldr && (
              <div className="mb-10 rounded-[16px] border border-line bg-surface p-6">
                <p className="eyebrow text-accent">En resumen</p>
                <p className="mt-2 text-[1.1rem] leading-[1.6]">{meta.tldr}</p>
              </div>
            )}
            <div className="prose-ia">
              <MDXRemote source={content} components={{ CtaInline: () => <BlogCta category={meta.category} /> }} />
            </div>
            <BlogCta category={meta.category} />
            <footer className="mt-10 border-t border-line pt-6 text-[0.95rem] text-muted">
              Escrito por <span className="text-ink">{meta.author}</span> · Actualizado el{" "}
              {new Date(meta.updated ?? meta.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
            </footer>
          </article>
          <aside className="md:col-span-4">
            <div className="rounded-[16px] bg-surface p-6 md:sticky md:top-28">
              <p className="eyebrow text-muted">Relacionado</p>
              <ul className="mt-4 space-y-3">
                {cat && (
                  <li>
                    <Link href={cat.pillar} className="font-medium underline-offset-4 hover:underline">
                      Guía principal: {cat.label}
                    </Link>
                  </li>
                )}
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="text-ink-soft underline-offset-4 hover:underline">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      {meta.faqs && meta.faqs.length > 0 && <Faq items={meta.faqs} />}
      <CtaBand />
    </>
  );
}
