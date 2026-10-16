import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Particles } from "@/components/three/Particles";
import { BracketButton } from "@/components/ui/BracketButton";
import { Mark } from "@/components/ui/Logo";

const secondary = [
  { label: "Test AI Act", href: "/test-ai-act" },
  { label: "Diagnóstico gratuito", href: "/diagnostico" },
  { label: "Presupuesto", href: "/presupuesto" },
  { label: "Cursos online", href: "/cursos" },
  { label: "Recursos", href: "/recursos" },
  { label: "Metodología", href: "/metodologia" },
];

const legal = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
];

/** Año en caché: con Cache Components un valor no determinista debe cachearse o calcularse en cliente. */
async function Year() {
  "use cache";
  return new Date().getFullYear();
}

/** Footer partido: mitad oscura con toro de partículas y mitad de color con CTA y navegación. */
export function Footer() {
  return (
    <footer className="grid bg-night text-white md:grid-cols-2">
      <div className="relative hidden min-h-[640px] overflow-hidden md:block">
        <Particles shape="torus" count={3200} size={2.6} color="#d8d8d4" className="absolute inset-0" />
      </div>
      <div className="flex flex-col bg-cobalt p-6 md:rounded-tl-[22px] md:p-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="display text-[1.5rem] md:text-[1.9rem]">Empieza por un diagnóstico.</p>
            <p className="mt-3 max-w-[44ch] eyebrow leading-[1.6] text-white/75">
              30 minutos, sin compromiso. Te decimos por dónde empezar y qué necesita cada equipo.
            </p>
          </div>
          <Mark className="size-[72px] shrink-0 text-white md:size-[120px]" />
        </div>
        <div className="mt-8">
          <BracketButton href="/diagnostico" tone="dark" size="lg">
            Reservar diagnóstico
          </BracketButton>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:mt-auto md:pt-24">
          <ul className="space-y-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="display text-[1.35rem] transition-opacity hover:opacity-70 md:text-[1.7rem]">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <ul className="space-y-2">
              {secondary.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="eyebrow text-white/85 hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 eyebrow text-white/70">
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-6 eyebrow text-[0.68rem] text-white/70">
          <p>
            © <Year /> {site.name}
          </p>
          <ul className="flex flex-wrap gap-5">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
