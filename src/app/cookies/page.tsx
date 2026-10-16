import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/ui/LegalPage";
import { CookieSettingsButton } from "@/components/ui/CookieSettingsButton";

export const metadata = { ...pageMetadata({ title: "Política de cookies", description: `Política de cookies de ${site.name}.`, path: "/cookies" }), robots: { index: false } };

export default function Cookies() {
  return (
    <LegalPage title="Política de cookies" path="/cookies">
      <p>Este sitio usa cookies técnicas, necesarias para su funcionamiento, y cookies analíticas, solo si las aceptas.</p>
      <h2>Cookies que usamos</h2>
      <ul>
        <li>
          <strong>Técnicas:</strong> guardan tu elección sobre cookies (almacenamiento local). No requieren consentimiento.
        </li>
        <li>
          <strong>Analíticas (Google Analytics 4 vía Google Tag Manager):</strong> miden de forma agregada cómo se usa la web. Solo
          se activan si las aceptas. Duración habitual: hasta 2 años.
        </li>
        <li>
          <strong>De terceros en el calendario de reservas (Cal.com):</strong> solo en la página de diagnóstico.
        </li>
      </ul>
      <h2>Cambiar tu elección</h2>
      <p>Puedes cambiar tu elección en cualquier momento:</p>
      <CookieSettingsButton />
    </LegalPage>
  );
}
