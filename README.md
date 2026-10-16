# Web de formación en IA para empresas

Web de una empresa de formación en inteligencia artificial para empresas: alfabetización en IA (art. 4 del AI Act), herramientas (ChatGPT, Claude, Copilot, Gemini), formación por departamento, agentes y automatización.

## Stack

- Next.js 16 (App Router, Cache Components) + TypeScript + Tailwind v4
- GSAP (ScrollTrigger, SplitText) + Lenis para el movimiento
- three.js + @react-three/fiber para los campos de partículas
- Embla para los carruseles
- MDX para el blog
- Resend para el email, Cal.com para las reservas, GTM/GA4 con Consent Mode
- Despliegue en Vercel

## Desarrollo

```bash
npm install
npm run dev
```

Las variables de entorno están en `.env.example`.

## Dónde se cambia cada cosa

| Qué | Dónde |
|---|---|
| Marca, precios, cifras, testimonios, FAQ | `src/lib/site.ts` |
| Catálogo de formaciones | `src/lib/formaciones.ts` |
| Blog (MDX) y roadmap de contenidos | `content/blog/` |
| Logos de clientes | `public/logos/` |
| Tokens de diseño | `src/app/globals.css` |
| Pendientes (FUNDAE, contenido, configuración) | `PENDING.md` |

## Movimiento

- **Componentes de movimiento** (`src/components/motion/`):
  - `SplitReveal`: titulares línea a línea.
  - `DotIllustration`: dibujos de puntos en canvas 2D.
  - `CountUp`: contadores.
  - `SmoothScroll`: scroll suave con Lenis sincronizado con GSAP.
- **Partículas** (`src/components/three/`): un solo `ParticleCanvas` con varias formas (`sphere`, `tunnel`, `terrain`, `torus`, `cloud`). Se carga en diferido y se pausa fuera de pantalla.
- **Reducir movimiento:** todo respeta `prefers-reduced-motion`.
