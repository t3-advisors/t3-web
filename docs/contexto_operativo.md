# Contexto Operativo: Página Web Corporativa T3 Advisors

> Documento de referencia técnico para el proyecto `t3-web`. Contiene decisiones arquitectónicas, guía de setup para el humano, y el contenido del CLAUDE.md del repo web.
>
> **Fecha de creación**: 2026-03-21
> **Última reconciliación**: 2026-03-22 (alineado con `web_propuesta_layout_y_copy.md`)
> **Estado**: Aprobado para implementación
>
> **Source of truth para contenido y estructura de páginas**: `web_propuesta_layout_y_copy.md`
> **Este documento**: decisiones técnicas, stack, Supabase, deploy, fases de construcción

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

| Capa          | Elección                                                            | Justificación técnica                                                                                                                                                                                                                    |
| ------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework     | Next.js 16 (App Router)                                             | SSG/SSR nativo; mejor soporte i18n del ecosistema; la infraestructura Vercel+Supabase ya existe por t3-tasks; roadmap incluye features dinámicos (auth, portal inversionistas) que frameworks estáticos como Astro/Hugo no soportan bien |
| Estilos       | Tailwind CSS v4 + shadcn/ui                                         | Componentes accesibles pre-hechos; paleta de marca se mapea a CSS variables; Claude Code los genera con alta calidad                                                                                                                     |
| Tipografía    | Montserrat (headings) + Source Sans 3 (body) via `next/font/google` | Montserrat es la fuente establecida en materiales impresos; Source Sans 3 para body por legibilidad y tono institucional. Pesos: 400, 600                                                                                                |
| Idioma código | TypeScript                                                          | Type safety; mejor autocompletado para Claude Code                                                                                                                                                                                       |
| Icons         | Lucide React                                                        | Consistencia con t3-tasks; amplia biblioteca                                                                                                                                                                                             |
| Deploy        | Vercel                                                              | Cuenta ya existe; un solo lugar para dominios (t3-advisors.com + ops.t3-advisors.com)                                                                                                                                                    |
| Contenido     | Híbrido: MDX + Supabase CMS                                        | Contenido estático (servicios, about, privacy) en MDX/i18n JSON, Claude Code edita directo. Contenido dinámico (portfolio, equipo, métricas) en tablas Supabase, editable via admin UI (`/admin`) o Claude Code via REST API              |
| i18n          | `next-intl` con `/es` y `/en`                                       | Best-in-class para App Router; routing, metadata, y server components                                                                                                                                                                    |
| Forms         | Supabase (mismo proyecto `t3-tasks`)                                | Solo una tabla `leads`; no justifica proyecto nuevo                                                                                                                                                                                      |
| Analytics     | Vercel Analytics                                                    | Free tier, zero config                                                                                                                                                                                                                   |

### 2.3 Dominio (DNS en GoDaddy)

- `t3-advisors.com` (apex) y `www.t3-advisors.com` → proyecto Vercel `t3-web`
- `ops.t3-advisors.com` → sigue apuntando a `t3-tasks` (sin cambios)
- Google Workspace (email) no se toca: los MX records son independientes de A/CNAME
- GoDaddy es el registrar Y el DNS host

### 2.4 Supabase: tablas en proyecto existente

Usar el mismo proyecto Supabase de t3-tasks (`xbmsyyekhmjqzegqducc`). Tablas del sitio web:

| Tabla | Propósito |
|-------|-----------|
| `leads` | Formulario de contacto público |
| `portfolio_items` | Items del portafolio (admin CMS) |
| `team_members` | Miembros del equipo (admin CMS) |
| `site_metrics` | Métricas y contadores del sitio (admin CMS) |

Storage bucket: `team-photos` (público, para fotos de equipo).

Los schemas completos de las tablas CMS están en la sección 2.8. El SQL de `leads`:

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

Diseño seleccionado: `final_1_bold_tight`. Usar PNG inicialmente; exportar a SVG cuando sea posible.

