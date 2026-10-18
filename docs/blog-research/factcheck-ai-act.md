# Fact-check: 10 artículos de AI Act y gobernanza

- **Fecha de revisión:** 18/10/2026.
- **Método:** se descargaron y leyeron enteras las fuentes primarias (EUR-Lex respondió con el texto completo de los Reglamentos 2024/1689 y 2026/1744, así que no hizo falta la copia del BOE). Las páginas de la Comisión, el BOE, el Congreso, la AEPD, la AESIA, el INE (también su API para la tabla 76387), el Garante, el CEPD y el OEIL se consultaron directamente. openai.com y help.openai.com devuelven 403 a la descarga, así que se leyeron con r.jina.ai. También se descargó el PDF del borrador de directrices de alto riesgo (anexo III, 148 págs.) para comprobar los ejemplos.
- **URL de `<Fuentes>` y enlaces del texto:** las 34 URL externas responden 200, salvo las dos de OpenAI (403 a robots; el contenido es el citado). Los 16 enlaces internos dan 200.
- **Resultado:** OK = coincide con la fuente · corregido = se cambió el texto · eliminado = se quitó la frase · no verificable = no se pudo comprobar en fuente primaria.
- **Páginas tras los cambios:** las 10 dan 200 en `http://localhost:3100/blog/<slug>`.

## Resumen

| Artículo | Afirmaciones revisadas | Corregidas | Eliminadas |
|---|---|---|---|
| alfabetizacion-ia-que-es | 25 | 3 | 0 |
| articulo-4-ai-act-pymes | 25 | 2 | 0 |
| digital-omnibus-ai-act-cambios | 34 | 9 | 0 |
| sanciones-ai-act-mitos-realidad | 30 | 7 | 0 |
| aesia-supervision-ia-espana | 28 | 4 | 0 |
| checklist-ai-act-empresas | 30 | 4 | 2 |
| evidencias-formacion-ia | 20 | 3 | 0 |
| ia-alto-riesgo-ejemplos | 27 | 4 | 0 |
| ai-act-vs-rgpd | 27 | 4 | 0 |
| calendario-ai-act-fechas | 30 | 5 | 0 |
| **Total** | **276** | **45** | **2** |

### Lo más grave
1. **AESIA y certificación (aesia-supervision-ia-espana):** el artículo decía que el estatuto de la AESIA «no le atribuye» certificar y que «la agencia no emite» distintivos. Es falso: el art. 10.1 d) del RD 729/2023 le encarga crear «un marco de certificación voluntario para entidades privadas», y su estatuto prevé una Subdirección de Certificación y un «sello de calidad». El error venía del paquete de datos (A5, mito 1). Se ha corregido: ese marco voluntario existe en el estatuto, pero no es una certificación de cumplimiento del AI Act ni del art. 4.
2. **Tabla «antes y después» del Ómnibus (digital-omnibus-ai-act-cambios):** tres filas describían mal el texto original del AI Act:
   - la documentación técnica simplificada para pymes ya existía (art. 11.1 original), así que no era «igual para todos»;
   - la evaluación de impacto ya tenía que «complementar» la EIPD, y el cuestionario modelo de la Oficina de IA ya estaba en el art. 27.5 original;
   - el art. 4 bis no es «solo para proveedores de alto riesgo»: su apartado 2 alcanza también a otros proveedores y a responsables del despliegue.
   Las dos últimas venían del paquete (A3, puntos 12 y 7).
3. **Máquinas y anexo I:** el Ómnibus (punto 41) pasa el Reglamento de máquinas a la sección B del anexo I, a la que solo se aplican los arts. 6.1, 60 bis y 102 a 112. Por eso no conviene poner las máquinas como ejemplo de la fecha del 2/8/2028. Corregido en el artículo del Ómnibus y en el calendario.
4. **RD 723/2026:** varios artículos decían que obliga a informar a «cada trabajador» desde el 5/10/2026, sin matiz. La disposición transitoria única limita esa obligación, para la plantilla contratada antes de esa fecha, a cuando la persona lo solicite. Se ha añadido el matiz en 5 artículos.
5. **Citas no literales:** «estará restringido» (AEPD) era en realidad «estará restringida». «adoptar medidas para apoyar la promoción», puesto entre comillas, no es el texto del artículo, que dice «adoptarán». «Concluido – (Caducado)» lleva guion corto en la ficha del Congreso. Todo corregido.

### Coherencia entre los 10 artículos
- **Fechas:**
  - anexo III el 2/12/2027 y anexo I el 2/8/2028;
  - Ómnibus publicado en el DOUE el 24/7/2026 y en vigor el 27/7/2026;
  - art. 4 aplicable desde el 2/2/2025, art. 50 desde el 2/8/2026 y nuevas prohibiciones desde el 2/12/2026;
  - el proyecto de ley caducó el 6/10/2026 y las elecciones son el 29/11/2026.

  Todas son coherentes en los 10 artículos y con el DOUE.
- **Art. 4:** todas las citas entre comillas coinciden ya con el texto literal del Reglamento 2026/1744.
- **AESIA:** en todos los artículos figura como punto de contacto, con la designación «pending final adoption», sin ley sancionadora. Coherente.
- **Garante italiano:** se ha unificado la forma de contarlo («retirada temporalmente de su web», «sentencia publicada el 18/3/2026», «estimó la oposición»). Antes, un artículo decía «recurso» y otro «oposición».
- **OEIL:** se ha unificado la URL (`oeil.secure…%28COD%29`). Las dos variantes funcionaban.

