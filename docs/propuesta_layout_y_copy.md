# Propuesta de Layout, Diseño y Copy — Página Web T3 Advisors

*Versión 1.0 — 22 de marzo de 2026*
*Documento de trabajo para revisión de Fernando. Consume las conclusiones de `web_conceptualizacion_contenido.md` y las traduce a layout concreto + copy real.*

---

## Cómo leer este documento

Para cada página del sitio, presento tres cosas:

1. **Layout**: descripción sección por sección, de arriba hacia abajo, con el tipo de componente visual (hero, card grid, stat bar, etc.)
2. **Copy**: el texto real propuesto para cada sección, en español. El inglés se produce después como versión nativa paralela, no como traducción.
3. **Notas de diseño**: indicaciones de color, espaciado, tipografía y comportamiento visual.

Las secciones marcadas con `[OPCIÓN A/B/C]` son alternativas para discutir. Las marcadas con `[PLACEHOLDER]` necesitan input adicional (biografías, selección de oportunidades, etc.).

---

## 1. Filosofía de diseño

### Referentes de estilo (no de contenido)

El sitio debe sentirse como el reporte anual de un banco privado suizo o la página de una firma de asesoría institucional (McKinsey, Lazard), NO como:
- Una inmobiliaria (fotos grandes de propiedades, sliders)
- Una startup (gradientes, ilustraciones coloridas, animaciones excesivas)
- Un marketplace (fichas tipo clasificado, botones "ver más")

### Principios visuales

| Principio | Aplicación |
|---|---|
| **Espacio generoso** | Márgenes amplios, padding generoso entre secciones. El espacio en blanco (Warm White) comunica institucionalidad. Nunca apilar contenido sin respiro. |
| **Tipografía como protagonista** | En un sitio sin fotos de stock, la tipografía hace el trabajo pesado. Headlines grandes en Montserrat SemiBold. Body en Source Sans 3 con interlineado generoso (1.6-1.75). |
| **Color contenido** | Forest Green en headers y CTAs. Charcoal en body text. Antique Gold solo en detalles (líneas decorativas, iconos, separadores). Warm White de fondo. Nunca más de 2 colores fuertes en pantalla al mismo tiempo. |
| **Datos como visuales** | En lugar de fotos de stock, usar números grandes, tablas comparativas limpias, y barras de estadísticas como elementos visuales. Los datos SON el visual. |
| **Geometría limpia** | Bordes rectos, esquinas con radius mínimo (4-8px), líneas finas. Cero sombras dramáticas. Si hay cards, bordes sutiles en Stone Gray. |
| **Movimiento mínimo** | Sin carruseles, sin sliders, sin animaciones de entrada. Si acaso, fade-in sutil al hacer scroll. El contenido está ahí, no se revela. |

### Grid y responsive

- Desktop: max-width 1200px, centrado. Secciones full-width para bandas de color (Forest Green, Stone Gray).
- Mobile: stack natural, una columna. Los grids de 3 columnas pasan a 1. Los stat bars pasan de horizontal a vertical.
- Breakpoints estándar: 768px (tablet), 1024px (desktop).

---

## 2. Elementos transversales

### 2.1 Navbar

**Fondo**: Forest Green `#1B4332`, fijo en la parte superior (sticky).
**Logo**: Versión blanca transparente del logo, alineado a la izquierda.
**Links**: Warm White, Montserrat 600, tamaño pequeño (14-15px), tracking amplio (letter-spacing). Hover: Antique Gold.

```
[Logo T3 blanco]     ¿Por qué Venezuela?   Inversionistas   Vendedores   Portafolio   Nosotros   Contacto     [ES|EN]
```

**Notas**:
- "Inversionistas" y "Vendedores" en vez de "Para Inversionistas" / "Para Vendedores" (más limpio en nav)
- El toggle de idioma es un switch simple ES|EN, no un dropdown
- En mobile: hamburger menu, logo centrado

### 2.2 Footer

**Fondo**: Charcoal `#2D3436`.
**Texto**: Stone Gray `#D5CEC0` para texto secundario, Warm White para headings de columna.
**Acento**: Antique Gold para el separador horizontal superior.

```
──────────────────── [línea Antique Gold fina] ────────────────────

[Logo T3 blanco]                  Navegación              Contacto
                                  ¿Por qué Venezuela?     info@t3-advisors.com
Asesoría de inversión e           Inversionistas           +58 XXX XXX XXXX
intermediación de bienes          Vendedores               +34 XXX XXX XXXX
raíces comerciales                Portafolio
en Venezuela.                     Nosotros                 Caracas · Madrid
                                  Contacto

──────────────────────────────────────────────────────────────────
© 2026 T3 Advisors. Todos los derechos reservados.   Política de privacidad
```

### 2.3 Bandas CTA (componente reutilizable)

A lo largo del sitio, se usan "bandas" de ancho completo con fondo Forest Green para separar secciones y crear puntos de conversión.

**Estructura estándar**:
```
[FONDO FOREST GREEN, ancho completo]
  Texto en Warm White (Montserrat 600, grande)
  Sub-texto en Warm White (Source Sans 3, regular)
  [Botón primario: fondo Antique Gold, texto Charcoal]  [Botón secundario: borde Warm White, texto Warm White]
```

---

## 3. HOME

