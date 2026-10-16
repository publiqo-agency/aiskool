/**
 * Test orientativo de preparación para el art. 4 del AI Act (alfabetización en IA).
 * No es asesoramiento jurídico. La puntuación se recalcula en servidor con estas mismas reglas.
 */

export type Question = {
  id: string;
  q: string;
  help?: string;
  options: { label: string; score: number }[];
  /** Recomendación si la respuesta no obtiene la puntuación máxima */
  tip: string;
};

export const questions: Question[] = [
  {
    id: "uso",
    q: "¿Tu plantilla usa herramientas de IA en su trabajo (ChatGPT, Copilot, Claude, Gemini…)?",
    options: [
      { label: "Sí, con herramientas corporativas", score: 2 },
      { label: "Sí, cada uno con sus cuentas", score: 0 },
      { label: "No lo sabemos con seguridad", score: 0 },
      { label: "No, nadie", score: 2 },
    ],
    tip: "Haz un inventario rápido de qué herramientas de IA se usan, quién las usa y con qué cuentas. Es el punto de partida de cualquier medida de alfabetización.",
  },
  {
    id: "politica",
    q: "¿Tenéis una política o normas escritas sobre el uso de IA?",
    options: [
      { label: "Sí, comunicada a toda la plantilla", score: 2 },
      { label: "Sí, pero poca gente la conoce", score: 1 },
      { label: "No", score: 0 },
    ],
    tip: "Redacta una política de uso de IA breve y práctica: herramientas permitidas, datos prohibidos, revisión humana y a quién preguntar.",
  },
  {
    id: "formacion",
    q: "¿Las personas que usan IA han recibido formación sobre cómo funciona y sus riesgos?",
    options: [
      { label: "Sí, formación estructurada por perfiles", score: 2 },
      { label: "Algo puntual (una charla, un vídeo)", score: 1 },
      { label: "No", score: 0 },
    ],
    tip: "Organiza formación de alfabetización adaptada a cada perfil: no necesita lo mismo atención al cliente que el equipo legal o la dirección.",
  },
  {
    id: "registro",
    q: "¿Guardáis registro de quién se ha formado, cuándo y con qué contenidos?",
    options: [
      { label: "Sí", score: 2 },
      { label: "Parcialmente", score: 1 },
      { label: "No", score: 0 },
    ],
    tip: "Documenta las medidas: asistencia, contenidos, evaluaciones y fechas. Es lo que podrás enseñar si te piden explicar qué has hecho.",
  },
  {
    id: "datos",
    q: "¿La plantilla sabe qué información no debe introducir en una herramienta de IA?",
    options: [
      { label: "Sí, está definido y se ha explicado", score: 2 },
      { label: "Más o menos, por sentido común", score: 1 },
      { label: "No", score: 0 },
    ],
    tip: "Define y explica qué datos no se introducen nunca (personales, de clientes, confidenciales) y qué herramientas sí son seguras para cada tipo de dato.",
  },
  {
    id: "personas",
    q: "¿Usáis IA para decisiones sobre personas (selección, evaluación del desempeño, crédito…)?",
    help: "Algunos de estos usos se consideran de alto riesgo en el Reglamento de IA.",
    options: [
      { label: "No", score: 2 },
      { label: "Sí, con supervisión humana documentada", score: 1 },
      { label: "Sí, o no estamos seguros", score: 0 },
    ],
    tip: "Revisa con asesoría legal los usos de IA sobre personas: pueden ser de alto riesgo y tienen obligaciones adicionales, como la supervisión humana y la formación específica.",
  },
  {
    id: "responsable",
    q: "¿Hay una persona o comité responsable del uso de IA en la empresa?",
    options: [
      { label: "Sí", score: 2 },
      { label: "Informalmente", score: 1 },
      { label: "No", score: 0 },
    ],
    tip: "Designa a una persona responsable que mantenga el inventario, la política y la formación al día.",
  },
  {
    id: "actualizacion",
    q: "¿Revisáis periódicamente herramientas, normas y formación?",
    options: [
      { label: "Sí, al menos una vez al año", score: 2 },
      { label: "Solo cuando surge un problema", score: 1 },
      { label: "No", score: 0 },
    ],
    tip: "Programa una revisión anual: las herramientas y los usos cambian rápido, y la formación debe acompañarlos.",
  },
];

export const maxScore = questions.reduce((a, q) => a + Math.max(...q.options.map((o) => o.score)), 0);

export type Answers = Record<string, number>; // id → índice de opción

export function scoreAnswers(answers: Answers) {
  let score = 0;
  const tips: string[] = [];
  for (const q of questions) {
    const idx = answers[q.id];
    const opt = q.options[idx];
    if (!opt) continue;
    score += opt.score;
    const best = Math.max(...q.options.map((o) => o.score));
    if (opt.score < best) tips.push(q.tip);
  }
  const pct = Math.round((score / maxScore) * 100);
  const level =
    pct >= 80
      ? { key: "alto", label: "Bien encaminada", text: "Tienes la base. Revisa los puntos pendientes y mantén las evidencias al día." }
      : pct >= 45
        ? { key: "medio", label: "A medio camino", text: "Hay medidas en marcha, pero faltan piezas para poder demostrar una alfabetización suficiente." }
        : { key: "bajo", label: "Por empezar", text: "Tu plantilla usa (o puede usar) IA sin un marco claro. Es buen momento para ordenar: inventario, política y formación." };
  return { score, pct, level, tips };
}
