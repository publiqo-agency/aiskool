# Fact-check: artículos de departamentos, estrategia, estadísticas y agentes

**Fecha de revisión:** 18/10/2026. **Artículos:** ia-para-marketing, geo-aparecer-en-chatgpt, ia-para-ventas-b2b, ia-recursos-humanos-alto-riesgo, ia-despachos-asesorias-juridicas, ia-finanzas-contabilidad, ia-atencion-al-cliente, estrategia-ia-empresa-hoja-de-ruta, ia-empresas-espanolas-estadisticas, agentes-ia-ejemplos-empresas.

**Método:** cada afirmación verificable (estadística, artículo de ley, caso con cifras, caso judicial, fecha) se comprobó en la fuente enlazada (WebFetch, CSV del INE, API de Eurostat, BOE, EUR-Lex). Si la web bloqueaba a bots, se usó un espejo oficial o el paquete de datos con cita literal. Todas las URL de `<Fuentes>` se comprobaron con curl, con user-agent de navegador y siguiendo redirecciones. Las correcciones están hechas en los `.mdx`. Los 10 compilan con `@mdx-js/mdx` (frontmatter válido, description de 151 a 160 caracteres) y dan 200 en `localhost:3100`.

## Resumen

| Artículo | Afirmaciones revisadas | Corregidas | Eliminadas | No verificables |
|---|---|---|---|---|
| ia-para-marketing | 20 | 4 | 0 | 0 |
| geo-aparecer-en-chatgpt | 20 | 3 | 1 | 0 |
| ia-para-ventas-b2b | 25 | 1 | 0 | 0 |
| ia-recursos-humanos-alto-riesgo | 31 | 1 | 0 | 0 |
| ia-despachos-asesorias-juridicas | 32 | 4 | 0 | 0 |
| ia-finanzas-contabilidad | 20 | 7 | 0 | 0 |
| ia-atencion-al-cliente | 23 | 2 | 0 | 0 |
| estrategia-ia-empresa-hoja-de-ruta | 21 | 3 | 0 | 0 |
| ia-empresas-espanolas-estadisticas | 42 | 5 | 0 | 0 |
| agentes-ia-ejemplos-empresas | 33 | 4 | 0 | 0 |
| **Total** | **267** | **34** | **1** | **0** |

En «Corregidas» se cuentan también los arreglos de enlaces y de `<Fuentes>`: fuentes que faltaban o títulos que habían cambiado. Las tablas de abajo marcan como «corregido» solo las afirmaciones, así que pueden dar un número menor.

**Lo más grave:**
1. **geo-aparecer-en-chatgpt:** el 37,9 % de Ahrefs se presentaba como URL citadas «entre los diez primeros resultados». Ahrefs mide «bloques» de la página de resultados, con los elementos especiales incluidos, no resultados orgánicos. Corregido en el texto y en las barras.
2. **ia-finanzas-contabilidad:** el aviso de Verifactu no daba fechas. Ahora da los plazos vigentes tras el RD-ley 15/2025: 1/1/2027 para quienes presentan el Impuesto sobre Sociedades y 1/7/2027 para el resto. También recoge que Hacienda anunció el 5/10/2026 un aplazamiento a octubre de 2028, que todavía es solo una previsión. Ese anuncio lo he comprobado en el PDF de Hacienda. Además, el 59 % de Gartner se presentaba como «funciones financieras de empresas grandes», cuando es el 59 % de 183 CFO y responsables de finanzas encuestados, sin desglose por país ni por tamaño.
3. **McKinsey (88 %)** en estrategia y estadísticas: se describía como una encuesta «a directivos, sobre todo de empresas grandes». Según el AI Index 2026, son 1.993 encuestados de 105 países y de todos los tamaños de empresa. Corregido en los dos artículos. Ojo: el paquete `datos-adopcion-formacion-departamentos.md` (avisos, punto 1) sigue con la descripción antigua y conviene corregirlo.
4. **Casos de proveedores exagerados:**
   - BBVA: la fuente dice que su equipo legal usa ChatGPT, no un «GPT personalizado».
   - Indra: el 90 % se da «en algunos casos» y es de toda la compañía, no de su área jurídica.
   - Klarna: la cita de «700 agentes» no tenía enlace.
   - atmira: la descripción no coincidía con la fuente.
   - ia-despachos-asesorias-juridicas decía que la sanción del TSJ de Galicia era «la más reciente», y no se puede afirmar.
   - ia-recursos-humanos-alto-riesgo decía que el reconocimiento de emociones era la «única» práctica prohibida en RR. HH., y el art. 5.1.g también prohíbe la categorización biométrica.

No he encontrado ninguna cifra inventada. Las cifras oficiales del INE y de Eurostat coinciden con sus fuentes en todos los artículos.

## Coherencia entre artículos

| Dato | Uso en los artículos | Estado |
|---|---|---|
| INE, uso de IA en empresas de 10 o más empleados: 21,1 % (1T 2025, publicado el 22/10/2025) | estadísticas, estrategia | Coherente |
| Eurostat 2025: España 20,3 % (20,27) frente a UE 20,0 % (19,95); España 13.ª de 27 | estadísticas | Coherente; no se mezcla con el INE |
| 81,3 % de falta de conocimientos (base: empresas que se plantearon usar IA y no la usan) | estadísticas, estrategia | Base correcta en los dos |
| 82,35 % en España frente a 70,31 % en la UE (Eurostat, misma base) | estadísticas | Coherente |
| 34,70 % de las empresas de la UE que usan IA la aplican a marketing o ventas | marketing, ventas | Coherente y con la base explícita |
| Finanzas: INE 20,5 % y Eurostat 20,4 % para España frente a 23,1 % para la UE (base: empresas que usan IA) | finanzas | INE y Eurostat se citan por separado, cada uno con su base |
| Alto riesgo del anexo III: 2/12/2027 (antes, 2/8/2026) | RR. HH., estrategia | Coherente con el Reglamento (UE) 2026/1744. Ningún artículo da el 2/8/2026 como fecha vigente |
| Alto riesgo del anexo I: 2/8/2028 | Ninguno lo menciona | No aplica |
| Art. 50, transparencia: desde el 2/8/2026 | marketing, ventas, atención | Coherente |
| Art. 4: «adoptar medidas para apoyar» | estrategia, estadísticas | Coherente. Corregida una FAQ que fechaba esa fórmula en el 2/2/2025 |
| Dell'Acqua et al.: +32 % (versión publicada en 2026) | marketing, finanzas | Coherente; ningún artículo usa el +40 % |
| Brynjolfsson, Li y Raymond: +14 % y +34 % en novatos (5.179 agentes) | atención | Coherente |
| Klarna: marcha atrás de 2025 (Entrepreneur, que cita a Bloomberg) | atención, agentes | Coherente |
| ILUNION, BBVA, Indra y Qonto como datos publicados por el proveedor | despachos, agentes, finanzas | Coherente tras las correcciones |
| Proyecto de ley española de IA: caducado con la disolución de las Cortes | estrategia | Coherente con el estado a 18/10/2026 |
| INE, edición del 1T 2026 | estadísticas | No publicada a 18/10/2026: la URL previsible da 404. El aviso del artículo es correcto. Hay que revisarlo a finales de octubre |

## Cumplimiento legal (LIMITES-LEGALES.md)

- **RR. HH. y despachos:** los dos llevan `<Callout tipo="legal">` antes de `<Fuentes>`, con «Este artículo es informativo y no es asesoramiento jurídico» y «consulta con tu asesoría legal». Los dos dicen expresamente que no damos asesoramiento jurídico. «Abogado», «letrado», «despacho» y «equipo legal/jurídico» se refieren siempre al lector o a terceros, nunca a nosotros.
- **Aviso legal en los demás:** marketing, ventas, atención, estrategia, estadísticas y agentes ya lo llevaban. En finanzas faltaba y se ha añadido como «no es asesoramiento jurídico ni fiscal» y «consulta con tu asesoría». GEO no toca normativa y no lo necesita.
- **Términos prohibidos:** no aparecen FUNDAE, «bonificable», «certificado oficial», «homologado», «cumplimiento garantizado» ni «sello», y no se asocia el art. 4 a las multas de 35 M€.
- **Pendiente de decisión:** siete de los diez artículos enlazan al «diagnóstico gratuito de 30 minutos». Es el nombre de la página /diagnostico, pero el brief prohíbe «gratis». No lo he tocado; confirmad si la prohibición se aplica solo a la formación.

## Avisos técnicos

- El blog usa `"use cache"` (src/lib/blog.ts). El servidor de desarrollo puede seguir sirviendo el texto anterior aunque responda 200. Las correcciones están en los `.mdx` y compilan con `@mdx-js/mdx`, pero no se verán en localhost hasta reiniciar `next dev` o hacer un build.

---

# Tablas por artículo

## ia-para-marketing

