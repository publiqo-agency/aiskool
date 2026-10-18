# Validación de keywords de los 50 artículos (España)

Fecha de la investigación: 18/10/2026. Lista de origen: `docs/blog-research/temas.md` (slugs sin cambios).

## Método y fuentes

- **Semrush (MCP), base de datos `es`.** Informes `phrase_these` (volumen, CPC, competencia, intención, KD en lote), `phrase_fullsearch` (variantes por concordancia amplia: "ai act", "ley inteligencia artificial", "reglamento ia", "aesia", "formacion ia", "chatgpt empresa", "agentes ia", "ia empresas", "curso inteligencia artificial", "alfabetizacion") y `phrase_kdi` (KD de las keywords principales). Han funcionado todos; consumo aproximado: 11.000 unidades de API.
- **Top 10 de Google:** WebSearch, una o dos búsquedas por tema. La herramienta avisa de que sus resultados no están localizados en España ("US-only"): las páginas que salen son casi todas españolas o en español, pero **el orden es aproximado** y se cuelan resultados de Latinoamérica. Antes de redactar cada pieza conviene revisar la SERP real desde España (incógnito o Semrush `phrase_organic`; para keywords de menos de 50 búsquedas Semrush no devuelve SERP).
- **Cómo leer las cifras:**
  - **Volumen:** búsquedas mensuales medias en España según Semrush.
  - **CPC:** en dólares, tal como lo da Semrush.
  - **KD:** dificultad de 0 a 100.
  - **"s/d":** Semrush no tiene el dato. Para keywords de volumen bajo, Semrush devuelve KD 0 sin intención; lo trato como s/d.
  - **"0\*":** Semrush sí asigna intención pero devuelve KD 0. Con volúmenes de 50 o menos no es una señal fiable de facilidad.
  - **Intención (códigos de Semrush):** informativa, comercial, navegacional o transaccional. Cuando Semrush no la da, pongo "s/d" y entre paréntesis la intención que se ve en la SERP.
- **Tildes:** Semrush trata como keywords distintas la versión con tilde y la versión sin tilde. Cuando la variante sin tilde tiene más volumen, lo indico (por ejemplo, "que es un agente de ia" = 590 frente a "qué es un agente de IA" = 140).
- **Títulos:** todos tienen 60 caracteres o menos (contados), español de España y keyword al principio salvo dos casos justificados.

## Resumen de la validación

| ID | Keyword inicial | Keyword final | Vol. | KD | Cambio |
|---|---|---|---|---|---|
| A1 | alfabetización en IA | alfabetización en IA | 40 | s/d | se mantiene |
| A2 | artículo 4 AI Act | AI Act pymes | 50 | 0\* | la inicial no tiene volumen |
| A3 | digital omnibus AI Act | digital omnibus | 320 | 23 | se amplía a la forma corta |
| A4 | sanciones AI Act | multas AI Act | 40 | 5 | "sanciones AI Act" sin dato |
| A5 | AESIA | AESIA | 1.900 | 61 | se mantiene |
| A6 | checklist AI Act empresas | cumplimiento AI Act empresas | 40 | 10 | la inicial no tiene volumen |
| A7 | evidencias formación IA | evidencias formación IA | s/d | s/d | sin alternativa con datos |
| A8 | IA alto riesgo ejemplos | sistemas de alto riesgo AI Act ejemplos | 40 | 21 | cambia |
| A9 | AI Act RGPD | diferencia RGPD y AI Act | 40 | 1 | cambia |
| A10 | calendario AI Act | fechas clave AI Act | 50 | 22 | cambia |
| B1 | política de uso de IA empresa | política de uso de IA | 20 | s/d | se acorta |
| B2 | shadow AI | shadow AI | 170 | 28 | se mantiene |
| B3 | datos ChatGPT confidencialidad | ChatGPT datos personales | 20 | s/d | cambia |
| B4 | ChatGPT seguro empresas | ChatGPT es seguro | 110 | 17 | cambia |
| B5 | herramienta IA corporativa | herramientas de inteligencia artificial para empresas | 50 | 34 | cambia |
| B6 | prompt injection | prompt injection | 590 | 48 | se mantiene |
| C1 | chatgpt vs copilot | gemini vs chatgpt | 1.300 | 25 | cluster "X vs Y" |
| C2 | precio copilot microsoft 365 | microsoft 365 copilot precio | 110 | 42 | cambia el orden |
| C3 | chatgpt enterprise precio | chatgpt business precio | 170 | 33 | cambia |
| C4 | claude team precio | claude precio | 1.000 | 25 | cambia |
| C5 | copilot excel | copilot excel | 320 | 31 | se mantiene |
| C7 | GPTs personalizados | GPTs personalizados | 90 | 25 | se mantiene |
| C8 | notebooklm empresas | notebooklm que es | 1.300 | 53 | cambia |
| C9 | cómo hacer prompts | prompts para chatgpt | 720 | 33 | cambia |
| D1 | IA para marketing | IA para marketing | 210 | 48 | se mantiene |
| D2 | GEO posicionamiento IA | geo seo | 480 | 25 | cambia |
| D3 | IA para ventas | inteligencia artificial para ventas | 140 | 49 | cambia |
| D4 | IA recursos humanos | IA en recursos humanos | 210 | 52 | cambia |
| D5 | IA para abogados | IA para abogados | 320 | 59 | se mantiene |
| D6 | IA contabilidad | IA contabilidad | 390 | 48 | se mantiene |
| D7 | IA atención al cliente | IA atención al cliente | 40 | s/d | se mantiene |
| D8 | estrategia IA empresa | estrategia IA | 30 | s/d | se acorta |
| E1 | qué es un agente de IA | que es un agente de ia | 590 | 62 | se mantiene |
| E2 | agentes IA ejemplos | agentes IA para empresas | 170 | 30 | cambia |
| E3 | n8n vs make | n8n vs make | 140 | 30 | se mantiene |
| E4 | automatizar procesos con IA | automatización de procesos con IA | 320 | 48 | cambia |
| E5 | chatbot documentos empresa | RAG IA | 590 | 58 | cambia |
| E6 | precio agente IA | cuánto cuesta un agente de IA | 20 | s/d | cambia |
| F1 | empresa formación IA | empresa formación IA | s/d | s/d | se mantiene |
| F2 | formación IA in company | formación IA in company | 30 | s/d | se mantiene |
| F3 | precio formación IA empresas | cuánto cuesta un curso de IA | 30 | s/d | cambia |
| F4 | ROI formación IA | ROI formación | 20 | s/d | cambia |
| F5 | plan formación IA empleados | plan de formación anual | 30 | s/d | cambia |
| N1 | formación IA empresas | formación IA empresas | 90 | 15 | se mantiene |
| N2 | implantar IA empresa | cómo implementar IA en una empresa | 20 | s/d | cambia |
| N3 | uso IA empresas España | IA en las empresas | 50 | 46 | cambia |
| G1 | qué es un LLM | qué es un LLM | 1.600 | 65 | se mantiene |
| G2 | alucinaciones IA | alucinaciones IA | 170 | 49 | se mantiene |
| G3 | qué son los tokens IA | qué son los tokens en IA | 170 | 28 | cambia |
| G5 | glosario inteligencia artificial | glosario inteligencia artificial | 20 | s/d | se mantiene |

Notas sobre el resumen:

- **N1:** el volumen suma dos formas: 90 sin tilde y 50 con tilde ("formación IA empresas").
- **C1:** el cluster "X vs Y" suma más de 4.000 búsquedas al mes entre todas sus variantes.

---

## A · AI Act (pilar /ai-act)

### A1 · alfabetizacion-ia-que-es
| Campo | Valor |
|---|---|
| Keyword principal | alfabetización en IA |
| Volumen ES | 40 |
| KD | s/d |
| Intención | s/d (SERP: informativa) |
| CPC | 2,75 |
| Secundarias | ai literacy (140, KD 72) · alfabetización IA (30) · alfabetización en inteligencia artificial (20) · ai literacy ai act (20) · formación obligatoria IA (s/d) |
| Título SEO | Alfabetización en IA: qué es y a quién obliga el AI Act |
| Top 10 | Guías de blogs comerciales y despachos: webreactiva, legaltoday (opinión), protecciondatos-lopd, cuatrecasas (PDF), javadex, g-talent, upliora. |
| Ángulo diferencial | El top se contradice sobre si el Digital Omnibus cambió "garantizar" por "fomentar" y casi nadie cita el texto oficial. Proponemos citar literalmente el art. 4 vigente con fecha de consulta y dar una tabla de "nivel suficiente" por puesto (dirección, mandos, usuarios, técnicos). También responder a las preguntas de la SERP: sin umbral de plantilla, no exige certificado, sí afecta a quien solo usa ChatGPT o Copilot, y se aplica a subcontratas. |
| Formato | Guía explicativa con FAQ (FAQPage) y tabla por rol. |

