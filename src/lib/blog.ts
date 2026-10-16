import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export const blogCategories = {
  "ai-act": { label: "AI Act y alfabetización", pillar: "/ai-act", cta: "test" },
  gobernanza: { label: "Gobernanza y seguridad", pillar: "/recursos", cta: "politica" },
  herramientas: { label: "Herramientas", pillar: "/formaciones", cta: "formacion" },
  departamentos: { label: "IA por departamento", pillar: "/formaciones", cta: "formacion" },
  agentes: { label: "Agentes y automatización", pillar: "/consultoria", cta: "consultoria" },
  "formacion-empresas": { label: "Formación en empresas", pillar: "/precios", cta: "diagnostico" },
  conceptos: { label: "Conceptos básicos", pillar: "/formaciones/alfabetizacion-ia", cta: "test" },
} as const;

export type BlogCategory = keyof typeof blogCategories;

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: BlogCategory;
  author: string;
  tldr?: string;
  draft?: boolean;
  faqs?: { q: string; a: string }[];
};

const DIR = path.join(process.cwd(), "content", "blog");

/** Lee todos los artículos publicados (cacheado; se recalcula en cada build). */
export async function getPosts(): Promise<PostMeta[]> {
  "use cache";
  let files: string[] = [];
  try {
    files = (await fs.readdir(DIR)).filter((f) => f.endsWith(".mdx"));
  } catch {
    return [];
  }
  const posts = await Promise.all(
    files.map(async (f) => {
      const { data } = matter(await fs.readFile(path.join(DIR, f), "utf8"));
      return { ...(data as Omit<PostMeta, "slug">), slug: f.replace(/\.mdx$/, "") };
    }),
  );
  return posts.filter((p) => !p.draft).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<{ meta: PostMeta; content: string } | null> {
  "use cache";
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  try {
    const raw = await fs.readFile(path.join(DIR, `${slug}.mdx`), "utf8");
    const { data, content } = matter(raw);
    const meta = { ...(data as Omit<PostMeta, "slug">), slug };
    if (meta.draft) return null;
    return { meta, content };
  } catch {
    return null;
  }
}