| # | Afirmación | Fuente | Resultado | Cambio hecho |
|---|---|---|---|---|
| 1 | El 34,70 % de las empresas de la UE que usan IA la aplican a marketing o ventas (2025), base = empresas que usan IA | Eurostat, Statistics Explained | OK | — |
| 2 | Marketing o ventas es la primera finalidad (31,05 % administración, segunda) | Eurostat, Statistics Explained | OK (es la cifra más alta publicada) | — |
| 3 | Alojamiento 58,82 % y comercio minorista 48,18 % (marketing o ventas) | Eurostat, Statistics Explained | OK | — |
| 4 | Banco de España (EBAE): IA «principalmente para optimizar procesos internos y en marketing»; 7/5/2025; otra definición, no comparable | Banco de España, Boletín Económico 2025/T2 | OK | — |
| 5 | Noy y Zhang (Science, 2023): 453 profesionales, −40 % tiempo, +18 % calidad | Science (403 a bots); abstract verificado en Europe PMC | OK (403 a bots, verificado en espejo) | — |
| 6 | Dell'Acqua et al.: 758 consultores, +12,2 % tareas, +25,1 % velocidad, +32 % calidad, −19 puntos fuera de la frontera; Organization Science 2026 | HBS (ficha) + paquete (PDF publicado) | OK | — |
| 7 | Promega: 135 horas en seis meses con ChatGPT Enterprise para borradores de email | OpenAI, «Identifying and scaling AI use cases» (PDF, p. 13) | OK en el cuerpo (ya presentado como caso del fabricante); corregido en la FAQ | FAQ: añadido «según un caso publicado por OpenAI» |
| 8 | Deep Research de Gemini: informe en unos 5–10 minutos | Google, ayuda de Gemini | OK | — |
| 9 | Gemini Notebook es el nuevo nombre de NotebookLM desde el 16/7/2026; responde con citas a tus fuentes | Blog de Google 16/7/2026; citas en línea: ayuda de Gemini Notebook (paquete 5.4) | OK | — |
| 10 | Los GPTs personalizados se retiran en ChatGPT Enterprise y pasan a plugins con skills | OpenAI, migrate-custom-gpts | OK | — |
| 11 | Copilot en Outlook: coaching sobre «tone, sentiment, and clarity» | Microsoft, FAQ de Copilot en Outlook | OK | — |
| 12 | Copilot en Excel: tablas, gráficos y tablas dinámicas; contenido editable | Microsoft, Get started with Copilot in Excel | OK | — |
| 13 | La función =COPILOT dejó de estar disponible el 14/9/2026 | Microsoft, COPILOT function (paquete, sección 0) | OK, pero sin enlace | Añadido enlace a la página de Microsoft y entrada en Fuentes |
| 14 | Anthropic: los ejemplos son «one of the most reliable ways»; recomienda de 3 a 5 | Anthropic, Prompting best practices | OK | — |
| 15 | Google Workspace: marco de cuatro elementos (perfil, tarea, contexto, formato) | Google Workspace, guía de prompts | OK | — |
| 16 | ChatGPT Free/Plus/Pro puede entrenar con el contenido; Business/Enterprise no por defecto | OpenAI Help Center y Enterprise privacy (403 a bots; verificado vía lector r.jina.ai) | OK (403 a bots, verificado en espejo) | Añadidas ambas páginas a Fuentes |
| 17 | AEPD (enero 2026, para su personal): evitar introducir información personal o confidencial en sistemas no autorizados; respetar la propiedad intelectual | AEPD, sumario de recomendaciones IAG (PDF) | OK | — |
| 18 | Art. 50.4 AI Act, aplicable desde 2/8/2026: ultrasuplantaciones; obras creativas/satíricas; textos de interés público salvo revisión humana y responsabilidad editorial | Reglamento (UE) 2024/1689 (BOE); fecha: paquete A3/A10 (el Ómnibus no cambia el art. 50.4) | Corregido (matiz) | «quien publica una ultrasuplantación» → «quien usa un sistema de IA para generar o manipular una ultrasuplantación» (el texto obliga al responsable del despliegue) |
| 19 | Aviso legal final («no es asesoramiento jurídico… consulta con tu asesoría») | LIMITES-LEGALES.md | OK | — |
| 20 | Copy legal: sin «abogado», FUNDAE, «certificado oficial»; «diagnóstico gratuito» es una página real del sitio | LIMITES-LEGALES.md | OK | — |

URLs de Fuentes comprobadas: 10 (incluidas las 2 añadidas); todas responden (science.org, help.openai.com y openai.com/enterprise-privacy dan 403 a bots, contenido verificado en Europe PMC y r.jina.ai). Enlaces del cuerpo: 16, todos 200 salvo esos 3.

## geo-aparecer-en-chatgpt

| # | Afirmación | Fuente | Resultado | Cambio hecho |
|---|---|---|---|---|
| 1 | Google: «There are no additional requirements to appear in AI Overviews or AI Mode» | Google Search Central, AI features | OK | — |
| 2 | Enlace de apoyo: página indexada y apta para mostrarse con fragmento; query fan-out | Google Search Central | OK | — |
| 3 | No hacen falta archivos de texto para IA, marcado ni schema especial; los datos estructurados deben coincidir con el texto visible | Google Search Central | OK | — |
| 4 | nosnippet, data-nosnippet, max-snippet y noindex como controles; Google-Extended limita entrenamiento y grounding «in some of Google's other systems» | Google Search Central | OK | — |
| 5 | El tráfico de AI Overviews/AI Mode se incluye en el informe de rendimiento de Search Console | Google Search Central | OK | — |
| 6 | Documentación actualizada el 10/12/2025 | Google Search Central | OK | — |
| 7 | OAI-SearchBot para la búsqueda de ChatGPT; si se bloquea no aparece en respuestas, aunque sí como enlace de navegación; GPTBot para entrenamiento; ChatGPT-User no decide la aparición; ~24 h para cambios de robots.txt | OpenAI, Overview of OpenAI Crawlers | OK | — |
| 8 | PerplexityBot «designed to surface and link websites in search results on Perplexity», no usado para entrenar; permitir sus rangos de IP | Perplexity, guía de bots | OK | — |
| 9 | Paper GEO (Aggarwal et al.), KDD 2024, «up to 40%», eficacia varía según dominio; versión de junio de 2024 | arXiv 2311.09735 (afiliaciones: paquete D2) | OK | — |
| 10 | AI Mode supera los 1.000 M de usuarios activos mensuales; AI Overviews y AI Mode unificados; 22/7/2026 | Google, Alphabet Q2 2026 | OK | — |
| 11 | Pew: 8 % frente a 15 % de visitas con clic; 1 % de clic en el resumen; 900 adultos, 68.879 búsquedas, marzo de 2025, EE. UU. | Pew Research Center | OK | — |
| 12 | Pew: Wikipedia, YouTube y Reddit, fuentes más citadas «en los resúmenes de Google» | Pew Research Center | Corregido (matiz) | Precisado: «tanto en los resúmenes de IA de Google como en los resultados normales» |
| 13 | ChatGPT 900 M de usuarios semanales en febrero de 2026 (TechCrunch; el post de OpenAI no se pudo consultar) | TechCrunch, 27/2/2026 | OK | — |
| 14 | Ahrefs (2/3/2026): 863.000 SERP, 4 M de URL; 37,9 % de URL citadas «entre los diez primeros resultados» | Ahrefs | Corregido | Ahrefs mide «bloques» de la SERP (incluye elementos especiales), no resultados orgánicos: texto y barras cambiados a «bloques 1 a 10 / 11 a 100 / más allá del 100» |
| 15 | Ahrefs: «El resto procede en buena parte de las subconsultas» | Ahrefs | Corregido | Era una interpretación del autor presentada como dato: ahora «Ahrefs lo interpreta como señal de que…» |
| 16 | Semrush (14/1/2026): 304.805 URL citadas, 11.882 prompts, ChatGPT Search, AI Mode y Perplexity; diferencias 32,83 / 30,64 / 25,45 / 22,91 / 21,6 % | Semrush | OK | — |
| 17 | Semrush: asociaciones, no causas; no evaluó schema, HTML ni SEO técnico; tono no promocional asociado negativamente y explicación de los autores | Semrush | OK | — |
| 18 | FAQ: «las respuestas generadas citan pocas fuentes» (B2B) | Sin fuente | Eliminado | Sustituido por «el tamaño de la marca no es un requisito documentado para ser citado» (coherente con Google: sin requisitos adicionales) |
| 19 | Copy: llms.txt opcional; «nosotros lo publicamos» (el sitio tiene src/app/llms.txt/route.ts) | Código del sitio | OK | — |
| 20 | No toca normativa: no requiere aviso legal; sin términos prohibidos | LIMITES-LEGALES.md | OK | — |

URLs de Fuentes comprobadas: 8; todas responden 200 (con user-agent de navegador).


## ia-para-ventas-b2b