### Cumplimiento de LIMITES-LEGALES.md
- Los 10 artículos llevan el aviso «no es asesoramiento jurídico», y los de alto riesgo, RR. HH. o datos, «consulta con tu asesoría legal».
- El art. 4 nunca se liga a los 35 M€: solo aparece para desmentir ese mito.
- No aparecen «abogado», «certificado oficial», «homologado», «cumplimiento garantizado», «sello» ni FUNDAE. «Acreditado» solo sale en negativo («no exige formador acreditado»).
- Se ha matizado una frase que decía «la alfabetización sigue siendo obligatoria» (digital-omnibus).
- El tldr de multas decía «las multas van de 7,5 a 35 millones», lo que podía leerse como un mínimo. Ahora dice «importes máximos» (anti-alarmismo).
- Las plantillas se presentan como orientativas, para adaptar y revisar con la asesoría. El Pack Art. 4 aparece como «formación y documentación operativa» y nunca como certificación.
- Precio «desde 2.900 € + IVA por empresa»: coincide con `src/lib/site.ts` y con /ai-act («IVA no incluido»).

---

## 1. alfabetizacion-ia-que-es

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Art. 4 aplicable desde el 2/2/2025 | 2024/1689 art. 113 a) | OK | — |
| Cita literal del art. 3.56 | 2024/1689 art. 3.56 | OK | — |
| El Ómnibus «solo modifica, dentro del art. 3, los puntos sobre pymes y small mid-caps» | 2026/1744 punto 4 | corregido | También sustituye el punto 14 (componente de seguridad). Ahora: «la definición de componente de seguridad y añade las de pyme y pequeña empresa de mediana capitalización» |
| Cita literal del art. 4.1 vigente | 2026/1744 punto 5 | OK | — |
| DOUE del 24/7/2026 y nueva redacción desde el 27/7/2026 | 2026/1744, encabezado y art. 4 | OK | — |
| Obliga a proveedores y responsables del despliegue | 2026/1744 art. 4.1 | OK | — |
| Definición de responsable del despliegue (art. 3.4) | 2024/1689 art. 3.4 | OK | — |
| Q&A de la Comisión «actualizado el 27/7/2026» | F03 («Last update 27 July 2026») | OK | — |
| Contratista, proveedor de servicios o cliente | F03 | OK | — |
| Se aplica fuera de la UE si el sistema se usa en la Unión o afecta a personas en ella | F03 | OK | — |
| Ejemplo de ChatGPT (anuncios, traducción, alucinaciones) | F03 | OK | — |
| Diferenciar niveles por perfil | F03 | OK | — |
| Cuatro pasos de contenido mínimo (a–d) | F03 | OK | — |
| «normalmente» alfabetizados los perfiles técnicos | F03 «Normally yes» | OK | — |
| Art. 26.2: «la competencia, la formación y la autoridad necesarias» | 2024/1689 art. 26.2 | OK | — |
| «There is no need for a certificate» y registro interno | F03 | OK | — |
| «does not entail an obligation to measure…» | F03 | OK | — |
| «No specific governance structure is mandated» | F03 | OK | — |
| «No strict requirements or mandatory trainings are imposed» | F03 | OK | — |
| Redacción original: «garantizar que, en la mayor medida posible» y «un nivel suficiente» | 2024/1689 art. 4 | OK | — |
| El repositorio no da presunción de cumplimiento | F04, F03 | OK | — |
| 21,1 % de empresas de 10 o más empleados usan IA (1T 2025) | INE, nota del 22/10/2025 | OK | — |
| 81,3 % alega falta de conocimientos | INE, tabla 76387 (API: 81,29) | corregido | Faltaba la base «de 10 o más empleados» en la etiqueta. «El principal freno» pasa a «el motivo más citado por las empresas que se han planteado usar IA y no la usan». «Nadie en casa sabe lo suficiente» pasa a «faltan conocimientos especializados en la empresa» |
| «la mayoría de los errores con IA… no son técnicos» | Sin fuente | corregido | Ahora dice «muchos de los errores» |
| Cita del considerando 8 («debe ser una prioridad estratégica…») | 2026/1744 cdo. 8 | OK | — |