### Layout

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (Forest Green, sticky)                  │
├─────────────────────────────────────────────────┤
│                                                 │
│  HERO (fondo Warm White, mucho padding)         │
│  ┌─────────────────────────────────────────┐    │
│  │  Headline (Montserrat 600, 48-56px)     │    │
│  │  Sub-headline (Source Sans 3, 20-22px)  │    │
│  │                                         │    │
│  │  [CTA Inversionistas]  [CTA Vendedores] │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
├─────────────────────────────────────────────────┤
│  STAT BAR (fondo Forest Green, ancho completo)  │
│  ┌────────┐  ┌────────┐  ┌────────┐            │
│  │ Dato 1 │  │ Dato 2 │  │ Dato 3 │            │
│  │ Label  │  │ Label  │  │ Label  │            │
│  └────────┘  └────────┘  └────────┘            │
├─────────────────────────────────────────────────┤
│                                                 │
│  TESIS (fondo Warm White)                       │
│  Headline + 3 oraciones + link                  │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  QUÉ HACEMOS (fondo Stone Gray sutil)           │
│  Headline + párrafo breve                       │
│  ┌─────┐  ┌─────┐  ┌─────┐                     │
│  │Card │  │Card │  │Card │  (3 pasos)           │
│  │  1  │  │  2  │  │  3  │                      │
│  └─────┘  └─────┘  └─────┘                     │
│                                                 │
├─────────────────────────────────────────────────┤
│  CTA BAND (Forest Green)                        │
│  "Explore nuestro portafolio"                   │
├─────────────────────────────────────────────────┤
│                                                 │
│  VERTICALES (fondo Warm White)                  │
│  Headline                                       │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐                │
│  │RE │ │HOS│ │AG │ │IND│ │HC │                 │
│  └───┘ └───┘ └───┘ └───┘ └───┘                │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  EQUIPO BRIEF (fondo Warm White)                │
│  Una oración + link a About                     │
│                                                 │
├─────────────────────────────────────────────────┤
│  CTA BAND FINAL (Forest Green)                  │
│  Contacto                                       │
├─────────────────────────────────────────────────┤
│  FOOTER                                         │
└─────────────────────────────────────────────────┘
```

### Copy del Hero

**[OPCIÓN A — Directo, centrado en el mercado]**

> **Inversión en bienes raíces comerciales en Venezuela**
>
> Los activos comerciales en Venezuela se transan a una fracción de lo que cuestan en cualquier otro país de la región. T3 Advisors es la firma de asesoría que conecta a inversionistas con estas oportunidades, y a vendedores con el capital que necesitan.
>
> `[Soy inversionista →]`  `[Quiero vender →]`

**[OPCIÓN B — Narrativo, abre con la dislocación]**

> **Un mercado donde los activos comerciales cuestan 70-90% menos que en cualquier capital comparable de la región**
>
> Venezuela atraviesa la mayor dislocación de precios en bienes raíces comerciales del hemisferio occidental. T3 Advisors asesora a quienes quieren aprovechar esa ventana, y a quienes quieren vender en las mejores condiciones posibles.
>
> `[Explorar oportunidades →]`  `[Vender mi activo →]`

**[OPCIÓN C — Más institucional, menos números]**

> **Asesoría de inversión en el mercado de bienes raíces comerciales de Venezuela**
>
> T3 Advisors conecta capital con oportunidades de inversión en un mercado donde la intermediación profesional no existía. Preparamos activos, presentamos oportunidades, y acompañamos transacciones hasta el cierre.
>
> `[Para inversionistas →]`  `[Para vendedores →]`

**Recomendación**: Opción A como base, con el dato numérico de la Opción B como refuerzo. La Opción C es demasiado genérica; no aprovecha el diferenciador más poderoso (la dislocación de precios).

### Copy del Stat Bar

Tres datos sobre fondo Forest Green, números grandes en Warm White, labels en Stone Gray.

```
50+                           5                            70-90%
oportunidades activas         sectores de inversión        por debajo de precios
                                                           regionales comparables
```

**Alternativa con dato de diáspora**:
```
50+                           5                            7.9M
oportunidades activas         sectores de inversión        venezolanos en
                                                           la diáspora
```

**Recomendación**: La primera versión. El dato de 70-90% es el más impactante para un inversionista. El dato de diáspora es más relevante en la página de tesis.

### Copy de la sección Tesis (appetizer)

**Headline**: La oportunidad

**Copy**:

> Venezuela experimentó la mayor contracción económica en tiempos de paz de la historia moderna: 80% entre 2013 y 2021. Los activos comerciales se transan hoy a 20-30% de su costo de reposición. Oficinas, hoteles, plantas industriales y terrenos agrícolas se ofrecen a precios que no se ven en ningún otro mercado de América Latina.
>
> La recuperación ya comenzó. El capital sofisticado ya está mirando. La pregunta no es si Venezuela se normaliza, sino quién se posiciona antes de que lo haga.
>
> [Leer la tesis completa →]

**Notas de diseño**: Texto centrado, máximo 600px de ancho. Headline en Forest Green (Montserrat 600). Body en Charcoal (Source Sans 3 400). Link en Antique Gold con underline.

### Copy de la sección Qué Hacemos

**Headline**: Cómo trabajamos

**Sub**: T3 Advisors gestiona el proceso completo de intermediación, desde la preparación del activo hasta el cierre de la transacción.

**Card 1 — Preparamos**
> Asesoramos al vendedor sobre qué documentación necesita, transformamos información dispersa en materiales profesionales, y presentamos cada oportunidad con el rigor que un inversionista espera.

**Card 2 — Conectamos**
> Identificamos y contactamos compradores e inversionistas calificados. Filtramos interesados serios. Manejamos todo bajo acuerdos de confidencialidad: la identidad del activo solo se revela a contrapartes comprometidas.

**Card 3 — Cerramos**
> Coordinamos reuniones entre las partes, facilitamos la negociación de términos, organizamos el flujo de documentos durante la debida diligencia, y acompañamos cada paso hasta la firma.

**Notas de diseño**: Fondo Stone Gray `#D5CEC0` muy sutil (10% opacidad sobre Warm White, o banda completa). Cards con fondo Warm White, borde fino Stone Gray. Icono Lucide en Antique Gold arriba de cada card (ej: FileText, Users, Handshake). Headline de card en Forest Green (Montserrat 600).

### Copy de la sección Verticales

**Headline**: Cinco sectores de inversión

**Sub**: Nuestro portafolio abarca las principales verticales de bienes raíces comerciales en Venezuela.

Cada vertical es un card/bloque con:

| Vertical | Label | Descriptor | Icono sugerido |
|---|---|---|---|
| Real Estate | Bienes Raíces | Terrenos, oficinas, locales comerciales, complejos residenciales | Building2 |
| Hospitality | Hotelería y Turismo | Hoteles, posadas, resorts, proyectos turísticos | Hotel |
| Agribusiness | Agroindustria | Fincas productivas, plantas procesadoras, destilerías | Wheat |
| Industrial / Energy | Industrial y Energía | Plantas manufactureras, fábricas, infraestructura energética | Factory |
| Healthcare | Salud | Clínicas, laboratorios, distribuidoras farmacéuticas | Heart |

Cada card muestra un conteo: "XX oportunidades activas". El card completo es clickeable y lleva al portafolio filtrado por esa vertical.