Todas las variantes viven en `_compartido/contexto/marca/logo-drafts/`:

| Archivo | Logo | Fondo | Uso |
|---------|------|-------|-----|
| `final_1_bold_tight.png` | Forest Green | Warm White | Original |
| `final_1_bold_tight_white_on_green.png` | Warm White | Forest Green | Navbar, hero, CTA bands |
| `final_1_bold_tight_gold_on_green.png` | Antique Gold | Forest Green | Alternativa premium sobre fondos oscuros |
| `final_1_bold_tight_green_transparent.png` | Forest Green | Transparente | Sobre fondos claros, documentos |
| `final_1_bold_tight_white_transparent.png` | Warm White | Transparente | Sobre fondos oscuros, overlays |
| `final_1_bold_tight_gold_transparent.png` | Antique Gold | Transparente | Sobre fondos oscuros, alternativa |
| `final_1_bold_tight_green_on_white.png` | Forest Green | Blanco puro | Uso externo, fondos no-marca |

Para la web: usar las versiones transparentes. Blanca para navbar (fondo Forest Green), verde para páginas con fondo Warm White.

### 2.8 Admin CMS (contenido dinámico via Supabase)

**Problema**: El contenido del portfolio, equipo y métricas cambia con frecuencia. Requerir una sesión de Claude Code para cada cambio menor es friccional cuando el usuario ya sabe exactamente qué quiere cambiar.

**Solución**: Un admin ligero en `t3-advisors.com/admin`, protegido con Supabase Auth (mismos usuarios que t3-tasks), que permite editar contenido dinámico directamente desde el navegador.

**Principio de diseño**: Dual-path. Ambos caminos coexisten y escriben a las mismas tablas Supabase:
- **Admin UI** (`/admin`): Humanos llenan formularios CRUD desde el navegador
- **Claude Code**: Edita vía REST API de Supabase (mismo patrón que t3-tasks en `t3-ops.md`) o directamente en código

**Qué es dinámico (Supabase) vs estático (MDX/i18n JSON)**:

| Contenido | Canal | Por qué |
|-----------|-------|---------|
| Portfolio (qué oportunidades se muestran, orden, datos ciegos) | Supabase `portfolio_items` | Cambia frecuentemente, decisión editorial humana |
| Equipo (nombres, roles, bios, fotos) | Supabase `team_members` | Cambia con incorporaciones/salidas |
| Métricas del sitio (conteos por vertical, totales) | Supabase `site_metrics` | Cambian con cada nueva oportunidad |
| Posicionamiento de firma, tesis Venezuela, proceso vendedores/inversionistas, privacy | MDX / i18n JSON | Cambian rara vez, son rediseños |
| Textos de UI (nav, botones, footer, CTAs) | i18n JSON | Cambian rara vez |

#### Tablas Supabase (mismo proyecto `t3-tasks`)

**`portfolio_items`**: Items del portafolio público (teoría del bikini).

| Campo | Tipo | Nota |
|-------|------|------|
| id | uuid PK | auto |
| opportunity_id | text nullable | Enlace opcional al vault (ej: V-HOS-03) |
| vertical | text | RE, HOS, AG, IND, HC |
| transaction_type | text | V, CR (Servicios S- no se incluye en la web) |
| location_es / location_en | text | Ubicación general bilingüe |
| asset_type_es / asset_type_en | text | Tipo de activo bilingüe |
| size_range | text nullable | Rango de tamaño |
| price_range | text nullable | Rango de precio |
| highlight_es / highlight_en | text | 1-2 oraciones ciegas bilingüe |
| status | text | draft / published |
| position | integer | Orden (menor = primero) |

RLS: anon puede SELECT donde `status = 'published'`. Authenticated tiene full access.

**`team_members`**: Miembros del equipo para la página About.