## 2. articulo-4-ai-act-pymes

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Sin umbral de plantilla ni facturación en el art. 4 | 2026/1744 art. 4 | OK | — |
| Nuevo art. 4.2 (apoyo a pymes y ejemplos prácticos), aún en futuro según la Comisión | 2026/1744 punto 5; F03 | OK | — |
| Existe el repositorio de prácticas | F04 | OK | — |
| No exige formador acreditado ni formación externa | 2026/1744 art. 4; F03 | OK | — |
| Ómnibus: documentación técnica simplificada y gestión de la calidad proporcionada para pymes | 2024/1689 arts. 11.1, 17.2 y 63.1; 2026/1744 puntos 10, 11 y 26 | corregido | La documentación simplificada para pymes ya existía. El Ómnibus la extiende a las *small mid-caps* y pasa la gestión de la calidad simplificada de las microempresas a todas las pymes |
| Art. 3.4 (cita literal) | 2024/1689 | OK | — |
| Cita de la Q&A «Yes, they should be informed…» | F03 | OK | — |
| Definición de pyme (menos de 250 personas, hasta 50 M€ de volumen de negocio o 43 M€ de balance) | Rec. 2003/361/CE, art. 2 del anexo | OK | — |
| El Ómnibus incorpora la pyme y crea la *small mid-cap* | 2026/1744 punto 4 | OK | — |
| Barras: 13,4 / 17,9 / 30,8 / 58,2 % | INE: nota de prensa (micro) y API de la tabla 76387 | OK | — |
| Sobre empresas con conexión a internet; es el último dato disponible | INE, nota (1) de la tabla; la nota de 2026 no está publicada (404) | OK | — |
| «adoptar medidas para apoyar la promoción» entre comillas | 2026/1744 art. 4.1 («adoptarán…») | corregido | Comillas solo en «para apoyar la promoción» |
| Tabla de redacción original y vigente | 2024/1689 y 2026/1744 art. 4 | OK | — |
| Art. 4.3: recomendaciones del Consejo de IA | 2026/1744 punto 5 | OK | — |
| Considerando 8: «una carga relativa al cumplimiento adicional, en particular para las pequeñas empresas» | 2026/1744 cdo. 8 | OK | — |
| «remains an obligation for providers and deployers» | F03 (fragmento literal) | OK | — |
| Cita «There is no need for a certificate… internal record…» | F03 | OK | — |
| Cita «simply relying on… might be ineffective» | F03 | OK | — |
| Art. 50 desde el 2/8/2026 (ultrasuplantaciones) | 2024/1689 art. 113; F08 | OK | — |
| Selección de personal en el anexo III 4 a) | 2024/1689 anexo III | OK | — |
| Art. 26.2 desde el 2/12/2027 | 2026/1744 punto 40 | OK | — |
| El art. 4 no está en la lista del art. 99 | 2024/1689 art. 99; 2026/1744 punto 38 | OK | — |
| No consta ley española que tipifique infracciones | F14, F16 | OK | — |
| Pack Art. 4 desde 2.900 € + IVA por empresa, con revisión anual | src/lib/site.ts; /ai-act | OK | — |
| Formación para toda la plantilla, sin conocimientos previos | src/lib/formaciones.ts | OK | — |

## 3. digital-omnibus-ai-act-cambios

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Reglamento 2026/1744 de 8/7/2026, firmado en Estrasburgo | 2026/1744, encabezado y final | OK | — |
| DOUE del 24/7/2026; vigor a los tres días, el 27/7/2026 | 2026/1744 art. 4 | OK | — |
| Modifica 2024/1689, 2018/1139 (aviación civil) y 2023/1230 (máquinas) | 2026/1744, título | OK | — |
| Propuesta del 19/11/2025 y acuerdo político del 7/5/2026 | F09 | OK | — |
| Parlamento el 16/6/2026 y Consejo el 29/6/2026 | 2026/1744, nota 4 | OK | — |
| La Q&A dice «mid-July 2026» y F09 dice el 27/7/2026 | F03; F09 | OK | — |
| Directamente aplicable, sin transposición | Reglamento UE | OK | — |
| Otro Ómnibus 2025/0360(COD), «Awaiting committee decision», propuesto el 19/11/2025, modifica el 2016/679 | OEIL | OK | — |
| Título «Simplification of the digital legislative framework – Digital Omnibus (Omnibus VII)» | OEIL | OK | — |
| Small mid-cap: art. 3.14 ter y Rec. (UE) 2025/1099 | 2026/1744 punto 4 | OK | — |
| Importe menor para *small mid-caps* en los apartados 4 y 5 (art. 99.6 bis) | 2026/1744 punto 38 | OK | — |
| Considerando 40 (motivo del retraso) | 2026/1744 cdo. 40 | OK | — |
| Anexo III del 2/8/2026 al 2/12/2027; anexo I del 2/8/2027 al 2/8/2028 | 2024/1689 art. 113; 2026/1744 punto 40 | OK | — |
| Desde el 2/8/2026, art. 50 y aplicación coercitiva de lo ya vigente | F08 | OK | — |
| «adoptar medidas para apoyar la promoción» entre comillas (2 veces) | 2026/1744 art. 4.1 | corregido | Comillas solo en «para apoyar la promoción» |
| Ejemplo del anexo I: «Fabricantes de máquinas…» | 2026/1744 puntos 2 a) y 41 | corregido | Las máquinas pasan a la sección B. Ahora: «productos sanitarios, juguetes, ascensores…», con la nota |
| Ocho prohibiciones desde el 2/2/2025 y dos nuevas desde el 2/12/2026 | 2024/1689 art. 5.1 a)–h); 2026/1744 puntos 7 y 40 | OK | — |
| Art. 50.2: transición hasta el 2/12/2026 para sistemas ya en el mercado | 2026/1744 punto 39 (art. 111.4) | OK | — |
| Documentación y calidad: antes «igual para todos los proveedores» | 2024/1689 arts. 11.1, 17.2 y 63.1 | corregido | Antes: documentación simplificada para pymes y gestión de la calidad simplificada para microempresas. Después: se extiende a *small mid-caps* y a todas las pymes |
| Art. 4 bis «solo para proveedores de alto riesgo» | 2026/1744 punto 6 (art. 4 bis.2) | corregido | «sobre todo» a proveedores de alto riesgo y, de forma excepcional, a otros proveedores y responsables del despliegue |
| FAQ: datos sensibles «en sistemas de alto riesgo» | 2026/1744 punto 6 | corregido | Ahora: «de forma excepcional… (nuevo art. 4 bis)» |
| Art. 10.5 suprimido | 2026/1744 punto 9 b) | OK | — |
| Evaluación de impacto: antes «sin remisión expresa a la EIPD» | 2024/1689 arts. 27.4 y 27.5 | corregido | Ya «complementará» la EIPD y ya había cuestionario modelo. Después: referencias cruzadas e inclusión de partes de la EIPD |
| Oficina de IA: competencia exclusiva y multas coercitivas de hasta el 5 % de los ingresos diarios medios | 2026/1744 puntos 31 y 32 | corregido (matiz) | Antes podía supervisar sin exclusividad (art. 75.1 original). Se añaden las «multas sancionadoras» |
| Sandbox: antes el 2/8/2026, ahora el 2/8/2027 | 2024/1689 art. 57.1; 2026/1744 punto 22 | OK | — |
| No cambian el art. 99.3, el art. 26 ni la fecha del art. 50 | 2026/1744 (lista completa de puntos) | OK | — |
| Art. 3.56 sin cambios | 2026/1744 punto 4 | OK | — |
| Art. 2.7: «no afectará» al RGPD, salvo los arts. 4 bis y 59 | 2026/1744 punto 2 b) | OK | — |
| «la alfabetización sigue siendo obligatoria» | LIMITES-LEGALES | corregido | «la obligación de adoptar medidas de alfabetización sigue» |
| «AI literacy remains an obligation for providers and deployers» | F03 (fragmento literal) | OK | — |
| La propuesta inicial trasladaba la obligación a los Estados y a la Comisión | F03 | OK | — |
| Fechas del Service Desk | F08 | OK | — |
| F09 actualizada el 3/8/2026 | F09 | OK | — |
| URL del OEIL | OEIL | corregido (formato) | Unificada con `oeil.secure…%28COD%29` |