**Notas de diseño**: Grid de 5 en desktop (pueden ser 3+2 si 5 en línea queda apretado), 2+2+1 en tablet, 1 columna en mobile. Iconos Lucide en Antique Gold, tamaño 32-40px. Label en Forest Green (Montserrat 600). Descriptor en Charcoal (Source Sans 3). Conteo en Charcoal con el número en Forest Green bold.

### Copy de la sección Equipo Brief

**Headline**: Presencia local, alcance internacional

**Copy**:

> T3 Advisors opera con un equipo en el terreno en Venezuela y capacidad de comunicación profesional desde Europa. Combinamos décadas de experiencia en bienes raíces comerciales venezolanos con los estándares de presentación y proceso que el capital internacional exige.
>
> [Conocer al equipo →]

**Notas de diseño**: Sección breve, centrada, máximo 3 líneas. No se muestran fotos ni nombres en el homepage; eso vive en About. El objetivo es generar confianza mínima y dirigir tráfico.

### Copy del CTA Band (portafolio)

> **Más de 50 oportunidades de inversión en Venezuela**
> Explore nuestro portafolio de activos comerciales, organizado por sector y tipo de transacción.
> `[Ver portafolio →]`

### Copy del CTA Band Final (contacto)

> **¿Interesado en invertir o en vender?**
> Hablemos. El primer paso es una conversación.
> `[Contactar a T3 Advisors →]`

---

## 4. ¿POR QUÉ VENEZUELA?

