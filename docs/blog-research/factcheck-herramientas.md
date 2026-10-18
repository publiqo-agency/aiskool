# Fact-check: artículos de herramientas (C1–C5, C7–C9, E1, E5)

Fecha de verificación: **18/10/2026**. Fuentes consultadas ese día en la web oficial de cada proveedor.

**Cómo se accedió a las páginas bloqueadas.** help.openai.com, openai.com y chatgpt.com devuelven 403 a los bots. Se leyeron así:
- la versión actual, a través del lector r.jina.ai;
- o la copia de Wayback de la misma URL oficial (FAQ de GPTs: 07/10/2026; puestos Premium: 03/10/2026).

Esas URLs existen y abren en un navegador, así que se mantienen en `<Fuentes>`.

**Comprobación técnica.**
- Los 10 `.mdx` compilan con `@mdx-js/mdx` + `remark-gfm`, que es la misma configuración del blog.
- `curl http://localhost:3100/blog/<slug>` da **200** en los 10 artículos.
- Las 34 rutas internas enlazadas dan 200.
- Aviso: `getPost` usa `"use cache"`, así que el servidor de desarrollo puede seguir sirviendo la versión anterior de algún artículo ya visitado (por ejemplo, copilot-outlook-excel-teams-guia) hasta que se reinicie.

**Leyenda.**
- **OK**: coincide con la fuente.
- **Corregido**: se cambió el texto.
- **Eliminado**: se quitó la frase.
- **No verificable**: no hay fuente pública; se dejó matizado.

## Resumen

| Artículo | Afirmaciones revisadas | Corregidas o matizadas | Eliminadas |
|---|---|---|---|
| C1 chatgpt-vs-copilot-vs-claude-vs-gemini | 46 | 8 | 0 |
| C2 precio-microsoft-365-copilot | 38 | 3 | 1 |
| C3 precio-chatgpt-business-enterprise | 36 | 8 | 0 |
| C4 precio-claude-team-enterprise | 42 | 4 | 0 |
| C5 copilot-outlook-excel-teams-guia | 40 | 5 | 0 |
| C7 gpts-personalizados-empresas-ejemplos | 38 | 3 | 0 |
| C8 notebooklm-empresas-casos-de-uso | 42 | 3 | 0 |
| C9 como-hacer-prompts-guia-empleados | 24 | 0 | 0 |
| E5 rag-chatbot-documentos-empresa | 30 | 1 | 0 |
| E1 que-es-un-agente-de-ia | 30 | 2 | 0 |
| **Total** | **366** | **37** | **1** |

### Lo más grave

