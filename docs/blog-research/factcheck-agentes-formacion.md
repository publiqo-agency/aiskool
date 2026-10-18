# Fact-check: 10 artículos de agentes y formación (18/10/2026)

Alcance: n8n-vs-make-vs-zapier, automatizar-procesos-con-ia, cuanto-cuesta-agente-ia, precio-formacion-ia-empresas, roi-formacion-ia, elegir-empresa-formacion-ia, formacion-ia-in-company-vs-online, plan-formacion-ia-empleados, que-formacion-ia-necesita-empresa y como-implantar-ia-empresa.

Método: cada afirmación verificable se contrastó con la fuente primaria enlazada (WebFetch o curl con descarga del PDF o CSV oficial). Cuando la fuente bloquea el acceso automático, se indica y se usa como respaldo el paquete `datos-*.md`. Las afirmaciones sobre nosotros se compararon con `src/lib/site.ts`, `src/lib/formaciones.ts` y las páginas `/precios`, `/presupuesto`, `/consultoria`, `/metodologia`, `/diagnostico`, `/nosotros` y `/recursos`. Tras editar, las 10 URL `http://localhost:3100/blog/<slug>` devuelven 200.

## Estado de las URL de `<Fuentes>` y enlaces externos (46 URL únicas)

- **Responden 200 (o 202):** todas, salvo las cuatro siguientes.
- **403 por bloqueo antibots, no por enlace roto:** `bcg.com/publications/2025/ai-at-work…` (el contenido sí se leyó con WebFetch), `make.com/en/pricing` (Cloudflare, ver abajo), `make.com/en/success-stories/customer-fonds-finanz` (el contenido sí se leyó con WebFetch) y `science.org/doi/10.1126/science.adh2586` (el abstract se verificó en Europe PMC).
- `hbs.edu/…item.aspx?num=64700` devuelve 202 con curl y 403 con WebFetch. El abstract y la publicación (Organization Science, marzo de 2026, 758 participantes) se verificaron en Crossref (DOI 10.1287/orsc.2025.21838).
- `zapier.com/customer-stories` devuelve 404 con WebFetch y 200 con curl. El caso de Autotorino se verificó en el HTML.

Ninguna URL se ha cambiado.

---

