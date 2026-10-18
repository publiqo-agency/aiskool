"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { BracketButton } from "@/components/ui/BracketButton";
import { Logo } from "@/components/ui/Logo";

/** «Color» y «Mezcla»: tarjeta blanca flotante desde arriba, como en Founderz. */
const floating =
  "color:mt-3 color:max-w-[min(1360px,calc(100%-1.5rem))] color:rounded-[18px] color:border color:border-black/5 color:bg-white/95 color:px-4 color:py-2.5 color:shadow-[0_10px_40px_-18px_rgba(20,10,50,0.35)] color:backdrop-blur-md color:md:px-6 " +
  "mezcla:mt-3 mezcla:max-w-[min(1360px,calc(100%-1.5rem))] mezcla:rounded-[18px] mezcla:border mezcla:border-black/5 mezcla:bg-white/95 mezcla:px-4 mezcla:py-2.5 mezcla:shadow-[0_10px_40px_-18px_rgba(20,10,50,0.35)] mezcla:backdrop-blur-md mezcla:md:px-6";

/** Rutas (y sus subrutas) que empiezan con hero oscuro: el header arranca en modo claro sobre oscuro. */
const darkHeroRoutes = [
  "/formaciones",
  "/formacion-ia",
  "/cursos",
  "/ai-act",
  "/test-ai-act",
  "/consultoria",
  "/metodologia",
  "/diagnostico",
  "/presupuesto",
  "/precios",
  "/nosotros",
  "/recursos",
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const onDark = !scrolled && (pathname === "/" || darkHeroRoutes.some((r) => pathname === r || pathname.startsWith(r + "/")));

  useEffect(() => {
    let last = window.scrollY;
    // Compacta tras 80px; se oculta al bajar y reaparece al subir
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      if (y > 400 && y > last + 4) setHidden(true);
      else if (y < last - 4 || y <= 400) setHidden(false);
      last = y;
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Cierra el menú móvil al cambiar de ruta (ajuste de estado durante el render, sin efecto)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-700 ease-expo ${hidden && !open ? "-translate-y-[120%]" : "translate-y-0"}`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-700 ease-expo ${
          scrolled
            ? "mt-3 max-w-[1100px] rounded-[14px] border border-line/70 bg-surface/85 px-3 py-2 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)] backdrop-blur-md md:px-4"
            : "max-w-[1440px] px-4 py-5 md:px-10"
        } ${floating} ${open ? "mx-3" : "mx-3 md:mx-auto"}`}
      >
        <Link href="/" aria-label={`${site.name}, inicio`} className={`${onDark ? "text-white" : "text-ink"} color:text-ink mezcla:text-ink`}>
          <Logo compact={scrolled} />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group/nav relative block overflow-hidden px-4 py-2 eyebrow ${onDark ? "text-white/85 hover:text-white" : "text-ink-soft hover:text-ink"} color:text-ink-soft color:hover:text-ink mezcla:text-ink-soft mezcla:hover:text-ink ${active ? "!text-accent" : ""}`}
                  >
                    {/* esquinas al pasar el ratón */}
                    <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/nav:opacity-100 color:hidden">
                      <span className="absolute top-0 left-0 size-[6px] border-t border-l border-current" />
                      <span className="absolute top-0 right-0 size-[6px] border-t border-r border-current" />
                      <span className="absolute bottom-0 left-0 size-[6px] border-b border-l border-current" />
                      <span className="absolute right-0 bottom-0 size-[6px] border-r border-b border-current" />
                    </span>
                    <span className="relative block overflow-hidden">
                      <span className="block transition-transform duration-500 ease-expo group-hover/nav:-translate-y-full">{item.label}</span>
                      <span aria-hidden className="absolute inset-0 translate-y-full transition-transform duration-500 ease-expo group-hover/nav:translate-y-0">
                        {item.label}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <BracketButton href="/diagnostico" tone="accent">
              Diagnóstico gratuito
            </BracketButton>
          </span>
          <button
            type="button"
            className={`grid size-[42px] place-items-center rounded-[8px] lg:hidden ${onDark && !open ? "text-white" : "text-ink"} color:text-ink mezcla:text-ink`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-[10px] w-[20px]">
              <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${open ? "top-[4px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${open ? "top-[4px] -rotate-45" : "top-[8.5px]"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`mx-3 mt-2 overflow-hidden rounded-[14px] border border-line bg-surface color:rounded-[18px] color:bg-white transition-all duration-500 ease-expo lg:hidden ${open ? "max-h-[80dvh] opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col p-4">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="display block border-b border-line py-4 text-[1.6rem] text-ink">
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-5">
            <BracketButton href="/diagnostico" tone="accent" size="lg" className="w-full justify-center">
              Diagnóstico gratuito
            </BracketButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
