import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Tone = "dark" | "light" | "accent";

type Common = { children: ReactNode; tone?: Tone; className?: string; size?: "md" | "lg" };

type AsLink = Common & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;
type AsButton = Common & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

const toneClasses: Record<Tone, { root: string; dot: string; corner: string }> = {
  // dark = sobre fondo oscuro (texto claro)
  dark: { root: "text-white", dot: "bg-white", corner: "border-white/70" },
  light: { root: "text-ink", dot: "bg-ink", corner: "border-ink/70" },
  accent: { root: "text-accent-ink bg-accent rounded-[6px]", dot: "bg-white", corner: "border-transparent" },
};

function Inner({ children, tone = "light", size = "md" }: Common) {
  const t = toneClasses[tone];
  const corner = `pointer-events-none absolute size-[8px] ${t.corner} transition-all duration-500 ease-expo`;
  return (
    <>
      {/* Esquinas en L */}
      <span aria-hidden className={`${corner} top-0 left-0 border-t border-l group-hover/btn:-top-[3px] group-hover/btn:-left-[3px]`} />
      <span aria-hidden className={`${corner} top-0 right-0 border-t border-r group-hover/btn:-top-[3px] group-hover/btn:-right-[3px]`} />
      <span aria-hidden className={`${corner} bottom-0 left-0 border-b border-l group-hover/btn:-bottom-[3px] group-hover/btn:-left-[3px]`} />
      <span aria-hidden className={`${corner} right-0 bottom-0 border-r border-b group-hover/btn:-right-[3px] group-hover/btn:-bottom-[3px]`} />

      <span className={`flex items-center justify-center ${size === "lg" ? "h-[52px] px-[28px]" : "h-[42px] px-[22px]"}`}>
        {/* Punto que entra desenfocado */}
        <span
          aria-hidden
          className={`${t.dot} size-[8px] -translate-x-[18px] rounded-[2px] opacity-0 blur-[10px] transition-all duration-500 ease-expo group-hover/btn:-translate-x-[6px] group-hover/btn:opacity-100 group-hover/btn:blur-0 motion-reduce:hidden`}
        />
        {/* Texto que rueda hacia arriba */}
        <span className="relative block overflow-hidden">
          <span className="block transition-transform duration-500 ease-expo group-hover/btn:-translate-y-full motion-reduce:transition-none">
            {children}
          </span>
          <span
            aria-hidden
            className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-expo group-hover/btn:translate-y-0 motion-reduce:hidden"
          >
            {children}
          </span>
        </span>
      </span>
    </>
  );
}

/** Botón con esquinas, punto desenfocado, texto que rueda y glitch breve al pasar el ratón. */
export function BracketButton({ children, tone = "light", className = "", size = "md", ...rest }: AsLink | AsButton) {
  const base = `group/btn relative isolate inline-flex eyebrow select-none whitespace-nowrap hover:animate-glitch motion-reduce:hover:animate-none ${toneClasses[tone].root} ${className}`;

  if (rest.href !== undefined) {
    const linkProps = rest as Omit<AsLink, keyof Common>;
    return (
      <Link className={base} {...linkProps}>
        <Inner tone={tone} size={size}>
          {children}
        </Inner>
      </Link>
    );
  }
  const buttonProps = rest as Omit<AsButton, keyof Common>;
  return (
    <button className={base} {...buttonProps} type={buttonProps.type ?? "button"}>
      <Inner tone={tone} size={size}>
        {children}
      </Inner>
    </button>
  );
}