### Layout

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                         │
├─────────────────────────────────────────────────┤
│                                                 │
│  PAGE HEADER (fondo Warm White, centrado)        │
│  Headline + intro paragraph                     │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  SECCIÓN 1: El contexto                         │
│  (editorial, texto + dato destacado lateral)    │
│                                                 │
├─────────────────────────────────────────────────┤
│  TABLA COMPARATIVA (fondo Stone Gray sutil)     │
│  Precios Venezuela vs. región                   │
├─────────────────────────────────────────────────┤
│                                                 │
│  SECCIÓN 2: Precedentes históricos              │
│  (4 bloques: Argentina, Colombia, Myanmar,      │
│   Kurdistan)                                    │
│                                                 │
├─────────────────────────────────────────────────┤
│  PULL QUOTE (Forest Green, ancho completo)      │
│  Cita de Gramercy/Goldman                       │
├─────────────────────────────────────────────────┤
│                                                 │
│  SECCIÓN 3: Los riesgos                         │
│  (honestidad radical)                           │
│                                                 │
├─────────────────────────────────────────────────┤
│  CTA BAND                                       │
│  "Ver oportunidades" / "Hablar con T3"          │
├─────────────────────────────────────────────────┤
│  FOOTER                                         │
└─────────────────────────────────────────────────┘
```

### Copy

**Page Header**

**Headline**: ¿Por qué Venezuela?

**Intro**:

> Venezuela atraviesa una de las mayores dislocaciones de activos comerciales del hemisferio occidental. Para algunos inversionistas, eso representa un riesgo inaceptable. Para otros, una ventana de oportunidad que no se repite. Esta página presenta los datos para que usted decida.

---

**Sección 1: El contexto**

**Headline**: Una economía que se contrajo 80% y está empezando a recuperarse

> Entre 2013 y 2021, Venezuela sufrió la peor contracción económica en tiempos de paz de la historia moderna. El PIB cayó aproximadamente 80%. La producción industrial se desplomó. La construcción privada se contrajo 98% desde sus máximos.
>
> La recuperación comenzó en 2022 (+3% PIB) y se aceleró en 2024 (+5%), impulsada por aumentos en la producción petrolera y un repunte industrial del 16,8%. La producción manufacturera alcanzó 47,8% de la capacidad instalada en el cuarto trimestre de 2024, su nivel más alto desde 2015, aunque eso significa que más de la mitad de la capacidad industrial sigue ociosa.
>
> En enero de 2026, una nueva Ley de Hidrocarburos terminó con el monopolio de PDVSA sobre la producción petrolera, permitió el control operativo privado completo y, de manera crucial, habilitó el arbitraje internacional de disputas. Este cambio regulatorio es el más significativo desde la nacionalización petrolera de 1976.
>
> La economía opera de facto en dólares. Más del 80% de las transacciones comerciales se denominan en USD. Para el inversionista, esto simplifica la entrada: se compra en dólares, se opera en dólares.

**Dato destacado** (elemento visual lateral o callout):
```
98%
de contracción en
construcción privada
desde máximos
```

---

**Sección 2: La dislocación de precios**

**Headline**: Activos a una fracción de su valor

> El expresidente de la Cámara Inmobiliaria de Venezuela lo resumió así: "Si cuesta entre $1.000 y $1.500 reponer un metro cuadrado y se vende a $200-$300, se está vendiendo a 20-30% del valor de reposición."
>
> La construcción nueva es económicamente irracional a precios actuales: el costo de construir ($1.000-$1.500/m² residencial, $1.500-$2.500/m² comercial) supera en 3 a 5 veces el precio de mercado. Esto crea un piso natural de precio: la oferta nueva no puede competir hasta que los precios no suban significativamente.

**Tabla comparativa** (componente visual central de esta sección):

| Tipo de activo | Caracas ($/m²) | Bogotá | Santo Domingo | Ciudad de Panamá |
|---|---|---|---|---|
| Oficina premium | $500 - $1.500 | $1.800 - $2.500 | $2.000 - $3.000 | $4.300 |
| Oficina media | $200 - $500 | $1.200 - $1.800 | $1.500 - $2.000 | $2.000 - $3.000 |
| Retail prime | $500 - $1.200 | $1.500 - $2.500 | $2.000+ | $3.000+ |
| Industrial | $100 - $300 | $800 - $1.200 | — | $1.000 - $1.500 |

**Nota debajo de la tabla**: *Fuentes: CBRE MarketView, El País, análisis de mercado local. Los rangos de Caracas reflejan transacciones recientes y ofertas activas en el mercado.*

**Notas de diseño**: La tabla es un componente visual central. Fondo Stone Gray sutil. Columna de Caracas resaltada (fondo Forest Green muy claro o borde izquierdo Antique Gold). Números de Caracas en Forest Green bold para crear contraste visual con las otras columnas.

---

**Sección 3: Qué pasó en otros mercados después de una crisis**

**Headline**: Precedentes históricos

**Intro**: Cuatro mercados atravesaron crisis comparables y luego se recuperaron. Ninguno es idéntico a Venezuela, pero los patrones son informativos.

**Bloque Argentina (post-2001)**:
> El PIB cayó 20% en tres años. El peso colapsó de 1:1 a 3,9:1 contra el dólar. Los precios inmobiliarios en Buenos Aires cayeron 30-40% en términos de dólares. La recuperación fue sostenida: 9% de crecimiento anual durante cinco años consecutivos. Quienes compraron durante 2002-2003 capturaron retornos totales de 16-20% anual durante una década.

**Bloque Colombia (post-acuerdo de paz, 2016)**:
> Medellín registró cero años de caída entre 2002 y 2024, con apreciación de 7-8% anual acelerándose a 10-12% en 2023-2024. El crimen cayó 80%. Para 2024, una de cada cuatro propiedades vendidas fue adquirida por extranjeros.

**Bloque Myanmar (apertura 2011)**:
> Los precios de tierra se triplicaron o cuadruplicaron en suburbios de Yangón en seis meses. Las rentas de oficina alcanzaron niveles de Manhattan. Pero Myanmar también es la historia de advertencia: para 2017-2018, las rentas cayeron 70% por sobreoferta y retrocesos políticos. La lección: el timing importa.

**Bloque Kurdistan (post-2003)**:
> Se invirtieron $20 mil millones desde 2006, con $11,1 mil millones solo en vivienda. Los precios se multiplicaron por cinco en cinco años. Marcas como Sheraton y Hilton entraron al mercado. Kurdistan partió de una base peor que la de Venezuela.

**Notas de diseño**: Cuatro cards horizontales o bloques alternados (izquierda-derecha). Cada uno con el nombre del país en Montserrat 600, el periodo, y un dato destacado en grande (ej: "16-20% retorno anual" para Argentina). Tonos sobrios; no celebrar las crisis.

---

**Pull Quote** (banda Forest Green, ancho completo):

> "Un inversionista no puede simplemente volar a Caracas y empezar a tocar puertas."
> — Robert Koenigsberger, fundador de Gramercy Funds ($7 mil millones en activos bajo gestión), enero 2026

**Nota debajo**: *Goldman Sachs, UBS y Gramercy Funds han publicado análisis dedicados a Venezuela desde enero de 2026, describiendo el mercado como "punto de inflexión" y "tierra de oportunidad."*

---

**Sección 4: Los riesgos**

**Headline**: Lo que puede salir mal

**Intro**: Venezuela no es para todos. Cualquier decisión de inversión informada requiere entender estos riesgos.

> **Riesgo político**: El mismo partido que expropió más de 1.400 empresas ahora dice dar la bienvenida a inversionistas. Las indemnizaciones por arbitraje impagadas superan los $10 mil millones. La transición política está en curso y su desenlace es incierto.
>
> **Corrupción**: Venezuela ocupa el puesto 178 de 180 en el índice de Transparency International (puntuación: 10/100). Los registros de propiedad cobran hasta 40% del valor de venta en lugar del 2% legal.
>
> **Infraestructura deteriorada**: Aproximadamente 200 cortes de electricidad diarios. Racionamiento eléctrico en 22 de 23 estados. Tuberías de PDVSA sin actualización en 50 años.
>
> **Seguridad**: La tasa de homicidios es de 26,8 por cada 100.000 habitantes (2023), una mejora significativa respecto a los picos de 79-90 por 100.000 en 2013-2015, pero sigue siendo elevada para estándares regionales.
>
> **Sanciones (OFAC)**: Restricciones de la Oficina de Control de Activos Extranjeros de EE.UU. afectan transacciones con conexión estadounidense. Cada operación requiere evaluación de cumplimiento caso por caso.
>
> Decimos esto abiertamente porque creemos que un inversionista informado es un mejor socio que uno que descubre los problemas después.

**Notas de diseño**: Esta sección es deliberadamente sobria. Fondo Warm White. Sin colores de acento. Texto directo. Quizás un borde izquierdo fino en Stone Gray para cada riesgo, tipo "aside" editorial. NO usar rojo ni iconos de advertencia; la honestidad debe sentirse natural, no alarmista.

---

**CTA Band**:

> **Los datos están sobre la mesa. ¿Quiere ver las oportunidades?**
> `[Ver portafolio →]`  `[Hablar con T3 →]`

---

## 5. PARA INVERSIONISTAS

### Layout

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                         │
├─────────────────────────────────────────────────┤
│  PAGE HEADER                                    │
│  Headline + intro                               │
├─────────────────────────────────────────────────┤
│                                                 │
│  PROCESO (7 pasos, vertical timeline)           │
│                                                 │
├─────────────────────────────────────────────────┤
│  CTA BAND (portafolio)                          │
├─────────────────────────────────────────────────┤
│                                                 │
│  RED DE ALIADOS                                 │
│  (5 tipos de profesionales)                     │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  RIESGOS (versión breve con link a tesis)       │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  INVERSIÓN EXTRANJERA                           │
│  (appetizer, 4 temas)                           │
│                                                 │
├─────────────────────────────────────────────────┤
│  CTA BAND FINAL (contacto)                      │
├─────────────────────────────────────────────────┤
│  FOOTER                                         │
└─────────────────────────────────────────────────┘
```

### Copy

**Page Header**

**Headline**: Para inversionistas

**Intro**:

> Ya sea que esté evaluando Venezuela por primera vez o que conozca el mercado y quiera una contraparte profesional, aquí le explicamos exactamente cómo funciona trabajar con T3 Advisors, qué esperar en cada paso, y con qué apoyos cuenta.

---

**Sección 1: El proceso**

**Headline**: Cómo funciona, paso a paso

Cada paso se presenta como un nodo de timeline vertical (línea izquierda en Antique Gold, nodos circulares, contenido a la derecha).

**Paso 1 — Explore el portafolio o reciba un teaser**
> Nuestro portafolio público muestra oportunidades de inversión con perfiles anónimos: sector, ubicación general, rango de precio y un resumen. Si algo le interesa, es el punto de partida.

**Paso 2 — Exprese interés**
> Contáctenos indicando qué oportunidad o sector le interesa. No hay compromiso en este paso. Es una conversación.

**Paso 3 — Firme un acuerdo de confidencialidad**
> Para proteger al vendedor, la identidad del activo y la información detallada solo se comparten después de firmar un acuerdo de confidencialidad (NDA). Es un documento estándar que protege a ambas partes.

