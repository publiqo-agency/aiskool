"use client";

import { useSyncExternalStore } from "react";
import { isVariant, VARIANT_KEY, type Variant } from "@/lib/variant";

function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-variant"] });
  return () => mo.disconnect();
}

function read(): Variant {
  const v = document.documentElement.dataset.variant;
  return isVariant(v) ? v : "actual";
}

/** Versión de diseño activa. En servidor siempre «actual»; la maquetación se cambia por CSS, esto es para piezas pesadas. */
export function useVariant() {
  return useSyncExternalStore(subscribe, read, () => "actual" as Variant);
}

export function setVariant(v: Variant) {
  document.documentElement.dataset.variant = v;
  try {
    localStorage.setItem(VARIANT_KEY, v);
  } catch {}
}
