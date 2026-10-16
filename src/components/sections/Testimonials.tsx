import { testimonials } from "@/lib/site";

/** Solo se renderiza con testimonios reales (lib/site.ts). */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="bg-paper py-24 md:py-36" aria-labelledby="testimonials-title">
      <div className="container-x">
        <p className="eyebrow text-muted">Testimonios</p>
        <h2 id="testimonials-title" className="display mt-4 text-[clamp(2rem,4vw,3.4rem)]">
          Lo que dicen los equipos
        </h2>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="flex flex-col rounded-[18px] bg-surface p-7">
              <blockquote className="flex-1 text-[1.1rem] leading-[1.55]">“{t.quote}”</blockquote>
              <p className="mt-6 font-semibold">{t.name}</p>
              <p className="text-muted">
                {t.role} · {t.company}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