**Paso 4 — Reciba la documentación completa**
> Una vez firmado el acuerdo, recibe el memorándum confidencial de información: un documento detallado con todo lo que necesita para evaluar la oportunidad, incluyendo las fuentes de cada dato y los vacíos de información que existen.

**Paso 5 — Evalúe con apoyo profesional**
> Si decide avanzar, conectamos con profesionales locales que conocen el terreno: abogados transaccionales, auditores, avaluadores, peritos técnicos. Usted puede usar los suyos o los nuestros. T3 coordina el proceso.

**Paso 6 — Haga una oferta**
> Si la evaluación es positiva, se formaliza una carta de intención con los términos propuestos: precio, condiciones, plazos. T3 facilita la negociación entre las partes.

**Paso 7 — Debida diligencia y cierre**
> Se organiza una sala de datos para la revisión formal del activo. T3 coordina el flujo de documentos, da seguimiento a cada paso pendiente, y acompaña el proceso hasta la firma del contrato de compraventa.

---

**Sección 2: Red de aliados profesionales**

**Headline**: No opera solo

**Copy**:

> Invertir en Venezuela requiere apoyos especializados que entienden el terreno. T3 Advisors trabaja con una red de profesionales con experiencia en transacciones en el país. Si usted ya tiene asesores de confianza, trabajamos con ellos. Si no, ponemos nuestra red a su disposición.
>
> Los tipos de profesionales con los que coordinamos:

- **Abogados transaccionales locales**: estructura legal, contratos de compraventa, representaciones
- **Abogados de cumplimiento normativo**: sanciones (OFAC), estructura por jurisdicción
- **Auditores y contadores públicos**: revisión financiera, debida diligencia contable
- **Avaluadores certificados**: valoraciones formales de activos
- **Peritos técnicos y ambientales**: inspecciones físicas, evaluaciones ambientales

> T3 recomienda profesionales, facilita su contratación, y coordina su trabajo a lo largo de la transacción. Cada profesional trabaja directamente para quien lo contrata.

**Notas de diseño**: Lista con iconos Lucide pequeños en Antique Gold al lado de cada tipo de profesional. Fondo Warm White. Limpio y directo.

---

**Sección 3: Los riesgos**

**Headline**: Riesgos que usted debe conocer

> Invertir en Venezuela tiene complejidades significativas: riesgo político, corrupción, infraestructura deteriorada, restricciones de sanciones (OFAC), y un entorno regulatorio en transición. Nosotros no minimizamos estos riesgos; los documentamos en cada oportunidad que presentamos.
>
> [Leer el análisis completo de riesgos →] *(link a la sección de riesgos en ¿Por qué Venezuela?)*

---

**Sección 4: Inversión extranjera en Venezuela**

**Headline**: Cómo invierte un extranjero en Venezuela

**Copy**:

> Si usted no es venezolano o no ha operado en el país antes, hay consideraciones específicas que debe conocer. T3 no es un asesor legal ni fiscal, pero conocemos el terreno y trabajamos con profesionales que le pueden orientar en cada uno de estos temas:
>
> **Vehículos de inversión**: la estructura más común es una empresa domiciliada en Venezuela. La constitución de 1999 establece trato igualitario para inversión nacional y extranjera. Un abogado transaccional local estructura el vehículo más adecuado para cada caso.
>
> **Marco legal**: Venezuela tiene tratados bilaterales de inversión con 27 países. La nueva Ley de Hidrocarburos (2026) habilitó el arbitraje internacional de disputas, un cambio fundamental para la protección del inversionista.
>
> **Sanciones (OFAC)**: si usted tiene conexión con Estados Unidos (ciudadanía, residencia, o empresa registrada en EE.UU.), cada transacción en Venezuela requiere una evaluación de cumplimiento con las regulaciones de OFAC. T3 trabaja con abogados especializados en este tema.
>
> **Consideraciones sobre repatriación**: la economía opera de facto en dólares, lo que simplifica las transacciones. Las consideraciones sobre repatriación de capital dependen de la estructura utilizada y la jurisdicción del inversionista.
>
> Estos temas se abordan caso por caso. Lo importante es que usted sepa que existen, que son manejables con asesoría adecuada, y que T3 sabe conectarlo con quien puede resolverlos.

---

**CTA Band Final**:

> **¿Tiene preguntas? El primer paso es una conversación.**
> No hay compromiso. Cuéntenos qué busca y le orientamos.
> `[Contactar a T3 Advisors →]`

---

## 6. PARA VENDEDORES

