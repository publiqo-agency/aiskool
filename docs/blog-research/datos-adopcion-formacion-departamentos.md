# Paquete de datos verificados: adopción, formación, departamentos y conceptos de IA (bloques D, F, N y G)

**Para:** redactores del blog (`content/blog/<slug>.mdx`). **Temas:** D1–D8, F1–F5, N1–N3, G1–G3 y G5 de `docs/blog-research/temas.md`.
**Fecha de consulta de todas las fuentes:** 2026-10-18.
**Método:** cada cifra y cada cita se ha comprobado en la URL indicada (HTML, PDF oficial, CSV del INE o API de Eurostat), no de memoria. Las citas van en su idioma original. Si la fuente original estaba bloqueada y se usó un espejo oficial, una copia de Wayback Machine o un medio de referencia, se dice en cada dato. Lo que no se pudo confirmar está marcado y recogido en la lista final («No verificado»).

**Leyenda de ámbito:** [ES] España · [UE] Unión Europea · [GLOBAL] global u otros países · [EE. UU.] · [CA] Canadá.

## Avisos que afectan a todo el paquete (leer antes de escribir)

1. **Definiciones de «uso de IA»: no mezclarlas.**
   - INE/Eurostat: % de **empresas de 10 o más empleados** que usan al menos una tecnología de una lista cerrada, en el primer trimestre del año. Es la métrica oficial para España y la UE (bloque N3).
   - McKinsey (88 %): % de **encuestados**, sobre todo directivos de empresas grandes, que dicen que su organización usa IA en al menos una función.
   - Microsoft Work Trend Index: % de **trabajadores del conocimiento**.
   - BCG AI at Work: % de **empleados** que la usan varias veces por semana.
   - INE Hogares / Eurostat individuos: % de la **población** de 16 a 74 años.
   - Banco de España (EBAE): encuesta propia con otra definición.
   - AI Index y Microsoft AI Economy Institute: telemetría de **población**.
   Cada cifra debe ir con su definición y su fuente.
2. **El AI Act ha cambiado (Digital Omnibus).** El **Reglamento (UE) 2026/1744**, de 8 de julio de 2026, se publicó en el DO L el 24 de julio de 2026 y está en vigor desde el 27 de julio de 2026. Está verificado en EUR-Lex: https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=OJ:L_202601744
   - (a) Reescribe el **art. 4 (alfabetización en IA)**: sigue siendo obligatorio «adoptar medidas», pero ya no hay que «garantizar un nivel suficiente». Texto literal en G5-5 y N1-2.
   - (b) Aplaza el **alto riesgo del Anexo III** (que incluye empleo y RR. HH.) al **2 de diciembre de 2027**, y el del Anexo I al 2 de agosto de 2028. Detalle en D4.
   - Control de verificación: el texto se extrajo dos veces de EUR-Lex, en dos búsquedas independientes, con citas idénticas (ver D4 y G5-5). La página de preguntas y respuestas de la Comisión (actualizada el 27-07-2026, ver N1-2) confirma que el art. 4 ya está modificado. En una última comprobación, EUR-Lex devolvió la página vacía; antes de publicar A1–A3, conviene volver a abrir la URL a mano.
   - Cualquier texto que cite el art. 4 original como vigente, o que fije el alto riesgo en el 2 de agosto de 2026, está desactualizado. Esto afecta también a A1, A2, A3, A7 y A10.
3. **Datos más recientes de empresas españolas: 1T 2025** (INE, publicado el 22-10-2025). A 18-10-2026 no se ha publicado la edición con datos de 1T 2026. Si sale a finales de octubre de 2026, hay que actualizar N3.
4. **Las fichas de fuente S1–S23** citadas en D8, F y N1–N2 están en el **Anexo A**.

---


## 0. Estudios transversales (sirven para D1, D3, D5, D7 y para F4/ROI)

### 0.1 Brynjolfsson, Li y Raymond: "Generative AI at Work" (atención al cliente) [GLOBAL]
- **Cifra:** +14 % de productividad media (incidencias resueltas por hora); +34 % en agentes novatos o poco cualificados; impacto mínimo en los expertos. También mejora el sentimiento del cliente y la retención de empleados.
- **Cita literal (abstract, NBER):** "Access to the tool increases productivity, as measured by issues resolved per hour, by 14% on average, including a 34% improvement for novice and low-skilled workers but with minimal impact on experienced and highly skilled workers."
- **Cita adicional:** "we find that AI assistance improves customer sentiment, increases employee retention, and may lead to worker learning."
- **URL:** https://www.nber.org/papers/w31161
- **Autor/organismo:** Erik Brynjolfsson, Danielle Li, Lindsey R. Raymond (NBER Working Paper 31161).
- **Publicación:** working paper de abril de 2023 (revisado en noviembre de 2023). Versión publicada: *The Quarterly Journal of Economics*, vol. 140(2), pp. 889–942, 2025, DOI 10.1093/qje/qjae044 (dato que figura en la página del NBER).
- **Año de referencia:** datos de campo de una empresa de software (despliegue escalonado entre 2020 y 2021, según el paper; el abstract no da las fechas).
- **Muestra:** 5.179 agentes de atención al cliente de una sola empresa.
- **Uso en el blog:** D7 (atención al cliente), F4 (ROI) y N1 (quién gana más con la formación: los perfiles junior).

### 0.2 Dell'Acqua et al. (HBS + BCG): "Navigating the Jagged Technological Frontier" [GLOBAL]
- **Cifras (versión publicada en 2026):** dentro de la "frontera", con IA se completan un 12,2 % más de tareas y un 25,1 % más rápido, y la calidad es significativamente mayor (+32 % de media según el cuerpo del artículo). Fuera de la frontera, quienes usan IA tienen un 19 % menos de probabilidades de acertar (84,5 % de acierto sin IA frente a 60 % y 70,6 % con IA: −19 puntos porcentuales de media).
- **Cita literal (abstract):** "subjects using AI outperformed those not using AI, completing 12.2% more tasks and completing them 25.1% more quickly on average while also delivering solutions of significantly improved quality. However, for a complex managerial task selected to be outside the frontier, subjects using AI were 19% less likely to produce correct solutions compared with those without AI"
- **Cita literal (cuerpo, sección 4.1):** "Not only did using AI increase the number of subtasks completed by more than 12%, it also enhanced the quality of the responses by an average of 32%."
- **Cita literal (cuerpo, sección 4.2):** "Subjects in the control group were correct about this exercise about 84.5% of the time, but the AI conditions scored at 60% and 70.6% (an average decrease of 19 percentage points when combining the AI treatment conditions and comparing them with the control condition)."
- **URL de la ficha:** https://www.hbs.edu/faculty/Pages/item.aspx?num=64700
- **URL del PDF publicado:** https://www.hbs.edu/faculty/Pages/download.aspx?name=dell-acqua-et-al-2026-navigating-the-jagged-technological-frontier.pdf
- **Publicación:** HBS Working Paper 24-013 (septiembre de 2023). Versión definitiva: *Organization Science*, publicado en línea el 11 de marzo de 2026, DOI 10.1287/orsc.2025.21838 (acceso abierto, CC BY 4.0).
- **Año de referencia:** experimento de 2023 con GPT-4.
- **Muestra:** 758 consultores de BCG, en un experimento preregistrado de 18 tareas.
- **AVISO:** el "+40 % de calidad" que circula procede del working paper de 2023. La versión publicada dice **+32 %**. Usad 32 %, o citad expresamente el working paper si se usa el 40 %.

### 0.3 Noy y Zhang: *Science* 2023 (redacción profesional) [GLOBAL / EE. UU.]
- **Cifra:** −40 % de tiempo y +18 % de calidad en tareas de redacción profesional de nivel medio con ChatGPT; además, se reduce la desigualdad entre trabajadores.
- **Cita literal (abstract):** "Our results show that ChatGPT substantially raised productivity: The average time taken decreased by 40% and output quality rose by 18%. Inequality between workers decreased, and concern and excitement about AI temporarily rose."
- **Cita adicional:** "Workers exposed to ChatGPT during the experiment were 2 times as likely to report using it in their real job 2 weeks after the experiment and 1.6 times as likely 2 months after the experiment."
- **URL:** https://www.science.org/doi/10.1126/science.adh2586 (la web de Science devuelve 403; abstract verificado con la API de Europe PMC: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1126/science.adh2586&resultType=core&format=json)
- **Publicación:** *Science* 381(6654), pp. 187–192, julio de 2023.
- **Año de referencia:** 2023.
- **Muestra:** 453 profesionales con estudios universitarios (experimento online preregistrado).

---

## D1. IA para marketing

### Hechos clave
1. **[UE] El marketing y las ventas son el uso más frecuente de la IA en las empresas de la UE.**
   - Cita: "In 2025, 34.70% of enterprises using AI technologies used these software or systems for marketing or sales and 31.05% for the organisation of business administration processes or management."
   - Por sector: "Enterprises mainly used AI software or systems for marketing or sales in the accommodation sector (58.82%) and in the retail trade sector (48.18%)"
   - URL: https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises
   - Organismo: Eurostat (encuesta comunitaria sobre uso de TIC en empresas; tablas isoc_eb_ai e isoc_eb_ain2).
   - Año de referencia: 2025. Datos extraídos en diciembre de 2025; próxima actualización prevista en diciembre de 2026.
   - Ámbito y muestra: empresas de la UE con 10 o más empleados; los porcentajes se calculan **sobre las empresas que ya usan IA**, no sobre el total.
   - Contexto en la misma página: "In 2025, 19.95% of EU enterprises used AI technologies." Para la cifra de España, véase N3 (INE).
2. **[ES] Las empresas españolas usan la IA sobre todo para optimizar procesos internos y para marketing (Banco de España, EBAE).**
   - Cita: "Las empresas españolas usan la IA principalmente para optimizar procesos internos y en marketing, y la automatización de tareas y la innovación tienen un uso limitado."
   - Cita: "Casi el 20 % de las empresas españolas encuestadas emplean sistemas de IA, tasa inferior a la de Alemania, pero superior a la de Italia, si bien en la mayoría de ellas el uso de la IA se encuentra aún en una fase experimental."
   - URL: https://www.bde.es/wbe/es/publicaciones/analisis-economico-investigacion/boletin-economico/2025t2-articulo-06-la-adopcion-de-la-inteligencia-artificial-en-las-empresas-espanolas-un-primer-analisis-basado-en-la-ebae.html
   - Organismo: Banco de España, Boletín Económico 2025/T2, artículo 06 (encuesta EBAE).
   - Publicación: 7 de mayo de 2025. Año de referencia: 2025 (primer trimestre, según la EBAE; en la ficha solo consta la fecha de publicación).
   - Aviso: la definición de "uso de IA" de la EBAE no es la de INE/Eurostat. No comparéis el "casi 20 %" con la cifra del INE.
3. **Productividad en tareas de redacción** (textos de marketing, emails, briefs): Noy y Zhang, −40 % de tiempo y +18 % de calidad (ver 0.3). La "frontera irregular" de Dell'Acqua (ver 0.2) incluye tareas creativas y de marketing de producto.

### Citas útiles
- Eurostat: el 34,70 % de las empresas de la UE que usan IA la aplican a marketing o ventas (2025).

### No verificado en D1
- McKinsey State of AI (marketing y ventas como la función con más uso de IA generativa): mckinsey.com no respondió a curl ni a WebFetch (timeout). No uséis cifras de McKinsey sin verificarlas (la adopción global de McKinsey solo se usa vía AI Index: ver D8-1).
- Salesforce/HubSpot State of Marketing: no consultados (se priorizaron fuentes con metodología pública).

---

## D2. GEO: cómo aparecer en las respuestas de ChatGPT y de los buscadores con IA

### Hechos clave
1. **El paper académico que acuñó "GEO"** [GLOBAL]
   - Cita (abstract): "we introduce Generative Engine Optimization (GEO), the first novel paradigm to aid content creators in improving their content visibility in generative engine responses [...] we demonstrate that GEO can boost visibility by up to 40% in generative engine responses. Moreover, we show the efficacy of these strategies varies across domains, underscoring the need for domain-specific optimization methods."
   - URL: https://arxiv.org/abs/2311.09735
   - Autores: Aggarwal et al. (Princeton, Georgia Tech, Allen Institute for AI e IIT Delhi). "Accepted to KDD 2024".
   - Publicación: v1 del 16 de noviembre de 2023; v3 del 28 de junio de 2024. Año de referencia: 2023–2024 (benchmark GEO-bench).
   - Nota: el abstract **no** enumera qué métodos funcionan mejor (citas, estadísticas, fuentes). Esa parte está en el cuerpo del paper, que no se verificó (ver "No verificado").
2. **Google: no hay requisitos especiales para salir en AI Overviews ni en AI Mode** [GLOBAL]
   - Cita: "The best practices for SEO remain relevant for AI features in Google Search (such as AI Overviews and AI Mode). There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary."
   - Cita: "To be eligible to be shown as a supporting link in AI Overviews or AI Mode, a page must be indexed and eligible to be shown in Google Search with a snippet, fulfilling the Search technical requirements. There are no additional technical requirements."
   - Cita: "Both AI Overviews and AI Mode may use a "query fan-out" technique — issuing multiple related [searches]…" (la frase sigue en la página).
   - URL: https://developers.google.com/search/docs/appearance/ai-features
   - Organismo: Google Search Central (documentación oficial). Última actualización: 2025-12-10 UTC.
3. **OpenAI: robots.txt y OAI-SearchBot** [GLOBAL]
   - Cita: "OAI-SearchBot is for search. OAI-SearchBot is used to surface websites in search results in ChatGPT's search features. Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers, though can still appear as navigational links. To help ensure your site appears in search results, we recommend allowing OAI-SearchBot in your site's robots.txt file"
   - Cita: "a webmaster can allow OAI-SearchBot in order to appear in search results while disallowing GPTBot to indicate that crawled content should not be used for training OpenAI's generative AI foundation models."
   - Cita: "For search results, please note it can take ~24 hours from a site's robots.txt update for our systems to adjust."
   - Cita (ChatGPT-User): "ChatGPT-User is not used to determine whether content may appear in Search."
   - URL: https://platform.openai.com/docs/bots
   - Organismo: OpenAI (documentación oficial "Overview of OpenAI Crawlers"). La página no muestra fecha; consultada el 2026-10-18.
4. **Caída de clics cuando aparece un resumen de IA** [EE. UU.]
   - Cita: "Users who encountered an AI summary clicked on a traditional search result link in 8% of all visits. Those who did not encounter an AI summary clicked on a search result nearly twice as often (15% of visits)."
   - Cita: "Google users who encountered an AI summary also rarely clicked on a link in the summary itself. This occurred in just 1% of all visits to pages with such a summary."
   - Cita: "This happened on 26% of pages with an AI summary, compared with 16% of pages with only traditional search results." (se refiere a terminar la sesión de navegación)
   - Cita: "Some 18% of all the Google searches in our study generated an AI summary"; "60% of search queries that began with question words such as "who," "what," "when" or "why" resulted in an AI summary."
   - Cita: "The most frequently cited sources in both Google AI summaries and standard search results are Wikipedia, YouTube and Reddit."
   - URL: https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/
   - Organismo: Pew Research Center. Publicación: 22 de julio de 2025. Año de referencia: marzo de 2025 (navegación del 1 al 31 de marzo; resultados capturados del 7 al 17 de abril de 2025).
   - Muestra: 900 adultos estadounidenses del panel KnowledgePanel Digital; 68.879 búsquedas únicas en Google, de las que 12.593 mostraron un resumen de IA. Ámbito: solo EE. UU. y solo Google.
5. **Escala de los buscadores con IA**
   - **ChatGPT [GLOBAL]:** "ChatGPT has reached 900 million weekly active users, OpenAI announced Friday, putting the AI chatbot within striking distance of 1 billion. OpenAI also shared that it now has 50 million paying subscribers." El dato anterior era de 800 millones (octubre de 2025).
     - URL: https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users (medio de referencia). El post original de OpenAI, https://openai.com/index/scaling-ai-for-everyone/, devolvió 403.
     - Publicación: 27 de febrero de 2026. Año de referencia: febrero de 2026.
   - **Google AI Mode [GLOBAL]:** "Since expanding AI Mode globally last October, we've surpassed 1 billion monthly active users. And just like AI Overviews, AI Mode is driving an incremental increase in Search queries overall, and we're now sending billions of clicks to websites every week through AI features in Search."
     - Cita: "We recently brought together AI Overviews and AI Mode into one seamless Search experience"
     - URL: https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q2-2026/
     - Organismo: Google (palabras de Sundar Pichai en la presentación de resultados del segundo trimestre de 2026). Publicación: 22 de julio de 2026.
     - Mismo documento: "the Gemini app, which now has 950 million monthly active users".

### Ideas para el artículo
- Lo que dice Google en su documentación (no hace falta ninguna "optimización GEO" especial; basta con buen SEO e indexación) se puede contrastar con el paper académico (hasta +40 % de visibilidad en su benchmark). Ojo: ese +40 % es un resultado de laboratorio, no una garantía.
- Paso técnico concreto: permitir OAI-SearchBot en robots.txt. Se puede bloquear GPTBot (entrenamiento) sin perder visibilidad en ChatGPT search.

---

## D3. IA para ventas y prospección B2B