| Campo | Tipo | Nota |
|-------|------|------|
| id | uuid PK | auto |
| name | text | Nombre visible |
| role_es / role_en | text | Cargo bilingüe |
| focus_es / focus_en | text | Área de enfoque bilingüe |
| bio_es / bio_en | text | Párrafo bilingüe |
| photo_url | text nullable | URL de Supabase Storage (bucket `team-photos`) |
| status | text | draft / published |
| position | integer | Orden |

**`site_metrics`**: Métricas y contadores del sitio.

| Campo | Tipo | Nota |
|-------|------|------|
| id | uuid PK | auto |
| key | text unique | ej: `total_opportunities`, `sector_hos_count` |
| value | text | "52", "16" |
| label_es / label_en | text | Etiqueta bilingüe |
| category | text | Agrupación |
| position | integer | Orden |

RLS: anon puede SELECT todo. Authenticated tiene full access.

**Storage bucket `team-photos`**: Público, para fotos de equipo. Auth users pueden upload/delete.

#### Rutas del admin

```
/admin                    → Redirect a /admin/portfolio
/admin/login              → Login (Supabase Auth, mismos users que t3-tasks)
/admin/portfolio           → Lista de items con toggle published/draft
/admin/portfolio/new       → Crear item (formulario ES/EN side by side)
/admin/portfolio/[id]      → Editar item
/admin/team                → Lista de miembros con thumbnails
/admin/team/new            → Crear miembro + upload foto
/admin/team/[id]           → Editar miembro
/admin/metrics             → Formulario único para editar todas las métricas
```

El admin vive FUERA del route group `[locale]` (no necesita i18n, SEO, ni el layout público). El middleware compuesto aplica Supabase Auth a `/admin/*` y next-intl al resto.

#### Consumo en páginas públicas

Las páginas públicas usan Server Components que leen de Supabase con revalidación temporal (ISR ~5 min). Tras un save en el admin, `revalidatePath` refresca las páginas afectadas. Si una tabla está vacía, la página hace fallback a los datos estáticos actuales (graceful degradation).

| Página pública | Tabla Supabase | Fallback |
|----------------|----------------|----------|
| `/[locale]/portfolio` | `portfolio_items` (published) | Mensaje "contáctenos" |
| `/[locale]/about` (sección equipo) | `team_members` (published) | Datos estáticos del i18n JSON actual |
| `/[locale]/` (conteos por sector en Home) | `site_metrics` | Valores hardcoded actuales |
| `/[locale]/why-venezuela` | Ninguna (contenido estático MDX) | N/A |
| `/[locale]/investors` | Ninguna (contenido estático MDX) | N/A |
| `/[locale]/sellers` | Ninguna (contenido estático MDX) | N/A |

---

## 3. Sitemap

> Reconciliado con `web_propuesta_layout_y_copy.md` (2026-03-22). Los cambios principales vs. la versión anterior: `/services` y `/sectors` se reemplazan por `/why-venezuela`, `/investors`, `/sellers`. Las verticales se absorben como filtros en el portafolio y sección en el Home. Se agregan dos páginas nuevas orientadas a audiencia (inversionistas y vendedores).

```
/[locale]/                    → Home (hero + stat bar + tesis appetizer + qué hacemos + verticales + equipo brief + CTA)
/[locale]/why-venezuela       → ¿Por qué Venezuela? (tesis macro, tabla comparativa de precios, precedentes históricos, riesgos)
/[locale]/investors           → Para Inversionistas (proceso 7 pasos, red de aliados, riesgos, inversión extranjera)
/[locale]/sellers             → Para Vendedores (6 fases del alcance de servicios adaptadas, FAQ, por qué T3)
/[locale]/portfolio           → Portafolio (filtros por transacción + vertical, blind profiles, CTA NDA)
/[locale]/about               → Sobre Nosotros (por qué existe T3, equipo, modelo operativo)
/[locale]/contact             → Contacto (formulario + datos directos)
/[locale]/privacy             → Política de privacidad
/admin/                       → Admin CMS (redirect a /admin/portfolio)
/admin/login                  → Login (Supabase Auth)
/admin/portfolio              → CRUD de portfolio items
/admin/team                   → CRUD de miembros del equipo
/admin/metrics                → Edición de métricas del sitio
```