| # | Afirmación | Fuente | Resultado | Cambio hecho |
|---|---|---|---|---|
| 1 | El 67 % de los compradores B2B prefiere una experiencia sin comercial (Gartner, 9/3/2026) | Gartner, nota de prensa (403 a bots; verificada en el espejo oficial gcom.pdo.aws.gartner.com) | OK (403 a bots, verificado en espejo) | — |
| 2 | El 45 % usó IA en una compra reciente; encuesta a 646 compradores B2B, agosto-septiembre de 2025 | Gartner, ídem | OK | — |
| 3 | El comunicado no detalla el país de la muestra | Gartner, ídem | OK | — |
| 4 | El 34,70 % de las empresas de la UE que usan IA la aplica a marketing o ventas (2025), primera finalidad | Eurostat, Statistics Explained | OK (base: empresas que usan IA; ámbito UE, no España) | — |
| 5 | Deep Research de Gemini suele tardar de 5 a 10 minutos | Ayuda de Google 15719111 | OK | — |
| 6 | Copilot en Teams resume los puntos clave y quién dijo qué y propone tareas; para preguntarle después hay que activar la transcripción | Ayuda de Microsoft (Teams) | OK | — |
| 7 | Gemini en Meet toma notas en Google Docs | Ayuda de Google 14754931 | OK | — |
| 8 | Noy y Zhang (Science, 2023): −40 % de tiempo y +18 % de calidad en redacción profesional | Abstract en Europe PMC (science.org da 403) | OK | — |
| 9 | Copilot en Outlook: resumen con citas numeradas y *coaching* de tono, sentimiento y claridad | Ayuda de Microsoft (Outlook) | OK | — |
| 10 | Gemini en Gmail resume hilos en viñetas y ajusta el tono | Ayuda de Google 14355636 | OK | — |
| 11 | Agente Facilitator de Teams: notas y tareas | Ayuda de Microsoft (Facilitator) | OK | — |
| 12 | Agente Researcher de Copilot; Deep Research | Paquete de herramientas, 1.3 | OK | — |
| 13 | Gems pasan a skills en cuentas personales desde noviembre de 2026 | Ayuda de Google 15146780 | OK | — |
| 14 | Conectores de Claude para Microsoft 365, Google Workspace y Slack | support.claude.com 15183774; paquete 4.3 | OK | — |
| 15 | Copilot en Outlook no funciona en buzones compartidos ni en «correo cifrado» | FAQ de Outlook: solo buzón principal; no lee correo S/MIME ni de doble clave | Corregido | Ahora dice «solo funciona en el buzón principal (no en buzones compartidos) y no lee correo cifrado con S/MIME o doble clave» |
| 16 | Copilot en Teams no funciona en reuniones organizadas fuera de tu empresa | Ayuda de Teams: «hosted outside the participant's organization» | OK | — |
| 17 | Autotorino (Italia): 109 automatizaciones de Zapier que escriben en Salesforce, 2.394 horas devueltas al equipo de CRM en 2025; presentado como caso del proveedor | zapier.com/customer-stories | OK (dato publicado por el proveedor y presentado como tal) | — |
| 18 | Art. 19 de la LOPDGDD: interés legítimo presunto para datos de contacto profesionales, «únicamente»… | BOE-A-2018-16673 | OK | — |
| 19 | Cita literal del art. 21.1 de la LSSI y excepción del 21.2 (relación contractual previa, productos similares) | BOE-A-2002-13758 | OK | — |
| 20 | RGPD art. 21.2 (oposición «en todo momento» a la mercadotecnia directa, incluida la elaboración de perfiles) y art. 14.3 (informar a más tardar en la primera comunicación) | RGPD en el BOE (DOUE-L-2016-80807) | OK (el 14.3 b se aplica cuando los datos se usan para comunicarse con la persona, que es el caso descrito) | — |
| 21 | Chatbot de captación: informar de que es una IA (art. 50.1 del AI Act) | EUR-Lex 2024/1689, art. 50.1 | OK | — |
| 22 | FAQ: ChatGPT Free, Plus y Pro pueden entrenar con el contenido salvo que se desactive; Business y Enterprise no lo hacen por defecto | Paquete AI Act y gobernanza, B4 [F36] | OK | — |
| 23 | FAQ: Microsoft 365 Copilot para empresas a 15,60 €/usuario/mes sin IVA, pago anual, en promoción hasta el 31/12/2026 (18,20 € el precio normal); requiere licencia de Microsoft 365 | microsoft.com/es-es/copilot/pricing/business | OK | — |
| 24 | Formación de IA para ventas de 8 h; diagnóstico gratuito de 30 min | src/lib/formaciones.ts; /diagnostico | OK (coincide con lo que dice la web) | — |
| 25 | Legal: aviso «no es asesoramiento jurídico» + «consulta con tu asesoría legal»; ni «abogado», ni FUNDAE, ni «certificado oficial» | LIMITES-LEGALES.md | OK | — |

URLs de Fuentes comprobadas: 16 (incluidas las del cuerpo), todas responden; gartner.com y science.org dan 403 a bots, pero se verificaron en el espejo oficial de Gartner y en Europe PMC.

## ia-atencion-al-cliente

| # | Afirmación | Fuente | Resultado | Cambio hecho |
|---|---|---|---|---|
| 1 | Brynjolfsson, Li y Raymond: 5.179 agentes, +14 % de incidencias resueltas por hora, +34 % en novatos, impacto mínimo en expertos | NBER w31161 (abstract) | OK | — |
| 2 | Cita literal «AI assistance improves customer sentiment, increases employee retention, and may lead to worker learning» | NBER w31161 | OK | — |
| 3 | Publicado en *The Quarterly Journal of Economics* en 2025 | NBER, versiones publicadas: QJE 140(2) | OK | — |
| 4 | Estudio en una empresa de software | Paquete, 0.1 (según el paper; el abstract no lo dice) | OK | — |
| 5 | Gartner (jul. 2024): 5.728 clientes encuestados en diciembre de 2023; el 64 % preferiría que no se usara IA en la atención | Gartner (403 a bots; espejo oficial gcom.pdo.aws.gartner.com) | OK (403 a bots, verificado en espejo) | — |
| 6 | «el 53 % se plantearía irse a la competencia» (cuerpo y FAQ) | Gartner: «if they found out a company was going to use AI for customer service» | Corregido | Añadida la condición «si supiera que la empresa iba a usarla» en el cuerpo y en la FAQ |
| 7 | OpenAI: las acciones «sensitive, irreversible, or have high stakes» deben activar supervisión humana; ejemplos de cancelar pedidos, reembolsos y pagos | PDF de OpenAI «A practical guide to building agents» (abril de 2025) | OK | — |
| 8 | Air Canada: el chatbot dijo que había 90 días para pedir la tarifa por duelo, en contra de la política publicada; hechos de noviembre de 2022 | Moffatt v. Air Canada, 2024 BCCRT 149 | OK | — |
| 9 | Resolución del 14/2/2024; el tribunal rechaza que el chatbot sea responsable de sus actos; condena de 812,02 CAD | CRT de Columbia Británica | OK | — |
| 10 | Citas literales de los párrafos 27 y 28 | CRT, ídem | OK | — |
| 11 | Klarna (27/2/2024): dos tercios de los chats y el equivalente a 700 agentes a tiempo completo en el primer mes; los clientes podían seguir eligiendo un agente humano; presentado como cifras de la empresa sin auditar | Nota de prensa de Klarna | OK (dato de la empresa y presentado como tal) | — |
| 12 | Klarna, mayo de 2025: vuelve a contratar personas; calidad más baja («lower quality»); cita «I just think it's so critical…» vía Bloomberg | Entrepreneur, 9/5/2025 | OK | — |
| 13 | Ley 10/2025, de 26 de diciembre: BOE del 27/12/2025, en vigor el 28/12/2025, doce meses para adaptarse | BOE (ELI), disposición final octava y disposición transitoria única | OK (el preámbulo habla de «seis meses», pero la disposición transitoria única dice doce, y es la que manda) | — |
| 14 | Art. 8.1: cita literal sobre los contestadores automáticos como medio exclusivo | BOE, art. 8.1 | OK | — |
| 15 | Art. 8.2: atención personal «en cualquier momento de la interacción, desde su inicio»; «persona física operadora que contesta en tiempo real», que se identifica al inicio; el 95 % de las solicitudes atendidas de media en menos de tres minutos | BOE, art. 8.2 | OK | — |
| 16 | Art. 9.2: formación del personal y de «quien diseñe y gestione los medios automatizados» | BOE, art. 9.2 | OK | — |
| 17 | Art. 2: servicios básicos sin importar el tamaño (agua, gas, electricidad, transporte, servicios postales, comunicaciones electrónicas y servicios financieros con su normativa sectorial preferente); resto de empresas que venden a consumidores con 250 trabajadores o más, más de 50 M€ de volumen de negocios o más de 43 M€ de balance en el ejercicio anterior | BOE, art. 2.1 y 2.2 | OK | — |
| 18 | Tabla: clientes vulnerables o mayores, «asistencia individualizada en determinados casos» | BOE, art. 8.5 (quejas presenciales de consumidores vulnerables) | OK | — |
| 19 | AI Act, art. 50.1 (cita literal «estén informadas de que están interactuando con un sistema de IA», salvo que resulte evidente) y art. 50.5 («a más tardar con ocasión de la primera interacción») | EUR-Lex, Reglamento 2024/1689 (ES) | OK | — |
| 20 | El art. 50 se aplica desde el 2/8/2026 | Calendario del AI Act Service Desk (incluye el Ómnibus) | OK | — |
| 21 | FAQ 1: las empresas fuera de la Ley 10/2025 «sí deben informar de que se habla con una IA» | Art. 50.1: la obligación de diseño es del proveedor | Corregido | Ahora dice «aunque el bot sí debe avisar de que es una IA (art. 50 del AI Act)», en línea con la FAQ 2 |
| 22 | Formación de IA para atención al cliente (tono y plantillas, base de conocimiento, criterios de escalado) | src/lib/formaciones.ts | OK | — |
| 23 | Legal: aviso «no es asesoramiento jurídico» + «consulta con tu asesoría legal»; checklist marcada como «orientativa»; ni «abogado» ni FUNDAE | LIMITES-LEGALES.md | OK | — |

