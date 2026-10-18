# Pendientes

## FUNDAE: estudiar cómo ofrecer formación bonificada

Por ahora la web **no menciona FUNDAE**. La mayoría de competidores la usa como argumento de venta, así que hay que decidir cómo ofrecerla.

Opciones:

1. **Trabajar con una entidad organizadora ya inscrita (partner).**
   - Nosotros impartimos y ella tramita la bonificación.
   - Es la vía más rápida.
2. **Inscribirnos como entidad de formación.**
   - Se hace mediante declaración responsable en el registro estatal o autonómico.
   - Después hay que cumplir lo que exige cada curso bonificado:
     - comunicar el inicio al menos 2 días naturales antes;
     - controlar la asistencia (mínimo 75 %);
     - hacer la evaluación;
     - comunicar el final;
     - conservar la documentación.

Antes de decidir, comprobar en fundae.es:

- Los **módulos económicos máximos por hora y participante** (presencial y teleformación). Limitan cuánto recupera el cliente. Según lo investigado, en una formación in-company suele recuperar bastante menos del 100 %.
- La **cofinanciación privada** obligatoria a partir de 10 trabajadores.
- Si nuestras formaciones encajan como **formación programada por las empresas** y qué duración mínima exigen.

Prácticas prohibidas que nunca debemos ofrecer:

- Formación «gratis» devolviendo la cofinanciación al cliente.
- Regalos a cambio de usar el crédito de formación.
- Facturar horas que no se han impartido.

Cuando se decida, añadir en la web:

- Bloque «Bonificable con FUNDAE» en la home, en `/precios` y en cada formación.
- Una calculadora honesta del crédito disponible.
- Una página `/fundae`.
- Artículos del blog: «formación IA bonificada FUNDAE», «cuánto recupera tu empresa».

## Contenido pendiente del cliente

- **Nombre de marca definitivo.** Ahora es «Alfabeta» y se cambia en `src/lib/site.ts`. El repo se llama `aiskool`: ¿será este el nombre?
- **Razón social, CIF, domicilio y teléfono**, para el aviso legal y la privacidad.
- **Cifras reales** de la tarjeta del hero: profesionales formados, empresas y valoración (`stats` en `src/lib/site.ts`).
- **Testimonios reales** (`testimonials` en `src/lib/site.ts`). Si está vacío, la sección no se muestra.
- **Equipo:** nombres, cargos, fotos y LinkedIn. Las fotos van en `public/team`.
- **Precios definitivos.** Los precios «desde» de `src/lib/site.ts` son provisionales.
- **Autorización de los clientes** para mostrar sus logos.
- **Revisión externa** del copy sobre el AI Act y de las páginas legales por una asesoría (en el equipo no hay abogados). La redacción del art. 4 tras el Digital Omnibus ya está verificada en EUR-Lex y aplicada. Reglas del copy en `docs/LIMITES-LEGALES.md`.
- **IVA de las formaciones:** confirmar con la gestoría si los talleres en directo pueden ir exentos (art. 20.Uno.9º LIVA, consulta DGT V5202-26) y si el curso online grabado va al 21 %. Hasta entonces, precios «+ IVA» y sin anunciar exención.

## Configuración pendiente

- `RESEND_API_KEY`, `RESEND_FROM` (con el dominio verificado en Resend) y `LEADS_TO_EMAIL`.
- `NEXT_PUBLIC_CAL_LINK`: enlace de Cal.com del diagnóstico.
- `NEXT_PUBLIC_GTM_ID` y GA4 dentro de GTM, con Consent Mode.
- `NEXT_PUBLIC_SITE_URL`: dominio definitivo.
- Validar en Semrush las keywords del roadmap del blog (`content/blog/ROADMAP.md`).