### Contenido por página

> Copy completo, layout detallado y notas de diseño para cada sección viven en `web_propuesta_layout_y_copy.md`. Aquí solo el resumen funcional.

**Home**: Hero con headline sobre la oportunidad Venezuela + sub-headline sobre T3 como puente + dual CTA (inversionistas / vendedores). Stat bar (3 datos: 50+ oportunidades, 5 sectores, 70-90% debajo de precios regionales). Appetizer de la tesis (3 oraciones + link a ¿Por qué Venezuela?). Qué hacemos en 3 cards (Preparamos, Conectamos, Cerramos). Grid de 5 verticales con conteos y links al portafolio filtrado. Equipo brief (1 oración + link a About). CTA band de contacto.

**¿Por qué Venezuela?**: Página educativa dedicada a la tesis macro. Contexto económico (contracción 80%, recuperación). Tabla comparativa de precios Venezuela vs. Bogotá/Santo Domingo/Panamá (el visual central). Precedentes históricos (Argentina, Colombia, Myanmar, Kurdistan). Pull quote de Gramercy/Goldman. Sección de riesgos con honestidad radical (político, corrupción, infraestructura, seguridad, OFAC). Fuente: `caso_inversion_venezuela.md`.

**Para Inversionistas**: El "cómo" para compradores. Proceso en 7 pasos (timeline visual): explorar portafolio, expresar interés, NDA, documentación completa, evaluación con profesionales, oferta, debida diligencia y cierre. Red de aliados profesionales (5 tipos, sin nombres). Riesgos (versión breve + link a tesis). Cómo invierte un extranjero en Venezuela (appetizer: vehículos, marco legal, OFAC, repatriación).

**Para Vendedores**: El "cómo" para vendedores. Las 6 fases del `alcance_servicios_transaccionales.md` adaptadas a lenguaje accesible, cada una con "qué hace T3 / qué necesita el vendedor / qué esperar". Pull quote: "T3 es el director de orquesta, no toca ningún instrumento." Por qué T3 (4 razones del guión de ventas: acceso, presentación, confidencialidad, conocimiento). FAQ del vendedor (6 preguntas del guión de ventas). Solo Venta y Capital Raise; la vertical de Servicios (S-) no se incluye en la web.

**Portafolio** ("teoría del bikini"):
- Filtros nivel 1 (tipo de transacción): Todas, Venta, Capital Raise
- Filtros nivel 2 (vertical): RE, HOS, AG, IND, HC
- Resumen por vertical con conteos (se actualiza con filtros)
- 15-25 oportunidades curadas como blind profiles. Cada card muestra SOLO: vertical tag, tipo de transacción tag, tipo de activo + ubicación general, rango de tamaño, rango de precio, highlight 1-2 oraciones, CTA "Solicitar información"
- Sin nombres de activos, sin direcciones, sin nombres de vendedores, sin fotos identificables
- CTA prominente: "Solicite acceso a nuestro portafolio completo bajo NDA"
- Futuro: portal dinámico con zona autenticada

**Sobre Nosotros**: Por qué nació T3 (qué vacío llena, la promesa de acceso + traducción). Equipo: Alejandro Tovar (Socio Fundador, prominente), Guillermo Tovar (Estrategia), Fernando Tovar (Tecnología), presentados por rol y capacidad, no por relación familiar. Modelo operativo (director de orquesta + red de aliados).

