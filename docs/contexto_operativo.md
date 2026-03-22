# Contexto Operativo: Página Web Corporativa T3 Advisors

> Documento de referencia para el proyecto `t3-web`. Contiene todas las decisiones arquitectónicas, guía de setup para el humano, y el contenido completo del CLAUDE.md del repo web.
>
> **Fecha de creación**: 2026-03-21
> **Estado**: Aprobado para implementación

---

## 1. Propósito del sitio

Dos funciones:

1. **Vitrina corporativa**: Cuando los materiales (teasers, CIMs) circulen en redes de brokers, quien busque "T3 Advisors" debe encontrar un sitio profesional que comunique quiénes somos, qué hacemos, y cómo contactarnos.
2. **Portafolio con "teoría del bikini"**: Mostrar lo suficiente para que un inversionista se interese (verticales, ubicación general, rango de tamaño/precio), pero NO lo suficiente para que pueda contactar al activo directamente sin T3. El portafolio completo se abre bajo NDA tras contacto.

Fernando marcó esto como prioridad de inbound.

**Contexto técnico**: Ni Guillermo ni Fernando programan. Todo el desarrollo se hace con Claude Code. Las decisiones de stack se basan en méritos técnicos, no en familiaridad previa.

---

## 2. Decisiones arquitectónicas

### 2.1 Repo separado

Repo `t3-advisors/t3-web` en GitHub, clon local en `/Users/guille/Projects/T3 Advisors/repos/t3-web/`.

- El vault de T3 Advisors vive en Google Drive (sincronizado); un repo de código NO debe estar ahí
- t3-tasks es herramienta interna (ops.t3-advisors.com); el sitio web es público (t3-advisors.com)
- Propósitos distintos, pipelines de deploy independientes, CLAUDE.md separados
- La org GitHub `t3-advisors` ya existe (owner: guillermotovar-max)
- Todos los repos locales viven en `/Users/guille/Projects/T3 Advisors/repos/` (t3-tasks, t3-backlog, t3-web)

### 2.2 Stack técnico

| Capa | Elección | Justificación técnica |
|------|----------|----------------------|
| Framework | Next.js 16 (App Router) | SSG/SSR nativo; mejor soporte i18n del ecosistema; la infraestructura Vercel+Supabase ya existe por t3-tasks; roadmap incluye features dinámicos (auth, portal inversionistas) que frameworks estáticos como Astro/Hugo no soportan bien |
| Estilos | Tailwind CSS v4 + shadcn/ui | Componentes accesibles pre-hechos; paleta de marca se mapea a CSS variables; Claude Code los genera con alta calidad |
| Tipografía | Inter (via `next/font/google`) | Sans-serif institucional; 2 pesos (400, 600) |
| Idioma código | TypeScript | Type safety; mejor autocompletado para Claude Code |
| Icons | Lucide React | Consistencia con t3-tasks; amplia biblioteca |
| Deploy | Vercel | Cuenta ya existe; un solo lugar para dominios (t3-advisors.com + ops.t3-advisors.com) |
| Contenido | MDX en el repo | Sin dependencia de CMS; Claude Code edita directo |
| i18n | `next-intl` con `/es` y `/en` | Best-in-class para App Router; routing, metadata, y server components |
| Forms | Supabase (mismo proyecto `t3-tasks`) | Solo una tabla `leads`; no justifica proyecto nuevo |
| Analytics | Vercel Analytics | Free tier, zero config |

**¿Por qué Next.js y no Astro/Hugo?** Astro es excelente para sitios puramente estáticos, pero el roadmap de T3 incluye: zona autenticada para inversionistas, portafolio dinámico con filtros, formularios que escriben a Supabase, y eventual portal post-NDA. Next.js soporta todo esto nativamente. Además, la infraestructura (Vercel, Supabase, patrones de `@supabase/ssr`) ya existe y funciona por t3-tasks.

### 2.3 Dominio (DNS en GoDaddy)

- `t3-advisors.com` (apex) y `www.t3-advisors.com` → proyecto Vercel `t3-web`
- `ops.t3-advisors.com` → sigue apuntando a `t3-tasks` (sin cambios)
- Google Workspace (email) no se toca: los MX records son independientes de A/CNAME
- GoDaddy es el registrar Y el DNS host

### 2.4 Supabase: tabla `leads` en proyecto existente

Usar el mismo proyecto Supabase de t3-tasks (`xbmsyyekhmjqzegqducc`). Solo agregar una tabla `leads`:

```sql
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  phone text,
  message text,
  source text default 'website',
  language text default 'es',
  vertical_interest text[],
  created_at timestamptz default now(),
  status text default 'new'
);

alter table public.leads enable row level security;
create policy "Anyone can submit" on public.leads for insert with check (true);
create policy "Auth users can read" on public.leads for select using (auth.role() = 'authenticated');
```

