import { faqs as defaultFaqs } from "@/lib/site";
import { JsonLd, faqJsonLd } from "@/lib/seo";

type Item = { q: string; a: string };

export function Faq({ items = defaultFaqs, title = "Preguntas frecuentes" }: { items?: Item[]; title?: string }) {
  return (
    <section className="bg-paper pb-24 md:pb-36" aria-labelledby="faq-title">
      <JsonLd data={faqJsonLd(items)} />
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow text-muted">FAQ</p>
          <h2 id="faq-title" className="display mt-4 text-[clamp(2rem,3.6vw,3rem)]">
            {title}
          </h2>
        </div>
        <ul className="divide-y divide-line border-y border-line md:col-span-8">
          {items.map((f) => (
            <li key={f.q}>
              <details className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.15rem] font-medium">
                  {f.q}
                  <span aria-hidden className="mt-1 grid size-[22px] shrink-0 place-items-center transition-transform duration-500 ease-expo group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[70ch] text-[1.02rem] leading-[1.65] text-ink-soft">{f.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
