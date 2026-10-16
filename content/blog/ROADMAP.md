# Roadmap del blog

Conceptos de artículo para atraer tráfico y convertirlo en leads. **Aún no están escritos.**

**Antes de escribir cada artículo:**

- Validar volumen y dificultad en Semrush (base de datos `es`).
- Revisar qué artículos ocupan ya el top 10 en Google para esa búsqueda.

## Modelo de conversión

- **Hub & spoke:** cada artículo (spoke) enlaza a su página pilar (hub) y a 2–3 artículos de su mismo cluster.
- **Un CTA principal por cluster**, que se repite en dos sitios: a mitad del artículo y al final.
- **Estructura fija de cada artículo:**
  1. TL;DR citable de 2–3 frases (pensado para GEO, es decir, para que lo citen ChatGPT, Gemini o Perplexity).
  2. Índice.
  3. Desarrollo.
  4. CTA intermedio.
  5. Caja «¿Formación para tu equipo?».
  6. FAQ con schema.
  7. Autor experto (E-E-A-T).
  8. Artículos relacionados.
  9. CTA final.
- **Plantilla:** `content/blog/_plantilla.mdx.example`.
  - Para publicar, crear `slug.mdx` con el frontmatter de la plantilla.
  - Un artículo con `draft: true` no se publica.

| Etapa | Intención | CTA |
|---|---|---|
| TOFU (parte alta del embudo) | Informativa | Test AI Act / recurso |
| MOFU (parte media) | Comparativa / cómo hacer | Recurso / formación concreta |
| BOFU (parte final) | Comercial / compra | Diagnóstico / presupuesto |

## A. AI Act y alfabetización

- **Categoría:** `ai-act`
- **Pilar:** `/ai-act`
- **CTA:** test

| # | Concepto | Keyword objetivo (validar) | Etapa |
|---|---|---|---|
| A1 | Qué es la alfabetización en IA y a quién obliga | alfabetización en IA | TOFU |
| A2 | El artículo 4 del AI Act explicado para pymes | artículo 4 AI Act | TOFU |
| A3 | Qué ha cambiado en el AI Act con el Digital Omnibus (2026) | digital omnibus AI Act | TOFU |
| A4 | Sanciones del AI Act: mitos y realidad (por qué 35 M€ no es el art. 4) | sanciones AI Act | TOFU |
| A5 | AESIA: quién supervisa la IA en España y qué puede hacer | AESIA | TOFU |
| A6 | Checklist de cumplimiento del AI Act para empresas | checklist AI Act empresas | MOFU |
| A7 | Cómo documentar la formación en IA como evidencia | evidencias formación IA | MOFU |
| A8 | Sistemas de IA de alto riesgo: ¿usa tu empresa alguno? | IA alto riesgo ejemplos | MOFU |
| A9 | AI Act vs RGPD: qué cambia y qué se solapa | AI Act RGPD | TOFU |
| A10 | Calendario del AI Act: fechas clave para empresas | calendario AI Act | TOFU |

## B. Gobernanza y seguridad

- **Categoría:** `gobernanza`
- **Pilar:** `/recursos`
- **CTA:** plantilla de política de uso de IA

| # | Concepto | Keyword objetivo (validar) | Etapa |
|---|---|---|---|
| B1 | Política de uso de IA en la empresa (con plantilla) | política de uso de IA empresa | MOFU |
| B2 | Shadow AI: el riesgo de que la plantilla use cuentas personales | shadow AI | TOFU |
| B3 | Qué datos no meter nunca en ChatGPT (ni en ninguna IA) | datos ChatGPT confidencialidad | TOFU |
| B4 | ¿Es seguro ChatGPT para empresas? Privacidad por plan | ChatGPT seguro empresas | MOFU |
| B5 | Cómo elegir una herramienta de IA corporativa: criterios | herramienta IA corporativa | MOFU |
| B6 | Prompt injection y otros riesgos de seguridad de los agentes | prompt injection | TOFU |

## C. Herramientas (alta intención comercial)

- **Categoría:** `herramientas`
- **Pilar:** `/formaciones`
- **CTA:** la formación de esa herramienta

