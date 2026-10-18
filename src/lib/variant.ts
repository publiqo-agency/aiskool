/**
 * Versiones de diseño que se pueden comparar con la pilla de abajo a la izquierda.
 * La versión activa vive en `<html data-variant>` y se guarda en localStorage.
 */
export const variants = [
  { id: "actual", label: "Actual" },
  { id: "color", label: "Color" },
  { id: "mezcla", label: "Mezcla" },
] as const;

export type Variant = (typeof variants)[number]["id"];

export const VARIANT_KEY = "ia-variant";

export const isVariant = (v: unknown): v is Variant => variants.some((x) => x.id === v);

/**
 * Script que se ejecuta en <head> antes del primer pintado: lee `?v=` (y lo guarda) o localStorage
 * y marca <html data-variant>, para que no parpadee la versión por defecto.
 */
export const variantBootScript = `(function(){try{var k=${JSON.stringify(VARIANT_KEY)},ok=${JSON.stringify(variants.map((v) => v.id))},q=new URLSearchParams(location.search).get("v"),v=null;if(q&&ok.indexOf(q)>-1){v=q;try{localStorage.setItem(k,q)}catch(e){}}if(!v){try{v=localStorage.getItem(k)}catch(e){}}if(v&&ok.indexOf(v)>-1)document.documentElement.dataset.variant=v;else document.documentElement.dataset.variant="actual"}catch(e){}})();`;
