# Encargo común para los redactores

Hoy es **18 de octubre de 2026**. Escribes artículos para el blog de una empresa española de formación en IA para empresas (marca provisional: no escribas el nombre de la marca en el texto; usa «nosotros», «nuestras formaciones», «nuestro equipo»). Repo: `/Users/lucas/Projects/ia`.

## Lee antes de escribir (obligatorio)
1. `docs/blog-research/estilo.md`: guía de estilo y plantilla (síguela).
2. `docs/blog-research/keywords.md`: keyword final, secundarias, título propuesto, ángulo y reparto anti-canibalización de **tus** temas.
3. `docs/blog-research/componentes.md`: componentes MDX y reglas de sintaxis (crítico para que compile).
4. `docs/LIMITES-LEGALES.md`: reglas legales del copy (no negociables).
5. Los paquetes de datos verificados: `datos-ai-act-gobernanza.md`, `datos-herramientas-agentes.md`, `datos-adopcion-formacion-departamentos.md` (lee las secciones de tus temas y la sección 0 / resumen de cambios recientes de cada uno).
6. `docs/blog-research/temas.md`: los 50 slugs (para enlazado interno: solo enlaza a slugs de esa lista o a páginas reales del sitio).
7. `src/lib/formaciones.ts` y `src/lib/site.ts`: qué vendemos exactamente (no prometas nada que no esté ahí).

## Rigor: información 100 % real y contrastada
- Cada cifra, fecha, precio, cita o caso con nombre debe salir de los paquetes de datos (con su URL) o lo verificas tú abriendo la fuente primaria con WebFetch. Si no puedes verificarlo, **no lo pongas**. Nada de memoria ni de «según estudios».
- Enlaza la fuente en la propia frase (`[INE, 2025](url)`) y repítela en `<Fuentes>`.
- Lo marcado como «Paráfrasis» o «no verificado» en los paquetes: no lo entrecomilles; verifícalo o omítelo.
- Precios de terceros: indica moneda, si incluye IVA, periodicidad y «consultado en octubre de 2026». Los nuestros: solo con `<FormacionCard>` o enlazando a /precios; si das una cifra nuestra, «desde … + IVA» y tal cual aparece en `src/lib/`.
- Productos que han cambiado en 2026 (GPTs → plugins, NotebookLM → Gemini Notebook, función =COPILOT retirada, generaciones de modelos actuales, Digital Omnibus, proyecto de ley española de IA caducado): refleja el estado vigente a 18/10/2026.
- No inventes clientes, testimonios, casos propios ni resultados nuestros. Los casos con nombre deben ser públicos y con fuente.

## Legal (resumen; manda LIMITES-LEGALES.md)
- Art. 4: «adoptar medidas para apoyar la promoción de la alfabetización» (cita literal del Reglamento (UE) 2026/1744 si entrecomillas), sin garantizar un nivel concreto, sin certificado, horas mínimas ni formador acreditado. Nunca ligarlo a las multas de 35 M€. Sin alarmismo con multas ni inspecciones. Nunca «formación obligatoria» sin matizar.
- Todo artículo que toque normativa (categoría ai-act, gobernanza, RR. HH., legal, RGPD) lleva al final del cuerpo, antes de `<Fuentes>`: `<Callout tipo="legal">Este artículo es informativo y no es asesoramiento jurídico. …</Callout>`; en alto riesgo, RR. HH. o datos sensibles añade «consulta con tu asesoría legal».
- Nunca: «abogado/s» referido a nosotros, «equipo legal/jurídico», «certificado oficial», «homologado», «acreditado», «cumplimiento garantizado», «AI Act compliant», «sello», «FUNDAE», «bonificable», «gratis». Nuestro diploma es un «certificado de aprovechamiento propio». Plantillas: «orientativa, adáptala y revísala con tu asesoría».

## Formato de cada archivo `content/blog/<slug>.mdx`
```
---
title: "…"            # ≤ 60 caracteres, keyword al principio si es natural (usa el de keywords.md salvo que mejore)
description: "…"      # 140–160 caracteres exactos, keyword + beneficio
date: "2026-10-18"
category: "<categoría de temas.md>"
tldr: "…"             # 2–3 frases citables: respuesta directa con dato/fecha y matiz
faqs:                 # 4–6, preguntas reales (búsquedas relacionadas / PAA), respuestas de 40–80 palabras autocontenidas
  - q: "…"
    a: "…"
---
```
Sin `author` (se pone «Equipo de …» automáticamente). Usa comillas dobles en el YAML y escapa las comillas internas o usa «».

## Cuerpo
- Longitud según intención (estilo.md): TOFU 1.500–2.200 palabras, MOFU 1.800–2.500, BOFU 1.400–2.000. Valor por encima de longitud: nada de relleno.
- Primer párrafo: respuesta directa (no repitas el tldr literal). Cada `##` abre con un párrafo de 40–60 palabras que responde por sí solo (citable por IA). H2 como preguntas reales cuando encaje.
- ≥ 3 elementos visuales distintos (tabla, Stats/Barras, Flujo/Steps, Checklist, Timeline, Columnas, Callout). Al menos una tabla en comparativas y precios.
- `<CtaInline />` una vez hacia la mitad. `<FormacionCard slug="…" />` una vez en el último tercio con la formación más relacionada. Enlaces internos: pilar de la categoría + 2–3 artículos del cluster + 1 de otro cluster + 1 página de servicio (/diagnostico, /test-ai-act, /recursos, /consultoria, /presupuesto según etapa). Venta honesta: explica cuándo NO hace falta contratar a nadie; luego cómo ayudamos.
- Sección final tipo «Qué hacer ahora / Siguiente paso» con pasos concretos.
- `<Fuentes>` al final con todas las fuentes enlazadas (título — organismo, fecha).
- Español de España, tú, frases claras, sin anglicismos innecesarios, sin muletillas de IA («en el panorama actual», «sumérgete», «en conclusión», «no solo… sino también» repetido, «crucial», «revolucionar»). Sin emojis.

## Al terminar cada artículo
Comprueba: frontmatter válido, description 140–160 car. (cuéntalos con `python3 -c`), sin llaves `{}` ni `<` sueltos en el texto, todos los enlaces internos existen en temas.md o son páginas reales, cada cifra tiene enlace. Después ejecuta `curl -s -o /dev/null -w "%{http_code}" http://localhost:3100/blog/<slug>` (servidor de desarrollo ya arrancado) y debe dar 200; si da 500, mira el error con `curl -s http://localhost:3100/blog/<slug> | grep -o "Error[^<]*" | head` y corrige.

No hagas commits. No toques archivos fuera de `content/blog/<tus slugs>.mdx`.

## Notas finales de la investigación
- Aunque el paquete de datos hable de FUNDAE o bonificaciones: **no lo menciones** en ningún artículo (decisión de negocio pendiente).
- N3 / estadísticas: el 81,3 % de «falta de conocimientos» es sobre empresas que se plantearon usar IA, no sobre el total. Respeta siempre la base de cada porcentaje y no mezcles definiciones (INE vs Eurostat).
- Dell'Acqua et al.: usa la versión publicada en 2026 (+32 %), no el +40 % del working paper.
- No uses predicciones de Gartner ni cifras de McKinsey que no estén verificadas en el paquete.
