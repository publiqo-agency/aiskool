import { faqs as defaultFaqs } from "@/lib/site";
import { JsonLd, faqJsonLd } from "@/lib/seo";

type Item = { q: string; a: string };

export function Faq({ items = defaultFaqs, title = "Preguntas frecuentes" }: { items?: Item[]; title?: string }) {
  return (
    <section className="bg-paper pb-24 color:bg-cloud color:pt-24 color:pb-32 md:pb-36 color:md:pt-36 color:md:pb-44" aria-labelledby="faq-title">
      <JsonLd data={faqJsonLd(items)} />
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow tag text-muted color:bg-lavender color:text-accent">FAQ</p>
          <h2 id="faq-title" className="display mt-4 text-[clamp(2rem,3.6vw,3rem)]">
            {title}
          </h2>
        </div>
        <ul className="divide-y divide-line border-y border-line color:space-y-3 color:divide-y-0 color:border-y-0 md:col-span-8">
          {items.map((f) => (
            <li key={f.q}>
              <details className="group py-6 color:rounded-[18px] color:bg-white color:px-6 color:py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.15rem] font-medium">
                  {f.q}
                  <span aria-hidden className="mt-1 grid size-[22px] shrink-0 place-items-center transition-transform duration-500 ease-expo group-open:rotate-45 color:mt-0 color:size-[30px] color:rounded-full color:bg-lavender color:text-accent">
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