## 4. sanciones-ai-act-mitos-realidad

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| tldr: «Las multas van de 7,5 a 35 millones» | 2024/1689 art. 99 | corregido | Son topes: «Los importes máximos… (o un porcentaje de la facturación)» |
| Art. 99.3: 35 M€ o 7 %, prácticas prohibidas | 2024/1689 art. 99.3 | OK | — |
| Art. 99.4: 15 M€ o 3 % (arts. 16, 22, 23, 24, 26, 31, 33, 34 y 50) | 2024/1689 art. 99.4 | OK | — |
| Art. 99.4 d bis): art. 25.2 y 25.4 | 2026/1744 punto 38 | OK | — |
| Mito 2: «solo ha añadido el art. 25» | 2026/1744 punto 38 | corregido | «el art. 25, apartados 2 y 4» |
| Art. 99.5: 7,5 M€ o 1 % | 2024/1689 | OK | — |
| Art. 101: 15 M€ o 3 %, impuesta por la Comisión | 2024/1689 art. 101 | OK | — |
| FAQ: «el resto las fijan los Estados» | 2026/1744 punto 32 | corregido | Se añade que la Oficina de IA también puede multar en los sistemas que supervisa en exclusiva. La FAQ se acorta a 80 palabras |
| Emociones en el trabajo prohibidas desde el 2/2/2025, salvo motivos médicos o de seguridad | 2024/1689 art. 5.1 f) | OK | — |
| Pymes: el importe menor (art. 99.6) | 2024/1689 | OK | — |
| Art. 99.6 bis para *small mid-caps* (apartados 4 y 5) desde el 27/7/2026 | 2026/1744 | OK | — |
| Art. 99.7: criterios, incluida la letra g) «medidas técnicas y organizativas aplicadas» | 2024/1689 | OK | — |
| Art. 99.1: «advertencias o medidas no pecuniarias» | 2026/1744 punto 38 | OK | — |
| Anexo III y art. 26 desde el 2/12/2027 | 2026/1744 punto 40 | OK | — |
| Sanción del art. 4 a cargo de cada Estado, con enfoque proporcionado | F03 | OK | — |
| Cita «the enforcement of the AI Act follows a proportionate approach» | F03 | OK | — |
| Ley 40/2015: rango de ley | Ley 40/2015 arts. 25.1 y 27.1 | corregido (matiz) | La tipificación está en el 27.1. Ahora cita los dos artículos, también en `<Fuentes>` |
| «pending final adoption» | F10 | OK | — |
| Gobierno el 26/5/2026; presentado el 28/5/2026; caducado el 6/10/2026 | F13; F14 | OK | — |
| Cita «Concluido – (Caducado)» | F14 («Concluido - (Caducado)») | corregido | Guion corto, como en el original |
| Garante: 15 M€ por el RGPD, «de diciembre de 2024» | F27 (resolución n.º 755, de 2/11/2024, anunciada el 20/12/2024) | corregido | Se añade el número y la fecha. «retiró» pasa a «retiró temporalmente» |
| Sentencia 4153/2026, publicada el 18/3/2026, estimó la oposición | F27 | OK | — |
| Cita «doesn't create criminal offences or a right to compensation» | F03 | OK | — |
| Plazo del 2/8/2025 para designar autoridades y sanciones | F08; 2024/1689 art. 113 b) | OK | — |
| RD 806/2026: elecciones el 29/11/2026; constitución de las Cámaras el 23/12/2026 | F16 arts. 2 y 5 | OK | — |
| BOCG del 12/6/2026: muy graves hasta 35 M€/7 % y 15 M€/3 %; graves 7,5 M€/1 %; leves 500.000 €/0,5 % (art. 30) | F15 | OK | — |
| Infracciones de los responsables del despliegue: arts. 21 (26 y 50) y 28 (26.10) | F15 | corregido (matiz) | Son las «específicas». Se añaden las de cualquier operador (arts. 16 y 23) |
| El proyecto no tipificaba el art. 4 | F15 (sin mención en el articulado) | OK | — |
| Reparto de autoridades: AESIA «principalmente», AEPD, CGPJ y sectoriales | F13 | OK | — |
| Cita «proof of an incident due to lack of appropriate training…» | F03 | OK | — |

