# Conceptualización de Contenido: Página Web T3 Advisors

*Documento maestro de conclusiones de la sesión de brainstorming del 22 de marzo de 2026.*
*Este documento captura todas las decisiones conceptuales sobre QUÉ decir, CÓMO decirlo, y POR QUÉ, para cada página del sitio web. Debe contrastarse con `web_proyecto_contexto_operativo.md` (decisiones técnicas) en una sesión posterior.*

---

## 1. Contexto: Por qué existe este documento

T3 Advisors está construyendo su página web corporativa (t3-advisors.com). Antes de definir diseño o implementación, se realizó una sesión de conceptualización para responder: ¿qué información va en la página, cómo se presenta, y por qué eso añade valor al negocio?

La sesión incluyó el análisis de tres páginas web de referencia del mismo modelo de negocio (intermediación M&A / advisory):
- **Viking Mergers & Acquisitions** (vikingmergers.com): la más parecida a T3 en estructura de servicio
- **MidStreet Mergers & Acquisitions** (midstreet.com): la que mejor copy tiene
- **Woodbridge International / Mariner** (woodbridgegrp.com): la más sofisticada y agresiva en content marketing

Se contrastaron con la identidad de marca de T3, el caso de inversión Venezuela, el alcance de servicios transaccionales, la oferta de servicios, y el guión de ventas.

### Documentos fuente consultados

| Documento | Ubicación | Relevancia |
|---|---|---|
| Identidad de marca (ES) | `_compartido/contexto/marca/identidad_marca_ES.md` | Posicionamiento, tono, personalidad, visual |
| Identidad de marca (EN) | `_compartido/contexto/marca/identidad_marca_EN.md` | Versión inglés |
| Caso de inversión Venezuela | `_compartido/contexto/mercado/caso_inversion_venezuela.md` | Tesis macro, datos duros, precedentes |
| Alcance de servicios transaccionales | `_compartido/contexto/fundamentos/alcance_servicios_transaccionales.md` | Source of truth del proceso y fases |
| Oferta de servicios (one-pager) | `_compartido/contexto/proceso_comercial/oferta_servicios_onepager.md` | Versión simplificada de la oferta |
| Guión de ventas | `_compartido/contexto/proceso_comercial/guion_ventas.md` | Conversación tipo con vendedores |
| Contexto operativo web | `_compartido/staging/contexto/web_proyecto_contexto_operativo.md` | Decisiones técnicas del proyecto |

---

## 2. Qué aprendimos de los tres sitios de referencia

### El hallazgo fundamental

Viking, MidStreet y Woodbridge operan en mercados donde el concepto de "vender una empresa" ya está entendido. Sus visitantes no necesitan que les expliquen por qué Estados Unidos es un buen lugar para hacer transacciones. La única pregunta para el visitante es: "¿cuál firma elijo?" Por eso sus sitios web son 85-98% orientados al vendedor, compiten dentro de una categoría conocida, y usan "free valuation" como mecanismo de conversión.

T3 tiene un problema de comunicación fundamentalmente distinto. Antes de que alguien se pregunte "¿trabajo con T3?", primero tiene que creer que Venezuela es una oportunidad viable. El sitio web tiene que hacer dos cosas que ninguno de los referentes necesita hacer:

1. **Vender el mercado** (la tesis Venezuela)
2. **Vender a T3 como el partner dentro de ese mercado**

Esta diferencia cambia toda la arquitectura de contenido.

### Lo que cada referente enseña conceptualmente

**Viking enseña: claridad y confianza a través de simplicidad.**
- Cuando dices una cosa clara y la repites, se convierte en tu identidad. "Selling Your Business Is Our Only Business." Todo apoya ese mensaje.
- El proceso paso a paso genera confianza no solo al vendedor sino también al comprador, porque dice implícitamente "aquí hay un proceso profesional, no improvisación."
- Tiene dos tiers de servicio: Business Broker ($1-10M) y M&A Advisory ($10-100M+). Esta diferencia la determina el tipo de contraparte: si es más informal, el proceso puede ser menos estructurado; si es institucional, es M&A completo.
- Su página de "cómo funciona" para vendedores y compradores por separado es un modelo que T3 debe replicar conceptualmente.

