import { BracketButton } from "@/components/ui/BracketButton";
import type { BlogCategory } from "@/lib/blog";
import { blogCategories } from "@/lib/blog";

const ctas = {
  test: { title: "¿Cumple tu empresa el art. 4 del AI Act?", text: "Test gratuito de 3 minutos con informe y próximos pasos.", href: "/test-ai-act", label: "Hacer el test" },
  politica: { title: "Plantilla de política de uso de IA", text: "Documento editable para ordenar cómo usa la IA tu plantilla.", href: "/recursos", label: "Recibir la plantilla" },
  formacion: { title: "¿Formación para tu equipo?", text: "Talleres in-company u online con tus herramientas y tus casos.", href: "/formaciones", label: "Ver formaciones" },
  consultoria: { title: "¿Tienes un proceso que automatizar?", text: "Te decimos en 30 minutos si un agente tiene sentido y cuánto cuesta.", href: "/diagnostico", label: "Diagnóstico gratuito" },
  diagnostico: { title: "Hablemos de tu equipo", text: "Diagnóstico gratuito y propuesta con precio en 48 h.", href: "/diagnostico", label: "Reservar diagnóstico" },
} as const;

/** CTA contextual según el cluster del artículo. */
export function BlogCta({ category }: { category: BlogCategory }) {
  const c = ctas[blogCategories[category].cta];
  return (
    <aside className="not-prose my-10 rounded-[16px] bg-ink p-7 text-white">
      <p className="text-[1.25rem] font-semibold">{c.title}</p>
      <p className="mt-2 text-white/70">{c.text}</p>
      <div className="mt-5">
        <BracketButton href={c.href} tone="accent">
          {c.label}
        </BracketButton>
      </div>
    </aside>
  );
}