## 1. n8n-vs-make-vs-zapier

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| n8n Starter 20 €/mes (anual), 2.500 ejecuciones · Pro 50 €, 10.000 · Business 667 €, 40.000, solo autoalojado | n8n.io/pricing | OK | — |
| Ejecución = «a single run of your entire workflow», da igual el número de pasos | n8n.io/pricing | OK | — |
| Datos de la nube de n8n en Frankfurt (cita literal) | n8n.io/pricing | OK | — |
| Community Edition gratuita y autoalojable en GitHub | n8n.io/pricing, GitHub | OK | — |
| Licencia fair-code (Sustainable Use License): uso interno o no comercial | GitHub README y LICENSE.md | OK | — |
| 2.367 integraciones en el directorio de n8n | n8n.io/integrations | OK | — |
| Make Free con 1.000 credits/mes | make.com/en/pricing (WebFetch) | OK | — |
| Make Core 9 USD, Pro 16 USD y Teams 29 USD/mes (anual); 0,90 USD por 1.000 credits | make.com/en/pricing | No verificable en vivo (Cloudflare bloquea la página; los precios se cargan por JS). Coincide con el paquete (HTML oficial del 18/10) | Se mantiene |
| Make, «más de 3.500 apps» | make.com/en/pricing | Corregido: hoy la página dice «3,000+ native apps» (el paquete ya avisaba de que la cifra cambia según la sección) | Tabla: «Más de 3.000 apps nativas» |
| 1 operación = 1 credit en módulos sin IA; con la IA de Make, según tokens | help.make.com/credits.md | OK | — |
| Zonas EU1/EU2; la mayor parte de la IA nativa se queda en la UE; algunas funciones van a EE. UU. o Reino Unido; la conexión propia elimina la garantía | help.make.com/ai-providers-and-data-zones-in-make.md (creada el 31/08/2026) | OK | — |
| Zapier Free: 100 tasks, Zaps de 2 pasos | zapier.com/pricing | OK | — |
| Zapier Professional 19,99 USD (anual), 750 tasks · Team 69 USD, 2.000 tasks | zapier.com/pricing | OK | — |
| Zapier, tramo de 20.000 tasks: 189 USD (anual) / 283,50 USD (mensual) | zapier.com/pricing | OK | — |
| No cuentan como task las acciones fallidas ni el polling; una llamada MCP consume 2 tasks | zapier.com/pricing | OK (Zapier lo presenta como ejemplo orientativo) | — |
| Más de 9.000 apps | zapier.com/pricing | OK | — |
| «Zapier stores data on AWS in the United States»; no entrena con el contenido; Enterprise excluido automáticamente y los demás planes, con un formulario | zapier.com/security-compliance | OK | — |
| Ejemplo: 15.000 tasks (3 acciones × 5.000) → tramo de 20.000 | Cálculo | OK, marcado como cálculo propio | El H3 pasa a «Ejemplo calculado (ilustrativo)» |
| Make: unos 20.000 credits → unos 18 USD (0,90 × 20) | Cálculo | OK, con el supuesto de escala lineal explicitado | — |
| GPT-6 Luna a 0,10/0,50 USD por millón; 5.000 correos de 1.500 tokens ≈ 1,25 USD | developers.openai.com/api/docs/pricing | Corregido: los precios están bien, pero con solo 1.500 tokens de entrada salen 0,75 USD. El 1,25 USD exige unos 200 tokens de salida por correo, y no se decía | Se añade «y 200 de salida (7,5 millones y 1 millón de tokens)» |
| Delivery Hero: 200 h/mes con un solo flujo de TI | n8n.io/case-studies/delivery-hero | OK | — |
| Autotorino: 109 Zaps y 2.394 h devueltas al equipo de CRM en 2025 | zapier.com/customer-stories | OK | — |
| Fonds Finanz: 10.000 h de back-office en un año | Caso de Make (02/04/2024) | OK | — |
| n8n GmbH (Berlín); Make (Celonis, Praga) | Paquete §9.1 | OK (según el paquete) | — |
| Callout legal y sin FUNDAE ni promesas | LIMITES-LEGALES | OK | — |

## 2. automatizar-procesos-con-ia

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| INE: el 21,1 % de las empresas de 10 o más empleados usa IA (1T 2025) | Nota de prensa del INE, 22/10/2025 | OK | — |
| 33,4 % «automatizar flujos de trabajo» (tldr) | CSV del INE 76387, E.1.G = 33,41 | Corregido: la categoría del INE es «automatización de flujos de trabajo **o ayuda en la toma de decisiones**», y es una tecnología, no una finalidad | tldr: «la usa para automatizar flujos de trabajo o ayudar en la toma de decisiones» |
| Stat de 33,4 % «… o ayudar en decisiones» | INE E.1.G | OK | — |
| 29,8 % para procesos de administración o gestión | INE E.2.C = 29,75 | OK | — |
| Anthropic: flujos frente a agentes; cita «we recommend finding the simplest solution possible…» | anthropic.com/engineering/building-effective-agents | OK | — |
| OpenAI: tres criterios; «a deterministic solution may suffice»; supervisión en acciones «sensitive, irreversible, or have high stakes» | PDF de OpenAI (texto extraído) | OK | — |
| n8n Pro: 50 €/mes (anual), 10.000 ejecuciones | n8n.io/pricing | OK | — |
| Haiku 5.5 a 0,10/0,50 USD (hasta 100.000 tokens); Sonnet 5.5 a 2/10 USD | platform.claude.com/…/pricing | OK | — |
| Cálculo: 4 M de entrada y 0,6 M de salida → 0,70 USD (Haiku) y 14 USD (Sonnet) | Aritmética | OK, marcado como «cálculo propio de ejemplo» | — |
| Qonto: «3X less time to create client invoices», con confirmación del cliente | claude.com/customers/qonto | OK | — |
| Delivery Hero, 200 h/mes | n8n | OK | — |
| ILUNION: unos 40 s por expediente y más de 7.000 h al año | news.microsoft.com (01/07/2025) | OK (URL 200; dato del paquete §12) | — |
| Nosotros: prototipo en 2–4 semanas «con datos reales» | /consultoria: «Prototipo en 2–4 semanas: funcionando con datos reales (o anonimizados)» | Corregido (faltaba el matiz) | FAQ: «con datos reales (o anonimizados)» |
| Nosotros: piloto con métrica, prototipo y formación para mantenerlo | /consultoria | OK | — |
| Diagnóstico gratuito de 30 minutos | /diagnostico | OK | — |
| Callout legal con «consulta con tu asesoría legal» | LIMITES-LEGALES | OK | — |