**MidStreet enseña: empatía y lenguaje plano crean más confianza que sofisticación.**
- "We know this is the biggest financial decision of your life." Hablan A la persona, no SOBRE los servicios.
- El guión de ventas de T3 ya tiene este tono: "Ayudamos a propietarios de activos en Venezuela a vender o conseguir inversión, encargándonos de todo el proceso desde la preparación hasta el cierre." Simple. Directo. Humano.
- Su FAQ responde objeciones reales: "¿Y si no se vende?", "¿Cuánto se tarda?", "¿Cuánto cobran?" El guión de ventas de T3 ya tiene estas respuestas.

**Woodbridge enseña: números específicos crean autoridad más que afirmaciones generales.**
- "20 bids promedio" es mejor que "atraemos muchos compradores." "150 días" es mejor que "nos movemos rápido."
- Para T3, los números específicos no son sobre la firma (que no tiene track record aún) sino sobre el MERCADO: "50+ oportunidades en 5 sectores", datos del caso de inversión. Usar números del mercado en vez de números de la firma comunica profundidad de conocimiento, que es lo que genera confianza cuando no tienes track record.

### Lo que ninguno de los tres hace (y T3 necesita hacer)

- Ninguno necesita explicar su mercado. T3 sí.
- Ninguno tiene un portfolio tan diverso para mostrar (52 oportunidades, 5 verticales). T3 sí.
- Ninguno necesita hablar al comprador con contenido substantivo. T3 sí, porque la tesis macro Venezuela es un hook poderoso que no existe en ningún otro sitio.
- Ninguno opera en un mercado donde la opacidad misma es el problema. T3 sí.

### Lo que no sirve de los referentes para T3

- **"Free valuation" como lead magnet**: T3 no hace valoraciones formales y el contexto Venezuela hace que una valuación rápida no tenga sentido.
- **Trust metrics de track record**: T3 no tiene 950 deals ni 30 años. No se puede fingir.
- **"Branded methodology"** (como el "StreetSmart" de MidStreet): T3 no quiere pasarse de listillo. Quiere comunicar: "Sabemos claramente lo que hay que hacer. Claro, conciso, seguros."
- **"Success fee messaging" prominente**: T3 no quiere hablar de dinero saliendo de los bolsillos de nadie en la web. El objetivo es generar interés y que la gente contacte.
- **Definirse por la ausencia de competencia** ("cero brokerages institucionales"): T3 no quiere decir lo que no son los demás; quiere decir lo que hace T3 y por qué T3 es relevante.
- **Conceptos internos como diferenciadores customer-facing**: Cosas como "AI-driven velocity" son ventajas operativas internas, no diferenciadores que se comunican al cliente en la web.

---

## 3. Naturaleza y función del sitio web

### Qué es la página web

Es la cara institucional y pública de T3 Advisors. Cualquier persona del planeta que se meta tiene que entender quiénes somos y qué hacemos. No es solo la cara internacional ni solo para compradores; es la presencia institucional de la firma.

### Para quién es

El sitio atiende a dos audiencias con necesidades distintas:

**Compradores/inversionistas** (audiencia ligeramente prioritaria en el homepage):
- Diáspora venezolana con capital acumulado (Miami, Madrid, etc.)
- Fund managers y family offices en LATAM, EEUU, Europa
- Inversores internacionales buscando oportunidades en mercados frontera
- Necesitan entender la tesis Venezuela, ver que hay oportunidades reales documentadas, y saber cómo participar

**Vendedores** (audiencia importante, con sección dedicada):
- Propietarios de activos en Venezuela que quieren vender o buscar inversión
- Algunos llegan porque Tovi (Alejandro Tovar, socio fundador en Venezuela) les pasó el link
- Algunos llegan orgánicamente y el sitio los capta: ven que T3 es serio y quieren vender con ellos
- Necesitan ver profesionalismo, seriedad, y que T3 apunta a capital sofisticado. También quieren ver su propio activo si ya están trabajando con T3 (blind profile en el portfolio)

### Lo que el sitio NO es

- No es solo para compradores internacionales
- No es un marketplace ni un clasificado
- No es una startup de proptech
- No vende agresivamente ni usa lenguaje de infomercial

---

## 4. Estructura conceptual de páginas

