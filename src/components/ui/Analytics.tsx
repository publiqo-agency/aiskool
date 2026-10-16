"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const KEY = "consent-v1";

type Consent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Envía un evento de conversión al dataLayer (GTM lo reenvía a GA4 si hay consentimiento). */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

function readConsent(): Consent | null {
  try {
    return (localStorage.getItem(KEY) as Consent | null) ?? null;
  } catch {
    return null;
  }
}

function applyConsent(value: Consent) {
  window.gtag?.("consent", "update", {
    analytics_storage: value,
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  });
}

/** GTM + Consent Mode v2 (por defecto denegado) + banner de cookies. */
export function Analytics() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const c = readConsent();
    if (c) applyConsent(c);
    else setShow(true);
    const open = () => setShow(true);
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  const choose = (value: Consent) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    applyConsent(value);
    setShow(false);
  };

  return (
    <>
      {GTM_ID && (
        <>
          <Script id="consent-default" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            var c = null; try { c = localStorage.getItem('${KEY}'); } catch (e) {}
            gtag('consent', 'default', {
              analytics_storage: c === 'granted' ? 'granted' : 'denied',
              ad_storage: c === 'granted' ? 'granted' : 'denied',
              ad_user_data: c === 'granted' ? 'granted' : 'denied',
              ad_personalization: c === 'granted' ? 'granted' : 'denied',
              wait_for_update: 500
            });
          `}</Script>
          <Script id="gtm" strategy="afterInteractive">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}</Script>
        </>
      )}

      {show && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Preferencias de cookies"
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-[560px] rounded-[14px] border border-line bg-surface p-5 text-ink shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]"
        >
          <p className="text-[0.95rem] leading-[1.55]">
            Usamos cookies analíticas para entender cómo se usa la web y mejorarla. Solo se activan si las aceptas.{" "}
            <Link href="/cookies" className="underline underline-offset-2">
              Más información
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => choose("denied")} className="eyebrow rounded-[6px] border border-ink px-4 py-2.5 hover:bg-ink hover:text-white">
              Rechazar
            </button>
            <button type="button" onClick={() => choose("granted")} className="eyebrow rounded-[6px] border border-ink bg-ink px-4 py-2.5 text-white hover:bg-transparent hover:text-ink">
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
