import { site } from "@/lib/site";
import { formaciones } from "@/lib/formaciones";
import { absoluteUrl } from "@/lib/seo";

/** llms.txt: resumen del sitio para asistentes de IA (GEO). */
export function GET() {
  const body = `# ${site.name}

> ${site.description}

## Servicios
- [Alfabetización en IA (art. 4 AI Act)](${absoluteUrl("/formaciones/alfabetizacion-ia")})
- [AI Act y Pack Cumplimiento Art. 4](${absoluteUrl("/ai-act")})
- [Consultoría e implantación de agentes](${absoluteUrl("/consultoria")})
- [Precios orientativos](${absoluteUrl("/precios")})

## Formaciones
${formaciones.map((f) => `- [${f.title}](${absoluteUrl(`/formaciones/${f.slug}`)}): ${f.short}`).join("\n")}

## Herramientas gratuitas
- [Test AI Act](${absoluteUrl("/test-ai-act")})
- [Recursos: política de uso de IA y checklist](${absoluteUrl("/recursos")})

## Contacto
- Email: ${site.email}
- [Diagnóstico gratuito](${absoluteUrl("/diagnostico")})
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