### A2 · articulo-4-ai-act-pymes
| Campo | Valor |
|---|---|
| Keyword principal | AI Act pymes |
| Volumen ES | 50 |
| KD | 0\* |
| Intención | informativa |
| CPC | 0 |
| Secundarias | ai act obligaciones pymes (50, KD 10) · ai act pymes obligaciones (40, KD 3) · reglamento ia pyme (40, KD 12) · ai act a quién aplica (40, KD 36) · ai act article 4 (20) · artículo 4 AI Act (s/d) |
| Título SEO | AI Act para pymes: el artículo 4 explicado sin jerga |
| Top 10 | Guías para pymes de javadex, teamsystem, knowlee, bankinter y protecciondatos-lopd. Noticia de moncloa.com y documento del Parlamento Europeo. |
| Ángulo diferencial | Faltan casos de pymes reales de 5 a 50 empleados y una plantilla de registro mínimo. Proponemos tres casos tipo (despacho de 8 personas, industrial de 40, agencia de 15) con lo que tiene que hacer cada uno. Responder a "¿soy responsable del despliegue si solo uso ChatGPT?". |
| Formato | Guía práctica por casos más un descargable de una página. |

### A3 · digital-omnibus-ai-act-cambios
| Campo | Valor |
|---|---|
| Keyword principal | digital omnibus |
| Volumen ES | 320 |
| KD | 23 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | omnibus digital (110, KD 13) · omnibus ia (40) · reglamento omnibus ia (30) · digital omnibus AI Act (20) · digital omnibus ia (10) |
| Título SEO | Digital Omnibus: qué cambia en el AI Act para tu empresa |
| Top 10 | Notas de despachos (Osborne Clarke, ECIJA, Linklaters), el ICAM, legaltoday, ecosistemastartup y opsio. |
| Ángulo diferencial | El Omnibus también toca el RGPD y otras normas de datos. Hay que dejar claro en la entradilla que la pieza trata solo la parte de IA, para no perder a quien busca lo demás, o dedicar un párrafo breve a lo demás. Faltan una tabla de antes y después por obligación y la lectura para la empresa usuaria (responsable del despliegue). Las fuentes secundarias no coinciden en el estado ni en el número del reglamento: hay que verificarlo en el DOUE y poner la fecha de revisión. |
| Formato | Explicativo con tabla comparativa de antes y después. |

### A4 · sanciones-ai-act-mitos-realidad
| Campo | Valor |
|---|---|
| Keyword principal | multas AI Act |
| Volumen ES | 40 |
| KD | 5 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | sanciones reglamento IA (30) · sanciones ley inteligencia artificial (10) · ley inteligencia artificial España (70, KD 55) · sanciones AI Act (s/d) |
| Título SEO | Multas del AI Act: qué es mito y qué es realidad |
| Top 10 | Noticias de Xataka, moncloa.com, merca2, enter.co y ecosistemastartup con el titular de "hasta 35 M€". Tribuna de ineaf y guía de upliora ("quién puede multar"). |
| Ángulo diferencial | Separar lo que dice el reglamento europeo de lo que dice el proyecto de ley español, que sigue en tramitación. Tabla de mito y realidad: "ya me pueden multar por no formar", "35 M€ para una pyme", "la AESIA ya sanciona". Indicar el órgano competente y la fecha de cada cosa. |
| Formato | Lista de mitos (6-8) con fuente oficial en cada uno. |

### A5 · aesia-supervision-ia-espana
| Campo | Valor |
|---|---|
| Keyword principal | AESIA |
| Volumen ES | 1.900 |
| KD | 61 |
| Intención | navegacional |
| CPC | 2,34 |
| Secundarias | agencia española de supervisión de la inteligencia artificial (260, KD 57) · aesia coruña (170, KD 37) · guías aesia (90, KD 27) · aesia guías (70) · aesia sede (40) · aesia que es (10) |
| Título SEO | AESIA: qué es, qué hace y cuándo puede sancionar |
| Top 10 | Página oficial de espanadigital.gob.es, nota de Hacienda (PDF), PwC (2023), un trabajo académico de la UCM, AlgorithmWatch, elderecho y una wiki. Contenido de 2023 en general desfasado. |
| Ángulo diferencial | La intención principal es navegacional: no vamos a quitarle el primer puesto a la web oficial, pero sí podemos entrar en el top 5 con la única pieza actualizada a 2026. Debe recoger competencias reales, qué guías ha publicado (son 160 búsquedas al mes entre las dos formas de "guías aesia"), si puede sancionar ya, sede en A Coruña y qué significa para una empresa usuaria. |
| Formato | Ficha explicativa y FAQ, con un índice de guías publicadas que se actualice. |

### A6 · checklist-ai-act-empresas
| Campo | Valor |
|---|---|
| Keyword principal | cumplimiento AI Act empresas |
| Volumen ES | 40 |
| KD | 10 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | ai act a quién aplica (40, KD 36) · cómo cumplir la ley de inteligencia artificial (20) · adaptar mi empresa a la ley de inteligencia artificial (20) · ley inteligencia artificial España (70, KD 55) · checklist AI Act (s/d) |
| Título SEO | Cumplimiento del AI Act en empresas: checklist 2026 |
| Top 10 | Checklists de opsio, knowlee, IEBS (descargable), javadex, protecciondatos-lopd, resemble y seers. |
| Ángulo diferencial | Casi todas están escritas para el proveedor de IA. La nuestra, para la empresa usuaria, ordenada por las fases del top (rol, inventario, clasificación, obligaciones, formación) pero con las fechas posteriores al Omnibus. Incluir una plantilla descargable de inventario de herramientas, que ninguna ofrece en formato editable. |
| Formato | Checklist interactiva o descargable (HowTo). |

### A7 · evidencias-formacion-ia
| Campo | Valor |
|---|---|
| Keyword principal | evidencias formación IA |
| Volumen ES | s/d |
| KD | s/d |
| Intención | s/d (SERP: informativa) |
| CPC | s/d |
| Secundarias | fundae inteligencia artificial (40, KD 8) · certificado inteligencia artificial (20) · ai literacy ai act (20) · certificado formación IA (s/d) · registro formación IA (s/d) |
| Título SEO | Evidencias de formación en IA: cómo documentarla |
| Top 10 | Ninguna pieza trata la evidencia como tal. Aparecen guías generales de la obligación de formar: El Independiente, grupo2000 (un curso), Cuatrecasas, Sage, protecciondatos-lopd y upliora. |
| Ángulo diferencial | Es el hueco más claro del bloque. Explicar qué documentar (registro por persona, contenidos por rol, asistencia, evaluación, actualización), dejar claro que el certificado no es obligatorio, cómo encaja con FUNDAE y el plan de formación, y ofrecer una plantilla. Volumen sin datos: es una pieza de conversión (MOFU) y de enlaces internos, no de tráfico. |
| Formato | Guía práctica con plantilla descargable (registro de formación). |

### A8 · ia-alto-riesgo-ejemplos
| Campo | Valor |
|---|---|
| Keyword principal | sistemas de alto riesgo AI Act ejemplos |
| Volumen ES | 40 |
| KD | 21 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | ai act alto riesgo (40, KD 30) · ai act annex 3 (40, KD 42) · annex iii eu ai act (40, KD 43) · IA de alto riesgo (30) · sistemas de IA de alto riesgo (20) |
| Título SEO | Sistemas de alto riesgo del AI Act: ejemplos en empresas |
| Top 10 | Páginas oficiales del AI Act Service Desk (art. 6 y Anexo III) y directrices de la Comisión. Guía de protecciondatos-lopd y glosario de knowlee. |
| Ángulo diferencial | Dominan los textos oficiales sin ejemplos aterrizados, y algún blog pone ejemplos erróneos (la detección de fraude bancario está excluida). Proponemos una tabla del Anexo III traducida a software real ("¿tu ATS, tu scoring de crédito o tu control de acceso biométrico?"), un test de autoevaluación de 5 preguntas y las fechas nuevas tras el Omnibus. |
| Formato | Lista de ejemplos por área del Anexo III más un test de autoevaluación. |

### A9 · ai-act-vs-rgpd
| Campo | Valor |
|---|---|
| Keyword principal | diferencia RGPD y AI Act |
| Volumen ES | 40 |
| KD | 1 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | ai act y protección de datos (40, KD 9) · RGPD inteligencia artificial (20) · IA y protección de datos (20) · ai act gdpr (20) |
| Título SEO | Diferencia entre RGPD y AI Act: qué cambia y qué se solapa |
| Top 10 | aiacto.eu, con varias comparativas en español, y páginas en francés (JDN, Centre Inffo). Casi no hay contenido español nativo. |
| Ángulo diferencial | Competencia muy baja. Proponemos una tabla comparativa con el caso español: AEPD frente a AESIA, EIPD frente a evaluación de impacto en derechos fundamentales, y qué pasa si se usa ChatGPT con datos personales (enlazar con B3). |
| Formato | Comparativa con tabla y un caso práctico. |

### A10 · calendario-ai-act-fechas
| Campo | Valor |
|---|---|
| Keyword principal | fechas clave AI Act |
| Volumen ES | 50 |
| KD | 22 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | entrada en vigor AI Act (30) · ai act 2026 (20) · ai act timeline (20) · entrada en vigor reglamento ia (20) · ai act agosto 2026 (10) |
| Título SEO | Fechas clave del AI Act: calendario actualizado 2026 |
| Top 10 | Línea de tiempo de artificialintelligenceact.eu/es (actualizada en 2024), Reed Smith (anterior al Omnibus), opsio y Economist & Jurist. Páginas en italiano y neerlandés. |
| Ángulo diferencial | No hay ningún calendario en español actualizado tras el Omnibus. Proponemos una línea de tiempo con la columna "qué debe hacer tu empresa en esta fecha" y una nota de verificación con la fecha de consulta del DOUE. Es una pieza "perenne" que hay que actualizar; indicar la fecha de modificación de forma visible. |
| Formato | Línea de tiempo visual más tabla. |

