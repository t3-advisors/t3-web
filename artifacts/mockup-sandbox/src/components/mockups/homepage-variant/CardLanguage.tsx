import { Activity, ArrowRight, Compass, FileText, Gem, Handshake, Landmark, Sun, Users, Zap } from "lucide-react";

const F = "#1B4332";
const GOLD = "#C9A84C";
const WW = "#F8F6F0";
const CH = "#2C2C2C";

const BTN_SHADOW = "0 4px 14px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)";

const GOLD_LINE = <div style={{ width: 40, height: 1, backgroundColor: GOLD, opacity: 0.6, marginBottom: 20 }} />;

const steps = [
  { num: "01", Icon: FileText, title: "Preparamos", desc: "Asesoramos al vendedor sobre qué documentación necesita, transformamos información dispersa en materiales profesionales, y presentamos cada oportunidad con el rigor que un inversionista espera." },
  { num: "02", Icon: Users, title: "Conectamos", desc: "Identificamos y contactamos compradores e inversionistas calificados. Filtramos interesados serios. Manejamos todo bajo acuerdos de confidencialidad: la identidad del activo solo se revela a contrapartes comprometidas." },
  { num: "03", Icon: Handshake, title: "Cerramos", desc: "Coordinamos reuniones entre las partes, facilitamos la negociación de términos, organizamos el flujo de documentos durante la debida diligencia, y acompañamos cada paso hasta la firma." },
];

const sectors = [
  { Icon: Landmark, label: "Bienes Raíces", desc: "Terrenos, oficinas, locales comerciales, complejos residenciales" },
  { Icon: Compass, label: "Hotelería y Turismo", desc: "Hoteles, posadas, resorts, proyectos turísticos" },
  { Icon: Sun, label: "Agroindustria", desc: "Fincas productivas, plantas procesadoras, destilerías" },
  { Icon: Zap, label: "Industrial y Energía", desc: "Plantas manufactureras, fábricas, infraestructura energética" },
  { Icon: Activity, label: "Salud", desc: "Clínicas, laboratorios, distribuidoras farmacéuticas" },
  { Icon: Gem, label: "Minería", desc: "Asentamientos mineros, concesiones, infraestructura extractiva" },
];

