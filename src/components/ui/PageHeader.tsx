import Link from "next/link";
import type { ReactNode } from "react";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

type Crumb = { name: string; path: string };

/** Cabecera de páginas interiores: migas, eyebrow, H1 con revelado y entradilla. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  const all = [{ name: "Inicio", path: "/" }, ...crumbs];
  return (
    <header className="bg-paper pt-32 pb-14 md:pt-44 md:pb-20">
      {crumbs.length > 0 && <JsonLd data={breadcrumbJsonLd(all)} />}
      <div className="container-x">
        {crumbs.length > 0 && (
          <nav aria-label="Migas de pan" className="eyebrow text-muted">
            <ol className="flex flex-wrap gap-2">
              {all.map((c, i) => (
                <li key={c.path} className="flex gap-2">
                  {i < all.length - 1 ? (
                    <>
                      <Link href={c.path} className="hover:text-ink">
                        {c.name}
                      </Link>
                      <span aria-hidden>/</span>
                    </>
                  ) : (
                    <span aria-current="page" className="text-ink">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow mt-8 text-muted">{eyebrow}</p>}
        <SplitReveal as="h1" immediate className="display mt-4 max-w-[20ch] text-[clamp(1.9rem,5.4vw,4.8rem)]">
          {title}
        </SplitReveal>
        {intro && <div className="mt-8 max-w-[62ch] text-[1.15rem] leading-[1.6] text-ink-soft md:text-[1.25rem]">{intro}</div>}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </header>
  );
}
