import type { Metadata } from "next";
import { createElement } from "react";
import { site } from "./site";

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

/** Metadata coherente por página (title, description, canonical, OG). */
export function pageMetadata({ title, description, path, type = "website" }: { title: string; description: string; path: string; type?: "website" | "article" }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type, siteName: site.name, locale: "es_ES" },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** <script type="application/ld+json"> con escape de "<" (prevención XSS). */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data).replace(/</g, "\\u003c") },
  });
}

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: { "@type": "Country", name: "España" },
  knowsAbout: ["Inteligencia artificial", "Alfabetización en IA", "AI Act", "IA generativa", "Agentes de IA", "Automatización"],
});

export const faqJsonLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
});

export const courseJsonLd = (c: { title: string; description: string; path: string; duration: string; formats: string[] }) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: c.title,
  description: c.description,
  url: absoluteUrl(c.path),
  inLanguage: "es",
  provider: { "@type": "Organization", name: site.name, sameAs: site.url },
  hasCourseInstance: c.formats.map((f) => ({
    "@type": "CourseInstance",
    courseMode: f.includes("presencial") ? "onsite" : "online",
    courseWorkload: c.duration,
  })),
});

export const articleJsonLd = (a: { title: string; description: string; path: string; date: string; updated?: string; author?: string; image?: string; section?: string }) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: a.title,
  description: a.description,
  datePublished: a.date,
  dateModified: a.updated ?? a.date,
  // Sin autor con nombre, firma la organización (no se inventan personas).
  author: a.author ? { "@type": "Person", name: a.author } : { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
  publisher: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
  mainEntityOfPage: absoluteUrl(a.path),
  ...(a.image && { image: absoluteUrl(a.image) }),
  ...(a.section && { articleSection: a.section }),
  inLanguage: "es",
});