---

## B · Gobernanza (pilar /recursos)

### B1 · politica-uso-ia-empresa
| Campo | Valor |
|---|---|
| Keyword principal | política de uso de IA |
| Volumen ES | 20 |
| KD | s/d |
| Intención | s/d (SERP: informativa y de plantilla) |
| CPC | 0 |
| Secundarias | política de inteligencia artificial (20) · uso responsable IA (20) · política de IA (10) · plantilla política IA (s/d) · reglamento de uso de IA (s/d, visto en la SERP) |
| Título SEO | Política de uso de IA en la empresa: plantilla editable |
| Top 10 | Guías y plantillas de SaaS (opsio, wavect, Deel, Manatal), g-talent, una noticia de Emprendedores y un estudio de Capterra. |
| Ángulo diferencial | Las plantillas que hay son genéricas y traducidas. La nuestra: en español de España, editable, ligada a los arts. 4, 5 y 50 del AI Act y al RGPD, con una cláusula de información al comité de empresa y una lista de herramientas aprobadas por nivel de dato (semáforo). |
| Formato | Plantilla descargable (Word o Docs) más una guía de cómo adaptarla. |

### B2 · shadow-ai-riesgos
| Campo | Valor |
|---|---|
| Keyword principal | shadow AI |
| Volumen ES | 170 |
| KD | 28 |
| Intención | informativa |
| CPC | 4,89 |
| Secundarias | shadow IT (320, KD 31) · IA en la sombra (50, KD 11) · shadow AI riesgos (s/d) · shadow AI ejemplos (s/d) |
| Título SEO | Shadow AI: qué es y cómo frenarlo sin prohibir la IA |
| Top 10 | Proveedores de seguridad (Panda), Economist & Jurist, Cyberclick, Escudo Digital, opsio y KeepCoding. |
| Ángulo diferencial | El top explica qué es y sus riesgos desde la seguridad. Falta el plan para pymes: detectar sin vigilar a la plantilla (límites del RGPD y del Estatuto de los Trabajadores), ofrecer una alternativa corporativa y formar, conectándolo con el art. 4. Usar "shadow IT" solo como término de apoyo: tiene otra intención. |
| Formato | Guía con un plan de 30 días. |

### B3 · que-datos-no-meter-en-chatgpt
| Campo | Valor |
|---|---|
| Keyword principal | ChatGPT datos personales |
| Volumen ES | 20 |
| KD | s/d |
| Intención | s/d (SERP: informativa) |
| CPC | 0 |
| Secundarias | ChatGPT confidencialidad (20) · datos ChatGPT (20) · riesgos de usar ChatGPT (20) · ChatGPT privacidad (10) · qué no compartir con ChatGPT (s/d) |
| Título SEO | ChatGPT y datos personales: qué no compartir nunca |
| Top 10 | Listas de consumo del tipo "5 datos que nunca debes compartir" (TechRadar MX, Euronews, Semana, Blu Radio). Mayoritariamente medios de Latinoamérica. |
| Ángulo diferencial | Darle el giro de empresa: datos de clientes, contratos, código, salud de empleados y categorías especiales del RGPD. Tabla de semáforo por tipo de dato y por plan (Free, Plus, Business) y un mini procedimiento de anonimización antes de pegar. |
| Formato | Lista (8-10 tipos de dato) más una tabla de semáforo imprimible. |

### B4 · chatgpt-seguro-empresas-privacidad
| Campo | Valor |
|---|---|
| Keyword principal | ChatGPT es seguro |
| Volumen ES | 110 |
| KD | 17 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | ChatGPT empresas (110, KD 35, CPC 13,39) · ChatGPT para empresas (110, KD 40, CPC 17,24) · riesgos de usar ChatGPT en la empresa (50) · es seguro ChatGPT (30) · ChatGPT seguridad (20) |
| Título SEO | ¿Es seguro ChatGPT para empresas? Privacidad por plan |
| Top 10 | Noticias de 2023-2024 (wwwhatsnew, Forbes MX, La Gaceta) y blogs de seguridad (SentinelOne, Mailjet). Estudio de Cisco citado en infonegocios. |
| Ángulo diferencial | Contenido viejo. Proponemos una tabla actualizada a 2026 por plan (Free, Plus, Business, Enterprise) con entrenamiento con tus datos, retención, DPA, residencia de datos en la UE y SSO, verificada en la documentación de OpenAI con fecha. Añadir la lectura desde el RGPD español. "ChatGPT para empresas" tiene un CPC alto: interesa enlazar a /formaciones. |
| Formato | Comparativa por plan con tabla y veredicto por tipo de empresa. |

### B5 · elegir-herramienta-ia-corporativa
| Campo | Valor |
|---|---|
| Keyword principal | herramientas de inteligencia artificial para empresas |
| Volumen ES | 50 |
| KD | 34 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | IA generativa empresas (50, KD 14) · IA corporativa (20) · mejor IA para empresas (20) · herramientas de IA (590, KD 67; solo de apoyo) · IA para empresas (720, KD 44; ver canibalización) |
| Título SEO | Herramientas de IA para empresas: cómo elegir bien |
| Top 10 | Listados de "mejores herramientas" (Capterra 2023, eesel, unite.ai, Castmagic, Coderhouse, techsy), muchos traducidos o desfasados. |
| Ángulo diferencial | En lugar de otra lista, un marco de decisión: suite que ya usas (M365 o Workspace), DPA, datos en la UE, SSO, coste total y obligaciones del AI Act. Con una matriz de evaluación descargable. Enlazar a C1 para la comparativa de modelos. |
| Formato | Guía con checklist de compra y matriz de puntuación. |

### B6 · prompt-injection-riesgos-agentes
| Campo | Valor |
|---|---|
| Keyword principal | prompt injection |
| Volumen ES | 590 |
| KD | 48 |
| Intención | informativa |
| CPC | 1,53 |
| Secundarias | ciberseguridad IA (90, KD 58) · riesgos de la inteligencia artificial (70, KD 49) · seguridad IA (50, KD 40) · prompt injection qué es (30) · inyección de prompts (20) |
| Título SEO | Prompt injection: qué es y cómo proteger tus agentes |
| Top 10 | Papers (arXiv), guías técnicas de seguridad (SentinelOne, CSA), Rework, Sigma, VerifyWise y una noticia de Decrypt sobre el agente de ChatGPT. |
| Ángulo diferencial | El top es técnico. Proponemos una versión para negocio con ejemplos de empresa (un correo o un PDF con texto oculto, un navegador agéntico que compra), una checklist de mitigación para quien aprueba un agente y la referencia a OWASP LLM01. |
| Formato | Explicativo con ejemplos ilustrados y checklist. |

---

## C · Herramientas (pilar /formaciones)

### C1 · chatgpt-vs-copilot-vs-claude-vs-gemini
| Campo | Valor |
|---|---|
| Keyword principal | gemini vs chatgpt |
| Volumen ES | 1.300 |
| KD | 25 |
| Intención | comercial |
| CPC | 0,31 |
| Secundarias | claude vs chatgpt (1.000, KD 12) · chatgpt vs gemini (720, KD 38) · copilot vs chatgpt (480, KD 22) · chatgpt vs copilot (320, KD 23) · gemini vs claude (170, KD 22) · comparativa IA (110, KD 28) |
| Título SEO | ChatGPT vs Gemini vs Claude vs Copilot para empresas |
| Top 10 | Comparativas en inglés (intuitionlabs, nasstar, 200ok), gmelius (en español) y páginas de Latinoamérica de 2024-2025. |
| Ángulo diferencial | Es el cluster con más volumen de la lista. Proponemos la única comparativa en español de España con precios en euros (que enlacen a C2-C4), privacidad y residencia en la UE, encaje según la suite que ya se usa y los mejores casos por departamento, más una tabla de decisión. Apuntar con H2 a cada pareja ("ChatGPT vs Claude", etc.). "Cuál es la mejor IA" (1.900, KD 52) es de consumo: no perseguirla. |
| Formato | Comparativa con tabla maestra y un H2 por pareja. |

### C2 · precio-microsoft-365-copilot
| Campo | Valor |
|---|---|
| Keyword principal | Microsoft 365 Copilot precio |
| Volumen ES | 110 |
| KD | 42 |
| Intención | navegacional y transaccional |
| CPC | 0,40 |
| Secundarias | copilot precio (320, KD 49) · precio copilot (260, KD 47) · copilot pro precio (140, KD 49) · microsoft copilot precio (70, KD 47) · copilot 365 precio (30) · Microsoft 365 Copilot (4.400, KD 58; marca) |
| Título SEO | Microsoft 365 Copilot: precio en España (2026) |
| Top 10 | Guías de precios de javadex, geotoolbox, nordflux y cirasync con precios en euros sin IVA de 2026. Noticias de 2023 que aún citan los 30 $/€ de lanzamiento. |
| Ángulo diferencial | Coste total por usuario (licencia base más Copilot más IVA) con ejemplos para 10 y 50 usuarios. Diferencia clara entre Copilot Chat (gratis), Copilot Pro (consumo), M365 Copilot y Copilot Studio. Precios verificados en la web oficial de Microsoft con fecha. |
| Formato | Página de precios con tabla y calculadora sencilla. |