URLs de Fuentes comprobadas: 10 (incluidas las del cuerpo), todas responden; gartner.com da 403 a bots y se verificó en el espejo oficial de Gartner.


## ia-recursos-humanos-alto-riesgo

| # | Afirmación | Fuente | Resultado | Cambio hecho |
|---|---|---|---|---|
| 1 | Alto riesgo del anexo III (empleo) aplicable desde el 2/12/2027 tras el Omnibus (nuevo art. 113 c) | Reglamento (UE) 2026/1744, EUR-Lex (texto descargado) | OK | — |
| 2 | Omnibus publicado en el DOUE el 24/7/2026, en vigor el 27/7/2026 («a los tres días») | Reglamento (UE) 2026/1744, art. 4 | OK | — |
| 3 | Antes del Omnibus, la fecha del anexo III era el 2/8/2026 | Reglamento (UE) 2024/1689, art. 113 | OK | — |
| 4 | El Omnibus no modificó el anexo III.4 ni el art. 5.1.f | Lista de modificaciones del Reglamento 2026/1744 (art. 5 solo añade letras b bis y b ter; no hay cambios en el anexo III ni en el art. 26) | OK | — |
| 5 | Citas literales del anexo III, 4 a) y 4 b) | Reglamento 2024/1689, EUR-Lex | OK | — |
| 6 | Art. 6.3: filtro (tarea de procedimiento limitada, mejora de actividad humana, patrones, preparatoria) y «siempre» alto riesgo si hay elaboración de perfiles | Reglamento 2024/1689, art. 6.3 | OK | — |
| 7 | Art. 5.1.f: cita literal de la prohibición de inferir emociones en el trabajo, salvo motivos médicos o de seguridad | Reglamento 2024/1689, art. 5.1.f | OK | — |
| 8 | Prohibición aplicable desde el 2/2/2025 (capítulos I y II) | Reglamento 2024/1689, art. 113 a) | OK | — |
| 9 | «La única práctica de IA en RR. HH. expresamente prohibida es inferir las emociones» | Reglamento 2024/1689, art. 5.1.g (categorización biométrica para deducir afiliación sindical, opiniones políticas, etc.) | Corregido | Pasa a «la práctica prohibida que más directamente afecta a RR. HH.» y se añade una frase sobre el art. 5.1.g |
| 10 | Art. 26.2: supervisión por personas con «la competencia, la formación y la autoridad necesarias» | Reglamento 2024/1689, art. 26.2 | OK | — |
| 11 | Art. 26.6: conservar registros al menos seis meses | Reglamento 2024/1689, art. 26.6 | OK | — |
| 12 | Cita literal del art. 26.7 (informar a los representantes y a los trabajadores afectados) | Reglamento 2024/1689, art. 26.7 | OK | — |
| 13 | Art. 26.11: informar a las personas sobre las que se toman decisiones | Reglamento 2024/1689, art. 26.11 | OK | — |
| 14 | Art. 25: marca propia, modificación sustancial o cambio de finalidad convierte al responsable en proveedor | Reglamento 2024/1689, art. 25.1 (el Omnibus solo cambia el 25.2) | OK | — |
| 15 | RD 723/2026, de 9 de septiembre; BOE núm. 228, 15/9/2026; en vigor el 5/10/2026 | BOE (ELI), disposición final cuarta | OK | — |
| 16 | Cita del RD 723/2026, art. 3.2.k («la existencia de sistemas algorítmicos…», «pautas, criterios y reglas de funcionamiento») | BOE, art. 3.2.k | OK | — |
| 17 | Información antes del inicio de la relación; en papel o electrónico accesible, almacenable e imprimible; prueba de la entrega | RD 723/2026, arts. 6.2 y 7.1; documento de la AEPD | OK | — |
| 18 | Relaciones vigentes: 30 días hábiles desde la solicitud | RD 723/2026, disposición transitoria única; AEPD | OK | — |
| 19 | No vale remitir a la ley o al convenio para la información algorítmica | AEPD, 7/10/2026 (art. 3.3 del RD) | OK | — |
| 20 | Cambios: lo antes posible y, como máximo, el día en que surtan efecto | RD 723/2026, art. 7.3; AEPD | OK | — |
| 21 | Tabla de tres deberes de transparencia (RD arts. 3.2.k, 6 y 7; ET art. 64.4.d; RGPD arts. 12 a 15 y 22) | AEPD, 7/10/2026, tabla final | OK | — |
| 22 | Advertencia AI-00009-2026: herramienta aún no implantada para cribar y puntuar candidaturas; no es sanción; EIPD si es probable un alto riesgo; intervención humana real | AEPD, 7/10/2026, apartado B y IV | OK | — |
| 23 | Cita literal de la AEPD: «La presencia formal de una persona no excluye el artículo 22…» | AEPD, 7/10/2026 | OK | — |
| 24 | Indicador: si quien revisa nunca discrepa, puede haber dependencia de la puntuación | AEPD («una ausencia sistemática de discrepancias puede ser un indicio de dependencia práctica») | OK (paráfrasis sin comillas) | — |
| 25 | (FAQ) El desarrollo o la evaluación por un grupo empresarial no libera a la entidad que usa la herramienta en España | AEPD, apartado III.1 | OK | — |
| 26 | Documento de la AEPD fechado el 7/10/2026 | Portada del PDF de la AEPD | OK | — |
| 27 | ET art. 64.4.d: información al comité sobre parámetros, reglas e instrucciones de los algoritmos | BOE, texto consolidado del ET | OK | — |
| 28 | Borrador de directrices de la Comisión sobre clasificación de alto riesgo (19/5/2026), no definitivo | Página de la Comisión; paquete A8 (F07) | OK | — |
| 29 | Ejemplos del borrador: asistente de onboarding fuera; agendar entrevistas, extraer datos de CV y auditoría de sesgos con datos anonimizados exentos; puntuar CV («top 5»), búsqueda de candidatos con listas cortas y planificador de turnos con paga variable, alto riesgo | PDF del anexo III del borrador (148 págs.), comprobado por búsqueda en el texto | OK | — |
| 30 | Amazon: herramienta experimental sesgada contra mujeres, diez años de CV mayoritariamente de hombres, penalizaba «women's»; Amazon dice que no la usaron sus reclutadores | Reuters, 10/10/2018 (copia en Wayback Machine); paquete D4 | OK | — |
| 31 | Contenido de la formación ia-rrhh (usos seguros, selección y sesgos, alto riesgo e información a la plantilla) | src/lib/formaciones.ts | OK | — |

URLs de Fuentes comprobadas: 7 de Fuentes (11 enlaces externos en total en el cuerpo), todas responden 200.

Cumplimiento legal: OK. Lleva `<Callout tipo="legal">` antes de `<Fuentes>` con «Este artículo es informativo y no es asesoramiento jurídico» y «consulta con tu asesoría legal». Dice expresamente «no damos asesoramiento jurídico ni evaluamos la legalidad de tus sistemas». Remite a la asesoría legal y al DPO en los usos ámbar y rojo. No usa «abogado», «equipo legal», «certificado oficial», FUNDAE ni «cumplimiento garantizado». Única observación: enlaza al «diagnóstico gratuito de 30 minutos»; es el nombre que usa la propia página /diagnostico de la web, y la regla de LIMITES sobre «gratis» se refiere a la formación. No lo he cambiado.

## ia-despachos-asesorias-juridicas

