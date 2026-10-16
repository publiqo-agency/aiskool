"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { BracketButton } from "@/components/ui/BracketButton";
import { Logo } from "@/components/ui/Logo";

/** Rutas que empiezan con hero oscuro: el header arranca en modo claro sobre oscuro. */
const darkHeroRoutes = ["/"];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const onDark = darkHeroRoutes.includes(pathname) && !scrolled;

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
        } ${open ? "mx-3" : "mx-3 md:mx-auto"}`}
      >
        <Link href="/" aria-label={`${site.name}, inicio`} className={onDark ? "text-white" : "text-ink"}>
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
                    className={`group/nav relative block overflow-hidden px-4 py-2 eyebrow ${onDark ? "text-white/85 hover:text-white" : "text-ink-soft hover:text-ink"} ${active ? "!text-accent" : ""}`}
                  >
                    {/* esquinas al pasar el ratón */}
                    <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/nav:opacity-100">
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
            className={`grid size-[42px] place-items-center rounded-[8px] lg:hidden ${onDark && !open ? "text-white" : "text-ink"}`}
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
        className={`mx-3 mt-2 overflow-hidden rounded-[14px] border border-line bg-surface transition-all duration-500 ease-expo lg:hidden ${open ? "max-h-[80dvh] opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}
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
