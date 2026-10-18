import type { ReactNode } from "react";
import { PageHeader } from "@/components/ui/PageHeader";

/**
 * Plantilla de páginas legales. TODO(legal): completar los datos marcados [ENTRE CORCHETES]
 * y revisar el texto con una asesoría externa antes de publicar (no hay abogados en el equipo).
 */
export function LegalPage({ title, path, children }: { title: string; path: string; children: ReactNode }) {
  return (
    <>
      <PageHeader title={title} crumbs={[{ name: title, path }]} />
      <section className="bg-paper pb-24 md:pb-32">
        <div className="container-x">
          <div className="prose-ia max-w-[72ch]">{children}</div>
        </div>
      </section>
    </>
  );
}