### C3 · precio-chatgpt-business-enterprise
| Campo | Valor |
|---|---|
| Keyword principal | ChatGPT Business precio |
| Volumen ES | 170 |
| KD | 33 |
| Intención | transaccional |
| CPC | 7,82 |
| Secundarias | ChatGPT Business (1.000, KD 42) · ChatGPT Team (390, KD 25; nombre anterior) · ChatGPT Enterprise (210, KD 34) · ChatGPT empresas precio (40, KD 30) · ChatGPT Team precio empresa (40, KD 34) · ChatGPT Enterprise precio (20, CPC 21,66) |
| Título SEO | ChatGPT Business: precio y diferencias con Enterprise |
| Top 10 | Página oficial de precios de OpenAI (en dólares) seguida de guías de eesel y geotoolbox y de una guía francesa. Hay conversiones a euros sin aclarar el IVA. |
| Ángulo diferencial | El precio final en euros con IVA español, el mínimo de usuarios, qué incluye Business frente a Enterprise y un cálculo del coste total. Explicar que "Team" es el nombre anterior de Business: el término sigue teniendo 390 búsquedas. Revisar los precios en openai.com el día de publicar. |
| Formato | Página de precios con tabla y FAQ. |

### C4 · precio-claude-team-enterprise
| Campo | Valor |
|---|---|
| Keyword principal | Claude precio |
| Volumen ES | 1.000 |
| KD | 25 |
| Intención | navegacional y transaccional |
| CPC | 0,74 |
| Secundarias | Claude Team (390, KD 24) · Claude Enterprise (320, KD 21) · Claude Pro precio (210, KD 22) · Claude para empresas (110, KD 8) · Claude Business (70, KD 8) · Claude Max precio (40) |
| Título SEO | Claude precio para empresas: Team y Enterprise (2026) |
| Top 10 | Blogs de terceros (finom, javadex, tldv, ssdnodes, diegoceredi) con cifras contradictorias. Anthropic no aparece en el top. |
| Ángulo diferencial | La keyword amplia "Claude precio" tiene diez veces más volumen que "Claude Team precio". Proponemos cubrir todos los planes en una tabla, con Team y Enterprise como eje, verificada contra la página oficial de Anthropic, en euros con IVA y con la fecha de revisión. Claude para empresas (KD 8) es una victoria fácil como secundaria. |
| Formato | Página de precios con tabla por plan. |

### C5 · copilot-outlook-excel-teams-guia
| Campo | Valor |
|---|---|
| Keyword principal | copilot excel |
| Volumen ES | 320 |
| KD | 31 |
| Intención | informativa |
| CPC | 0,48 |
| Secundarias | copilot en excel (260, KD 37) · cómo usar copilot (210, KD 30) · copilot en outlook (140, KD 36) · copilot word (140, KD 43) · copilot en teams (90, KD 48) · copilot outlook (110, KD 37) |
| Título SEO | Copilot en Excel, Outlook y Teams: guía práctica |
| Top 10 | Tutoriales de una sola aplicación, casi siempre Excel (DataCamp, MundoBytes, Digital Trends), soporte de Microsoft y guías de academias (g-talent, Cegos). |
| Ángulo diferencial | Flujos entre las tres aplicaciones: de la reunión en Teams al correo de seguimiento en Outlook y a la tabla en Excel. Prompts por puesto y qué licencia hace falta para cada función (Copilot Chat o M365 Copilot). Una sección "Copilot no aparece", que sale en las variantes. |
| Formato | Tutorial paso a paso con capturas, una sección por aplicación. |

### C7 · gpts-personalizados-empresas-ejemplos
| Campo | Valor |
|---|---|
| Keyword principal | GPTs personalizados |
| Volumen ES | 90 |
| KD | 25 |
| Intención | informativa |
| CPC | 0,43 |
| Secundarias | GPT personalizado (110, KD 25) · cómo crear un GPT (110, KD 20) · crear GPT (70, KD 26) · crear GPT personalizado (50, KD 31) · GPTs (1.300, KD 35; amplia) |
| Título SEO | GPTs personalizados: ejemplos para empresas |
| Top 10 | Tutoriales del tipo "cómo crear un GPT en X pasos" (Guru, Leadsales, eesel en portugués, CESTE) con ejemplos genéricos. |
| Ángulo diferencial | 10-12 ejemplos por departamento con las instrucciones listas para copiar. Explicar cuándo conviene un GPT, un Project o un agente, cómo se comparte y gobierna en Business o Enterprise y qué límites de privacidad tiene. |
| Formato | Lista de ejemplos con bloque de instrucciones copiable más un mini tutorial de creación. |

### C8 · notebooklm-empresas-casos-de-uso
| Campo | Valor |
|---|---|
| Keyword principal | NotebookLM qué es |
| Volumen ES | 1.300 |
| KD | 53 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | cómo usar NotebookLM (390, KD 42) · NotebookLM para qué sirve (140, KD 36) · NotebookLM tutorial (40, KD 35) · NotebookLM empresa (10) · NotebookLM (450.000, KD 70; marca, navegacional) |
| Título SEO | NotebookLM: qué es y casos de uso en la empresa |
| Top 10 | Página oficial de Google Workspace, blogs de casos de uso (diegoceredi, un Substack), una página en portugués y una noticia de wwwhatsnew. |
| Ángulo diferencial | Casos por función (onboarding, RR. HH., ventas, contratos). Diferencias de privacidad entre la versión gratuita y la incluida en Workspace o Gemini Enterprise, qué datos no subir y cuándo NotebookLM basta frente a un RAG propio (enlazar con E5). |
| Formato | Guía con casos de uso y una tabla gratis frente a Workspace. |

### C9 · como-hacer-prompts-guia-empleados
| Campo | Valor |
|---|---|
| Keyword principal | prompts para ChatGPT |
| Volumen ES | 720 |
| KD | 33 |
| Intención | informativa |
| CPC | 0,40 |
| Secundarias | prompts ChatGPT (880, KD 31) · ingeniería de prompts (170, KD 37) · cómo hacer prompts para ChatGPT (140, KD 17) · cómo hacer un prompt (110, KD 38) · ejemplos de prompts (90, KD 51) · estructura de un prompt (50, KD 26) |
| Título SEO | Prompts para ChatGPT: guía con ejemplos por puesto |
| Top 10 | Listas de prompts genéricos con la fórmula de rol, tarea y formato (KeepCoding, DonWeb, AICAD, PcComponentes, QuillBot). Mucho contenido con voseo de Latinoamérica. |
| Ángulo diferencial | Plantillas por puesto (administración, RR. HH., ventas, legal, dirección) en español de España, con ejemplos de antes y después, qué datos no incluir (enlace a B3) y una nota de adaptación para Copilot y Claude. "Cómo hacer prompts" (la keyword inicial) tiene 10 búsquedas: descartada como principal. |
| Formato | Guía con fórmula más una biblioteca de prompts por puesto (bloques copiables). |

---

## D · Departamentos (pilares /formaciones/ia-*)

### D1 · ia-para-marketing
| Campo | Valor |
|---|---|
| Keyword principal | IA para marketing |
| Volumen ES | 210 |
| KD | 48 |
| Intención | informativa |
| CPC | 3,70 |
| Secundarias | IA marketing (320, KD 44) · IA en marketing (210, KD 43) · inteligencia artificial marketing (210, KD 44) · IA marketing digital (140, KD 41) · herramientas de IA para marketing (70, KD 47) · IA para redes sociales (210, KD 11) |
| Título SEO | IA para marketing: casos reales y herramientas |
| Top 10 | Listas de herramientas de fabricantes y escuelas: ClickUp, Lark, IEBS, Salesforce, Metricool y Cyberclick (ebook de más de 60 herramientas). |
| Ángulo diferencial | Una visión neutral, sin vender herramienta propia. Casos por tamaño de equipo con el flujo de trabajo, el tiempo ahorrado medido y los límites legales: etiquetado de contenido generado (art. 50 del AI Act), derechos de imagen y datos de clientes. |
| Formato | Guía de casos de uso con una tabla de herramientas por tarea. |

### D2 · geo-aparecer-en-chatgpt
| Campo | Valor |
|---|---|
| Keyword principal | GEO SEO |
| Volumen ES | 480 |
| KD | 25 |
| Intención | informativa |
| CPC | 1,82 |
| Secundarias | SEO para IA (480, KD 47) · generative engine optimization (390, KD 53) · posicionamiento en IA (140, KD 15) · posicionamiento en ChatGPT (90, KD 8) · SEO en ChatGPT (70, KD 9) · cómo hacer que mi empresa aparezca en ChatGPT (50) |
| Título SEO | GEO SEO: cómo aparecer en las respuestas de ChatGPT |
| Top 10 | Guías conceptuales del tipo "del SEO al GEO" (ecosistemastartup, studiomeyer), landing de agencia (Cyberclick), opinión en Expansión MX y un PDF de PromPerú. |
| Ángulo diferencial | Un método medible: prompts de prueba, cómo comprobar si la marca aparece y cómo hacer el seguimiento. Una checklist técnica (robots para los bots de IA, schema, llms.txt, que la propia web ya implementa) y un caso B2B español. Sin cifras sin fuente, a diferencia del top. Las variantes de "posicionamiento en ChatGPT/IA" tienen KD de 8 a 15 y conviene cubrirlas en H2. |
| Formato | Guía práctica con checklist y plantilla de medición. |