### Layout

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                         │
├─────────────────────────────────────────────────┤
│  PAGE HEADER                                    │
│  Headline + intro empática                      │
├─────────────────────────────────────────────────┤
│                                                 │
│  EL PROCESO (6 fases, timeline o acordeón)      │
│                                                 │
├─────────────────────────────────────────────────┤
│  PULL QUOTE ("director de orquesta")            │
├─────────────────────────────────────────────────┤
│                                                 │
│  POR QUÉ T3 (4 razones)                        │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  FAQ (acordeón expandible)                      │
│                                                 │
├─────────────────────────────────────────────────┤
│  CTA BAND FINAL                                 │
├─────────────────────────────────────────────────┤
│  FOOTER                                         │
└─────────────────────────────────────────────────┘
```

### Copy

**Page Header**

**Headline**: Para vendedores

**Intro**:

> Si usted es propietario de un activo en Venezuela y quiere venderlo o buscar un inversionista, aquí le explicamos exactamente cómo trabajamos: qué hacemos, qué necesitamos de usted, y qué puede esperar en cada etapa. El primer paso es siempre una conversación.

---

**Sección 1: El proceso completo**

**Headline**: Cómo llevamos su activo a términos

**Sub**: Seis etapas claras, desde la primera conversación hasta el cierre. En cada una, le explicamos qué hace T3, qué necesita aportar usted, y qué esperar.

**Fase 1 — Preparación**
> **Qué hacemos**: Nos sentamos con usted, entendemos su activo, y le orientamos sobre qué documentación se necesita. Con esa información construimos un expediente estructurado y desarrollamos una estrategia comercial: a quién le vendemos esto, cómo lo posicionamos, y por qué alguien querría comprarlo.
>
> **Qué necesitamos de usted**: acceso al activo, información financiera disponible (no necesita ser perfecta), documentos legales de propiedad, y disposición para responder preguntas. No necesita tener todo listo desde el día uno.
>
> **Qué esperar**: en semanas, usted tendrá un paquete profesional que presenta su activo al nivel que un inversionista serio espera ver.

**Fase 2 — Presentación al mercado**
> **Qué hacemos**: Producimos una presentación inicial (teaser) que describe la oportunidad sin revelar su identidad. Identificamos compradores potenciales según el perfil ideal para su activo y les presentamos la oportunidad.
>
> **Qué necesitamos de usted**: su autorización para presentar el activo de manera anónima.
>
> **Qué esperar**: la identidad de su activo y la información sensible solo se comparten después de que el comprador firma un acuerdo de confidencialidad. Todo se maneja con discreción.

**Fase 3 — Documentación completa**
> **Qué hacemos**: Cuando un comprador firma el acuerdo de confidencialidad, le entregamos un memorándum confidencial de información: un documento detallado que presenta su activo de manera completa, transparente, y con las fuentes de cada dato.
>
> **Qué necesitamos de usted**: información adicional que pueda surgir durante la preparación del memorándum. Nosotros organizamos y producimos; usted valida.
>
> **Qué esperar**: coordinamos una reunión entre usted y el comprador, donde usted presenta su activo y responde preguntas directamente. T3 modera y facilita.

**Fase 4 — Carta de intención**
> **Qué hacemos**: Si el comprador quiere avanzar, facilita una carta de intención con los términos propuestos: precio, condiciones de pago, plazos. Le asesoramos sobre si los términos son razonables desde el punto de vista comercial.
>
> **Qué necesitamos de usted**: su criterio sobre los términos. Usted decide; nosotros aconsejamos.
>
> **Qué esperar**: una negociación estructurada. Los abogados de cada parte intervienen en la redacción y revisión legal.

**Fase 5 — Debida diligencia**
> **Qué hacemos**: Organizamos una sala de datos donde el comprador y sus asesores revisan la documentación de su activo. Canalizamos preguntas, coordinamos respuestas, y nos aseguramos de que el proceso avance según el calendario acordado.
>
> **Qué necesitamos de usted**: colaborar con las solicitudes de información del comprador, dar acceso a profesionales que necesiten inspeccionar el activo, y responder en tiempo razonable.
>
> **Qué esperar**: el comprador verificará todo. Es normal. Lo que T3 hace es anticipar qué van a preguntar y ayudarle a tener las respuestas listas de antemano.

**Fase 6 — Negociación y cierre**
> **Qué hacemos**: Facilitamos la negociación final de términos entre las partes, coordinamos el cronograma hacia la firma del contrato de compraventa, y estamos presentes en el cierre.
>
> **Qué necesitamos de usted**: disposición para negociar de buena fe.
>
> **Qué esperar**: los abogados de ambas partes redactan y revisan el contrato. T3 se asegura de que los términos acordados se reflejen correctamente y de que el proceso llegue de manera ordenada hasta la firma.

**Notas de diseño**: Las 6 fases se presentan como un timeline vertical expandible (acordeón) o como bloques secuenciales con numeración prominente (1-6 en círculos Forest Green). Cada fase muestra las tres subsecciones (qué hacemos / qué necesitamos / qué esperar) con distinción visual (tabs internos, o negritas + párrafos). En mobile, el formato acordeón funciona mejor.

---

**Pull Quote** (banda Forest Green):

> T3 es el director de orquesta de su transacción. No tocamos ningún instrumento: cada especialista (abogados, avaluadores, auditores) hace su trabajo. Nosotros coordinamos a todos para que usted no tenga que hacerlo.

---

**Sección 2: Por qué T3**

**Headline**: Por qué trabajar con nosotros

Cuatro bloques:

**Acceso**
> En Venezuela no existe un mercado organizado donde publicar un activo y que lleguen compradores. Las oportunidades se mueven en círculos cerrados. Nosotros le damos visibilidad ante compradores e inversionistas a los que usted por su cuenta no llega.

**Presentación**
> La diferencia entre un activo que se toma en serio y uno que se ignora es cómo se presenta. Un comprador que evalúa oportunidades profesionalmente espera ver materiales a ese nivel: información ordenada, números verificados, documentación en regla. Nosotros producimos eso.

**Confidencialidad y proceso**
> En un mercado donde todo se sabe, la discreción importa. Manejamos toda la operación bajo acuerdos de confidencialidad. Cada paso tiene una estructura clara: qué se comparte, cuándo, con quién, bajo qué condiciones. Usted sabe qué esperar en todo momento.

**Conocimiento del mercado**
> Trabajamos con más de 50 oportunidades en distintos sectores en Venezuela. Eso nos da un conocimiento acumulado que beneficia a cada vendedor: sabemos qué buscan los compradores, qué les preocupa, qué los frena y qué los convence.

**Notas de diseño**: Grid de 2x2 en desktop. Cada bloque con headline en Forest Green (Montserrat 600) y copy en Charcoal (Source Sans 3). Quizás un icono Lucide pequeño en Antique Gold. Sin borders agresivos; separación por espacio.

---

**Sección 3: Preguntas frecuentes**

**Headline**: Preguntas frecuentes

Formato: acordeón expandible. Click en la pregunta para ver la respuesta.

**"¿Qué necesito para empezar?"**
> Una conversación. Nos cuenta del activo, nosotros le orientamos sobre qué documentos necesitamos, y con eso empezamos a armar el expediente. No necesita tener todo listo desde el primer día; vamos avanzando juntos.

**"¿Cuánto cobran?"**
> Un porcentaje sobre el valor de la transacción, y solo si la operación se cierra. El porcentaje se define caso por caso cuando formalizamos el acuerdo de trabajo. Si no se cierra, no cobramos.

**"¿Cuánto se tarda?"**
> Depende del activo y de qué tan lista esté la documentación. La preparación de materiales la hacemos en semanas. Encontrar al comprador correcto puede tomar más tiempo, y la negociación y cierre tienen su propio ritmo. Nosotros movemos todo lo más rápido posible, pero la velocidad depende también de las partes.

**"¿Me garantizan la venta?"**
> No, y desconfíe de quien se lo garantice. Lo que sí le garantizamos es que su activo va a estar presentado de la mejor manera posible, frente a las contrapartes correctas, con un proceso serio. Eso maximiza las posibilidades, pero la decisión final depende del comprador.

**"¿Y si no se vende?"**
> No cobramos. Nuestro modelo es que solo cobramos si la operación se cierra.

**"No quiero vender, quiero buscar un socio o inversionista"**
> También hacemos eso. El proceso es muy parecido: preparamos la documentación del proyecto, identificamos inversionistas con el perfil adecuado, y acompañamos la negociación. La diferencia es que usted no está transfiriendo la propiedad sino buscando capital, pero la preparación y la presentación funcionan igual.

**Notas de diseño**: Acordeón limpio. Pregunta en Montserrat 600, Forest Green. Respuesta en Source Sans 3 400, Charcoal. Icono de chevron para expandir/colapsar. Sin bordes entre preguntas; solo separación por espacio.

---

**CTA Band Final**:

> **¿Tiene un activo que quiere vender o para el que busca inversión?**
> El primer paso es una conversación sin compromiso.
> `[Contactar a T3 Advisors →]`

---

## 7. PORTAFOLIO

### Layout

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                         │
├─────────────────────────────────────────────────┤
│  PAGE HEADER                                    │
│  Headline + explicación teoría del bikini       │
├─────────────────────────────────────────────────┤
│  FILTROS (sticky o prominentes)                 │
│  [Todas] [Venta] [Capital Raise]                │
│  [RE] [HOS] [AG] [IND] [HC]                    │
├─────────────────────────────────────────────────┤
│                                                 │
│  RESUMEN POR VERTICAL (conteos)                 │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  GRID DE BLIND PROFILES                         │
│  ┌─────┐ ┌─────┐ ┌─────┐                       │
│  │Card │ │Card │ │Card │                        │
│  └─────┘ └─────┘ └─────┘                       │
│  ┌─────┐ ┌─────┐ ┌─────┐                       │
│  │Card │ │Card │ │Card │                        │
│  └─────┘ └─────┘ └─────┘                       │
│  (... 15-25 cards)                              │
│                                                 │
├─────────────────────────────────────────────────┤
│  CTA BAND (NDA)                                 │
├─────────────────────────────────────────────────┤
│  FOOTER                                         │
└─────────────────────────────────────────────────┘
```