## 5. aesia-supervision-ia-espana

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| RD 729/2023, de 22 de agosto; BOE n.º 210 del 2/9/2023; en vigor el 3/9/2023 | F11 | OK | — |
| Creada por la DA 7.ª de la Ley 28/2022 | F11 art. 1 del RD | OK | — |
| Sede en el edificio La Terraza, cedido por el Ayuntamiento (art. 2) | F11 | OK | — |
| Sede temporal en la Rúa de Veeduría, 2; info@aesia.gob.es | F12 | OK | — |
| «personalidad jurídica propia» | F11 art. 1.2 («personalidad jurídica pública») | corregido | «pública» |
| Entidad de los arts. 108 bis a 108 sexies de la Ley 40/2015 | F11 art. 1.1 | OK | — |
| Adscrita a través de la Secretaría de Estado de Digitalización e IA | F11 | OK | — |
| Cita del art. 4.1 y salvedad de Sanidad, la AEMPS y la Inspección de Trabajo | F11 | OK | — |
| FAQ: «Su estatuto no le atribuye esa función [certificar]… la agencia no lo emite» | F11 art. 10.1 d) y art. 26 | corregido | El estatuto prevé «un marco de certificación voluntario» y un «sello de calidad». Ahora se explica que eso no es certificar el cumplimiento del AI Act |
| «su estatuto no le atribuye certificar cumplimientos ni homologar formaciones» | F11 | corregido | Se mantiene lo de no homologar formaciones (no aparece en el estatuto) y se añade el marco de certificación voluntario (art. 10.1 d) |
| La conformidad del alto riesgo la evalúan proveedores u organismos notificados (art. 43) | 2024/1689 art. 43 | OK | Se añade en «Lo que no hace» que el marco voluntario es otra cosa |
| 16 guías: 01–02 introductorias, 03–15 técnicas, 16 manual; compendio en zip | F12 | OK | — |
| Cita «no tienen carácter vinculante ni sustituyen ni desarrollan…» | F12 | OK | — |
| Elaboradas «en el marco del desarrollo del piloto español de sandbox regulatorio de IA» | F12 | OK | — |
| «una vez se apruebe el Ómnibus digital» | F12 | OK | — |
| Índice de las 16 guías | F12 | OK | — |
| Lista de la Comisión del 7/9/2026, con asterisco y «national designation decision is still pending final adoption» | F10 | OK | — |
| Plazo del 2/8/2025 y posible procedimiento de infracción | F10 | OK | — |
| Reparto previsto en el proyecto (nota del 26/5/2026) | F13 | OK | — |
| Cita del Ministerio sobre la Ley 40/2015 | F13 | OK | — |
| Cita «Concluido – (Caducado)» | F14 | corregido | Guion corto |
| Elecciones el 29/11/2026 | F16 | OK | — |
| Art. 4 desde el 2/2/2025 y art. 50 desde el 2/8/2026 | 2024/1689 art. 113 | OK | — |
| «There is no need for a certificate» | F03 | OK | — |
| No consta obligación de comunicar a la AESIA el uso de ChatGPT | 2024/1689 (no hay tal obligación para usuarios de uso general) | OK | — |
| Stats: 2023, 16 guías, «Pendiente» | F11, F12, F10 | OK | — |
| Título de la nota del Ministerio | F13 | OK | — |
| La AEPD sigue siendo la autoridad de protección de datos | F13 | OK | — |