### D3 · ia-para-ventas-b2b
| Campo | Valor |
|---|---|
| Keyword principal | inteligencia artificial para ventas |
| Volumen ES | 140 |
| KD | 49 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | IA para ventas (50, KD 37) · IA ventas (40) · IA para ventas B2B (40) · IA en ventas (30, CPC 9,15) · IA para comerciales (20) · CRM con IA (110, KD 49) |
| Título SEO | Inteligencia artificial para ventas B2B: guía práctica |
| Top 10 | Blogs y landings de proveedores (Overloop, folk) y páginas de cursos (EHU, Platzi). Hay pocas guías independientes. |
| Ángulo diferencial | El proceso de venta fase a fase (investigar la cuenta, preparar la llamada, hacer el seguimiento, dar el parte al CRM) con prompts para cada paso. Límites del RGPD y la LSSI en la prospección automatizada, que nadie trata. |
| Formato | Guía por etapas del embudo con prompts. |

### D4 · ia-recursos-humanos-alto-riesgo
| Campo | Valor |
|---|---|
| Keyword principal | IA en recursos humanos |
| Volumen ES | 210 |
| KD | 52 |
| Intención | informativa |
| CPC | 4,22 |
| Secundarias | inteligencia artificial en recursos humanos (70, KD 46) · IA para RR. HH. (70, KD 21) · IA RR. HH. (30) · IA para reclutamiento (30) · IA en selección de personal (20) |
| Título SEO | IA en recursos humanos: usos permitidos y alto riesgo |
| Top 10 | Guías de cumplimiento centradas en selección: Sage (8 controles del AI Act), g-talent (checklist), dig.es y protecciondatos-lopd. Opinión en eldiario.es y un curso de grupo2000. |
| Ángulo diferencial | Una tabla de uso por uso: redactar una oferta no es alto riesgo; filtrar o puntuar CV sí lo es. Fechas posteriores al Omnibus (ninguna fuente las aclara), obligaciones del responsable del despliegue frente a las del proveedor, art. 22 del RGPD y deber de informar a la representación de los trabajadores. |
| Formato | Guía con tabla de semáforo de casos de uso. |

### D5 · ia-despachos-asesorias-juridicas
| Campo | Valor |
|---|---|
| Keyword principal | IA para abogados |
| Volumen ES | 320 |
| KD | 59 |
| Intención | informativa |
| CPC | 2,01 |
| Secundarias | IA legal (480, KD 64) · IA abogados (260, KD 63) · IA derecho (210, KD 58) · IA jurídica (140, KD 59) · ChatGPT para abogados (40, KD 12) · IA para despachos de abogados (40) |
| Título SEO | IA para abogados: usos, riesgos y herramientas |
| Top 10 | Domina asesor.legal con varias guías de 2026. Listas de herramientas (vLex Vincent, Aranzadi, Lefebvre, La Ley, Tirant, Harvey) con mucho contenido de afiliación (upliora, pillitteri). |
| Ángulo diferencial | Una comparativa con criterios explícitos (fuentes, privacidad, precio). El riesgo de jurisprudencia inventada con un protocolo de verificación, el secreto profesional y las pautas del CGAE. Es el KD más alto del bloque: necesitará enlaces internos desde A9, G2 y la pieza pilar. |
| Formato | Guía y comparativa con tabla de herramientas por criterios. |

### D6 · ia-finanzas-contabilidad
| Campo | Valor |
|---|---|
| Keyword principal | IA contabilidad |
| Volumen ES | 390 |
| KD | 48 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | IA para contabilidad (210, KD 46) · IA para finanzas (210, KD 44) · IA finanzas (210, KD 58) · inteligencia artificial en finanzas (110, KD 61) · IA para asesorías (40, KD 4) |
| Título SEO | IA en contabilidad y finanzas: casos de uso reales |
| Top 10 | Listas de software de proveedores (Sage, ClickUp, Otto), Qonto (casos en asesorías), un informe de Moore y una guía para México. |
| Ángulo diferencial | Flujos concretos: conciliación, cierre mensual, previsión de tesorería e informe al consejo con Copilot en Excel. Adaptado a España (Verifactu, SII, PGC), con los límites de fiabilidad y de auditoría de lo que genera la IA. |
| Formato | Guía de casos de uso con prompts y una tabla de herramientas. |

### D7 · ia-atencion-al-cliente
| Campo | Valor |
|---|---|
| Keyword principal | IA atención al cliente |
| Volumen ES | 40 |
| KD | s/d |
| Intención | s/d (SERP: informativa y comercial) |
| CPC | 5,68 |
| Secundarias | chatbot atención al cliente (90, KD 30, CPC 15,70) · IA en atención al cliente (40) · IA para atención al cliente (30, CPC 10,97) · automatizar atención al cliente (20) · inteligencia artificial atención al cliente (20) |
| Título SEO | IA en atención al cliente sin perder el trato humano |
| Top 10 | Blogs de proveedores de chatbots (Tidio, GuruSup), Capterra (guía y encuesta), SAP, noticias de adopción en España (merca2, PuroMarketing) y un PDF de la Cámara de Sevilla. |
| Ángulo diferencial | Cuándo y cómo pasar la conversación a una persona, qué tareas no conviene automatizar y cómo encaja con la Ley de Servicios de Atención a la Clientela (derecho a hablar con una persona) y con la transparencia del art. 50 del AI Act. Ningún resultado del top lo trata. |
| Formato | Guía con un mapa de qué automatizar y qué no, más una checklist legal. |

### D8 · estrategia-ia-empresa-hoja-de-ruta
| Campo | Valor |
|---|---|
| Keyword principal | estrategia IA |
| Volumen ES | 30 |
| KD | s/d |
| Intención | s/d (SERP: informativa) |
| CPC | 4,05 |
| Secundarias | IA para directivos (30, CPC 5,74) · estrategia de IA (20) · estrategia inteligencia artificial (20) · hoja de ruta IA (10) · roadmap IA (10) |
| Título SEO | Estrategia de IA: hoja de ruta para la dirección |
| Top 10 | Textos de fabricantes y consultoras (Microsoft LATAM, KPMG Panamá, studiomeyer), plantillas (Lucid, tosea) y un boletín académico. SERP débil y con mucho contenido de Latinoamérica. |
| Ángulo diferencial | La primera guía española para la dirección de pymes. Fases (diagnóstico, cartera de casos de uso, gobernanza, formación, KPIs) con responsable y plazo por fase y una plantilla descargable de hoja de ruta a 12 meses. Volumen bajo, pero el CPC indica valor comercial (enlazar a /consultoria). |
| Formato | Guía con plantilla de hoja de ruta (lienzo de una página). |

---

## E · Agentes (pilar /consultoria)

### E1 · que-es-un-agente-de-ia
| Campo | Valor |
|---|---|
| Keyword principal | qué es un agente de IA (forma sin tilde: "que es un agente de ia") |
| Volumen ES | 590 (sin tilde; con tilde, 140) |
| KD | 62 |
| Intención | informativa |
| CPC | 0,59 |
| Secundarias | IA agéntica (720 sin tilde, KD 41; 590 con tilde, KD 38) · qué es un agente IA (320, KD 58) · IA agéntica qué es (320, KD 40) · qué son los agentes de IA (170, KD 63) · agentes IA (1.300, KD 58) |
| Título SEO | Qué es un agente de IA, explicado sin tecnicismos |
| Top 10 | Google Cloud ocupa varias posiciones con su página "discover". Glosarios de Slite y lilys.ai. |
| Ángulo diferencial | Ejemplos de oficina en español y la diferencia frente a chatbot, automatización y copiloto. Riesgos (permisos, supervisión humana) y cuándo no compensa un agente. Cubrir "IA agéntica" en un H2: tiene más volumen y menos KD que la principal. |
| Formato | Explicativo con diagrama sencillo y tabla comparativa. |

### E2 · agentes-ia-ejemplos-empresas
| Campo | Valor |
|---|---|
| Keyword principal | agentes IA para empresas |
| Volumen ES | 170 |
| KD | 30 |
| Intención | informativa |
| CPC | 9,29 |
| Secundarias | agentes de IA para empresas (110, KD 6) · ejemplos de agentes de IA (70, KD 22) · agentes IA empresas (70, KD 41) · casos de uso IA (50, KD 28) · agente de IA para compras (140, KD 13) · agentes IA ejemplos (40) |
| Título SEO | Agentes de IA para empresas: ejemplos reales por área |
| Top 10 | Listas largas y genéricas (Hostinger con "23 ejemplos", Guru, Salesforce MX, tecnoloblog). |
| Ángulo diferencial | Casos por departamento en una pyme española. Para cada uno: qué hace, qué herramienta usa, qué cuesta (enlazar a E6), qué nivel de riesgo tiene y qué hace falta para montarlo. El CPC de 9,29 indica intención de compra: CTA a /consultoria. |
| Formato | Lista de 12-15 ejemplos con ficha uniforme. |

