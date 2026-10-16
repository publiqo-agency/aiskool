/**
 * Páginas locales. TODO(cliente): añadir datos reales por ciudad (clientes de la zona, sedes,
 * formadores locales) para que cada página aporte contenido propio y no sea una copia.
 */
export const ciudades = [
  { slug: "madrid", name: "Madrid", region: "Comunidad de Madrid", focus: "sedes corporativas, consultoría, banca y sector público" },
  { slug: "barcelona", name: "Barcelona", region: "Cataluña", focus: "tecnología, retail, industria y startups" },
  { slug: "valencia", name: "Valencia", region: "Comunitat Valenciana", focus: "industria, logística, agroalimentación y turismo" },
  { slug: "sevilla", name: "Sevilla", region: "Andalucía", focus: "servicios, turismo, aeronáutica y agroindustria" },
  { slug: "bilbao", name: "Bilbao", region: "País Vasco", focus: "industria, ingeniería, energía y finanzas" },
  { slug: "malaga", name: "Málaga", region: "Andalucía", focus: "tecnología, turismo y servicios" },
  { slug: "zaragoza", name: "Zaragoza", region: "Aragón", focus: "logística, automoción e industria" },
] as const;

export const getCiudad = (slug: string) => ciudades.find((c) => c.slug === slug);