| # | Afirmación | Fuente | Resultado | Cambio hecho |
|---|---|---|---|---|
| 1 | 2.199 resoluciones con contenido alucinado, a 16/10/2026 | damiencharlotin.com/hallucinations («2199 cases identified so far», «Last updated: 16 October 2026») | Corregido (tldr) | En el tldr se atribuye la cifra a la base de Charlotin («la base de datos de Damien Charlotin recoge…»), en lugar de presentarla como el total que existe en el mundo |
| 2 | 8 casos en España | Filtro de España de la base de Charlotin (n = 8) | OK | — |
| 3 | La base solo recoge casos en que el tribunal constató o dio a entender que se usó contenido alucinado | Charlotin, nota de alcance; paquete D5 | OK | — |
| 4 | Charlotin es investigador de HEC Paris; la base no es un registro oficial | Página de eventos del MPI (mpipriv.de, «Damien Charlotin (HEC Paris)»); paquete G2-C8 | OK | — |
| 5 | TSJ de Navarra, 4/9/2024: Código Penal de Colombia, ChatGPT, archivo sin sanción, advertencia de mala fe procesal | Base de Charlotin (ATSJ NA 38/2024, «CHATGPT 3»); paquete G2-C6; el auto de Galicia lo resume igual | OK | — |
| 6 | TC, 9/9/2024: apercibimiento por 19 citas inexistentes; no afirma que se usara IA; el letrado es «siempre responsable de revisar exhaustivamente» | Nota informativa 90/2024 del TC (PDF oficial descargado y leído) | OK | — |
| 7 | TSJ de Canarias (Las Palmas), 10/2/2026: multa de 420 € y remisión al Colegio | Base de Charlotin (caso 140/2025, «Monetary Sanction; Bar Referral 420 EUR»); citado también en el Auto de Galicia | OK | — |
| 8 | TSJ de Galicia, Auto 61/2026, 7/7/2026: multa de 1.800 € según el coste de una IA jurídica verificada | PDF del auto (AUTO: 00061/2026, Sala do Social, A Coruña) | OK | — |
| 9 | Citas literales del auto: «Aranzadi, Tirant lo Blanch o Lefebvre», «entre 1500 y 3000 euros», «o, en su defecto, la simple comprobación de las citas a través del CENDOJ, de acceso gratuito y muy intuitivo» | PDF del auto | OK | — |
| 10 | «La más reciente», la del TSJ de Galicia (Callout) | Charlotin (última entrada española sancionada: 7/7/2026); Vozpópuli, 30/7/2026, publica otra multa de 840 € del TSJ de Canarias sin fecha de resolución | Corregido | Pasa a «entre las más recientes, la del TSJ de Galicia» |
| 11 | Mata v. Avianca: sentencias inexistentes de ChatGPT defendidas tras ser cuestionadas; 5.000 dólares de sanción; 22/6/2023 | Opinion and Order on Sanctions (CourtListener, doc. 54); paquete G2-C1 | OK | — |
| 12 | Cita del juez: «inherently improper» y papel de control («gatekeeping role») | PDF de la orden | OK | — |
| 13 | Magesh et al. (Stanford, 2024): Lexis+ AI y las herramientas de Thomson Reuters alucinan entre el 17 % y el 33 % | Resumen en arXiv 2405.20362 (30/5/2024) | OK | — |
| 14 | Dahl et al. (2024): entre el 58 % y el 88 % en preguntas verificables sobre casos federales | Resumen en arXiv 2401.01301 («58% … ChatGPT 4 and 88% with Llama 2») | OK | — |
| 15 | LO 5/2024, art. 16.1 («tienen carácter confidencial») y art. 16.5 («la inviolabilidad y el secreto de todos los documentos y comunicaciones») | BOE, texto consolidado | OK | — |
| 16 | ILUNION: agente con Microsoft 365 Copilot, unos 40 segundos por expediente, «superior a las 7.000 horas anuales» (dato del proveedor) | Microsoft News España, 1/7/2025 | OK | — |
| 17 | BBVA: el equipo legal «usa un GPT personalizado» para responder 40.000 preguntas al año | OpenAI, «AI in the Enterprise» (PDF de abril de 2025): «The Legal team: Uses it to answer 40,000 questions a year on policies, compliance, and more» | Corregido | «usa un GPT personalizado» pasa a «usa ChatGPT» (la fuente no dice que sea un GPT personalizado) |
| 18 | Vodafone: los usuarios de Copilot del departamento legal ahorran de media cuatro horas por persona y semana | Caso de cliente de Microsoft | OK | — |
| 19 | Indra: redujo hasta un 90 % el tiempo de tareas repetitivas como la comparación de documentos | Microsoft News, julio de 2025: «En algunos casos, se ha logrado reducir hasta en un 90 %…», en un contexto general de la compañía (propuestas comerciales), no del área jurídica | Corregido | Se añaden «en algunos casos» y «(dato del conjunto de la compañía, no solo de su área jurídica)» |
| 20 | Copilot: 15,60 €/usuario/mes sin IVA, anual, en promoción hasta el 31/12/2026 (18,20 € el precio normal); requiere licencia de Microsoft 365 | microsoft.com/es-es/copilot/pricing/business; paquete de herramientas, 2.1 | OK | — |
| 21 | Copilot no entrena con tus datos; tráfico de la UE dentro del EU Data Boundary, salvo búsquedas web y modelos de Anthropic | Microsoft Learn (F40, F41); paquete B4 | OK | — |
| 22 | ChatGPT Business: 20 $/usuario/mes, anual; no entrena por defecto; acuerdo de tratamiento (DPA) disponible | learn.chatgpt.com/docs/pricing; OpenAI Enterprise privacy (F35) | OK | — |
| 23 | Claude Team: 20 $/puesto/mes, anual, sin impuestos; no entrena por defecto | claude.com/pricing; centro de privacidad de Anthropic (F43) | OK | — |
| 24 | Workspace Business Standard: 13,60 €/usuario/mes sin impuestos (anual); no entrena sin permiso; las regiones de datos no cubren Gemini Notebook | Precios de Workspace; paquete de herramientas, 1.1 y 5; F44 | OK | — |
| 25 | ChatGPT Free, Plus y Pro pueden entrenar con tu contenido salvo que lo desactives | Centro de ayuda de OpenAI (F36, leído con r.jina.ai según el paquete B4) | OK (403 a bots, verificado en el paquete) | — |
| 26 | En los planes de empresa, lo borrado puede conservarse hasta 30 días | OpenAI Enterprise privacy (F35: «within 30 days») | OK | — |
| 27 | Circular del CGAE de abril de 2026: documentar el uso de la IA; la rectificación a tiempo puede evitar la infracción | El Derecho, 13/4/2026 (medio de referencia, no el texto de la circular) | OK | — |
| 28 | ICAM: «no reemplaza ni debe reemplazar al abogado ni a su criterio profesional»; guía de octubre de 2025 | web.icam.es (fechas que aparecen: 7/10/2025 y 17/9/2026) | OK | — |
| 29 | Anthropic recomienda pedir citas literales y retirar las afirmaciones sin cita | Documentación de Anthropic sobre cómo reducir alucinaciones; paquete G2-10 | OK | — |
| 30 | (FAQ) El art. 4 obliga al responsable del despliegue a adoptar medidas para apoyar la alfabetización | Reglamento 2026/1744 (nuevo art. 4) | OK | — |
| 31 | (FAQ) El anexo III incluye la IA destinada a ayudar a las autoridades judiciales | Reglamento 2024/1689, anexo III, punto 8 a) | OK | — |
| 32 | Contenido de la formación ia-legal | src/lib/formaciones.ts | OK | — |

URLs de Fuentes comprobadas: 8 de Fuentes (24 enlaces externos en total en el cuerpo). Todas responden 200 salvo help.openai.com y openai.com/enterprise-privacy, que dan 403 a bots; están verificadas en el paquete con r.jina.ai (F35, F36), así que es OK.

Cumplimiento legal: OK. Lleva `<Callout tipo="legal">` antes de `<Fuentes>` con «Este artículo es informativo y no es asesoramiento jurídico» y «consulta con tu asesoría legal». Dice expresamente «somos una empresa de formación en IA: no damos asesoramiento jurídico ni revisamos escritos» y «el criterio jurídico es siempre vuestro». «Abogado», «despacho» y «equipo legal» aparecen solo referidos al público o a terceros (BBVA, Vodafone), nunca a nosotros. Sin FUNDAE, «certificado oficial» ni «cumplimiento garantizado». Lleva la misma observación sobre el «diagnóstico gratuito», que es el nombre de la página /diagnostico.


## ia-finanzas-contabilidad