### E3 · n8n-vs-make-vs-zapier
| Campo | Valor |
|---|---|
| Keyword principal | n8n vs Make |
| Volumen ES | 140 |
| KD | 30 |
| Intención | comercial |
| CPC | 1,25 |
| Secundarias | Make vs n8n (140, KD 41) · n8n vs Zapier (40, KD 33) · Make vs Zapier (20) · n8n vs Make vs Zapier (20) · qué es n8n (1.000, KD 22) |
| Título SEO | n8n vs Make vs Zapier: cuál elegir para tu empresa |
| Top 10 | Comparativas en inglés (Enterprise DNA, Bacancy, Growwstacks, SaveMyLeads, Automation Atlas) y una traducción de Parseur. |
| Ángulo diferencial | Casi no hay contenido nativo en español. Proponemos el ángulo RGPD y UE (dónde se alojan los datos, n8n autoalojado), precios en euros con un caso calculado de 5.000 tareas al mes y una recomendación según el perfil del equipo. "Qué es n8n" (1.000, KD 22) merece su propia pieza: ver la sección de temas nuevos. |
| Formato | Comparativa con tabla y veredicto por perfil. |

### E4 · automatizar-procesos-con-ia
| Campo | Valor |
|---|---|
| Keyword principal | automatización de procesos con IA |
| Volumen ES | 320 |
| KD | 48 |
| Intención | informativa |
| CPC | 2,93 |
| Secundarias | automatización IA (320, KD 43) · automatización con IA (260 sin tilde, KD 49; 210 con tilde, KD 48) · automatizar procesos con IA (140, KD 40) · automatizar tareas con IA (40) · automatizar procesos (260, KD 39) |
| Título SEO | Automatización de procesos con IA: guía paso a paso |
| Top 10 | Guías comerciales de fabricantes (playbook de Salesforce, Dapta, Qualtir, Ecosire) y productos de Gumroad. |
| Ángulo diferencial | Un proceso real resuelto de principio a fin (facturas o correos entrantes) con herramientas, tiempos, coste y el punto de supervisión humana, más la distinción entre automatización clásica y con IA. Ningún resultado del top lo enseña así. |
| Formato | Tutorial paso a paso (HowTo) con un caso guiado. |

### E5 · rag-chatbot-documentos-empresa
| Campo | Valor |
|---|---|
| Keyword principal | RAG IA |
| Volumen ES | 590 |
| KD | 58 |
| Intención | informativa |
| CPC | 1,08 |
| Secundarias | qué es RAG (320, KD 62) · chatbot personalizado (110, KD 14) · RAG chatbot (40, KD 39) · chatbot empresa (10, CPC 13,06) · chatbot documentos empresa (s/d) |
| Título SEO | RAG en IA: un chatbot con los documentos de tu empresa |
| Top 10 | Explicaciones técnicas de proveedores (Innowise, Aurora Inbox), un tutorial técnico de javadex y una demo de Google. Pocos competidores fuertes. |
| Ángulo diferencial | La versión para negocio: qué documentos preparar, permisos y opciones sin desarrollo (NotebookLM, GPTs, Copilot) frente a un RAG a medida, con costes y límites. "RAG" a secas (135.000) es ambigua: no perseguirla. |
| Formato | Explicativo con árbol de decisión entre opciones. |

### E6 · cuanto-cuesta-agente-ia
| Campo | Valor |
|---|---|
| Keyword principal | cuánto cuesta un agente de IA |
| Volumen ES | 20 |
| KD | s/d |
| Intención | s/d (SERP: comercial) |
| CPC | 1,59 |
| Secundarias | servicios de implementación de agentes de IA (170, KD 16) · consultoría IA para empresas precio (90, KD 14, transaccional) · cuánto cuesta un chatbot (20) · precio chatbot (20) · cuánto cuesta la IA (20) |
| Título SEO | Cuánto cuesta un agente de IA: precios y escenarios |
| Top 10 | CIO.com (modelos de precio), javadex (dos artículos de precios para pymes de 2026), AI Superior (coste de desarrollo) y noticias. Rangos muy amplios en dólares y euros. |
| Ángulo diferencial | Un desglose transparente en euros (desarrollo, API, mantenimiento, integración, formación) con tres escenarios tipo para pyme y la comparación entre suscripción, no-code y desarrollo a medida. Las dos secundarias comerciales tienen más volumen que la principal: reforzarlas en H2 y enlazar a /consultoria. |
| Formato | Guía de precios con tabla de escenarios. |

---

## F y N · Formación para empresas (pilar /precios)

### F1 · elegir-empresa-formacion-ia
| Campo | Valor |
|---|---|
| Keyword principal | empresa formación IA |
| Volumen ES | s/d |
| KD | s/d |
| Intención | s/d (SERP: comercial) |
| CPC | s/d |
| Secundarias | dónde encontrar programas de formación en IA para pymes (70, KD 10) · formación en IA para empresas (50, KD 20) · curso de IA para empresas (90, KD 35; reservar como principal para /formaciones) · mejores empresas de formación IA España (s/d, visto en la SERP) |
| Título SEO | Empresa de formación en IA: 10 criterios para elegir |
| Top 10 | Mezcla de artículos de criterios y rankings, casi todos de proveedores interesados: Factorial, Marketing Directo ("mejores empresas de formación IA España"), KeepCoding, Duotach, ainora y wwwhatsnew. No dominan las landings puras. |
| Ángulo diferencial | Una lista de criterios que se pueda comprobar: formadores con casos reales, adaptación por departamento, entrega de evidencias para el art. 4 (enlace a A7), bonificación FUNDAE y medición posterior (enlace a F4). Con preguntas para hacer al proveedor y señales de alarma, como confundir "e-learning con IA" con "formación en IA". |
| Formato | Lista de 10 criterios con checklist descargable para pedir presupuestos. |

### F2 · formacion-ia-in-company-vs-online
| Campo | Valor |
|---|---|
| Keyword principal | formación IA in company |
| Volumen ES | 30 |
| KD | s/d |
| Intención | s/d (SERP: comercial) |
| CPC | 0 |
| Secundarias | curso IA in company (40, KD 38) · formación in company (260 sin tilde, KD 50; 170 con tilde; genérica) · cursos in company (110, KD 55) · curso IA online (170, KD 54) · curso IA presencial (30) |
| Título SEO | Formación en IA in company vs online: cuál elegir |
| Top 10 | Blogs de proveedores con rangos de precio (javadex, KeepCoding, upliora), un evento de Cuatrecasas, ainora y Duotach. |
| Ángulo diferencial | La única comparativa neutral: coste por empleado, adaptación a los procesos propios, seguimiento, FUNDAE, evidencia del AI Act y formato híbrido, con tabla de decisión por tamaño de empresa. Las cifras de precio se dejan para F3 y aquí solo se enlazan. |
| Formato | Comparativa con tabla de decisión. |

### F3 · precio-formacion-ia-empresas
| Campo | Valor |
|---|---|
| Keyword principal | cuánto cuesta un curso de IA |
| Volumen ES | 30 |
| KD | s/d |
| Intención | s/d (SERP: comercial) |
| CPC | 2,03 |
| Secundarias | fundae inteligencia artificial (40, KD 8) · curso IA bonificado (30, CPC 3,11) · curso IA precio (20) · curso IA FUNDAE (30) · precio formación IA empresas (s/d) |
| Título SEO | Cuánto cuesta un curso de IA para empresas (2026) |
| Top 10 | Guías de proveedores con sus propios rangos: javadex (dos), upliora (tres, entre ellas workshop, curso o programa), Duotach y una noticia de Vozpópuli. |
| Ángulo diferencial | Desglose neutral por hora, alumno y formato. Un caso real de cuánto queda tras la bonificación FUNDAE y los costes ocultos (horas de plantilla). Enlazar a /precios con nuestras tarifas públicas, que ningún competidor del top enseña. |
| Formato | Guía de precios con tabla de rangos y un ejemplo FUNDAE calculado. |

### F4 · roi-formacion-ia
| Campo | Valor |
|---|---|
| Keyword principal | ROI formación |
| Volumen ES | 20 |
| KD | s/d |
| Intención | s/d (SERP: informativa) |
| CPC | 0 |
| Secundarias | Kirkpatrick (210, KD 25) · modelo Kirkpatrick (110, KD 24) · ROI IA (20) · evaluación de la formación (20) · modelo Phillips (s/d) |
| Título SEO | ROI de la formación en IA: cómo medirlo con Kirkpatrick |
| Top 10 | Guías genéricas de ROI de la formación (Zavvy, GestioPolis, SafetyCulture), Kirkpatrick Partners y Training Industry en inglés, y tesis académicas. |
| Ángulo diferencial | La aplicación de Kirkpatrick y Phillips a la formación en IA: línea base antes y después, horas ahorradas por tarea y adopción de licencias, con una plantilla de cálculo y un ejemplo numérico. "Modelo Kirkpatrick" aporta más volumen que la principal: debe ir en el título. |
| Formato | Guía con plantilla de cálculo (hoja de cálculo descargable). |

### F5 · plan-formacion-ia-empleados
| Campo | Valor |
|---|---|
| Keyword principal | plan de formación anual |
| Volumen ES | 30 |
| KD | s/d |
| Intención | s/d (SERP: plantilla) |
| CPC | 0 |
| Secundarias | plan de formación (260, KD 47; genérica de RR. HH.) · plan de formación empresa (40, KD 51) · plantilla plan de formación (20) · formación IA empleados (s/d) |
| Título SEO | Plan de formación anual en IA para empleados (plantilla) |
| Top 10 | Plantillas genéricas de software de RR. HH. (Mitratech, Zavvy, Atlassian, Deel) y artículos de CIO y protecciondatos-lopd. Ninguna es específica de IA. |
| Ángulo diferencial | La única plantilla específica de IA: niveles por rol, calendario trimestral, evidencias del art. 4 (enlace a A7) y KPIs (enlace a F4). "Plan de formación" (260) se usa solo de apoyo, porque su intención es genérica de RR. HH. |
| Formato | Plantilla descargable (hoja de cálculo) más una guía para rellenarla. |