| Página | Función conceptual | Audiencia primaria |
|---|---|---|
| **Home** | Sala de recepción institucional. En segundos entiendes la firma, hueles la tesis, ves que hay oportunidades reales, y tienes caminos claros. | Ambas, ligeramente comprador |
| **¿Por qué Venezuela?** | Tesis macro extendida. Educativa. El "por qué" del mercado. | Compradores |
| **Para Inversionistas** | El "cómo" para compradores: proceso, aliados, riesgos, inversión extranjera. | Compradores |
| **Para Vendedores** | El "cómo" para vendedores: proceso completo (6 fases del alcance de servicios), FAQ, por qué T3. | Vendedores |
| **Portafolio** | Blind profiles filtrados. Teoría del bikini. | Ambas |
| **Sobre Nosotros** | Por qué nació T3. Equipo. Modelo operativo. | Ambas |
| **Contacto** | Formulario + datos directos. | Ambas |

---

## 5. Homepage: decisiones conceptuales

### Función

El homepage es una sala de recepción. No intenta decirlo todo; intenta que el visitante quiera saber más. En 5 segundos, el visitante entiende qué es T3 y por qué le importa.

### Orientación

Ligeramente orientada al comprador. La tesis Venezuela con datos duros, la urgencia analítica, las verticales de oportunidades. Pero implícitamente le dice al vendedor que esta es una firma seria, que apunta a capital sofisticado, que los deals están anonimizados profesionalmente.

### La reacción emocional que debe provocar

Para el comprador: "Existen contrapartes serias en Venezuela con las cuales trabajar para encontrar y concretar inversiones. Nunca había visto Venezuela presentada así, con personas profesionales que se ve que están haciendo las cosas con los estándares que yo, como inversionista y capitalista serio, quisiera tener como contraparte."

Para el vendedor: "Esta gente es de otro nivel. Aquí sí se puede vender en serio."

### Hero: dirección conceptual

Se eligió el **Camino A (abrir con el mercado)** combinado con elementos del **Camino C (la narrativa del vacío)**:

- El foco es la oportunidad Venezuela; T3 es el vehículo que la hace accesible
- Combinado con la narrativa de que existe un vacío (no hay intermediación profesional) y T3 lo llena
- Pero SIN usar la ausencia de competencia como argumento ("cero brokerages"). T3 se define por lo que ES y por qué es relevante, no por lo que otros no son
- T3 no se ve a sí mismo compitiendo contra otros; se ve como abridor del mercado. La dificultad no está en que los compitan sino en lograr ejecutar en un entorno difícil

**Restricciones de lenguaje para el hero:**
- No usar jerga técnica que una persona no financiera no entienda (ej: "20-30% del costo de reposición" es inaccesible; hay que decir lo mismo en lenguaje plano)
- Storytelling interesante, no slogans publicitarios
- Tono de analista confiado, no de vendedor
- Datos duros accesibles que crean curiosidad

### Tesis Venezuela en el homepage

El homepage tiene un **sabor fuerte de la tesis**: 2-3 datos duros y unas tres oraciones que consoliden la tesis de inversión y creen interés y cierta urgencia. La tesis completa vive en su propia página dedicada ("¿Por qué Venezuela?"); el homepage solo da el appetizer.

### Portafolio en el homepage

El portafolio NO está embebido en el homepage con previews de blind profiles. En su lugar, hay una sección que explica qué tipos de oportunidades tiene T3 (verticales, tipos de transacción), con links MUY prominentes para ir a ver el portafolio completo. La razón: embeber el portfolio en el homepage haría la página demasiado engorrosa.

### Estructura conceptual del homepage (secciones, no diseño)

1. **Hero**: Headline + sub-headline que comunique qué es T3, la oportunidad Venezuela en lenguaje accesible, y por qué importa. Tono analista. Dual CTA o caminos claros para comprador y vendedor.
2. **Sabor de la tesis**: 2-3 datos duros sobre Venezuela como oportunidad de inversión. Tres oraciones máximo. Urgencia descriptiva, no vendedora. Link a la página completa de "¿Por qué Venezuela?"
3. **Qué hacemos (brief)**: Descripción concisa de lo que T3 hace. No los 6 pasos del alcance; una síntesis institucional. Que se entienda rápido.
4. **Sección de oportunidades/verticales**: Los sectores en los que T3 opera (Real Estate, Hospitality, Agribusiness, Industrial/Energy, Healthcare), con conteos de oportunidades por sector y los tipos de transacción (Venta y Capital Raise). Links prominentes al portafolio.
5. **Equipo (brief)**: Presencia mínima del equipo para generar confianza. Link a About.
6. **CTA de contacto**: Formulario simple o link a la página de contacto.