| # | Concepto | Keyword objetivo (validar) | Etapa |
|---|---|---|---|
| C1 | ChatGPT vs Copilot vs Claude vs Gemini para empresas | chatgpt vs copilot | MOFU |
| C2 | Cuánto cuesta Microsoft 365 Copilot (2026) | precio copilot microsoft 365 | BOFU |
| C3 | Cuánto cuesta ChatGPT Business / Enterprise (2026) | chatgpt enterprise precio | BOFU |
| C4 | Cuánto cuesta Claude Team / Enterprise (2026) | claude team precio | BOFU |
| C5 | Copilot en Outlook, Excel y Teams: guía práctica | copilot excel | MOFU |
| C6 | Claude Projects para equipos: cómo organizarlos | claude projects | MOFU |
| C7 | GPTs personalizados para empresas: ejemplos | GPTs personalizados | MOFU |
| C8 | NotebookLM para empresas: casos de uso | notebooklm empresas | MOFU |
| C9 | Prompting para empleados: guía con ejemplos por puesto | cómo hacer prompts | TOFU |

## D. IA por departamento

- **Categoría:** `departamentos`
- **Pilar:** `/formaciones/ia-*`
- **CTA:** la formación de ese departamento

| # | Concepto | Keyword objetivo (validar) | Etapa |
|---|---|---|---|
| D1 | IA para marketing: casos y herramientas | IA para marketing | TOFU |
| D2 | GEO: cómo aparecer en las respuestas de ChatGPT | GEO posicionamiento IA | TOFU |
| D3 | IA para ventas y prospección B2B | IA para ventas | TOFU |
| D4 | IA en RR. HH.: qué se puede hacer y qué es alto riesgo | IA recursos humanos | MOFU |
| D5 | IA para despachos y asesorías jurídicas | IA para abogados | MOFU |
| D6 | IA en finanzas y contabilidad | IA contabilidad | TOFU |
| D7 | IA en atención al cliente sin perder el trato humano | IA atención al cliente | TOFU |
| D8 | IA para la dirección: cómo hacer una hoja de ruta | estrategia IA empresa | MOFU |

## E. Agentes y automatización

- **Categoría:** `agentes`
- **Pilar:** `/consultoria`
- **CTA:** diagnóstico

| # | Concepto | Keyword objetivo (validar) | Etapa |
|---|---|---|---|
| E1 | Qué es un agente de IA (explicado sin tecnicismos) | qué es un agente de IA | TOFU |
| E2 | 15 ejemplos de agentes de IA en empresas | agentes IA ejemplos | TOFU |
| E3 | n8n vs Make vs Zapier: cuál elegir | n8n vs make | MOFU |
| E4 | Cómo automatizar un proceso con IA paso a paso | automatizar procesos con IA | MOFU |
| E5 | RAG: un chatbot con los documentos de tu empresa | chatbot documentos empresa | MOFU |
| E6 | Cuánto cuesta implantar un agente de IA | precio agente IA | BOFU |

## F. Compra de formación (BOFU)

- **Categoría:** `formacion-empresas`
- **Pilar:** `/precios`
- **CTA:** diagnóstico o presupuesto

| # | Concepto | Keyword objetivo (validar) | Etapa |
|---|---|---|---|
| F1 | Cómo elegir una empresa de formación en IA: 10 criterios | empresa formación IA | BOFU |
| F2 | Formación en IA in-company vs online: pros y contras | formación IA in company | BOFU |
| F3 | Cuánto cuesta una formación en IA para empresas | precio formación IA empresas | BOFU |
| F4 | Cómo medir el ROI de la formación en IA | ROI formación IA | MOFU |
| F5 | Plan anual de formación en IA para empleados (plantilla) | plan formación IA empleados | MOFU |
| F6 | Formación en IA bonificada con FUNDAE (pendiente: decidir modelo, ver PENDING.md) | formación IA bonificada FUNDAE | BOFU |
| F7 | Formación en IA en Madrid / Barcelona / Valencia… (apoyo a las páginas de ciudad) | formación IA [ciudad] | BOFU |

## G. Conceptos básicos (tráfico informativo + GEO)

- **Categoría:** `conceptos`
- **Pilar:** `/formaciones/alfabetizacion-ia`
- **CTA:** test

| # | Concepto | Keyword objetivo (validar) | Etapa |
|---|---|---|---|
| G1 | Qué es un LLM y cómo funciona | qué es un LLM | TOFU |
| G2 | Alucinaciones de la IA: por qué ocurren y cómo evitarlas | alucinaciones IA | TOFU |
| G3 | Tokens y ventana de contexto, explicado fácil | qué son los tokens IA | TOFU |
| G4 | IA generativa vs IA predictiva | IA generativa vs predictiva | TOFU |
| G5 | Glosario de IA para empresas (página perenne) | glosario inteligencia artificial | TOFU |

## Prioridad sugerida (primeros 12)

1. **Pilares de ventaja competitiva** (mensaje honesto frente al alarmismo de la competencia): A1, A2, A4, A6, B1.
2. **Intención comercial:** C1, F3, F1, E1.
3. **Volumen informativo:** G1, G2, D1.