### N1 · que-formacion-ia-necesita-empresa
| Campo | Valor |
|---|---|
| Keyword principal | formación IA empresas |
| Volumen ES | 90 sin tilde (KD 15) + 50 con tilde (KD 24) |
| KD | 15 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | formación IA para empresas (70, KD 28, CPC 7,36) · formación en IA para empresas (50, KD 20) · formación en IA aplicada a empresa (50, KD 36) · fundae inteligencia artificial (40, KD 8) · formación pyme digital IA avanzada (720, KD 9; ver temas nuevos) |
| Título SEO | Formación en IA para empresas: por dónde empezar |
| Top 10 | Noticias (Vozpópuli, CIO, Escudo Digital, Bolsamanía), la lista de Marketing Directo, el blog de Sage, fichas de cursos de Educaweb, Factorial y ainora. Pocas landings comerciales, aunque el CPC sea alto. |
| Ángulo diferencial | Nadie responde a "qué formación necesito para empezar". Proponemos niveles por rol, una ruta mínima y la combinación de art. 4 con FUNDAE en una sola pieza. Como la SERP es informativa, la principal puede ir al blog; las landings comerciales se quedan con "cursos de IA para empresas" (ver canibalización). |
| Formato | Guía con ruta por niveles (tabla de roles y módulos) y CTA a /precios. |

### N2 · como-implantar-ia-empresa
| Campo | Valor |
|---|---|
| Keyword principal | cómo implementar IA en una empresa |
| Volumen ES | 20 |
| KD | s/d |
| Intención | s/d (SERP: informativa) |
| CPC | 4,97 |
| Secundarias | IA para pymes (140, KD 42) · inteligencia artificial en empresas (260, KD 57) · IA en empresas (90, KD 49) · IA en las empresas (50, KD 46) · implementar IA (30, CPC 3,66) |
| Título SEO | Cómo implementar IA en una empresa paso a paso |
| Top 10 | Guías de pasos numerados (5-7) genéricas y de Latinoamérica: opsio, IEBS (dos URLs), HP en varios países, Coderhouse y un producto de Gumroad. |
| Ángulo diferencial | El primer caso de uso en 90 días, con el encaje en España (AI Act, RGPD, FUNDAE, ayudas), plazos y coste por fase y una plantilla de priorización de casos de uso. La keyword inicial "implantar IA empresa" no tiene datos; "implementar" es la forma que se busca. |
| Formato | Guía paso a paso (HowTo) con plantilla de priorización. |

### N3 · ia-empresas-espanolas-estadisticas
| Campo | Valor |
|---|---|
| Keyword principal | IA en las empresas |
| Volumen ES | 50 |
| KD | 46 |
| Intención | informativa |
| CPC | 2,94 |
| Secundarias | inteligencia artificial en España (20) · IA en España (20) · INE inteligencia artificial (20) · uso IA empresas España (s/d) · estadísticas IA España (s/d) |
| Título SEO | IA en las empresas españolas: datos y estadísticas 2026 |
| Top 10 | Noticias que citan una sola cifra (Forbes, Bolsamanía con el INE, Comunidad de Madrid), blogs de Adobe, Slack y ecosistemastartup, un análisis de CaixaBank Research y un PDF de ONTSI. Fuentes oficiales vistas: INE (Encuesta TIC en empresas, primer trimestre de 2025, publicada en noviembre de 2025), Eurostat 2025 y ONTSI (2023-2024). No encontré publicación del INE de 2026. |
| Ángulo diferencial | Reunir INE, Eurostat y ONTSI en una sola página con metodología (empresas de 10 o más empleados, año de referencia), desglose por tamaño y por comunidad autónoma y una explicación de por qué las cifras no cuadran entre fuentes. Es un activo para conseguir enlaces: actualizarlo con cada publicación del INE. |
| Formato | Página de datos con gráficos, tabla de fuentes y FAQ. |

---

## G · Conceptos (pilar /formaciones/alfabetizacion-ia)

### G1 · que-es-un-llm
| Campo | Valor |
|---|---|
| Keyword principal | qué es un LLM |
| Volumen ES | 1.600 |
| KD | 65 |
| Intención | informativa |
| CPC | 0,41 |
| Secundarias | qué es LLM (1.300, KD 63) · LLM IA (320, KD 62) · large language model (390, KD 86) · qué significa LLM (210, KD 66) · modelos de lenguaje (110, KD 51) · LLM (8.100, KD 60; amplia) |
| Título SEO | Qué es un LLM y cómo funciona, explicado para empresas |
| Top 10 | Guías divulgativas de medios y empresas tecnológicas (MuyComputer, Arsys, ThePower, Lowi, ecosistemastartup, tecnoloblog). |
| Ángulo diferencial | La consecuencia práctica para la empresa: no es una base de datos, por qué alucina (enlace a G2), límites de contexto (enlace a G3) y cómo elegir modelo, con un diagrama sencillo. KD alto: es una pieza de autoridad temática, no de tráfico rápido. |
| Formato | Explicativo con diagrama y bloque "qué significa para tu empresa". |

### G2 · alucinaciones-ia
| Campo | Valor |
|---|---|
| Keyword principal | alucinaciones IA |
| Volumen ES | 170 |
| KD | 49 |
| Intención | informativa |
| CPC | 0 |
| Secundarias | alucinaciones de la IA (50, KD 46) · alucinaciones ChatGPT (20) · qué son las alucinaciones de la IA (20) · alucinación IA (20) · cómo evitar que la IA invente (s/d) |
| Título SEO | Alucinaciones de la IA: por qué ocurren y cómo evitarlas |
| Top 10 | Guías del tipo "qué son y cómo evitarlas" de blogs de herramientas (Latenode, FlowHunt, Arsys, MentoraIA, wwwhatsnew), con cifras sin fuente primaria. |
| Ángulo diferencial | Un protocolo de verificación por tipo de tarea (cifras, citas, jurisprudencia) con ejemplos reales documentados, y su relación con la responsabilidad de la empresa y la alfabetización (art. 4). |
| Formato | Explicativo con checklist de verificación descargable. |

### G3 · tokens-ventana-contexto
| Campo | Valor |
|---|---|
| Keyword principal | qué son los tokens en IA |
| Volumen ES | 170 |
| KD | 28 |
| Intención | informativa |
| CPC | 0,02 |
| Secundarias | token IA (110, KD 19) · tokens IA (90, KD 25) · context window (90, KD 52) · tokens ChatGPT (30) · ventana de contexto (20) |
| Título SEO | Qué son los tokens en IA y la ventana de contexto |
| Top 10 | Definiciones de glosario o lecciones cortas (coddy.tech con tres URLs, Zilliz, tecnoloblog). |
| Ángulo diferencial | El impacto práctico: coste por token, por qué el chat "olvida" y cuántas páginas de PDF caben, con una tabla por modelo con las cifras oficiales de cada proveedor y su fecha. "Qué es un token" (1.300) es ambigua (incluye cripto): no perseguirla. |
| Formato | Explicativo con ejemplos visuales y tabla por modelo. |

### G5 · glosario-ia-empresas
| Campo | Valor |
|---|---|
| Keyword principal | glosario inteligencia artificial |
| Volumen ES | 20 |
| KD | s/d |
| Intención | s/d (SERP: informativa) |
| CPC | 0 |
| Secundarias | glosario IA (20) · diccionario IA (20) · diccionario inteligencia artificial (20) · glosario de inteligencia artificial (20) · conceptos inteligencia artificial (10) |
| Título SEO | Glosario de inteligencia artificial para empresas |
| Top 10 | Listas alfabéticas largas: educ.ar (recopilación UNESCO, Tec de Monterrey y UOC), MundoBytes, Diario Bitcoin, Plus AI y Substacks. Mucho contenido de Latinoamérica. |
| Ángulo diferencial | Un glosario para empresa y para España, con los términos del AI Act (proveedor, responsable del despliegue, alto riesgo, alfabetización), marcado DefinedTerm y enlaces internos a cada artículo del blog. Funciona como hub de enlazado más que como captador de tráfico. |
| Formato | Glosario A-Z con anclas por término y schema DefinedTermSet. |

---

## Canibalización y cómo diferenciar

Regla general: una keyword principal por URL. Las secundarias compartidas solo pueden aparecer en H2 o en el texto de una pieza, nunca en el título ni en el H1 de dos piezas a la vez.