| # | Afirmación | Fuente | Resultado | Cambio hecho |
|---|---|---|---|---|
| 1 | El 59 % de las «funciones financieras» usa IA (Gartner 2025) | Gartner, nota 18/11/2025 (403 a bots; verificado en el espejo gcom.pdo.aws.gartner.com): «59% of finance leaders reporting the use of AI in their finance function» | corregido | La base es «responsables financieros que dicen usarla en su función»; ajustados el tldr, la entradilla, el cuerpo y la etiqueta del Stat |
| 2 | Encuesta «global» a 183 CFO, «de empresas grandes de varios países», «en el mundo» | Mismo comunicado: «183 chief financial officers (CFOs) and senior finance leaders», mayo y junio de 2025; no dice países ni tamaño | corregido | Quitados «global», «en el mundo» y «empresas grandes de varios países»; ahora pone «su comunicado no detalla países ni tamaño de empresa» y «183 directores financieros y responsables de finanzas» |
| 3 | 58 % en 2024, 59 % en 2025, 37 % en 2023 | Gartner 2025 («from 37% in 2023 to 58% adoption last year») y Gartner 2024 (espejo) | OK | — |
| 4 | Usos: gestión del conocimiento 49 %, cuentas a pagar 37 %, errores y anomalías 34 % | Gartner 2025 (espejo) | OK | — |
| 5 | El 91 % declaró un impacto inicial bajo o moderado | Gartner 2025: «91% of respondents reporting low or moderate impact initially» | OK | — |
| 6 | INE: el 20,5 % de las empresas de 10+ empleados que usan IA la aplica a la gestión contable, de control o financiera (1T 2025) | CSV del INE 76387: «E.2.F … (2);Total;20,52»; nota (2): % sobre las empresas que usan IA | OK | — (la base está bien indicada) |
| 7 | Eurostat 2025: España 20,4 % y UE 23,1 % (IA para contabilidad, control o finanzas) | API de Eurostat isoc_eb_ain2, E_AI_PFIN, unidad PC_ENT_AI_TANY: ES 20,43 / UE 23,11 | OK | — (INE y Eurostat aparecen por separado, sin mezclarse) |
| 8 | 34,7 % de las empresas españolas de «actividades jurídicas, contables y de consultoría de gestión» usan IA (Eurostat 2025) | API isoc_eb_ain2, NACE M69-M71, E_AI_TANY, PC_ENT: ES 34,68 | corregido | El agregado M69-M71 incluye también las sedes centrales; etiqueta ajustada |
| 9 | Qonto, «neobanco europeo», «afirma» que sus agentes preparan facturas: «3X less time to create client invoices» | Ficha de cliente de Anthropic (claude.com/customers/qonto): cita literal OK; la página no usa «neobanco» («banking and bookkeeping» para más de 600.000 empresas en 8 mercados europeos) | corregido | Ahora se presenta como dato de la ficha publicada por Anthropic, sin la etiqueta «neobanco»; se mantiene la advertencia «cifra del propio proveedor, sin auditar» |
| 10 | Copilot en Excel usa tablas, gráficos, tablas dinámicas y fórmulas, y el contenido sigue siendo editable («documentación de septiembre de 2026») | support.microsoft.com, Get started with Copilot in Excel: cita OK; la página no tiene fecha | corregido | La fecha pasa a «consultada en octubre de 2026» (en el cuerpo y en Fuentes) |
| 11 | Función =COPILOT retirada el 14/9/2026 (cuerpo y FAQ) | support.microsoft.com, COPILOT function: «Starting September 14, 2026, the COPILOT function is no longer available» | OK | — |
| 12 | Copilot en Excel admite modelos de OpenAI y de Anthropic; el administrador tiene que habilitar Anthropic como subencargado | Preguntas frecuentes de Copilot en Excel: «your admin must enable Anthropic as a Microsoft sub-processor» | OK | Añadido a Fuentes (antes solo estaba en el cuerpo) |
| 13 | Los modelos de Anthropic están excluidos del EU Data Boundary | Microsoft Learn: «Models provided by Anthropic as a subprocessor are currently excluded from the EU Data Boundary» (actualizado el 8/10/2026) | OK | — |
| 14 | Microsoft 365 Copilot para empresas: 15,60 €/usuario/mes con pago anual en promoción hasta el 31/12/2026 (18,20 € de precio normal), sin IVA y además de la licencia de M365 | microsoft.com/es-es/copilot/pricing/business: «Originally starting from 18,20 € now starting from 15,60 €», «El precio no incluye IVA», oferta del 1/7 al 31/12/2026, «Se requiere una licencia aparte» | OK | — (nota: Microsoft ha cambiado el nombre a «Microsoft Copilot»; no afecta al dato) |
| 15 | Dell'Acqua et al. 2026: 758 consultores, +12,2 % de tareas, +32 % de calidad, −19 puntos fuera de la frontera | Paquete 0.2 (citas literales del PDF publicado); la ficha de HBS da 403 a bots y a curl | OK (403 a bots, verificado en el paquete) | — (usa el 32 %, no el 40 %) |
| 16 | Verifactu: requisitos en el RD 1007/2023; «calendario en revisión»; el 5/10/2026 Hacienda comunicó una «previsión de ampliación del plazo»; página de la AEAT actualizada el 14/10/2026 | Sede de la AEAT (actualizada el 14/10/2026); nota de la AEAT (actualizada el 13/10/2026): RD-ley 15/2025, «antes del 1 de enero de 2027» (contribuyentes del IS) y «antes del 1 de julio de 2027» (resto); nota de prensa de Hacienda del 5/10/2026: «aplazamiento … hasta octubre de 2028» (previsión) | corregido (completado) | El aviso no daba los plazos vigentes. Ahora da los plazos legales vigentes (1/1/2027 y 1/7/2027, RD-ley 15/2025), aclara que lo de octubre de 2028 es una previsión aún sin aprobar y enlaza las dos notas, que se añaden a Fuentes |
| 17 | Las nóminas contienen datos personales protegidos por el RGPD (FAQ) | Afirmación general correcta | OK | — |
| 18 | Aviso legal (LIMITES-LEGALES): el artículo toca normativa (Verifactu, RGPD) pero no tenía aviso | LIMITES-LEGALES.md / brief | corregido | Añadido antes de Fuentes un `<Callout tipo="legal">`: no es asesoramiento jurídico ni fiscal; consulta con tu asesoría |
| 19 | «Diagnóstico gratuito de 30 minutos» | src/app/diagnostico/page.tsx («Gratis · 30 minutos») | OK | — (es la oferta real del sitio; no se refiere a formación ni a FUNDAE) |
| 20 | Formación «IA para Finanzas»: hojas reales anonimizadas, comentarios de gestión, controles de cifras | src/lib/formaciones.ts (slug ia-finanzas) | OK | — |

Fuera del alcance del fact-check: el artículo no menciona que la evaluación de la solvencia o la calificación crediticia de personas físicas (anexo III, punto 5 b) y la tarificación de seguros de vida y salud (punto 5 c) son de alto riesgo a partir del 2/12/2027. No es un error, pero falta ese contexto si el lector es una entidad financiera.

URLs de Fuentes comprobadas: 15 (incluidas las 3 añadidas). Todas responden con 200, salvo las dos notas de Gartner, que dan 403 a bots; están verificadas en el espejo oficial gcom.pdo.aws.gartner.com, que da 200.

## estrategia-ia-empresa-hoja-de-ruta

| # | Afirmación | Fuente | Resultado | Cambio hecho |
|---|---|---|---|---|
| 1 | BCG 2025: solo el 5 % obtiene valor a escala; el 60 %, ningún valor material; el 35 % está escalando (barras) | PDF de BCG «The Widening AI Value Gap»: «Only 5% … Fully 60% … Another 35%», n = 1.250 | OK | — |
| 2 | Estudio de BCG con 1.250 empresas | PDF: «more than 1,250 firms», «n = 1,250» | OK | — |
| 3 | McKinsey vía AI Index 2026: el 88 % dice que su organización usa IA (78 % en 2024), dato «declarado por directivos de todo el mundo» y orientativo | AI Index 2026, cap. 4.3: «up to 88% in 2025 from 78% in 2024», «directional rather than comprehensive»; muestra: 1.993 participantes de 105 países, de todos los cargos y funciones (no solo directivos) | corregido | Ahora pone «declarado por 1.993 encuestados de 105 países, no un porcentaje de empresas»; se mantiene la advertencia de que es orientativo. Ninguna cifra de McKinsey que no esté en el paquete |
| 4 | INE: el 21,1 % de las empresas de 10+ empleados usa IA (1T 2025) | CSV del INE: 21,14; nota de prensa del 22/10/2025 | OK | — |
| 5 | WTI 2024: el 60 % de los directivos teme que su dirección no tenga «a plan and vision to implement AI»; al 59 % le preocupa cuantificar la productividad; 31.000 trabajadores, 31 mercados, España incluida | Microsoft WorkLab, 8/5/2024 (citas literales) y paquete S6 (España incluida) | OK | — |
| 6 | 81,3 % (sobre las empresas que se plantearon la IA y no la usan) alega falta de conocimientos | CSV del INE: «E.5.B … (3);Total;81,29»; nota (3) sobre la base | OK | — (base bien explicada en el Stat y en el texto) |
| 7 | El 70 % del valor potencial está en funciones principales (ventas y marketing, fabricación, cadena de suministro, precios) | PDF de BCG 2025: cita literal | OK | — |
| 8 | El 51,6 % de las empresas que usan IA la compra como software comercial listo para usar | CSV del INE: «E.3.D … 51,58» (base: empresas que usan IA) | OK | — |
| 9 | El 72 % de las empresas declara riesgos de seguridad de IA no gestionados | PDF de BCG 2025: «72% of companies already report unmanaged AI-security risks» | OK | — |
| 10 | NIST AI RMF: voluntario, cuatro funciones (GOVERN, MAP, MEASURE, MANAGE), 26/1/2023 | nist.gov: «Released on January 26, 2023», «intended for voluntary use», Govern, Map, Measure, Manage | OK | — |
| 11 | Art. 4 en la redacción del Reglamento (UE) 2026/1744, en vigor desde el 27/7/2026: «adoptarán medidas para apoyar la promoción de la alfabetización en materia de IA de su personal», sin nivel garantizado por persona | EUR-Lex OJ:L_202601744 (texto literal del art. 4.1, DOUE del 24/7/2026) | OK | — |
| 12 | FAQ: el AI Act obliga «desde el 2 de febrero de 2025 a adoptar medidas para apoyar» | El art. 4 se aplica desde el 2/2/2025, pero la fórmula «apoyar» es la del 27/7/2026 (antes era «garantizar … un nivel suficiente») | corregido | «art. 4, aplicable desde el 2 de febrero de 2025 y reformulado en julio de 2026» |
| 13 | Calendario: 2/2/2025 art. 4 y prohibiciones; 27/7/2026 Ómnibus; 2/8/2026 art. 50; 2/12/2027 alto riesgo del anexo III | Paquete A3/A10; EUR-Lex (considerando 40: 2/12/2027 anexo III y 2/8/2028 anexo I) | OK | — |
| 14 | Proyecto de ley orgánica de IA «que aprobó el Gobierno en mayo de 2026»; caducado el 6/10/2026 | Ficha del Congreso 121/000096: autor el Gobierno, presentado el 28/5/2026, «Concluido - (Caducado)» el 6/10/2026 | corregido | «que el Gobierno presentó en el Congreso el 28 de mayo de 2026» (lo que consta en la fuente enlazada) |
| 15 | Más del 60 % de las empresas «future-built» hace un seguimiento riguroso del valor, frente al 17 % de las estancadas | PDF de BCG 2025: cita literal | OK | — |
| 16 | Regla 10-20-70 (cita literal en inglés y FAQ: «20 % a tecnología y datos») | PDF de BCG 2025 (cita literal); BCG 2024 (S3): «20% into technology and data» | OK | — |
| 17 | WTI 2026: factores de organización frente a individuales, 67 % frente a 32 %; asociación, no causa; 20.000 usuarios de IA en 10 países, sin España | Microsoft WorkLab, 5/5/2026 (citas literales; 10 mercados sin España) | OK | — |
| 18 | AI Index 2026: despliegue de agentes «in the single digits across nearly all business functions» | AI Index 2026, PDF: cita literal | OK | — |
| 19 | Predicciones de Gartner, Dell'Acqua o MIT | No aparecen | OK | — |
| 20 | Aviso legal con «consulta con tu asesoría legal»; plantilla «orientativa, adaptada y revisada con tu asesoría» | LIMITES-LEGALES.md | OK | — |
| 21 | Sesión «IA para dirección»: hoja de ruta priorizada, criterios para evaluar proveedores y casos de uso, responsabilidades del AI Act | src/lib/formaciones.ts (ia-para-directivos, outcomes) | OK | — |

