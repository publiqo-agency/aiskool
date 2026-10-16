import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts, blogCategories, type BlogCategory } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { BlogCta } from "@/components/ui/BlogCta";

const isCat = (c: string): c is BlogCategory => c in blogCategories;

// Todas las variantes se prerenderizan en build; la navegación puede esperar a la página generada.
export const instant = false;

export function generateStaticParams() {
  return Object.keys(blogCategories).map((cat) => ({ cat }));
}

export async function generateMetadata({ params }: PageProps<"/blog/categoria/[cat]">) {
  const { cat } = await params;
  if (!isCat(cat)) return {};
  return pageMetadata({ title: `${blogCategories[cat].label}: artículos`, description: `Artículos sobre ${blogCategories[cat].label.toLowerCase()} para empresas.`, path: `/blog/categoria/${cat}` });
}

export default async function CategoryPage({ params }: PageProps<"/blog/categoria/[cat]">) {
  const { cat } = await params;
  if (!isCat(cat)) notFound();
  const posts = (await getPosts()).filter((p) => p.category === cat);
  const c = blogCategories[cat];

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title={c.label}
        crumbs={[
          { name: "Blog", path: "/blog" },
          { name: c.label, path: `/blog/categoria/${cat}` },
        ]}
      />
      <section className="bg-paper pb-24">
        <div className="container-x max-w-[960px]">
          {posts.length === 0 ? (
            <p className="text-ink-soft">
              Pronto publicaremos artículos en esta categoría. Mientras tanto, visita la{" "}
              <Link href={c.pillar} className="underline underline-offset-4">
                guía principal
              </Link>
              .
            </p>
          ) : (
            <ul className="divide-y divide-line border-y border-line">
              {posts.map((p) => (
                <li key={p.slug} className="py-6">
                  <Link href={`/blog/${p.slug}`} className="text-[1.25rem] font-semibold underline-offset-4 hover:underline">
                    {p.title}
                  </Link>
                  <p className="mt-2 text-ink-soft">{p.description}</p>
                </li>
              ))}
            </ul>
          )}
          <BlogCta category={cat} />
        </div>
      </section>
    </>
  );
}
