# Datos verificados: herramientas de IA corporativa y agentes

Paquete de datos para los artículos **C1–C9, E1–E6, B4 y B5** (ver `temas.md`).
**Fecha de consulta de todas las fuentes: 2026-10-18.** Solo fuentes oficiales del proveedor (o la empresa cliente o el organismo que define el concepto). Cada dato lleva la cita literal en su idioma original, la URL exacta y el organismo. Las citas se extrajeron del texto de la página descargada ese día.

## Cómo usar este documento

- **Precios:** se copian tal cual, con moneda, periodo y "sin IVA" cuando la fuente lo dice. Ningún proveedor publica el IVA español; si un artículo calcula precios con IVA (21 %), debe decir que el cálculo es nuestro.
- **"Paráfrasis":** el dato está verificado en la URL, pero la frase no es literal. Antes de entrecomillar, hay que copiar la frase original de esa URL.
- **Nombres:** varios productos han cambiado de nombre en 2026. Hay que usar los nombres de la sección 0 y no los de artículos antiguos.

---

## 0. Cambios recientes que invalidan contenido antiguo (leer antes de escribir)

| Cambio | Cita literal | URL | Organismo / fecha |
|---|---|---|---|
| Los **GPTs personalizados se están retirando** en ChatGPT Enterprise y se sustituyen por *plugins* (con *skills* y *apps*). | "Custom GPTs in ChatGPT Enterprise are being retired." / "We're transitioning custom GPTs to plugins. Use the milestones below to plan your migration before custom GPTs are retired." | https://learn.chatgpt.com/docs/build-plugins · https://learn.chatgpt.com/docs/migrate-custom-gpts | OpenAI · sin fecha (no publica la fecha de retirada) |
| **NotebookLM ahora se llama "Gemini Notebook"**. | "We're renaming NotebookLM to Gemini Notebook. It's the same standalone product…" | https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/ | Google · 16-07-2026 |
| **Gems → skills** en cuentas personales de Google. | "Starting in November 2026, Gems will go away on personal Google accounts and automatically transition to skills." | https://support.google.com/gemini/answer/15146780?hl=en | Google · sin fecha |
| **Función =COPILOT() de Excel retirada.** | "Starting September 14, 2026, the COPILOT function is no longer available in Microsoft Excel." | https://support.microsoft.com/en-us/excel/functions/copilot-function | Microsoft · ms.date 14-09-2026 |
| **"Microsoft 365 Copilot" pasa a llamarse "Microsoft Copilot"** en la documentación de Learn. Las páginas de precios de España siguen diciendo "Microsoft 365 Copilot" y "Microsoft 365 Copilot para empresas". | (paráfrasis de la nota inicial) | https://learn.microsoft.com/en-us/copilot/microsoft-365/enterprise-data-protection | Microsoft · act. 18-08-2026 |
| **Modelos actuales** (no usar nombres ni precios de 2024-2025). OpenAI: GPT-6 Astra, GPT-6.1 Sol, GPT-6 Luna. Anthropic: Claude Fable 5.1, Opus 5.5, Sonnet 5.5, Haiku 5.5. Google: Gemini 4 Argon, Gemini 3.8 Flash, Gemini 3.5 Flash-Lite. | Ver sección 11 | ver sección 11 | — |
| **ChatGPT Team ahora se llama ChatGPT Business.** | Tarjeta de precios "Business … $20 / user / month" | https://learn.chatgpt.com/docs/pricing | OpenAI |

---

## 1. Comparativa general de planes para empresa (C1, B5)

### 1.1 Planes de entrada para empresa

| | **Microsoft 365 Copilot para empresas** | **ChatGPT Business** | **Claude Team (puesto estándar)** | **Google Workspace Business Standard (Gemini)** |
|---|---|---|---|---|
| Precio anual | **15,60 €/usuario/mes** promocional (precio original 18,20 €), sin IVA | **$20/usuario/mes** (USD) | **$20/puesto/mes** (USD), sin impuestos | **13,60 €/usuario/mes**, sin impuestos |
| Precio mensual | **21,84 €/usuario/mes** | **$25/usuario/mes** | **$25/puesto/mes** | 16,20 € (plan flexible; dato sacado del código de la página, ver sección 5) |
| ¿Es un complemento? | Sí: requiere una licencia de Microsoft 365 aparte | No: es el producto completo | No | No: incluye correo, Drive, etc. |
| Mínimo / máximo de usuarios | Máx. **300**; mínimo no publicado | Mín. **2** ("2+ users") | Mín. **2**, máx. **150** | Máx. **300** (planes Business) |
| Moneda en España | EUR | Solo USD publicado (no verificado en EUR) | USD (se cobra en moneda local "where supported") | EUR |
| ¿Entrena con tus datos? | No | No por defecto | No por defecto | No sin permiso |
| SSO | Sí (Entra ID) | SAML SSO | Sí | Sí |
| Residencia de datos en la UE | EU Data Boundary (los modelos de Anthropic quedan excluidos) | Solo en Enterprise/Edu/API | No en claude.ai ni en la API directa (solo vía Bedrock o Vertex) | Data regions (Business Standard y Plus); no cubre Gemini Notebook |

### 1.2 Planes enterprise

| | Microsoft 365 Copilot (enterprise) | ChatGPT Enterprise | Claude Enterprise | Google Workspace Enterprise |
|---|---|---|---|---|
| Precio | **26,00 €/usuario/mes, pago anual**, sin IVA (USD: $30.00) | "Contact sales" | "US$20/seat/month, billed annually, 20 seat minimum" **+ uso a tarifas de API** | "Contactar con Ventas" |
| Mínimo | No publicado | No publicado | **20** puestos (autoservicio) / **50** (con ventas) | "no tienen un número mínimo ni máximo de usuarios" |
| Extras clave | Work IQ, agentes Researcher/Analyst/Facilitator | SCIM, EKM, RBAC, Compliance API, controles de retención y residencia | SCIM, audit logs, Compliance API, retención personalizada, HIPAA-ready | Enterprise Data Regions, Assured Controls |

### 1.3 Funciones e integraciones clave

| | Copilot | ChatGPT | Claude | Gemini |
|---|---|---|---|---|
| Dónde vive | Dentro de Word, Excel, PowerPoint, Outlook y Teams | App propia + conectores ("apps") | App propia + 973 conectores (incluye M365, Google Workspace, Slack) | Dentro de Gmail, Docs, Sheets, Meet, Drive y Chat |
| Asistentes personalizados | Agentes (Agent Builder / Copilot Studio) | GPTs (en retirada) → plugins / skills | Projects, Skills | Gems (→ skills), Gemini Notebook |
| Agentes / investigación | Researcher, Analyst, Facilitator | Agentes, ChatGPT Work / Codex | Claude Code, Cowork | Deep Research |

Las fuentes de cada celda están en las secciones 2 a 5.

---

## 2. Microsoft 365 Copilot (C2, C5)

### 2.1 Precios en España (sin IVA)

| Dato | Cita literal | URL |
|---|---|---|
| Copilot para empresas, pago anual | "Originally starting from 18,20 € now starting from 15,60 € … usuario al mes, pagado anualmente (Suscripción anual: se renueva automáticamente) … El precio no incluye IVA." | https://www.microsoft.com/es-es/copilot/pricing/business |
| Copilot para empresas, pago mensual | "21,84 € por usuario al mes (Suscripción mensual: se renueva automáticamente) … El precio no incluye IVA." | ídem |
| Condiciones de la promoción | "Esta oferta de descuento está disponible entre el 1 de julio de 2026 y el 31 de diciembre de 2026. El complemento Microsoft 365 Copilot para empresas solo está disponible para los clientes actuales de Microsoft 365 con un plan para empresas válido. … Es necesario un compromiso anual y los precios promocionales se aplican solamente al primer año." | ídem (nota [*]) |
| Requiere licencia base; máximo 300 | "Se requiere una licencia aparte para un plan de Microsoft 365 válido para comprar Microsoft 365 Copilot. Para un máximo de 300 usuarios." | ídem (nota [1]) |
| Paquete Empresa Estándar + Copilot | "Microsoft 365 Empresa Estándar y Microsoft 365 Copilot para empresas 20,36 € usuario al mes, pagado anualmente … El precio no incluye IVA." (mensual: 24,43 €, según el subagente; no lo verifiqué yo) | ídem |
| Paquete Empresa Premium + Copilot | "Microsoft 365 Empresa Premium y Microsoft 365 Copilot para empresas 27,73 € usuario al mes, pagado anualmente" (mensual: 33,28 €, según el subagente) | ídem |
| Microsoft 365 Copilot (enterprise) | "26,00 € usuario al mes, pagado anualmente (Suscripción anual: se renueva automáticamente) … El precio no incluye IVA. … Se requiere una licencia aparte para un plan de Microsoft 365 válido." | https://www.microsoft.com/es-es/copilot/pricing/enterprise |
| Copilot Chat gratuito | "Consigue un chat AI seguro y preparado para empresas, disponible sin coste adicional para todos los usuarios de cuentas Microsoft Entra con una suscripción a Microsoft 365 elegible. … Se requiere una suscripción a Azure para utilizar agentes." | ídem |
| EE. UU. (USD) | Copilot Business: $18.00 anual (promoción; antes $21.00) / $25.20 mensual. Microsoft 365 Copilot: **$30.00/usuario/mes, pago anual** (paráfrasis, verificado por el subagente) | https://www.microsoft.com/en-us/copilot/pricing/business · https://www.microsoft.com/en-us/copilot/pricing/enterprise |