URLs de Fuentes comprobadas: 10. Responden: 8 con 200 y EUR-Lex con 202 (página de comprobación anti-bots; WebFetch la abrió con el texto completo). La nota de prensa de BCG (bcg.com/press/30september2025-…) da 403 a bots; su contenido está verificado en el PDF de BCG, que da 200.


## ia-empresas-espanolas-estadisticas

Método: CSV oficial del INE (tabla 76387) descargado y filtrado; notas de prensa del INE 2021–2025 (HTML/PDF); API de Eurostat (`isoc_eb_ai`, `isoc_eb_ain2`, `isoc_ske_ittn2`, `isoc_ai_iaiu`, actualizadas el 15/06/2026 y el 05/06/2026); PDF KS-01-26-009; PDF de la Década Digital (ST-10476-2026-ADD-27); EUR-Lex; AI Index 2026 (PDF). Edición del INE con datos de 1T 2026: **no publicada** a 18/10/2026 (ETICCE20251T2026.htm da 404; la página de la operación sigue mostrando «Publicado: 22/10/2025»).

| # | Afirmación | Fuente | Resultado | Cambio hecho |
|---|---|---|---|---|
| 1 | 21,1 % de empresas de 10+ usa IA en 1T 2025; +8,7 puntos | INE, nota ETICCE20241T2025 | OK | — |
| 2 | Muestra de unas 15.000 empresas de 10+ | INE, nota (ficha técnica) | OK | — |
| 3 | +8,7 puntos es el mayor salto de la serie | Notas INE 2021–2025 (8,3 / 12,6 / 9,6 / 12,4 / 21,1) | OK | — |
| 4 | Microempresas 13,4 % (7,5 % un año antes; +5,9) | INE, nota PDF (base: con conexión a internet) | OK | — |
| 5 | Definición «usar IA»: lista cerrada de tecnologías; excluye agricultura, minería, financiero y CNAE 56 en tablas INE | INE CSV (cabeceras «excepto CNAE 56, 64-66 y 95.1»); Eurostat metadatos | OK | — |
| 6 | Eurostat 2025: España 20,27 %, UE 19,95 %, puesto 13 de 27 | API `isoc_eb_ai` (E_AI_TANY, GE10) | OK | Ranking recalculado con los 27 Estados (sin NO, EA ni candidatos): ES 13.º |
| 7 | Barras por país (DK 42,03; FI 37,82; SE 35,04; NL 33,21; DE 25,97; FR 18,16; IT 16,40; PT 11,54; PL 8,36; RO 5,21) | API `isoc_eb_ai` | OK | — |
| 8 | Década Digital: España 20,3 % y cita «a commendable level of digitalisation…» | PDF ST-10476-2026-ADD-27 | OK | — |
| 9 | Por tamaño INE: 17,89 / 30,75 / 58,24 / total 21,14 | CSV INE 76387 | OK | — |
| 10 | Gran empresa «más de tres veces» que pequeña | Cálculo 58,24/17,89 = 3,26 | OK | — |
| 11 | Tabla Eurostat por tamaño ES 17,17/30,10/57,46 vs UE 17,00/30,36/55,03 | API `isoc_eb_ai` | OK | — |
| 12 | Dataset actualizado el 15/06/2026 | API (campo `updated`) | OK | — |
| 13 | Sectores INE: TIC-comunicaciones 60,6; profesionales 38,5; construcción 11,4; servicios 25,7; industria 17,5 | CSV INE y nota de prensa | OK | — |
| 14 | Barras por rama (11 valores: 60,57 … 11,44) | CSV INE 76387 | OK | — |
| 15 | Tabla sectorial Eurostat ES vs UE (J62_J63, M73-M75, M69-M71, L68, N79, G46, C, H, G47, F) | API `isoc_eb_ain2` (E_AI_TANY, PC_ENT) | OK | — |
| 16 | «España va por delante en inmobiliarias y transporte, y por detrás en comercio y jurídicas/contables» | Misma tabla | OK | — |
| 17 | Tecnologías (% sobre empresas que usan IA): 53,87 / 49,55 / 43,80 / 36,04 / 33,41 / 29,36 / 27,54 / 8,51 | CSV INE (nota 2: base empresas que usan IA) | OK | — |
| 18 | Finalidades: administración 29,8; marketing/ventas 29,6; producción 22,4; I+D 22,3; contable/financiera 20,5 | CSV INE | OK | — |
| 19 | Cómo la consiguen: 51,6 % listo para usar; 26,9 % proveedor externo; 17,3 % desarrollo propio | CSV INE | OK | — |
| 20 | 81,3 % alega falta de conocimientos, **sobre empresas que se plantearon usar IA y no la usan**; aviso explícito de que no equivale al total | CSV INE (E.5.B, nota 3) | OK | Base bien presentada en cuerpo, Callout y Barras |
| 21 | Solo el 11,5 % de las empresas de 10+ se lo llegó a plantear | CSV INE (E.4 = 11,48 %, nota 1) | OK | — |
| 22 | Barras de barreras INE (81,29 … 14,16) | CSV INE | OK | — |
| 23 | Eurostat: falta de conocimientos ES 82,35 vs UE 70,31; costes 47,37 vs 38,37; resto de la tabla | API `isoc_eb_ain2` (PC_ENT_AI_EC) | OK | — |
| 24 | Informe Eurostat 2026: la falta de conocimientos es la primera barrera en todos los tamaños | PDF KS-01-26-009 («70.9% of small… 69.2% medium… 65.1% large») | OK | — |
| 25 | Serie INE 2021–2025: 8,3 / 12,6 / 9,6 / 12,4 / 21,1 | PDF/HTML del INE de cada edición | OK | — |
| 26 | «Se ha multiplicado casi por 2,5 en cuatro años» | 21,1/8,3 = 2,54 | corregido | «por más de 2,5» |
| 27 | Ruptura de serie (generación de imágenes añadida en 2025); Eurostat no publica 2022 | API `isoc_eb_ai` (años 2021, 2023, 2024, 2025) y paquete N3·0 | OK | — |
| 28 | Serie Eurostat ES/UE 2021–2025 (7,67/7,65 … 20,27/19,95) | API `isoc_eb_ai` y nota ddn-20251211-2 | OK | — |
| 29 | Servicios 11,2 → 15,6 → 25,7; microempresas 5,8 → 7,5 → 13,4 | Notas INE 2023, 2024, 2025 (5,8 % de 2023 verificado en paquete, tabla del PDF 2023) | OK | — |
| 30 | Formación TIC: ES 21,2 % vs UE 22,3 % (encuesta 2024, formación del año anterior); estancada desde 2019 | API `isoc_ske_ittn2` (21,73 / 20,12 / 20,70 / 21,22) | OK | — |
| 31 | Población 16–74: 37,9 % usó IA generativa; 17,9 % por trabajo (presentado como dato de personas, no de empresas) | INE TICH2025 | OK | — |
| 32 | Eurostat IA generativa ES 37,9 % vs UE 32,7 % | API `isoc_ai_iaiu` (37,88 / 32,66) | OK | — |
| 33 | ONTSI: 11,4 % en 2024 «coincide con Eurostat» | Nota de prensa ONTSI 30/04/2025 (web de ONTSI con muro anti-bots) | corregido | «Casi coincide con Eurostat (11,3 %)» |
| 34 | Banco de España (EBAE): «casi el 20 %», otra definición; 7/5/2025 | bde.es | OK | — |
| 35 | McKinsey 88 % «encuesta a directivos, sobre todo de empresas grandes» (FAQ y tabla) | AI Index 2026, apéndice: «1,993 participants in 105 nations representing the full range of … company sizes» | corregido | FAQ y tabla: «encuesta online a 1.993 profesionales de 105 países» |
| 36 | INE 12,4 % vs Eurostat 11,3 % en 2024 | Nota INE 2024; API Eurostat | OK | — |
| 37 | Objetivo UE 2030: 75 % con cloud, big data o IA | EUR-Lex, Decisión 2022/2481, art. 4.1.3 | OK | — |
| 38 | Fecha en Fuentes «DOUE, 14 de diciembre de 2022» | EUR-Lex: es la fecha de la Decisión, no de su publicación en el DOUE | corregido | «Parlamento Europeo y Consejo, 14 de diciembre de 2022» |
| 39 | Métrica combinada ES 62,4 % / UE 63,2 %; objetivo de IA del 75 % para 2030 | PDF Década Digital (tabla KPI) | OK | — |
| 40 | «El art. 4 obliga a quien usa IA a adoptar medidas…», sin certificado ni horas | Reglamento (UE) 2026/1744 (paquete A2) | corregido | «obliga a las empresas que usan IA» (el art. 4 no alcanza al uso personal) |
| 41 | Aviso de estado: la edición del INE con 1T 2026 aún no se ha publicado | ine.es (404 en la URL previsible; página de la operación) | OK | — |
| 42 | Aviso legal y ausencia de términos prohibidos | LIMITES-LEGALES.md | OK | — |