---

## 6. "¿Por qué Venezuela?" (página de tesis)

### Función

Página educativa dedicada a la tesis macro de inversión en Venezuela. Es la extensión del appetizer que aparece en el homepage. Aquí se desarrolla completamente el caso.

### Contenido conceptual

Esta página adapta el contenido de `caso_inversion_venezuela.md` a formato web. Los ejes principales:

1. **El contexto macro**: la crisis, la transición, la apertura cautelosa. Lo que ha pasado en Venezuela y por qué hay una ventana.
2. **La dislocación de precios**: activos comerciales a una fracción de lo que cuestan en mercados comparables de la región. Esto hay que decirlo en lenguaje accesible, no en jerga de "costo de reposición."
3. **Precedentes históricos**: qué pasó en Argentina post-2001, Colombia post-FARC, Myanmar post-2011, Kurdistan post-2003. Qué le dice eso a alguien que considera Venezuela hoy.
4. **Los riesgos**: riesgo político, corrupción, infraestructura deteriorada, seguridad. Honestidad radical. Venezuela no es para todos y se dice claramente.
5. **El capital sofisticado ya está mirando**: quiénes (Gramercy, Goldman Sachs, UBS) y qué están diciendo. No como argumento de autoridad sino como contexto de que la oportunidad es reconocida.

### Tono

Tono de analista frío. Descriptivo del contexto, la magnitud de la oportunidad, y el riesgo. No orientado excesivamente a lo internacional ni excesivamente a Venezuela. Agnóstico: presenta la información para que el lector saque sus propias conclusiones.

La urgencia se crea a través de tres ejes:
1. **Timing**: la ventana de oportunidad es sensible al tiempo (régimen en transición, reformas recientes)
2. **Pricing**: los activos están a precios históricamente bajos, pero la recuperación ya comenzó
3. **Competencia implícita**: otros inversores ya se están moviendo (sin decirlo de manera agresiva)

Pero el tono sobre estos tres ejes es de DESCRIPCIÓN, no de venta. Como un informe de un analista, no como un pitch de ventas.

---

## 7. "Para Inversionistas" (página del comprador)

### Función

La página que responde "ya me interesa Venezuela, ¿y ahora qué?" Es el "cómo" para compradores. NO es la tesis (eso es otra página). Puede tener hints de la tesis o de la urgencia, pero no es la cara de esta página.

### Contenido conceptual

**Sección 1: El proceso desde el lado del comprador**

Columna vertebral de la página. Los pasos que un comprador/inversionista sigue al trabajar con T3:

1. Ves nuestro portafolio o recibes un teaser
2. Expresas interés en una oportunidad
3. Firmas acuerdo de confidencialidad (NDA)
4. Recibes documentación completa (memorándum confidencial)
5. Evalúas con apoyo de profesionales locales (que T3 coordina)
6. Haces una oferta (carta de intención)
7. Negociación y cierre

Estos 7 pasos se presentan de manera clara, visual, y accesible. El comprador entiende exactamente qué esperar y cómo avanza el proceso.

**Sección 2: Red de aliados profesionales**

T3 trabaja con una red de profesionales especializados en Venezuela con track record de transacciones, que T3 coordina y a los que puede conectar al comprador. Se mencionan los TIPOS de profesionales, NO los nombres:

- Abogados transaccionales locales
- Abogados de cumplimiento normativo / sanciones (OFAC)
- Auditores y contadores públicos
- Avaluadores certificados
- Peritos técnicos y ambientales

No se nombran firmas específicas porque: (a) los nombres pueden confundir y llevar a otras páginas web; (b) los aliados podrían cambiar con el tiempo dependiendo de la oportunidad; (c) lo que importa comunicar es la CAPACIDAD de T3 de coordinar este ecosistema de profesionales, no quiénes son individualmente.