**Licencias base válidas** (paráfrasis): Copilot Business requiere Microsoft 365 Business Basic, Standard o Premium, Apps for Business o Teams Essentials. El Copilot enterprise admite, entre otras, Microsoft 365 E3, E5 y F1/F3 y Office 365 E1, E3 y E5. Microsoft 365 E7 ya incluye Copilot. Fuente: https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-licensing (ms.date 25-09-2026).

### 2.2 Copilot en Outlook, Excel y Teams (C5)

| App | Función | Cita literal | URL (fecha) |
|---|---|---|---|
| Outlook | Resumir hilos | "Copilot will scan the thread to look for key points and create a summary for you. The summary will appear at the top of the email and may also include numbered citations…" | https://support.microsoft.com/en-us/outlook/copilot-pages/summarize-an-email-thread-with-copilot-in-outlook (ms.date 24-04-2026) |
| Outlook | Coaching | "Coaching by Copilot: Provides feedback on email drafts by suggesting improvements for tone, sentiment, and clarity." | https://support.microsoft.com/en-us/outlook/frequently-asked-questions-about-copilot-in-outlook ("Last updated: August 2026") |
| Outlook | Redactar | Paráfrasis: "Draft with Copilot" genera un borrador a partir de una instrucción y permite ajustar longitud y tono. | https://support.microsoft.com/en-us/outlook/copilot-pages/draft-an-email-message-with-copilot-in-outlook (ms.date 29-06-2026) |
| Outlook | Límites | Paráfrasis: solo funciona en el buzón principal, no en buzones compartidos, de grupo o de archivo, ni con correo cifrado S/MIME o de doble clave. | FAQ de Outlook (arriba) |
| Teams | Reuniones | "Copilot summarizes key discussion points, including who spoke and what they said. It also suggests action items and answers any questions you have, in real time during or after a meeting." | https://support.microsoft.com/en-us/teams/copilot/catch-up-on-meetings-with-microsoft-365-copilot-in-teams (ms.date 23-12-2025) |
| Teams | Transcripción | "Transcription isn't required for turning on Copilot in a meeting. However, to prompt Copilot about the meeting or see Copilot's conversation history after the meeting ends, make sure to turn on live transcription during the meeting." | ídem |
| Teams | Llegar tarde | "If you join a meeting more than 5 minutes after it started and Copilot is active, Copilot will send a notification offering to catch you up." | ídem |
| Teams | Límite | "Copilot won't work in meetings that are hosted outside the participant's organization." | ídem |
| Teams | Agente Facilitator | Paráfrasis: toma notas en tiempo real, resume decisiones y preguntas abiertas y controla la agenda y el tiempo. Requiere licencia de Copilot y solo funciona en reuniones programadas. | https://support.microsoft.com/en-us/teams/copilot/facilitator-in-microsoft-teams-meetings (ms.date 13-08-2026) |
| Excel | Construir y editar libros | "Copilot uses Excel tools like tables, charts, PivotTables, and formulas to complete your requests. … Your content stays editable, and you're in control of everything that's modified." | https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel (ms.date 24-09-2026) |
| Excel | Modelos | Paráfrasis: se puede editar con modelos Claude (Anthropic) o GPT (OpenAI). Para usar Claude, el administrador debe habilitar Anthropic como subencargado. | https://support.microsoft.com/en-au/excel/copilot/frequently-asked-questions-about-copilot-in-excel (ms.date 12-10-2026) |
| Excel | Fórmulas | Paráfrasis: sugiere columnas con fórmula y fórmulas de una celda (por ejemplo, XLOOKUP) y explica fórmulas existentes. | https://support.microsoft.com/en-us/excel/copilot/data-insights-with-copilot-in-excel (ms.date 18-06-2026) |
| Excel | Función COPILOT | Retirada desde el 14-09-2026 (ver sección 0). | ídem sección 0 |
| Copilot | Agente Analyst | Paráfrasis: analiza archivos Excel, CSV y otros (estadística, tendencias, valores atípicos, gráficos). | https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-analyst-in-microsoft-365-copilot (ms.date 17-12-2025) |

### 2.3 Privacidad de Microsoft 365 Copilot

Fuente: https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy (Microsoft · act. 08-10-2026)

- **No se entrena con tus datos:** "Prompts, responses, and data accessed through Microsoft Graph aren't used to train foundation LLMs, including those used by Microsoft Copilot."
- **Permisos:** "Microsoft Copilot only surfaces organizational data to which individual users have at least view permissions."
- **EU Data Boundary:** "For European Union (EU) users, we have additional safeguards to comply with the EU Data Boundary. EU traffic stays within the EU Data Boundary while worldwide traffic can be sent to the EU and other countries or regions for LLM processing."
- **Excepción con Anthropic:** "Models provided by Anthropic as a subprocessor are currently excluded from the EU Data Boundary."
- **Retención** (paráfrasis): se guarda el historial de interacciones (instrucción, respuesta y citas). El administrador lo gestiona con Purview (búsqueda y políticas de retención) y cada usuario puede borrarlo desde My Account.
- **Búsquedas web** (paráfrasis): pasan por Bing, donde Microsoft actúa como responsable independiente, fuera del EU Data Boundary. Fuente: https://learn.microsoft.com/en-us/copilot/microsoft-365/enterprise-data-protection
- **Residencia en España** (paráfrasis): España figura entre las regiones de Advanced Data Residency. Fuente: https://learn.microsoft.com/en-us/microsoft-365/enterprise/m365-dr-services-data-location (act. 08-10-2026)

### 2.4 Copilot Studio (agentes)

- **Definición de agente (Microsoft):** "An agent is an AI assistant that handles conversations and completes tasks. It follows the instructions you give it, draws on the knowledge sources you connect, and uses tools to take action—reasoning through a request and deciding the best next step based on its instructions and context." Fuente: https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio (ms.date 25-09-2026)
- **Precio en España:** "Copilot Studio se vende como una licencia para todo el inquilino que incluye paquetes de capacidad de créditos de Copilot de 25 000 créditos de Copilot cada uno, con un precio de 173,30 € /paquete/mes." Fuente: https://www.microsoft.com/es-es/copilot/pricing/copilot-studio (en EE. UU., $200.00 por paquete y mes, según https://www.microsoft.com/en-us/copilot/pricing/copilot-studio)
- **Pago por uso** (paráfrasis): 0,01 USD por crédito, o 0,0088 EUR en la región spaincentral. Fuente: API oficial de precios de Azure (prices.azure.com). Es una fuente técnica; antes de publicar, contrastar con https://azure.microsoft.com/en-us/pricing/details/copilot-studio/
- **Créditos por acción** (paráfrasis): respuesta clásica, 1; respuesta generativa, 2; acción de agente, 5; grounding en datos del tenant, 10; 100 acciones de flujo, 13. Fuente: https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management (act. 15-10-2026)

---

## 3. ChatGPT Business / Enterprise (C3, B4, C7)

### 3.1 Precios

Fuente: https://learn.chatgpt.com/docs/pricing (OpenAI, documentación oficial de ChatGPT Work/Codex; sin fecha, contenido de octubre de 2026). **chatgpt.com/pricing devolvió 403** y no pude contrastarla.

| Plan | Cita literal |
|---|---|
| Free | `price="$0" interval="/month"` |
| Go | `price="$8" interval="/month"` |
| Plus | `price="$20" interval="/month"` |
| Pro | "Plans at $100, $200, or $500 USD per month" |
| **Business** | `price="$20" interval="/ user / month*"` — "*2+ users, billed annually. $25 per user per month when billed monthly." |
| **Enterprise & Edu** | Sin precio · `ctaLabel="Contact sales"` |

- **Funciones de Business:** "A secure, dedicated workspace with essential admin controls, SAML SSO, and MFA" / "No training on your business data by default."
- **Funciones de Enterprise:** "Enterprise-level security and controls, including SCIM, EKM, user analytics, domain verification, and role-based access control" / "Data retention and data residency controls".
- **Puestos Premium en Business:** "Premium seats are now available on ChatGPT Business, with 5x more usage, no five-hour usage limit, and flexible seat options for every teammate." Fuente: https://openai.com/index/premium-seats-chatgpt-business (10-08-2026; texto tomado del RSS oficial, precio no verificado).
- **Moneda:** solo USD. No hay precio en EUR ni mención al IVA en la fuente.

### 3.2 Privacidad por plan (B4)