## 6. checklist-ai-act-empresas

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Art. 3.4 (cita «bajo su propia autoridad») | 2024/1689 | OK | — |
| Ejemplo de ChatGPT de la Q&A (27/7/2026) | F03 | OK | — |
| «Muchas checklists que se publican están pensadas para quien fabrica IA» | Sin fuente | eliminado | Sustituida por «Esta checklist está pensada para quien usa IA, no para quien la fabrica» |
| Art. 25.1: marca, modificación sustancial o cambio de finalidad | 2024/1689 art. 25.1 | OK | — |
| «What AI is used in our organisation?» | F03 | OK | — |
| La AEPD prohíbe sistemas fuera del inventario (enero de 2026) | F23 | OK | — |
| «Pocas checklists de las que se encuentran en Google incluyen el inventario…» | Sin fuente | eliminado | Ahora: «Aquí tienes un formato de inventario que puedes copiar» |
| Prohibiciones desde el 2/2/2025; emociones (art. 5.1 f) | 2024/1689 | OK | — |
| Dos prohibiciones nuevas desde el 2/12/2026 | 2026/1744 | OK | — |
| Directrices de prácticas prohibidas del 4/2/2025 | F05 | OK | — |
| «Los usos que más aparecen en empresas son…» | Sin fuente | corregido | «Los ámbitos que con más probabilidad tocan a una empresa usuaria» |
| Anexo III 4, 5 b) (excluido el fraude) y 5 c) | 2024/1689 anexo III | OK | — |
| Filtro del art. 6.3 y excepción por elaboración de perfiles | 2024/1689 art. 6.3 | OK | — |
| Ocho ámbitos del anexo III | 2024/1689 | OK | — |
| Art. 4 desde el 2/2/2025 y art. 50 desde el 2/8/2026 | F08 | OK | — |
| Art. 50.4 (ultrasuplantaciones, obras artísticas, textos de interés público con excepción editorial) y 50.3 | F33; 2024/1689 art. 50 | OK | — |
| Art. 50.1 es obligación del proveedor | 2024/1689 art. 50.1 | OK | — |
| Cita del art. 4.1 vigente | 2026/1744 | OK | — |
| Obligaciones del art. 26 (26.1, 26.2, 26.4, 26.5, 26.6 con 6 meses, 26.7 y 26.11) | 2024/1689 art. 26 | OK | — |
| Art. 26 desde el 2/12/2027 o el 2/8/2028 | 2026/1744 punto 40 | OK | — |
| FAQ: alcance de la evaluación del art. 27 | 2024/1689 art. 27.1 | corregido (matiz) | Se aclara que es para «ciertos usuarios de sistemas de alto riesgo» y se cambia «remitirse» por «incluir referencias cruzadas» (art. 27.4 nuevo) |
| Cuerpo: «solo la hacen organismos públicos…» | 2024/1689 art. 27.1 | corregido (matiz) | «entre quienes usan sistemas de alto riesgo» |
| RD 723/2026 en vigor el 5/10/2026; art. 3.2.k | F25 | corregido | Se añade la disposición transitoria: a la plantilla anterior, cuando lo solicite (cuerpo y FAQ) |
| Guía de la AEPD del 7/10/2026: inventariar los sistemas, incluidos los de terceros | F24 | OK | — |
| Directrices de alto riesgo en borrador (19/5/2026; actualizada el 23/7/2026) | F07 | OK | — |
| Caducidad del proyecto el 6/10/2026 | F14 | OK | — |
| 16 guías de la AESIA no vinculantes | F12 | OK | — |
| «There is no need for a certificate»; sin estructura de gobierno | F03 | OK | — |
| Test de 3 minutos | src/app/test-ai-act | OK | — |
| Pack Art. 4 como «formación y documentación operativa» | LIMITES-LEGALES; /ai-act | OK | — |

## 7. evidencias-formacion-ia

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Cita «There is no need for a certificate… guiding initiatives» | F03 | OK | — |
| Q&A actualizada el 27/7/2026 | F03 | OK | — |
| Cita del art. 4.1 («adoptarán…», «no exige…», «un nivel específico…») | 2026/1744 | OK | — |
| «does not entail an obligation to measure…» | F03 | OK | — |
| Sin «AI officer» ni comité | F03 | OK | — |
| «no strict requirements or mandatory trainings are imposed» | F03 | OK | — |
| Enfoque proporcionado y caso por caso | F03 | OK | — |
| Diferenciar niveles y cuatro pasos de contenido mínimo | F03 | OK | — |
| «demás personas que se encarguen en su nombre»: contratistas, proveedores de servicios y clientes | 2026/1744; F03 | OK | — |
| Perfiles técnicos «normalmente» alfabetizados | F03 | OK | — |
| «trainings and/or other guiding initiatives» | F03 | OK | — |
| AEPD: «usuarios formados y autorizados» y capacitación continua (enero de 2026) | F23 | OK | — |
| AEPD: cita «estará restringido a las personas…» | F22 | corregido | El original dice «La utilización de sistema IAG estará restringida…». Corregido el género |
| Política de la AEPD del 27/11/2025 | F22 («VERSIÓN: 27 DE NOVIEMBRE DE 2025») | OK | — |
| El repositorio no da presunción de cumplimiento | F04 | OK | — |
| Art. 26.2 (cita) y continuidad tras el Ómnibus | 2024/1689; F03 | OK | — |
| Anexo III desde el 2/12/2027 | 2026/1744 | OK | — |
| RD 723/2026 desde el 5/10/2026 | F25 | corregido | Se añade el matiz de la disposición transitoria |
| Conservar prueba de la transmisión o recepción | F25 art. 6.2; F24 | corregido (atribución) | Se atribuye al art. 6.2 del RD, «como recuerda» la guía de la AEPD |
| Registrar las discrepancias con la recomendación automática | F24 | OK | — |

