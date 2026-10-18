# Componentes MDX del blog (y reglas de sintaxis)

Los artículos son `content/blog/<slug>.mdx`. next-mdx-remote **bloquea expresiones JS**: nunca uses `{...}` en props ni en el texto. Todas las props son cadenas entre comillas dobles. Las llaves `{` `}` y los signos `<` sueltos en el texto rompen el MDX: escribe «menos de» en vez de `<`, y evita llaves.
Cuando un componente contiene Markdown (listas, negritas, enlaces), deja **una línea en blanco** después de la etiqueta de apertura y antes de la de cierre.
Tablas Markdown (GFM) disponibles. No uses imágenes externas ni HTML crudo distinto de estos componentes.

| Componente | Uso |
|---|---|
| `<Callout tipo="clave" titulo="…">…</Callout>` | Caja destacada. `tipo`: `clave` (idea principal), `dato` (cifra o hecho con fuente), `aviso` (error frecuente, precaución), `legal` (aviso jurídico). `titulo` opcional. |
| `<Stats>` + `<Stat valor="21,1 %" etiqueta="…" fuente="INE, 2025" href="https://…" />` | Rejilla de 2–3 cifras grandes. Solo cifras verificadas con fuente. |
| `<Barras titulo="…" datos="España\|21,1;UE\|19,9" unidad=" %" fuente="Eurostat, 2025" href="https://…" />` | Gráfico de barras horizontales. Filas separadas por `;`, etiqueta y valor por `\|`. Decimal con coma. |
| `<Flujo titulo="…" pasos="Diagnóstico\|Piloto\|Producción" />` | Proceso en fases (3–6). |
| `<Steps>` + lista `1. …` + `</Steps>` | Pasos numerados con aspecto de tarjeta. |
| `<Checklist titulo="…">` + lista `- …` + `</Checklist>` | Lista de comprobación con ticks. |
| `<Timeline>` + `<Hito fecha="2 feb 2025" titulo="…">texto</Hito>` + `</Timeline>` | Cronología. |
| `<Columnas><Pros titulo="Ventajas">` lista `</Pros><Contras titulo="Inconvenientes">` lista `</Contras></Columnas>` | Pros y contras en dos columnas. |
| `<CtaInline />` | CTA del cluster (test AI Act, plantilla, formaciones, diagnóstico). Una vez, hacia la mitad. (Al final ya se pinta otro automáticamente.) |
| `<FormacionCard slug="chatgpt-empresas" />` | Caja «¿Formación para tu equipo?» con título, duración, formatos y precio «desde … + IVA» leídos del catálogo. Una por artículo, en el último tercio. |
| `<Fuentes>` + lista de enlaces + `</Fuentes>` | Obligatorio, al final del cuerpo. |

Ejemplo:

```mdx
<Callout tipo="aviso" titulo="Error frecuente">

Pensar que el art. 4 exige un **certificado**. No lo exige.

</Callout>

<Fuentes>

- [Reglamento (UE) 2024/1689, art. 4 — EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
- [AI Literacy – Questions & Answers — Comisión Europea](https://digital-strategy.ec.europa.eu/…)

</Fuentes>
```

La página ya pinta automáticamente: H1 (= `title`), migas, autor, fecha, tiempo de lectura, caja «En resumen» (= `tldr`), índice (de los `##`), CTA final, FAQ (= `faqs`, con schema FAQPage) y artículos relacionados. **No** repitas el H1 ni pongas «Índice» o «Preguntas frecuentes» en el cuerpo. Usa `##` para secciones y `###` para subsecciones (nunca `#`).

## Slugs de formaciones (para FormacionCard y enlaces /formaciones/<slug>)
alfabetizacion-ia (desde 99 €/persona) · ia-generativa · chatgpt-empresas · claude-empresas · copilot-microsoft-365 · gemini-workspace · agentes-ia-automatizacion · ia-para-directivos · ia-marketing · ia-ventas · ia-rrhh · ia-legal · ia-finanzas · ia-atencion-cliente · formacion-tecnica-llm

## Otras páginas a las que enlazar
/ai-act (Pack Art. 4: inventario de IA, política de uso orientativa, formación por perfiles, registro de evidencias, revisión anual) · /test-ai-act (test gratuito de 3 min) · /diagnostico (diagnóstico gratuito de 30 min) · /presupuesto · /consultoria (agentes y automatización: diagnóstico de madurez, agentes y asistentes con RAG, automatización con n8n/Make/Zapier, acompañamiento; piloto → prototipo en 2–4 semanas → producción → traspaso) · /precios · /recursos (plantilla de política de uso de IA, checklist art. 4, guía «qué datos no meter en una IA», descarga gratuita) · /metodologia · /formaciones · /cursos