## 3. cuanto-cuesta-agente-ia

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Entrada de 0,10 a 10 USD por millón de tokens | Páginas de OpenAI, Anthropic y Google | OK | — |
| GPT-6 Astra 10/50 · 6.1 Sol 2/10 · Luna 0,10/0,50; contexto corto hasta 272.000 tokens | developers.openai.com | OK | — |
| Caché de OpenAI: 1,00 USD (Astra) y 0,01 USD (Luna) | developers.openai.com | OK | — |
| OpenAI cobra un 10 % más con residencia de datos | developers.openai.com («10% uplift», en los modelos desde el 05/03/2026) | OK | — |
| Fable 5.1 10/50 · Opus 5.5 4/20 · Sonnet 5.5 2/10 · Haiku 5.5 0,10/0,50 (hasta 100.000 tokens) | platform.claude.com | OK | — |
| Anthropic: multiplicador de 1,1 en la inferencia solo en EE. UU.; lotes con un 50 % de descuento | platform.claude.com | OK | — |
| Gemini 4 Argon 2/10 → 4/20 desde el 01/12/2026; 3.8 Flash 0,75/3,75 → 1,50/7,50 desde el 01/01/2027; Flash-Lite 0,30/2,50; lotes al 50 % | ai.google.dev (act. 16/10/2026) | Precios OK. **Corregido:** el artículo decía que Google llama «promocionales» a estos precios, y la página no lo dice; solo publica las fechas | «Google publica en su página que los precios de Gemini ya tienen fecha de subida…» y «el precio que regirá a partir de esas fechas» |
| Lotes al 50 % en los tres proveedores | Las tres páginas (OpenAI: Astra 5 frente a 10) | OK | — |
| Las APIs no incluyen el IVA español | Ninguna página habla del IVA | Matizado (no se puede afirmar lo que la fuente no dice) | «ninguno publica el IVA español» |
| Copilot Studio: 173,30 €/mes por 25.000 créditos, para todo el inquilino | microsoft.com/es-es/…/copilot-studio | OK (la página no aclara si lleva IVA; el artículo no lo afirma) | — |
| Créditos: respuesta generativa 2, acción 5, grounding en el inquilino 10 | learn.microsoft.com (act. 15/10/2026) | OK | — |
| Claude Enterprise: 20 USD por puesto y mes + uso a tarifa de API | claude.com/pricing | OK | — |
| Ejemplo: 5 M + 1 M de tokens → 20 USD (Sonnet) y 1 USD (Luna); 240 y 12 USD al año; 600 € de n8n; 108 h; «menos de 1.000 € al año» | Aritmética | OK, marcado como ilustrativo y con las horas como supuesto | — |
| OpenAI: «a deterministic solution may suffice»; supervisión humana | PDF de OpenAI | OK | — |
| GPTs → plugins de ChatGPT | Paquete §0 | OK | — |
| Nosotros: piloto con métrica, prototipo en 2–4 semanas con datos reales o anonimizados, producción y traspaso o mantenimiento | /consultoria | OK | — |
| Sin horquillas de precio de desarrollo inventadas | Paquete §11.4 | OK | — |