### 2.5 Sin dark mode

Paleta de marca diseñada para light mode. Dark mode agrega complejidad sin beneficio para un sitio público.

### 2.6 Español primero

- `t3-advisors.com/es/` — español (default, redirect desde `/`)
- `t3-advisors.com/en/` — inglés
- Audiencia primaria habla español (diáspora + locales). Inglés para inversores internacionales que llegan por referral.

### 2.7 Logo

- `final_1_bold_tight` seleccionado
- Usar PNG inicialmente; exportar a SVG cuando sea posible
- Archivo fuente: `_compartido/contexto/marca/logo-drafts/final_1_bold_tight.png`

---

## 3. Sitemap

```
/[locale]/                    → Home (hero + propuesta de valor + sectores + CTA)
/[locale]/about               → Quiénes somos (posicionamiento, equipo, cómo operamos)
/[locale]/services            → Qué hacemos (proceso de 3 pasos)
/[locale]/sectors             → Verticales (RE, HOS, AG, IND, HC)
/[locale]/portfolio           → Portafolio ("teoría del bikini": abrebocas + conteos)
/[locale]/contact             → Formulario de contacto
/[locale]/privacy             → Política de privacidad
```

### Contenido por página

**Home**: Hero con "Acceso + Traducción", la oportunidad Venezuela (2-3 oraciones basadas en `caso_inversion_venezuela.md`), 3 cards de servicio (Preparar, Conectar, Cerrar), grid de 5 sectores con conteo de oportunidades, snapshot de portafolio (3-5 destacados ciegos), CTA contacto.

**About**: Posicionamiento de firma (de `identidad_marca_ES.md` §1-3): qué es T3, cómo operamos, cómo te llevamos a invertir en Venezuela. 3 perfiles de equipo por rol (Founding Partner, Strategy & International Relations, Technology & Systems). Sin sección de valores. Sin sección de "qué no somos".

**Services**: Proceso de 3 pasos (de `oferta_servicios_onepager.md`): preparar activo, encontrar compradores, acompañar transacción. Cómo trabajamos con especialistas (coordinación, no ejecución). Las 7 competencias (de `alcance_servicios_transaccionales.md`). Sin mención de fee structure en ninguna parte.

**Sectors**: Grid de 5 verticales (Real Estate, Hospitality, Agribusiness, Industrial/Energy, Healthcare) con descripción del tipo de oportunidades en cada una y conteo actual de oportunidades activas.

**Portfolio** ("teoría del bikini"):
- Resumen por vertical: "X oportunidades en Real Estate, Y en Hospitality..." etc.
- 15-25 oportunidades curadas como abrebocas. Cada una muestra SOLO: vertical, ubicación general (estado/región, nunca dirección), tipo de activo, rango de tamaño, rango de precio, un highlight de 1-2 oraciones.
- Sin nombres de activos, sin direcciones, sin nombres de vendedores, sin fotos identificables.
- CTA prominente: "Solicite acceso a nuestro portafolio completo bajo NDA"
- Futuro: esta página evoluciona a portal dinámico con filtros y zona autenticada.

**Contact**: Formulario (nombre, email, empresa, teléfono, mensaje, verticales de interés checkbox) → Supabase `leads`. Confirmación: "Le contactaremos en 48 horas". Datos de contacto directo (email, teléfono).

**Privacy**: Política de privacidad estándar. Cumplimiento básico.

---

## 4. Paleta de marca

Los colores ya están definidos y aprobados (de `paleta_colores.md`). Se traducen a CSS variables al implementar:

| Nombre | Hex | HSL | Uso |
|--------|-----|-----|-----|
| Forest Green | `#1B4332` | 155 58% 18% | Primary: navbar fondo, CTAs primarios, headings |
| Charcoal | `#2D3436` | 192 9% 19% | Body text (nunca negro puro), footer fondo |
| Antique Gold | `#C9A84C` | 44 55% 54% | Acento (máx 10%): bordes CTAs secundarios, iconos, separadores |
| Warm White | `#F8F6F0` | 47 33% 96% | Background (nunca blanco puro), texto sobre fondos oscuros |
| Stone Gray | `#D5CEC0` | 36 12% 79% | Backgrounds secundarios, texto sobre footer, bordes sutiles |

