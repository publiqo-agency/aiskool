import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata = { ...pageMetadata({ title: "Aviso legal", description: `Aviso legal de ${site.name}.`, path: "/aviso-legal" }), robots: { index: false } };

export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso legal" path="/aviso-legal">
      <h2>Titular del sitio web</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se
        informa de que este sitio web es titularidad de:
      </p>
      <ul>
        <li>Razón social: {site.legalName}</li>
        <li>NIF/CIF: [PENDIENTE]</li>
        <li>Domicilio: [PENDIENTE]</li>
        <li>Datos registrales: [PENDIENTE]</li>
        <li>Email: {site.email}</li>
      </ul>
      <h2>Objeto</h2>
      <p>Este sitio web ofrece información sobre los servicios de formación y consultoría en inteligencia artificial para empresas.</p>
      <h2>Propiedad intelectual</h2>
      <p>
        Los contenidos de este sitio (textos, diseño, código e ilustraciones) son propiedad del titular o se usan con autorización. Los
        logotipos de empresas clientes se muestran con su consentimiento y pertenecen a sus respectivos titulares.
      </p>
      <h2>Responsabilidad</h2>
      <p>
        La información sobre normativa (incluido el Reglamento Europeo de IA y la protección de datos) tiene carácter divulgativo y
        no constituye asesoramiento jurídico. El titular presta servicios de formación, documentación y consultoría técnica en
        inteligencia artificial; no presta servicios de abogacía ni certifica el cumplimiento normativo de sus clientes, que sigue
        siendo responsabilidad de cada empresa.
      </p>
      <p>
        Los certificados que se entregan al finalizar las formaciones son certificados de aprovechamiento propios y no constituyen
        títulos oficiales ni certificados de profesionalidad.
      </p>
      <h2>Legislación aplicable</h2>
      <p>Este aviso se rige por la legislación española.</p>
    </LegalPage>
  );
}