## 4. precio-formacion-ia-empresas

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Alfabetización: desde 99 €/persona; 6 h online o 2 sesiones de 3 h; tres formatos | formaciones.ts, site.ts | OK | — |
| Taller in-company: desde 1.500 €, 4 h, hasta 20 personas, presencial u online en directo | site.ts (prices) | OK | — |
| Herramientas: 4–8 h, 1.500 €/grupo · Dirección: 4 h, 2.400 €/sesión · Departamentos: 8–12 h, 2.900 €/grupo · Agentes: 12–16 h, 3.900 € · Pack Art. 4: 2.900 €/empresa · Programa: 4.900 €, 4–6 semanas | formaciones.ts, site.ts | OK | — |
| tldr: «van desde 99 € por persona … hasta talleres desde 1.500 € + IVA» | site.ts | Corregido: el «+ IVA» solo acompañaba a una cifra, y «hasta» daba a entender que 1.500 € es el máximo (el catálogo llega a 4.900 €) | «parten de 99 € + IVA por persona…, y los talleres in-company, de 1.500 € + IVA…» |
| Coste por persona y hora: 16,50 €, 18,75 € y 37,50 € | Aritmética | OK | Se marca «cálculo ilustrativo… (sin IVA)» |
| Propuesta «en 48 horas» | /presupuesto: «48 horas laborables» | Corregido para coincidir con la web | «48 horas laborables» |
| Taller en 1–2 semanas; programa a medida con 2–4 semanas de diseño | site.ts (faqs) | OK | — |
| BCG: uso «sharply higher» con al menos 5 h y formación presencial; 1/3 dice haber recibido formación adecuada | BCG AI at Work 2025 (26/06/2025) | OK (la cita completa añade «and coaching») | — |
| MOOC: 3,13 % en 2017-18 y 46 % de los verificados | Inside Higher Ed | OK | — |
| Comisión: «There is no need for a certificate» y registro interno | Q&A de la Comisión (27/07/2026) | OK | — |
| Elements of AI (Universidad de Helsinki y MinnaLearn) | elementsofai.com | OK | — |
| Precios siempre con «+ IVA» o «sin IVA»; sin FUNDAE; IVA de la formación sin dar por hecho | LIMITES-LEGALES | OK | — |

## 5. roi-formacion-ia

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Phillips: nivel 5; «ROI compares the monetary benefits…»; BCR y ROI (%); «Isolate the amount of improvement…»; técnicas de aislamiento | roiinstitute.net | OK | — |
| Kirkpatrick: cuatro niveles; «it is critical to start with Level 4: Results» | kirkpatrickpartners.com | OK | — |
| Dell'Acqua: +12,2 % de tareas, +25,1 % de velocidad, 19 % menos de aciertos fuera de la frontera; 758 consultores; Organization Science, 2026 | Crossref (abstract y fecha), paquete §0.2 | OK | — |
| Dell'Acqua: +32 % de calidad | Cuerpo del PDF de 2026 (paquete §0.2) | OK según el paquete. Hoy el PDF de HBS se descarga vacío, así que no se pudo releer | — |
| Brynjolfsson: +14 %, +34 % en novatos, más retención; QJE 2025 | nber.org/papers/w31161 | OK | — |
| Noy y Zhang: −40 % de tiempo y +18 % de calidad | Europe PMC | OK | — |
| Humlum y Vestergaard: 25.000 trabajadores y 11 ocupaciones; ahorro del 2,8 %; adopción del 47 % al 83 %; el 80 % reasigna el tiempo; sin efecto en salarios ni horas | PDF del BFI | OK | — |
| BCG: más del 60 % de las empresas más avanzadas mide el valor, frente al 17 % de las estancadas | PDF de BCG, oct. 2025 | OK | — |
| Microsoft: 1.300 usuarios de Copilot; 11 minutos y 11 semanas; encuesta de percepción | Microsoft WorkLab | OK | — |
| Ejemplo: 2.400 €, 3.900 €, 400 h, 12.000 €, 6.000 €, ROI del 54 % (53,8) y del 208 % (207,7); 1,25 % de 40 h | Aritmética | OK, marcado como «ilustrativo» y «no un resultado garantizado» | — |
| Taller in-company desde 1.500 € + IVA | site.ts | OK | — |
| Nosotros: evaluación final; 4–6 semanas de seguimiento con métricas de uso | site.ts (methodology), /metodologia | OK | — |

