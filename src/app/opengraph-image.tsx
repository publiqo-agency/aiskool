import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} · Formación en IA para empresas`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen OG por defecto: fondo oscuro con retícula de puntos y titular. */
export default function OgImage() {
  const dots = Array.from({ length: 18 * 9 }, (_, i) => i);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0d0e11", color: "#f3f2ee", padding: 72, position: "relative" }}>
        <div style={{ position: "absolute", right: 60, top: 60, width: 520, display: "flex", flexWrap: "wrap", gap: 18, opacity: 0.5 }}>
          {dots.map((i) => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: 8, background: i % 7 === 0 ? "#2b47ff" : "#d8d8d4" }} />
          ))}
        </div>
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 2, textTransform: "uppercase" }}>{site.name}</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 700, lineHeight: 1, textTransform: "uppercase", maxWidth: 900 }}>
          Formación en IA para empresas
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a9aaae" }}>Alfabetización AI Act · ChatGPT · Claude · Copilot · Agentes</div>
      </div>
    ),
    size,
  );
}