| # | Grupo | Riesgo | Reparto propuesto |
|---|---|---|---|
| 1 | A1 · A2 · A7 · F5 · N1 (formación obligatoria del art. 4) | Alto: el top ya mezcla "qué es", "pymes" y "cómo documentar". | **A1** = definición y a quién obliga (solo la keyword "alfabetización en IA"). **A2** = qué tiene que hacer una pyme (keyword "AI Act pymes"; el art. 4 es el eje, pero sin redefinirlo, enlazando a A1). **A7** = evidencia y registro (plantilla). **F5** = calendario anual por roles. **N1** = qué formación contratar. Bloque "Lee también" común con los cinco. |
| 2 | A6 · A2 · A10 | Medio | **A6** = checklist operativa para la empresa usuaria. **A10** = solo fechas. **A2** = explicación para pymes. A6 enlaza a A10 para las fechas en lugar de repetir la tabla. |
| 3 | A3 · A10 | Medio | **A3** = qué cambió (antes y después). **A10** = calendario vigente. A3 no publica el calendario completo, solo los cambios, y enlaza a A10. |
| 4 | A4 · A5 | Medio ("quién puede multar") | **A4** se queda con multas y sanciones. **A5** con la entidad (qué es, guías, sede). A5 resume las sanciones en un párrafo y enlaza a A4. |
| 5 | A8 · D4 | Medio ("alto riesgo" en RR. HH.) | **A8** = catálogo general del Anexo III. **D4** = usos de RR. HH. con keyword "IA en recursos humanos"; no usa "alto riesgo AI Act" en el title. |
| 6 | A9 · B3 · B4 (RGPD y ChatGPT) | Alto entre B3 y B4 | **A9** = marco legal comparado. **B3** = qué datos no introducir (enfoque empleado, lista). **B4** = qué garantiza cada plan (enfoque compras o TI, tabla). B3 no incluye la tabla de planes; enlaza a B4. |
| 7 | B4 · C3 (ChatGPT Business) | Medio | **B4** = privacidad por plan. **C3** = precio por plan. Cada uno muestra solo sus columnas y enlaza al otro. |
| 8 | B5 · C1 | Medio | **B5** = criterios de compra, sin comparar modelos. **C1** = comparativa directa de los cuatro. |
| 9 | C1 · C2 · C3 · C4 | Medio (precio) | C1 no usa "precio" en title ni H1; resume en una fila de tabla y enlaza a C2-C4. |
| 10 | B1 · B2 | Bajo | **B2** = problema y detección. **B1** = la solución documental (plantilla). B2 termina con CTA a B1. |
| 11 | C7 · C8 · E5 (chatbot con tus documentos) | Alto | **E5** se queda con "chatbot con documentos" y RAG (decisión de arquitectura). **C7** = GPTs de ChatGPT (tutorial y ejemplos). **C8** = NotebookLM. C7 y C8 enlazan a E5 con el anchor "chatbot con los documentos de tu empresa". |
| 12 | E1 · E2 · E6 (agentes) | Medio | **E1** = definición más "IA agéntica" y "agentes IA". **E2** = "agentes IA para empresas" y ejemplos. **E6** = coste. Ojo: "servicios de implementación de agentes de IA" (170) y "agentes IA para empresas" (CPC 9,29) también encajan en **/consultoria**. Decidir si /consultoria apunta a "consultoría IA" y "servicios de implementación de agentes" y deja "agentes IA para empresas" al blog (recomendado). |
| 13 | E3 · E4 | Bajo | E4 nombra herramientas en un párrafo y enlaza a E3. |
| 14 | N2 · D8 (implantar frente a estrategia) | Alto | **D8** = documento estratégico para comité de dirección (hoja de ruta a 12 meses, gobernanza, presupuesto). **N2** = operativo: lanzar el primer caso de uso en 90 días. Títulos y H1 sin "hoja de ruta" en N2 ni "paso a paso" en D8. |
| 15 | N1 · F1 · F2 · F3 · páginas comerciales | Alto | **N1** = "formación IA empresas" (qué necesito). **F1** = elegir proveedor. **F2** = formato. **F3** = precio (la única con cifras). **/formaciones** o la home = "cursos de IA para empresas" (90, KD 37) y "curso de IA para empresas" (90, KD 35), que son las de intención de compra. **/precios** = "formación IA precio" y tarifas. F2 no publica rangos de precio. |
| 16 | D5 · D6 ("IA para asesorías") | Bajo | "IA para asesorías" (40, KD 4) va a **D6** (asesorías fiscales, contables y gestorías). D5 se limita a despachos jurídicos. |
| 17 | G1 · G2 · G3 · G5 | Bajo | G5 define cada término en 2-3 líneas y enlaza a la pieza larga. No usa los títulos de G1-G3 como H2. |
| 18 | Pilar /ai-act frente a A1-A10 | Medio | La página /ai-act debe apuntar a las principales: "AI Act" (1.300, KD 82), "reglamento IA" (1.000, KD 59), "ley de inteligencia artificial" (720, KD 65) y "reglamento inteligencia artificial" (480, KD 54). Ningún artículo A usa esas keywords en el title. |
| 19 | C9 frente a una posible pieza de "prompts" | Bajo | C9 se queda con "prompts para ChatGPT" y "prompts ChatGPT". "Prompts" a secas (5.400, KD 66) y "prompt engineering" (1.900, KD 87) no se persiguen. |

---

## Temas de alto volumen que no están en la lista (solo sugerencias)

No se cambia la lista; estos temas tienen datos de Semrush (España) y encajan con el negocio.

| Tema propuesto | Keyword | Vol. | KD | Intención | Encaje |
|---|---|---|---|---|---|
| Gemini para empresas: precio y planes (Gemini Enterprise y Workspace) | gemini enterprise | 2.400 | 39 | informativa | Completa C2-C4: falta el precio de Google. CPC 28,50, señal de alto valor comercial. Variantes: google workspace gemini (110, KD 36) y gemini empresas (70, KD 47). |
| Copilot Studio: qué es y cuándo usarlo | copilot studio | 5.400 | 52 | informativa | Agentes y Microsoft. Puente entre C2, C5 y E1. |
| Copilot Chat gratis frente a Microsoft 365 Copilot | copilot chat | 8.100 | 66 | informativa y navegacional | Variantes: copilot gratis (1.900, KD 67) y m365 copilot chat (140, KD 60). Responde a una duda de compra muy común. |
| Claude vs ChatGPT para empresas (pieza propia) | claude vs chatgpt | 1.000 | 12 | comercial | KD muy bajo para su volumen. Ahora mismo solo es un H2 de C1. |
| Qué es n8n y para qué lo usa una empresa | qué es n8n | 1.000 | 22 | informativa | KD bajo. Variante: make.com (1.000, KD 60). Alimenta a E3. |
| ISO 42001: qué es y si la necesita tu empresa | iso 42001 | 1.000 | 25 | informativa | Gobernanza. CPC 4,62. Complementa B1 y A6. |
| Qué es MCP (Model Context Protocol) | qué es mcp | 390 | 56 | informativa | Agentes. Variantes: model context protocol (720, KD 94) y mcp (8.100, ambigua). |
| ChatGPT Agent (modo agente): qué hace y riesgos | chatgpt agent | 1.000 | 41 | navegacional | Agentes y seguridad, enlaza con B6. |
| IA para hacer presentaciones (PowerPoint, Gamma, Copilot) | ia para hacer presentaciones | 3.600 | 67 | informativa | Productividad. Variantes: ia para presentaciones (1.600, KD 66) y ia para powerpoint (210, KD 71). KD alto. |
| IA para Excel (más allá de Copilot) | ia para excel | 390 | 44 | informativa | Variante: chatgpt excel (260, KD 31). Complementa C5. |
| IA para resumir PDF y documentos en la empresa | ia para resumir pdf | 390 | 51 | informativa | Productividad, enlaza con B3 y C8. |
| IA generativa: qué es (para no técnicos) | qué es la ia generativa | 720 | 70 | informativa | Conceptos. "IA generativa" (5.400, KD 76) es muy difícil. |
| IA para empresas (pilar o página comercial) | ia para empresas | 720 | 44 | informativa | CPC 5,68. Mejor como pilar o home que como post. Variantes: soluciones de ia para empresas (110, KD 27) e ia para pymes (140, KD 42). |
| Consultoría de IA: qué es y cuánto cuesta | consultoria ia | 390 | 51 | informativa | Para /consultoria. Variantes: consultoría inteligencia artificial (260, KD 45) y consultoría ia para empresas precio (90, KD 14, transaccional). |
| Formación bonificada FUNDAE en IA y programas públicos | formacion pyme digital ia avanzada | 720 | 9 | informativa | KD muy bajo. Parece el nombre de un programa público concreto: verificar quién lo convoca antes de escribir. Variantes: fundae inteligencia artificial (40, KD 8), cursos fundae (1.900, KD 74, genérica) y curso inteligencia artificial sepe (260, KD 38). |
| Ley española de IA: qué dice el proyecto de ley | ley inteligencia artificial españa | 70 | 55 | informativa | Volumen modesto, pero A4 detecta confusión entre el reglamento europeo y la ley española en todo el top. |
| IA responsable y ética en la empresa | ia responsable | 170 | 37 | informativa | Gobernanza. Variante: ética inteligencia artificial (70, KD 55). |
| Agentes de voz con IA para empresas | agente de voz ia | 140 | 23 | informativa | Atención al cliente y agentes, enlaza con D7. |
| Cómo usar ChatGPT en el trabajo (guía básica) | como usar chatgpt | 720 | 42 | informativa | TOFU de alfabetización, enlaza con C9 y B3. |
| Deep Research: cómo usar la investigación profunda en la empresa | deep research | 1.300 | 76 | informativa | KD alto; mejor como H2 de otras piezas. |

No recomendados pese al volumen, porque la intención es de consumo o es solo la marca: chatgpt (16,6 M), gemini (7,5 M), claude (673.000), notebooklm (450.000), ia para crear imagenes (12.100), curso inteligencia artificial (1.600, intención de formación individual y gratuita), cursos de inteligencia artificial gratis (590), deepfake (6.600) y vibe coding (8.100).