**Contacto**: Formulario (nombre, email, empresa, teléfono, mensaje, verticales de interés checkboxes) → Supabase `leads`. Layout 2 columnas: formulario izquierda, datos de contacto directos derecha (email, teléfonos VE/EU, ciudades). Confirmación: "Le contactaremos en un máximo de 48 horas."

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
│   │   │   ├── page.tsx              ← Home
│   │   │   ├── why-venezuela/page.tsx ← ¿Por qué Venezuela? (tesis macro)
│   │   │   ├── investors/page.tsx    ← Para Inversionistas (proceso 7 pasos)
│   │   │   ├── sellers/page.tsx      ← Para Vendedores (6 fases + FAQ)
│   │   │   ├── portfolio/page.tsx    ← Portafolio (blind profiles + filtros)
│   │   │   ├── about/page.tsx        ← Sobre Nosotros (equipo + modelo)
│   │   │   ├── contact/page.tsx
│   │   │   └── privacy/page.tsx
│   │   ├── admin/               ← Admin CMS (fuera de [locale], sin i18n)
│   │   │   ├── layout.tsx       ← Sidebar + auth check
│   │   │   ├── login/page.tsx
│   │   │   ├── portfolio/       ← CRUD portfolio items
│   │   │   ├── team/            ← CRUD miembros de equipo
│   │   │   └── metrics/         ← Edición de métricas
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                   ← shadcn/ui
│   │   ├── layout/               ← navbar, footer, locale-switcher
│   │   └── sections/             ← hero, stat-bar, thesis-appetizer, service-cards, verticals-grid, team-grid, portfolio-grid, process-timeline, faq-accordion, contact-form, cta-band
│   ├── content/
│   │   ├── es/                   ← MDX content en español
│   │   └── en/                   ← MDX content en inglés
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts        ← Browser client
│   │   │   ├── server.ts        ← Server client con cookies
│   │   │   └── middleware.ts    ← Session refresh para admin
│   │   ├── queries.ts           ← Queries centralizadas (portfolio, team, metrics)
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

Modelo híbrido. El contenido estático se traduce una sola vez de los documentos fuente del vault a MDX/i18n JSON. El contenido dinámico vive en Supabase y se edita desde el admin UI o Claude Code.

### 6.1 Contenido estático (vault → MDX/i18n JSON)

No hay acoplamiento en build time con Google Drive. Se copia una vez.

| Fuente en vault | Página(s) web | Cómo se consume |
|-----------------|---------------|-----------------|
| `caso_inversion_venezuela.md` | Home (appetizer tesis), ¿Por qué Venezuela? (extensión completa) | Adapta datos y narrativa a formato web, lenguaje accesible |
| `alcance_servicios_transaccionales.md` | Para Vendedores (6 fases), Para Inversionistas (red de aliados), About (modelo operativo) | Source of truth del proceso; traducido a copy accesible |
| `identidad_marca_ES.md` | Todas (tono), About (posicionamiento §1-3, equipo §10), Home (promesa acceso + traducción) | Guía de tono y personalidad |
| `identidad_marca_EN.md` | Todas (versión inglés) | Versión nativa paralela, no traducción |
| `oferta_servicios_onepager.md` | Para Vendedores (referencia secundaria, versión simplificada de los 3 pasos) | Complemento al alcance de servicios |
| `guion_ventas.md` | Para Vendedores (FAQ, "por qué T3"), Home (cards de servicio) | Casi copy-ready para FAQ y argumentario |
| `paleta_colores.md` | globals.css (tema completo) | Define el sistema de colores |
| Expedientes del vault | Portafolio (blind profiles) | Se extraen datos ciegos para cada oportunidad |
| `web_propuesta_layout_y_copy.md` | Todas las páginas | Copy completo, layout por sección, notas de diseño |

Ruta de los archivos fuente en el vault (Google Drive local):
`/Users/guille/Library/CloudStorage/GoogleDrive-guillermo.tovar@t3-advisors.com/Unidades compartidas/T3 Advisors/T3 Advisors/_compartido/contexto/`

### 6.2 Contenido dinámico (Supabase → páginas públicas)

Editado via admin UI (`/admin`) o Claude Code via REST API. Sin redeploy necesario.