### Copy

**Page Header**

**Headline**: Portafolio de inversión

**Intro**:

> Presentamos una selección de las oportunidades de inversión que T3 Advisors tiene en cartera. Cada perfil muestra información general del activo (sector, ubicación, rango de precio) sin revelar su identidad. Para recibir documentación completa de cualquier oportunidad, se requiere la firma de un acuerdo de confidencialidad.

---

**Filtros**:

Nivel 1 (tabs prominentes):
```
[Todas las oportunidades]    [Venta]    [Capital Raise]
```

Nivel 2 (chips/tags debajo):
```
[Real Estate]  [Hotelería]  [Agroindustria]  [Industrial]  [Salud]
```

**Notas de diseño**: Los filtros de nivel 1 son tabs con estilo de botón (el activo tiene fondo Forest Green, texto Warm White; los inactivos tienen fondo transparente, texto Charcoal, borde Stone Gray). Los filtros de nivel 2 son chips más pequeños que se activan/desactivan. Ambos niveles se combinan (puedo ver "Venta + Hotelería").

---

**Resumen por vertical** (se actualiza con los filtros):

```
Real Estate: X oportunidades  |  Hotelería: X  |  Agroindustria: X  |  Industrial: X  |  Salud: X
```

---

**Blind Profile Card** (componente repetido):

```
┌──────────────────────────────────┐
│  [Tag: VENTA]    [Tag: HOTELERÍA]│
│                                  │
│  Hotel en Isla de Margarita      │  ← tipo de activo + ubicación general
│                                  │
│  96 apartamentos vacacionales    │  ← rango de tamaño
│  USD $20M - $30M                 │  ← rango de precio
│                                  │
│  Apart-hotel 4 estrellas en      │  ← highlight (1-2 oraciones)
│  zona turística consolidada,     │
│  operativo con ocupación activa. │
│                                  │
│  [Solicitar información →]       │  ← CTA
└──────────────────────────────────┘
```

**Notas de diseño**: Cards con fondo Warm White, borde fino Stone Gray. Tags en la esquina superior: tipo de transacción (Forest Green pill) y vertical (Stone Gray pill). Headline del card (tipo de activo + ubicación) en Charcoal, Montserrat 600. Datos en Source Sans 3. Highlight en Charcoal italic. CTA "Solicitar información" en Antique Gold con arrow. Grid de 3 columnas en desktop, 2 en tablet, 1 en mobile.

---

**CTA Band (NDA)**:

> **¿Interesado en alguna oportunidad?**
> Solicite acceso a nuestro portafolio completo bajo acuerdo de confidencialidad.
> `[Solicitar acceso →]`  `[Contactar a T3 →]`

---

## 8. SOBRE NOSOTROS