function PresenciaMap() {
  const W = 660, H = 330;
  const px = (lon: number) => ((lon + 180) / 360) * W;
  const py = (lat: number) => ((90 - lat) / 180) * H;
  const pt = (pairs: [number, number][]) =>
    "M " + pairs.map(([lon, lat]) => `${px(lon).toFixed(1)},${py(lat).toFixed(1)}`).join(" L ") + " Z";

  const vzlaX = px(-66), vzlaY = py(8);

  const cities = [
    { name: "MIAMI",      lon: -80.2, lat: 25.8, dx: -7, dy:  3, anchor: "end"    },
    { name: "NUEVA YORK", lon: -74,   lat: 40.7, dx:  0, dy: -8, anchor: "middle" },
    { name: "MADRID",     lon: -3.7,  lat: 40.4, dx:  7, dy:  9, anchor: "start"  },
    { name: "LONDRES",    lon: -0.1,  lat: 51.5, dx:  7, dy: -4, anchor: "start"  },
    { name: "DUBAI",      lon: 55.3,  lat: 25.3, dx:  7, dy:  3, anchor: "start"  },
    { name: "SÃO PAULO",  lon: -46.6, lat: -23.5,dx:  7, dy:  3, anchor: "start"  },
  ];

  const continents = [
    // South America
    pt([[-80,12],[-72,12],[-62,10],[-60,8],[-52,5],[-50,0],[-35,-5],[-34,-8],[-38,-15],[-42,-22],[-48,-28],[-50,-33],[-53,-34],[-57,-38],[-62,-46],[-66,-55],[-68,-54],[-65,-55],[-55,-52],[-50,-51],[-48,-28],[-45,-23],[-42,-20],[-38,-12],[-35,-6],[-38,-4],[-44,-2],[-44,0],[-52,4],[-58,6],[-63,7],[-65,0],[-68,-3],[-73,-8],[-77,-8],[-78,-2],[-80,0],[-80,6]]),
    // North America
    pt([[-168,72],[-140,62],[-125,48],[-125,38],[-115,30],[-108,23],[-90,15],[-83,10],[-78,8],[-76,9],[-80,12],[-80,16],[-75,20],[-70,21],[-65,18],[-60,15],[-62,11],[-66,9],[-72,10],[-80,15],[-85,20],[-85,25],[-80,25],[-65,40],[-60,47],[-67,48],[-70,50],[-65,55],[-62,63],[-68,63],[-80,65],[-100,68],[-120,68],[-130,65],[-140,62],[-150,60],[-160,62],[-168,72]]),
    // Europe
    pt([[-10,36],[-8,38],[-9,42],[-8,44],[0,44],[3,44],[5,46],[7,48],[12,50],[15,50],[20,55],[25,57],[28,60],[30,62],[28,64],[20,62],[15,58],[5,58],[0,57],[-5,52],[-5,48],[-2,46],[0,44],[-5,42],[-8,38],[-10,36]]),
    // Africa
    pt([[-18,16],[-15,12],[-10,5],[0,5],[8,5],[15,4],[20,4],[25,5],[30,2],[36,-2],[40,-8],[44,-12],[42,-18],[36,-26],[30,-34],[18,-35],[10,-35],[15,-25],[13,-20],[10,-5],[5,3],[5,10],[0,10],[-3,12],[-5,15],[-10,15],[-15,20],[-17,20],[-18,16]]),
    // Asia (north)
    pt([[26,42],[35,38],[45,42],[55,44],[65,52],[80,55],[100,55],[120,52],[135,48],[140,50],[142,52],[135,58],[120,65],[100,68],[80,70],[60,65],[40,62],[30,60],[26,58],[22,55],[22,50],[26,42]]),
    // Asia (south — India / SE Asia)
    pt([[38,38],[55,38],[75,38],[80,35],[85,30],[88,25],[85,15],[80,10],[75,10],[70,20],[65,25],[55,30],[45,36],[38,38]]),
    // Australia
    pt([[114,-22],[125,-18],[136,-12],[145,-15],[150,-23],[152,-28],[148,-36],[140,-38],[130,-34],[118,-30],[112,-24],[114,-22]]),
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }}>
      {/* graticule */}
      {[-60,-30,0,30,60].map(lat => (
        <line key={lat} x1={0} y1={py(lat)} x2={W} y2={py(lat)} stroke="rgba(248,246,240,0.06)" strokeWidth={0.5} />
      ))}
      {[-150,-120,-90,-60,-30,0,30,60,90,120,150].map(lon => (
        <line key={lon} x1={px(lon)} y1={0} x2={px(lon)} y2={H} stroke="rgba(248,246,240,0.06)" strokeWidth={0.5} />
      ))}

      {/* continents */}
      {continents.map((d, i) => (
        <path key={i} d={d} fill="rgba(201,168,76,0.07)" stroke="rgba(248,246,240,0.15)" strokeWidth={0.8} />
      ))}

      {/* connection lines */}
      {cities.map(({ name, lon, lat }) => (
        <line key={name} x1={vzlaX} y1={vzlaY} x2={px(lon)} y2={py(lat)}
          stroke={GOLD} strokeWidth={0.9} strokeDasharray="4,5" opacity={0.5} />
      ))}

      {/* city dots + labels */}
      {cities.map(({ name, lon, lat, dx, dy, anchor }) => {
        const cx = px(lon), cy = py(lat);
        return (
          <g key={name}>
            <circle cx={cx} cy={cy} r={2.5} fill={GOLD} opacity={0.9} />
            <text x={cx + dx} y={cy + dy} textAnchor={anchor as "start"|"middle"|"end"}
              fontSize={7.5} fill="rgba(248,246,240,0.6)"
              fontFamily="Montserrat, sans-serif" fontWeight={600} letterSpacing={0.8}>
              {name}
            </text>
          </g>
        );
      })}

      {/* Venezuela — concentric rings + dot */}
      <circle cx={vzlaX} cy={vzlaY} r={22} fill="none" stroke={GOLD} strokeWidth={0.6} opacity={0.15} />
      <circle cx={vzlaX} cy={vzlaY} r={14} fill="none" stroke={GOLD} strokeWidth={0.9} opacity={0.25} />
      <circle cx={vzlaX} cy={vzlaY} r={6}  fill={GOLD} opacity={0.2} />
      <circle cx={vzlaX} cy={vzlaY} r={3.5} fill={GOLD} opacity={1} />
      <text x={vzlaX} y={vzlaY + 27} textAnchor="middle"
        fontSize={8} fill={GOLD} fontFamily="Montserrat, sans-serif" fontWeight={700} letterSpacing={1.5}>
        VENEZUELA
      </text>
    </svg>
  );
}