| Tabla Supabase | Página web | Quién edita |
|----------------|------------|-------------|
| `portfolio_items` | Portfolio (abrebocas ciegos, conteos) | Humanos via admin, Claude Code via API |
| `team_members` | About (sección equipo) | Humanos via admin, Claude Code via API |
| `site_metrics` | Home (conteos por sector, totales) | Humanos via admin, Claude Code via API |
| Expedientes del vault (curados) | Portfolio (seed inicial) | Claude Code extrae datos ciegos al crear items |

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

### Paso 5: Crear tablas en Supabase

1. Ir a https://supabase.com/dashboard → proyecto `t3-tasks` (es el mismo proyecto compartido)
2. SQL Editor → New query
3. Pegar y ejecutar el SQL de la sección 2.4 (tabla `leads`)
4. Pegar y ejecutar el SQL de las tablas CMS de la sección 2.8 (`portfolio_items`, `team_members`, `site_metrics`)
5. Crear Storage bucket `team-photos` (público) via Dashboard → Storage → New bucket
6. Verificar en Table Editor que las 4 tablas existen

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

- docs/contexto_operativo.md — este documento (decisiones técnicas, stack, deploy, fases)
- docs/propuesta_layout_y_copy.md — copy completo, layout por sección, notas de diseño (source of truth de contenido)
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
- Home page completa (hero, stat bar, tesis appetizer, 3 cards servicio, grid 5 verticales, equipo brief, CTA contacto)
- Navbar (Forest Green, sticky, links a todas las páginas) + Footer (Charcoal)
- Solo español (bilingual en Fase 2)
- Deploy a Vercel, verificar dominio `t3-advisors.com`

### Fase 2: Sitio completo
- ¿Por qué Venezuela? (tesis macro, tabla comparativa, precedentes, riesgos)
- Para Inversionistas (proceso 7 pasos, red aliados, inversión extranjera)
- Para Vendedores (6 fases del alcance, FAQ, por qué T3)
- Portafolio (filtros transacción + vertical, blind profiles, CTA NDA)
- Sobre Nosotros (por qué T3, equipo, modelo operativo)
- Contacto (formulario → Supabase `leads` + datos directos)
- Privacy
- Contenido en español desde `docs/propuesta_layout_y_copy.md` + documentos fuente del vault
- Traducción inglés de todas las páginas
- Locale switcher en navbar
- Portfolio: abrebocas curados desde expedientes del vault

### Fase 2.5: Admin CMS
- Supabase client utilities (client.ts, server.ts, middleware.ts)
- Middleware compuesto: next-intl para rutas públicas, Supabase Auth para `/admin`
- Login page del admin (`/admin/login`)
- Admin layout con sidebar (Portafolio, Equipo, Métricas, Logout)
- CRUD Portfolio items (lista, crear, editar, toggle published/draft)
- CRUD Team members (lista, crear, editar, upload foto a Storage)
- Formulario de métricas (upsert)
- Migrar páginas públicas a leer de Supabase (portfolio, about team, home counters)
- Seed data: 3 miembros de equipo, métricas actuales, 15-25 portfolio items

### Fase 3: SEO y polish
- JSON-LD en todas las páginas (Organization, WebSite, BreadcrumbList, Service)
- OG images estáticas
- Sitemap automático, robots.txt, hreflang tags
- Meta descriptions bilingual
- Lighthouse audit (objetivo: >90 en Performance, Accessibility, SEO)
- Favicon desde logo

### Fase 4: Futuro (fuera de scope inicial)
- Blog / insights (MDX)
- Portafolio dinámico (búsqueda avanzada, paginación)
- Zona de inversionistas (acceso autenticado, documentos post-NDA)
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
| Contenido diverge del vault | Contenido estático: un solo pase desde fuente. Contenido dinámico: Supabase es canónico, editable via admin o API |
| Admin sin uso | UI mínima, bajo costo de mantenimiento; si no se usa, no rompe nada (fallback a datos estáticos) |