| Plan | ¿Entrena con tus datos? | Cita literal | URL |
|---|---|---|---|
| Business / Enterprise / Edu | No por defecto | "Business, Enterprise, and Edu workspace data is encrypted in transit and at rest and is not used to train OpenAI models by default." | https://learn.chatgpt.com (página "ChatGPT Work cloud security", exportación oficial de la documentación) |
| Enterprise | No por defecto | "OpenAI does not train on ChatGPT Enterprise data by default." | https://learn.chatgpt.com/docs/enterprise/chatgpt-space |
| API | No (desde el 1-3-2023) | "As of March 1, 2023, data sent to the OpenAI API is not used to train or improve OpenAI models (unless you explicitly opt in to share data with us)." | https://developers.openai.com/api/docs/guides/your-data |
| API: retención | 30 días de registros de abuso | "abuse monitoring logs are generated for all API feature usage and retained for up to 30 days, unless longer retention is required by law…" | ídem |
| Plus / Pro (tabla comparativa) | Marcado "unavailable" en la fila "No training on API or business data by default" | fila de la tabla: `plus: "unavailable", pro: "unavailable", business: "available", enterprise: "available"` | https://learn.chatgpt.com/docs/pricing |
| Free / Plus | **No verificado:** que entrenan por defecto salvo opt-out. help.openai.com dio 403. | — | — |

**Residencia de datos en Europa:**
- **API:** región "Europe (EEA + Switzerland)" con endpoint `eu.api.openai.com`. "Data residency endpoints are charged a 10% uplift for models released on or after March 5, 2026, that are eligible for data residency." Fuente: https://developers.openai.com/api/docs/guides/your-data
- **ChatGPT Enterprise/Edu:** "OpenAI expands data residency for ChatGPT Enterprise, ChatGPT Edu, and the API Platform, enabling eligible customers to store data at rest in-region." Fuente: https://openai.com/index/expanding-data-residency-access-to-business-customers-worldwide (25-11-2025; entradilla del RSS oficial). Lanzamiento en Europa: https://openai.com/index/introducing-data-residency-in-europe (05-02-2025).
- La tarjeta de Business no incluye controles de residencia; solo la de Enterprise & Edu ("Data retention and data residency controls").

### 3.3 GPTs personalizados (C7)

> **Aviso para C7:** OpenAI está retirando los GPTs personalizados y sustituyéndolos por *plugins* (ver sección 0). Recomiendo replantear el artículo como "de GPTs a plugins y skills".

- **Compartir:** "Control who can create GPTs and whether they can be shared with specific people, groups, or the entire workspace."
- **Integraciones:** "GPT builders can use either connected apps or custom actions, but not both in the same GPT."
- **Dominios:** "Restrict GPT actions to approved external domains… If no domains are allowed, custom GPT actions cannot execute."
- Fuente de las tres citas: https://learn.chatgpt.com/docs/enterprise/gpts-and-sharing (OpenAI)
- **Qué se migra:** "See how a GPT's instructions and reference files become a skill and connected apps remain part of the plugin. Custom actions do not transfer; plan to replace them with a supported app's read or write actions, or a custom MCP server."
- **Retirada:** "Custom GPTs stop working. Move the workflows you want to keep to plugins and test them before retirement."
- **Definición de plugin:** "A plugin is a reusable package for a workflow that can include skills, apps, or both."
- Fuente de las tres citas: https://learn.chatgpt.com/docs/migrate-custom-gpts (OpenAI)
- **Ejemplos reales:**
  - BBVA: "In five months, BBVA employees created over 2,900 custom GPTs—some of which reduce project and process timelines from weeks to hours." Su equipo legal "Uses it to answer 40,000 questions a year on policies, compliance, and more." Fuente: https://cdn.openai.com/business-guides-and-resources/ai-in-the-enterprise.pdf (OpenAI; metadatos 10-04-2025)
  - HiBob: "HiBob turns 2,500 GPTs into product and team growth". Fuente: https://openai.com/index/hibob (08-10-2025; titular del RSS)

---

## 4. Claude Team / Enterprise (C4)

### 4.1 Precios

Fuente: https://claude.com/pricing (Anthropic; sin fecha, © 2026). Solo hay precios en USD.

