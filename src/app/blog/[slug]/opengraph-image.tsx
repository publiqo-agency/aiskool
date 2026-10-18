import { ImageResponse } from "next/og";
import { getPost, blogCategories } from "@/lib/blog";
import { site } from "@/lib/site";

export const alt = `Artículo del blog de ${site.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen OG por artículo: mismo estilo que la general, con categoría y titular. */
export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  const title = post?.meta.title ?? "Blog";
  const label = post ? blogCategories[post.meta.category]?.label : "Blog";
  const dots = Array.from({ length: 10 * 9 }, (_, i) => i);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0d0e11", color: "#f3f2ee", padding: 72, position: "relative" }}>
        <div style={{ position: "absolute", right: 60, top: 60, width: 280, display: "flex", flexWrap: "wrap", gap: 18, opacity: 0.45 }}>
          {dots.map((i) => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: 8, background: i % 7 === 0 ? "#2b47ff" : "#d8d8d4" }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 26, letterSpacing: 2, textTransform: "uppercase" }}>
          <span>{site.name}</span>
          <span style={{ color: "#2b47ff" }}>{label}</span>
        </div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 60 : 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 26, color: "#a9aaae" }}>Formación en IA para empresas · Blog</div>
      </div>
    ),
    size,
  );
}
