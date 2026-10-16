import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata = { ...pageMetadata({ title: "Política de privacidad", description: `Política de privacidad de ${site.name}.`, path: "/privacidad" }), robots: { index: false } };

export default function Privacidad() {
  return (
    <LegalPage title="Política de privacidad" path="/privacidad">
      <h2>Responsable del tratamiento</h2>
      <p>
        {site.legalName} · NIF [PENDIENTE] · [DOMICILIO PENDIENTE] · {site.email}
      </p>
      <h2>Qué datos tratamos y para qué</h2>
      <ul>
        <li>
          <strong>Formularios de presupuesto, test AI Act y recursos:</strong> nombre, email, empresa, teléfono (opcional) y la
          información que nos facilites. Finalidad: responder a tu solicitud, enviarte el resultado o el recurso y, en su caso,
          preparar una propuesta.
        </li>
        <li>
          <strong>Reserva de diagnóstico:</strong> los datos que introduces en el calendario de reservas (Cal.com).
        </li>
        <li>
          <strong>Analítica:</strong> solo si aceptas las cookies analíticas. Ver la <a href="/cookies">política de cookies</a>.
        </li>
      </ul>
      <h2>Base jurídica</h2>
      <p>Tu consentimiento y la aplicación de medidas precontractuales a petición tuya.</p>
      <h2>Conservación</h2>
      <p>Mientras dure la relación y, después, durante los plazos legales aplicables. Las solicitudes sin relación posterior se suprimen a los [PENDIENTE] meses.</p>
      <h2>Encargados del tratamiento</h2>
      <p>
        Proveedores que nos ayudan a prestar el servicio: alojamiento web (Vercel), envío de email (Resend), reservas (Cal.com) y
        analítica (Google, solo con consentimiento). Algunos pueden tratar datos fuera del EEE con las garantías adecuadas.
      </p>
      <h2>Tus derechos</h2>
      <p>
        Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a{" "}
        {site.email}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).
      </p>
    </LegalPage>
  );
}
