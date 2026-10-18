/**
 * Configuración central de la marca y del negocio.
 * Cambia aquí el nombre, el dominio, los precios o las cifras: toda la web lee de este archivo.
 */

export const site = {
  name: "Alfabeta", // Nombre provisional. Alternativas: Criterio, Pauta IA, Lúcida, Método IA, Umbral, Brújula IA.
  legalName: "[RAZÓN SOCIAL PENDIENTE]",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alfabeta.es",
  tagline: "Formación en IA para empresas",
  description:
    "Formación en inteligencia artificial para empresas: alfabetización en IA (art. 4 del AI Act), ChatGPT, Claude, Copilot, agentes y automatización. In-company, presencial en toda España u online.",
  email: "hola@alfabeta.es",
  phone: "", // Pendiente
  city: "España",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "", // p. ej. "alfabeta/diagnostico"
  social: {
    linkedin: "",
    youtube: "",
  },
} as const;

export const nav = [
  { label: "Formaciones", href: "/formaciones" },
  { label: "AI Act", href: "/ai-act" },
  { label: "Consultoría", href: "/consultoria" },
  { label: "Precios", href: "/precios" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
] as const;

/** Empresas formadas (logos reales facilitados por el cliente). */
export const clients = [
  { name: "Brinkr", src: "/logos/brinkr.svg", url: "https://brinkr.com/", w: 1984, h: 645 },
  { name: "Publiqo", src: "/logos/publiqo.svg", url: "https://publiqo.es/", w: 1249, h: 210 },
  { name: "Track Demons", src: "/logos/trackdemons.png", url: "https://www.trackdemons.com/es", w: 1407, h: 403 },
  { name: "GoFeed", src: "/logos/gofeed.svg", url: "https://gofeedapp.com/", w: 134, h: 142, wordmark: true },
  { name: "Acotia", src: "/logos/acotia.svg", url: "https://acotia.com/es", w: 2667, h: 735 },
  { name: "Toppik", src: "/logos/toppik.png", url: "https://www.toppikapp.com/", w: 1024, h: 1024, wordmark: true },
  { name: "Pexalia", src: "/logos/pexalia.png", url: "https://pexalia.com/es", w: 360, h: 102 },
] as const;

/**
 * Cifras de la tarjeta del hero.
 * TODO(cliente): sustituir por cifras reales (personas formadas, empresas, valoración media).
 * Mientras `value` sea null se muestra el texto alternativo, nunca una cifra inventada.
 */
export const stats: { value: number | null; suffix?: string; decimals?: number; label: string; fallback: string }[] = [
  { value: null, label: "Profesionales formados", fallback: "In-company" },
  { value: null, label: "Empresas", fallback: "Toda España" },
  { value: null, suffix: "/5", decimals: 1, label: "Valoración media", fallback: "Online y presencial" },
];

/** Testimonios reales. Vacío = la sección no se renderiza. */
export const testimonials: { quote: string; name: string; role: string; company: string }[] = [];

export type Price = { label: string; from: string; unit: string; detail: string; href: string; featured?: boolean };

/** Precios orientativos «desde» (provisionales, validar). IVA no incluido. */
export const prices: Price[] = [
  {
    label: "Alfabetización en IA online",
    from: "99 €",
    unit: "por persona",
    detail: "Curso guiado de 6 h con evaluación, certificado y registro para tu evidencia del art. 4.",
    href: "/formaciones/alfabetizacion-ia",
  },
  {
    label: "Taller in-company",
    from: "1.500 €",
    unit: "4 h · hasta 20 personas",
    detail: "Presencial u online en directo, con casos de tu empresa y las herramientas que ya usáis.",
    href: "/presupuesto",
    featured: true,
  },
  {
    label: "Pack Art. 4",
    from: "2.900 €",
    unit: "por empresa",
    detail: "Formación + política de uso de IA + inventario de herramientas + registro de evidencias.",
    href: "/ai-act",
  },
  {
    label: "Programa por departamento",
    from: "4.900 €",
    unit: "4–6 semanas",
    detail: "Itinerario aplicado a marketing, ventas, RR. HH., legal o finanzas con seguimiento.",
    href: "/formaciones",
  },
];

export const pillars = [
  {
    n: "01",
    title: "Entender",
    text: "Qué es un modelo de lenguaje, qué hace bien, dónde falla y por qué. La base que evita errores caros.",
    tone: "night",
    pattern: "grid",
  },
  {
    n: "02",
    title: "Usar",
    text: "ChatGPT, Claude, Copilot o Gemini aplicados a tareas reales de cada puesto, con método y criterio.",
    tone: "cobalt",
    pattern: "wave",
  },
  {
    n: "03",
    title: "Automatizar",
    text: "Agentes y flujos con n8n, Make o desarrollos propios para quitar trabajo repetitivo a los equipos.",
    tone: "sage",
    pattern: "rays",
  },
  {
    n: "04",
    title: "Cumplir",
    text: "Alfabetización según el art. 4 del AI Act, política de uso, privacidad y evidencias documentadas.",
    tone: "sand",
    pattern: "helix",
  },
] as const;

export const departments = [
  { label: "Dirección", href: "/formaciones/ia-para-directivos" },
  { label: "Marketing", href: "/formaciones/ia-marketing" },
  { label: "Ventas", href: "/formaciones/ia-ventas" },
  { label: "Recursos Humanos", href: "/formaciones/ia-rrhh" },
  { label: "Legal y Compliance", href: "/formaciones/ia-legal" },
  { label: "Finanzas", href: "/formaciones/ia-finanzas" },
  { label: "Atención al cliente", href: "/formaciones/ia-atencion-cliente" },
  { label: "Operaciones", href: "/formaciones/agentes-ia-automatizacion" },
  { label: "Tecnología", href: "/formaciones/formacion-tecnica-llm" },
] as const;

export const methodology = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Entrevistas y una encuesta corta para saber qué herramientas se usan, quién las usa y qué riesgos hay.",
    tone: "cobalt",
  },
  {
    n: "02",
    title: "Diseño a medida",
    text: "Itinerario por perfiles con casos de tu sector, tus documentos (anonimizados) y tus herramientas.",
    tone: "sage",
  },
  {
    n: "03",
    title: "Formación práctica",
    text: "Sesiones presenciales u online en directo: 70 % práctica, ejercicios con entregables y evaluación.",
    tone: "sand",
  },
  {
    n: "04",
    title: "Adopción y evidencias",
    text: "Seguimiento de 4–6 semanas, métricas de uso y un dossier con el registro de formación para el art. 4.",
    tone: "night",
  },
] as const;

