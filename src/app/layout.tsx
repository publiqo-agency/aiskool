import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Sans, IBM_Plex_Mono, Outfit } from "next/font/google";
import { site } from "@/lib/site";
import { JsonLd, organizationJsonLd } from "@/lib/seo";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Analytics } from "@/components/ui/Analytics";
import { VariantPill } from "@/components/variant/VariantPill";
import { variantBootScript } from "@/lib/variant";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], axes: ["wdth"], display: "swap" });
const instrument = Instrument_Sans({ variable: "--font-instrument", subsets: ["latin"], display: "swap" });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });
/** Sans geométrica de la versión «Color» */
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Formación en IA para empresas | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: "es_ES", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d0e11",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-variant="actual"
      suppressHydrationWarning
      className={`${archivo.variable} ${instrument.variable} ${plexMono.variable} ${outfit.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: variantBootScript }} />
      </head>
      <body className="min-h-dvh">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded focus:bg-surface focus:px-4 focus:py-2">
          Saltar al contenido
        </a>
        <JsonLd data={organizationJsonLd()} />
        <SmoothScroll />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        {process.env.NEXT_PUBLIC_HIDE_VARIANT_PILL !== "1" && <VariantPill />}
      </body>
    </html>
  );
}
