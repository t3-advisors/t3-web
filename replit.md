# T3 Advisors — Corporate Website

## Stack
- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind v4 + inline styles para componentes custom
- **i18n**: next-intl, bilingual ES/EN — español como idioma principal
- **Mockup sandbox**: Vite + React en `artifacts/mockup-sandbox/` (puerto 23636)
- **Puerto producción**: 5000

## Brand System
- Forest Green `#1B4332` — color principal, fondos oscuros `#0D2318`
- Antique Gold `#C9A84C` — acentos, separadores, botones primarios
- Warm White `#F8F6F0` — fondo base
- Montserrat — tipografía de encabezados
- Source Sans 3 — cuerpo de texto

## Estructura de rutas
```
src/app/[locale]/
  page.tsx              ← homepage actual
  about/
  investors/
  portfolio/
  sellers/
  why-venezuela/
  privacy/
  contact/
```

## Diseño de referencia — variante "CardLanguage"
`artifacts/mockup-sandbox/src/components/mockups/homepage-variant/CardLanguage.tsx`

Esta es la versión de diseño más avanzada del homepage. Contiene:
- Hero con dos CTA (Soy inversionista / Quiero vender), con hover effects
- Sección "La oportunidad" con card única y botón outline dorado
- Sección "Cómo trabajamos" — tres pasos + CTA strip de vendedores
- **Carrusel de portafolio** — 5 tarjetas, auto-avance 3.6s, navegación por dots y flechas
- Sección "Seis sectores estratégicos" con iconos Lucide
- Globo ortográfico SVG — "Presencia local, alcance internacional"
- CTA final de dos columnas (inversionistas / vendedores)
- Footer

**PENDIENTE**: Graduar este diseño al `src/app/[locale]/page.tsx` real y aplicarlo como homepage de producción.

## Convenciones de diseño (standard de sección)
- Encabezado: left-align, Montserrat 600, `letterSpacing: "-0.02em"`
- Barra dorada: `{width:64, height:4, backgroundColor:"#C9A84C", borderRadius:2, marginTop:14}`
- Subtítulo: 19px
- Secciones alternas: fondo `#F2EFE8` (crema) / `#F8F6F0` (blanco cálido) / `#0D2318` (verde oscuro)

## Botones
- **GoldBtn** (sólido dorado): background `#C9A84C`, hover oscurece a `#b8932e` + sombra + translateY(-1px)
- **Outline verde**: transparent + border `#1B4332`, hover: tinte sutil `rgba(27,67,50,0.07)` + shadow, NO relleno sólido
- **Outline dorado**: transparent + border gold, hover: warm white fill + shadow

## Base de datos
- Replit PostgreSQL nativo — por configurar (sin Supabase/Vercel)

## Post-merge
Script en `scripts/post-merge.sh` — instala dependencias del proyecto raíz y del mockup sandbox.
