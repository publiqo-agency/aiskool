import { BracketButton } from "@/components/ui/BracketButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[80dvh] items-center bg-paper pt-28">
      <div className="container-x">
        <p className="eyebrow text-muted">Error 404</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,6vw,5rem)]">Esta página no existe</h1>
        <p className="mt-6 max-w-[48ch] text-[1.15rem] text-ink-soft">Puede que el enlace haya cambiado. Te dejamos algunos atajos.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <BracketButton href="/" size="lg">
            Inicio
          </BracketButton>
          <BracketButton href="/formaciones" size="lg">
            Formaciones
          </BracketButton>
          <BracketButton href="/diagnostico" tone="accent" size="lg">
            Diagnóstico gratuito
          </BracketButton>
        </div>
      </div>
    </section>
  );
}