## 8. ia-alto-riesgo-ejemplos

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Dos vías (art. 6.1 y 6.2) | 2024/1689 art. 6 | corregido (matiz) | Se añade que el propio sistema puede ser el producto del anexo I |
| Ocho ámbitos del anexo III | F18; 2024/1689 | OK | — |
| Fechas del 2/12/2027 y el 2/8/2028 | 2026/1744 punto 40 | OK | — |
| Emociones en el trabajo prohibidas desde el 2/2/2025 | 2024/1689 art. 5.1 f) | OK | — |
| 5 b) excluye la detección de fraude | 2024/1689 anexo III | OK | — |
| 1 a) excluye la verificación biométrica | 2024/1689 anexo III | OK | — |
| Contenido de los ocho ámbitos de la tabla (incluidas las exclusiones de 7 d y 8 b) | 2024/1689 anexo III | OK | — |
| «El ámbito con más casos en empresas de cualquier sector» | Sin fuente | corregido | «El ámbito que pueden tocar empresas de cualquier sector» |
| Art. 6.5: directrices antes del 2/2/2026; solo hay borrador del 19/5/2026 (actualizado el 23/7/2026) | 2024/1689 art. 6.5; F07 | OK | — |
| Ejemplo de «top 5 candidates» como input principal | F07, anexo III (PDF) | OK | — |
| Búsqueda de candidatos en redes y bolsas de empleo con listas cortas | F07 | OK | — |
| Planificador de turnos y paga variable (4 b) | F07 | OK | — |
| Agendar entrevistas: exento (6.3) | F07 | OK | — |
| Extraer datos de CV a una base de datos: exento | F07 | OK | — |
| Auditar sesgos con datos anonimizados: exento | F07 | OK | — |
| Asistente de *onboarding* fuera del 4 a), salvo que afecte a condiciones o evaluaciones | F07 | OK | — |
| Condiciones del filtro del art. 6.3 y documentación (art. 6.4) | 2024/1689 | OK | — |
| Cita «siempre se considerarán de alto riesgo…» | 2024/1689 art. 6.3 | OK | — |
| Cita de la AEPD «La presencia formal de una persona…» | F24 | OK | — |
| «El caso más claro publicado en España…» | Sin fuente | corregido | «Un caso real publicado en España…, dictada con base en el RGPD» |
| AI-00009-2026: herramienta no implantada, puntuación y priorización en selección y movilidad interna | F24 | OK | — |
| Información a la representación, decisión humana, sin atributos sensibles; no es sanción | F24 | OK | — |
| Proxies de atributos sensibles; las auditorías no acreditan por sí solas | F24 | OK | — |
| RD 723/2026 desde el 5/10/2026 | F25 | corregido | Se añade el matiz de la disposición transitoria |
| Art. 113 c) nuevo y considerando 40 | 2026/1744 | OK | — |
| Lista del art. 26 (registros de 6 meses, 26.7 y 26.11) | 2024/1689 | OK | — |
| Art. 25.1 (pasar a ser proveedor) | 2024/1689 | OK | — |

## 9. ai-act-vs-rgpd

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| Cita del nuevo art. 2.7 | 2026/1744 punto 2 b) | OK | — |
| El Reglamento 2026/1744 modifica el AI Act y dos reglamentos sectoriales | 2026/1744, título | OK | — |
| Ómnibus de datos 2025/0360(COD), «Awaiting committee decision» | OEIL | OK | — |
| AESIA como punto de contacto, con la designación pendiente | F10 | OK | — |
| El proyecto caducó el 6/10/2026 | F14 | OK | — |
| Garante: «la impuso en diciembre de 2024… estimó el recurso» | F27 | corregido | «la anunció en diciembre de 2024», «retiró temporalmente» y «estimó la oposición»; sentencia «publicada» el 18/3/2026 |
| Inferencias, puntuaciones y perfiles como datos personales | F24 | OK | — |
| EIPD (art. 35) | RGPD | OK | — |
| Evaluación del art. 27 para ciertos usos de alto riesgo | 2024/1689 | OK | — |
| Art. 22 del RGPD | RGPD art. 22.1 | OK | — |
| Art. 26.2 | 2024/1689 | OK | — |
| Art. 4 desde el 2/2/2025 y art. 50 desde el 2/8/2026 | 2024/1689 art. 113 | OK | — |
| RGPD: hasta 20 M€ o el 4 % (art. 83.5) | RGPD art. 83.5 | OK | — |
| «puede remitirse a su EIPD (art. 27.4)» | 2024/1689 y 2026/1744 art. 27.4 | corregido (matiz) | Ya debía complementarla. Tras el Ómnibus admite referencias cruzadas o incorporar sus partes |
| Art. 26.9: usar la información del proveedor para la EIPD | 2024/1689 art. 26.9 | OK | — |
| Art. 4 bis «a los proveedores de alto riesgo» | 2026/1744 punto 6 | corregido (matiz) | «sobre todo a los proveedores de alto riesgo» |
| No todo algoritmo entra en el art. 22 | F24 | OK | — |
| Dictamen 28/2024 del CEPD (18/12/2024): anonimato, interés legítimo y datos tratados de forma ilícita | F19 (página y PDF) | OK | — |
| OpenAI Free, Plus y Pro pueden entrenar salvo que se desactive | F36 (vía r.jina.ai) | OK | — |
| Planes de empresa: no entrenan por defecto | F35 («Updated: January 8, 2026») | OK | — |
| Q&A: ejemplo de ChatGPT y alucinaciones | F03 | OK | — |
| AI-00009: evaluar riesgos, EIPD si procede, intervención humana efectiva | F24 | OK | — |
| Consentimiento en el ámbito laboral «rara vez» es base segura | F24 | OK | — |
| RD 723/2026 desde el 5/10/2026; art. 3.2.k | F25 | corregido | Se añade el matiz de la disposición transitoria |
| La obligación laboral «no desplaza» el RGPD ni la LO 3/2018 | F24 | OK | — |
| Tabla de tres planos (RD 3.2.k, 6 y 7; ET 64.4.d; RGPD 12 a 15 y 22) | F24 | OK | — |
| URL del OEIL | OEIL | OK | — |