| Plan | Cita literal |
|---|---|
| Free | "$0 Free for everyone" |
| Pro | "$17 Per month with annual subscription discount ($200 billed up front). $20 if billed monthly." |
| Max | "Max 5x : $100 per month / Max 20x : $200 per month" · "The Max plan is currently available as a monthly subscription only." (https://support.claude.com/en/articles/11049741-what-is-the-max-plan) |
| **Team** | "Team — For teams of 2 to 150" · "Standard seat … $20 Per seat / month if billed annually. $25 if billed monthly." · "Premium seat — 5x more usage than standard seats* $100 Per seat / month if billed annually. $125 if billed monthly." |
| **Enterprise** | "Seat price + usage at API rates — US$20/seat/month, billed annually, 20 seat minimum. Usage cost scales with model and task." |

- **Mínimo en Team:** "Team plans require a minimum of two members." / "Team plans support up to 150 seats." Fuente: https://support.claude.com/en/articles/9266767 ("Updated yesterday")
- **Impuestos y moneda:** "Prices shown are for US customers and exclude applicable taxes. Pricing, currency, and tax handling vary by region." (misma URL). En la versión española de la página de precios: "Los precios mostrados no incluyen impuestos aplicables." (https://claude.com/es/pricing)
- **Enterprise:** el mínimo es **20** puestos en autoservicio y **50** con ventas. "Accepted currency: USD only" en autoservicio; "Multi-currency supported" con ventas. Fuente: https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan (01-09-2026)

### 4.2 Privacidad por plan (B4)

| Plan | Entrenamiento | Cita literal | URL (fecha) |
|---|---|---|---|
| Free / Pro / Max | El usuario elige (opt-out) | "We will train new models using data from Free, Pro, and Max accounts when this setting is on" | https://code.claude.com/docs/en/data-usage |
| Free / Pro / Max: retención | 5 años si acepta / 30 días si no | "Users who allow data use for model improvement: 5-year retention period … Users who don't allow data use for model improvement: 30-day retention period" | ídem; anuncio original en https://www.anthropic.com/news/updates-to-our-consumer-terms (28-08-2025) |
| Team / Enterprise / API | No | "Anthropic may not train models on Customer Content from Services." | https://www.anthropic.com/legal/commercial-terms (vigente desde 17-06-2025) |
| Comerciales | No por defecto | "By default, we will not use your inputs or outputs from our commercial products" | https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training (act. 18-08-2026) |
| API: retención | 30 días | "we automatically delete inputs and outputs on our backend within 30 days of receipt or generation." | https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data (act. 01-07-2026) |
| Enterprise: retención | Indefinida por defecto, configurable | "By default, data is retained indefinitely unless a custom retention period is set." / "The minimum retention period is 30 days." | https://privacy.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans |
| ZDR | Solo API, previa solicitud | "Claude Teams and Claude Enterprise product interfaces: These interfaces are not ZDR-eligible." | https://platform.claude.com/docs/en/manage-claude/api-and-data-retention |

- **En la tabla de claude.com/pricing:** la fila "Model training" pone "Opt-out" en Free, Pro y Max y "None by default" en Team y Enterprise. "Custom data retention controls" pone "No" en Team y "Yes" en Enterprise.
- **Valoraciones del usuario:** el feedback con pulgar arriba/abajo se conserva "for up to 5 years" y puede usarse para entrenar (paráfrasis; artículo 7996868 citado arriba).
- **Residencia en la UE:**
  - "Note that data is stored in the US." Fuente: https://privacy.claude.com/en/articles/7996890-where-are-your-servers-located-do-you-host-your-models-on-eu-servers (15-06-2026)
  - "Workspace geo: Only "us" is currently available." Fuente: https://platform.claude.com/docs/en/manage-claude/data-residency
  - Alternativa en Europa: "For Europe, you can select country-specific deployment options through AWS Bedrock, GCP Vertex, and Microsoft Foundry". Fuente: https://claude.com/regional-compliance (Foundry en Europa figura como "Coming soon")

### 4.3 Funciones clave

| Función | Cita literal | URL |
|---|---|---|
| Projects | "Projects allow you to create self-contained workspaces with their own chat histories and knowledge bases." / "Free users can create a maximum of five projects." | https://support.claude.com/en/articles/9517075-what-are-projects |
| Artifacts | "Artifacts are available on Free, Pro, Max, Team, and Enterprise plans" | https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them |
| Microsoft 365 | Claude puede "search and analyze content across SharePoint, OneDrive, Outlook, and Teams" · "The Microsoft 365 connector is available on all Claude plans" | https://support.claude.com/en/articles/15183774-connect-to-microsoft-365 (08-09-2026) |
| Google Workspace | En Team y Enterprise, "an Owner or Primary Owner must enable these connectors at the organization level" | https://support.claude.com/en/articles/10166901-use-google-workspace-connectors |
| Slack | "The Slack connector is available on Team and Enterprise plans." | https://claude.com/docs/connectors/slack |
| Claude Code | "Claude Code is included in all paid plans." | https://claude.com/pricing (FAQ) |
| Contexto | En la API: "1M tokens", con un máximo de salida de "128K tokens", en los modelos actuales | https://platform.claude.com/docs/en/about-claude/models/overview |
| Conectores | La página dice que hay 973 conectores | https://claude.com/connectors |

---

## 5. Gemini en Google Workspace y Gemini Notebook (NotebookLM) (C1, C8)

### 5.1 Precios en España

Fuente: https://workspace.google.com/intl/es/pricing.html (Google; sin fecha)

| Plan | Precio anual (literal) | Flexible (sin compromiso)* | Gemini |
|---|---|---|---|
| Business Starter | **6,80 €** "por usuario al mes" | 8,10 € | "Acceso básico"; Gemini en Gmail y Vids; "Gemini en aplicaciones de Workspace: Limitado" |
| Business Standard | **13,60 €** | 16,20 € | "Acceso ampliado"; Gemini en Gmail, Docs, Sheets, Slides, Drive, Meet y Chat |
| Business Plus | **21,10 €** | 25,30 € | Igual que Standard |
| Enterprise | "Contactar con Ventas" | — | "Acceso ampliado" |

\* Los precios flexibles vienen de los datos de precios incrustados en el código de la página (el selector Anual/Flexible). La etiqueta visible dice "Anual (ahorra un 16 % con un compromiso de 1 año)". Confirmar en un navegador antes de publicar.

- **Impuestos:** "El precio es por usuario al mes y no incluye impuestos" · "Todos los planes se facturan mensualmente y todos los precios son €EUR".
- **Usuarios:** "Los planes Business Starter, Business Standard y Business Plus se pueden comprar para un máximo de 300 usuarios. Los planes Enterprise no tienen un número mínimo ni máximo de usuarios."
- **Promoción del 1-11-2026 al 1-02-2027:** el porcentaje cambia de una carga de la página a otra (en mi carga: Starter −30 % = 4,76 €; Standard −20 % = 10,88 €; Plus −30 % = 14,77 €). "Oferta disponible solo para clientes nuevos … solo está disponible para los 20 primeros usuarios que se añadan y durante 12 meses." **No publicar el precio promocional.**
- **Gemini Notebook:** "Gemini Notebook: tu compañero de reflexión e investigación basado en IA" (Starter: acceso básico; resto: ampliado). Resúmenes de audio: "Hasta 3 al día" en Starter y "Hasta 20 al día" en el resto.
- **EE. UU.:** $7 / $14 / $22 con pago anual ("All prices $USD"). Fuente: https://workspace.google.com/intl/en/pricing.html

### 5.2 Privacidad

Fuente: https://knowledge.workspace.google.com/admin/generative-ai/generative-ai-in-google-workspace-privacy-hub (Google · "Last updated: October 6, 2026")

- "Your interactions with Gemini stay within your organization. Gemini does not share your content outside your organization without your permission."
- "Your content is not human reviewed or otherwise used for Generative AI model training outside your domain without permission."
- "Workspace does not use customer data for training models without customer's prior permission or instruction."
- "Gemini has attained SOC 1/2/3, ISO 9001, ISO/IEC 27001, 27701, 27017, 27018, and 42001 certifications."
- **Límites de Gemini Notebook:**
  - "Your organization's file sharing and data region settings do not apply to data in Gemini Notebook."
  - "At this stage Gemini Notebook does not support ISO, SOC, or FedRAMP compliance…"
- **Regiones de datos:**
  - "Your location options are the United States, European Union (labeled Europe in the Google Admin console), or No preference." Business Starter no figura entre las ediciones compatibles. Fuente: https://knowledge.workspace.google.com/admin/compliance/choose-a-geographic-location-for-your-data (13-10-2026)
  - "Data Regions is not supported for … Gemini Notebook (formerly NotebookLM)". Fuente: https://knowledge.workspace.google.com/admin/compliance/data-covered-by-data-regions

### 5.3 Funciones de Gemini

| App | Cita literal | URL |
|---|---|---|
| Gmail | "Summarize: Synthesize long email threads into concise bullet points." · "Draft: Create new emails or refine existing drafts for tone and clarity." · "Schedule: Propose meeting times based on your availability in Google Calendar." | https://support.google.com/mail/answer/14355636?hl=en |
| Docs | "Summarize your files from Google Drive and emails from Gmail." | https://support.google.com/docs/answer/14206696?hl=en |
| Sheets | "Create tables. Create formulas. Generate data analysis and insights. Build charts and graphs." | https://support.google.com/docs/answer/14218565?hl=en |
| Meet | "Automatically capture meeting notes organized in Google Docs and share with your team." · "This feature supports one language at a time." (el español está entre los idiomas admitidos) | https://support.google.com/meet/answer/14754931?hl=en |
| Gems | "You can create and save Gems to customize responses in Gemini Apps to your specific needs." | https://support.google.com/gemini/answer/15146780?hl=en |
| Deep Research | "It usually takes about 5-10 minutes to generate the report" | https://support.google.com/gemini/answer/15719111?hl=en |

### 5.4 Gemini Notebook, antes NotebookLM (C8)

- **Qué es:** "Gemini Notebook is an AI-powered research assistant designed to help you refine and organize your ideas." / "Chat with your notebook to get grounded information based on your sources with clear in-line citations…" Fuente: https://support.google.com/notebooklm/answer/16164461 (redirige a gemininotebook)
- **Adopción:** "more than 30 million people and over 600,000 organizations are using it". Fuente: blog de Google del 16-07-2026 (sección 0).
- **Servicio de Workspace:** "Gemini Notebook is now a Google Workspace core service." (Privacy Hub)
- **Límites por fuente:** "The current limit is 500,000 words per source or up to 200MB for local uploads. There's no page limit." Fuente: https://support.google.com/gemininotebook/answer/16269187?hl=en
- **Tipos de fuente:** Docs, Slides ("up to 100 slides"), Sheets, PDF, docx, txt, md, csv, pptx, ePub, imágenes, audio, URLs y "YouTube URLs of public videos". "You can include up to 50 sources (for Free users)." Fuente: https://support.google.com/gemininotebook/answer/16215270?hl=en
- **Límites por plan** ("Subject to Change"):

  | Plan | Cuadernos por usuario | Fuentes por cuaderno |
  |---|---|---|
  | Standard | 100 | 50 |
  | Plus | 200 | 100 |
  | Pro | 500 | 300 |
  | Ultra | 500 | 500–600 |

  Fuente: https://support.google.com/gemininotebook/answer/16213268?hl=en
- **Privacidad en Workspace:** "Your uploads, queries and the model's responses in Gemini Notebook will not be reviewed by human reviewers even when you provide thumbs up or down feedback, and will not be used to train AI models." (misma URL)
- **Audio Overviews:** "Audio Overviews are deep-dive discussions between AI hosts that provide in-depth summaries of the key topics in your uploaded sources." / "The interactive mode experience is currently available only in English." Formatos: Deep Dive, The Brief, The Critique y The Debate. Fuente: https://support.google.com/gemininotebook/answer/16212820?hl=en
- **Casos de uso oficiales:**
  - "from business owners creating interactive onboarding materials to students converting notes into audio and video summaries" (blog del 16-07-2026).
  - BBVA "also uses NotebookLM for research tasks, generating audio overviews…" (ver sección 12).

---

## 6. Privacidad comparada (B4, B5)

| Herramienta / plan | ¿Entrena con datos? | Retención | UE |
|---|---|---|---|
| ChatGPT Free/Plus/Pro | No verificado (help center bloqueado). Plus y Pro **no** tienen "No training … by default" en la tabla oficial | No verificada | No |
| ChatGPT Business | "No training on your business data by default" | No verificada | Sin controles de residencia |
| ChatGPT Enterprise/Edu | No por defecto | "Data retention and data residency controls" | Residencia en Europa disponible |
| Claude Free/Pro/Max | Opt-out (lo decide el usuario) | 5 años si lo permite / 30 días si no | Datos en EE. UU. |
| Claude Team | No | No hay controles de retención personalizada | Datos en EE. UU. |
| Claude Enterprise | No | Indefinida por defecto; configurable (mínimo 30 días) | Datos en EE. UU.; vía Bedrock o Vertex para Europa |
| Microsoft 365 Copilot | No ("aren't used to train foundation LLMs") | Historial gestionable con Purview | EU Data Boundary (excepto modelos de Anthropic y búsquedas en Bing) |
| Gemini en Workspace | No sin permiso | Según las políticas de Workspace | Data regions UE (Standard y Plus; Gemini Notebook excluido) |

**Mensaje para B4:** la diferencia real no está entre marcas, sino entre **cuentas personales (de consumo) y cuentas de empresa**. Todas las cuentas de empresa revisadas (ChatGPT Business, Claude Team, Copilot y Workspace) declaran que no se entrena con los datos por defecto.

---

## 7. Prompting: guías oficiales (C9)

### OpenAI

Fuente: https://developers.openai.com/api/docs/guides/prompt-engineering

- **Estructura del prompt en cuatro partes:**
  - "**Identity:** Describe the purpose, communication style, and high-level goals of the assistant."
  - "**Instructions:** Provide guidance to the model on how to generate the response you want. What rules should it follow?"
  - "**Examples:** Provide examples of possible inputs, along with the desired output from the model."
  - "**Context:** … This content is usually best positioned near the end of your prompt…"
- **Ejemplos (few-shot):** "When providing examples, try to show a diverse range of possible inputs with the desired outputs."
- **Modelos de razonamiento y modelos GPT:** "A reasoning model is like a senior co-worker. You can give them a goal to achieve and trust them to work out the details." / "A GPT model is like a junior coworker. They'll perform best with explicit instructions to create a specific output."

### Anthropic

Fuente: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices

- "Think of Claude as a brilliant but new employee who lacks context on your norms and workflows."
- "**Golden rule:** Show your prompt to a colleague with minimal context on the task and ask them to follow it. If they'd be confused, Claude will be too."
- "Providing context or motivation behind your instructions, such as explaining to Claude why such behavior is important, can help Claude better understand your goals"
- "Examples are one of the most reliable ways to steer Claude's output format, tone, and structure." / "Include 3–5 examples for best results."
- "XML tags help Claude parse complex prompts unambiguously…"
- "Setting a role in the system prompt focuses Claude's behavior and tone for your use case. Even a single sentence makes a difference"
- "Queries at the end can improve response quality by up to 30 percent in tests, especially with complex, multidocument inputs."

### Google (la más útil para empleados no técnicos)

- **Marco de cuatro elementos:** "The four main areas to consider when writing an effective prompt are: Persona, Task, Context, Format"
- **El verbo es lo esencial:** "Always remember to include a verb or command as part of your task; this is the most important component of a prompt."
- **Longitud de los prompts:** "the most fruitful prompts average around 21 words with relevant context, yet the prompts people try are usually less than nine words."
- Fuente de las tres citas: https://services.google.com/fh/files/misc/google_workspace_prompting_guide_abridged_smbs_startups_september2024.pdf (Google Workspace, septiembre de 2024)
- **Versión en español:** "Estos son los cuatro aspectos principales…: Perfil ficticio, Tarea, Contexto, Formato" · "Usa un lenguaje natural…" · "Haz peticiones específicas e itera el proceso…" · "Apuesta por la brevedad y la sencillez…" Fuente: https://workspace.google.com/intl/es/resources/ai/writing-effective-prompts/
- **Dividir las instrucciones:** "Break down instructions: Instead of having many instructions in one prompt, create one prompt per instruction." Fuente: https://ai.google.dev/gemini-api/docs/prompting-strategies (act. 13-10-2026)

**Puntos comunes a las tres guías:** instrucciones claras y específicas, dar contexto, incluir ejemplos y estructurar el prompt (rol, tarea, contexto y formato).

---

## 8. Qué es un agente de IA: definiciones (E1)

| Organismo | Cita literal | URL | Fecha |
|---|---|---|---|
| **Anthropic** | "Workflows are systems where LLMs and tools are orchestrated through predefined code paths. Agents, on the other hand, are systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks." | https://www.anthropic.com/engineering/building-effective-agents | 19-12-2024 (con nota de 2026: "Much of the tooling landscape described in this post has changed since December 2024.") |
| Anthropic: empezar simple | "we recommend finding the simplest solution possible, and only increasing complexity when needed. This might mean not building agentic systems at all." | ídem | ídem |
| **OpenAI** | "Agents are systems that independently accomplish tasks on your behalf." · "Applications that integrate LLMs but don't use them to control workflow execution—think simple chatbots, single-turn LLMs, or sentiment classifiers—are not agents." | https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf | metadatos del PDF: 07-04-2025 |
| OpenAI: componentes | "In its most fundamental form, an agent consists of three core components:" Model ("The LLM powering the agent's reasoning and decision-making"), Tools ("External functions or APIs the agent can use to take action"), Instructions ("Explicit guidelines and guardrails defining how the agent behaves") | ídem | ídem |
| OpenAI: cuándo usar un agente | Tres criterios: "Complex decision-making", "Difficult-to-maintain rules", "Heavy reliance on unstructured data". "Before committing to building an agent, validate that your use case can meet these criteria clearly. Otherwise, a deterministic solution may suffice." | ídem | ídem |
| OpenAI: supervisión humana | "High-risk actions: Actions that are sensitive, irreversible, or have high stakes should trigger human oversight until confidence in the agent's reliability grows. Examples include canceling user orders, authorizing large refunds, or making payments." | ídem | ídem |
| **Google Cloud** (ES) | "Los agentes de IA son sistemas de software que usan la IA para alcanzar objetivos y completar tareas en nombre de los usuarios. Muestran razonamiento, planificación y memoria, y tienen un nivel de autonomía para tomar decisiones, aprender y adaptarse." | https://cloud.google.com/discover/what-are-ai-agents?hl=es | "Last Updated: 04/02/2026" |
| **IBM** | "An artificial intelligence (AI) agent is a system that autonomously performs tasks by designing workflows with available tools." | https://www.ibm.com/think/topics/ai-agents | Anna Gutowska; sin fecha visible |
| **Microsoft** | "An agent is an AI assistant that handles conversations and completes tasks. It follows the instructions you give it, draws on the knowledge sources you connect, and uses tools to take action…" | https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio | ms.date 25-09-2026 |

**Ejemplo útil para un artículo divulgativo (OpenAI, mismo PDF):** "A traditional rules engine works like a checklist, flagging transactions based on preset criteria. In contrast, an LLM agent functions more like a seasoned investigator…"

---

## 9. n8n vs Make vs Zapier (E3, E4)

### 9.1 Tabla comparativa

| | **n8n** | **Make** | **Zapier** |
|---|---|---|---|
| Empresa | n8n GmbH, Berlín (Alemania) | Make, parte de Celonis; sede en Praga | Zapier, Inc. (EE. UU.) |
| Plan gratuito | Community Edition autoalojada (gratis) | Free: 1,000 credits/mes | Free: 100 tasks/mes, Zaps de 2 pasos |
| Plan de pago de entrada | **Starter: 20 €/mes, pago anual**, 2.5K ejecuciones | **Core: $9/mes, pago anual** ($0.90 por 1,000 credits) | **Professional: desde $19.99/mes, pago anual** ($29.99 mensual), 750 tasks |
| Plan intermedio | Pro: 50 €/mes, pago anual, 10K ejecuciones | Pro: $16/mes · Teams: $29/mes | Team: desde $69/mes, pago anual ($103.50 mensual), 2,000 tasks, 25 usuarios |
| Plan alto | Business: 667 €/mes, pago anual, 40K ejecuciones, autoalojado | Enterprise: "Custom" | Enterprise: "Contact for pricing" |
| Moneda | **EUR** | USD | USD (se puede pagar en 19 monedas locales) |
| Unidad de facturación | **Ejecución** (el workflow entero) | **Credit** (1 por acción de módulo; la IA consume según tokens) | **Task** (cada acción completada) |
| Autoalojamiento | **Sí** | No | No |
| Datos en la UE | **Cloud en Frankfurt** | Zonas EU1/EU2, pero parte de la IA va a EE. UU. | **No:** AWS en EE. UU. |
| Integraciones | "2367 integrations" (directorio) | "3,500+ apps" | "9,000+ apps" |
| IA y agentes | Nodo AI Agent (LangChain), MCP | Make AI Agents, Maia, MCP | Zapier Agents (se facturan por *activities*), Copilot, MCP |

### 9.2 Citas y fuentes

**n8n** (n8n GmbH) — https://n8n.io/pricing/
- Planes: "20€/mo, billed annually" (Starter, "2.5K" executions) · "50€/mo, billed annually" (Pro, "10K") · "667€/mo, billed annually" (Business, "40K").
- Qué es una ejecución: "An execution is a single run of your entire workflow." / "It doesn't matter how many steps are in the workflow or how much data it processes."
- Dónde se guardan los datos: "For hosted plans, data is stored within the EU, on servers located in Frankfurt, Germany." / "For self-hosted plans, it's wherever you decide to host n8n."
- Pago mensual (paráfrasis): el selector dice "Annually (Save 17%)". Con pago mensual, los datos de la página dan 24 €, 60 € y 800 €; no es texto visible.
- Descuento para empresas pequeñas (paráfrasis): Start-up Plan con un 50 % en Business para empresas de menos de 20 empleados.
- Licencia (paráfrasis): es *fair-code*, con Sustainable Use License; solo permite usarlo para fines internos de la empresa o para uso no comercial. Fuente: https://github.com/n8n-io/n8n (README y LICENSE.md)
- Nodo AI Agent (paráfrasis): conecta un modelo de chat con herramientas y el agente decide cuál usar. Fuente: https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/
- Nº de integraciones: n8n publica cifras distintas según la página (2367 en el directorio, "1500+" en el README de GitHub, "over 500" en la home). Recomiendo usar la del directorio (https://n8n.io/integrations/) y citar la fuente.

**Make** (Make / Celonis) — https://www.make.com/en/pricing (copia del HTML oficial descargada el 18-10-2026)
- "Free includes: 1,000 credits/month … 3,500+ apps … 15-minute minimum interval between runs"
- "Core Save 15 % $9 /mo … $0.90 /1,000 credits" · "Pro Save 15 % Popular $16 /mo … $1.60 /1,000 credits" · "Teams Save 15 % $29 /mo … $2.90 /1,000 credits" · "Enterprise Custom"
- Los precios mostrados son los del pago anual. **El precio con pago mensual no está verificado.**
- La página principal de marketing dice "3,000+ native apps"; la sección de planes dice "3,500+ apps".
- Datos en la UE e IA: "Most Make-native AI processing does stay in the EU on an EU zone, but a few features and models always route to the US, some route to the UK (not the EU), and bringing your own AI provider connection removes Make's EU guarantee entirely." Fuente: https://help.make.com/ai-providers-and-data-zones-in-make.md (creado el 31-08-2026)
- De operations a credits (paráfrasis): los credits sustituyeron a las operations; 1 operación equivale a 1 credit en módulos sin IA. Fuente: https://help.make.com/credits.md

**Zapier** (Zapier, Inc.) — https://zapier.com/pricing
- "Professional Starting from $19.99 /month" · "Team Starting from $69 /month"
- Pago mensual (paráfrasis): $29.99 y $103.50; el pago anual sale un 33 % más barato. Verificado por el subagente en la versión Markdown de la página, con fecha 18-10-2026.
- Qué es una task (paráfrasis): cada acción completada con éxito; las acciones fallidas y las comprobaciones de datos nuevos (polling) no cuentan.
- Zapier MCP (paráfrasis): cada llamada a una herramienta consume 2 tasks.
- Integraciones: "No-code automation across 9,000+ apps"
- Dónde se guardan los datos (https://zapier.com/security-compliance): "Zapier stores data on Amazon Web Services (AWS) in the United States."
- Entrenamiento de IA (misma página): "We don't train on the data that runs through your workflows, on any plan. To improve AI features, Zapier may learn from how workflows are built: the structure, not the contents. Enterprise accounts are opted out of even that automatically; other plans can opt out with one form."

### 9.3 Casos reales por plataforma

| Plataforma | Empresa | Cifra (literal) | URL |
|---|---|---|---|
| n8n | Vodafone UK | "Cost avoided £2.2M · Person / day saved 5000+" | https://n8n.io/case-studies/vodafone/ |
| n8n | Delivery Hero | "Delivery Hero saved 200 hours/month with a single IT ops workflow" | https://n8n.io/case-studies/delivery-hero/ |
| n8n | Musixmatch | 47 días de ingeniería ahorrados en 4 meses (paráfrasis) | https://n8n.io/case-studies/musixmatch/ |
| n8n | Stepstone | Más de 700 workflows en producción; de 2 a 3 millones de documentos al mes (paráfrasis) | https://n8n.io/case-studies/stepstone/ |
| Make | Fonds Finanz | 10,000 horas de back-office ahorradas en un año (paráfrasis) | https://www.make.com/en/success-stories/customer-fonds-finanz (02-04-2024) |
| Make | FranklinCovey | Un proceso de RR. HH. pasó de 30 días a 2 horas; $60K/año menos en software (paráfrasis) | https://www.make.com/en/success-stories/franklin-covey-make-success-story (30-09-2025) |
| Zapier | Autotorino (Italia) | "109 production Zaps writing into Salesforce, returning 2,394 hours to the CRM team in 2025" · "worth an estimated €150,000 in net profit influenced" | https://zapier.com/customer-stories |
| Zapier | Palo Alto Networks | "Stas calculated the savings at one FTE — $150,000 a year." | ídem |
| Zapier | Mercari | "resolves ~47,000 per month entirely through automation" | ídem |

---

## 10. RAG: un chatbot con los documentos de la empresa (E5)

| Organismo | Cita literal | URL | Fecha |
|---|---|---|---|
| Anthropic | "RAG is a method that retrieves relevant information from a knowledge base and appends it to the user's prompt, significantly enhancing the model's response." | https://www.anthropic.com/engineering/contextual-retrieval | 19-09-2024 |
| Anthropic (cifra) | "This method can reduce the number of failed retrievals by 49% and, when combined with reranking, by 67%." | ídem | ídem |
| Google Cloud (ES) | "La generación aumentada por recuperación (RAG) es un framework de inteligencia artificial que combina las ventajas de los sistemas tradicionales de recuperación de información (como la búsqueda y las bases de datos) con las capacidades de los modelos generativos de lenguaje extenso (LLM)." | https://cloud.google.com/use-cases/retrieval-augmented-generation?hl=es | sin fecha |
| IBM | "Retrieval augmented generation, or RAG, is an architecture for optimizing the performance of an artificial intelligence (AI) model by connecting it with external knowledge bases." | https://www.ibm.com/think/topics/retrieval-augmented-generation | publicado 21-10-2024, act. 02-10-2026 |
| AWS | "Retrieval-Augmented Generation (RAG) is the process of optimizing the output of a large language model, so it references an authoritative knowledge base outside of its training data sources before generating a response." | https://aws.amazon.com/what-is/retrieval-augmented-generation/ | sin fecha |
| OpenAI | Recomienda añadir contexto relevante (RAG) para dar acceso a datos propios (paráfrasis). | https://developers.openai.com/api/docs/guides/prompt-engineering | — |

**Opciones sin programar** (cada una con su fuente en las secciones anteriores):
- Claude Projects: "Claude seamlessly enables RAG mode to expand capacity by up to 10x while maintaining response quality" en planes de pago (https://support.claude.com/en/articles/9517075-what-are-projects).
- Gemini Notebook: responde con citas de las fuentes.
- Copilot: "only surfaces organizational data to which individual users have at least view permissions".

---

## 11. Cuánto cuesta un agente de IA (E6)

### 11.1 Precios de API por millón de tokens (USD, 18-10-2026)

| Proveedor | Modelo | Input | Output | Fuente |
|---|---|---|---|---|
| OpenAI | gpt-6-astra (insignia) | $10.00 | $50.00 | https://developers.openai.com/api/docs/pricing |
| OpenAI | gpt-6.1-sol | $2.00 | $10.00 | ídem |
| OpenAI | gpt-6-luna | $0.10 | $0.50 | ídem |
| Anthropic | Claude Fable 5.1 | $10 | $50 | https://platform.claude.com/docs/en/about-claude/pricing |
| Anthropic | Claude Opus 5.5 | $4 | $20 | ídem |
| Anthropic | Claude Sonnet 5.5 | $2 | $10 | ídem |
| Anthropic | Claude Haiku 5.5 (≤100K tokens) | $0.10 | $0.50 | ídem |
| Google | Gemini 4 Argon | $2.00 (→ $4.00 desde el 1-12-2026) | $10.00 (→ $20.00) | https://ai.google.dev/gemini-api/docs/pricing (act. 16-10-2026) |
| Google | Gemini 3.8 Flash | $0.75 (→ $1.50 desde el 1-1-2027) | $3.75 (→ $7.50) | ídem |
| Google | Gemini 3.5 Flash-Lite | $0.30 | $2.50 | ídem |

- **OpenAI:** la tabla es para contexto corto ("Short context: ≤272K input tokens"). Con caché, el input cuesta $1.00 (Astra), $0.10 (6.1 Sol) y $0.01 (Luna). La API Batch cuesta la mitad. Con residencia de datos se paga "a 10% uplift". Aviso: "GPT-5.6 Sol's promotional pricing is available at least through November 21, 2026."
- **Anthropic:** "All prices are in USD." / "The Batch API allows asynchronous processing of large volumes of requests with a 50% discount on both input and output tokens." La inferencia solo en EE. UU. "incurs a 1.1x multiplier".
- **Google:** **los precios actuales son promocionales y se duplican** en las fechas indicadas. Batch: "50% cost reduction".

### 11.2 Coste de la plataforma

- **Microsoft Copilot Studio:** 173,30 €/mes por paquete de 25.000 créditos, o pago por uso (sección 2.4).
- **Claude Enterprise:** "$20 per seat per month plus usage billed at API rates" (FAQ de https://claude.com/pricing).
- **n8n, Make y Zapier:** cobran por ejecución, credit o task (sección 9). En Make, la IA consume credits según los tokens si se usa su proveedor; con conexión propia, los tokens se pagan directamente al proveedor del modelo.

### 11.3 Ejemplo ilustrativo (cálculo propio, no es dato de una fuente)

Un agente que atiende 1.000 consultas al mes, con unos 5.000 tokens de entrada y 1.000 de salida por consulta, usa 5 M de tokens de entrada y 1 M de salida.
- Con Claude Sonnet 5.5: 5 × $2 + 1 × $10 = **$20/mes** en tokens.
- Con GPT-6 Luna: 5 × $0.10 + 1 × $0.50 = **$1/mes**.

En el artículo hay que presentarlo como estimación propia: el coste del modelo suele ser lo menor frente al desarrollo y el mantenimiento. Pero Gartner avisa de que los agentes consumen muchos más tokens que un chatbot (ver 11.4).

### 11.4 Gartner: costes y riesgos de los agentes

- **Cita literal:** "Over 40% of agentic AI projects will be canceled by the end of 2027". Causas (paráfrasis): costes crecientes, valor de negocio poco claro o controles de riesgo insuficientes.
  - URL: https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027 (25-06-2025)
  - **Leído en una copia de Wayback de la URL oficial**: gartner.com bloquea el acceso automático.
- **Otras predicciones (paráfrasis, misma vía de acceso):**
  - Los modelos agénticos necesitan entre 5 y 30 veces más tokens por tarea que un chatbot (25-03-2026).
  - El coste de inferencia por workflow agéntico se multiplicará por más de cinco hasta 2028 (17-08-2026).
  - El 40 % de las aplicaciones empresariales tendrá agentes específicos de tarea a finales de 2026, frente a menos del 5 % en 2025 (26-08-2025).
  - **Abrir cada una en un navegador antes de publicar.**
- **Coste de desarrollo de un agente:** no hay ninguna cifra de fuente reputada. No publicar horquillas de precio sin fuente; usar las nuestras propias, presentadas como tales.

---

## 12. Casos de uso reales por herramienta (E2 y artículos de cada herramienta)

| Herramienta | Empresa (país) | Cifra / hecho (literal) | URL | Fecha |
|---|---|---|---|---|
| Microsoft Copilot | **Indra Group (España)** | "De media, los usuarios han conseguido optimizar dos horas semanales de su jornada… La mejora de la productividad se sitúa, a día de hoy, en un 5%" · "reducir hasta en un 90 % el tiempo dedicado a tareas repetitivas, como la comparación de documentos" | https://news.microsoft.com/source/emea/2025/07/indra-group-acelera-sus-procesos-con-ia-mas-de-3-000-profesionales-mejoran-su-productividad-y-eficiencia-gracias-al-uso-de-microsoft-365-copilot/?lang=es | 07-2025 |
| Copilot (agente) | **ILUNION (España)** | "el tiempo que se dedica al análisis inicial de cada expediente se ha reducido a unos 40 segundos, lo que significa un ahorro global superior a las 7.000 horas anuales" (agente "Litigator") | https://news.microsoft.com/es-es/2025/07/01/ilunion-ahorra-mas-de-7-000-horas-de-trabajo-anuales-a-su-asesoria-juridica-con-los-agentes-de-ia-de-microsoft-365-copilot/ | 01-07-2025 |
| Copilot (agentes) | **Serveo (España)** | "La compañía ya ha creado 733 agentes de IA con Microsoft 365 Copilot Agent Builder, Copilot Studio y el entorno Microsoft 365" · "ha permitido reducir hasta un 95% los errores en tareas avanza[das]" · título: "reduce tiempos hasta un 80%" | https://news.microsoft.com/source/emea/features/serveo-impulsa-la-eficiencia-de-sus-procesos-con-la-ia-agentica-de-microsoft-y-reduce-tiempos-hasta-un-80/?lang=es | 15-07-2026 |
| Copilot | Vodafone | "Microsoft 365 Copilot users are saving, on average, four hours per week, per person" (dato **del departamento legal**) | https://www.microsoft.com/en/customers/story/19346-vodafone-microsoft-365-copilot | sin fecha |
| ChatGPT Enterprise | **BBVA (España)** | "In five months, BBVA employees created over 2,900 custom GPTs" · ampliado a "100,000 employees" (11-06-2026, https://openai.com/index/bbva) | https://cdn.openai.com/business-guides-and-resources/ai-in-the-enterprise.pdf | 04-2025 |
| ChatGPT / API (agente) | Klarna | "the assistant was handling two-thirds of all service chats—doing the work of hundreds of agents and cutting average resolution times from 11 minutes to just 2. The initiative is projected to deliver $40 million in profit improvement" | ídem PDF | 04-2025 |
| ChatGPT Enterprise | Morgan Stanley | "98% of Morgan Stanley advisors use OpenAI every day; access to documents has jumped from 20% to 80%" | ídem PDF | 04-2025 |
| ChatGPT Enterprise | Promega | "saved 135 hours in their first six months using ChatGPT Enterprise for first-draft email campaigns" | https://cdn.openai.com/business-guides-and-resources/identifying-and-scaling-ai-use-cases.pdf | 04-2025 |
| ChatGPT Enterprise | Philips | "Philips is scaling AI literacy with ChatGPT Enterprise, training 70,000 employees to use AI responsibly" (útil para artículos de formación) | https://openai.com/index/philips (entradilla del RSS) | 13-11-2025 |
| Claude (agentes) | Qonto (Europa) | "3X less time to create client invoices with Qonto's AI agents drafting them and the customer confirming before they're sent" | https://claude.com/customers/qonto | sin fecha |
| Claude | N26 (Europa) | "Automated up to 70% of tasks across targeted processes" | https://claude.com/customers/n26 | sin fecha |
| Claude | Pictet (Suiza) | "Trained more than 500 people through 25 hands-on Claude Code workshops with Artefact" (útil para artículos de formación) | https://claude.com/customers/pictet | sin fecha |
| Claude (Agent SDK) | JAKALA (Italia) | "~70% reduction in time spent on systematic and repetitive tasks across senior delivery teams" | https://claude.com/customers/jakala | sin fecha |
| Claude (agentes) | Zendesk | "1 million custom agent executions in the first seven weeks of early access" · "Up to 80% reduction in human handle times" | https://claude.com/customers/zendesk | sin fecha |
| Gemini en Workspace | **BBVA (España)** | "uses Gemini in Google Workspace … Employees report that automating repetitive tasks with AI saves them nearly three hours per week on average." | https://cloud.google.com/transform/101-real-world-generative-ai-use-cases-from-industry-leaders | act. 22-04-2026 |
| Google Cloud (IA) | **atmira (España)** | "The platform improved recovery rates by 30% to 40%, increased payment conversions by 45%, and reduced operational costs by 54%." | ídem | ídem |
| Gemini en Workspace | **Grupo Dia (España)** | "uses Gemini in Google Workspace to compare complex proposals and conduct market research … while ensuring data is never used to train external models." (sin cifra) | ídem | ídem |
| Google Cloud | Toyota | "a reduction of over 10,000 man-hours per year" | ídem | ídem |
| n8n / Make / Zapier | ver sección 9.3 | — | — | — |

Nota: BBVA aparece como cliente de OpenAI **y** de Google. Si se cita en un comparativo, conviene explicar que son despliegues distintos.

---

## 13. Lista de fuentes (todas consultadas el 2026-10-18)

**Microsoft**
- https://www.microsoft.com/es-es/copilot/pricing/business
- https://www.microsoft.com/es-es/copilot/pricing/enterprise
- https://www.microsoft.com/es-es/copilot/pricing/copilot-studio
- https://www.microsoft.com/en-us/copilot/pricing/business
- https://www.microsoft.com/en-us/copilot/pricing/enterprise
- https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-licensing
- https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy
- https://learn.microsoft.com/en-us/copilot/microsoft-365/enterprise-data-protection
- https://learn.microsoft.com/en-us/microsoft-365/enterprise/m365-dr-services-data-location
- https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio
- https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management
- https://support.microsoft.com/en-us/outlook/copilot-pages/summarize-an-email-thread-with-copilot-in-outlook
- https://support.microsoft.com/en-us/outlook/copilot-pages/draft-an-email-message-with-copilot-in-outlook
- https://support.microsoft.com/en-us/outlook/frequently-asked-questions-about-copilot-in-outlook
- https://support.microsoft.com/en-us/teams/copilot/catch-up-on-meetings-with-microsoft-365-copilot-in-teams
- https://support.microsoft.com/en-us/teams/copilot/facilitator-in-microsoft-teams-meetings
- https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel
- https://support.microsoft.com/en-au/excel/copilot/frequently-asked-questions-about-copilot-in-excel
- https://support.microsoft.com/en-us/excel/copilot/data-insights-with-copilot-in-excel
- https://support.microsoft.com/en-us/excel/functions/copilot-function
- https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-analyst-in-microsoft-365-copilot
- Casos: Indra, ILUNION, Serveo y Vodafone (URLs en la sección 12)

**OpenAI**
- https://learn.chatgpt.com/docs/pricing
- https://learn.chatgpt.com/docs/enterprise/gpts-and-sharing
- https://learn.chatgpt.com/docs/migrate-custom-gpts
- https://learn.chatgpt.com/docs/build-plugins
- https://learn.chatgpt.com/docs/enterprise/chatgpt-space
- https://developers.openai.com/api/docs/guides/your-data
- https://developers.openai.com/api/docs/pricing
- https://developers.openai.com/api/docs/guides/prompt-engineering
- https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf
- https://cdn.openai.com/business-guides-and-resources/ai-in-the-enterprise.pdf
- https://cdn.openai.com/business-guides-and-resources/identifying-and-scaling-ai-use-cases.pdf
- https://openai.com/news/rss.xml (feed oficial: titulares y entradillas de los artículos sobre BBVA, Philips, HiBob, puestos premium y residencia de datos)

**Anthropic**
- https://claude.com/pricing
- https://claude.com/es/pricing
- https://support.claude.com/en/articles/9266767
- https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan
- https://support.claude.com/en/articles/11049741-what-is-the-max-plan
- https://support.claude.com/en/articles/8325606-what-is-the-pro-plan
- https://support.claude.com/en/articles/9517075-what-are-projects
- https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
- https://support.claude.com/en/articles/15183774-connect-to-microsoft-365
- https://support.claude.com/en/articles/10166901-use-google-workspace-connectors
- https://claude.com/docs/connectors/slack
- https://claude.com/connectors
- https://code.claude.com/docs/en/data-usage
- https://www.anthropic.com/news/updates-to-our-consumer-terms
- https://www.anthropic.com/legal/commercial-terms
- https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training
- https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data
- https://privacy.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans
- https://privacy.claude.com/en/articles/7996890-where-are-your-servers-located-do-you-host-your-models-on-eu-servers
- https://platform.claude.com/docs/en/manage-claude/api-and-data-retention
- https://platform.claude.com/docs/en/manage-claude/data-residency
- https://claude.com/regional-compliance
- https://platform.claude.com/docs/en/about-claude/pricing
- https://platform.claude.com/docs/en/about-claude/models/overview
- https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- https://www.anthropic.com/engineering/building-effective-agents
- https://www.anthropic.com/engineering/contextual-retrieval
- https://claude.com/customers/ (páginas de Qonto, N26, Pictet, JAKALA y Zendesk)

**Google**
- https://workspace.google.com/intl/es/pricing.html
- https://workspace.google.com/intl/en/pricing.html
- https://knowledge.workspace.google.com/admin/generative-ai/generative-ai-in-google-workspace-privacy-hub
- https://knowledge.workspace.google.com/admin/compliance/choose-a-geographic-location-for-your-data
- https://knowledge.workspace.google.com/admin/compliance/data-covered-by-data-regions
- https://support.google.com/mail/answer/14355636
- https://support.google.com/docs/answer/14206696
- https://support.google.com/docs/answer/14218565
- https://support.google.com/meet/answer/14754931
- https://support.google.com/gemini/answer/15146780
- https://support.google.com/gemini/answer/15719111
- https://support.google.com/gemininotebook/answer/16269187
- https://support.google.com/gemininotebook/answer/16215270
- https://support.google.com/gemininotebook/answer/16213268
- https://support.google.com/gemininotebook/answer/16212820
- https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/
- https://workspaceupdates.googleblog.com/2026/07/notebooklm-now-gemini-notebook.html
- https://services.google.com/fh/files/misc/google_workspace_prompting_guide_abridged_smbs_startups_september2024.pdf
- https://workspace.google.com/intl/es/resources/ai/writing-effective-prompts/
- https://ai.google.dev/gemini-api/docs/prompting-strategies
- https://ai.google.dev/gemini-api/docs/pricing
- https://cloud.google.com/discover/what-are-ai-agents
- https://cloud.google.com/use-cases/retrieval-augmented-generation
- https://cloud.google.com/transform/101-real-world-generative-ai-use-cases-from-industry-leaders

**Automatización y definiciones**
- https://n8n.io/pricing/
- https://n8n.io/imprint/
- https://n8n.io/integrations/
- https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/
- https://github.com/n8n-io/n8n
- https://n8n.io/case-studies/ (vodafone, delivery-hero, musixmatch, stepstone)
- https://www.make.com/en/pricing
- https://www.make.com/en/about
- https://help.make.com/credits.md
- https://help.make.com/ai-providers-and-data-zones-in-make.md
- https://help.make.com/organizations
- https://www.make.com/en/success-stories/
- https://zapier.com/pricing
- https://zapier.com/security-compliance
- https://zapier.com/customer-stories
- https://www.ibm.com/think/topics/ai-agents
- https://www.ibm.com/think/topics/retrieval-augmented-generation
- https://aws.amazon.com/what-is/retrieval-augmented-generation/
- https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027 (leído vía Wayback)

---

## 14. Resumen en 10 líneas

1. Los cuatro asistentes cuestan casi lo mismo por usuario: ChatGPT Business y Claude Team, $20/mes con pago anual ($25 mensual); Copilot para empresas, 15,60 € (promoción hasta el 31-12-2026; 18,20 € de precio normal) más la licencia de M365; Workspace Business Standard, 13,60 € con Gemini incluido.
2. Solo Microsoft y Google publican precios en euros para España y sin IVA. OpenAI y Anthropic publican en USD.
3. Mínimos: ChatGPT Business y Claude Team, 2 usuarios. Claude Enterprise, 20 (o 50 con ventas). Copilot Business y Workspace Business, máximo 300.
4. Privacidad: ninguna cuenta de empresa entrena con los datos por defecto. El riesgo está en las cuentas personales (en Claude Free, Pro y Max el usuario decide; si acepta, la retención es de 5 años).
5. Residencia en la UE: Copilot (EU Data Boundary, con excepciones para Anthropic y Bing), Workspace (data regions, pero no Gemini Notebook) y ChatGPT Enterprise. Claude, solo vía Bedrock o Vertex. Zapier, solo EE. UU.; n8n cloud, en Frankfurt.
6. Hay que actualizar contenido: los GPTs personalizados se retiran (pasan a plugins), NotebookLM ahora es Gemini Notebook, la función =COPILOT de Excel ya no existe y los Gems pasan a ser skills.
7. Las definiciones de agente de Anthropic, OpenAI, Google, IBM y Microsoft coinciden: un modelo que decide los pasos y usa herramientas para lograr un objetivo. Anthropic y OpenAI recomiendan empezar por lo más simple.
8. n8n (EUR, autoalojable, datos en la UE, cobra por ejecución) frente a Make ($9, credits, 3,500+ apps) y Zapier ($19.99, tasks, 9,000+ apps, datos en EE. UU.).
9. Las APIs van de $0.10 a $10 por millón de tokens de entrada. Los precios de Gemini son promocionales y se duplican en diciembre o enero. Gartner prevé que más del 40 % de los proyectos agénticos se cancelen antes de 2028.
10. Hay casos españoles con cifra: Indra (2 h/semana), ILUNION (más de 7.000 h/año), Serveo (733 agentes, hasta −80 % de tiempo), BBVA (2.900 GPTs; unas 3 h/semana con Gemini) y atmira (−54 % de costes operativos).

---

## 15. No verificado (no publicar sin comprobar)

1. **chatgpt.com/pricing, openai.com y help.openai.com** dieron 403. Por tanto:
   - Precio de ChatGPT en EUR e IVA.
   - Precio del puesto Premium de Business.
   - Retención en Business.
   - Que Free y Plus entrenan por defecto salvo opt-out.
   - Límites de archivos de los GPTs.
   - Texto completo de los casos de BBVA, Philips y HiBob (solo verifiqué titular y entradilla del RSS oficial).
2. **Fecha exacta de retirada de los GPTs personalizados:** OpenAI no la publica.
3. **Precios de Claude en EUR e IVA:** el precio local solo se ve con el navegador desde España (claude.ai/upgrade).
4. **Retención en Claude Team:** las fuentes oficiales no coinciden (30 días según code.claude.com; el privacy center dice que los chats se conservan en el producto). Citar cada dato con su producto.
5. **Microsoft:**
   - Precio mensual del Microsoft 365 Copilot enterprise.
   - Mínimo de puestos (no se publica).
   - Precio del plan Estándar sin Teams.
   - Precio por crédito de Copilot Studio (solo en la API técnica de Azure).
   - Caso de Vestel Ingenieros.
   - Casos de Repsol y Navantia (solo hay fuentes no oficiales).
6. **Google Workspace:**
   - Precio del plan flexible (solo en los datos incrustados de la página).
   - Precio promocional (cambia en cada carga).
   - Precio de Enterprise.
   - Qué plan incluye Gems o Deep Research.
   - Cupos de Deep Research.
   - La "Prompting Guide 101" completa da 404; se usó la edición abreviada oficial.
7. **Make:** precio con pago mensual y región AWS de las zonas EU1/EU2. La cifra de apps varía entre 3,000+ y 3,500+ según la sección de la página.
8. **n8n:** precios con pago mensual (solo en el código de la página). El número de integraciones varía según la página.
9. **Zapier:** precios mensuales y definición de task en paráfrasis (verificados en la versión Markdown de la página por el subagente). Tampoco revisé la cláusula "Derived Data" de los términos del servicio.
10. **Gartner:** todo se leyó en copias de Wayback de las URLs oficiales, porque gartner.com bloquea el acceso automático. Hay que abrirlo en un navegador.
11. **Coste de desarrollo de un agente:** no hay ninguna cifra de fuente reputada.
12. **Casos con cifra en paráfrasis** (Musixmatch, Stepstone, Fonds Finanz, FranklinCovey, Make): copiar la frase literal de la URL antes de entrecomillar.

---

## Fe de erratas (verificación del 18/10/2026)

Este paquete se escribió antes de la verificación de los artículos y contiene errores que ya están corregidos en `content/blog/`. **Antes de reutilizar un dato de aquí, consulta los informes `factcheck-*.md` de esta carpeta**, que mandan sobre este documento. Los más relevantes:

- AESIA: el RD 729/2023, art. 10.1 d), sí prevé un marco de certificación voluntaria (no es certificación de cumplimiento del AI Act).
- Digital Omnibus: la documentación técnica simplificada para pymes y la relación FRIA/EIPD ya existían en el texto original; el art. 4 bis no es solo para proveedores de alto riesgo; la maquinaria pasa a la sección B del anexo I.
- RD 723/2026: para la plantilla contratada antes del 5/10/2026, la información escrita se entrega a petición de la persona trabajadora.
- Art. 4: el texto literal dice «adoptarán medidas para apoyar la promoción…»; la obligación se aplica desde el 2/2/2025 (en julio de 2026 cambió la redacción).
- Anthropic: la página 7996868 es la de productos comerciales y la 10023580 la de cuentas personales (estaban al revés).
- OWASP LLM 2026: «Hidden Context Exposure» sustituye y amplía «System Prompt Leakage».
- GPTs: la retirada afecta a todos los planes de ChatGPT (11/12/2026; 11/02/2027 para Enterprise con prórroga). ChatGPT Business: máximo 200 puestos por suscripción desde el 24/08/2026; puesto Premium a 100 $/usuario/mes anual o 125 $ mensual.
- Gemini Notebook: los archivos de Drive se sincronizan automáticamente cada pocos minutos.
- McKinsey (88 %): 1.993 encuestados de 105 países y de todos los tamaños, no «sobre todo empresas grandes».
- Ahrefs (37,9 %): cuenta bloques de la SERP, incluidos elementos especiales, no solo resultados orgánicos.
