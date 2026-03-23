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

      {/* ── EQUIPO ────────────────────────────────────────── */}
      <section style={{ padding: "16px 40px 72px", maxWidth: 900, margin: "0 auto" }}>
        <Card>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>Presencia local, alcance internacional</h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.8, color: `${CH}BB` }}>
            T3 Advisors opera con un equipo en el terreno en Venezuela y capacidad de comunicación profesional desde Europa. Combinamos décadas de experiencia en bienes raíces comerciales venezolanos con los estándares de presentación y proceso que el capital internacional exige.
          </p>
          <a href="#" style={{ marginTop: 24, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 15, fontWeight: 700, color: GOLD, textDecoration: "none" }}>
            Conocer al equipo <ArrowRight size={15} />
          </a>
        </Card>
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