Reglas estrictas:
- Body text SIEMPRE Charcoal, NUNCA negro puro (#000)
- Background SIEMPRE Warm White, NUNCA blanco puro (#fff)
- Antique Gold SOLO como acento (bordes, iconos, separadores), NUNCA como fondo ni en bloques de texto
- Ratio 60-30-10 (neutros, primario/secundario, acento)
- WCAG AA cumplido

---

## 5. Estructura del repo

```
/Users/guille/Projects/T3 Advisors/repos/t3-web/
├── CLAUDE.md                     ← Instrucciones para Claude Code
├── docs/
│   └── contexto_operativo.md     ← Este documento (playbook completo)
├── public/
│   ├── logo/                     ← Logo T3 (PNG inicial, SVG cuando se exporte)
│   └── og/                       ← Open Graph images
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx          ← Home
│   │   │   ├── about/page.tsx
│   │   │   ├── services/page.tsx
│   │   │   ├── sectors/page.tsx
│   │   │   ├── portfolio/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   └── privacy/page.tsx
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                   ← shadcn/ui
│   │   ├── layout/               ← navbar, footer, locale-switcher
│   │   └── sections/             ← hero, team-grid, sectors-grid, portfolio-grid, contact-form, cta-band
│   ├── content/
│   │   ├── es/                   ← MDX content en español
│   │   └── en/                   ← MDX content en inglés
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── utils.ts
│   │   └── metadata.ts
│   └── i18n/
│       ├── config.ts
│       └── messages/
│           ├── es.json           ← Strings de UI (nav, botones, footer)
│           └── en.json
├── next.config.ts
├── package.json
├── .env.local                    ← NEXT_PUBLIC_SUPABASE_URL + ANON_KEY
└── .gitignore
```

---

## 6. Flujo de contenido: Vault → Web

El contenido se traduce una sola vez de los documentos fuente del vault a MDX en el repo web. No hay acoplamiento en build time con Google Drive.

| Fuente en vault | Página web |
|-----------------|------------|
| `identidad_marca_ES.md` (§1-3) | About (posicionamiento, equipo) |
| `identidad_marca_EN.md` | About versión inglés |
| `oferta_servicios_onepager.md` | Services (proceso de 3 pasos) |
| `alcance_servicios_transaccionales.md` | Services (7 competencias, coordinación) |
| `guion_ventas.md` | Home (3 cards servicio) |
| `paleta_colores.md` | globals.css (tema completo) |
| `caso_inversion_venezuela.md` | Home hero (tesis macro Venezuela) |
| Expedientes (curados, datos ciegos) | Portfolio (abrebocas, conteos por vertical) |

Ruta de los archivos fuente en el vault (Google Drive local):
`/Users/guille/Library/CloudStorage/GoogleDrive-guillermo.tovar@t3-advisors.com/Unidades compartidas/T3 Advisors/T3 Advisors/_compartido/contexto/`

---

## 7. Guía paso a paso: lo que el humano debe hacer

Estas son las tareas que requieren acción humana (cuentas, configuración de servicios, DNS). Claude Code no puede hacerlas.

### Paso 1: Crear repo en GitHub

1. Ir a https://github.com/organizations/t3-advisors/repositories/new
2. Nombre: `t3-web`
3. Visibilidad: Private
4. NO inicializar con README (Claude Code hará el scaffold)
5. Crear

> **COMPLETADO**: Repo creado el 2026-03-22.

### Paso 2: Clonar y preparar localmente

```bash
cd "/Users/guille/Projects/T3 Advisors/repos"
git clone https://github.com/t3-advisors/t3-web.git
cd t3-web
```

> **COMPLETADO**: Repo clonado el 2026-03-22.

### Paso 3: Crear proyecto en Vercel

1. Ir a https://vercel.com/dashboard (misma cuenta de t3-tasks)
2. "Add New" → "Project"
3. Importar `t3-advisors/t3-web` desde GitHub
4. Framework Preset: Next.js
5. Root Directory: `./` (default)
6. NO hacer deploy todavía (no hay código aún); se puede hacer skip del primer deploy
7. Ir a Settings → Domains → Agregar `t3-advisors.com` y `www.t3-advisors.com`
8. Vercel mostrará los records DNS que necesitas configurar (confirmar que son A `76.76.21.21` para apex y CNAME `cname.vercel-dns.com` para www)

### Paso 4: Configurar DNS en GoDaddy

1. Ir a https://dcc.godaddy.com/control/dns (o GoDaddy → My Products → DNS)
2. Seleccionar `t3-advisors.com`
3. Agregar registros:
   - **Type**: A, **Name**: `@`, **Value**: `76.76.21.21`, **TTL**: 600
   - **Type**: CNAME, **Name**: `www`, **Value**: `cname.vercel-dns.com`, **TTL**: 600
4. **NO TOCAR** los registros MX (son del email de Google Workspace)
5. **NO TOCAR** el registro de `ops` (es de t3-tasks)
6. Verificar en Vercel que el dominio queda "Valid Configuration" (puede tardar hasta 48h, normalmente minutos)

### Paso 5: Crear tabla `leads` en Supabase

1. Ir a https://supabase.com/dashboard → proyecto `t3-tasks` (es el mismo proyecto compartido)
2. SQL Editor → New query
3. Pegar y ejecutar el SQL de la sección 2.4 (tabla `leads`)
4. Verificar en Table Editor que la tabla `leads` existe

### Paso 6: Variables de entorno en Vercel

1. En Vercel → proyecto `t3-web` → Settings → Environment Variables
2. Agregar:
   - `NEXT_PUBLIC_SUPABASE_URL` = (misma URL que t3-tasks: `https://xbmsyyekhmjqzegqducc.supabase.co`)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (misma anon key que t3-tasks; está en `/Users/guille/Projects/T3 Advisors/repos/t3-tasks/.env.local`)
3. Scope: Production, Preview, Development

### Paso 7: Variables de entorno locales

```bash
cd ~/repos/t3-web
# Crear .env.local con las mismas keys de Supabase
cp /Users/guille/Projects/T3 Advisors/repos/t3-tasks/.env.local .env.local
# Luego editar para quitar SUPABASE_SERVICE_ROLE_KEY si no se necesita
```

### Paso 8: Exportar logo a SVG (cuando sea posible)

El logo `final_1_bold_tight.png` está en el vault en `_compartido/contexto/marca/logo-drafts/`. Para el web:
1. Copiar el PNG a `/Users/guille/Projects/T3 Advisors/repos/t3-web/public/logo/t3-logo.png`
2. Cuando se tenga acceso a Logo Diffusion o herramienta vectorial, exportar a SVG
3. Reemplazar el PNG por SVG en el código

### Después de estos pasos

Abrir Claude Code en `/Users/guille/Projects/T3 Advisors/repos/t3-web/` y comenzar con Fase 0 (scaffold). Claude leerá el CLAUDE.md del repo y tendrá todo el contexto.

---

## 8. CLAUDE.md del repo web

El siguiente bloque es el contenido completo que debe copiarse a `/Users/guille/Projects/T3 Advisors/repos/t3-web/CLAUDE.md`:

---

```markdown
# CLAUDE.md — T3 Advisors Website

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
```

---

## 9. Fases de construcción (para sesiones futuras)

### Fase 0: Scaffold
- Claude Code en `/Users/guille/Projects/T3 Advisors/repos/t3-web/`
- `npx create-next-app@latest` con TS, Tailwind, App Router
- Instalar deps: `next-intl`, `@supabase/supabase-js`, `@supabase/ssr`, shadcn/ui
- Configurar tema de marca en `globals.css` (paleta T3)
- Layout básico: navbar (Forest Green) + footer (Charcoal) con logo
- Configurar i18n (español default, inglés)
- Copiar logo PNG a `public/logo/`
- Push inicial a GitHub

### Fase 1: Landing Page MVP
- Home page completa (hero, 3 cards servicio, grid sectores, CTA contacto)
- Footer con texto legal
- Solo español (bilingual en Fase 2)
- Deploy a Vercel, verificar dominio `t3-advisors.com`

### Fase 2: Sitio completo
- About, Services, Sectors, Portfolio, Contact, Privacy
- Contenido en español desde documentos fuente del vault
- Traducción inglés de todas las páginas
- Locale switcher en navbar
- Formulario de contacto → Supabase `leads`
- Portfolio: abrebocas curados desde expedientes del vault

### Fase 3: SEO y polish
- JSON-LD en todas las páginas (Organization, WebSite, BreadcrumbList, Service)
- OG images estáticas
- Sitemap automático, robots.txt, hreflang tags
- Meta descriptions bilingual
- Lighthouse audit (objetivo: >90 en Performance, Accessibility, SEO)
- Favicon desde logo

### Fase 4: Futuro (fuera de scope inicial)
- Blog / insights (MDX)
- Portafolio dinámico (filtros, búsqueda)
- Zona de inversionistas (acceso autenticado, documentos post-NDA)
- Páginas individuales por sector
- Mapa interactivo de oportunidades
- Newsletter signup

---

## 10. Riesgos y mitigaciones

| Riesgo | Mitigación |
|--------|------------|
| Logo PNG, no SVG | Usar PNG inicialmente; exportar a SVG con herramienta vectorial cuando sea posible |
| Portfolio revela demasiado | Curación estricta: solo vertical + ubicación general + rango. Nunca nombres ni direcciones |
| DNS rompe email | Solo agregar A/CNAME; nunca tocar MX records |
| Spam en formulario | Honeypot field + rate limiting (Vercel Edge Middleware) |
| Contenido diverge del vault | Un solo pase de autoría desde documentos fuente; MDX en el repo es canónico para web |
