import type { MetadataRoute } from "next";
import { formaciones } from "@/lib/formaciones";
import { ciudades } from "@/lib/ciudades";
import { getPosts, blogCategories } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  ["/", 1],
  ["/formaciones", 0.9],
  ["/ai-act", 0.9],
  ["/test-ai-act", 0.8],
  ["/diagnostico", 0.8],
  ["/presupuesto", 0.7],
  ["/consultoria", 0.8],
  ["/precios", 0.8],
  ["/cursos", 0.6],
  ["/metodologia", 0.6],
  ["/nosotros", 0.5],
  ["/recursos", 0.7],
  ["/blog", 0.7],
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  return [
    ...staticRoutes.map(([path, priority]) => ({ url: absoluteUrl(path), priority, changeFrequency: "monthly" as const })),
    ...formaciones.map((f) => ({ url: absoluteUrl(`/formaciones/${f.slug}`), priority: 0.8, changeFrequency: "monthly" as const })),
    ...ciudades.map((c) => ({ url: absoluteUrl(`/formacion-ia/${c.slug}`), priority: 0.6, changeFrequency: "monthly" as const })),
    ...Object.keys(blogCategories).map((c) => ({ url: absoluteUrl(`/blog/categoria/${c}`), priority: 0.5, changeFrequency: "weekly" as const })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: p.updated ?? p.date, priority: 0.6, changeFrequency: "monthly" as const })),
  ];
}