Se comunica que T3 tiene esta capacidad y que trabaja con gente seria.

**Sección 3: Los riesgos**

Honestidad radical aplicada directamente: invertir en Venezuela tiene complejidades significativas. Se mencionan los principales riesgos (político, regulatorio, operativo, OFAC). Esto genera credibilidad: un intermediario que te dice qué puede salir mal es un intermediario en el que confías.

**Sección 4: Cómo invierte un extranjero en Venezuela**

Sección específica para inversionistas extranjeros (no necesaria para venezolanos que ya conocen el terreno). Comunica que:

- La inversión en Venezuela tiene particularidades legales, fiscales y operativas
- T3 conoce el terreno y trabaja con profesionales especializados en estructurar inversiones extranjeras en el país

Cubre de manera introductoria (appetizer, no deep dive):
- Vehículos de inversión comunes (empresa domiciliada en Venezuela, etc.)
- Marco legal para inversión extranjera
- Cumplimiento normativo / sanciones (OFAC)
- Consideraciones sobre repatriación de capital

El objetivo NO es dar asesoría legal ni pretender ser expertos en esto. El objetivo es demostrar que T3 sabe que estos temas son importantes para el inversionista extranjero y que es capaz de conectarlos con los profesionales que les van a facilitar esa información y asesoría.

Esto es especialmente importante para inversionistas estadounidenses/anglosajones, europeos, y latinoamericanos (colombianos, mexicanos) que necesitan esa seguridad pero todavía no tienen confianza suficiente en un mercado tan opaco y desestructurado que no saben cómo operar en él.

---

## 8. "Para Vendedores" (página del vendedor)

### Función

La página que le dice al vendedor exactamente cómo trabaja T3 con él, qué le pide, qué hace por él, y cómo lo lleva a términos su transacción.

### Source of truth

El contenido de esta página debe basarse en el **alcance de servicios transaccionales** (`alcance_servicios_transaccionales.md`), que es el source of truth del proceso completo. NO en la versión simplificada de 3 pasos de la oferta de servicios.

El alcance define 6 fases con detalle sobre qué hace T3 y qué no hace en cada una:

1. **Pre-comercialización** (preparación del vendedor): construir expediente, enviar solicitud de información, identificar vacíos, desarrollar tesis de inversión, gestionar preparación legal
2. **Comercialización** (presentación inicial y NDA): producir teaser, identificar y contactar compradores, gestionar NDA, registrar interacciones
3. **Post-confidencialidad** (memorándum y reunión de presentación): producir CIM, coordinar reunión entre partes, gestionar flujo de información
4. **Carta de intención** (LOI): facilitar negociación de términos, asesorar comercialmente al vendedor, coordinar cronograma
5. **Debida diligencia**: organizar data room, facilitar flujo de información, coordinar especialistas, monitorear cronograma, alertar sobre problemas
6. **Negociación y cierre**: facilitar negociación comercial, coordinar cronograma hacia cierre, estar presente en el cierre

### Cómo adaptar las 6 fases a la web

No se trata de pegar el documento técnico en la web. Se trata de traducirlo a un lenguaje accesible para el vendedor venezolano, que probablemente nunca ha vendido una empresa o un activo comercial de esta manera. El vendedor necesita entender:

- Qué va a pasar en cada paso
- Qué necesita aportar él (documentos, información, acceso)
- Qué hace T3 por él
- Qué NO hace T3 (para que no haya expectativas incorrectas)
- Que hay un proceso claro y profesional, no improvisación

### Principio rector para la página del vendedor

"T3 es el director de orquesta, no toca ningún instrumento." Esto es poderoso como concepto para el vendedor: entiende que T3 coordina todo, pero que cada especialista hace su trabajo. El vendedor no necesita entender todos los detalles de la tabla de especialistas; necesita saber que T3 se encarga de que todo funcione.

### Contenido adicional para la página del vendedor

