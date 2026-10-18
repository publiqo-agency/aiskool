import Link from "next/link";
import type { ReactNode } from "react";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { HeroFigure, type Figure } from "@/components/motion/HeroFigure";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

type Crumb = { name: string; path: string };

/** Clases de texto según el fondo: banner oscuro, banner claro o la cabecera sencilla sobre papel. */
const text = {
  dark: {
    crumbs: "text-white/55 color:text-white/70",
    link: "hover:text-white",
    current: "text-white",
    eyebrow: "text-white/60 color:text-white",
    intro: "text-white/70 color:text-white/85",
  },
  light: {
    crumbs: "text-muted color:text-white/70",
    link: "hover:text-ink color:hover:text-white",
    current: "text-ink color:text-white",
    eyebrow: "text-muted color:text-white",
    intro: "text-ink-soft color:text-white/85",
  },
};

/**
 * Cabecera de páginas interiores: migas, eyebrow, H1 con revelado y entradilla.
 * Con `figure` es un banner con fondo propio y esquinas redondeadas abajo (como en «Color»)
 * y una figura de puntos animada; en «Color» se mantiene el degradado de manchas sin figura.
 * Sin `figure` (páginas legales) es la cabecera sencilla sobre papel.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs = [],
  children,
  figure,
  tone = "dark",
  seed,
  footer,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
  figure?: Figure;
  tone?: "dark" | "light";
  /** Varía la figura (p. ej. el slug del artículo) para que cada portada sea distinta. */
  seed?: string;
  /** Franja al pie del banner. */
  footer?: ReactNode;
}) {
  const all = [{ name: "Inicio", path: "/" }, ...crumbs];
  const t = text[figure ? tone : "light"];
  const side = figure === "torus" || figure === "pyramid" || figure === "orbits";
  const centered = figure === "horizon";

  const content = (
    <div className={side ? "lg:max-w-[50%] color:lg:max-w-none" : centered ? "flex flex-col items-center text-center" : ""}>
      {crumbs.length > 0 && (
        <nav aria-label="Migas de pan" className={`eyebrow ${t.crumbs}`}>
          <ol className={`flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}>
            {all.map((c, i) => (
              <li key={c.path} className="flex gap-2">
                {i < all.length - 1 ? (
                  <>
                    <Link href={c.path} className={t.link}>
                      {c.name}
                    </Link>
                    <span aria-hidden>/</span>
                  </>
                ) : (
                  <span aria-current="page" className={t.current}>
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      {eyebrow && <p className={`eyebrow tag mt-8 ${t.eyebrow}`}>{eyebrow}</p>}
      <SplitReveal
        as="h1"
        immediate
        className={`display mt-4 max-w-[20ch] ${side ? "text-[clamp(1.9rem,5.4vw,4.8rem)] lg:text-[clamp(2.2rem,3.4vw,3.8rem)]" : "text-[clamp(1.9rem,5.4vw,4.8rem)]"}`}
      >
        {title}
      </SplitReveal>
      {intro && <div className={`mt-8 max-w-[62ch] text-[1.15rem] leading-[1.6] md:text-[1.25rem] ${t.intro}`}>{intro}</div>}
      {children && <div className="mt-10">{children}</div>}
    </div>
  );

  if (!figure) {
    return (
      <header className="relative overflow-hidden bg-paper pt-32 pb-14 color:mesh color:grain color:mb-12 color:rounded-b-[36px] color:text-white color:md:mb-16 mezcla:bg-[radial-gradient(45%_70%_at_92%_0%,rgb(106_75_255/0.18),transparent_70%),radial-gradient(35%_60%_at_0%_100%,rgb(255_90_54/0.12),transparent_70%)] md:pt-44 md:pb-20">
        {crumbs.length > 0 && <JsonLd data={breadcrumbJsonLd(all)} />}
        <div className="container-x">{content}</div>
      </header>
    );
  }

  const dark = tone === "dark";
  return (
    <header
      className={`relative mb-12 flex flex-col overflow-hidden rounded-b-[36px] pt-32 pb-10 md:mb-16 md:pt-44 md:pb-14 color:mesh color:grain color:text-white ${
        dark ? "bg-night text-white" : "bg-sand text-ink mezcla:bg-lavender"
      } ${side ? "lg:min-h-[760px] color:lg:min-h-0" : ""}`}
    >
      {crumbs.length > 0 && <JsonLd data={breadcrumbJsonLd(all)} />}
      {dark && <div aria-hidden className="glow grain absolute inset-0 hidden mezcla:block" />}

      {figure === "terrain" && (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px] color:hidden md:h-[440px]">
          <HeroFigure figure="terrain" tone={tone} seed={seed} className="absolute inset-0 size-full" />
          {footer && <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-night to-transparent" />}
        </div>
      )}
      {centered && <HeroFigure figure="horizon" tone={tone} seed={seed} className="pointer-events-none absolute inset-0 size-full color:hidden" />}

      <div className="container-x relative">{content}</div>

      {side && (
        <div aria-hidden className={`pointer-events-none relative mt-8 h-[300px] color:hidden sm:h-[380px] lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-1/2 ${footer ? "lg:bottom-24" : "lg:bottom-0"}`}>
          <HeroFigure figure={figure} tone={tone} seed={seed} className="absolute inset-0 size-full" />
        </div>
      )}
      {(figure === "terrain" || centered) && (
        <div aria-hidden className={`color:hidden ${footer ? "h-[100px] md:h-[150px]" : "h-[200px] md:h-[300px]"}`} />
      )}

      {footer && <div className="container-x relative mt-auto pt-12">{footer}</div>}
    </header>
  );
}
