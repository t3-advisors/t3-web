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
- Supabase (leads, portfolio_items, team_members, site_metrics + Storage bucket team-photos)
- Vercel (deploy)
- Contenido híbrido: MDX/i18n JSON (estático) + Supabase CMS (dinámico)

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

- **Headings**: Montserrat SemiBold (600) via next/font/google
- **Body**: Source Sans 3 Regular (400), SemiBold (600) via next/font/google
- Montserrat es la fuente establecida en todos los materiales impresos (teasers, pitch decks, one-pagers); se mantiene para headings por consistencia cross-channel
- Source Sans 3 para body por legibilidad en pantalla y tono institucional (no startup)

## Reglas de componentes

- Usar shadcn/ui para todos los componentes de UI. No crear primitivos custom.
- Lucide React para iconos.
- Sin dark mode. Solo light mode.

## Sitemap

```
/[locale]/                → Home
/[locale]/why-venezuela   → ¿Por qué Venezuela? (tesis macro)
/[locale]/investors       → Para Inversionistas (proceso, aliados, riesgos)
/[locale]/sellers         → Para Vendedores (6 fases, FAQ, por qué T3)
/[locale]/portfolio       → Portafolio (blind profiles + filtros)
/[locale]/about           → Sobre Nosotros (equipo, modelo operativo)
/[locale]/contact         → Contacto
/[locale]/privacy         → Política de privacidad
/admin/*                  → Admin CMS (Supabase Auth)
```

## Reglas de contenido

- Bilingual: español + inglés, con next-intl. Español es default.
- Strings de UI (nav, botones, footer) en archivos JSON de i18n
- Contenido largo (about, why-venezuela, investors, sellers) en archivos MDX separados por idioma
- Copy y layout detallado de cada página en `docs/propuesta_layout_y_copy.md`
- NUNCA revelar en el portfolio: nombres de activos, direcciones, nombres de vendedores, fotos identificables
- Portfolio muestra SOLO: vertical, tipo de transacción, ubicación general (estado/región), tipo de activo, rango de tamaño, rango de precio, highlight genérico
- Tipos de transacción en la web: solo Venta y Capital Raise (Servicios S- no se incluye)
- Tono: directo, informado, honesto sobre el riesgo, urgente sin presión, bilingüe nativo

## Admin CMS (/admin)

Panel ligero en `t3-advisors.com/admin` para que humanos editen contenido dinámico sin Claude Code. Protegido con Supabase Auth (mismos usuarios que t3-tasks).

Contenido dinámico (en Supabase, editable via admin O Claude Code via REST API):
- `portfolio_items`: qué oportunidades se muestran en el portafolio, orden, datos ciegos bilingües
- `team_members`: equipo en la página About (nombre, rol, bio, foto)
- `site_metrics`: conteos y métricas mostrados en Home (stat bar, verticales)

Contenido estático (en MDX/i18n JSON, editable via Claude Code):
- Tesis Venezuela (why-venezuela), proceso inversionistas, proceso vendedores, about, privacy, textos de UI

Las páginas públicas leen de Supabase via Server Components con revalidación (~5 min). Tras save en admin, `revalidatePath` refresca las páginas. Fallback a datos estáticos si las tablas están vacías.

## Supabase

- Proyecto compartido con t3-tasks
- URL y anon key en .env.local
- Tablas: `leads` (contacto), `portfolio_items`, `team_members`, `site_metrics` (CMS)
- Storage bucket: `team-photos` (público, fotos de equipo)
- Usar @supabase/ssr para server/client
- RLS: anon lee published items; authenticated tiene full CRUD
- Claude Code usa service role key para bypass RLS (REST API)

## Reglas de SEO

- Cada página necesita: title, description, og:image, JSON-LD structured data
- hreflang tags para ES/EN
- Sitemap automático
- robots.txt

## Documentos fuente (en el vault de T3, Google Drive)

Ruta base: /Users/guille/Library/CloudStorage/GoogleDrive-guillermo.tovar@t3-advisors.com/Unidades compartidas/T3 Advisors/T3 Advisors/

- _compartido/contexto/marca/identidad_marca_ES.md — posicionamiento, tono, equipo
- _compartido/contexto/marca/identidad_marca_EN.md — versión inglés
- _compartido/contexto/marca/paleta_colores.md — paleta completa
- _compartido/contexto/mercado/caso_inversion_venezuela.md — tesis macro (why-venezuela, Home)
- _compartido/contexto/fundamentos/alcance_servicios_transaccionales.md — 6 fases del proceso (sellers)
- _compartido/contexto/proceso_comercial/oferta_servicios_onepager.md — proceso simplificado 3 pasos
- _compartido/contexto/proceso_comercial/guion_ventas.md — FAQ y argumentario (sellers, Home)
- _compartido/contexto/marca/logo-drafts/final_1_bold_tight.png — logo seleccionado

## Documentos del proyecto web

- docs/contexto_operativo.md — decisiones técnicas, stack, deploy, fases
- docs/propuesta_layout_y_copy.md — copy completo, layout por sección, notas de diseño (source of truth de contenido)
- docs/conceptualizacion_contenido.md — documento maestro de decisiones conceptuales

## Contexto operativo completo

Ver docs/contexto_operativo.md para decisiones arquitectónicas, sitemap detallado, guía de setup, y fases de construcción.