export const faqs = [
  {
    q: "¿Es obligatorio formar a la plantilla en IA?",
    a: "El artículo 4 del Reglamento Europeo de IA obliga a las empresas que usan sistemas de IA a adoptar medidas para apoyar la alfabetización en IA de su personal. No exige un título ni un certificado oficial, ni garantizar un nivel concreto en cada persona, pero conviene poder explicar qué has hecho: formación, criterios de uso y registros. Te ayudamos a documentarlo.",
  },
  {
    q: "¿La formación es presencial u online?",
    a: "Las dos. Vamos a tus oficinas en cualquier punto de España o la impartimos online en directo. Para grupos grandes o distribuidos combinamos sesiones en directo con un curso online de alfabetización.",
  },
  {
    q: "¿Necesitamos conocimientos técnicos previos?",
    a: "No. La mayoría de itinerarios están pensados para perfiles no técnicos. Para equipos de tecnología tenemos formación específica sobre desarrollo con modelos de lenguaje y agentes.",
  },
  {
    q: "¿Con qué herramientas trabajáis?",
    a: "Con las que ya usa tu empresa: ChatGPT, Claude, Microsoft 365 Copilot, Gemini en Google Workspace, NotebookLM y plataformas de automatización como n8n, Make o Zapier. Si aún no tenéis herramienta corporativa, te ayudamos a elegirla.",
  },
  {
    q: "¿Qué pasa con la confidencialidad de nuestros datos?",
    a: "Trabajamos con datos ficticios o anonimizados y enseñamos qué información no debe introducirse nunca en una herramienta de IA. Firmamos acuerdo de confidencialidad si lo necesitas.",
  },
  {
    q: "¿Entregáis certificado?",
    a: "Sí. Cada participante recibe un certificado de aprovechamiento propio (no es un título oficial: el AI Act no lo exige) y la empresa un registro de asistencia y evaluación que puede usar como evidencia de las medidas de alfabetización adoptadas.",
  },
  {
    q: "¿Cuánto tarda en estar lista una formación a medida?",
    a: "Un taller estándar puede impartirse en 1–2 semanas. Un programa a medida por departamentos suele necesitar entre 2 y 4 semanas de diseño tras el diagnóstico.",
  },
];