1. **Retirada de los GPTs mal descrita en C1 y C3.** Los dos artículos decían que solo afectaba a ChatGPT Enterprise, y C3 añadía que «OpenAI no publica la fecha». La [FAQ oficial](https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq) dice: "The transition affects all ChatGPT plans" y "Custom GPTs are scheduled to retire on Dec 11, 2026" (11/02/2027 para los espacios Enterprise con prórroga). El paquete de datos estaba desfasado en este punto.
2. **ChatGPT Business sí tiene máximo de puestos.** C1 decía que no publicaba ninguno. La [FAQ de Business](https://help.openai.com/en/articles/12111915) dice: "Starting on Aug 24, 2026, the maximum is 200 paid Standard and Premium seats". Corregido en C1 y C3.
3. **El precio del puesto Premium de ChatGPT Business es público.** C3 decía que no lo era. Cuesta **100 $/usuario/mes con pago anual y 125 $ con pago mensual** y está disponible desde el 25/08/2026. Añadido a C3. Es el mismo precio que el puesto Premium de Claude Team.
4. **La FAQ de C8 sobre la sincronización con Drive estaba al revés.** La ayuda de Google dice: "Sources imported from Google Drive are auto-updated and will sync every few minutes". Corregido.
5. **La página de privacidad de Microsoft ya no dice que Anthropic queda fuera de la EU Data Boundary.** El dato ahora está en [Anthropic models in Microsoft Online Services](https://learn.microsoft.com/en-us/copilot/microsoft-365/connect-to-ai-subprocessor), que además indica que esos modelos vienen desactivados por defecto en la UE. Fuente cambiada y matiz añadido en C1 y C5.
6. **Errores en el paquete `datos-herramientas-agentes.md`** que conviene corregir allí:
   - la fecha de la página de agentes de Google Cloud es el **2 de abril de 2026**, no el 4 de febrero (el formato de EE. UU. es mes/día);
   - los límites de Gemini Notebook «Plus 200/100, Pro 500/300» son de los planes de consumo de Google AI, no de ediciones de Workspace;
   - la retirada de los GPTs sí tiene fecha pública;
   - Business ya tiene un máximo de 200 puestos y un precio Premium publicado.

### Cumplimiento legal (LIMITES-LEGALES.md)

- No hay «abogado», «equipo legal o jurídico» referido a nosotros, «certificado oficial», «homologado», «acreditado», «FUNDAE», «bonificable», «sello» ni «cumplimiento garantizado».
- «equipo jurídico» y «asesoría jurídica» siempre se refieren al cliente o a ILUNION.
- Ninguno de los 10 artículos es de una categoría normativa, así que no necesitan el `Callout tipo="legal"`. El IVA siempre aparece como «cálculo nuestro», con la recomendación de consultarlo con la asesoría.
- **Eliminado en C2:** «para que la licencia empiece a rendir desde la primera semana». Prometía un resultado nuestro que no figura en `formaciones.ts`.
- **Para que lo decida negocio:** 9 artículos enlazan al «diagnóstico gratuito de 30 minutos». Es coherente con la página /diagnostico («Gratis · 30 minutos»), pero el brief dice «Nunca … «gratis»». Lo he entendido como una regla sobre formación y FUNDAE, y no lo he cambiado. Si la regla es general, hay que cambiarlo en todo el sitio.
- El «gratis» referido a productos de terceros (NotebookLM, Copilot Chat) es un dato del producto y no una oferta nuestra. Correcto.

### Coherencia entre artículos

Los precios y nombres son iguales en C1, C2, C3, C4 y E5 (tabla de costes):
- **Microsoft:** Copilot para empresas, 18,20 € (15,60 € en promoción hasta el 31/12/2026, solo el primer año) o 21,84 € mensual; enterprise, 26,00 €. Todo sin IVA.
- **OpenAI:** ChatGPT Business, 20 $ anual o 25 $ mensual, de 2 a 200 puestos.
- **Anthropic:** Claude Team, 20 $ anual o 25 $ mensual (Premium 100 $ o 125 $), de 2 a 150 puestos; Enterprise, 20 $ por puesto más el uso, desde 20 puestos.
- **Google:** Workspace Business Standard, 13,60 €.
- **Nombres:** se usan «ChatGPT Business», «Gemini Notebook» y la retirada de =COPILOT el 14/09/2026.
- **Fecha de los GPTs:** el 11/12/2026 figura ahora igual en C1, C3, C7 y E5.

---

## C1 · chatgpt-vs-copilot-vs-claude-vs-gemini

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Copilot para empresas: 18,20 € anual (15,60 € en promoción) / 21,84 € mensual, sin IVA, máx. 300 | microsoft.com/es-es/copilot/pricing/business | OK | — |
| Condiciones de la promoción: clientes actuales, compromiso anual, solo el primer año | ídem | OK | — |
| ChatGPT Business 20 $ / 25 $; Claude Team 20 $ / 25 $ | learn.chatgpt.com/docs/pricing · claude.com/pricing | OK | — |
| Workspace Business Standard 13,60 € sin impuestos; Starter 6,80 € | workspace.google.com/intl/es/pricing.html | OK | — |
| Workspace con pago mensual: 16,20 € | ídem (datos del selector Flexible incrustados en la página; no es el texto visible por defecto) | OK, matizado | Se añade «(plan flexible, sin compromiso)» |
| tldr: «todo sin impuestos» | OpenAI no menciona impuestos | Corregido | «sin impuestos (OpenAI no indica si su precio los incluye)» |
| Usuarios de ChatGPT Business: «Desde 2»; «no publica un máximo» | help.openai.com/en/articles/12111915 | Corregido | «De 2 a 200»; máximo de 200 desde el 24/08/2026 |
| Claude Team de 2 a 150; Enterprise desde 20 | claude.com/pricing · support.claude.com 9266767 | OK | — |
| Copilot Chat sin coste; usa la web y el contenido subido o abierto en Outlook y Teams; la licencia de pago añade Graph y acceso prioritario en Word, Excel, PowerPoint y OneNote | learn.microsoft.com … microsoft-365-copilot-overview (14/10/2026) | OK | — |
| Business: SAML SSO, MFA, sin entrenamiento por defecto | learn.chatgpt.com/docs/pricing | OK | — |
| FAQ: Plus y Pro no tienen «sin entrenamiento por defecto» | chatgpt.com/pricing: Free, Go, Plus y Pro dicen "Content is used to train our models — Opt-out available" | Precisado | Redacción más exacta |
| «OpenAI retira los GPTs en ChatGPT Enterprise» | FAQ de retirada: "affects all ChatGPT plans", Dec 11, 2026 | Corregido | Todos los planes, 11/12/2026; enlace a la FAQ |
| NotebookLM → Gemini Notebook; =COPILOT retirada el 14/09/2026 | blog.google 16/07/2026 · support.microsoft.com copilot-function | OK | — |
| FAQ de Excel: «ahora se usa el panel» | copilot-function: "You can continue to use Copilot in Excel through the Copilot pane" | Matizado | «Microsoft remite al panel de Copilot» |
| Funciones de Gemini en Gmail, Sheets y Meet | support.google.com 14355636 / 14218565 / 14754931 | OK | — |
| Starter con «acceso básico» a Gemini; Standard y Plus con Gemini en Gmail, Docs, Sheets, Slides, Drive, Meet y Chat | página de precios de Workspace | OK | — |
| Projects, artifacts en todos los planes, conector de M365 en todos los planes | support.claude.com 9517075 / 17153992 / 15183774 | OK | — |
| Datos de Claude almacenados en EE. UU.; para Europa, Bedrock o Vertex | privacy.claude.com 7996890 · claude.com/regional-compliance | OK (la página también cita Microsoft Foundry, en Europa «coming soon») | — |
| Claude Code incluido en todos los planes de pago | claude.com/pricing (FAQ) | OK | — |
| Residencia de datos de ChatGPT en Europa solo en Enterprise, Edu y la API | learn.chatgpt.com/docs/pricing · openai.com (25/11/2025) | OK | — |
| Copilot no entrena con tus datos; tráfico de la UE dentro de la EUDB | learn.microsoft.com … microsoft-365-copilot-privacy | OK | — |
| Los modelos de Anthropic quedan fuera de la EUDB (con cita a la página de privacidad) | La frase ya no está en esa página; está en connect-to-ai-subprocessor | Corregido | Nueva fuente; añadido «desactivados por defecto en la UE» |
| Gemini no entrena sin permiso; data regions en Standard y Plus; no aplican a Gemini Notebook | privacy hub · data regions (knowledge.workspace.google.com) | OK | — |
| Duración del piloto: «4 a 6 semanas» y más abajo «2 o 3 semanas» | incoherencia interna | Corregido | Unificado en 4 a 6 semanas |
| URLs de `<Fuentes>` | — | Todas 200 | Añadidas 3 fuentes (subprocesador de Anthropic, FAQ de GPTs, FAQ de Business) |

## C2 · precio-microsoft-365-copilot

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Promoción 15,60 €, precio original 18,20 €, mensual 21,84 €, sin IVA | /es-es/copilot/pricing/business | OK | — |
| Empresa Estándar + Copilot: 20,36 € / 24,43 €; Empresa Premium + Copilot: 27,73 € / 33,28 € | ídem | OK | — |
| Enterprise 26,00 € pago anual, sin IVA; precio mensual no publicado | /es-es/copilot/pricing/enterprise | OK (hay un botón «Pagar mensualmente», pero sin importe) | — |
| «El precio real se reflejará en la finalización de la compra» | ídem (nota) | OK | — |
| Copilot Studio 173,30 €/paquete/mes, 25.000 créditos | /es-es/copilot/pricing/copilot-studio | OK | — |
| Copilot Studio «sin IVA» | La nota de IVA solo aparece junto a Microsoft 365 Copilot | Corregido | «la página no indica si incluye IVA»; el cálculo queda como «209,69 € si no lo incluye» |
| Frase inicial: «Microsoft publica … sin IVA» | ídem | Precisado | El IVA se indica en los planes de Microsoft 365 Copilot |
| IVA del 21 %: 18,88 / 22,02 / 26,43 / 24,64 / 29,56 / 33,55 / 40,27 / 31,46 / 209,69 € | recalculado | OK | — |
| Escenarios: 1.872 / 2.184 / 2.443,20 / 15.600 €; con IVA 2.265,12 / 2.642,64 / 2.956,27 / 18.876 € | recalculado | OK | — |
| Pago mensual un 20 % más caro (21,84 frente a 18,20) | recalculado | OK | — |
| Promoción: 1/7–31/12/2026, no válida para pruebas, no combinable, 7 días para cancelar con reembolso prorrateado, Microsoft puede retirarla | página business (notas) | OK | — |
| Prueba gratuita, exige tarjeta, pasa a pago si no se cancela | ídem | OK | — |
| Licencias base válidas (Business y enterprise); E7 incluye Copilot | learn.microsoft.com … licensing (25/09/2026) | OK | — |
| Más de 300 usuarios → enterprise | inferencia a partir de «Para un máximo de 300 usuarios» | OK (inferencia razonable) | — |
| Copilot Chat frente a licencia de pago; renombrado a «Microsoft Copilot» | overview (14/10/2026) · requirements | OK | — |
| Copilot solo muestra datos con al menos permiso de lectura | privacy | OK | — |
| «la licencia empiece a rendir desde la primera semana» (promesa nuestra) | no figura en formaciones.ts | Eliminado | — |
| URLs de `<Fuentes>` | — | Todas 200 (licensing y privacy redirigen a /microsoft-365/copilot/…) | — |

## C3 · precio-chatgpt-business-enterprise

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Free 0 $, Go 8 $, Plus 20 $, Pro desde 100 $ (100/200/500) | learn.chatgpt.com/docs/pricing · chatgpt.com/pricing | OK | — |
| Business 20 $ anual / 25 $ mensual, desde 2 usuarios; en USD; sin mención a impuestos | ídem · FAQ 12111915 | OK | Añadido «pueden variar según el país y la moneda» |
| Business con máximo de puestos | FAQ 12111915: 200 desde el 24/08/2026 | Corregido | Tablas: «De 2 a 200» |
| ChatGPT Team pasó a llamarse Business | FAQ 12111915: "renamed … on August 29, 2025" | Precisado | Fecha añadida |
| Puesto Premium: «precio no publicado, no lo incluimos» | openai.com/index/premium-seats-chatgpt-business (actualizado el 25/08/2026) · FAQ 12111915 | Corregido | 100 $ anual / 125 $ mensual, 5 veces más uso, sin límite de 5 horas; fila nueva en la tabla |
| IVA: 24,20 $ / 30,25 $ | recalculado | OK | — |
| Enterprise: SCIM, EKM, analítica de usuarios, verificación de dominio, RBAC, controles de retención y residencia | learn.chatgpt.com/docs/pricing | OK | — |
| Límites: Enterprise «con precio flexible, sin límites fijos» | ídem: sin precio flexible, "the same per-seat usage limits as Plus" | Corregido | Se añaden los dos casos |
| Asistentes a medida: «Business: GPTs / Enterprise: GPTs en retirada» | FAQ de retirada (todos los planes) | Corregido | Ambos: «GPTs en retirada (11/12/2026)» |
| FAQ: «OpenAI no publica la fecha exacta de retirada» | FAQ: Dec 11, 2026; Feb 11, 2027 con prórroga | Corregido | Fechas añadidas |
| Migración: instrucciones → skill, archivos copiados, apps, acciones no transferidas | FAQ · migrate-custom-gpts | OK | — |
| FAQ: Plus y Pro sin «sin entrenamiento» | chatgpt.com/pricing ("Opt-out available") | Precisado | — |
| Residencia de datos ampliada en noviembre de 2025 a Enterprise, Edu y la API | openai.com (25/11/2025; RSS y lector) | OK | — |
| Costes por equipo: 480 / 2.400 / 6.000 / 12.000 $ anual; 600 / 3.000 / 7.500 / 15.000 $ mensual; diferencias; +25 %; piloto de 3 meses = 750 $ | recalculado | OK | — |
| BBVA, más de 2.900 GPTs en 5 meses; Promega, 135 h en 6 meses; Philips, 70.000 empleados (13/11/2025) | PDFs de OpenAI · openai.com/index/philips | OK | — |
| URLs de `<Fuentes>` | — | cdn.openai.com y learn.chatgpt.com: 200. openai.com y help.openai.com: 403 a bots, contenido verificado | Añadidas la FAQ de retirada y la FAQ de Business |

## C4 · precio-claude-team-enterprise

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Free 0 $; Pro 17 $ (200 $ por adelantado) / 20 $; Max 100 $ / 200 $, solo mensual | claude.com/pricing · support 11049741 | OK | — |
| Team estándar 20 $ / 25 $; Premium 100 $ / 125 $; de 2 a 150; combinables; 5 veces más uso | claude.com/pricing · support 9266767 | OK | — |
| Enterprise 20 $/puesto anual + uso a tarifas de API; mínimo 20 (50 con ventas); USD en autoservicio, varias monedas con ventas; créditos por adelantado o factura mensual | support 9797531 (01/09/2026) | OK | — |
| Impuestos no incluidos; precio local en claude.ai/upgrade | claude.com/pricing · support 9266767 | OK | — |
| «cinco planes» | la página también lista Education | Precisado | Se menciona el plan educativo |
| Team: SSO, captura de dominio, JIT, roles, conectores, Claude Code, Cowork, créditos de API, prepago al llegar al límite | support 9266767 | OK (la página de precios no marca la captura de dominio para Team; manda el artículo de ayuda) | — |
| Contexto de 200.000 tokens en Team | support 9266767 dice 200K; claude.com/pricing dice "Up to 1M, varies by model" | Matizado | Se atribuye a la ayuda y se cita la otra cifra |
| Enterprise: SCIM, auditoría, Compliance API, Analytics API, claves gestionadas por el cliente, inferencia solo en EE. UU., HIPAA, retención configurable (mínimo 30 días) | support 9797531 · privacy 10440198 | OK | — |
| Precios de la API: Fable 5.1 10/50 $; Opus 5.5 4/20 $; Sonnet 5.5 2/10 $; Haiku 5.5 0,10/0,50 $ (≤100K) | platform.claude.com pricing | OK | — |
| Ejemplos: 480 / 2.400 / 3.000 / 4.320 / 4.800 $; consumo de 9 $ por persona, 29 $, 580 $ | recalculado | OK | — |
| IVA: 24,20 $ / 30,25 $ | recalculado | OK | — |
| Free, Pro y Max entrenan si el ajuste está activado; retención de 5 años / 30 días; Team y Enterprise sin entrenamiento | code.claude.com data-usage · anthropic.com consumer terms · privacy 7996868 | OK | — |
| N26, «up to 70 %»; Qonto, «3X less time» | claude.com/customers | OK | — |
| Pictet «500» | "Trained more than 500 people…" | Corregido | «+500» |
| URLs de `<Fuentes>` | — | Todas 200 | — |

## C5 · copilot-outlook-excel-teams-guia

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Tabla de licencias (Copilot Chat, acceso estándar o prioritario, agentes de pago por uso, Graph y Work IQ) | overview (14/10/2026) | OK | — |
| Excel: tablas, gráficos, tablas dinámicas y fórmulas; «contenido editable» (24/09/2026) | support.microsoft.com get-started | OK | — |
| Columnas con fórmula, BUSCARX, explicar fórmulas, tendencias y valores atípicos | data-insights (18/06/2026) | OK | — |
| Modelos de OpenAI y de Anthropic; el administrador debe habilitar Anthropic como subencargado | Excel FAQ en-au (12/10/2026) | OK | Añadido que en la UE vienen desactivados por defecto y fuera de la EUDB (connect-to-ai-subprocessor) |
| Agente Analyst: Excel, CSV, estadística, tendencias, gráficos | Analyst (17/12/2025) | OK | — |
| =COPILOT retirada el 14/09/2026; «las hojas tienen que rehacerse» | copilot-function: los resultados quedan "as cached values"; al recalcular, "#NAME?" | Corregido | Explicado (dos sitios); era una función en vista previa |
| Outlook: resumen con puntos clave arriba y citas numeradas; borrador con longitud y tono; coaching de tono, sentimiento y claridad | páginas de soporte de Outlook | OK | — |
| Buzones compartidos y delegados admitidos (FAQ y cuerpo) | Los requisitos (05/10/2026) lo admiten; la FAQ de Outlook (08/2026) dice solo el buzón principal | Corregido | Se explica que las páginas de Microsoft se contradicen; en lo que coinciden es en que no funciona en buzones de grupo |
| Teams: quién dijo qué, tareas, durante o después; la transcripción no es necesaria para activarlo pero sí después; aviso si llegas más de 5 minutos tarde; no funciona en reuniones de fuera | catch-up (23/12/2025) | OK | — |
| Facilitator: notas en tiempo real, decisiones, agenda y tiempo; licencia de Copilot; solo reuniones programadas | facilitator (13/08/2026) | OK | — |
| Requisitos: Entra ID, Exchange Online, OneDrive, cookies de terceros, cloud.microsoft, Copilot License Details, renombrado a copilot.cloud.microsoft | requirements (05/10/2026) | OK | — |
| Recursos sin coste: galería de prompts y kit de formación descargable | overview («Copilot Prompt Gallery», «Copilot Trainer Kit») | OK | — |
| URLs de `<Fuentes>` | — | Todas 200 (requirements redirige a microsoft-copilot-requirements) | Añadida la fuente del subprocesador de Anthropic |

## C7 · gpts-personalizados-empresas-ejemplos

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Retirada el 11/12/2026 en todos los planes; 11/02/2027 con prórroga aprobada | help.openai.com 20001519 (Wayback del 07/10/2026 y versión actual vía lector) | OK | — |
| Calendario Enterprise: 11/09, 22/09 (objetivo), 26/10 (fin de la creación, se pueden seguir editando), 11/12, 11/02/2027; «sujeto a cambios» | ídem | OK | — |
| Migrar desde «My GPTs» con «Migrate to plugin»; última versión publicada; creador o administrador | ídem | OK | — |
| Tabla de migración: instrucciones → skill, archivos, apps (volver a autorizar), acciones no, modelo no, el plugin empieza privado, las conversaciones se conservan, el GPT queda en solo lectura | ídem · migrate-custom-gpts | OK | — |
| GPTs de terceros: no puedes migrarlos; el acceso no da acceso al sustituto | ídem | OK | — |
| Definición de plugin (cita) | learn.chatgpt.com/docs/migrate-custom-gpts | OK | — |
| Plugins: uso automático, mención @, tareas programadas y eventos | help.openai.com 20001256 (versión actual vía lector) | OK | — |
| Skills de Claude: carpetas, Markdown, sin programar las sencillas, estándar abierto; distribución a toda la organización (grupos solo en Enterprise) | support.claude.com 12512176 / 13119606 | OK | — |
| Cita de Gems → skills | support.google.com/gemini/answer/18560919 | OK | — |
| «cuentas de trabajo en 2027» | ídem: marzo de 2027 (Workspace empresa), junio de 2027 (educación) | Precisado | Fechas exactas; las skills «se podrán compartir» |
| Ejemplo de Agent Builder: «corrige textos según las normas» | agent-builder: "writing or presentation coaching tailored to organizational standards" | Corregido | «asesora en redacción o presentaciones…»; «acogida para un equipo» |
| BBVA, más de 2.900 GPTs | PDF AI in the Enterprise | OK | — |
| Cita de gpts-and-sharing | learn.chatgpt.com | OK | — |
| URLs de `<Fuentes>` | — | help.openai.com: 403 a bots (contenido verificado); el resto, 200 | — |

## C8 · notebooklm-empresas-casos-de-uso

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Cambio de nombre el 16/07/2026, cita «same standalone product», sincronización con la app de Gemini | blog.google | OK | — |
| Los administradores no tienen que hacer nada; redirecciones automáticas | workspaceupdates (16/07/2026) | OK | — |
| Más de 30 M de personas y más de 600.000 organizaciones; «interactive onboarding materials» | blog.google | OK | — |
| Cita «Chat with your notebook…» | support.google.com/notebooklm/answer/16164461 | OK | — |
| 500.000 palabras o 200 MB por fuente; tipos de fuente; Slides hasta 100 | gemininotebook 16269187 / 16215270 | OK | — |
| Formatos de resumen de audio; el modo interactivo solo en inglés | gemininotebook 16212820 | OK | — |
| Informes, fichas, cuestionarios, mapas y vídeo con cupos diarios | gemininotebook 16337734 | OK | — |
| «ejecutar código en los planes superiores» | blog: solo Google AI Ultra y Workspace con AI Ultra Access o AI Expanded Access | Precisado | Requisitos exactos |
| Tabla de planes: personal 100/50; Starter 100/50, 50 chats, 3 audios; Standard y Plus 500/300, 500 chats, 20 audios | gemininotebook 16337734 / 16213268 | OK | — |
| Privacidad: personal (entrena o revisa solo si envías comentarios) frente a Workspace (sin revisión ni entrenamiento) | gemininotebook 16213268 | OK | — |
| Gemini Notebook for Enterprise (proyecto de GCP, regionalización) | ídem | OK | — |
| Copia de Drive, cita sobre data regions, sin ISO/SOC/FedRAMP «at this stage», activación por OU o grupo | privacy hub (06/10/2026) | OK | — |
| FAQ: «¿Se actualiza solo desde Drive? No lo des por hecho» | gemininotebook 16215270: "auto-updated and will sync every few minutes" | Corregido | Sí se sincroniza; la copia no sigue los permisos de Drive |
| Más de 80 idiomas, español de España, idioma de salida | gemininotebook 16261963 | OK | Título de la fuente corregido («Change output language in Gemini Notebook») |
| Casos: Rivian, Sonata Design, Transcom, Freshfields, BBVA, Infoxchange (de más de una semana a medio día), Fingerpaint | cloud.google.com/transform/101… (22/04/2026) | OK | — |
| URLs de `<Fuentes>` | — | Todas 200 | — |

## C9 · como-hacer-prompts-guia-empleados

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| «Always remember to include a verb…»; 21 frente a menos de 9 palabras; Persona/Task/Context/Format | PDF Google Workspace (09/2024) | OK | — |
| «Perfil ficticio», «Usa un lenguaje natural», «Haz peticiones específicas e itera el proceso» | workspace.google.com/intl/es/resources/ai/writing-effective-prompts | OK | — |
| «create one prompt per instruction» (13/10/2026) | ai.google.dev prompting-strategies | OK | — |
| Identity/Instructions/Examples/Context; contexto al final; cita «senior co-worker» | developers.openai.com prompt-engineering | OK | — |
| «programar el modelo con instrucciones o ejemplos» | platform.openai.com/docs/concepts (redirige a developers.openai.com) | OK | — |
| Empleado brillante pero nuevo, regla de oro, motivación, «one of the most reliable ways», 3 a 5 ejemplos, XML tags, rol en una frase, hasta un 30 % | platform.claude.com best practices | OK | — |
| Admitir incertidumbre «reduce mucho» la información falsa | reduce-hallucinations ("drastically reduce false information") | OK | — |
| Copilot solo muestra datos con permiso de lectura | privacy | OK | — |
| URLs de `<Fuentes>` | — | Todas 200 | — |

## E5 · rag-chatbot-documentos-empresa

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Definiciones de RAG (Anthropic, Google Cloud en español) | anthropic.com contextual-retrieval · cloud.google.com | OK | — |
| 49 % / 67 % menos fallos de recuperación | contextual-retrieval (19/09/2024) | OK | — |
| Lewis et al. 2020, Facebook AI Research | arXiv 2005.11401 | OK | — |
| Herramientas jurídicas con RAG alucinan entre el 17 y el 33 % | arXiv 2405.20362 (Stanford, 2024) | OK | — |
| OpenAI cierra el fine-tuning a nuevos usuarios | developers.openai.com model-optimization: "no longer accessible to new users" | OK, sin fuente | Enlace y fuente añadidos |
| Tabla sin código (50/300 fuentes, Projects con RAG hasta 10 veces, permisos de Copilot, GPTs retirados el 11/12/2026) | gemininotebook 16337734 · support.claude.com 9517075 · privacy · FAQ de GPTs | OK | — |
| Morgan Stanley: 98 %; del 20 % al 80 % | PDF AI in the Enterprise | OK | — |
| Precios (Workspace, Copilot, ChatGPT, Claude, API Sonnet 5.5) | páginas oficiales | OK, coherentes con C1–C4 | — |
| Unos 20 $ al mes en tokens (5 M × 2 $ + 1 M × 10 $) | recalculado | OK | — |
| Prototipo en 2 a 4 semanas (nuestro) | src/app/consultoria/page.tsx | OK | — |
| AEPD (18/02/2026, «envenenamiento de memoria y RAG»), OWASP 2026 (inyección de prompts como riesgo n.º 1) | aepd.es · genai.owasp.org | OK | — |
| URLs de `<Fuentes>` | — | Todas 200 | Añadida la fuente de fine-tuning |

## E1 · que-es-un-agente-de-ia

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Definiciones de Anthropic, OpenAI, Google Cloud, IBM y Microsoft (citas literales) | páginas respectivas | OK | — |
| Tres componentes de OpenAI, tres criterios, cita «deterministic solution», acciones de alto riesgo con ejemplos, consejo multiagente | PDF practical guide to building agents | OK | — |
| Workflows con «predefined code paths»; «simplest solution possible» | building-effective-agents (19/12/2024) | OK | — |
| ILUNION, «Litigator», unos 40 segundos, más de 7.000 h al año (01/07/2025) | news.microsoft.com | OK | — |
| Serveo, 733 agentes con Agent Builder, Copilot Studio y M365 | news.microsoft.com (15/07/2026) | OK | — |
| Serveo, «hasta un 80 % en tareas concretas» | ídem: "determinados procesos críticos", dentro del programa de adopción de Copilot | Precisado | Redacción ajustada |
| Qonto «3X less time»; Klarna, dos tercios de los chats, de 11 a 2 minutos | claude.com/customers/qonto · PDF de OpenAI | OK | — |
| OWASP 2026 (03/08/2026); NCSC «may never be totally mitigated» (08/12/2025); AEPD (02/2026) | genai.owasp.org · ncsc.gov.uk · aepd.es | OK | — |
| Página de Google Cloud «actualizada el 04/02/2026» | la versión española dice «Última actualización: 02/04/2026» | Corregido | 02/04/2026 |
| URLs de `<Fuentes>` | — | Todas 200 | — |