URLs de Fuentes comprobadas: 16, todas responden 200 (ONTSI devuelve 200 pero con un muro anti-bots, Incapsula; cifra verificada en la nota de prensa oficial de digital.gob.es).

## agentes-ia-ejemplos-empresas

| # | Afirmación | Fuente | Resultado | Cambio hecho |
|---|---|---|---|---|
| 1 | ILUNION: agente «Litigator», análisis inicial en unos 40 segundos, más de 7.000 h/año; 1/7/2025 | Microsoft News España | OK (dato publicado por el proveedor) | — |
| 2 | Serveo: 733 agentes con Agent Builder, Copilot Studio y M365; hasta −80 % de tiempo y −95 % de errores; 15/7/2026 | Microsoft Source EMEA | OK (dato del proveedor) | — |
| 3 | BBVA: más de 2.900 GPTs en cinco meses | OpenAI, AI in the Enterprise (PDF, abril de 2025) | OK (dato del proveedor) | — |
| 4 | BBVA con Gemini: casi 3 h/semana de ahorro declarado | Google Cloud, página de casos | OK (dato del proveedor) | — |
| 5 | OpenAI retira los GPTs personalizados en ChatGPT Enterprise y los sustituye por plugins | learn.chatgpt.com/docs/migrate-custom-gpts | OK | — |
| 6 | atmira: «plataforma de IA… orientada, por los indicadores que publica Google, al recobro»; herramienta «Google Cloud» | Google Cloud: «SIREC, an AI-driven debt collection platform… 114 million monthly requests», con GKE y Oracle | corregido | Se describe como SIREC, plataforma de recobro de deudas, unos 114 M de solicitudes al mes; herramienta: GKE y Oracle sobre Google Cloud |
| 7 | atmira: +30–40 % de recobro, +45 % de conversiones, −54 % de costes | Google Cloud | OK (dato del proveedor) | — |
| 8 | Página de Google actualizada el 22/4/2026 | Google Cloud («last updated April 22, 2026») | OK | — |
| 9 | Título de la fuente «101 real-world gen AI use cases…» | La página se titula ahora «1,302 real-world gen AI use cases from the world's leading organizations» | corregido | Título actualizado en Fuentes |
| 10 | Indra: más de 3.000 usuarios, 2 h/semana, productividad +5 %, hasta −90 % en tareas repetitivas | Microsoft Source EMEA | OK (dato del proveedor) | — |
| 11 | Definición de OpenAI y «un chatbot sencillo no es un agente» | OpenAI, A practical guide to building agents (PDF del 7/4/2025) | OK | — |
| 12 | Distinción flujos de trabajo y agentes de Anthropic | Anthropic, Building effective agents (19/12/2024) | OK | — |
| 13 | Klarna: dos tercios de los chats, de 11 a 2 minutos | OpenAI, AI in the Enterprise | OK (dato del proveedor) | — |
| 14 | Zendesk: hasta un 80 % menos de tiempo de gestión humana | claude.com/customers/zendesk | OK (dato del proveedor) | — |
| 15 | Qonto: 3 veces menos tiempo; el cliente confirma antes de enviar | claude.com/customers/qonto | OK (dato del proveedor) | — |
| 16 | N26: hasta el 70 % de las tareas en procesos seleccionados | claude.com/customers/n26 | OK (dato del proveedor) | — |
| 17 | Delivery Hero: 200 h/mes con un flujo de operaciones de TI | n8n.io | OK (dato del proveedor) | — |
| 18 | Vodafone UK: 2,2 M£ evitados y más de 5.000 jornadas | n8n.io | OK (dato del proveedor) | — |
| 19 | Autotorino: 109 Zaps en Salesforce, 2.394 h en 2025 | zapier.com/customer-stories | OK (dato del proveedor) | — |
| 20 | JAKALA: alrededor de −70 % de tiempo en tareas repetitivas (Claude Agent SDK) | claude.com/customers/jakala | OK (dato del proveedor) | — |
| 21 | Klarna «en 2024 anunció que equivalía a 700 agentes» (sin enlace) | Nota de prensa de Klarna, 27/2/2024: «equivalent work of 700 full-time agents» | corregido | Se precisa «febrero de 2024… a tiempo completo» y se enlaza la nota de Klarna; añadida a Fuentes |
| 22 | Mayo de 2025: el CEO defiende volver a invertir en atención humana | Entrepreneur, 9/5/2025 (cita a Bloomberg) | OK | Añadida a Fuentes (faltaba) |
| 23 | FAQ: «cuando una empresa ha intentado sustituir a las personas, como Klarna, ha acabado rectificando» (generalización) | Entrepreneur: congelación de contrataciones por la IA y nueva contratación de personas | corregido | Se acota al caso: Klarna congeló contrataciones apoyándose en su asistente y ha vuelto a contratar personas |
| 24 | AI Index 2026: despliegue de agentes «in the single digits across nearly all business functions» | AI Index 2026 (PDF, aspectos destacados del cap. 4) | OK | — |
| 25 | 62 % cita la seguridad y el riesgo como primer obstáculo para escalar agentes | AI Index 2026, cap. 3.3 | OK | — |
| 26 | BCG: los agentes aportan el 17 % del valor de la IA en 2025 y se prevé un 29 % en 2028 (presentado como previsión) | BCG, The Widening AI Value Gap (PDF) | OK | — |
| 27 | Cita de Anthropic: «we recommend finding the simplest solution possible…» | Anthropic | OK | — |
| 28 | Criterios de OpenAI y «a deterministic solution may suffice» | OpenAI (PDF) | OK | — |
| 29 | OpenAI: supervisión humana en acciones «sensitive, irreversible, or have high stakes» (cancelar pedidos, reembolsos, pagos) | OpenAI (PDF) | OK | — |
| 30 | AEPD: orientaciones sobre IA agéntica del 18/2/2026 | aepd.es | OK | Añadida a Fuentes (faltaba) |
| 31 | Predicciones de Gartner | — | OK (no se usan en el artículo) | — |
| 32 | Consultoría: prototipo en 2 a 4 semanas; la formación incluye construir el primer flujo o agente | src/app/consultoria/page.tsx, src/lib/formaciones.ts | OK | — |
| 33 | Aviso legal con «consulta con tu asesoría legal» (datos personales o decisiones sobre personas) | LIMITES-LEGALES.md | OK | — |

URLs de Fuentes comprobadas: 20 (17 originales + 3 añadidas), todas responden 200.