## 6. elegir-empresa-formacion-ia

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| BCG: 1/3 bien formado; «sharply higher» con 5 h y formación presencial | BCG 2025 | OK | — |
| Microsoft WTI 2026: control de calidad (50 %) y pensamiento crítico (46 %); 10 mercados, sin España | Página de WTI 2026 | OK | — |
| El art. 4 tiene en cuenta los conocimientos, la experiencia y el contexto de uso | EUR-Lex 2026/1744 | OK | — |
| Comisión: diferenciar niveles; ejemplo de ChatGPT y alucinaciones; «internal record of trainings…»; «no strict requirements or mandatory trainings»; el repositorio no da presunción de cumplimiento; los perfiles técnicos están alfabetizados «normalmente» | Q&A de la Comisión | OK | — |
| Cita del art. 4 «adoptar medidas para apoyar la promoción de la alfabetización» | EUR-Lex: «adoptarán medidas para apoyar la promoción de la alfabetización en materia de IA» | Corregido (cita no literal: «adoptar» frente a «adoptarán») | adoptar «medidas para apoyar la promoción de la alfabetización en materia de IA» |
| Los 35 M€ son el tope del art. 5 (art. 99.3); el art. 4 no figura en el art. 99 | EUR-Lex 2024/1689 (art. 99.3 comprobado), paquete A4 | OK | — |
| Proyecto de ley 121/000096 caducado el 06/10/2026 | congreso.es | OK | — |
| Dinamarca: ahorro del 2,8 % | PDF del BFI | OK | — |
| BCG: 60 % frente a 17 % | PDF de BCG | OK | — |
| Nosotros: «Equipo técnico y de negocio que trabaja con IA en proyectos reales» | /nosotros | OK | — |
| Nosotros: «No usamos formadores genéricos de catálogo» | Ni la web ni src/lib lo dicen | Corregido (no verificable) | «No trabajamos con ejemplos genéricos: usamos tareas reales de cada puesto» (como /metodologia) |
| Nosotros: diagnóstico con entrevistas y encuesta corta; 70 % de práctica; datos ficticios o anonimizados; registro, evaluación y certificado de aprovechamiento propio; 4–6 semanas de seguimiento; precios «desde» sin IVA; diagnóstico de 30 minutos gratuito | site.ts, /metodologia, /diagnostico, /precios | OK | — |
| Plantilla de política «orientativa» en /recursos, revisada con la asesoría | /recursos, LIMITES-LEGALES | OK | — |

## 7. formacion-ia-in-company-vs-online

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| BCG: «sharply higher» con 5 h y formación presencial; menciona el coaching | BCG («in-person training and coaching») | OK | — |
| MOOC: 3,13 % y 46 % de los verificados (2017-18) | Inside Higher Ed | OK | — |
| Dinamarca: del 47 % al 83 %; formación «particularly effective» | PDF del BFI («firm-provided training programs are particularly effective, boosting overall adoption») | OK | — |
| Nosotros: talleres in-company de hasta 20 personas | site.ts («4 h · hasta 20 personas») | OK | — |
| Nosotros: in-company presencial en toda España, online en directo y curso online a tu ritmo (/cursos) | site.ts, formaciones.ts, /cursos | OK | — |
| Comisión: «simply relying on… might be ineffective»; «internal record of trainings»; perfiles técnicos «normalmente» | Q&A de la Comisión | OK | — |
| Art. 4: «Desde el 27 de julio de 2026, el art. 4 obliga a «adoptar…»» | EUR-Lex | Corregido: daba a entender que la obligación nació ese día (se aplica desde el 02/02/2025; lo que cambió fue la redacción), y la cita no era literal | «En su redacción vigente desde el 27 de julio de 2026, el art. 4 obliga a adoptar «medidas para…»» |
| Elements of AI | elementsofai.com | OK | — |