### Layout

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                         │
├─────────────────────────────────────────────────┤
│  PAGE HEADER                                    │
│  Headline + por qué existe T3                   │
├─────────────────────────────────────────────────┤
│                                                 │
│  EQUIPO (cards de perfil)                       │
│  Tovi (prominente) + Guillermo + Fernando       │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  MODELO OPERATIVO                               │
│  (director de orquesta + red de aliados)        │
│                                                 │
├─────────────────────────────────────────────────┤
│  CTA BAND                                       │
├─────────────────────────────────────────────────┤
│  FOOTER                                         │
└─────────────────────────────────────────────────┘
```

### Copy

**Page Header**

**Headline**: Sobre T3 Advisors

**Copy (por qué existe T3)**:

> Venezuela tiene activos comerciales que se transan a una fracción de su valor, un mercado de bienes raíces comerciales sin intermediación profesional, y millones de venezolanos en el exterior con capital acumulado y conexión con el país. Lo que no tenía era un puente profesional entre ambos mundos.
>
> T3 Advisors nació para ser ese puente. Abrimos acceso a un mercado que está cerrado para outsiders y lo hacemos legible: información estructurada, documentación profesional, y un proceso claro desde el primer contacto hasta el cierre.

---

**Sección: Equipo**

**Headline**: Equipo

**Alejandro Tovar** — Socio Fundador / Operaciones Locales
> [PLACEHOLDER — Biografía de Tovi. Dirección: décadas de experiencia en bienes raíces comerciales y consultoría turística en Venezuela. Red de contactos y conocimiento del mercado construidos sobre el terreno. Enfatizar experiencia, no relación familiar. 3-4 oraciones.]

**Guillermo Tovar** — Estrategia y Relaciones Internacionales
> [PLACEHOLDER — Biografía de Guillermo. Dirección: basado en Europa, cara al inversionista, comunicación profesional, estrategia comercial. 2-3 oraciones.]

**Fernando Tovar** — Tecnología y Sistemas
> [PLACEHOLDER — Biografía de Fernando. Dirección: infraestructura tecnológica, automatización, gestión de datos, sistemas que permiten velocidad y escala. 2-3 oraciones.]

**Notas de diseño**: Tovi aparece primero y más prominente (card más grande, o sección full-width). Guillermo y Fernando aparecen debajo en cards más compactas, lado a lado. Fotos cuadradas, bordes redondeados mínimos. Si no hay fotos, usar iniciales sobre fondo Forest Green. Nombre en Montserrat 600 Forest Green. Rol en Source Sans 3 400 Charcoal. Bio en Source Sans 3 400 Charcoal.

---

**Sección: Modelo operativo**

**Headline**: Cómo operamos

> T3 Advisors actúa como coordinador de cada transacción. Nuestro equipo produce los materiales, identifica las contrapartes, y gestiona el proceso. Pero cada especialidad tiene su profesional: abogados para los contratos, avaluadores para las valoraciones, auditores para las revisiones financieras, peritos para las inspecciones técnicas.
>
> Si las partes ya tienen profesionales de confianza, trabajamos con ellos. Si no, ponemos nuestra red a disposición. En cualquier caso, T3 coordina el trabajo de todos para que la transacción avance de manera ordenada.

---

**CTA Band**:

> **¿Quiere trabajar con nosotros?**
> `[Contactar a T3 Advisors →]`

---

## 9. CONTACTO

### Layout

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                         │
├─────────────────────────────────────────────────┤
│                                                 │
│  CONTENIDO (2 columnas: form izq, datos der)    │
│  ┌───────────────┐  ┌───────────────┐           │
│  │  Formulario   │  │  Datos de     │           │
│  │               │  │  contacto     │           │
│  │  Nombre       │  │               │           │
│  │  Email        │  │  Email        │           │
│  │  Empresa      │  │  Teléfono VE  │           │
│  │  Teléfono     │  │  Teléfono EU  │           │
│  │  Mensaje      │  │               │           │
│  │  Verticales   │  │  Ubicaciones  │           │
│  │  [Enviar]     │  │               │           │
│  └───────────────┘  └───────────────┘           │
│                                                 │
├─────────────────────────────────────────────────┤
│  FOOTER                                         │
└─────────────────────────────────────────────────┘
```

### Copy

**Headline**: Contacto

**Sub**: Cuéntenos qué busca. Le responderemos en un máximo de 48 horas.

**Formulario**:
- Nombre (required)
- Email (required)
- Empresa (optional)
- Teléfono (optional)
- Mensaje (textarea, optional)
- Verticales de interés (checkboxes, optional): Real Estate, Hotelería, Agroindustria, Industrial / Energía, Salud
- `[Enviar mensaje →]`

**Columna de datos directos**:

> **Email**
> info@t3-advisors.com
>
> **Teléfono Venezuela**
> +58 XXX XXX XXXX
>
> **Teléfono Europa**
> +34 XXX XXX XXXX
>
> **Oficinas**
> Caracas, Venezuela
> Madrid, España

**Confirmación post-envío**: "Mensaje recibido. Le contactaremos en un máximo de 48 horas."

**Notas de diseño**: Layout de 2 columnas en desktop (60/40 split), stack en mobile (form primero, datos después). Formulario con inputs limpios: borde inferior Stone Gray (sin cajas completas; estilo material design simplificado). Botón de envío con fondo Forest Green, texto Warm White. Checkboxes con acento Antique Gold.

---

## 10. Diferencias con el contexto operativo (pendientes de reconciliar)

El documento `web_proyecto_contexto_operativo.md` tiene un sitemap diferente. Aquí se documentan las diferencias para resolverlas en sesión posterior:

| Contexto operativo | Conceptualización | Propuesta |
|---|---|---|
| `/services` (proceso de 3 pasos) | "Para Vendedores" (6 fases) | **Reemplazar Services por Para Vendedores**. Las 6 fases son más completas y alineadas con el source of truth. |
| `/sectors` (verticales) | Absorbido por Portafolio (filtros) + Home (sección de verticales) | **Eliminar Sectors como página independiente**. Las verticales viven como filtros en el portafolio y como sección en el Home. No justifica página propia. |
| No existe | "¿Por qué Venezuela?" (tesis macro) | **Agregar página nueva**. Es el diferenciador clave de T3 vs. cualquier firma comparable. |
| No existe | "Para Inversionistas" (proceso del comprador) | **Agregar página nueva**. El comprador necesita su propia página de proceso. |
| `/about` (equipo + posicionamiento) | "Sobre Nosotros" (por qué nació T3 + equipo + modelo) | **Compatible**. Solo expandir contenido. |

**Sitemap reconciliado propuesto**:

```
/[locale]/                    → Home
/[locale]/why-venezuela       → ¿Por qué Venezuela?
/[locale]/investors           → Para Inversionistas
/[locale]/sellers             → Para Vendedores
/[locale]/portfolio           → Portafolio
/[locale]/about               → Sobre Nosotros
/[locale]/contact             → Contacto
/[locale]/privacy             → Política de Privacidad
/admin/                       → Admin CMS
```

---

## 11. Próximos pasos

### Necesito de Fernando:

1. **Reacción al hero**: ¿Opción A, B, C, o mezcla? ¿Qué tono resuena más?
2. **Referencias visuales**: 3-5 URLs de sitios cuyo look and feel te guste, con notas de qué te gusta de cada uno
3. **Biografías del equipo**: especialmente Tovi, que es la figura más prominente en el About
4. **Selección de oportunidades para el portafolio**: ¿cuáles de las 50+ aparecen como blind profiles en la web?
5. **Datos de contacto**: teléfonos, ciudades correctas para el footer y la página de contacto
6. **Validación del tono**: ¿el copy se siente como T3? ¿Demasiado formal, muy suelto, alguna sección que chirría?

### Lo que sigue:

- Refinar copy con base en el feedback de Fernando
- Producir versión inglés como texto nativo paralelo (no traducción)
- Reconciliar formalmente con el contexto operativo
- Empezar implementación en el repo t3-web

---

*Documento de trabajo. No es producción. Sujeto a iteración con el equipo.*