**FAQ del vendedor** (adaptado del guión de ventas):
- "¿Qué necesito para empezar?" — Una conversación. Después orientamos sobre documentos. No necesitas tener todo listo.
- "¿Cuánto cobran?" — Porcentaje sobre la transacción, solo si se cierra. Se define caso por caso.
- "¿Cuánto se tarda?" — Depende del activo y la documentación. T3 mueve todo lo más rápido posible.
- "¿Me garantizan la venta?" — No, y desconfía de quien lo garantice. Lo que garantizamos es que tu activo se presenta de la mejor manera.
- "¿Y si no se vende?" — No cobramos.
- "Yo no quiero vender, quiero buscar un socio o inversionista" — También hacemos eso. El proceso es similar.

**Por qué trabajar con T3** (adaptado del guión de ventas):
- **Acceso**: damos visibilidad al activo frente a compradores e inversionistas a los que el vendedor por su cuenta no llega
- **Presentación**: la diferencia entre un activo que se toma en serio y uno que se ignora es cómo se presenta
- **Confidencialidad y proceso**: todo se maneja bajo NDA, cada paso tiene estructura clara
- **Conocimiento del mercado**: 50+ oportunidades en distintos sectores generan conocimiento acumulado

### Nota sobre los dos tipos de transacción

La web deja claro que T3 trabaja con dos tipos de operaciones: **Venta** (transferir propiedad de un activo) y **Capital Raise** (conseguir capital para un proyecto). La parte de Servicios (S-) no se incluye en la web por ahora. El proceso de ambos tipos es similar desde la perspectiva del vendedor/emprendedor, pero la naturaleza de la oportunidad es distinta.

---

## 9. Portafolio (página de oportunidades)

### Función

Mostrar las oportunidades de inversión que T3 tiene en cartera, bajo la "teoría del bikini": lo suficiente para que un inversionista se interese, pero no lo suficiente para que pueda contactar al activo directamente sin T3.

### Blind profiles: qué se muestra

Cada oportunidad aparece como un blind profile que muestra SOLO:
- Vertical (RE, HOS, AG, IND, HC)
- Tipo de transacción (Venta o Capital Raise)
- Ubicación general (estado/región, nunca dirección)
- Tipo de activo
- Rango de tamaño
- Rango de precio
- Un highlight de 1-2 oraciones

Sin nombres de activos, sin direcciones, sin nombres de vendedores, sin fotos identificables.

### Visibilidad

Los blind profiles son **públicos y anónimos**. Cualquier visitante puede verlos sin registrarse. Para recibir el teaser completo con la identidad del activo, se requiere firma de NDA.

### Sistema de filtros

Dos niveles de filtrado con distinta prominencia:

**Nivel 1 (más prominente): Tipo de transacción**
- Venta
- Capital Raise
- (Ver todas)

**Nivel 2: Vertical**
- Real Estate
- Hospitality
- Agribusiness
- Industrial / Energy
- Healthcare

El filtrado debe ser fácil e intuitivo. Un inversionista interesado en oportunidades agrícolas puede ir directo a ver las de cacao, azúcar, etc. Un inversionista interesado en hoteles ve todas las hoteleras.

### CTA del portafolio

Prominente en toda la página: "Solicite acceso a nuestro portafolio completo bajo NDA" o equivalente. El objetivo es que el visitante que ve algo interesante contacte a T3.

---

## 10. Sobre Nosotros (About)

### Función

Generar confianza a través de la historia de la firma, el equipo, y el modelo operativo.

### Contenido conceptual

**Sección 1: Por qué nació T3**

Una especie de tesis de por qué esta firma existe y por qué es importante en Venezuela. No un origin story emotivo del tipo Viking/MidStreet, sino una descripción clara de qué vacío llena T3:
- Venezuela no tiene intermediación profesional de bienes raíces comerciales
- Los activos están masivamente subvalorados y no hay quién los presente ante capital serio
- T3 nació para ser ese puente: acceso y traducción entre un mercado opaco y el capital que quiere entrar

**Sección 2: Equipo**

Presentado por rol y capacidad, no por relación familiar (decisión de la identidad de marca §10).

**Alejandro Tovar (Tovi)** es el más prominente:
- Socio fundador / operaciones locales
- Décadas de experiencia como consultor turístico y en transacciones de bienes raíces comerciales en Venezuela
- Ha construido un portafolio y una red de contactos en el mercado venezolano
- (La biografía detallada se redacta en una sesión posterior)