## 8. plan-formacion-ia-empleados

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| WTI 2024: 31.000 trabajadores de 31 mercados (España incluida); el 39 % recibió formación; el 78 % usa sus propias herramientas (BYOAI), el 80 % en pymes | Microsoft WTI 2024 | OK | — |
| WEF: el 39 % de las habilidades clave cambiará de aquí a 2030; España, el 37 % | PDF del WEF (figura por países) | OK | — |
| Art. 4 vigente desde el 27/07/2026; sin garantizar «un nivel específico» | EUR-Lex | OK | — |
| Art. 4: «Desde el 27 de julio de 2026, el art. 4 obliga… a «adoptar…»» | EUR-Lex | Corregido (fecha de la obligación y cita no literal, como en el artículo 7) | «En su redacción vigente desde el 27 de julio de 2026… a adoptar «medidas para…»» |
| Comisión: «There is no need for a certificate…»; «does not entail an obligation to measure…» | Q&A de la Comisión | OK | — |
| Alto riesgo del anexo III desde el 02/12/2027 | Paquete A3 (Reglamento 2026/1744) | OK | — |
| Ley 30/2015, art. 9.6: permiso de 20 horas | BOE (texto consolidado) | Corregido: la paráfrasis omitía que deben ser acciones de formación profesional para el empleo y la vía de la negociación colectiva, y la cita estaba truncada («…de formación» en lugar de «…de formación profesional para el empleo») | Se completan la condición y la cita literal |
| Kirkpatrick: empezar por el nivel 4 | kirkpatrickpartners.com | OK | — |
| Dinamarca, 2,8 %; Microsoft, 11 semanas y 1.300 usuarios, autodeclarado | BFI, WorkLab | OK | — |
| Horas de la plantilla (6 h de base, 4 h ejecutiva, 8–12 h por departamento) «de nuestras formaciones» | formaciones.ts | OK | — |
| Nosotros: diagnóstico, itinerario por perfiles, presencial u online, 4–6 semanas de seguimiento con métricas y registro | site.ts (methodology) | OK | — |
| Checklist del art. 4 en /recursos | /recursos | OK | — |
| Plantilla «orientativa: adáptala y revísala con tu asesoría»; sin FUNDAE ni crédito de formación | LIMITES-LEGALES | OK | — |

## 9. que-formacion-ia-necesita-empresa

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| INE: 21,1 %; 51,6 % compra IA lista para usar; 81,3 % alega falta de conocimientos, sobre el 11,5 % que se lo planteó | Nota y CSV del INE (E.3.D 51,58; E.5.B 81,29; E.4 11,48) | OK, con la base bien explicada | — |
| BCG: más de 3/4 de directivos y mandos la usan varias veces por semana; la primera línea, estancada en el 51 % | BCG 2025 | OK | — |
| «Formar solo a dirección deja fuera a la mitad que más tareas repetitivas tiene» | Sin fuente | Corregido (lo de «más tareas repetitivas» no se puede verificar) | «… deja fuera a los equipos de primera línea, donde el uso habitual se ha estancado» |
| Tabla del catálogo (niveles, duraciones y precios «desde» + IVA de las 15 formaciones) | formaciones.ts | OK (todas las cifras coinciden) | — |
| Pack Art. 4 desde 2.900 € + IVA: inventario, política, formación y registro | site.ts | OK | — |
| Programa por departamento desde 4.900 € + IVA, 4–6 semanas, con seguimiento | site.ts | OK | — |
| Taller de 1–2 semanas; programa con 2–4 semanas de diseño | site.ts (faqs) | OK | — |
| Comisión: ejemplo de ChatGPT; perfiles técnicos «normalmente»; contenido mínimo a)–d); «no need for a certificate»; «no strict requirements…» | Q&A de la Comisión | OK | — |
| Brynjolfsson: 5.179 agentes, +14 % y +34 % | NBER | OK | — |
| RR. HH. de alto riesgo desde el 02/12/2027 | Paquete A3 | OK | — |
| Cita del art. 4 («adoptar medidas…») | EUR-Lex | Corregido (cita literal) | adoptar «medidas para…» |
| Propuesta en 48 horas laborables | /presupuesto | OK | — |