## 10. calendario-ai-act-fechas

| Afirmación | Fuente | Resultado | Cambio |
|---|---|---|---|
| DOUE el 12/7/2024; en vigor el 1/8/2024 | 2024/1689 art. 113; F08 | OK | — |
| «se aplica por fases hasta el 2 de agosto de 2028» | F08; 2024/1689 art. 111 | corregido | Hay plazos hasta 2030. Ahora: «sus hitos principales se completan el 2/8/2028, con algunos plazos residuales hasta 2030» |
| FAQ y Stats: «despliegue completo» el 2/8/2028 | F08 («full roll-out of the main application milestones») | corregido | «de los hitos principales» |
| 2/2/2025: capítulos I y II (definiciones, art. 4 y prohibiciones) | 2024/1689 art. 113 a); F08 | OK | — |
| Directrices del 4/2/2025 y del 6/2/2025 | F05; F06 | OK | — |
| 2/8/2025: modelos de uso general y gobernanza; autoridades y sanciones | F08 | OK | — |
| 27/7/2026: Ómnibus en vigor | 2026/1744 art. 4; F09 | OK | — |
| 2/8/2026: fecha general, art. 50 y supervisión | 2024/1689 art. 113; F08 | OK | — |
| Cita «The national market surveillance authorities will start supervising…» | F03 | OK | — |
| La Q&A da el 2 y el 3/8/2026 y dice «mid-July» | F03 | OK | — |
| 2/12/2026: prohibiciones nuevas y art. 50.2 | 2026/1744 puntos 39 y 40; F08 | OK | — |
| 2/8/2027: sandbox nacional y modelos de uso general anteriores al 2/8/2025 | 2026/1744 punto 22; 2024/1689 art. 111.3 | OK | — |
| 2/12/2027: anexo III (antes el 2/8/2026) | 2026/1744 punto 40 | OK | — |
| 2/8/2028: anexo I (antes el 2/8/2027), «como máquinas…» | 2026/1744 puntos 40 y 41 | corregido | «juguetes, ascensores o productos sanitarios», con nota sobre las máquinas |
| 2/8/2030: alto riesgo de autoridades públicas | 2026/1744 punto 39 (art. 111.2) | OK | — |
| 31/12/2030: anexo X | 2024/1689 art. 111.1 | OK | — |
| Considerando 40 (cita) | 2026/1744 | OK | — |
| Art. 113 c) nuevo | 2026/1744 | OK | — |
| 5/10/2026: RD 723/2026 | F25 | corregido | Se añade el matiz de la disposición transitoria |
| 6/10/2026: caducidad del proyecto | F14 | OK | — |
| 7/10/2026: guía de la AEPD | F24 | OK | — |
| 29/11/2026: elecciones (RD 806/2026, BOE n.º 248 del 6/10/2026) | F16 | OK | — |
| Potestad sancionadora con rango de ley | F17; F13 | OK | — |
| Directrices de alto riesgo en borrador (19/5/2026) | F07 | OK | — |
| «es lo que más empresas tienen pendiente» | Sin fuente | corregido | «es lo que afecta a más empresas» |
| El art. 4 no exige certificado ni horas | F03 | OK | — |
| Tras el Ómnibus no hay que garantizar un nivel concreto | 2026/1744 art. 4.1 | OK | — |
| Pack Art. 4 con revisión anual | /ai-act | OK | — |
| Test de 3 minutos | /test-ai-act | OK | — |
| Fechas de la tabla resumen | Fuentes anteriores | OK | — |

---

## Errores del paquete de datos que conviene corregir en `datos-ai-act-gobernanza.md`
No se ha tocado el paquete (fuera del encargo), pero tiene tres errores que pueden volver a colarse en otros artículos:
- **A5, mito 1:** «Su estatuto no prevé esa función». Falso: el art. 10.1 d) del RD 729/2023 prevé un marco de certificación voluntario.
- **A3, punto 12:** la remisión a la EIPD y el cuestionario modelo ya estaban en los arts. 27.4 y 27.5 originales. El Ómnibus solo añade las referencias cruzadas y la inclusión de partes de la EIPD.
- **A3, punto 7:** el art. 4 bis.2 también permite el tratamiento, de forma excepcional, a otros proveedores y a responsables del despliegue.

Faltan además dos matices en el paquete:
- **A9 y A6:** la disposición transitoria única del RD 723/2026 (para la plantilla ya contratada, la información se da cuando se solicita).
- **A3:** el traslado de las máquinas a la sección B del anexo I (punto 41).