**Guillermo Tovar** y **Fernando Tovar** aparecen de manera menos prominente:
- Guillermo: Estrategia y Relaciones Internacionales (basado en Europa)
- Fernando: Tecnología y Sistemas
- (Bios breves, se redactan después)

**Sección 3: Red de aliados (modelo de coordinación)**

Cómo opera T3: "director de orquesta, no toca ningún instrumento." Trabaja con una red de profesionales especializados en Venezuela (abogados, auditores, avaluadores, peritos) que T3 coordina. Se mencionan tipos de profesionales, no nombres.

---

## 11. Contacto

Formulario simple + datos de contacto directos (email, teléfono). El formulario es un mecanismo de generación de leads (los datos van a la tabla `leads` en Supabase).

---

## 12. Decisiones transversales

### Tono de la web

El tono definido en la identidad de marca (§6) aplica directamente:
- **Directo**: sin relleno corporativo, sin calificadores vacíos
- **Informado**: se lidera con datos y contexto, no con emoción o hype
- **Honesto sobre el riesgo**: se dice qué puede salir mal
- **Urgente sin presión**: la oportunidad es sensible al tiempo pero no somos vendedores
- **Bilingüe nativo**: español e inglés con igual fluidez, ninguno es traducción del otro

### La urgencia: cómo se crea

La urgencia se crea a través de tres ejes, todos reales:
1. **Timing**: la ventana de oportunidad es sensible al tiempo
2. **Pricing**: los activos están baratos ahora, no lo estarán siempre
3. **Competencia implícita**: otros inversores ya se están moviendo

Pero el tono es de **analista frío**, no de vendedor. Descriptivo del contexto, la magnitud y el riesgo. No orientado excesivamente a lo internacional ni a Venezuela. Agnóstico: se presenta la información para que el lector formule sus propias conclusiones.

### La confianza: cómo se construye sin track record

T3 no tiene 950 deals ni 30 años. La confianza se construye con:

1. **Números del mercado, no de la firma**: "50+ oportunidades en 5 sectores", datos del caso de inversión sobre pricing y contexto. Estos números comunican profundidad de conocimiento y acceso, que es lo que genera confianza cuando no tienes track record de transacciones cerradas.
2. **La calidad del sitio web mismo**: un sitio web profesional, bien estructurado, con información clara, es en sí mismo la prueba de rigor. Si el sitio se ve institucional, el visitante asume que la firma opera al mismo nivel.
3. **Honestidad radical**: reconocer riesgos abiertamente (Venezuela no es para todos) genera más credibilidad que vender un paraíso.
4. **Profundidad del portafolio**: mostrar 50+ oportunidades organizadas por vertical demuestra acceso real al mercado.
5. **Proceso claro**: mostrar un proceso paso a paso para vendedores y compradores demuestra que hay un método profesional, no improvisación.

### Lo que NO se pone en la web

- No se habla de fees, comisiones, ni de dinero saliendo de los bolsillos de nadie. El objetivo es generar interés y que contacten.
- No se usan conceptos internos como diferenciadores customer-facing (ej: "AI-driven velocity", "StreetSmart methodology").
- No se define a T3 por la ausencia de competencia ("somos los únicos", "no existen brokerages"). T3 se define por lo que hace y por qué es relevante.
- No se usan términos técnicos sin explicar. Si un concepto no lo entiende alguien que no es financiero, hay que decirlo de otra manera.
- No se ponen trust metrics que no existen (deals cerrados, años, close rate).
- No se mencionan nombres de aliados específicos.
- No se incluye la vertical de Servicios (S-) por ahora; solo Venta y Capital Raise.

### Tipos de transacción en toda la web

Queda claro en todo el sitio que T3 trabaja con dos tipos de operaciones:
- **Venta**: transferir propiedad de un activo existente
- **Capital Raise**: conseguir capital para un proyecto

Estos son los dos tipos que aparecen como filtros en el portafolio, que se mencionan en el homepage, y que el visitante entiende como las dos formas de participar.

### Idioma

Sitio bilingüe 50/50 con toggle ES/EN. Cada página existe en ambos idiomas. Español como default (decisión del contexto operativo: la audiencia primaria es diáspora + locales que hablan español). Inglés para inversores internacionales.

---

## 13. Items que requieren desarrollo posterior