## 10. como-implantar-ia-empresa

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Barras del INE: 81,3 · 53,6 · 52,9 · 48,3 · 47,9 · 34,1 · 24,1 · 14,2, sobre el 11,5 % | CSV del INE (E.5.A–H, E.4) | OK (redondeo correcto) | — |
| BCG: 1.250 empresas; 5 % con valor a escala; 60 % sin valor material; cita 10-20-70 literal; 60 % frente a 17 % | PDF de BCG | OK | — |
| AEPD: no usar sistemas fuera del inventario; revisar y validar manualmente | PDF de la AEPD (enero de 2026) | OK | — |
| Dell'Acqua: 758 consultores, +12,2 %, +25,1 %, +32 %, −19 puntos | Crossref y paquete | OK | — |
| Tabla de priorización (sumas 10, 10, 10, 9, 7) | Aritmética | OK, marcada como «orientativa» | — |
| Plan de 90 días (13 semanas; piloto en las semanas 5–12) | Coherencia interna | OK; se presenta como posibilidad («puede»), no como promesa | — |
| Dinamarca, 2,8 % | BFI | OK | — |
| WTI 2025: 24 % con despliegue en toda la organización; 12 % en piloto | Microsoft WTI 2025 | OK | — |
| Art. 4: «desde el 27 de julio de 2026… deben «adoptar…»» | EUR-Lex | Corregido (fecha de la obligación y cita literal) | «… adoptar «medidas para…» de su personal, según la redacción del Reglamento (UE) 2026/1744, vigente desde el 27 de julio de 2026; la obligación se aplica desde el 2 de febrero de 2025» |
| Art. 50.1: obligación del proveedor de informar de que se interactúa con una IA; aplicable desde el 02/08/2026 | EUR-Lex 2024/1689 (art. 50.1 comprobado) y paquete A3 (el Ómnibus mantiene la fecha) | OK | — |
| Cribado de CV de alto riesgo desde el 02/12/2027 | Paquete A3 | OK | — |
| Nosotros: base común, talleres, 4–6 semanas de seguimiento; consultoría con prototipo en 2–4 semanas | site.ts, /consultoria | OK | — |

---

## Coherencia entre los 10 artículos

- **Precios nuestros:** los mismos importes y duraciones en precio-formacion, que-formacion, roi y plan, todos con «+ IVA» o «sin IVA». La única discrepancia era el plazo de la propuesta: «48 horas» en precio-formacion frente a «48 horas laborables» en que-formacion y en /presupuesto. Unificado.
- **Art. 4:** cinco artículos lo citaban como «adoptar medidas para…». Se unifica la cita literal y, donde hacía falta, se aclara que lo vigente desde el 27/07/2026 es la redacción (la obligación existe desde el 02/02/2025).
- **BCG de las 5 horas, Dinamarca (2,8 %, 47→83 %), MOOC (3,13 % y 46 %), Dell'Acqua (+32 %) y n8n Pro (50 €):** cifras idénticas en todos los artículos. No queda ningún +40 % de Dell'Acqua ni ninguna cifra de Gartner o McKinsey.
- **Prototipo en 2–4 semanas:** coherente en automatizar, cuanto-cuesta y como-implantar (ahora con «o anonimizados» donde faltaba).
- **Grupo de hasta 20:** siempre asociado al taller in-company, como en site.ts.

## Cumplimiento legal (LIMITES-LEGALES.md)

- Ningún artículo menciona FUNDAE, bonificaciones, «gratis», «certificado oficial» como algo nuestro, «homologado», «acreditado» ni «cumplimiento garantizado». Esos términos solo aparecen como señales de alarma que se desmienten.
- Todos los precios nuestros llevan «+ IVA» o «sin IVA». El tldr de precio-formacion, que dejaba una cifra sin «+ IVA», está corregido.
- Ninguno liga el art. 4 a las multas de 35 M€; elegir-empresa lo desmiente con el art. 99.3.
- Los 10 llevan el Callout legal. Los que tratan RR. HH. o datos personales añaden «consulta con tu asesoría legal».
- No se prometen resultados: los ejemplos de ROI y de costes están marcados como ilustrativos y con sus supuestos.

## Pendiente (no verificable hoy)

- Precios de pago de Make (Core 9, Pro 16 y Teams 29 USD; 0,90 USD por 1.000 credits): Cloudflare bloquea make.com y el selector de precios se carga por JavaScript. Coinciden con el paquete; conviene abrirlo en un navegador antes de publicar.
- +32 % de calidad de Dell'Acqua (cuerpo del PDF de 2026): el abstract y la publicación están verificados en Crossref, pero el PDF de HBS se descarga vacío hoy.
