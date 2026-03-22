# CLAUDE.md — T3 Advisors Website

@AGENTS.md

## Qué es este proyecto

Sitio web corporativo de T3 Advisors (t3-advisors.com). Dos funciones:
1. Vitrina institucional: quiénes somos, qué hacemos, cómo contactarnos
2. Portafolio con "teoría del bikini": abrebocas de oportunidades (sin nombres ni datos identificables) que generen interés para contactar a T3

## Stack

- Next.js 16+ (App Router, TypeScript)
- Tailwind CSS v4 + shadcn/ui
- next-intl (i18n: /es y /en, español es default)
- Supabase (tabla leads para formulario de contacto)
- Vercel (deploy)
- MDX para contenido

## Paleta de marca (obligatoria)

| Color | Hex | HSL | Uso |
|-------|-----|-----|-----|
| Forest Green | #1B4332 | 155 58% 18% | Primary: navbar, CTAs, headings |
| Charcoal | #2D3436 | 192 9% 19% | Body text, footer fondo |
| Antique Gold | #C9A84C | 44 55% 54% | Acento (máx 10%): bordes, iconos |
| Warm White | #F8F6F0 | 47 33% 96% | Background principal |
| Stone Gray | #D5CEC0 | 36 12% 79% | Backgrounds secundarios, bordes |

Reglas estrictas:
- Body text SIEMPRE Charcoal, NUNCA negro puro (#000)
- Background SIEMPRE Warm White, NUNCA blanco puro (#fff)
- Antique Gold SOLO como acento (bordes, iconos, separadores), NUNCA como fondo ni en bloques de texto
- Ratio 60-30-10 (neutros, primario/secundario, acento)

## Tipografía

Inter (via next/font/google), pesos 400 y 600. Sans-serif institucional.

## Reglas de componentes

- Usar shadcn/ui para todos los componentes de UI. No crear primitivos custom.
- Lucide React para iconos.
- Sin dark mode. Solo light mode.

## Reglas de contenido

- Bilingual: español + inglés, con next-intl
- Strings de UI (nav, botones, footer) en archivos JSON de i18n
- Contenido largo (about, services) en archivos MDX separados por idioma
- NUNCA revelar en el portfolio: nombres de activos, direcciones, nombres de vendedores, fotos identificables
- Portfolio muestra SOLO: vertical, ubicación general (estado/región), tipo de activo, rango de tamaño, rango de precio, highlight genérico

## Reglas de SEO

- Cada página necesita: title, description, og:image, JSON-LD structured data
- hreflang tags para ES/EN
- Sitemap automático
- robots.txt

## Supabase

- Proyecto compartido con t3-tasks
- URL y anon key en .env.local
- Tabla leads para formulario de contacto
- Usar @supabase/ssr para client-side

## Documentos fuente (en el vault de T3, Google Drive)

Ruta base: /Users/guille/Library/CloudStorage/GoogleDrive-guillermo.tovar@t3-advisors.com/Unidades compartidas/T3 Advisors/T3 Advisors/

- _compartido/contexto/marca/identidad_marca_ES.md — posicionamiento, equipo
- _compartido/contexto/marca/identidad_marca_EN.md — versión inglés
- _compartido/contexto/marca/paleta_colores.md — paleta completa
- _compartido/contexto/proceso_comercial/oferta_servicios_onepager.md — proceso de 3 pasos
- _compartido/contexto/fundamentos/alcance_servicios_transaccionales.md — 7 competencias
- _compartido/contexto/marca/logo-drafts/final_1_bold_tight.png — logo seleccionado

## Contexto operativo completo

Ver docs/contexto_operativo.md para decisiones arquitectónicas, sitemap detallado, guía de setup, y fases de construcción.