function GoldBtn({ label }: { label: string }) {
  return (
    <button style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "13px 30px", borderRadius: 6, fontSize: 15, fontWeight: 600, cursor: "pointer",
      backgroundColor: GOLD, color: CH, border: "none",
      boxShadow: BTN_SHADOW,
    }}>
      {label} <ArrowRight size={16} />
    </button>
  );
}

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      backgroundColor: WW,
      borderRadius: 10,
      padding: "36px 40px",
      boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
      ...style,
    }}>
      {children}
    </div>
  );
}

function DarkCard({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      backgroundColor: "rgba(248,246,240,0.07)",
      border: "1px solid rgba(248,246,240,0.10)",
      borderRadius: 10,
      padding: "36px 40px",
      boxShadow: "0 12px 40px rgba(0,0,0,0.30)",
      ...style,
    }}>
      {children}
    </div>
  );
}

export function CardLanguage() {
  return (
    <div style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif", backgroundColor: WW, minHeight: "100vh", color: CH }}>

      {/* ── NAV ───────────────────────────────────────────── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        padding: "0 40px", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        backgroundColor: "rgba(248,246,240,0.96)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid rgba(27,67,50,0.12)`,
        boxShadow: "0 2px 16px rgba(27,67,50,0.08)",
      }}>
        <img src="/__mockup/images/logo-green.png" alt="T3 Advisors" style={{ height: 40, width: "auto" }} />
        <div style={{ display: "flex", gap: 36, fontSize: 15, fontWeight: 700, letterSpacing: "0.01em" }}>
          {[
            { label: "¿Por qué Venezuela?", active: false },
            { label: "Inversionistas", active: false },
            { label: "Vendedores", active: false },
            { label: "Portafolio", active: false },
            { label: "Nosotros", active: false },
          ].map(({ label }) => (
            <span key={label} style={{ cursor: "pointer", color: F, opacity: 0.75, transition: "opacity 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
            >{label}</span>
          ))}
        </div>
        <button style={{
          padding: "9px 22px", borderRadius: 6, fontSize: 14, fontWeight: 700,
          backgroundColor: F, color: WW, border: "none", cursor: "pointer",
          boxShadow: "0 2px 8px rgba(27,67,50,0.25)",
        }}>
          Contacto
        </button>
      </nav>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ padding: "72px 40px 64px", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>T3 Advisors</p>
        <div style={{ width: 48, height: 1, backgroundColor: GOLD, opacity: 0.4, margin: "12px 0 24px" }} />
        <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 62, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: F }}>
          Invierte en activos comerciales en Venezuela de la mano de profesionales en el terreno
        </h1>
        <p style={{ marginTop: 28, fontSize: 20, lineHeight: 1.75, color: `${CH}BB`, maxWidth: 620 }}>
          T3 Advisors es la firma que conecta <strong style={{ color: CH }}>inversionistas</strong> con las mejores oportunidades en Venezuela, y a <strong style={{ color: CH }}>vendedores</strong> con el capital y acompañamiento que necesitan.
        </p>
        <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
          <button style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "14px 30px", borderRadius: 6, fontSize: 15, fontWeight: 600,
            backgroundColor: F, color: WW, border: "none", cursor: "pointer",
            boxShadow: BTN_SHADOW,
          }}>
            Soy inversionista <ArrowRight size={16} />
          </button>
          <button style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "14px 30px", borderRadius: 6, fontSize: 15, fontWeight: 600,
            backgroundColor: "transparent", color: F, border: `1.5px solid ${F}`, cursor: "pointer",
            boxShadow: BTN_SHADOW,
          }}>
            Quiero vender <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ── STAT BAR — Cards flotantes sobre verde ─────── */}
      <div style={{ backgroundColor: F, padding: "28px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            { val: "50+", label: "oportunidades activas en cartera" },
            { val: "6", label: "sectores estratégicos de inversión" },
            { val: "70–90%", label: "por debajo de precios regionales comparables" },
          ].map(s => (
            <DarkCard key={s.val} style={{ padding: "28px 32px", textAlign: "center" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 58, fontWeight: 600, lineHeight: 1, color: GOLD }}>{s.val}</p>
              <p style={{ marginTop: 12, fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: `${WW}CC` }}>{s.label}</p>
            </DarkCard>
          ))}
        </div>
      </div>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── TESIS ─────────────────────────────────────────── */}
      <section style={{ padding: "72px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40, alignItems: "start" }}>
          <div style={{ paddingTop: 40 }}>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 54, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>La oportunidad</h2>
            <div style={{ marginTop: 16, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
          </div>
          <Card>
            {GOLD_LINE}
            <p style={{ fontSize: 20, lineHeight: 1.8, color: `${CH}CC` }}>
              Venezuela experimentó una de las mayores contracciones económicas de la historia moderna: 80% entre 2013 y 2021. Los activos comerciales se transan hoy a 20–30% de su valor hace solo unos años. Oficinas, hoteles, plantas industriales, terrenos agrícolas y asentamientos mineros se ofrecen a precios que no existen en ningún otro mercado de América Latina.
            </p>
            <p style={{ marginTop: 18, fontSize: 20, fontWeight: 600, lineHeight: 1.8, color: CH }}>
              La recuperación ya comenzó, y el capital sofisticado está mirando hacia Venezuela.
            </p>
            <div style={{ marginTop: 28, display: "flex", justifyContent: "flex-end" }}>
              <GoldBtn label="Leer la tesis completa" />
            </div>
          </Card>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── CÓMO TRABAJAMOS ───────────────────────────────── */}
      <section style={{ backgroundColor: "#F2EFE8", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>Cómo trabajamos</h2>
            <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
            <p style={{ marginTop: 20, fontSize: 19, color: `${CH}AA` }}>T3 Advisors gestiona el proceso completo de intermediación, desde la preparación del activo hasta el cierre de la transacción.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {steps.map(({ num, Icon, title, desc }) => (
              <Card key={num}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <Icon size={30} color={GOLD} strokeWidth={1} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 38, fontWeight: 700, color: GOLD, opacity: 0.18, lineHeight: 1 }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 21, fontWeight: 600, color: F }}>{title}</h3>
                <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.8, color: `${CH}CC` }}>{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA PORTAFOLIO ────────────────────────────────── */}
      <section style={{ backgroundColor: F, padding: "64px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <DarkCard style={{ textAlign: "center", padding: "52px 40px" }}>
            <div style={{ width: 48, height: 1, backgroundColor: GOLD, opacity: 0.5, margin: "0 auto 20px" }} />
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 32, fontWeight: 600, color: WW }}>Más de 50 oportunidades de inversión en Venezuela</h2>
            <p style={{ marginTop: 16, fontSize: 18, color: `${WW}AA`, maxWidth: 520, margin: "16px auto 32px" }}>Explore nuestro portafolio de activos comerciales, organizado por sector y tipo de transacción.</p>
            <GoldBtn label="Ver portafolio" />
          </DarkCard>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── SECTORES ──────────────────────────────────────── */}
      <section style={{ padding: "72px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 52 }}>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>Seis sectores estratégicos de inversión</h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
          <p style={{ marginTop: 20, fontSize: 19, color: `${CH}AA` }}>Nuestro portafolio abarca las principales verticales de bienes raíces comerciales en Venezuela.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {sectors.map(({ Icon, label, desc }) => (
            <Card key={label} style={{ padding: "44px 36px", textAlign: "center", cursor: "pointer" }}>
              <Icon size={48} color={GOLD} strokeWidth={1} style={{ margin: "0 auto 24px" }} />
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 22, fontWeight: 600, color: F }}>{label}</p>
              <p style={{ marginTop: 12, fontSize: 17, lineHeight: 1.65, color: `${CH}88` }}>{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ── PRESENCIA ─────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D2318", borderTop: `1px solid rgba(201,168,76,0.25)`, overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px", display: "grid", gridTemplateColumns: "2fr 3fr", gap: 64, alignItems: "center" }}>
          {/* left: text */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: GOLD, opacity: 0.75, marginBottom: 20 }}>Red de operación</p>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 42, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15, color: WW }}>
              Presencia local,<br />alcance<br />internacional
            </h2>
            <div style={{ marginTop: 20, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
            <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.85, color: `${WW}77` }}>
              T3 Advisors opera con un equipo en el terreno en Venezuela y capacidad de comunicación profesional desde Europa. Combinamos décadas de experiencia en bienes raíces comerciales venezolanos con los estándares de presentación y proceso que el capital internacional exige.
            </p>
            <a href="#" style={{ marginTop: 32, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, color: GOLD, textDecoration: "none", letterSpacing: "0.04em" }}>
              Conocer al equipo <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </div>
          {/* right: world map SVG */}
          <div style={{ padding: "8px", borderRadius: 12, border: "1px solid rgba(201,168,76,0.12)", background: "rgba(201,168,76,0.03)" }}>
            <PresenciaMap />
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — dos paths ─────────────────────────── */}
      <div style={{ backgroundColor: F, padding: "48px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <DarkCard>
            {GOLD_LINE}
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 24, fontWeight: 600, color: WW }}>¿Interesado en invertir?</h3>
            <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.75, color: `${WW}99` }}>
              Explore más de 50 oportunidades de activos comerciales en Venezuela. La información completa está disponible bajo firma de NDA.
            </p>
            <div style={{ marginTop: 28 }}><GoldBtn label="Ver portafolio" /></div>
          </DarkCard>
          <DarkCard>
            {GOLD_LINE}
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 24, fontWeight: 600, color: WW }}>¿Quiere vender un activo?</h3>
            <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.75, color: `${WW}99` }}>
              El primer paso es una conversación. T3 Advisors organiza la documentación y lo acompaña desde la primera reunión hasta el cierre.
            </p>
            <div style={{ marginTop: 28 }}><GoldBtn label="Hablemos" /></div>
          </DarkCard>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer style={{ backgroundColor: "#142e24", padding: "36px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <img src="/__mockup/images/logo-white.png" alt="T3 Advisors" style={{ height: 32, width: "auto", opacity: 0.9 }} />
        <span style={{ fontSize: 14, color: `${WW}66` }}>© 2025 · Todos los derechos reservados</span>
        <span style={{ fontSize: 14, color: `${WW}66` }}>Caracas · Madrid</span>
      </footer>
    </div>
  );
}