### Hechos clave
1. **El 67 % de los compradores B2B prefiere comprar sin comercial; el 45 % usó IA en una compra reciente** [GLOBAL]
   - Cita: "Buyers want to engage on their own terms as 67% of B2B buyers state that they prefer a rep‑free experience, according to a survey by Gartner"
   - Cita: "A survey of 646 B2B buyers conducted from August through September 2025 found the shift is already underway, with 45% reporting they used AI during a recent purchase."
   - Cita (Alyssa Cruz, Gartner): "B2B buyers are progressing through critical buying tasks in more autonomous ways, and sellers can't rely on static collateral to carry influence in those moments"
   - URL: https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience (gartner.com bloquea la descarga automática; el texto se verificó en el espejo oficial de Gartner https://gcom.pdo.aws.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience y coincide con Digital Commerce 360: https://www.digitalcommerce360.com/2026/03/17/gartner-b2b-buyers-rep-free-purchasing-ai-reshapes-sales/)
   - Organismo: Gartner (Sales Practice). Publicación: 9 de marzo de 2026. Año de referencia: agosto y septiembre de 2025. Muestra: 646 compradores B2B; el comunicado no especifica el país.
2. **[UE] Marketing o ventas** es el primer uso de la IA en las empresas europeas que la usan: 34,70 % (Eurostat 2025, ver D1).
3. **[ES] Banco de España:** el marketing es uno de los dos usos principales en España (ver D1).

### No verificado en D3
- Comunicado de Gartner de mayo de 2026 sobre el 69 % de compradores que validan con un comercial las conclusiones de la IA (Business Wire devolvió 403). Lo citan medios secundarios; no lo uséis sin verificar.
- Datos de McKinsey sobre IA en ventas: web no accesible.

---

## D4. IA en RR. HH.: qué se puede hacer y qué es alto riesgo

### Marco legal (texto literal)
1. **[UE] AI Act, Anexo III, punto 4: sistemas de alto riesgo en el empleo**
   - Cita: "4. Empleo, gestión de los trabajadores y acceso al autoempleo: a) Sistemas de IA destinados a ser utilizados para la contratación o la selección de personas físicas, en particular para publicar anuncios de empleo específicos, analizar y filtrar las solicitudes de empleo y evaluar a los candidatos b) Sistemas de IA destinados a ser utilizados para tomar decisiones que afecten a las condiciones de las relaciones de índole laboral o a la promoción o rescisión de relaciones contractuales de índole laboral, para la asignación de tareas a partir de comportamientos individuales o rasgos o características personales o para supervisar y evaluar el rendimiento y el comportamiento de las personas en el marco de dichas relaciones"
   - URL: https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=OJ:L_202401689
   - Norma: Reglamento (UE) 2024/1689 (DO L de 12 de julio de 2024).
2. **[UE] AI Act, art. 5.1.f: prohibido inferir emociones en el trabajo**
   - Cita: "f) la introducción en el mercado, la puesta en servicio para este fin específico o el uso de sistemas de IA para inferir las emociones de una persona física en los lugares de trabajo y en los centros educativos, excepto cuando el sistema de IA esté destinado a ser instalado o introducido en el mercado por motivos médicos o de seguridad;"
   - Aplicable desde el **2 de febrero de 2025** (art. 113.a: "los capítulos I y II serán aplicables a partir del 2 de febrero de 2025").
3. **[UE] Fechas tras el Digital Omnibus: el alto riesgo del Anexo III se aplaza al 2 de diciembre de 2027**
   - Norma: **Reglamento (UE) 2026/1744** del Parlamento Europeo y del Consejo, de 8 de julio de 2026 ("Ómnibus digital sobre IA"), DO serie L de 24 de julio de 2026. Cita: "El presente Reglamento entrará en vigor a los tres días de su publicación en el Diario Oficial de la Unión Europea" (es decir, el 27 de julio de 2026).
   - Nuevo art. 113.c, cita literal: "el capítulo III, secciones 1, 2 y 3, con excepción de su artículo 6, apartado 5, será aplicable a partir del: i) 2 de diciembre de 2027 en lo que respecta a los sistemas de IA clasificados como de alto riesgo en virtud del artículo 6, apartado 2, y el anexo III, y ii) 2 de agosto de 2028 en lo que respecta a los sistemas de IA clasificados como de alto riesgo en virtud del artículo 6, apartado 1, y al anexo I;"
   - Considerando sobre el motivo, cita: "el retraso en la disponibilidad de normas, especificaciones comunes y orientaciones alternativas, así como en el establecimiento de las autoridades nacionales competentes, plantean retos que ponen en peligro la aplicación efectiva de dichas obligaciones"
   - URL: https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=OJ:L_202601744
   - **Consecuencia para RR. HH.:** el cribado de CV, la evaluación de candidatos y el seguimiento del rendimiento (Anexo III.4) **no** son alto riesgo exigible el 2 de agosto de 2026, sino el **2 de diciembre de 2027**. La prohibición del reconocimiento de emociones (art. 5.1.f) ya está en vigor desde el 2 de febrero de 2025. En el texto del Omnibus no aparece ninguna modificación del Anexo III.4 ni del art. 5.1.f (búsqueda hecha en el texto).
   - **Nota cruzada para A1/A2/A7:** el Omnibus reescribe el art. 4 (alfabetización). Cita del nuevo art. 4.1: "Los proveedores y responsables del despliegue de sistemas de IA adoptarán medidas para apoyar la promoción de la alfabetización en materia de IA de su personal [...] Esta obligación no exige que los proveedores o los responsables del despliegue garanticen un nivel específico de alfabetización en materia de IA de ninguna persona en particular." Ojo: esto cambia el enfoque de "garantizar un nivel suficiente" del texto original de 2024.
4. **[ES] Estatuto de los Trabajadores, art. 64.4.d ("Ley Rider"): información algorítmica al comité de empresa**
   - Cita: "d) Ser informado por la empresa de los parámetros, reglas e instrucciones en los que se basan los algoritmos o sistemas de inteligencia artificial que afectan a la toma de decisiones que pueden incidir en las condiciones de trabajo, el acceso y mantenimiento del empleo, incluida la elaboración de perfiles."
   - Origen (nota del BOE): "Se añade la letra d) al apartado 4, con efectos de 12 de agosto de 2021, por el art. único.1 del Real Decreto-ley 9/2021, de 11 de mayo", después Ley 12/2021, de 28 de septiembre.
   - URL: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430 (texto consolidado del Real Decreto Legislativo 2/2015).

### Caso real
- **Amazon y su herramienta de reclutamiento sesgada contra mujeres** [GLOBAL / EE. UU.]
  - Cita: "In effect, Amazon's system taught itself that male candidates were preferable. It penalized resumes that included the word "women's," as in "women's chess club captain." And it downgraded graduates of two all-women's colleges"
  - Cita: "That is because Amazon's computer models were trained to vet applicants by observing patterns in resumes submitted to the company over a 10-year period. Most came from men"
  - Cita (respuesta de Amazon): the tool "was never used by Amazon recruiters to evaluate candidates."
  - URL: https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G (Reuters bloquea la descarga; verificado en la copia de Wayback Machine http://web.archive.org/web/2018id_/https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G)
  - Autor: Jeffrey Dastin (Reuters). Publicación: 10 de octubre de 2018. Hechos de 2014 a 2017. Fuentes anónimas ("five people familiar with the effort").

---

## D5. IA para despachos y asesorías jurídicas

### Casos reales
1. **Mata v. Avianca (S.D.N.Y., 2023)** [EE. UU.]
   - Hecho: los abogados presentaron opiniones judiciales inexistentes generadas por ChatGPT ("Varghese", "Shaboon", "Petersen", "Martinez", "Durden", "Miller") y siguieron defendiéndolas después de que el tribunal las cuestionara. Sanción: 5.000 USD solidarios y cartas obligatorias al cliente y a cada juez a quien se había atribuido falsamente una opinión.
   - Cita (Opinion and Order on Sanctions, juez P. Kevin Castel): "Technological advances are commonplace and there is nothing inherently improper about using a reliable artificial intelligence tool for assistance. But existing rules impose a gatekeeping role on attorneys to ensure the accuracy of their filings."
   - Cita: "Respondents [...] abandoned their responsibilities when they submitted non-existent judicial opinions with fake quotes and citations created by the artificial intelligence tool ChatGPT, then continued to stand by the fake opinions after judicial orders called their existence into question."
   - Cita (asiento del expediente): "d. A penalty of $5,000 is jointly and severally imposed on Respondents and shall be paid into the Registry of this Court within 14 days of this Opinion and Order. SO ORDERED. (Signed by Judge P. Kevin Castel on 6/22/2023)"
   - URL de la orden (PDF, expediente 54): https://storage.courtlistener.com/recap/gov.uscourts.nysd.575368/gov.uscourts.nysd.575368.54.0.pdf
   - Expediente: https://www.courtlistener.com/docket/63107798/mata-v-avianca-inc/ (caso 1:22-cv-01461).
   - Fecha de la resolución: 22 de junio de 2023.
2. **Base de datos de Damien Charlotin: 2.199 resoluciones judiciales con contenido alucinado por IA** [GLOBAL]
   - Cita: "While seeking to be exhaustive ( 2199 cases identified so far), it is a work in progress and will expand as new examples emerge." · "Last updated: 16 October 2026"
   - Alcance, cita: "this does not cover mere allegations of hallucinations, but only cases where the court or tribunal has explicitly found (or implied) that a party relied on hallucinated content or material."
   - Desglose por jurisdicción (datos del gráfico de la página, n = 2.201): EE. UU. 1.501 · Canadá 232 · Australia 112 · Reino Unido 76 · Israel 58 · Brasil 41 · India 16 · Italia 15 · Francia 14 · Alemania 11 · Argentina 10 · **España 8** · otros 107. (El contador del texto dice 2.199 y el del gráfico 2.201: diferencia de actualización. Usad "más de 2.000" o "2.199 a 16-10-2026").
   - URL: https://www.damiencharlotin.com/hallucinations/ (filtro de España: https://www.damiencharlotin.com/hallucinations/?states=Spain)
3. **Casos en España** (los 8 que recoge la base de Charlotin a 16-10-2026, verificados en el listado filtrado; detalles complementados con las fuentes indicadas)
   - **TSJ Navarra, ATSJ NA 38/2024, 4 de septiembre de 2024.** Abogado que usó ChatGPT (la base indica "CHATGPT 3"); norma inventada ("Fabricated – Legal Norm"). Según Revista Abogacía, el tribunal "decidió no sancionar a un abogado que utilizó ChatGPT para redactar una querella", "incluyendo por error preceptos del Código Penal de Colombia", y "archivó el procedimiento sin sanción", aunque advirtió que "el uso descuidado de la tecnología jurídica puede vulnerar principios éticos, deontológicos y procesales fundamentales". URL: https://www.revistaabogacia.com/inteligencia-artificial-y-crisis-de-la-responsabilidad-juridica-una-advertencia-desde-navarra-para-el-porvenir-judicial-mexicano/ (medio mexicano, publicado el 30 de julio de 2025). El texto del auto no se consultó en CENDOJ, pero sí en la copia de la base de Charlotin: ver G2-C6 (cita literal, "CHATGPT 3", archivo sin sanción).
   - **Tribunal Constitucional, Acuerdo de la Sala Primera de 9 de septiembre de 2024 (Nota Informativa 90/2024).** Cita: "ha adoptado un Acuerdo por el que se impone al abogado firmante de una demanda de amparo la sanción de "apercibimiento" [...] al haber presentado en varios apartados de dicha demanda la cita supuestamente literal de pasajes de 19 sentencias del Tribunal Constitucional, al efecto entrecomilladas, cuando resulta que ninguna de ellas era real." Cita: "fuera cual fuese la causa de la inclusión de citas irreales (uso de la inteligencia artificial, entrecomillado de argumentos propios, etcétera), el letrado es siempre responsable de revisar exhaustivamente todo el contenido". Se dio traslado al Colegio de la Abogacía de Barcelona. URL (copia del PDF oficial alojada en la base de Charlotin): https://kgvucgerdzgtgspkrtnw.supabase.co/storage/v1/object/public/cases/ES/20240919%20-%2090_2024%20-%20TC%20Nota%20Informativa.pdf. Ojo: el TC **no** afirma que se usara IA; considera irrelevante la causa.
   - **AP Alicante, SAP A 1558/2025 (ECLI:ES:APA:2025:1558), 8 de octubre de 2025:** citas falsas de jurisprudencia y remisión al Colegio de la Abogacía (según Charlotin).
   - **Ceuta, causa penal sin identificar, 1 de diciembre de 2025:** uso de IA atribuido a un juez y a un fiscal; marcado como "Alleged AI Use", no confirmado.
   - **TSJ Gran Canaria, Sentencia 126/2025, 31 de diciembre de 2025:** cita apócrifa atribuida a la STS 104/2019 y un supuesto informe del CGPJ de 2019 inexistente.
   - **TSJ Gran Canaria, caso 140/2025, 10 de febrero de 2026:** según el informe documental, cita: "48 de 52 citas generadas por herramienta de IA y ninguna de las notas textuales reproducidas aparece en las sentencias invocadas". Multa de 420 € y remisión al Colegio (según Charlotin).
   - **Tribunal Supremo, BFF Finance Iberia v. Junta de Comunidades de Castilla-La Mancha, 29 de junio de 2026:** citas que no coinciden con las sentencias de CENDOJ; el tribunal no las tiene en cuenta y no impone sanción.
   - **TSX Galicia, Recurso de Suplicación 5472/2025, 7 de julio de 2026:** varias citas inventadas del TS, el TC y el TJUE. Multa de 1.800 €, calculada por referencia al coste anual de una herramienta jurídica de IA verificada (según Charlotin).
   - **TSJ Canarias, multa de 840 € (prensa, julio de 2026).** Cita: "El Tribunal Superior de Justicia de Canarias (TSJC) ha multado con 840 euros a un abogado por utilizar en un recurso citas entrecomillas de múltiples sentencias del Tribunal Supremo y el Tribunal Constitucional que no existen, sino que fueron inventadas por un sistema de inteligencia artificial." URL: https://www.vozpopuli.com/tribunales/multan-a-un-abogado-que-uso-sentencias-falsas-del-supremo-y-del-constitucional-generadas-por-ia.html (publicado el 30 de julio de 2026). La base de Charlotin no muestra este importe; puede ser una resolución distinta de las dos del TSJ Gran Canaria. **Aclaradlo antes de publicar.**

### Estudio de herramientas jurídicas de IA [EE. UU.]
- **Stanford RegLab/HAI (Magesh et al.):** las herramientas jurídicas con RAG también alucinan.
  - Cita (abstract, arXiv): "we find that the AI research tools made by LexisNexis (Lexis+ AI) and Thomson Reuters (Westlaw AI-Assisted Research and Ask Practical Law AI) each hallucinate between 17% and 33% of the time."
  - Cita (nota de HAI, actualizada): "the Lexis+ AI and Ask Practical Law AI systems produced incorrect information more than 17% of the time, while Westlaw's AI-Assisted Research hallucinated more than 34% of the time."
  - Cita (HAI, sobre los chatbots generalistas): "our previous study of general-purpose chatbots found that they hallucinated between 58% and 82% of the time on legal queries"
  - URL del paper: https://arxiv.org/abs/2405.20362 (enviado el 30 de mayo de 2024).
  - URL de la nota: https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries (23 de mayo de 2024, actualizada el 30 de mayo de 2024).
  - Muestra: más de 200 consultas jurídicas abiertas, en un dataset preregistrado. Ámbito: derecho estadounidense.
  - Aviso: el abstract dice 17–33 % y la nota de HAI dice ">34 %" para Westlaw. Citad el abstract ("entre el 17 % y el 33 %"), o ambas cifras con su fuente.

### Guías profesionales en España [ES]
- **CGAE, circular interpretativa sobre escritos elaborados con IA generativa (abril de 2026).**
  - Cita: "La IA dista mucho de carecer de riesgos y por tanto no debe operar como un sustituto del profesional de la abogacía, sino como una función auxiliar, sujeta además a supervisión humana"
  - Cita: "La rectificación a tiempo del documento erróneo… podría impedir la consumación de la infracción de resultado, dado que el profesional sí ha realizado la tarea de control o verificación"
  - Recomienda documentar cuándo y para qué se ha usado la IA (trazabilidad).
  - URL: https://elderecho.com/la-abogacia-espanola-advierte-de-los-riesgos-de-usar-la-ia-generativa-en-textos-profesionales (13 de abril de 2026; medio de referencia, no el texto de la circular).
- **ICAM, "Guía de Buenas Prácticas para el Uso de la Inteligencia Artificial en la Abogacía".**
  - Cita: "la tecnología es una herramienta de apoyo, pero no reemplaza ni debe reemplazar al abogado ni a su criterio profesional. La abogacía debe mantener siempre la supervisión, el juicio crítico y una diligencia reforzada en el uso de estas herramientas"
  - URL: https://web.icam.es/el-icam-lanza-la-primera-guia-practica-para-un-uso-responsable-de-la-ia-en-la-abogacia/ (en la página aparecen dos fechas: 7 de octubre de 2025, probablemente la de publicación, y 17 de septiembre de 2026, probablemente una actualización).

---

## D6. IA en finanzas y contabilidad

### Hechos clave
1. **Gartner 2025: el 59 % de las funciones financieras usa IA y la adopción se estanca** [GLOBAL]
   - Cita: "Finance AI adoption in 2025 is consistent with last year, with 59% of finance leaders reporting the use of AI in their finance function"
   - Cita: "According to the 2025 Gartner AI in Finance Survey of 183 chief financial officers (CFOs) and senior finance leaders – taken May through June 2025 – the results show only a slight increase in adoption compared to the 2024 survey, which found 58% of finance functions were using AI."
   - Cita (Marco Steecker): "The momentum in finance AI adoption has slowed following a sharp increase from 37% in 2023 to 58% adoption last year"
   - Usos, cita: "Knowledge management [...] is the most common AI use case (49%) in finance organizations, followed by accounts payable process automation (37%), and error and anomaly detection (34%)"
   - Impacto, cita: "91% of respondents reporting low or moderate impact initially."
   - URL: https://www.gartner.com/en/newsroom/press-releases/2025-11-18-gartner-survey-shows-finance-ai-adoption-remains-steady-in-2025 (verificado en el espejo https://gcom.pdo.aws.gartner.com/en/newsroom/press-releases/2025-11-18-gartner-survey-shows-finance-ai-adoption-remains-steady-in-2025)
   - Publicación: 18 de noviembre de 2025. Año de referencia: mayo y junio de 2025. Muestra: 183 CFO y responsables financieros (el comunicado no especifica los países).
2. **Gartner 2024: del 37 % al 58 % en un año** [GLOBAL]
   - Cita: "The adoption of finance AI by finance functions has increased significantly in the past year with 58% using the technology in 2024 - a rise of 21 percentage points from 2023"
   - Cita: "Gartner surveyed 121 finance leaders in June 2024"
   - Usos 2024: automatización inteligente de procesos (44 %) y detección de anomalías y errores (39 %).
   - URL: https://www.gartner.com/en/newsroom/press-releases/2024-09-11-gartner-survey-shows-58-percent-of-finance-functions-use-ai-in-2024 (verificado en el espejo gcom.pdo.aws.gartner.com)
   - Publicación: 11 de septiembre de 2024. Año de referencia: junio de 2024. Muestra: 121 responsables financieros.
3. **[UE] Administración y gestión** es el segundo uso de la IA en las empresas de la UE que la usan: 31,05 % (Eurostat 2025, ver D1). Por tamaño, cita: "organisation of business administration processes or management (43.38% large enterprises, 28.49% small enterprises)".

### No verificado en D6
- Estudios académicos o del BCE/Banco de España sobre IA específicamente en contabilidad o en la función financiera de las empresas: no encontrados en el tiempo disponible. El artículo EBAE del Banco de España (D1) es general, no de finanzas.

---

## D7. IA en atención al cliente sin perder el trato humano

### Hechos clave
1. **Brynjolfsson et al.:** +14 % de productividad media y +34 % en novatos; mejora el sentimiento del cliente y la retención de agentes (ver 0.1). Es la mejor evidencia de campo disponible.
2. **Gartner: en 2029 la IA agéntica resolverá el 80 % de las incidencias habituales sin intervención humana (predicción)** [GLOBAL]
   - Cita: "By 2029, agentic AI will autonomously resolve 80% of common customer service issues without human intervention, leading to a 30% reduction in operational costs, according to Gartner, Inc."
   - URL: https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290 (verificado en la copia de Wayback Machine http://web.archive.org/web/2025id_/ + misma URL)
   - Publicación: 5 de marzo de 2025 (Stamford). Tipo: **predicción**, no un dato medido.
3. **Gartner: el 64 % de los clientes preferiría que las empresas no usaran IA en atención al cliente** [GLOBAL]
   - Cita: "Sixty-four percent of customers would prefer that companies didn't use artificial intelligence (AI) in their customer service, according to a survey by Gartner, Inc. Furthermore, 53% of customers would consider switching to a competitor if they found out a company was going to use AI for customer service."
   - Cita: "A Gartner survey of 5,728 customers conducted in December 2023"
   - URL: https://www.gartner.com/en/newsroom/press-releases/2024-07-09-gartner-survey-finds-64-percent-of-customers-would-prefer-that-companies-didnt-use-ai-for-customer-service (verificado en el espejo gcom.pdo.aws.gartner.com)
   - Publicación: 9 de julio de 2024. Año de referencia: diciembre de 2023. Muestra: 5.728 clientes.

### Casos reales
1. **Moffatt v. Air Canada, 2024 BCCRT 149** [CA]
   - Hecho: el chatbot de Air Canada dijo que se podía pedir la tarifa por duelo de forma retroactiva en un plazo de 90 días, lo que contradecía la política publicada en otra página de la web. El tribunal condena a la aerolínea por *negligent misrepresentation*.
   - Cita (texto del chatbot recogido en la resolución): "If you need to travel immediately or have already travelled and would like to submit your ticket for a reduced bereavement rate, kindly do so within 90 days of the date your ticket was issued by completing our Ticket Refund Application form."
   - Cita clave (párr. 27): "In effect, Air Canada suggests the chatbot is a separate legal entity that is responsible for its own actions. This is a remarkable submission. While a chatbot has an interactive component, it is still just a part of Air Canada's website. It should be obvious to Air Canada that it is responsible for all the information on its website. It makes no difference whether the information comes from a static page or a chatbot."
   - Cita (párr. 28): "It also does not explain why customers should have to double-check information found in one part of its website on another part of its website."
   - Fallo (párr. 44): "I order Air Canada to pay Mr. Moffatt a total of $812.02, broken down as follows: a. $650.88 in damages, b. $36.14 in pre-judgment interest under the Court Order Interest Act , and c. $125 in CRT fees."
   - Hecho adicional (párr. 22): un representante de Air Canada admitió que el chatbot había dado "misleading words".
   - URL: https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do (texto verificado en la versión ?iframe=true)
   - Organismo: Civil Resolution Tribunal de Columbia Británica; miembro del tribunal: Christopher C. Rivers. Fecha: 14 de febrero de 2024. Hechos: noviembre de 2022. Importe en dólares canadienses (CAD).
2. **Klarna: del asistente que "equivale a 700 agentes" (2024) a volver a contratar personas (2025)** [GLOBAL]
   - Febrero de 2024 (nota de prensa de Klarna), cita: "The AI assistant has had 2.3 million conversations, two-thirds of Klarna's customer service chats It is doing the equivalent work of 700 full-time agents It is on par with human agents in regard to customer satisfaction score It is more accurate in errand resolution, leading to a 25% drop in repeat inquiries Customers now resolve their errands in less than 2 mins compared to 11 mins previously"
   - También: "It's estimated to drive a $40 million USD in profit improvement to Klarna in 2024" y "customers can still choose to interact with live agents if they'd prefer."
   - URL: https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/ (27 de febrero de 2024; datos del primer mes del asistente; son cifras de la propia empresa, sin auditar).
   - Mayo de 2025 (marcha atrás). Según Entrepreneur, que cita una entrevista en Bloomberg, Siemiatkowski reconoce que los chatbots, aunque más baratos, dieron "lower quality" output, y Klarna vuelve a contratar agentes humanos.
     - Cita del CEO: "From a brand perspective, a company perspective, I just think it's so critical that you are clear to your customer that there will always be a human if you want,"
     - Cita del CEO: "Really, investing in the quality of human support is the way of the future for us,"
     - URL: https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396 (9 de mayo de 2025). El artículo original de Bloomberg no se consultó (de pago).

### Mensaje para el artículo
- La evidencia (Brynjolfsson) muestra que la IA como **copiloto del agente humano** sube la productividad y la satisfacción. Los casos Air Canada y Klarna muestran el riesgo de sustituir al humano sin control. Y el 64 % de los clientes recela de la IA en atención al cliente (Gartner).

---

---

## D8. IA para la dirección: cómo hacer una hoja de ruta

### Hechos clave

**D8-1. Adopción organizativa: el 88 % de los encuestados dice que su organización usa IA en al menos una función (2025), frente al 78 % en 2024.**
- Cita: "A large majority of respondents reported that their organization uses AI in at least one business function, up to 88% in 2025 from 78% in 2024 (Figure 4.3.1). Over half of respondents reported three or more business functions leveraging AI."
- URL: S1 (PDF, cap. 4.3 "Corporate AI Adoption"). Organismo: Stanford HAI, con datos de la McKinsey Global Survey "The State of AI in 2025: Agents, Innovation, and Transformation".
- Año de referencia: 2025. Publicación: 2026. Consulta: 2026-10-18.
- Muestra: "The online survey ran from June 25, 2025, to July 29, 2025, and garnered responses from 1,993 participants in 105 nations representing the full range of regions, industries, company sizes, functional specialties, and tenures." Ámbito: global.
- Matiz del propio informe: "the results are self-reported and should be viewed as directional rather than comprehensive."

**D8-2. IA generativa: 79 % (2025) frente a 71 % (2024). Europa ganó 11 puntos.**
- Cita: "Use of generative AI mirrored that growth, with 79% of respondents reporting that their organizations regularly use generative AI in at least one business function, compared to 71% in 2024. [...] China and Europe experienced higher year-over-year increases, with reported organizational AI use growing 13 and 11 percentage points, respectively."
- URL: S1. Año de referencia: 2025. Ámbito: global, con desglose regional.
- Ojo: los "highlights" del capítulo 4 del mismo PDF dicen "Generative AI is now used in at least one business function at 70% of organizations". Hay una incoherencia interna (70 % frente a 79 %). Usad el 79 % del cuerpo del texto y la figura 4.3, o no deis la cifra.

**D8-3. Los agentes siguen en fase temprana.**
- Cita: "AI agent deployment was in the single digits across nearly all business functions." (S1, highlights del cap. 4)
- Año de referencia: 2025. Ámbito: global.

**D8-4. Solo el 5 % de las empresas obtiene valor de la IA a escala y el 60 % no obtiene valor material.**
- Cita: "Only 5% of companies in our 2025 study of more than 1,250 firms worldwide are achieving AI value at scale [...]. Fully 60% of companies are not achieving material value at all, reporting minimal revenue and cost gains despite substantial investment. Another 35% (13 percentage points more than in 2024) are scaling up their efforts and seeing some returns".
- URL: S4. Organismo: BCG. Año de referencia: 2025. Publicación: 30-09-2025. Muestra: n = 1.250. Ámbito: global.
- Ventaja de las empresas "future-built" frente a las rezagadas: "1.7x Revenue growth 3.6x Three-year TSR 2.7x Return on invested capital 1.6x EBIT margin".

**D8-5. Regla 10-20-70: el 70 % del esfuerzo debe ir a personas y procesos.**
- Cita (2025): "Adherence to our 10-20-70 rule for technology transformations will help speed the journey: 70% of a business's strategic focus should be on the people and processes, 20% on the tech, and 10% on algorithms." (S4)
- Cita (2024): "with around 70% stemming from people- and process-related issues, 20% attributed to technology problems, and only 10% involving AI algorithms" y "Leaders follow the rule of putting 10% of their resources into algorithms, 20% into technology and data, and 70% in people and processes." (S3)
- Organismo: BCG. Año de referencia: 2024 y 2025. Ámbito: global.

**D8-6. En 2024, el 74 % de las empresas aún no había obtenido valor tangible.**
- Cita: "Seventy-four percent of companies have yet to show tangible value from their use of AI." y "While just 4% of companies have developed cutting-edge AI capabilities across functions [...] an additional 22% have implemented an AI strategy, built advanced capabilities".
- Resultados de los líderes: "AI leaders have achieved 1.5 times higher revenue growth, 1.6 times greater shareholder returns" y "1.4 times higher returns on invested capital."
- URL: S3. Organismo: BCG. Año de referencia: 2024. Publicación: 24-10-2024. Muestra: "1,000 CxOs and senior executives from over 20 sectors", "spanning 59 countries in Asia, Europe, and North America". Ámbito: global.

**D8-7. El valor está en el negocio principal, no en las funciones de soporte.**
- 2025: "Our research has found that 70% of potential value from AI is concentrated in core business functions such as sales and marketing, manufacturing, supply chain, and pricing. R&D and innovation alone account for 15% of the total potential value." (S4)
- 2024: "AI's greatest value lies in core business processes where leaders are generating 62% of the value." (S3)
- Agentes: "Agents, hardly spoken of at all in 2024, already account for 17% of total AI value in 2025 and are expected to reach 29% by 2028." (S4)

**D8-8. Las empresas que van por delante miden el valor.**
- Cita: "More than 60% of future-built firms rigorously track AI value, compared with only 17% of stagnating companies." (S4, BCG, 2025)

**D8-9. Riesgo y seguridad.**
- Cita: "72% of companies already report unmanaged AI-security risks." (S4, BCG, 2025)
- Barreras para escalar agentes (encuesta AI Index y McKinsey, 2025): "Security and risk concerns far outweighed the others, with 62% of respondents naming these as the primary obstacle, followed by technical limitations (38%) and regulatory uncertainty (38%)." (S1, cap. 3.3)

**D8-10. Falta de plan en la dirección (2024).**
- Cita: "60% of leaders worry their organization's leadership lacks a plan and vision to implement AI." y "79% of leaders agree their company needs to adopt AI to stay competitive, but 59% worry about quantifying the productivity gains of AI."
- URL: S6. Organismo: Microsoft y LinkedIn. Año de referencia: 2024. Muestra: 31.000 trabajadores del conocimiento, 31 mercados (España incluida). Ámbito: global.

**D8-11. 2025, "año bisagra" según los directivos.**
- Cita: "82% of leaders say this is a pivotal year to rethink key aspects of strategy and operations, and 81% say they expect agents to be moderately or extensively integrated into their company's AI strategy in the next 12–18 months. Adoption is accelerating: 24% of leaders say their companies have already deployed AI organization-wide, while just 12% remain in pilot mode."
- URL: S7. Año de referencia: 2025. Publicación: 23-04-2025. Muestra: 31.000 trabajadores, 31 mercados (España incluida). Ámbito: global.

**D8-12. Los factores de organización pesan el doble que los individuales en el impacto de la IA (2026).**
- Cita: "organizational factors like culture, manager support, and talent practices account for more than 2x the reported AI impact of individual factors like mindset and behavior ( 67% vs. 32% )."
- Más: "Only 19% of AI users are Frontier [...]. At the other end, 16% are stalled"; "65% of AI users fear falling behind if they don't use AI to adapt quickly, yet 45% say it feels safer to focus on current goals than to redesign work with AI. And only 13% of AI users say they're rewarded for reinvention of work with AI even if results aren't met."
- URL: S8. Año de referencia: 2026. Publicación: 05-05-2026. Muestra: 20.000 trabajadores del conocimiento que usan IA, 10 mercados (EE. UU., Brasil, Australia, India, Japón, Francia, Alemania, Italia, Países Bajos y Reino Unido; **sin España**). El propio informe avisa: "Values show a statistical association, not a causal effect."
- Fechas de campo: la metodología dice "between February 18, 2026, and April 7, 2026", pero las notas de los gráficos dicen "February 18–April 20, 2026". Si se cita, usad "febrero a abril de 2026".

**D8-13. Marco de gestión de riesgos para estructurar la hoja de ruta (NIST AI RMF).**
- Cita: "the Core is composed of four functions: GOVERN, MAP, MEASURE, and MANAGE."
- Sobre su naturaleza: "intended for voluntary use [...] Released on January 26, 2023". Perfil para IA generativa: "On July 26, 2024, NIST released NIST-AI- 600-1, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile".
- URL: S21. Organismo: NIST. Ámbito: EE. UU., de uso internacional.

### Citas útiles (D8)
- "70% of a business's strategic focus should be on the people and processes, 20% on the tech, and 10% on algorithms." (BCG, 2025)
- "The real question isn't whether people have the right skills. It's whether the organization is built to unlock them." (Microsoft WTI 2026)

---

## F1. Cómo elegir una empresa de formación en IA: criterios

### Hechos clave (para justificar criterios)

**F1-1. Criterio: formación con horas suficientes y con parte presencial o con coaching. Cinco horas o más marcan la diferencia en el uso habitual.**
- Cita: "Regular usage is sharply higher for employees that receive at least five hours of training and have access to in-person training…"
- URL: S5. Organismo: BCG. Año de referencia: 2025. Publicación: 26-06-2025. Muestra: "11 countries and regions and more than 10,600 leaders, managers, and frontline white-collar employees." No se pudo comprobar si España está entre los 11 (la página no lista los países). Ámbito: global.
- La página no publica las tasas exactas de uso con y sin las 5 horas (estarían en la presentación adjunta, no consultable).

**F1-2. Solo un tercio de los empleados dice haber recibido formación adecuada.**
- Cita: "Only one-third of employees say that they have been properly trained." (S5, BCG, 2025)

**F1-3. Criterio: que la formación se apoye en el trabajo real (rediseño de procesos), no solo en la herramienta.**
- Cita: "High performers [...] fundamentally redesigned individual workflows". **No verificado en fuente primaria** (McKinsey bloquea el acceso). Usad en su lugar el dato de BCG S5: "One-half of companies, led by those in financial services and technology," están en la fase "Reshape" (rediseño de flujos de trabajo). Esa frase la devolvió WebFetch; no se pudo descargar la página para cotejarla al pie de la letra.

**F1-4. Criterio legal: alfabetización en IA según el AI Act (ver N1-1 a N1-3).** La Comisión aclara que no hace falta un certificado. Una empresa de formación que "venda" un certificado obligatorio está exagerando.
- Cita: "There is no need for a certificate. Organisations can keep an internal record of trainings and/or other guiding initiatives." (S18, Comisión Europea, actualizado el 27-07-2026)

**F1-5. Criterio: contenidos sobre control de calidad y pensamiento crítico.**
- Cita: "Asked which human skills are more important as AI takes on more work, they said two topped the list: quality control of AI output ( 50% ) and critical thinking [...] ( 46% ). And 86% say they treat AI output as a starting point, not a final answer".
- URL: S8. Organismo: Microsoft. Año de referencia: 2026. Ámbito: 10 mercados, sin España.

**F1-6. Criterio: que la empresa pueda bonificar el curso por FUNDAE (ver F3).**

**F1-7. Criterio: que incluya evaluación de resultados, no solo encuestas de satisfacción (ver F4, Kirkpatrick).**

---

## F2. Formación en IA in-company frente a online

**F2-1. La formación presencial y el coaching se asocian a más uso habitual.**
- Ver F1-1 (BCG 2025): "at least five hours of training and have access to in-person training…" (también menciona coaching).

**F2-2. Los cursos online abiertos tienen tasas de finalización muy bajas.**
- Cita (Inside Higher Ed, resumiendo el artículo de Science): "Among all MOOC participants, 3.13 percent completed their courses in 2017-18, down from about 4 percent the two previous years and nearly 6 percent in 2014-15. And among the "verified" students, 46 percent completed in 2017-18".
- Cita (página del MIT Teaching Systems Lab): "the bane of MOOCs—low completion rates (2)—has not improved over 6 years."
- URL: S22. Autores: Reich, J. y Ruipérez-Valiente, J. A. (2019), *Science* 363(6423):130-131, DOI 10.1126/science.aav7958. Año de referencia: 2012–2018 (cursos de MIT y Harvard en edX). Ámbito: global.
- Matiz para el redactor: son MOOC abiertos y gratuitos, no formación corporativa online con seguimiento. No extrapoléis el 3 % a cualquier curso online de empresa; el 46 % de los alumnos que pagan es más comparable.

**F2-3. En España, la teleformación ya es mayoritaria en la formación bonificada.**
- Cita (datos): "80 millones Horas de formación · 53% Horas de Teleformación" (formación programada por las empresas, 2025). En el total de la formación para el empleo: "66,5% horas en teleformación".
- URL: S14. Organismo: FUNDAE. Año de referencia: 2025. Publicación: junio de 2026. Ámbito: España, registro administrativo.

**F2-4. La FUNDAE paga menos por hora en teleformación que en presencial (ver F3-2):** presencial 9 €/13 € y teleformación 7,5 € por participante y hora.

**F2-5. Hay alternativas online gratuitas para el nivel básico.**
- Cita: "Welcome to the Elements of AI free online course! Join over 2 million other people learning about the basics of AI." y "The Elements of AI is a series of free online courses created by MinnaLearn and the University of Helsinki."
- URL: S23. Ámbito: global, con versión en España.

---

## F3. Cuánto cuesta una formación en IA para empresas (y cuánto se bonifica)

> No se ha encontrado ninguna fuente pública con metodología fiable sobre el **precio de mercado** de la formación en IA en España. Las páginas que dan tarifas son de proveedores, sin metodología. Lo verificable es el marco de bonificación de FUNDAE y los costes medios de la formación bonificada.

**F3-1. Crédito de formación: cómo se calcula (España).**
- Norma: "las empresas dispondrán anualmente de un «crédito de formación» que podrán hacer efectivo mediante bonificaciones en las cotizaciones empresariales a la Seguridad Social, cuyo importe resultará de aplicar a la cuantía ingresada por la empresa durante el año anterior en concepto de cuota de formación profesional, el porcentaje de bonificación que se establezca en la Ley de Presupuestos Generales del Estado en función del tamaño de las empresas".
- URL: RD 694/2017, art. 11.1 (S15). Ámbito: España.
- Porcentajes vigentes (Ley 31/2022, PGE 2023, disposición adicional nonagésima segunda, apartado Cinco): "a) Empresas de 6 a 9 trabajadores: 100 por ciento. b) De 10 a 49 trabajadores: 75 por ciento. c) De 50 a 249 trabajadores: 60 por ciento. d) De 250 o más trabajadores: 50 por ciento. Las empresas de 1 a 5 trabajadores dispondrán de un crédito de bonificación por empresa de 420 euros, en lugar de un porcentaje."
- Empresas nuevas: "la cuantía de 65 euros" por trabajador de nueva incorporación.
- URL: https://www.boe.es/buscar/act.php?id=BOE-A-2022-22128 (S15).
- **Pendiente de confirmar**: no consta una Ley de PGE para 2026. Las fuentes secundarias indican que siguen prorrogados los de 2023, pero no se ha confirmado en fundae.es qué porcentajes aplica la FUNDAE en 2026.

**F3-2. Módulos económicos máximos (techo de lo bonificable por participante y hora).**
- Cita (guía oficial FUNDAE): "Modalidad de formación Presencial Nivel de formación Básico Superior 9€ 13€ Teleformación 7,5€ Mixta Se aplicarán los módulos anteriores en función de las horas presencial, distancia o teleformación".
- Ejemplo oficial: "13€ x 15 horas x 5 participantes = 975€".
- Costes indirectos: "Los costes indirectos no podrán superar el 10% del coste de la actividad formativa (art.7.3)."
- URL: S16. Organismo: FUNDAE. Publicación: septiembre de 2015 (guía para aplicar la Ley 30/2015). Ámbito: España.
- Base legal: "La empresa podrá utilizar su crédito de formación [...] respetando los módulos económicos máximos (coste por participante y hora de formación) que se establezcan mediante orden" (RD 694/2017, art. 16.1). La Ley 30/2015 dice además: "los módulos económicos vigentes se aplicarán por igual para todas las empresas, cualquiera que sea su tamaño."
- **Matiz**: los importes de 9, 13 y 7,5 € proceden de la guía de 2015. No se ha encontrado en fundae.es una tabla de 2026 que confirme que no han cambiado.

**F3-3. Cofinanciación privada obligatoria según el tamaño de la empresa.**
- Cita: "a excepción de las empresas de 1 a 5 trabajadores que resultan exentas de esta obligación: a) De 6 a 9 trabajadores: 5 por ciento. b) De 10 a 49 trabajadores: 10 por ciento. c) De 50 a 249 trabajadores: 20 por ciento. d) De 250 o más trabajadores: 40 por ciento. Se considerarán incluidos en la cofinanciación privada los costes salariales de los trabajadores que reciben formación en la jornada laboral."
- URL: Ley 30/2015, art. 9.5 (S15). Ámbito: España.

**F3-4. Coste medio real de la formación bonificada en España (2025).**
- Datos FUNDAE 2025, formación programada por las empresas: "348.443 Empresas formadoras · 674 millones Financiación · 6.124.445 Participantes en cursos · 3.542.960 Trabajadores/as formados · 80 millones Horas de formación". Tabla: crédito dispuesto total de 674.285.128 €; duración media de los cursos de 13,1 h; 22,7 h de formación por persona formada.
- **Cálculo propio** (no publicado por FUNDAE): unos 110 € de bonificación por participación y unos 8,4 € por hora y participante. Es un promedio de todos los temas, no de cursos de IA.
- Formación subvencionada (cursos gratuitos para trabajadores): "294€ de media para cada participación".
- URL: S14. Año de referencia: 2025. Ámbito: España, registro administrativo.

**F3-5. Las empresas solo gastan la mitad de su crédito.**
- Datos FUNDAE 2025: ratio de disposición del crédito del 51,8 % en total. Por tamaño: microempresas (1 a 9), 63,2 %; pequeñas (10 a 49), 38,8 %; medianas (50 a 249), 52,7 %; grandes (250 o más), 56,9 %.
- URL: S14. Año de referencia: 2025.

**F3-6. Las pymes españolas apenas usan la formación bonificada.**
- Cobertura sobre las empresas que podrían bonificarse (FUNDAE 2025): microempresas, 15,3 %; pequeñas, 48,6 %; medianas, 80,3 %; grandes, 91,5 %; total, 20,5 %.
- Tasa de empresas formadoras por tramo de plantilla (gráfico): de 1 a 5, 13 %; de 6 a 9, 30 %; de 10 a 49, 49 %; de 50 a 99, 77 %; de 100 a 249, 87 %; de 250 a 499, 90 %; de 500 a 999, 93 %; de 1.000 a 4.999, 94 %; más de 4.999, 98 %. Leído del gráfico extraído del PDF; casa con la tabla de cobertura.
- Evolución anual: +0,3 % de empresas formadoras (+1.001), +5,2 % de participantes (+300.429), +4,1 % de horas y +4,9 % de trabajadores formados.
- URL: S14. Año de referencia: 2025. Ámbito: España.

**F3-7. Hay alternativas gratuitas para la sensibilización básica (ver F2-5).**

---

## F4. Cómo medir el ROI de la formación en IA

**F4-1. Modelo de Kirkpatrick: cuatro niveles.**
- Nivel 1: "Level 1: Reaction measures the degree to which the target audience finds an experience or initiative favorable, engaging, relevant, and supportive of the work needed to achieve the targeted outcomes."
- Nivel 2: "Level 2: Learning measures the degree to which the target audience acquires the intended knowledge, skills, attitude, confidence, and commitment necessary to achieve the targeted outcomes."
- Nivel 3: "Level 3: Behavior measures the degree to which the target audience performs the critical behaviors in its environment and is supported in and accountable for its performance."
- Nivel 4: "Level 4: Results measures the degree to which targeted organizational outcomes occur as a result of an experience or initiative and performance support."
- Recomendación: "Whenever applying the Kirkpatrick Model, it is critical to start with Level 4: Results".
- URL: S19. Organismo: Kirkpatrick Partners. Ámbito: global.

**F4-2. Metodología ROI de Phillips: nivel 5 y fórmula.**
- Cita: "Level 5: Return on Investment (ROI) The ultimate measure of the financial success of a program [...] ROI compares the monetary benefits to the costs of the program."
- Fórmula, tal como aparece en la página: "BCR = Program Benefits / Program Costs" y "ROI (%) = Net Program Benefits / Program Costs" (la división se deduce de la maquetación del texto extraído; en la fórmula estándar se multiplica por 100).
- Paso clave: "Step 2 Isolate the amount of improvement to the program." Técnicas: "Control group arrangement Trend line analysis Forecasting methods Estimations".
- URL: S20. Organismo: ROI Institute. Ámbito: global.

**F4-3. Evidencia de que la formación y el impulso de la empresa elevan el uso (Dinamarca).**
- Cita: "most encourage their use, 38% deploy in-house models, and 30% of employees have received training. These initiatives greatly boost adoption, nearly doubling take-up rates for the typical worker from 47% to 83%." y "the gender gap in chatbot adoption shrinks from 11.9 to 5 percentage points when firms actively encourage use, with training initiatives proving particularly effective."
- URL: S13. Autores: Humlum y Vestergaard. Año de referencia: encuestas de finales de 2023 y 2024. Publicación: 09-05-2025. Muestra: "25,000 workers, 7,000 workplaces", 11 ocupaciones expuestas. Ámbito: Dinamarca.

**F4-4. Pero los ahorros de tiempo medidos son modestos (para no prometer ROI inflado).**
- Cita: "users report average time savings of 2.8% of work hours. This contrasts with the significant productivity gains—often exceeding 15%—documented by RCTs in our study occupations".
- Uso del tiempo ahorrado: "the vast majority (80%) reallocate this time to other job tasks, while fewer than 10% use it for additional breaks or leisure."
- Efecto en salarios y horas: "Our key finding is that the adoption of AI chatbots has had no significant impact on workers' earnings, recorded hours, or wages."
- URL: S13. Ámbito: Dinamarca.

**F4-5. Umbral de hábito: 11 minutos al día durante 11 semanas (Copilot).**
- Cita: "A time savings of just 11 minutes a day was the magic number where users started to see value from AI. [...] the most efficient users saved 30 minutes a day, the equivalent of 10 hours a month, while the average person saved 14 minutes a day, or nearly five hours each month." y "11 weeks is the breakthrough moment at which most people say Copilot improves four key areas at work".
- URL: S9. Organismo: Microsoft WorkLab. Publicación: 19-03-2024. Muestra: "1,300 Microsoft 365 Copilot users"; según la propia página, es una "consumer perception survey". Ámbito: global. Es un estudio de un proveedor y los datos son autodeclarados.

**F4-6. Medir el valor es lo que distingue a las empresas que van por delante.** Ver D8-8: "More than 60% of future-built firms rigorously track AI value, compared with only 17% of stagnating companies." (BCG 2025)

**F4-7. La dificultad para cuantificar es real.** Ver D8-10: "59% worry about quantifying the productivity gains of AI." (Microsoft 2024)

**F4-8. Productividad sectorial (PwC).**
- 2025: "Industries most exposed to AI saw 3x higher growth in revenue per employee (27%) compared to those least exposed (9%)"; la productividad "has nearly quadrupled in industries most exposed to AI" (del 7 % en 2018–2022 al 27 % en 2018–2024). S10. Año de referencia: datos hasta finales de 2024.
- 2026: "Companies operating in the most AI-exposed sectors recorded 34% productivity growth in 2025 relative to 2018" (frente al 24 % de los menos expuestos). S11. Año de referencia: 2025.
- Ámbito: global. Es una correlación sectorial, no un ROI de la formación.

---

## F5. Plan anual de formación en IA para empleados

**F5-1. Prioridad de los directivos: recualificar a la plantilla.**
- Cita: "47% of leaders list upskilling existing employees as a top workforce strategy for the next 12–18 months. 51% of managers say AI training or upskilling will become a key responsibility for their teams within five years. 35% of managers are considering hiring AI trainers to guide employee adoption in the next 12–18 months."
- URL: S7. Organismo: Microsoft. Año de referencia: 2025. Ámbito: global (con España).

**F5-2. El déficit de formación (2024).**
- Cita: "Only 39% of people globally who use AI at work have gotten AI training from their company. Only 25% of companies are planning to offer training on generative AI this year, further cementing this training deficit."
- URL: S6. Año de referencia: 2024. Ámbito: global (con España).

**F5-3. Uso sin control si no hay herramientas ni formación (BYOAI).**
- 2024: "78% of AI users are bringing their own AI tools to work (BYOAI)—it's even more common at small and medium-sized companies ( 80% )." (S6)
- 2025: "When employees don't have the AI tools they need, more than half said they will find alternatives and use them anyway." (S5, BCG)

**F5-4. Escala de la necesidad de recualificación (WEF).**
- Cita: "if the world's workforce was made up of 100 people, 59 would need training by 2030. Of these, employers foresee that 29 could be upskilled in their current roles and 19 could be upskilled and redeployed elsewhere within their organization. However, 11 would be unlikely to receive the reskilling or upkskilling needed" (la errata "upkskilling" está en el original).
- Cambio de habilidades: "Overall, employers expect 39% of workers' core skills to change by 2030". Dato de España en la figura por países: **37 %** (media mundial, 39 %).
- Prioridad de las empresas: "85% of employers surveyed plan to prioritize upskilling their workforce, with 70% of employers expecting to hire staff with new skills, 40% planning to reduce staff as their skills become less relevant".
- Ante la IA: "half of employers plan to reorient their business in response to AI, two-thirds plan to hire talent with specific AI skills, while 40% anticipate reducing their workforce where AI can automate tasks."
- Habilidad que más crece: "AI and big data top the list of fastest-growing skills, followed closely by networks and cybersecurity as well as technology literacy."
- URL: S12. Organismo: WEF. Año de referencia: horizonte 2025–2030, encuesta de finales de 2024. Publicación: enero de 2025. Muestra: "over 1,000 leading global employers—collectively representing more than 14 million workers across 22 industry clusters and 55 economies". Ámbito: global, con perfil de España.

**F5-5. Barrera principal para transformarse: la falta de habilidades.**
- Global: "1. Skills gaps in the labour market 63% 2. Organizational culture and resistance to change 46%" (figura 4.1). S12.
- España (texto del perfil): "Key barriers to transformation perceived by respondents include skills gaps, regulatory frameworks, and resistance to change and organizational cultures. To address talent availability challenges via public policy, 60% of employers in Spain see potential in increased flexibility in hiring and firing practices, and 49% in increased flexibility in setting wages, in addition to public funding for reskilling and upskilling (65%)." S12. Ámbito: España.

**F5-6. Permiso retribuido de 20 horas anuales (España): el plan de formación de la empresa puede cubrirlo.**
- Cita: "Cuando el trabajador pueda realizar las acciones formativas [...] en el marco de un plan de formación desarrollado por iniciativa empresarial o comprometido por la negociación colectiva, se entenderá cumplido, en todo caso, el derecho del trabajador al permiso retribuido de veinte horas anuales de formación profesional para el empleo, reconocido en el artículo 23.3 del texto refundido de la Ley del Estatuto de los Trabajadores".
- URL: Ley 30/2015, art. 9.6 (S15). Ámbito: España.

**F5-7. Calendario y presupuesto: crédito FUNDAE y cofinanciación.** Ver F3-1 a F3-3.

**F5-8. Prima salarial de las habilidades de IA (argumento para retener talento).**
- 2026: "the average wage premium for workers with AI skills continued to surge higher – hitting 62%, up from 57% last year." y "growing roughly eight times (69%) as fast as the overall jobs market, at 9%." S11. Publicación: 15-06-2026. Año de referencia: 2025. Muestra: "more than one billion jobs advertisements in 27 countries and territories".
- 2025: "with the average premium hitting 56%, up from 25% last year." y "The skills sought by employers are changing 66% faster in occupations most exposed to AI". S10. Publicación: 03-06-2025. Año de referencia: 2024.
- **Incoherencia entre ediciones**: la edición de 2026 dice que el dato del año anterior era el 57 %, pero la de 2025 publicó un 56 %. Probablemente es una revisión metodológica. Citad cada cifra con su edición.

**F5-9. Las empresas "future-built" forman a más de la mitad de la plantilla.**
- Cita: "especially through broad-based upskilling of current staff (more than 50% of the internal workforce)." y "Software companies plan to upskill 55% of their staff in the coming year while chemicals and machinery and automation firms plan to train less than 15%."
- URL: S4. Organismo: BCG. Año de referencia: 2025.

**F5-10. La alfabetización en IA es la habilidad más demandada de 2025 según LinkedIn (citado por Microsoft).**
- Cita: "AI literacy is now the most in-demand skill of 2025, according to LinkedIn." (S7). Es un dato de segunda mano: Microsoft atribuye la cifra a LinkedIn, que es del mismo grupo.

---

## N1. Qué formación en IA necesita una empresa para empezar

**N1-1. La obligación legal (AI Act, art. 4, texto original de 2024).**
- Cita: "Los proveedores y responsables del despliegue de sistemas de IA adoptarán medidas para garantizar que, en la mayor medida posible, su personal y demás personas que se encarguen en su nombre del funcionamiento y la utilización de sistemas de IA tengan un nivel suficiente de alfabetización en materia de IA, teniendo en cuenta sus conocimientos técnicos, su experiencia, su educación y su formación, así como el contexto previsto de uso de los sistemas de IA y las personas o los colectivos de personas en que se van a utilizar dichos sistemas."
- Definición (art. 3.56): "«alfabetización en materia de IA»: las capacidades, los conocimientos y la comprensión que permiten a los proveedores, responsables del despliegue y demás personas afectadas [...] llevar a cabo un despliegue informado de los sistemas de IA y tomar conciencia de las oportunidades y los riesgos que plantea la IA, así como de los perjuicios que puede causar".
- URL: S17. Ámbito: UE.

**N1-2. Lo que cambió con el Digital Omnibus (según la Comisión, ya en vigor).**
- Cita: "Article 4 was amended to: Ensure AI literacy remains an obligation for providers and deployers of AI systems, but no specific – or 'sufficient' - level is mandated (Article 4(1)); Call the European Commission and Member States to continue to support providers and deployers' efforts [...] (Article 4(2)); Require the AI Board to adopt recommendations on Article 4 [...] (Article 4(3)). It is also important to highlight that for those who deploy high-risk AI systems, the obligation to ensure that their staff is trained to ensure human oversight remains in place."
- URL: S18. Organismo: Comisión Europea. Actualización: 27-07-2026. Ámbito: UE.
- **Verificado en EUR-Lex** (ver D4 y G5-5): Reglamento (UE) 2026/1744, de 8-07-2026, DO L de 24-07-2026, en vigor desde el 27-07-2026. https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=OJ:L_202601744 . Texto literal del nuevo art. 4 en G5-5.

**N1-3. Contenido mínimo recomendado por la Comisión.**
- Cita: "providers and deployers of AI systems should consider at least the following steps and questions: a) Ensure a general understanding of AI within their organisation: What is AI? How does it work? What AI is used in our organisation? What are its opportunities and dangers? b) Consider the role of their organisation (provider or deployer of AI systems) [...] c) Consider the risk of the AI systems provided or deployed [...] d) Concretely build their AI literacy actions on the preceding analysis, considering differences in technical knowledge, experience, education and training of the staff".
- No hace falta medir los conocimientos: "Article 4 of the AI Act does not entail an obligation to measure the knowledge of AI of employees."
- Supervisión: "The national market surveillance authorities will start supervising and enforcing the rules as of 2 August 2026."
- URL: S18. Ámbito: UE.

**N1-4. Qué habilidades priorizar.**
- WEF: la IA y el big data son la habilidad que más crece (ver F5-4). El pensamiento analítico sigue siendo la habilidad central: "Analytical thinking remains the most soughtafter core skill among employers, with seven out of 10 companies considering it as essential in 2025." (S12)
- Microsoft 2026: control de calidad de lo que produce la IA (50 %) y pensamiento crítico (46 %) (ver F1-5).

**N1-5. Formar a todos, no solo a los perfiles técnicos: el uso cae fuera de la dirección.**
- Cita: "more than three-quarters of leaders and managers say they use generative AI" varias veces por semana, frente a "regular use among frontline employees has stalled at 51%." (S5, BCG 2025). La primera frase es un fragmento devuelto por WebFetch; la cita completa no se pudo descargar.

**N1-6. La falta de conocimientos es la barrera número 1 para una IA responsable.**
- Cita: "Knowledge and training gaps remain the top-cited obstacle to implementing responsible AI, rising from 51% in 2024 to 59% in 2025 (Figure 3.3.9)."
- URL: S1 (cap. 3.3, encuesta del AI Index con McKinsey). Año de referencia: 2025. Ámbito: global, sin China.

**N1-7. La formación de la empresa multiplica la adopción (ver F4-3: del 47 % al 83 % en Dinamarca).**

---

## N2. Cómo implantar la IA en una empresa paso a paso

**N2-1. Paso previo: poner a la dirección al frente y medir (ver D8-8, D8-10, D8-12).**

**N2-2. Repartir el esfuerzo con la regla 10-20-70 (ver D8-5).**

**N2-3. Empezar por las funciones principales, no solo por las de soporte (ver D8-7).** En las funciones de soporte, BCG 2025 atribuye a RR. HH. un 3 %, a Finanzas un 4 % y a Legal un 2 % del valor potencial (exhibit 3 del S4; cifras leídas del gráfico extraído).

**N2-4. Escalar: la mayoría se queda en piloto.**
- Microsoft 2025: "24% of leaders say their companies have already deployed AI organization-wide, while just 12% remain in pilot mode." (S7)
- Encuesta McKinsey 2025 (vía AI Index): "larger companies were the most likely to report that their AI programs had reached a scaling phase." (S1, figura 4.3.6)
- Fuentes secundarias atribuyen a McKinsey 2025 que "nearly two-thirds of respondents say their organizations have not yet begun scaling AI across the enterprise" y que solo el 39 % declara impacto en el EBIT. **No verificado en la fuente primaria** (mckinsey.com no responde).

**N2-5. Dónde se nota antes el impacto (encuesta McKinsey vía AI Index).**
- Cita: "Respondents more often associated AI with the highest cost savings in software engineering and manufacturing functions (56%), while revenue gains were cited with marketing and sales (67%), strategy and corporate finance (65%), and product and/or service development (62%) (Figure 4.3.4). Across broader organizational outcomes, 64% of respondents reported that AI usage had improved innovation".
- URL: S1. Año de referencia: 2025. Ámbito: global.

**N2-6. Formar y dar herramientas corporativas para evitar la "shadow AI" (ver F5-3).**

**N2-7. Gestionar el riesgo con un marco (NIST AI RMF: GOVERN, MAP, MEASURE, MANAGE; ver D8-13).** El 72 % de las empresas declara riesgos de seguridad de IA sin gestionar (D8-9).

**N2-8. Coste de la IA: abaratamiento de la inferencia (contexto para el caso de negocio).**
- Cita: "the inference cost for a system performing at the level of GPT-3.5 dropped over 280-fold between November 2022 and October 2024. At the hardware level, costs have declined by 30% annually, while energy efficiency has improved by 40% each year."
- URL: S2. Organismo: Stanford HAI. Año de referencia: 2022–2024. Publicación: 2025. Ámbito: global.

**N2-9. Proyectos que se abandonan (Gartner).** **No verificado**: gartner.com devuelve error 403. Los titulares públicos conocidos ("30% of generative AI projects will be abandoned after proof of concept by end of 2025", nota del 29-07-2024, y "over 40% of agentic AI projects will be canceled by end of 2027", nota del 25-06-2025) no se han podido abrir. No los uséis sin comprobarlos.

---

---

## N3. La IA en las empresas españolas: datos y estadísticas 2026 (sección extensa)

> Base: INE (Encuesta TIC en empresas), Eurostat (`isoc_eb_ai`, `isoc_eb_ain2`, informe KS-01-26-009), Comisión Europea (Década Digital 2026), ONTSI, JRC. Para cada dato: cifra, cita literal, URL, organismo, año de referencia, publicación y muestra. Consulta: 2026-10-18.

### N3·0. Antes de usar las cifras: definiciones y por qué no coinciden

- **INE (España) y Eurostat (UE) miden lo mismo con la misma encuesta armonizada**: "empresa que usa IA" = empresa que en el primer trimestre del año de la encuesta usa **al menos una de una lista cerrada de tecnologías de IA** (análisis de lenguaje escrito, reconocimiento de voz, generación de lenguaje/código, generación de imágenes/vídeo/audio, reconocimiento de imágenes, aprendizaje automático para análisis de datos, automatización de flujos o ayuda a decisiones, movimiento autónomo de máquinas). **No** es "algún empleado usa ChatGPT por su cuenta".
  - Indicador de Eurostat, literal: "Enterprises using at least one of the AI technologies: AI_TTM, AI_TSR, AI_TNLG, AI_TIR, AI_TML, AI_TPA, AI_TAR, E_AI_TPVSG" (dataset `isoc_eb_ai`).
  - Ámbito: empresas de **10 o más empleados** (salvo que se diga "menos de 10"), sin agricultura, minería ni **sector financiero** (Eurostat: "All activities (except agriculture, forestry and fishing, and mining and quarrying), without financial sector"). El INE excluye además, en sus tablas de IA, la CNAE 56 (restauración): "Agrupación de actividad (excepto CNAE 56, 64-66 y 95.1)".
- **Por eso el dato de España difiere un poco según quién lo publique** (mismo año de referencia, 1T 2025): INE **21,1 %** vs. Eurostat **20,27 %** (≈20,3 %). Usar el del INE para hablar "de España" y el de Eurostat para comparar con la UE. No mezclar.
- **Año de referencia**: lo que el INE llama "edición 2024-2025" mide el uso de IA en el **primer trimestre de 2025**. Eurostat etiqueta ese mismo dato como **2025**. La Comisión (DESI 2026 / Década Digital) lo etiqueta "DESI 2026 (year 2025)".
- **Rupturas de serie**: la lista de tecnologías cambió (en 2025 se añadió la generación de imágenes/vídeo/audio, `E_AI_TPVSG`; Eurostat marca "(1) Break in the time series" en su gráfico de evolución). Comparar años con prudencia, sobre todo antes de 2023.
- **Uso individual ≠ uso empresarial**: el 37,9 % de la población que usa IA generativa (sección 7) es un dato de personas, de otra encuesta (hogares). No usar como "% de empresas".
- **Datos de 2026 (1T 2026)**: a 18/10/2026 no se ha localizado publicada la nota del INE de la edición "Año 2025 – Primer trimestre 2026" (la edición anterior salió el 22/10/2025). Los datos más recientes de empresas son, por tanto, de **1T 2025**. Conviene revisar ine.es a finales de octubre de 2026 por si se publica.

---

### N3·1. España vs. UE (titulares)

#### 1.1 España: el 21,1 % de las empresas de 10+ empleados usa IA (1T 2025)
- **Cifra**: 21,1 % (21,14 % en tabla), +8,7 puntos respecto al año anterior.
- **Cita literal**: "El 21,1% de las empresas de 10 o más empleados utiliza Inteligencia Artificial en el primer trimestre de 2025 y el 44,3% servicios de Cloud Computing de pago." / "el porcentaje de empresas que emplean tecnologías de Inteligencia Artificial ha aumentado 8,7 puntos, hasta el 21,1%."
- **URL**: https://www.ine.es/dyngs/Prensa/ETICCE20241T2025.htm (PDF: https://ine.es/dyngs/Prensa/ETICCE20241T2025.pdf)
- **Organismo**: INE, Encuesta sobre el uso de TIC y del comercio electrónico en las empresas. Año 2024 – Primer trimestre 2025. Datos definitivos.
- **Año de referencia**: 1T 2025
- **Publicación**: 22/10/2025
- **Muestra / ámbito**: "Para empresas de 10 o más empleados: alrededor de 15.000 empresas y para las de menos de 10 empleados: alrededor de 10.000 empresas." Muestreo estratificado por tamaño, actividad y CC. AA.; secciones C a N y grupo 95.1 de la CNAE-2009; todo el territorio nacional; recogida por internet y correo.

#### 1.2 UE: el 19,95 % (≈20 %) de las empresas usa IA en 2025
- **Cifra**: 19,95 %; +6,47 puntos respecto a 2024 (13,48 %).
- **Cita literal (Statistics Explained)**: "In 2025, 19.95% of EU enterprises used AI technologies." / "Compared with 2024, the use of AI technologies increased by 6.47" percentage points.
- **Cita literal (nota de Eurostat)**: título "20% of EU enterprises use AI technologies"; "showing a solid growth of 6.5 percentage points (pp) from 13.5% in 2024."
- **URL**: https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises · https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2
- **Organismo**: Eurostat
- **Año de referencia**: 2025 (encuesta realizada a principios de 2025)
- **Publicación**: nota 11/12/2025; artículo "Data extracted in December 2025", "Planned article update: December 2026"
- **Muestra / ámbito**: "In 2025, 157 000 of the 1.53 million enterprises in the EU were surveyed." Empresas con al menos 10 empleados; NACE C a J, L a N y 95.1 (sin sector financiero).

#### 1.3 España vs. UE con la misma fuente (Eurostat): 20,27 % vs. 19,95 %; España, 13.ª de 27
- **Cifras (dataset `isoc_eb_ai`, total ≥10 empleados, 2025)**: España 20,27 % · UE-27 19,95 %. Ranking de los 27 Estados miembros: 1 Dinamarca 42,03 · 2 Finlandia 37,82 · 3 Suecia 35,04 · 4 Bélgica 34,54 · 5 Luxemburgo 33,61 · 6 Países Bajos 33,21 · 7 Austria 29,95 · 8 Alemania 25,97 · 9 Estonia 23,40 · 10 Eslovenia 21,61 · 11 Malta 21,51 · 12 Lituania 21,30 · **13 España 20,27** · [media UE 19,95] · 14 Irlanda 19,64 · 15 Francia 18,16 · 16 Eslovaquia 18,00 · 17 Chequia 17,60 · 18 Italia 16,40 · 19 Croacia 15,19 · 20 Letonia 12,21 · 21 Portugal 11,54 · 22 Hungría 10,37 · 23 Chipre 9,27 · 24 Grecia 8,93 · 25 Bulgaria 8,55 · 26 Polonia 8,36 · 27 Rumanía 5,21.
- **Cita literal (Eurostat, Statistics Explained)**: "The highest share was recorded in Denmark (42.03%), followed by Finland (37.82%) and Sweden (35.04%)" / "while the lowest shares were recorded in Romania (5.21%), Poland (8.36%) and Bulgaria (8.55%)."
- **Cita literal (Eurostat, informe 2026, tabla 1)**: "Spain 20.3 17.2 30.1 57.5" (total, pequeñas, medianas, grandes) frente a "EU 20.0 17.0 30.4 55.0".
- **URL de datos**: https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table (consultado vía API: https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_eb_ai?format=JSON&lang=EN&indic_is=E_AI_TANY&unit=PC_ENT) · Informe: https://ec.europa.eu/eurostat/documents/7870049/23260410/KS-01-26-009-EN-N.pdf/37d063cb-28cf-3b4e-91f3-c3784c970842?t=1774528533658&version=1.1
- **Organismo**: Eurostat ("The use of artificial intelligence (AI) technologies in the European Union – Key results – 2026 edition", KS-01-26-009-EN-N)
- **Año de referencia**: 2025
- **Publicación**: dataset actualizado 15/06/2026; informe 2026 (PDF creado 16/03/2026)
- **Nota de uso**: "España está justo en la media de la UE (13.º de 27)". El artículo de Eurostat no menciona a España en el texto; el ranking sale de la tabla de datos.

#### 1.4 La Comisión Europea (Década Digital 2026) sitúa a España ligeramente por encima de la media
- **Cifras**: IA en empresas España 11,3 % (último dato anterior) → **20,3 % (DESI 2026, año 2025)**; progreso anual 79,2 %; UE 20,0 %; trayectoria nacional 13,0 %; objetivo 2030 España y UE: 75 %.
- **Cita literal (tabla de KPI)**: "Artificial Intelligence 11.3% 20.3% 79.2% 13.0% 20.0% 48.0% 75.0% 75%"
- **Cita literal (texto)**: "On the business side, Spain's businesses exhibit a commendable level of digitalisation, particularly in adopting data analytics and artificial intelligence technologies."
- **Recomendación literal**: "AI, cloud and data analytics: continue the efforts to support the digitalisation of enterprises, focusing on advancing digital intensity and closing the gap in cloud adoption."
- **URL**: https://data.consilium.europa.eu/doc/document/ST-10476-2026-ADD-27/en/pdf (Anexo 2, parte 26/27 de COM(2026) 288, "State of the Digital Decade 2026: Closing structural gaps and mobilising investments for 2030 and beyond"). Página de la Comisión: https://commission.europa.eu/news-and-media/news/state-digital-decade-report-progress-made-gaps-remain-2026-06-17_en
- **Organismo**: Comisión Europea
- **Año de referencia**: 2025 (columna "DESI 2026 (year 2025)")
- **Publicación**: 17/06/2026 (COM(2026) 288 final, "Brussels, 17.6.2026")
- **Otras cifras de la misma tabla para España (año 2025)**: Cloud 37,9 % (UE 46,7 %); Analítica de datos 47,1 % (UE 39,9 %); IA o cloud o analítica 62,4 % (UE 63,2 %); pymes con al menos intensidad digital básica 75,4 % (UE 71,4 %; objetivo 90 %).

---

### N3·2. Por tamaño de empresa

#### 2.1 España (INE, 1T 2025): 17,9 % pequeñas · 30,8 % medianas · 58,2 % grandes
- **Cifras (% de empresas con conexión a internet)**: Total 21,14 · De 10 a 49 empleados **17,89** · De 50 a 249 **30,75** · De 250 y más **58,24**.
- **Cita literal (tabla CSV)**: "Total Empresas;E.1 % de empresas que emplean tecnologías de Inteligencia Artificial (IA) (1);De 250 y más;58,24"
- **URL**: tabla "Inteligencia artificial" https://ine.es/jaxi/Tabla.htm?tpx=76387 (descarga CSV: https://www.ine.es/jaxi/files/tpx/es/csv_bdsc/76387.csv)
- **Organismo**: INE · **Año ref.**: 1T 2025 · **Publicación**: 22/10/2025 (fichero PC-Axis con fecha de creación 04/03/2026) · **Ámbito**: empresas de 10+ empleados, excepto CNAE 56, 64-66 y 95.1.

#### 2.2 Microempresas (menos de 10 empleados), España: 13,4 % (1T 2025), frente al 7,5 % un año antes
- **Cita literal**: "el porcentaje de empresas que emplean tecnologías de Inteligencia Artificial alcanza el 13,4%, lo que supone 5,9 puntos más que el año anterior." Tabla: "Emplean tecnologías de Inteligencia Artificial (IA)(1) 13,4 7,5 5,9". Nota (1): "Porcentaje sobre el total de empresas de menos de 10 empleados con conexión a Internet."
- **URL**: https://ine.es/dyngs/Prensa/ETICCE20241T2025.pdf
- **Organismo**: INE · **Año ref.**: 1T 2025 · **Publicación**: 22/10/2025 · **Muestra**: ~10.000 microempresas.
- **Ojo**: Eurostat da para España (0-9 empleados) 10,08 % en 2025, con base "total de empresas" (no "con conexión a internet"). No mezclar ambas.

#### 2.3 UE por tamaño (Eurostat, 2025): 17 % pequeñas · 30,36 % medianas · 55,03 % grandes
- **Cita literal**: "In 2025, 17% of small enterprises, 30.36% of medium enterprises and 55.03% of large enterprises used AI."
- **URL**: https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises
- **Organismo**: Eurostat · **Año ref.**: 2025 · **Publicación**: dic. 2025 · Tamaños: pequeñas 10-49, medianas 50-249, grandes 250+.

#### 2.4 Comparativa España vs. UE por tamaño, misma fuente (Eurostat `isoc_eb_ai`)
| Año | UE ≥10 | ES ≥10 | UE 10-49 | ES 10-49 | UE 50-249 | ES 50-249 | UE 250+ | ES 250+ | ES 0-9 |
|---|---|---|---|---|---|---|---|---|---|
| 2021 | 7,65 | 7,67 | 6,12 | 6,07 | 12,55 | 13,36 | 28,41 | 32,34 | 3,42 |
| 2023 | 8,06 | 9,18 | 6,41 | 6,39 | 13,07 | 19,57 | 30,48 | 39,66 | 4,52 |
| 2024 | 13,48 | 11,31 | 11,21 | 8,56 | 20,97 | 20,54 | 41,17 | 43,96 | 5,72 |
| 2025 | 19,95 | 20,27 | 17,00 | 17,17 | 30,36 | 30,10 | 55,03 | 57,46 | 10,08 |
- **URL**: https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table (API: https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_eb_ai?format=JSON&lang=EN&indic_is=E_AI_TANY&unit=PC_ENT)
- **Organismo**: Eurostat · **Actualización del dataset**: 15/06/2026 · **Lectura útil**: en 2024 España iba 2,2 puntos por debajo de la UE; en 2025 la alcanzó. La brecha está en el tamaño: una gran empresa española tiene ~3,3 veces más probabilidad de usar IA que una pequeña.

---

### N3·3. Por sector

#### 3.1 España (INE, 1T 2025): servicios 25,7 %, industria 17,5 %, construcción 11,4 %
- **Cita literal**: "El sector servicios es el que más compra servicios de Cloud Computing (un 48,7%) y el que más utiliza Inteligencia Artificial (un 25,7%)." Tabla: "Empresas que emplean tecnologías de Inteligencia Artificial (IA) 21,1 17,5 11,4 25,7" (Total, Industria, Construcción, Servicios).
- **URL**: https://www.ine.es/dyngs/Prensa/ETICCE20241T2025.htm
- **Organismo**: INE · **Año ref.**: 1T 2025 · **Publicación**: 22/10/2025

#### 3.2 España por rama de actividad (INE, tabla detallada, 1T 2025, % empresas 10+)
| Rama (CNAE) | % que usa IA |
|---|---|
| Información y comunicaciones (58-63) | 60,57 |
| Sector TIC | 58,66 |
| Actividades profesionales, científicas y técnicas (69-75) — incluye jurídicas, contabilidad, consultoría, publicidad | 38,47 |
| Actividades inmobiliarias (68) | 34,78 |
| Energía y agua (35-39) | 22,37 |
| Servicios de alojamiento (55) | 22,20 |
| Productos informáticos, maquinaria, vehículos, muebles… (26-33) | 21,98 |
| Coquerías, química, farmacia, caucho y plásticos, minerales no metálicos (19-23) | 19,63 |
| Actividades administrativas y servicios auxiliares, incl. agencias de viajes (77-82) | 19,21 |
| Comercio y reparación de vehículos (45-47) | 17,99 |
| Alimentación, textil, madera, papel, artes gráficas (10-18) | 15,15 |
| Transporte y almacenamiento (49-53) | 14,87 |
| Metalurgia y productos metálicos (24-25) | 13,44 |
| Construcción (41-43) | 11,44 |
- **Cita literal (CSV)**: "3.4. Información y comunicaciones (CNAE 58-63);…;Total;60,57" · "3.6. Actividades profesionales, científicas y técnicas (CNAE 69-75);…;Total;38,47"
- **URL**: https://ine.es/jaxi/Tabla.htm?tpx=76387 (CSV: https://www.ine.es/jaxi/files/tpx/es/csv_bdsc/76387.csv)
- **Organismo**: INE · **Año ref.**: 1T 2025

#### 3.3 Sectores útiles para artículos de departamento (Eurostat, España vs. UE, 2025, % empresas 10+)
| Sector NACE | España | UE |
|---|---|---|
| Programación, consultoría informática (J62-J63) | 65,83 | 65,70 |
| Información y comunicación (J) | 60,57 | 62,52 |
| Publicidad y estudios de mercado y otras profesionales (M73-M75) | 51,68 | 48,02 |
| Actividades profesionales, científicas y técnicas (M) | 38,35 | 40,43 |
| **Jurídicas y contables, sedes centrales, consultoría de gestión (M69-M71)** | **34,68** | **37,92** |
| Inmobiliarias (L) | 34,39 | 24,76 |
| Agencias de viajes y operadores turísticos (N79) | 31,00 | 34,96 |
| Alojamiento (I55) | 22,07 | 21,31 |
| Comercio mayorista (G46) | 20,88 | 23,42 |
| Industria manufacturera (C) | 17,14 | 17,27 |
| Transporte y almacenamiento (H) | 14,69 | 11,15 |
| Comercio minorista (G47) | 14,00 | 15,46 |
| Construcción (F) | 11,26 | 10,79 |
- **URL de datos**: https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ain2/default/table (API `isoc_eb_ain2`, indicador E_AI_TANY, unidad PC_ENT, 2025)
- **Organismo**: Eurostat · **Año ref.**: 2025 · **Actualización del dataset**: 15/06/2026
- **Cita literal UE (Statistics Explained)**: "the information and communication sector (with 62.52%)" y actividades profesionales, científicas y técnicas 40.43%; el resto de sectores por debajo del 25 %, desde 24.82% (inmobiliarias) hasta 10.79% (construcción).
- **Uso**: dato para D5 (despachos/asesorías): "un tercio de las empresas españolas de actividades jurídicas, contables y de consultoría de gestión con 10+ empleados usa IA (34,7 %), algo por debajo de la media UE del sector (37,9 %)".

---

### N3·4. Qué tecnologías y para qué

#### 4.1 España: tecnologías entre las empresas que ya usan IA (INE, 1T 2025, % sobre empresas que usan IA)
| Tecnología | Total | 10-49 | 50-249 | 250+ |
|---|---|---|---|---|
| Genera imágenes, vídeos, sonidos o audio | 53,87 | 53,35 | 54,82 | 55,52 |
| Análisis del lenguaje escrito (minería de texto) | 49,55 | 47,03 | 53,37 | 59,74 |
| Genera lenguaje escrito o hablado, o código | 43,80 | 40,92 | 47,83 | 56,28 |
| Convierte el lenguaje hablado en texto (voz) | 36,04 | 32,96 | 41,23 | 47,13 |
| Automatización de flujos de trabajo o ayuda a decisiones | 33,41 | 31,19 | 33,71 | 50,08 |
| Aprendizaje automático para análisis de datos | 29,36 | 25,19 | 33,51 | 51,71 |
| Identificación de objetos o personas en imágenes | 27,54 | 25,33 | 29,50 | 39,99 |
| Movimiento físico autónomo de máquinas | 8,51 | 6,37 | 9,94 | 21,80 |
- **Cita literal (CSV)**: "E.1.D % de empresas con tecnología IA que genera imágenes, vídeos, sonidos o audio (2);Total;53,87" · nota (2): "Porcentaje sobre el total de empresas que utilizan tecnologías de Inteligencia Artificial".
- **URL**: https://www.ine.es/jaxi/files/tpx/es/csv_bdsc/76387.csv (tabla https://ine.es/jaxi/Tabla.htm?tpx=76387)
- **Organismo**: INE · **Año ref.**: 1T 2025.
- **Lectura**: en España, la IA que entra en las empresas es sobre todo IA generativa y de lenguaje (imagen/vídeo, texto, generación de texto/código).

#### 4.2 España: finalidades (INE, 1T 2025, % sobre empresas que usan IA)
- Organización de procesos de administración o gestión 29,75 · Marketing o ventas 29,61 · Producción o servicios 22,39 · I+D o innovación 22,25 · Gestión contable, de control o financiera 20,52 · Seguridad TIC 18,41 · Logística 7,53.
- **Cita literal (CSV)**: "E.2.A % de empresas que emplean tecnologías de IA para marketing o ventas (2);Total;29,61" · "E.2.F % de empresas que emplean tecnologías de IA para gestión contable, de control o financiera (2);Total;20,52"
- **URL / Organismo / Año**: igual que 4.1.

#### 4.3 España: cómo se consigue la IA (INE, 1T 2025, % sobre empresas que usan IA)
- Software o sistemas comerciales **listos para usar 51,58 %** · Contratación de proveedores externos para desarrollarlos o modificarlos 26,86 % · Desarrollados por empleados propios 17,33 % · De código abierto modificados por empleados propios 16,82 % · Comerciales modificados por empleados propios 15,59 %.
- **Cita literal (CSV)**: "E.3.D % de empresas que adquieren software o sistemas de IA comerciales listos para usar (2);Total;51,58"
- **URL / Organismo / Año**: igual que 4.1.
- **Uso (N1/N2)**: la mitad de las empresas que usa IA la compra "lista para usar", así que el reto es saber usarla, no desarrollarla.

#### 4.4 UE: tecnologías y finalidades (Eurostat, 2025)
- **Tecnologías (% de todas las empresas)**: minería de texto 11,75 % · generación de imagen/vídeo/sonido 9,55 % · generación de lenguaje natural 8,76 % · movimiento autónomo 1,39 %. Cita: "Analysing written language: 11.8%, the largest increase (+4.9 pp vs. 2024)" (nota Eurostat 11/12/2025).
- **Finalidades (% de empresas que usan IA)**: marketing o ventas 34,70 % · administración o gestión 31,05 % · logística 6,08 %.
- **España vs. UE (Eurostat, % de empresas que usan IA, 2025)**: marketing o ventas ES 29,47 / UE 34,70 · producción ES 21,13 / UE 20,76 · administración o gestión ES 28,56 / UE 31,04 · contabilidad, control o finanzas ES 20,43 / UE 23,11 · I+D ES 21,11 / UE 19,05 · seguridad TIC ES 17,44 / UE 19,77 · logística ES 7,12 / UE 6,08.
- **Cita literal (informe Eurostat 2026)**: "In all remaining EU countries, AI was most used for marketing and sales." (España está entre ellos.)
- **URLs**: https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises · https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2 · API `isoc_eb_ain2`
- **Organismo**: Eurostat · **Año ref.**: 2025

---

### N3·5. Barreras para adoptar IA (la "falta de conocimientos")

#### 5.1 España: el 81,3 % de las empresas que se lo plantearon y no usa IA alega falta de conocimientos
- **Cifras (INE, 1T 2025, % sobre empresas que alguna vez han considerado usar IA)**:
| Motivo para no usar IA | Total | 10-49 | 50-249 | 250+ |
|---|---|---|---|---|
| **Faltan conocimientos especializados relevantes en la empresa** | **81,29** | 83,21 | 75,68 | 74,18 |
| Preocupación por la protección de datos y la privacidad | 53,55 | 54,19 | 50,42 | 58,28 |
| Falta de claridad sobre las consecuencias legales | 52,93 | 53,98 | 49,91 | 48,64 |
| Los costes parecen demasiado altos | 48,28 | 48,68 | 47,92 | 42,10 |
| Dificultades con la disponibilidad o calidad de los datos | 47,86 | | | |
| Incompatibilidad con equipos, software o sistemas | 34,05 | | | |
| Consideraciones éticas | 24,12 | | | |
| La IA no es útil para la empresa | 14,16 | | | |
- **Base**: el 11,48 % de las empresas de 10+ empleados "alguna vez han considerado utilizar" IA (10-49: 10,60 %; 50-249: 15,82 %; 250+: 13,21 %).
- **Cita literal (CSV)**: "E.5.B % de empresas que no utilizan ninguna de las tecnologías de IA de E.1 porque: faltan conocimientos especializados relevantes en la empresa (3);Total;81,29". Nota (3): "Porcentaje sobre el total de empresas que alguna vez han considerado utilizar alguna de las tecnologías de IA enumeradas en E.1".
- **URL**: https://www.ine.es/jaxi/files/tpx/es/csv_bdsc/76387.csv (tabla https://ine.es/jaxi/Tabla.htm?tpx=76387)
- **Organismo**: INE · **Año ref.**: 1T 2025 · **Publicación**: 22/10/2025
- **Cómo redactarlo bien**: "De las empresas españolas que han valorado usar IA y no lo hacen, 8 de cada 10 señalan la falta de conocimientos". **No** decir "el 81 % de las empresas españolas no sabe usar IA" (la base es solo el ~11 % que se lo planteó).

#### 5.2 España vs. UE (misma fuente, Eurostat, 2025, % de empresas que alguna vez consideraron usar IA)
| Motivo | España | UE-27 |
|---|---|---|
| Falta de conocimientos relevantes | **82,35** | **70,31** |
| Protección de datos y privacidad | 53,79 | 52,72 |
| Falta de claridad sobre consecuencias legales | 51,31 | 53,61 |
| Disponibilidad o calidad de datos | 48,05 | 43,51 |
| Costes demasiado altos | 47,37 | 38,37 |
| Incompatibilidad con sistemas | 35,41 | 41,60 |
| Consideraciones éticas | 23,35 | 24,64 |
| No es útil | 13,34 | 17,79 |
- **URL de datos**: API Eurostat `isoc_eb_ain2`, unidad "PC_ENT_AI_EC" ("Percentage of the enterprises which ever considered to use any of the AI technologies"), total sin sector financiero, 2025: https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ain2/default/table
- **Organismo**: Eurostat · **Año ref.**: 2025 · **Actualización**: 15/06/2026
- **Lectura**: la falta de conocimientos pesa **12 puntos más en España** que en la media de la UE; es la barrera en la que España se separa más de Europa (también costes: +9 puntos).

#### 5.3 UE: la falta de conocimientos es la primera barrera en todos los tamaños
- **Cita literal (informe Eurostat 2026)**: "In 2025, among EU enterprises that had considered using AI technologies, the most prevalent reason for not using AI technologies was the lack of relevant expertise (70.3%), followed by lack of clarity about the legal consequences (53.6%) and concerns regarding violation of data protection and privacy (52.7%)." / "The lack of relevant expertise was the leading reason for not adopting AI, cited by 70.9% of small enterprises, 69.2% of medium enterprises and 65.1% of large enterprises."
- **Cita literal (resumen del mismo informe)**: "Conversely, small to medium enterprises face challenges such as a lack of relevant expertise."
- **URL**: https://ec.europa.eu/eurostat/documents/7870049/23260410/KS-01-26-009-EN-N.pdf/37d063cb-28cf-3b4e-91f3-c3784c970842?t=1774528533658&version=1.1
- **Organismo**: Eurostat, informe estadístico 2026 · **Año ref.**: 2025 (tabla 7 compara 2024 y 2025; costes: 33,3 % en 2024 → 38,4 % en 2025) · **Publicación**: marzo 2026 (metadatos del PDF: 16/03/2026)
- **Discrepancia a tener en cuenta**: el artículo Statistics Explained (dic. 2025) da 70.89% para "lack of relevant expertise" en 2025; el informe de 2026 y la base de datos actualizada dan 70,3 % para 2025 (y 70,9 % para 2024). Usar **70,3 %** (dato revisado) o decir "7 de cada 10".
- **Otras empresas que se plantearon la IA (UE, Statistics Explained)**: 14.21% de empresas no usuarias "had considered using AI" (grandes 36.54%, medianas 22.26%, pequeñas 12.65%).

---

### N3·6. Evolución anual

#### 6.1 España, serie INE (empresas de 10+ empleados, % que usa IA, 1T de cada año)
| Año de referencia (1T) | % | Fuente literal | URL | Publicación |
|---|---|---|---|---|
| 2021 | 8,3 | "la Inteligencia Artificial (IA) es utilizada por el 8,3% de las empresas." | https://www.ine.es/prensa/tic_e_2020_2021.pdf | 18/10/2021 (act. 29/11) |
| 2022 | 12,6 | "los robots y la Inteligencia Artificial (IA), con un 8,3% y un 12,6% de empresas, respectivamente." | https://www.ine.es/prensa/tic_e_2021_2022.pdf | 18/10/2022 |
| 2023 | 9,6 | "El 9,6% de las empresas de 10 o más empleados utiliza Inteligencia Artificial en el primer trimestre de 2023." | https://www.ine.es/prensa/tic_e_2022_2023.pdf | 25/10/2023 |
| 2024 | 12,4 | "El 12,4% de las empresas de 10 o más empleados utiliza Inteligencia Artificial en el primer trimestre de 2024" | https://www.ine.es/dyngs/Prensa/ETICCE20231T2024.htm | 21/10/2024 |
| 2025 | 21,1 | "El 21,1% de las empresas de 10 o más empleados utiliza Inteligencia Artificial en el primer trimestre de 2025" | https://www.ine.es/dyngs/Prensa/ETICCE20241T2025.htm | 22/10/2025 |
- **Organismo**: INE. **Advertencia**: la caída de 2022 (12,6 %) a 2023 (9,6 %) coincide con cambios en la lista de tecnologías del cuestionario armonizado; Eurostat solo publica serie comparable para 2021, 2023, 2024 y 2025 (no 2022). Recomendación: para "evolución" usar 2021 → 2025 (8,3 % → 21,1 %, casi ×2,5) o la serie de Eurostat.
- **Sector servicios (INE)**: 11,2 % (1T 2023: "El sector, Servicios es el que más utiliza … Inteligencia Artificial (un 11,2%)") → 15,6 % (1T 2024) → 25,7 % (1T 2025).
- **Microempresas (<10, INE, base con internet)**: 5,8 % (1T 2023) → 7,5 % (1T 2024) → 13,4 % (1T 2025). Fuentes: tic_e_2022_2023.pdf ("Emplean tecnologías de Inteligencia Artificial (IA) 5,8 5,7") y ETICCE20241T2025.pdf.

#### 6.2 UE y España, serie Eurostat (comparable)
- UE: 7,65 % (2021) → 8,06 % (2023) → 13,48 % (2024) → 19,95 % (2025). España: 7,67 → 9,18 → 11,31 → 20,27. (Tabla completa en 2.4.)
- **Cita literal (nota Eurostat 11/12/2025)**: la nota sitúa el dato en 7.7% en 2021 y 8.1% en 2023 antes del 13.5% de 2024 y el 20.0% de 2025.
- **URL**: https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2 · API `isoc_eb_ai`
- **Lectura**: en un solo año (2024→2025) España casi duplicó su tasa (+9 puntos según Eurostat; +8,7 según INE).

#### 6.3 ONTSI (dato 2024, edición 2025) — coherente con Eurostat, no con INE
- **Cifra**: 11,4 % de empresas de 10+ usó IA en 2024; +1,8 puntos vs. año anterior; grandes (>249) 44 %; información y comunicaciones 46,6 %, sector TIC 45 %, actividades científicas y técnicas 26,1 %; media UE 13,5 %; media OCDE 12,7 %.
- **Cita literal**: "El 11,4% de las empresas españolas de 10 o más empleados utilizó tecnologías de IA en 2024, lo que representa un aumento de 1,8 puntos porcentuales respecto al año anterior y sitúa al país a tan solo dos puntos de la media europea" · "España se sitúa a tan solo dos puntos de la media europea (13,5%) en el ámbito empresarial y a poco más de un punto de la media de los países de la OCDE (12,7%)."
- **Otras citas útiles**: "Las tecnologías de IA más empleadas por las empresas de 10 o más personas incluyen aquellas que realizan análisis de lenguaje escrito (44,7%) y las que automatizan flujos de trabajo o ayudan en la toma de decisiones (39%)." · "casi la mitad de las empresas accede a las tecnologías de IA mediante la adquisición de paquetes comerciales listos para su uso (un 45,8%)."
- **URL**: nota de prensa https://digital.gob.es/content/dam/portal-mtdfp/comunicacion/comunicacion_sedia/2025/04/2025-04-30/NdPONTSIIndicadoresUsoIA.pdf · informe https://www.ontsi.es/es/publicaciones/Indicadores-de-uso-de-inteligencia-artificial-en-Espana-2024
- **Organismo**: ONTSI (Red.es, Ministerio para la Transformación Digital y de la Función Pública), "Indicadores de uso de inteligencia artificial en España 2024 (Edición 2025 – Datos 2024)"
- **Año ref.**: 2024 · **Publicación**: 30/04/2025
- **Advertencia**: ONTSI usa la cifra de Eurostat (11,3-11,4 %), mientras el INE publicó 12,4 % para el mismo 1T 2024. Si se cita ONTSI, no mezclar con la serie del INE. No se ha localizado edición ONTSI con datos de 2025.

#### 6.4 Formación de la plantilla y trabajadores (útil para N1/F)
- **ONTSI**: "el 78% de los encuestados considera que su empresa debería proporcionarles las herramientas y la formación necesaria para trabajar eficazmente con las tecnologías digitales más recientes, incluida la IA." (misma nota de 30/04/2025; año de la encuesta no precisado en la nota → comprobar en el informe antes de dar año).
- **Eurostat (empresas 10+ que dieron formación en TIC a su personal)**: España 21,22 % vs. UE 22,29 % (dato 2024 de Eurostat; según la metodología del INE, la formación en TIC de la encuesta "se refiere al año anterior", es decir, 2023). Formación TIC a personal no especialista: España 19,25 % vs. UE 19,36 %. Serie España: 21,73 (2019) · 20,12 (2020) · 20,70 (2022) · 21,22 (2024).
  - **URL**: https://ec.europa.eu/eurostat/databrowser/view/isoc_ske_ittn2/default/table (API `isoc_ske_ittn2`, "Enterprises that provided training to develop/upgrade ICT skills of their personnel by NACE Rev.2 activity", actualizado 15/06/2026)
  - **Cita literal (INE, metodología)**: "la información general de la empresa, el comercio electrónico y la formación en TIC, se refieren al año anterior."
  - **Lectura**: el uso de IA se ha multiplicado, pero la proporción de empresas que forma a su plantilla en competencias digitales está estancada en torno a 1 de cada 5 desde 2019. (Es formación en TIC en general, no específicamente en IA.)
- **Especialistas TIC (INE, 1T 2025)**: "El porcentaje de empresas con especialistas TIC aumenta 1,1 puntos y se sitúa en el 16,8% en el primer trimestre de 2025." URL: https://ine.es/dyngs/Prensa/ETICCE20241T2025.pdf

---

### N3·7. Uso individual de IA generativa (contexto; NO es dato de empresas)

#### 7.1 España: el 37,9 % de la población de 16 a 74 años usó IA generativa (2025); el 17,9 % para trabajar
- **Cita literal**: "El 37,9% de la población de 16 a 74 años usó herramientas de Inteligencia Artificial Generativa en los tres últimos meses" · "El 39,9% de los hombres utiliza herramientas de IA frente al 35,9% de las mujeres."
- **Tabla (% de población de 16 a 74 años, 2025)**: uso total / fines privados / **motivos profesionales (trabajo)** / educación formal — Total 37,9 / 30,2 / **17,9** / 16,2 · 16-24: 75,6 / 53,0 / 21,1 / 59,3 · 25-34: 57,2 / 49,7 / 30,7 / 19,4 · 35-44: 43,8 / 36,7 / 23,8 / 12,2 · 45-54: 32,6 / 25,5 / 19,7 / 11,1 · 55-64: 19,2 / 15,6 / 10,1 / 4,8 · 65-74: 7,4 / 6,9 / 1,5 / 1,0.
- **URL**: https://www.ine.es/dyngs/Prensa/TICH2025.htm
- **Organismo**: INE, Encuesta sobre Equipamiento y Uso de TIC en los Hogares 2025 · **Año ref.**: 2025 (últimos 3 meses) · **Publicación**: 20/11/2025

#### 7.2 España vs. UE (Eurostat, personas de 16-74, 2025)
- Usó IA generativa en los últimos 3 meses: **España 37,88 % vs. UE 32,66 %**. Para fines profesionales: España 17,94 % vs. UE 15,36 %. Entre quienes la usan, para trabajo: España 47,37 % vs. UE 47,02 %.
- **Cita literal (informe Eurostat 2026)**: entre los no usuarios de la UE, "the majority of non-users simply did not feel the need to use these tools (64.3%)"; "uncertainty about how to use the tools (13.8%), lack of awareness (8.5%) and concerns about privacy and security (7.3%)".
- **URL**: API `isoc_ai_iaiu` ("Individuals - use of generative AI tools", actualizado 05/06/2026): https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table · informe KS-01-26-009 (URL en 1.3)
- **Organismo**: Eurostat · **Año ref.**: 2025
- **Gancho para N3**: hay más españoles usando IA generativa para trabajar (~18 % de la población) que empresas españolas que declaran usar IA de forma organizada… pero son métricas distintas: úsese solo como contraste explícito, no como cálculo.

---

### N3·8. Objetivos de la Década Digital (UE 2030)

#### 8.1 Objetivo legal: al menos el 75 % de las empresas de la UE con cloud, big data o IA en 2030
- **Cita literal**: "at least 75 % of Union enterprises have taken up one or more of the following, in line with their business operations: cloud computing services; big data; artificial intelligence" · "more than 90 % of Union SMEs reach at least a basic level of digital intensity".
- **URL**: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2481 (art. 4.1.3)
- **Organismo**: Parlamento Europeo y Consejo, Decisión (UE) 2022/2481 (Programa Estratégico de la Década Digital 2030) · **Fecha**: 14/12/2022
- **Matiz**: el objetivo es "una o más" de las tres tecnologías, no IA sola. España ya tiene 62,4 % en "IA o cloud o analítica" (UE 63,2 %) (tabla de 1.4). En el informe país, la Comisión fija para la IA en sí un objetivo de 75 % en 2030 tanto para España como para la UE (columna "target by 2030").

#### 8.2 Informe Estado de la Década Digital 2026 (UE)
- **Cita literal (Comisión, 17/06/2026)**: "more businesses are using cloud computing, data analytics and AI" · "many small and medium-sized enterprises still face barriers to adopting advanced digital solutions".
- **URL**: https://commission.europa.eu/news-and-media/news/state-digital-decade-report-progress-made-gaps-remain-2026-06-17_en (paquete completo: https://digital-strategy.ec.europa.eu/en/policies/2026-state-digital-decade-package)
- **Organismo**: Comisión Europea · **Publicación**: 17/06/2026
- **Lectura para N3**: con un 20 % de adopción en 2025, el objetivo de 75 % en IA para 2030 queda muy lejos; para España, el ritmo de 2024→2025 (×1,8) es el más alto de la serie.

#### 8.3 JRC (Centro Común de Investigación, Comisión Europea), octubre 2026
- **Cita literal**: la adopción en sectores estratégicos "grew from 7% in 2021 to 18% in 2025"; en el resto de áreas económicas de la UE "it grew from 8% in 2021 to 20% in 2025"; "AI-uptake of energy firms grew from 18% to 34%"; "electronics from 12% to 30%".
- **URL**: https://joint-research-centre.ec.europa.eu/jrc-news-and-updates/ai-adoption-more-doubles-almost-every-eu-strategic-sector-2026-10-14_en (informe: https://publications.jrc.ec.europa.eu/repository/handle/JRC146753)
- **Organismo**: JRC, Comisión Europea · **Año ref.**: 2021–2025 (datos de la encuesta TIC de Eurostat) · **Publicación**: 14/10/2026 · No menciona a España.

---

### N3·9. Otros estudios (COTEC, ONTSI, OCDE)

- **ONTSI**: ver 6.3 y 6.4 (edición 2025, datos 2024). Incluye además: "el 42,1% de la población adulta de España ha utilizado alguna vez la IA en 2023 (última actualización disponible), principalmente para la redacción de textos y traducciones (un 24,1% y un 21%, respectivamente)." (misma nota de 30/04/2025).
- **COTEC**: no se ha localizado un informe o encuesta de COTEC con **datos de adopción de IA por empresas** publicados en 2025-2026 (ver "No verificado").
- **OCDE**: la cifra "media OCDE 12,7 %" (2024) aparece **citada por ONTSI** (6.3), no comprobada en la fuente OCDE. El informe OCDE "Generative AI and the SME Workforce" no se pudo abrir (HTTP 403).

---

### N3·10. Frases listas para el artículo N3 (todas respaldadas arriba)

1. "En el primer trimestre de 2025, el 21,1 % de las empresas españolas de 10 o más empleados usaba alguna tecnología de inteligencia artificial, 8,7 puntos más que un año antes (INE)."
2. "Con datos comparables de Eurostat, España (20,3 %) está justo en la media de la UE (20,0 %), en el puesto 13 de 27; Dinamarca lidera con un 42 %."
3. "La brecha es de tamaño: usa IA el 17,9 % de las empresas de 10 a 49 empleados y el 58,2 % de las de 250 o más (INE)."
4. "Entre las microempresas (menos de 10 empleados), el uso casi se duplicó en un año: del 7,5 % al 13,4 % (INE)."
5. "Por sectores, la IA se concentra en información y comunicaciones (60,6 %) y actividades profesionales (38,5 %); en construcción, solo el 11,4 % (INE)."
6. "De las empresas que se han planteado usar IA y no lo hacen, el 81,3 % señala la falta de conocimientos especializados como motivo, por delante de la privacidad (53,6 %), la inseguridad jurídica (52,9 %) y el coste (48,3 %) (INE)."
7. "La falta de conocimientos pesa más en España que en Europa: 82,4 % frente al 70,3 % de la media de la UE (Eurostat)."
8. "La mitad de las empresas que usan IA (51,6 %) la compra como software comercial listo para usar (INE)."
9. "El 37,9 % de los españoles de 16 a 74 años usó IA generativa en 2025 y el 17,9 % lo hizo por trabajo (INE)."
10. "La UE se ha fijado que al menos el 75 % de sus empresas use cloud, big data o IA en 2030 (Decisión (UE) 2022/2481)."

---

### N3·11. Datos complementarios (otras fuentes, otras definiciones)

- **[ES] Banco de España, encuesta EBAE (otra definición; no comparar con el INE).**
  - Cita: "Casi el 20 % de las empresas españolas encuestadas emplean sistemas de IA, tasa inferior a la de Alemania, pero superior a la de Italia, si bien en la mayoría de ellas el uso de la IA se encuentra aún en una fase experimental."
  - Cita: "Las empresas españolas usan la IA principalmente para optimizar procesos internos y en marketing, y la automatización de tareas y la innovación tienen un uso limitado."
  - URL: https://www.bde.es/wbe/es/publicaciones/analisis-economico-investigacion/boletin-economico/2025t2-articulo-06-la-adopcion-de-la-inteligencia-artificial-en-las-empresas-espanolas-un-primer-analisis-basado-en-la-ebae.html
  - Boletín Económico 2025/T2, publicado el 7-05-2025. Año de referencia: 2025.
- **[GLOBAL] Barreras para implantar una IA responsable (AI Index 2026, encuesta a empresas con McKinsey).**
  - Cita: "The main obstacles to implementation remain gaps in knowledge (59%), budget constraints (48%), and regulatory uncertainty (41%)."
  - Cita: "Knowledge and training gaps remain the top-cited obstacle to implementing responsible AI, rising from 51% in 2024 to 59% in 2025".
  - URL: https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf (cap. 3.3). Año de referencia: 2025. Ámbito: global, sin China.
  - Coincide con la barrera n.º 1 en España (INE/Eurostat, sección 5), aunque es otra encuesta.
- **[ES] Difusión de la IA en la población (telemetría, no empresas).** El Microsoft AI Economy Institute, recogido en el AI Index 2026 (fig. 4.3.12, "AI diffusion by top 30 geographic areas"), da a España un 39,70 % en el primer semestre de 2025 y un 41,80 % en el segundo. Es **6.ª del mundo**, detrás de Emiratos (64,0 %), Singapur (60,9 %), Noruega (46,4 %), Irlanda (44,6 %) y Francia (44,0 %); EE. UU. es 24.º (28,3 %).
  - URL: https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf
  - **No es comparable** con el INE ni con Eurostat. Úsese solo como contexto de uso individual.
- **[GLOBAL] Adopción en organizaciones (McKinsey vía AI Index 2026):** 88 % en 2025, frente a 78 % en 2024. Detalle y matices en D8-1. Es otra definición.



---

## G1 · Qué es un LLM y cómo funciona

### Definiciones oficiales

**G1-1. Definición de LLM (Anthropic, glosario oficial)**
- Afirmación: un LLM es un modelo de lenguaje con muchos parámetros, entrenado con enormes cantidades de texto; Claude es un LLM ajustado con fine-tuning y RLHF.
- Cita: "Large language models (LLMs) are AI language models with many parameters that are capable of performing a variety of surprisingly useful tasks. These models are trained on vast amounts of text data and can generate human-like text, answer questions, summarize information, and more. Claude, an AI assistant for life and work built by Anthropic, is based on a large language model that has been fine-tuned and trained using RLHF."
- URL: https://platform.claude.com/docs/en/about-claude/glossary
- Organismo: Anthropic (documentación técnica) · Año de referencia: 2026 (página vigente) · Publicación: sin fecha visible · Consulta: 2026-10-18 · Ámbito: global

**G1-2. Qué es un modelo de lenguaje (Google, Machine Learning Crash Course)**
- Cita: "A language model estimates the probability of a token or sequence of tokens occurring within a longer sequence of tokens."
- Cita (token): "A token could be a word, a subword (a subset of a word), or even a single character."
- URL: https://developers.google.com/machine-learning/crash-course/llm
- Organismo: Google for Developers · Publicación/actualización: "Last updated 2026-01-09 UTC" · Consulta: 2026-10-18

**G1-3. El LLM como "autocompletado" y sus problemas (Google MLCC, página Transformers)**
- Cita: "In fact, LLMs are essentially autocomplete mechanisms that can automatically predict (complete) thousands of tokens."
- Cita: "Using LLMs to infer predictions causes the following problems: LLMs hallucinate, meaning their predictions often contain mistakes. LLMs consume enormous amounts of computational resources and electricity."
- Cita: "Transformers are the state-of-the-art architecture for a wide variety of language model applications, such as translation"
- URL: https://developers.google.com/machine-learning/crash-course/llm/transformers
- Organismo: Google for Developers · Actualización: 2026 (página vigente; la fecha "Last updated 2026-01-09" se comprobó en la página hermana intro-llms) · Consulta: 2026-10-18

**G1-4. Preentrenamiento: predecir la siguiente palabra (Anthropic, glosario)**
- Cita: "Pretraining is the initial process of training language models on a large unlabeled corpus of text. In Claude's case, autoregressive language models (such as Claude's underlying model) are pretrained to predict the next word, given the previous context of text in the document. These pretrained models are not inherently good at answering questions or following instructions, and often require deep skill in prompt engineering to elicit desired behaviors. Fine-tuning and RLHF are used to refine these pretrained models, making them more useful for a wide range of tasks."
- URL: https://platform.claude.com/docs/en/about-claude/glossary · Consulta: 2026-10-18

**G1-5. Modelos GPT y prompts (OpenAI, Key concepts)**
- Cita: "OpenAI's text generation models (often referred to as generative pre-trained transformers or "GPT" models for short), like gpt-6-astra and gpt-5.6-terra, have been trained to understand natural and formal language. These models allow text outputs in response to their inputs. The inputs to these models are also referred to as "prompts." Designing a prompt is essentially how you "program" a model, usually by providing instructions or some examples of how to successfully complete a task."
- URL: https://platform.openai.com/docs/concepts
- Organismo: OpenAI (documentación de la API) · Año de referencia: 2026 (cita modelos GPT-6) · Consulta: 2026-10-18

### Papers fundacionales

**G1-6. Transformer: "Attention Is All You Need" (Vaswani et al., 2017)**
- Afirmación: el artículo presenta el Transformer, una arquitectura basada solo en mecanismos de atención, en la que se apoyan los LLM actuales.
- Cita: "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train."
- URL: https://arxiv.org/abs/1706.03762
- Autores: Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser e Illia Polosukhin (Google Brain/Research) · v1: 12 jun 2017 · Consulta: 2026-10-18
- Nota: la página de arXiv no menciona la conferencia. Que se publicó en NIPS 2017 se sabe por fuentes externas y no se comprobó aquí.

**G1-7. InstructGPT / RLHF (Ouyang et al., 2022)**
- Afirmación: un modelo pequeño ajustado con feedback humano (1.300 M de parámetros) fue preferido por los evaluadores frente a GPT-3, que tiene 175.000 M. Ser más grande no implica seguir mejor las instrucciones.
- Cita: "Making language models bigger does not inherently make them better at following a user's intent. For example, large language models can generate outputs that are untruthful, toxic, or simply not helpful to the user."
- Cita: "In human evaluations on our prompt distribution, outputs from the 1.3B parameter InstructGPT model are preferred to outputs from the 175B GPT-3, despite having 100x fewer parameters."
- URL: https://arxiv.org/abs/2203.02155
- Autores: Long Ouyang et al. (OpenAI) · v1: 4 mar 2022 · Consulta: 2026-10-18

**G1-8. RLHF explicado (Anthropic, glosario)**
- Cita: "Reinforcement Learning from Human Feedback (RLHF) is a technique used to train a pretrained language model to behave in ways that are consistent with human preferences. [...] Human feedback consists of ranking a set of two or more example texts, and the reinforcement learning process encourages the model to prefer outputs that are similar to the higher-ranked ones."
- URL: https://platform.claude.com/docs/en/about-claude/glossary

### Cifras de contexto (Stanford AI Index)

**G1-9. Coste de inferencia: más de 280 veces más barato (AI Index 2025)**
- Cifra: el coste de inferencia de un sistema con nivel GPT-3.5 cayó más de 280 veces entre noviembre de 2022 y octubre de 2024.
- Cita: "Driven by increasingly capable small models, the inference cost for a system performing at the level of GPT-3.5 dropped over 280-fold between November 2022 and October 2024. At the hardware level, costs have declined by 30% annually, while energy efficiency has improved by 40% each year."
- URL: https://hai.stanford.edu/ai-index/2025-ai-index-report
- Organismo: Stanford HAI · Año de referencia: nov 2022 – oct 2024 · Publicación: la página no muestra fecha (edición 2025) · Consulta: 2026-10-18 · Ámbito: global
- Nota: el AI Index 2026 no repite una cifra equivalente de caída del coste de inferencia; la busqué en el PDF y no aparece.

**G1-10. Modelos notables por país, 2024 (AI Index 2025)**
- Cita: "In 2024, U.S.-based institutions produced 40 notable AI models, significantly outpacing China's 15 and Europe's three."
- URL: https://hai.stanford.edu/ai-index/2025-ai-index-report · Año de referencia: 2024

**G1-11. Modelos notables por país, 2025 (AI Index 2026)**
- Cita: "China leads in research, while the U.S. leads in notable model development. China leads in publication volume, citations, and patent grants, while the U.S. retains higher-impact patents and produced 59 notable models in 2025 to China's 35."
- Cita: "Industry produced over 90% of notable AI models in 2025, but the most capable models are now the least transparent. Training code, parameter counts, dataset sizes, and training duration are no longer disclosed for several of the most resource-intensive systems, including those from OpenAI, Anthropic, and Google."
- URL (PDF): https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf (capítulo 1, puntos clave) · Página del informe: https://hai.stanford.edu/ai-index/2026-ai-index-report
- Organismo: Stanford HAI · Año de referencia: 2025 · Publicación: abril de 2026. El artículo de HAI "Inside the AI Index: 12 Takeaways from the 2026 Report", de Shana Lynch, tiene fecha 13 abr 2026: https://hai.stanford.edu/news/inside-the-ai-index-12-takeaways-from-the-2026-report · Consulta: 2026-10-18

**G1-12. Adopción de la IA generativa más rápida que la del PC o internet (AI Index 2026)**
- Cita: "Generative AI reached 53% population adoption within three years, faster than the PC or the internet, though the pace varies by country and correlates strongly with GDP per capita."
- Cita (mensaje de los copresidentes): "Organizational adoption rose to 88%"
- URL (PDF): https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf · Año de referencia: 2025 · Ámbito: global
- Aviso de definición: el 53 % es adopción en la población (fuente: genaiadoptiontracker.com) y el 88 % es adopción en organizaciones (encuesta de empresas). No deben mezclarse.

### Uso de ChatGPT (estudio de OpenAI y NBER)

**G1-13. 700 millones de usuarios semanales y 18.000 millones de mensajes (julio 2025)**
- Cita: "ChatGPT launched in November 2022. By July 2025, 18 billion messages were being sent each week by 700 million users, representing around 10% of the global adult population."
- Cita (resumen): "We find steady growth in work-related messages but even faster growth in non-work-related messages, which have grown from 53% to more than 70% of all usage. [...] "Practical Guidance," "Seeking Information," and "Writing" are the three most common topics and collectively account for nearly 80% of all conversations. Writing dominates work-related tasks"
- URL: https://www.nber.org/papers/w34255 · PDF: https://www.nber.org/system/files/working_papers/w34255/w34255.pdf
- Autores: Aaron Chatterji, Thomas Cunningham, David J. Deming, Zoe Hitzig, Christopher Ong, Carl Yan Shan y Kevin Wadman · NBER Working Paper 34255 · Publicación: septiembre de 2025 · Año de referencia: nov 2022 – jul 2025 · Consulta: 2026-10-18
- Muestra y ámbito: usuarios de los planes de consumo (Free, Plus, Pro) en todo el mundo; muestra representativa de conversaciones clasificada con un sistema automático que preserva la privacidad. Excluye los planes Business y Enterprise.
- Nota: no hay cifra primaria de 2026 accesible (openai.com bloquea el acceso). TechCrunch (27-02-2026) informa de 900 M de usuarios semanales anunciados por OpenAI: ver D2, punto 5.

---

## G2 · Alucinaciones: por qué ocurren y cómo evitarlas

### Definiciones

**G2-1. Definición de NIST: "confabulation" (NIST AI 600-1)**
- Cita: "Confabulation: The production of confidently stated but erroneous or false content (known colloquially as "hallucinations" or "fabrications") by which users may be misled or deceived."
- Cita (por qué ocurre): "Confabulations are a natural result of the way generative models are designed: they generate outputs that approximate the statistical distribution of their training data; for example, LLMs predict the next token or word in a sentence or phrase. While such statistical prediction can produce factually accurate and consistent outputs, it can also produce outputs that are factually inaccurate or internally inconsistent."
- URL: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- Organismo: NIST (EE. UU.), "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile" · Publicación: julio de 2024 · Consulta: 2026-10-18

**G2-2. Definición de Anthropic**
- Cita: "Even the most advanced language models, like Claude, can sometimes generate text that is factually incorrect or inconsistent with the given context. This phenomenon, known as "hallucination," can undermine the reliability of your AI-driven solutions."
- URL: https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations · Consulta: 2026-10-18

### Por qué ocurren (paper de OpenAI, septiembre 2025)

**G2-3. Kalai et al., "Why Language Models Hallucinate"**
- Afirmación: los modelos alucinan porque entrenamiento y evaluación premian adivinar en lugar de reconocer la incertidumbre. Los benchmarks puntúan como en un examen tipo test sin penalización: responder "no lo sé" vale 0, igual que fallar.
- Cita (resumen): "Like students facing hard exam questions, large language models sometimes guess when uncertain, producing plausible yet incorrect statements instead of admitting uncertainty. [...] We argue that language models hallucinate because the training and evaluation procedures reward guessing over acknowledging uncertainty, and we analyze the statistical causes of hallucinations in the modern training pipeline. Hallucinations need not be mysterious—they originate simply as errors in binary classification."
- Cita: "language models are optimized to be good test-takers, and guessing when uncertain improves test performance."
- Cita (cuerpo): "Suppose Model A is an aligned model that correctly signals uncertainty and never hallucinates. Let Model B be similar to Model A except that it never indicates uncertainty and always "guesses" when unsure. Model B will outperform A under 0-1 scoring, the basis of most current benchmarks."
- Cita (propuesta): "Answer only if you are > t confident, since mistakes are penalized t/(1 − t) points, while correct answers receive 1 point, and an answer of "I don't know" receives 0 points."
- URL: https://arxiv.org/abs/2509.04664 (también en https://cdn.openai.com/pdf/d04913be-3f6f-4d2b-b283-ff432ef4aaa5/why-language-models-hallucinate.pdf)
- Autores: Adam Tauman Kalai, Ofir Nachum y Edwin Zhang (OpenAI) y Santosh S. Vempala (Georgia Tech) · Publicación: 4 sep 2025 · Consulta: 2026-10-18
- **No verificado en fuente primaria:** la tabla de SimpleQA que compara gpt-5-thinking-mini con o4-mini. Según Gigazine (fuente secundaria, https://gigazine.net/gsc_news/en/20250908-openai-gpt-5-hallucination), gpt-5-thinking-mini tiene un 52 % de abstención, un 22 % de acierto y un 26 % de error, frente a un 24 % de acierto y un 75 % de error de o4-mini. La tabla está en el blog de OpenAI (https://openai.com/index/why-language-models-hallucinate/), que devuelve 403 a las herramientas automáticas, y no aparece en el PDF del paper. **No usar estas cifras sin comprobarlas a mano en el blog.**

### Cuánto alucinan los modelos actuales (AI Index 2026)

**G2-4. Entre un 22 % y un 94 % según el modelo (AA-Omniscience)**
- Cita: "Across 26 models, hallucination rates range from 22% to 94% (Figure 3.2.6). Grok 4.20 Beta 0305 had the lowest rate (22%), followed by Claude 4.5 Haiku (26%) and MiMo-V2-Pro (30%). At the higher end, gpt-oss-20B (high) reached 94% and Gemini 3 Flash reached 92%."
- Cita (método): "It is a knowledge and hallucination benchmark that tests factual reliability across 6,000 questions in six domains, from law and health to software engineering and mathematics. Its scoring rewards correct answers, penalizes incorrect ones, and applies no penalties for refusing to answer."
- URL: https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf (cap. 3.2, "Factuality and Truthfulness", pp. 135-136) · Organismo: Stanford HAI, con datos de Artificial Analysis · Año de referencia: 2025-2026 · Publicación: abril de 2026

**G2-5. Alucinaciones al resumir documentos: entre el 1,8 % y el 5,4 % (Vectara HHEM)**
- Cita: "The Hughes Hallucination Evaluation Model (HHEM) leaderboard, developed by Vectara, assesses how frequently LLMs introduce hallucinations when summarizing documents from the CNN/Daily Mail corpus. Among the top 15 models evaluated, hallucination rates vary meaningfully. They range from 1.8% to 5.4%—with most clustering in the 4%–5% range"
- URL: igual que G2-4 (p. 136)
- Uso editorial: sirve para explicar que la tasa depende mucho de la tarea. Resumir un documento que se le da al modelo (menos del 6 %) no es lo mismo que preguntarle datos de memoria (22-94 %). Las dos escalas no son comparables, como advierte el propio informe.

**G2-6. Los modelos no distinguen bien conocimiento y creencia (AI Index 2026)**
- Cita: "AI models struggle to tell the difference between knowledge and belief. In a new accuracy benchmark, hallucination rates across 26 top models range from 22% to 94%. GPT-4o's accuracy dropped from 98.2% to 64.4%, and DeepSeek R1 fell from over 90% to 14.4%. When a false statement is presented as something another person believes, models handle it well. When the same false statement is presented as something a user believes, performance collapses."
- URL: igual que G2-4 (puntos clave del capítulo 3)

**G2-7. Incidentes de IA documentados (AI Index 2026)**
- Cita: "Documented AI incidents continued to rise, with the AI Incident Database recording 362 in 2025, up from 233 in 2024."
- URL: igual que G2-4 · Año de referencia: 2025

### Estudios en el ámbito jurídico

**G2-8. Dahl et al., "Large Legal Fictions" (Stanford RegLab)**
- Cita: "we find that legal hallucinations are alarmingly prevalent, occurring between 58% of the time with ChatGPT 4 and 88% with Llama 2, when these models are asked specific, verifiable questions about random federal court cases."
- URL: https://arxiv.org/abs/2401.01301 · Autores: Matthew Dahl, Varun Magesh, Mirac Suzgun y Daniel E. Ho · v1: 2 ene 2024 · Consulta: 2026-10-18
- Nota: el TSJ de Navarra (G2-C6) cita este estudio con un "69 % con ChatGPT 3.5". La versión actual de arXiv habla de "58 % con ChatGPT 4". Las cifras dependen de la versión del paper y del modelo, así que conviene citar la de arXiv.

**G2-9. Magesh et al., "Hallucination-Free?": las herramientas jurídicas con RAG también alucinan**
- Cita: "While hallucinations are reduced relative to general-purpose chatbots (GPT-4), we find that the AI research tools made by LexisNexis (Lexis+ AI) and Thomson Reuters (Westlaw AI-Assisted Research and Ask Practical Law AI) each hallucinate between 17% and 33% of the time."
- URL: https://arxiv.org/abs/2405.20362 · Autores: Varun Magesh, Faiz Surani, Matthew Dahl, Mirac Suzgun, Christopher D. Manning y Daniel E. Ho · v1: 30 may 2024 · Consulta: 2026-10-18 · Ámbito: EE. UU.

### Cómo reducirlas (documentación de los proveedores)

**G2-10. Técnicas de Anthropic**
- Cita: "Allow Claude to say "I don't know": Explicitly give Claude permission to admit uncertainty. This simple technique can drastically reduce false information."
- Cita: "Use direct quotes for factual grounding: For tasks involving long documents (>20k tokens), ask Claude to extract word-for-word quotes first before performing its task."
- Cita: "Verify with citations: Make Claude's response auditable by having it cite quotes and sources for each of its claims. [...] If it can't find a quote, it must retract the claim."
- Otras técnicas listadas: "Chain-of-thought verification", "Best-of-N verification", "Iterative refinement" y "External knowledge restriction".
- Cita (límite): "Remember, while these techniques significantly reduce hallucinations, they don't eliminate them entirely. Always validate critical information, especially for high-stakes decisions."
- URL: https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations · Consulta: 2026-10-18

### Casos reales con consecuencias

**G2-C1. Mata v. Avianca, Inc. (Nueva York, 2023): 5.000 dólares de sanción por jurisprudencia inventada con ChatGPT**
- Hechos: dos abogados y su despacho (Levidow, Levidow & Oberman) presentaron sentencias inexistentes generadas por ChatGPT y siguieron defendiéndolas después de que el tribunal las pusiera en duda.
- Cita: "Peter LoDuca, Steven A. Schwartz and the law firm of Levidow, Levidow & Oberman P.C. (the "Levidow Firm") (collectively, "Respondents") abandoned their responsibilities when they submitted non-existent judicial opinions with fake quotes and citations created by the artificial intelligence tool ChatGPT, then continued to stand by the fake opinions after judicial orders called their existence into question."
- Cita (principio útil): "Technological advances are commonplace and there is nothing inherently improper about using a reliable artificial intelligence tool for assistance. But existing rules impose a gatekeeping role on attorneys to ensure the accuracy of their filings."
- Cita (declaración de Schwartz): "I falsely assumed was like a super search engine called ChatGPT"
- Sanción: "A penalty of $5,000 is jointly and severally imposed on Respondents and shall be paid into the Registry of this Court within 14 days of this Opinion and Order."
- Fuente primaria: Opinion and Order on Sanctions, 22-cv-1461 (PKC), S.D.N.Y., juez P. Kevin Castel, Document 54, 22 jun 2023. https://storage.courtlistener.com/recap/gov.uscourts.nysd.575368/gov.uscourts.nysd.575368.54.0.pdf · Consulta: 2026-10-18

**G2-C2. Moffatt v. Air Canada, 2024 BCCRT 149 (Canadá): la empresa responde por lo que dice su chatbot**
- Hechos: el chatbot de Air Canada dijo a un pasajero que podía pedir la tarifa por duelo después de volar. La política real no lo permitía. Air Canada alegó que el chatbot era responsable de sus propios actos.
- Cita: "In effect, Air Canada suggests the chatbot is a separate legal entity that is responsible for its own actions. This is a remarkable submission. While a chatbot has an interactive component, it is still just a part of Air Canada's website. It should be obvious to Air Canada that it is responsible for all the information on its website. It makes no difference whether the information comes from a static page or a chatbot."
- Cita: "I find Air Canada did not take reasonable care to ensure its chatbot was accurate."
- Condena: "I order Air Canada to pay Mr. Moffatt a total of $812.02, broken down as follows: a. $650.88 in damages, b. $36.14 in pre-judgment interest [...] and c. $125 in CRT fees." (importes en dólares canadienses)
- Fuente primaria: Civil Resolution Tribunal de la Columbia Británica, miembro del tribunal Christopher C. Rivers, decisión de 14 feb 2024, expediente SC-2023-005609. https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do · Consulta: 2026-10-18
- Nota: es un tribunal de reclamaciones de menor cuantía. La cuantía es pequeña; el interés del caso está en el principio de responsabilidad.

**G2-C3. Deloitte Australia (2025): devolución parcial de un informe de 440.000 AUD con citas inventadas**
- Cita (AP): "Deloitte Australia will partially refund the 440,000 Australian dollars ($290,000) paid by the Australian government for a report that was littered with apparent AI-generated errors, including a fabricated quote from a federal court judgment and references to nonexistent academic research papers."
- Cita (AP): "The revised version included a disclosure that a generative AI language system, Azure OpenAI, was used in writing the report."
- Fuente: Associated Press, 7 oct 2025, consultada en una reproducción íntegra de Bay News 9: https://baynews9.com/fl/tampa/ap-top-news/2025/10/07/deloitte-to-partially-refund-australian-government-for-report-with-apparent-ai-generated-errors · Consulta: 2026-10-18 · El cliente fue el Department of Employment and Workplace Relations (DEWR).
- No verificado: el importe final reembolsado. CFO Dive habla de más de 97.000 AUD, pero no lo comprobé en una fuente primaria. apnews.com devuelve 403.

**G2-C4. Google Bard y el telescopio James Webb (feb 2023): Alphabet pierde 100.000 millones de dólares de valor en bolsa**
- Cita (Reuters, en Irish Times): "Alphabet lost $100 billion (€93 billion) in market value on Wednesday"
- Cita: el error consistió en "one suggesting the JWST was used to take the very first pictures of a planet outside the Earth's solar system"
- Fuente: Reuters, reproducido en The Irish Times el 9 feb 2023 (pérdida del miércoles 8 feb 2023): https://www.irishtimes.com/business/2023/02/09/alphabet-shares-dive-after-google-chatbot-gets-satellite-question-wrong/ · Consulta: 2026-10-18
- Nota: reuters.com bloquea el acceso automático. La caída también reflejó la decepción de los inversores con la presentación de Google, así que no se puede atribuir solo al error.

**G2-C5. Tribunal Constitucional (España, 2024): apercibimiento por 19 citas falsas**
- Cita: "ha adoptado un Acuerdo por el que se impone al abogado firmante de una demanda de amparo la sanción de "apercibimiento", por haberse acreditado que faltó por escrito el respeto debido a los magistrados de la Sala y a la propia institución, al haber presentado en varios apartados de dicha demanda la cita supuestamente literal de pasajes de 19 sentencias del Tribunal Constitucional, al efecto entrecomilladas, cuando resulta que ninguna de ellas era real."
- Cita (principio): "fuera cual fuese la causa de la inclusión de citas irreales (uso de la inteligencia artificial, entrecomillado de argumentos propios, etcétera), el letrado es siempre responsable de revisar exhaustivamente todo el contenido de este y de cualquier escrito"
- Fuente primaria: Tribunal Constitucional, Nota informativa nº 90/2024 (Acuerdo de la Sala Primera de 9 sep 2024). https://www.tribunalconstitucional.es/NotasDePrensaDocumentos/NP_2024_090/NOTA%20INFORMATIVA%20N%C2%BA%2090-2024.pdf · Consulta: 2026-10-18
- Matiz: el TC no da por probado que se usara IA. Lo menciona solo como causa posible.

**G2-C6. TSJ de Navarra, Auto 2/2024 (ATSJ NA 38/2024): una querella cita el Código Penal de Colombia generado por ChatGPT**
- Cita: el querellante reconoció un error al citar un precepto "que no correspondía al Código Penal del Reino de España sino al Código Penal de Colombia - al que fue facilitado por la inteligencia artificial, debido a un manejo inadecuado por parte de su despacho del sistema de inteligencia artificial CHATGPT 3"
- Cita: "No nos cabe duda que el uso descuidado de estas tecnologías en los procedimientos judiciales plantea importantes implicaciones deontológicas y, desde luego, es susceptible de integrar un claro ejemplo de mala fe procesal y de abuso del proceso."
- Resultado: la pieza se archivó sin sanción, porque el abogado lo había corregido y pedido disculpas ("Archivo de la pieza separada sin imposición de sanción").
- Fuente primaria: Auto del TSJ de Navarra, Sala de lo Civil y Penal, 4 sep 2024, ECLI:ES:TSJNA:2024:38A (copia en la base de Charlotin): https://www.damiencharlotin.com/documents/1041/ATSJ_NA_38_2024.pdf · Consulta: 2026-10-18

**G2-C7. TSJ de Galicia (Sala de lo Social), Auto 61/2026 de 7 jul 2026: multa de 1.800 € fijada según el precio de una IA jurídica verificada**
- Cita: "Todo lo cual nos conduce a fijarla en 1800 euros, porque tenemos que partir [...] de cuál ha sido su evidente causa y de su palmario remedio: una IA generativa especializada de pago."
- Cita: "Las principales editoriales jurídicas del mercado español –a saber, Aranzadi, Tirant lo Blanch o Lefebvre- ofrecen suscripciones a soluciones de inteligencia artificial integradas con bases de datos jurisprudenciales verificadas, con planes de acceso anual que oscilan, en modalidades básicas, entre 1500 y 3000 euros [...]. La contratación de cualquiera de estas herramientas (o, en su defecto, la simple comprobación de las citas a través del CENDOJ, de acceso gratuito y muy intuitivo) habría impedido el resultado que ahora se enjuicia."
- Fuente primaria: Auto 00061/2026, TSXG Sala do Social, A Coruña, pieza 0005472/2025 (copia en la base de Charlotin): https://www.damiencharlotin.com/documents/2614/Galicia_7_July_2026.pdf · Consulta: 2026-10-18
- Uso editorial: es un caso muy reciente y español, útil para D5 (despachos) y G2. El auto se remite a un precedente del TSJ de Canarias (Las Palmas) de 10 feb 2026 que siguió el mismo criterio.

**G2-C8. Base de datos de casos (Damien Charlotin): 2.199 resoluciones judiciales con alucinaciones**
- Cita: "This database tracks legal decisions [...] While seeking to be exhaustive (2199 cases identified so far), it is a work in progress and will expand as new examples emerge." · "Last updated: 16 October 2026" · Licencia CC BY 4.0.
- Mi recuento sobre el CSV descargado el 2026-10-18 (2.200 filas): EE. UU. 1.500; Canadá 231; Australia 112; Reino Unido 76; Israel 58; Brasil 41. **España: 8 entradas** con "Spain" en el campo de país (TC 2024, TSJ Navarra 2024, AP Alicante 2025, TSJ Canarias 2025 y 2026, Ceuta 2025 (alegado), Tribunal Supremo jun 2026, TSJ Galicia jul 2026). Por año: 2023: 16 · 2024: 61 · 2025: 861 · 2026 (hasta el 16 oct): 1.261.
- URL: https://www.damiencharlotin.com/hallucinations/ · CSV: https://www.damiencharlotin.com/hallucinations/hallucinations/download.csv · Consulta: 2026-10-18
- Aviso: es una base de datos de un investigador individual (HEC Paris), no oficial. El recuento por año lo calculé yo a partir del CSV.

---

## G3 · Tokens y ventana de contexto

### Qué es un token y equivalencias

**G3-1. OpenAI: 1 token equivale a unos 4 caracteres o 0,75 palabras en inglés**
- Cita: "Text generation and embeddings models process text in chunks called tokens. Tokens represent commonly occurring sequences of characters. For example, the string " tokenization" is decomposed as " token" and "ization", while a short and common word like " the" is represented as a single token. [...] As a rough rule of thumb, 1 token is approximately 4 characters or 0.75 words for English text."
- Cita (límite): "One limitation to keep in mind is that for a text generation model the prompt and the generated output combined must be no more than the model's maximum context length."
- URL: https://platform.openai.com/docs/concepts · Consulta: 2026-10-18
- No verificado: el artículo de ayuda "What are tokens and how to count them" (https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them), que incluye la frase "100 tokens ≈ 75 words", devuelve 403. Para citar, usar la regla de 0,75 palabras de la página Key concepts.

**G3-2. Google Gemini: 1 token equivale a unos 4 caracteres; 100 tokens son entre 60 y 80 palabras en inglés**
- Cita: "For Gemini models, a token is equivalent to about 4 characters. 100 tokens is equal to about 60-80 English words."
- URL: https://ai.google.dev/gemini-api/docs/tokens · Actualización: "Last updated 2026-10-13 UTC" · Consulta: 2026-10-18

**G3-3. Anthropic: el número de caracteres por token depende del modelo y del idioma; el tokenizador nuevo genera un 30 % más de tokens**
- Cita: "Tokens are the smallest individual units of a language model, and can correspond to words, subwords, characters, or even bytes (in the case of Unicode). For Claude, the number of characters a token represents depends on the model and the language. Claude 4.7 and later models and Claude Mythos Preview use a newer tokenizer that produces approximately 30 percent more tokens for the same text than earlier models, on which a token represents approximately 3.5 English characters."
- URL: https://platform.claude.com/docs/en/about-claude/glossary · Consulta: 2026-10-18
- Uso editorial: las reglas de equivalencia cambian según el proveedor y la versión del modelo. Cada proveedor da una cifra distinta (4 caracteres, 3,5 caracteres o un 30 % más de tokens).

**G3-4. En español se gastan más tokens que en inglés (Petrov et al., NeurIPS 2023)**
- Afirmación: con el tokenizador de ChatGPT/GPT-4 (cl100k_base), el mismo texto ocupa en español unas 1,55 veces los tokens que en inglés. Con GPT-2/RoBERTa la cifra sube a 1,99 y con FlanT5 a 2,23. Medido sobre FLORES-200 (2.000 frases traducidas).
- Cita (resumen): "The same text translated into different languages can have drastically different tokenization lengths, with differences up to 15 times in some cases. [...] This induces unfair treatment for some language communities in regard to the cost of accessing commercial language services, the processing time and latency, as well as the amount of content that can be provided as context to the models."
- Dato de la tabla 1 ("Premiums with respect to English on FLORES-200"): Spanish 1.99 (GPT-2/RoBERTa) · 1.55 (ChatGPT/GPT-4) · 2.23 (FlanT5).
- URL: https://arxiv.org/abs/2305.15425 · PDF: https://arxiv.org/pdf/2305.15425 · Autores: Aleksandar Petrov, Emanuele La Malfa, Philip H. S. Torr y Adel Bibi · "Published at NeurIPS 2023" · Consulta: 2026-10-18
- Aviso: el dato es de 2023 y corresponde al tokenizador cl100k_base. No verifiqué cuánto ha cambiado con los tokenizadores de 2025-2026 (o200k, Claude 4.7+, Gemini). En un artículo, decirlo así: "en estudios con tokenizadores de 2023, el español necesitaba en torno a un 55 % más de tokens que el inglés".

### Ventana de contexto

**G3-5. Definición de ventana de contexto y concepto de "context rot" (Anthropic)**
- Cita: "The "context window" refers to all the text a language model can reference when generating a response, including the response itself. This is different from the large corpus of data the language model was trained on, and instead represents a "working memory" for the model. A larger context window allows the model to handle more complex and lengthy prompts, but more context isn't automatically better. As token count grows, accuracy and recall degrade, a phenomenon known as context rot."
- Cita: "Everything in the request counts toward the context window: the system prompt, every message in messages (including tool results, images, and documents), and your tool definitions. The output Claude generates for the turn, including its extended thinking, counts too."
- URL: https://platform.claude.com/docs/en/build-with-claude/context-windows · Consulta: 2026-10-18

**G3-6. Tamaños de ventana vigentes a 18 oct 2026 (documentación oficial)**

| Proveedor | Modelo(s) | Ventana | Salida máx. | Cita / URL |
|---|---|---|---|---|
| Anthropic | Claude Fable 5.1, Mythos 5.1, Fable 5, Mythos 5, Opus 5.5, Opus 5, Opus 4.8/4.7/4.6, Sonnet 5.5, Sonnet 5, Sonnet 4.6, Haiku 5.5, Mythos Preview | 1M tokens | 128k | "...have a 1M-token context window. A single request to any of them can generate up to 128k output tokens (max_tokens). Other Claude models, including Claude Sonnet 4.5 (deprecated), have a 200k-token context window." https://platform.claude.com/docs/en/build-with-claude/context-windows |
| OpenAI | gpt-6-astra, gpt-6.1-sol, gpt-6-luna | 1,05M | 128K | Ficha de modelos: "Context window 1.05M", "Max output 128K tokens". https://platform.openai.com/docs/models |
| Google | Gemini 4 (gemini-4-argon) | 1.048.576 (1M) compartida entre entrada, razonamiento y salida | 65.536 por defecto | "Share a single 1M-token context window (1,048,576 tokens) across input, thinking, and output tokens." https://ai.google.dev/gemini-api/docs/tokens (actualizada 2026-10-13) |
| Google | Gemini 3 y 2.5 | 1.048.576 de entrada | 65.536 | Misma URL |

- Nota: no encontré ninguna ventana de 2M tokens en la documentación vigente de Gemini. El dato de 2M corresponde a modelos antiguos y no lo verifiqué.
- Para la equivalencia "1M de tokens ≈ X palabras o páginas", usar la regla de cada proveedor e indicar que es aproximada (con 0,75 palabras por token, 1M de tokens son unas 750.000 palabras en inglés). Es una cuenta propia; ningún proveedor publica la cifra literal.

**G3-7. Las ventanas de contexto crecen casi 30 veces al año, pero eso no garantiza comprensión (AI Index 2026)**
- Cita: "Context windows, the amount of text a model can process in a single input, have grown by almost 30x per year since mid-2023 (Figure 2.2.5). Models that once accepted a few thousand tokens can now process 1 million or more. At the upper end, this is equivalent to multiple books or an entire codebase in a single pass. [...] However, bigger context windows do not translate into deeper understanding, as the gap between accepted and usable context length is wide."
- Cita: "Longer inputs come with practical costs of slower response times, higher operating expenses, and reduced accuracy for information that appears later in the input."
- URL: https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf (cap. 2, recuadro "The Gap Between Long Context Windows and Deep Understanding") · Publicación: abril de 2026

**G3-8. "Lost in the Middle" (Liu et al.): el rendimiento cae cuando la información está en medio del texto**
- Cita: "We find that performance can degrade significantly when changing the position of relevant information, indicating that current language models do not robustly make use of information in long input contexts. In particular, we observe that performance is often highest when relevant information occurs at the beginning or end of the input context, and significantly degrades when models must access relevant information in the middle of long contexts, even for explicitly long-context models."
- URL: https://arxiv.org/abs/2307.03172 · Primer autor: Nelson F. Liu (Stanford) · v1: 6 jul 2023 · arXiv indica: "Accepted for publication in Transactions of the Association for Computational Linguistics (TACL), 2023" (el volumen de TACL es de 2024; esto último no lo verifiqué) · Consulta: 2026-10-18
- Aviso: el estudio usa modelos de 2023 (GPT-3.5 y similares). Sirve para ilustrar el fenómeno, no como medida de los modelos actuales. Para la situación actual, citar G3-5 (context rot) y G3-7.

---

## G5 · Glosario de IA para empresas (definiciones con fuente)

### Definiciones legales (UE)

**G5-1. «Sistema de IA» (AI Act, art. 3.1)**
- Cita literal: "«sistema de IA»: un sistema basado en una máquina que está diseñado para funcionar con distintos niveles de autonomía y que puede mostrar capacidad de adaptación tras el despliegue, y que, para objetivos explícitos o implícitos, infiere de la información de entrada que recibe la manera de generar resultados de salida, como predicciones, contenidos, recomendaciones o decisiones, que pueden influir en entornos físicos o virtuales"
- URL: https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=OJ:L_202401689 · Reglamento (UE) 2024/1689, DO L de 12.7.2024 · Consulta: 2026-10-18

**G5-2. «Responsable del despliegue» (art. 3.4) y «proveedor» (art. 3.3)**
- Cita: "«responsable del despliegue»: una persona física o jurídica, o autoridad pública, órgano u organismo que utilice un sistema de IA bajo su propia autoridad, salvo cuando su uso se enmarque en una actividad personal de carácter no profesional"
- Cita: "«proveedor»: una persona física o jurídica, autoridad pública, órgano u organismo que desarrolle un sistema de IA o un modelo de IA de uso general o para el que se desarrolle un sistema de IA o un modelo de IA de uso general y lo introduzca en el mercado o ponga en servicio el sistema de IA con su propio nombre o marca, previo pago o gratuitamente"
- URL: igual que G5-1

**G5-3. «Modelo de IA de uso general» (art. 3.63) y «sistema de IA de uso general» (art. 3.66)**
- Cita: "«modelo de IA de uso general»: un modelo de IA, también uno entrenado con un gran volumen de datos utilizando autosupervisión a gran escala, que presenta un grado considerable de generalidad y es capaz de realizar de manera competente una gran variedad de tareas distintas, independientemente de la manera en que el modelo se introduzca en el mercado, y que puede integrarse en diversos sistemas o aplicaciones posteriores, excepto los modelos de IA que se utilizan para actividades de investigación, desarrollo o creación de prototipos antes de su introducción en el mercado"
- Cita: "«sistema de IA de uso general»: un sistema de IA basado en un modelo de IA de uso general y que puede servir para diversos fines, tanto para su uso directo como para su integración en otros sistemas de IA"
- URL: igual que G5-1

**G5-4. «Alfabetización en materia de IA» (art. 3.56)**
- Cita: "«alfabetización en materia de IA»: las capacidades, los conocimientos y la comprensión que permiten a los proveedores, responsables del despliegue y demás personas afectadas, teniendo en cuenta sus respectivos derechos y obligaciones en el contexto del presente Reglamento, llevar a cabo un despliegue informado de los sistemas de IA y tomar conciencia de las oportunidades y los riesgos que plantea la IA, así como de los perjuicios que puede causar"
- URL: igual que G5-1

**G5-5. Artículo 4: texto VIGENTE tras el Ómnibus Digital (Reglamento (UE) 2026/1744)** ⚠️ importante
- Contexto: el Reglamento (UE) 2026/1744 ("Ómnibus digital sobre IA"), de 8 jul 2026, se publicó en el DO L el 24.7.2026 y entró en vigor "a los tres días de su publicación" (27 jul 2026). Sustituye el artículo 4.
- **Texto original (2024), ya no vigente:** "Los proveedores y responsables del despliegue de sistemas de IA adoptarán medidas para garantizar que, en la mayor medida posible, su personal y demás personas que se encarguen en su nombre del funcionamiento y la utilización de sistemas de IA tengan un nivel suficiente de alfabetización en materia de IA, teniendo en cuenta sus conocimientos técnicos, su experiencia, su educación y su formación, así como el contexto previsto de uso de los sistemas de IA y las personas o los colectivos de personas en que se van a utilizar dichos sistemas."
- **Texto nuevo (art. 4.1):** "Los proveedores y responsables del despliegue de sistemas de IA adoptarán medidas para apoyar la promoción de la alfabetización en materia de IA de su personal y demás personas que se encarguen en su nombre del funcionamiento y la utilización de sistemas de IA, teniendo en cuenta sus conocimientos técnicos, su experiencia, su educación y su formación, así como el contexto previsto de uso de los sistemas de IA y las personas o los colectivos de personas en que se van a utilizar dichos sistemas. Esta obligación no exige que los proveedores o los responsables del despliegue garanticen un nivel específico de alfabetización en materia de IA de ninguna persona en particular."
- **Art. 4.2:** "La Comisión y los Estados miembros apoyarán y facilitarán los esfuerzos de los proveedores y responsables del despliegue de sistemas de IA, en particular de las pymes, en el cumplimiento de su obligación en virtud del apartado 1 del presente artículo. A tal fin, la Comisión publicará ejemplos prácticos de cómo cumplir dicha obligación en la plataforma única de información a que se refiere el artículo 62, apartado 3, letra b)."
- Considerando 8 (motivo del cambio): "la experiencia compartida por las partes interesadas pone de manifiesto que una solución que imponga obligaciones estrictas para garantizar un nivel suficiente de alfabetización en materia de IA no sería adecuada para todos los tipos de proveedores y responsables del despliegue [...] los datos indican que la imposición de tales obligaciones crea una carga relativa al cumplimiento adicional, en particular para las pequeñas empresas, mientras que la alfabetización en materia de IA debe ser una prioridad estratégica, independientemente de las obligaciones reglamentarias y las posibles sanciones."
- URL: https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=OJ:L_202601744 · Consulta: 2026-10-18
- Nota para redactores: la obligación sigue existiendo (las empresas "adoptarán medidas"), pero ya no exige garantizar un "nivel suficiente". Cualquier texto del blog que cite el artículo 4 original como vigente está desactualizado. Esto afecta también a A1, A2 y A3.

**G5-6. Definición de sistema de IA de la OCDE (actualizada en 2023)**
- Cita: "An AI system is a machine-based system that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments. Different AI systems vary in their levels of autonomy and adaptiveness after deployment."
- URL: https://oecd.ai/en/ai-principles · La actualización se explica en "Updates to the OECD's definition of an AI system explained" (Stuart Russell, Karine Perset y Marko Grobelnik, 29 nov 2023): https://oecd.ai/en/wonk/ai-system-definition-update · La página de principios dice que se "updated in May 2024" · Consulta: 2026-10-18
- Uso editorial: la definición del AI Act (G5-1) se armonizó con esta, como dice el propio considerando 12 del Reglamento ("armonizarlo estrechamente con los trabajos de las organizaciones internacionales").

### Definiciones técnicas (documentación de proveedores y papers)

**G5-7. Agente frente a flujo de trabajo (Anthropic, "Building effective agents")**
- Cita: "Workflows are systems where LLMs and tools are orchestrated through predefined code paths. Agents, on the other hand, are systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks."
- URL: https://www.anthropic.com/engineering/building-effective-agents · Publicación: 19 dic 2024 · Consulta: 2026-10-18

**G5-8. RAG (paper original y definición de Anthropic)**
- Cita (Lewis et al.): "We explore a general-purpose fine-tuning recipe for retrieval-augmented generation (RAG) -- models which combine pre-trained parametric and non-parametric memory for language generation."
- URL: https://arxiv.org/abs/2005.11401 · Primer autor: Patrick Lewis (Facebook AI Research) · v1: 22 may 2020 · "Accepted at NeurIPS 2020"
- Cita (Anthropic): "Retrieval augmented generation (RAG) is a technique that combines information retrieval with language model generation to improve the accuracy and relevance of the generated text, and to better ground the model's response in evidence. In RAG, a language model is augmented with an external knowledge base or a set of documents that is passed into the context window."
- URL: https://platform.claude.com/docs/en/about-claude/glossary

**G5-9. Fine-tuning (Anthropic y OpenAI)**
- Cita (Anthropic): "Fine-tuning is the process of further training a pretrained language model using additional data. This causes the model to start representing and mimicking the patterns and characteristics of the fine-tuning dataset. Claude is not a bare language model; it has already been fine-tuned to be a helpful assistant. The Claude API does not currently offer fine-tuning"
- Cita (OpenAI): "Fine-tuning lets you take an OpenAI base model, provide the kinds of inputs and outputs you expect in your application, and get a model that excels in the tasks you'll use it for."
- **Dato de actualidad (OpenAI, oct 2026):** "OpenAI is winding down the fine-tuning platform. The platform is no longer accessible to new users, but existing users of the fine-tuning platform will be able to create training jobs for the coming months. All fine-tuned models will remain available for inference until their base models are deprecated."
- URLs: https://platform.claude.com/docs/en/about-claude/glossary · https://platform.openai.com/docs/guides/model-optimization · Consulta: 2026-10-18
- Uso editorial: para una empresa en 2026, el fine-tuning es una vía cada vez menos habitual. RAG y un buen prompting resuelven la mayoría de los casos.

**G5-10. Prompt**
- Cita (OpenAI): "The inputs to these models are also referred to as "prompts." Designing a prompt is essentially how you "program" a model, usually by providing instructions or some examples of how to successfully complete a task."
- URL: https://platform.openai.com/docs/concepts

**G5-11. Embedding**
- Cita (OpenAI): "An embedding is a vector representation of a piece of data (e.g. some text) that is meant to preserve aspects of its content and/or its meaning. Chunks of data that are similar in some way will tend to have embeddings that are closer together than unrelated data. [...] Embeddings are useful for search, clustering, recommendations, anomaly detection, classification, and more."
- URL: https://platform.openai.com/docs/concepts

**G5-12. Otras entradas del glosario oficial de Anthropic**
Todas en https://platform.claude.com/docs/en/about-claude/glossary (consulta 2026-10-18):
- **Temperatura:** "Temperature is a parameter that controls the randomness of a model's predictions during text generation. Higher temperatures lead to more creative and diverse outputs [...] Lower temperatures result in more conservative and deterministic outputs" y "Even with temperature set to 0, the results will not be fully deterministic and identical inputs may produce different outputs across API calls."
- **MCP:** "Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context to LLMs. Like a USB-C port for AI applications, MCP provides a unified way to connect AI models to different data sources and tools."
- **Latencia y TTFT:** "Latency [...] refers to the time it takes for the model to respond to a given prompt." y "Time to First Token (TTFT) is a performance metric that measures the time it takes for a language model to generate the first token of its output after receiving a prompt."
- **HHH:** "HHH (helpful, honest, harmless) is a research framework that informs how Claude is trained [...] An honest AI will give accurate information, and not hallucinate or confabulate."

**G5-13. Alucinación o confabulación**: ver G2-1 (NIST) y G2-2 (Anthropic).
**G5-14. Token y ventana de contexto**: ver G3-1, G3-2, G3-3 y G3-5.
**G5-15. LLM, preentrenamiento, RLHF y Transformer**: ver G1-1 a G1-8.

---

## G · Citas útiles (listas para usar)

- "LLMs are essentially autocomplete mechanisms that can automatically predict (complete) thousands of tokens." (Google MLCC)
- "Making language models bigger does not inherently make them better at following a user's intent." (Ouyang et al., 2022)
- "language models hallucinate because the training and evaluation procedures reward guessing over acknowledging uncertainty" (Kalai et al., OpenAI, 2025)
- "more context isn't automatically better. As token count grows, accuracy and recall degrade, a phenomenon known as context rot." (Anthropic)
- "It makes no difference whether the information comes from a static page or a chatbot." (Moffatt v. Air Canada, 2024)
- "there is nothing inherently improper about using a reliable artificial intelligence tool for assistance. But existing rules impose a gatekeeping role on attorneys to ensure the accuracy of their filings." (Mata v. Avianca, 2023)
- "el letrado es siempre responsable de revisar exhaustivamente todo el contenido de este y de cualquier escrito" (Tribunal Constitucional, 2024)
- "while these techniques significantly reduce hallucinations, they don't eliminate them entirely. Always validate critical information" (Anthropic)

---

---

## Anexo A. Fichas de fuente S1–S23 (usadas en D8, F1–F5, N1, N2)

| ID | Fuente | Organismo | Año de referencia | Publicación | Muestra/ámbito | Geografía |
|---|---|---|---|---|---|---|
| S1 | AI Index Report 2026 (cap. 4.3, datos de McKinsey State of AI 2025) | Stanford HAI | 2025 | 2026 (PDF revisado el 29-06-2026) | Encuesta McKinsey: 1.993 participantes, 105 países, 25-06 a 29-07-2025 | Global |
| S2 | AI Index Report 2025 | Stanford HAI | 2024 | 2025 | Recoge la encuesta McKinsey 2024 | Global |
| S3 | Where's the Value in AI? (nota de prensa) | BCG | 2024 | 24-10-2024 | 1.000 CxO y altos directivos, 59 países, más de 20 sectores | Global |
| S4 | The Widening AI Value Gap (Build for the Future 2025) | BCG | 2025 | 30-09-2025 (PDF de octubre de 2025) | n = 1.250 empresas | Global |
| S5 | AI at Work 2025: Momentum Builds, but Gaps Remain | BCG | 2025 | 26-06-2025 | más de 10.600 directivos, mandos y empleados de oficina, 11 países y regiones | Global |
| S6 | Work Trend Index 2024 | Microsoft y LinkedIn | 2024 | 08-05-2024 | 31.000 trabajadores del conocimiento, 31 mercados (España incluida), 15-02 a 28-03-2024 | Global (con España) |
| S7 | Work Trend Index 2025 | Microsoft | 2025 | 23-04-2025 | 31.000 trabajadores, 31 mercados (España incluida), 06-02 a 24-03-2025 | Global (con España) |
| S8 | Work Trend Index 2026 | Microsoft | 2026 | 05-05-2026 | 20.000 usuarios de IA, 10 mercados (sin España), 18-02 a 07-04-2026 | Global (sin España) |
| S9 | AI Data Drop: The 11-by-11 Tipping Point | Microsoft WorkLab | 2024 | 19-03-2024 | 1.300 usuarios de Microsoft 365 Copilot | Global |
| S10 | 2025 Global AI Jobs Barometer (nota de prensa) | PwC | 2024 | 03-06-2025 | cerca de mil millones de ofertas de empleo, 6 continentes | Global |
| S11 | 2026 Global AI Jobs Barometer (nota de prensa) | PwC | 2025 | 15-06-2026 | más de mil millones de ofertas, 27 países y territorios | Global |
| S12 | Future of Jobs Report 2025 | Foro Económico Mundial (WEF) | 2025–2030 (encuesta de finales de 2024) | enero de 2025 | más de 1.000 empleadores, más de 14 millones de trabajadores, 22 sectores, 55 economías (España incluida) | Global y España |
| S13 | Large Language Models, Small Labor Market Effects (WP 2025-56) | Humlum y Vestergaard, BFI Universidad de Chicago (también NBER WP 33777) | 2023–2024 | 09-05-2025 | 25.000 trabajadores, 7.000 centros de trabajo, 11 ocupaciones | Dinamarca |
| S14 | Formación para el Empleo en clave anual 2025 | FUNDAE | 2025 | junio de 2026 (PDF del 19-06-2026) | Registro administrativo: todas las empresas que comunican formación bonificada | España |
| S15 | Ley 30/2015, RD 694/2017, Ley 31/2022 (PGE 2023) | BOE | vigente | varias | Normativa | España |
| S16 | Supuestos prácticos de costes (Ley 30/2015) | FUNDAE | 2015 | septiembre de 2015 | Guía oficial | España |
| S17 | Reglamento (UE) 2024/1689 (AI Act), art. 3.56 y art. 4 | DOUE (copia BOE DOUE-L-2024-81079) | vigente | 12-07-2024 | Normativa | UE |
| S18 | AI Literacy – Questions & Answers | Comisión Europea | 2026 | última actualización 27-07-2026 | Guía oficial | UE |
| S19 | The Kirkpatrick Model | Kirkpatrick Partners | — | página vigente | Modelo de referencia | Global |
| S20 | ROI Methodology | ROI Institute (Phillips) | — | página vigente | Modelo de referencia | Global |
| S21 | AI Risk Management Framework (AI RMF 1.0, NIST AI 100-1) | NIST | — | 26-01-2023 | Marco voluntario | EE. UU. y uso global |
| S22 | The MOOC Pivot (Science 363:130-131) y cobertura de Inside Higher Ed | Reich y Ruipérez-Valiente (MIT) | 2012–2018 | 2019 | 5,63 millones de alumnos de edX (MIT y Harvard) | Global |
| S23 | Elements of AI | Universidad de Helsinki y MinnaLearn | — | página vigente | Curso gratuito | Global (con versión en España) |

URLs:
- S1: https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf (portada: https://hai.stanford.edu/ai-index/2026-ai-index-report)
- S2: https://hai.stanford.edu/ai-index/2025-ai-index-report
- S3: https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value
- S4: https://media-publications.bcg.com/The-Widening-AI-Value-Gap-October-2025.pdf (nota de prensa: https://www.bcg.com/press/30september2025-ai-leaders-outpace-laggards-revenue-growth-cost-savings)
- S5: https://www.bcg.com/publications/2025/ai-at-work-momentum-builds-but-gaps-remain
- S6: https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part
- S7: https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born
- S8: https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization
- S9: https://www.microsoft.com/en-us/worklab/ai-data-drop-the-11-by-11-tipping-point
- S10: https://www.aap.com.au/aapreleases/cision20250603ae00811/ (nota oficial de PwC distribuida por PR Newswire; la de pwc.com devuelve error 403)
- S11: https://www.aap.com.au/aapreleases/cision20260615ae78182/ (ídem; original: https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html, con error 403)
- S12: https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf
- S13: https://bfi.uchicago.edu/wp-content/uploads/2025/04/BFI_WP_2025-56-3.pdf
- S14: https://www.fundae.es/docs/default-source/publicaciones-y-evaluaciones/informes-y-balances/clave-anual-2025.pdf
- S15: Ley 30/2015 https://www.boe.es/buscar/act.php?id=BOE-A-2015-9734 · RD 694/2017 https://www.boe.es/buscar/act.php?id=BOE-A-2017-7769 · Ley 31/2022 https://www.boe.es/buscar/act.php?id=BOE-A-2022-22128
- S16: https://www.fundae.es/docs/default-source/empresas/documentos/supuestos-practicos_costes-2015.pdf
- S17: https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-81079
- S18: https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers
- S19: https://www.kirkpatrickpartners.com/the-kirkpatrick-model/
- S20: https://roiinstitute.net/roi-methodology/
- S21: https://www.nist.gov/itl/ai-risk-management-framework · https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- S22: https://tsl.mit.edu/research/the-mooc-pivot/ · https://www.insidehighered.com/node/7744
- S23: https://www.elementsofai.com/

### Notas para el redactor (coherencia de definiciones)
- **McKinsey (88 %)**: % de encuestados (sesgo hacia directivos y empresas grandes) que dicen que su organización usa IA en al menos una función. No es el % de empresas de un país.
- **Microsoft (75 % en 2024)**: % de trabajadores del conocimiento que usan IA generativa en el trabajo. Incluye España, pero no da el dato por país en la página.
- **BCG AI at Work (51 % de la primera línea)**: uso habitual, varias veces por semana, de empleados de oficina.
- **FUNDAE**: registro administrativo de toda la formación bonificada en España, de cualquier tema. No hay desglose de cursos de IA.
- **WEF**: expectativas de los empleadores para 2030, no datos observados.

---
## Resumen (10 líneas)

1. **España:** en 1T 2025, el 21,1 % de las empresas de 10 o más empleados usa IA (INE), 8,7 puntos más que un año antes. Con datos comparables de Eurostat, España tiene un 20,3 % frente al 20,0 % de la UE y es 13.ª de 27; Dinamarca lidera con un 42 %.
2. **Tamaño:** usa IA el 17,9 % de las pequeñas, el 30,8 % de las medianas y el 58,2 % de las grandes. En las microempresas, el uso pasó del 7,5 % al 13,4 %. Por sectores destacan TIC (60,6 %) y actividades profesionales (38,5 %); construcción se queda en el 11,4 %.
3. **Barrera n.º 1, la falta de conocimientos:** la señala el 81,3 % de las empresas que se plantearon la IA y no la usan (INE). Con Eurostat, España está en el 82,4 % frente al 70,3 % de la UE. Hay que contar siempre cuál es la base.
4. **Formación de la plantilla estancada:** solo 1 de cada 5 empresas da formación TIC a su personal (21,2 %) desde 2019. Las empresas gastan el 51,8 % de su crédito FUNDAE, y en las microempresas la cobertura es del 15,3 %.
5. **El AI Act cambió en julio de 2026 (Reglamento 2026/1744):** el art. 4 ya no exige un «nivel suficiente» de alfabetización, y el alto riesgo de RR. HH. (Anexo III) se aplaza al 2 de diciembre de 2027. La prohibición de inferir emociones en el trabajo sigue vigente desde el 2 de febrero de 2025.
6. **Valor y escala:** según BCG, solo el 5 % de las empresas obtiene valor a escala y el 60 % no obtiene ninguno material. Su regla 10-20-70 (70 % del esfuerzo en personas y procesos) es el mejor argumento para la formación.
7. **Formación y adopción:** con 5 horas o más de formación y parte presencial, el uso habitual es «sharply higher» (BCG). En Dinamarca, el impulso de la empresa eleva la adopción del 47 % al 83 %, pero el ahorro medido es del 2,8 % de las horas: el ROI no debe inflarse.
8. **Evidencia de productividad:** atención al cliente +14 % de media y +34 % en novatos (Brynjolfsson, QJE 2025); redacción −40 % de tiempo y +18 % de calidad (Noy & Zhang, Science 2023); consultoría +12,2 % de tareas, +25,1 % de velocidad y +32 % de calidad, pero −19 puntos fuera de la «frontera» (Dell'Acqua, Organization Science 2026).
9. **Alucinaciones:** OpenAI explica que se producen porque la evaluación premia adivinar. Las tasas van del 22 % al 94 % en preguntas de conocimiento y del 1,8 % al 5,4 % al resumir. Hay 2.199 casos judiciales en la base de Charlotin, 8 de ellos en España; el más reciente, del TSJ de Galicia (julio de 2026), con una multa de 1.800 €. Casos clave: Mata v. Avianca (5.000 USD) y Air Canada (812,02 CAD).
10. **Tokens y contexto:** un token equivale a unos 4 caracteres, o 0,75 palabras en inglés. En español hacían falta unas 1,55 veces más tokens (tokenizador de 2023). Las ventanas punteras son de 1M de tokens (Claude, GPT-6, Gemini 4), pero más contexto no es mejor («context rot», «Lost in the Middle»).
---

## No verificado (consolidado; no usar sin comprobar a mano)

**Adopción y estadísticas (N3, D8, N2)**
1. **INE, edición «Año 2025 – 1T 2026»:** no publicada a 18-10-2026. La anterior salió el 22-10-2025; hay que revisarlo a finales de octubre.
2. **Diferencia INE (21,14 %) frente a Eurostat (20,27 %) para España:** ningún organismo la explica. Probablemente se debe al ámbito sectorial (el INE excluye la CNAE 56) y a la ponderación.
3. **Caída del INE de 2022 (12,6 %) a 2023 (9,6 %):** Eurostat marca ruptura de serie, pero no hay nota del INE que la explique.
4. **INE 1T 2025, motivos de no uso por tamaño** (datos, incompatibilidad, ética, «no útil»): están en la tabla, pero no se extrajeron.
5. **ONTSI con datos de 2025:** no existe. Tampoco consta el año de la encuesta del «78 % de trabajadores pide formación».
6. **COTEC:** no hay datos de adopción de IA en empresas para 2025–2026.
7. **OCDE, «Generative AI and the SME Workforce»:** error 403. Las cifras que circulan (31 % de pymes, más de 5.000 pymes, 7 países, sin España) están sin verificar. La «media OCDE 12,7 %» solo está verificada como cita del ONTSI.
8. **Informe país España de la Década Digital 2025:** el PDF no se pudo leer. Se usó el de 2026, que sí está verificado.
9. **Eurostat, «lack of relevant expertise» en la UE en 2025:** 70,89 % en Statistics Explained (diciembre de 2025) frente a 70,3 % en el informe de 2026. Usad el 70,3 %.
10. **Cifras propias de McKinsey State of AI 2025 y 2026** (62 % experimentando con agentes, «nearly two-thirds» sin escalar, 39 % y 37 % con impacto en el EBIT, high performers al 6 %, rediseño de flujos de trabajo, marketing y ventas como la función con más IA generativa): mckinsey.com no responde. Solo se usan las cifras recogidas por el AI Index (88 % y 79 %). McKinsey «Superagency» (2025) tampoco se pudo consultar.
11. **AI Index 2026:** la IA generativa en organizaciones aparece como 70 % en los «highlights» y 79 % en el cuerpo. Usad el 79 %.
12. **Gartner, proyectos abandonados** (30 % de los de IA generativa tras la prueba de concepto antes de finales de 2025; más del 40 % de los de agentes cancelados antes de 2027): error 403, sin verificar.

**Formación (F1–F5, N1)**
13. **BCG AI at Work 2025:** no se pudo comprobar la lista de los 11 países (ni si incluye España) ni las tasas exactas de uso con y sin 5 horas de formación. Algunas frases solo se leyeron por WebFetch.
14. **Módulos FUNDAE (9 €, 13 € y 7,5 € por participante y hora):** proceden de la guía de 2015. No hay confirmación de que sigan vigentes en 2026, aunque tampoco se ha encontrado una orden que los cambie.
15. **Porcentajes del crédito FUNDAE en 2026:** proceden de los PGE de 2023 (Ley 31/2022). La prórroga en 2026 solo consta en fuentes secundarias.
16. **Precio de mercado de una formación en IA en España:** no hay ninguna fuente pública con metodología, solo tarifas de proveedores.
17. **Eurostat CVTS** (coste de la formación continua por participante): no se pudo leer y además es anterior a la IA generativa.
18. **PwC:** pwc.com da error 403. Las cifras salen de sus notas oficiales redistribuidas por PR Newswire. La edición de 2026 da un 57 % como dato de 2025, mientras que la de 2025 publicó un 56 %.
19. **Microsoft WTI 2026:** la página da dos fechas de campo distintas (7 o 20 de abril de 2026).

**Departamentos (D1–D7)**
20. **Paper GEO:** solo se verificó el abstract (hasta +40 %), no las tablas con los métodos (citas, estadísticas, fuentes) y sus porcentajes.
21. **Post de OpenAI con los 900 M de usuarios semanales (febrero de 2026):** error 403. Solo se verificó en TechCrunch. No hay cifra primaria de 2026; la última primaria es de 700 M en julio de 2025 (NBER).
22. **Gartner, mayo de 2026** (69 % de compradores B2B que validan con un comercial lo que dice la IA): Business Wire da 403. Las predicciones antiguas de Gartner sobre ventas B2B no se buscaron.
23. **Salesforce y HubSpot State of Marketing:** no consultados (no tienen metodología pública).
24. **Multa de 840 € del TSJ de Canarias:** solo aparece en prensa (Vozpópuli, julio de 2026). No está claro si coincide con alguna de las resoluciones del TSJ en Las Palmas que recoge Charlotin (420 € el 10-02-2026).
25. **Circular del CGAE (abril de 2026):** verificada solo en elderecho.com, no el texto íntegro. Tampoco la «suspensión de 15 días a un año» que circula en prensa.
26. **Klarna, marcha atrás de 2025:** Bloomberg es de pago. Verificado en Entrepreneur, que cita a Bloomberg.
27. **El «+40 % de calidad» de Dell'Acqua et al.:** no aparece en la versión publicada en 2026, que da +32 %. El working paper de 2023 (SSRN) no se pudo abrir.
28. **Estudios académicos, del BCE o del Banco de España específicos de IA en contabilidad o finanzas:** no encontrados.
29. **Estudios de Stanford sobre derecho:** la nota de HAI da «58–82 %» para chatbots generales y la versión actual de arXiv (Dahl et al.) «58–88 %». Para Westlaw, el abstract da 17–33 % y la nota de HAI más del 34 %. Citad cada cifra con su fuente.

**Conceptos (G1–G5)**
30. **Tabla de SimpleQA del blog de OpenAI** (gpt-5-thinking-mini: 52 % de abstención y 26 % de error; o4-mini: 75 % de error): solo en una fuente secundaria (Gigazine). openai.com da 403 y la tabla no está en el paper.
31. **Artículo de ayuda de OpenAI «What are tokens…» («100 tokens ≈ 75 words»):** error 403. Usad la regla de 0,75 palabras por token de platform.openai.com/docs/concepts.
32. **Importe exacto que devolvió Deloitte Australia** (más de 97.000 AUD según CFO Dive): sin fuente primaria.
33. **Artículos originales de Reuters (Bard y Amazon):** reuters.com bloquea el acceso. Se usaron una reproducción en The Irish Times y una copia de Wayback Machine.
34. **NIPS 2017 («Attention Is All You Need») y volumen de TACL de 2024 («Lost in the Middle»):** no constan en arXiv.
35. **Fecha exacta de publicación del AI Index 2025:** no aparece en la página.
36. **Prima de tokens del español con los tokenizadores de 2025–2026:** solo está verificado el ×1,55 de 2023.
37. **Ventana de 2M tokens en Gemini:** no aparece en la documentación vigente.
38. **Benchmark FACTS de Google DeepMind:** no consultado.
39. **Fecha de la decisión del Consejo de la OCDE que actualizó la definición de sistema de IA:** solo se verificó el artículo explicativo (29-11-2023) y la mención «updated in May 2024».

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