Estos temas emergieron en la conversación pero no están resueltos. Requieren trabajo en sesiones futuras:

### 13.1 Copy del hero del homepage

Se definió la dirección conceptual (Camino A + C: abrir con el mercado, incorporar la narrativa del vacío que T3 llena) pero no se escribió el copy. Necesita:
- Headline en lenguaje accesible (no técnico)
- Sub-headline que explique qué hace T3
- 2-3 datos duros en lenguaje plano
- Tres oraciones que consoliden la tesis y creen urgencia analítica

### 13.2 Guión del comprador

Existe el guión de ventas para vendedores pero no hay un equivalente escrito para compradores. Debería existir un documento que capture cómo es una conversación tipo con un comprador interesado: qué preguntan ellos, qué les explica T3. Ese documento alimentaría directamente el contenido de la página "Para Inversionistas."

### 13.3 Sección "Cómo invierte un extranjero en Venezuela"

La dirección está clara (appetizer, no deep dive; tipos de profesionales, no nombres; demostrar que T3 sabe que es importante sin pretender ser el experto). Pero el contenido específico necesita redacción. Debe cubrir: vehículos de inversión, marco legal, OFAC/sanciones, repatriación.

### 13.4 Adaptación del alcance de servicios a copy web del vendedor

Las 6 fases del alcance de servicios transaccionales necesitan traducirse a lenguaje accesible para el vendedor venezolano en formato web. El documento técnico es el source of truth pero no es copy web.

### 13.5 Biografía de Alejandro Tovar

Se definió que él es el miembro más prominente del equipo en el About. La biografía detallada se redacta en sesión posterior.

### 13.6 Selección de oportunidades para el portafolio

Hay 52 oportunidades en el vault. Se necesita curar cuáles aparecen como blind profiles en la web, en qué orden, y con qué highlights.

### 13.7 Contenido de la página "¿Por qué Venezuela?"

Se definió la estructura conceptual y el tono (analista frío, descriptivo, agnóstico), pero el contenido específico necesita adaptarse de `caso_inversion_venezuela.md` a formato web. Datos que necesitan traducirse a lenguaje accesible. Se necesita decidir qué datos son suficientemente estructurales para no quedar obsoletos rápidamente.

### 13.8 Contraste con contexto operativo

Este documento debe contrastarse con `web_proyecto_contexto_operativo.md` en una sesión posterior. El contexto operativo tiene un sitemap, decisiones de CMS, y estructura de páginas que pueden necesitar ajustes basados en las conclusiones conceptuales de este documento. Por ejemplo:
- El sitemap del contexto operativo tiene: Home, About, Services, Sectors, Portfolio, Contact, Privacy
- Este documento conceptual tiene: Home, ¿Por qué Venezuela?, Para Inversionistas, Para Vendedores, Portafolio, Sobre Nosotros, Contacto
- Las diferencias (Services → Para Vendedores, Sectors → absorbido por Portfolio con filtros, nueva página "¿Por qué Venezuela?", nueva página "Para Inversionistas") necesitan reconciliarse

---

## 14. Relación entre documentos fuente y páginas web

| Documento fuente | Página(s) que consume | Cómo lo consume |
|---|---|---|
| `caso_inversion_venezuela.md` | Homepage (sabor fuerte), ¿Por qué Venezuela? (extensión completa) | Adapta datos y narrativa a formato web, lenguaje accesible |
| `alcance_servicios_transaccionales.md` | Para Vendedores (6 fases), Para Inversionistas (roles de aliados), About (modelo de coordinación) | Source of truth del proceso; se traduce a copy accesible |
| `identidad_marca_ES.md` | Todas las páginas (tono), About (posicionamiento §1-3, equipo §10), Homepage (promesa "Access + Translation") | Guía de tono y personalidad en todo el sitio |
| `oferta_servicios_onepager.md` | Para Vendedores (referencia secundaria, versión simplificada) | Complemento al alcance, no reemplazo |
| `guion_ventas.md` | Para Vendedores (FAQ, "por qué T3") | Casi copy-ready para secciones de FAQ y argumentario |
| `paleta_colores.md` | Todas las páginas (visual) | Define el sistema de colores |
| Expedientes del vault | Portafolio (blind profiles) | Se extraen datos ciegos para cada oportunidad |
