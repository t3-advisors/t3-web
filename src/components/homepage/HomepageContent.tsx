"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Activity, ArrowRight, FileText, Gem, Handshake,
  Hotel, Landmark, Users, Wheat, Zap,
} from "lucide-react";
import { PresenciaMap } from "./PresenciaMap";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";
const BTN_SHADOW = "0 4px 14px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)";

const steps = [
  { num: "01", Icon: FileText,  titleKey: "step1_title", descKey: "step1_desc" },
  { num: "02", Icon: Users,     titleKey: "step2_title", descKey: "step2_desc" },
  { num: "03", Icon: Handshake, titleKey: "step3_title", descKey: "step3_desc" },
] as const;

const sectors = [
  { Icon: Landmark, labelKey: "vertical_re",  descKey: "vertical_re_desc",  vertical: "re"  },
  { Icon: Hotel,    labelKey: "vertical_hos", descKey: "vertical_hos_desc", vertical: "hos" },
  { Icon: Wheat,    labelKey: "vertical_ag",  descKey: "vertical_ag_desc",  vertical: "ag"  },
  { Icon: Zap,      labelKey: "vertical_ind", descKey: "vertical_ind_desc", vertical: "ind" },
  { Icon: Activity, labelKey: "vertical_hc",  descKey: "vertical_hc_desc",  vertical: "hc"  },
  { Icon: Gem,      labelKey: "vertical_min", descKey: "vertical_min_desc", vertical: "min" },
] as const;

const GOLD_LINE = (
  <div style={{ width: 40, height: 1, backgroundColor: GOLD, opacity: 0.6, marginBottom: 20 }} />
);

/* ── Decorative helpers ─────────────────────────────── */

function NoiseOverlay({ id, opacity = 0.04 }: { id: string; opacity?: number }) {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        opacity, pointerEvents: "none", mixBlendMode: "overlay",
      }}
    >
      <filter id={`grain-${id}`}>
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#grain-${id})`} />
    </svg>
  );
}

function HeroPattern() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute", right: 0, top: 0,
        width: "55%", height: "100%",
        opacity: 0.035, pointerEvents: "none",
      }}
    >
      <defs>
        <pattern
          id="hero-diag"
          width="60" height="60"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-30)"
        >
          <line x1="0" y1="0" x2="0" y2="60" stroke={F} strokeWidth="0.6" />
        </pattern>
        <linearGradient id="hero-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="black" />
          <stop offset="40%" stopColor="white" />
          <stop offset="100%" stopColor="white" stopOpacity="0.5" />
        </linearGradient>
        <mask id="hero-mask">
          <rect width="100%" height="100%" fill="url(#hero-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-diag)" mask="url(#hero-mask)" />
    </svg>
  );
}

/* ── Card primitives ────────────────────────────────── */

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      backgroundColor: WW, borderRadius: 10, padding: "36px 40px",
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
      backgroundColor: "rgba(248,246,240,0.07)", border: "1px solid rgba(248,246,240,0.10)",
      borderRadius: 10, padding: "36px 40px", boxShadow: "0 12px 40px rgba(0,0,0,0.30)",
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ── Main component ─────────────────────────────────── */

export function HomepageContent() {
  const t = useTranslations("home");
  const [hoverInv,  setHoverInv]  = useState(false);
  const [hoverSell, setHoverSell] = useState(false);

  return (
    <div style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif", backgroundColor: WW, color: CH }}>

      {/* ── HERO ──────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <HeroPattern />
        <div style={{ padding: "72px 40px 64px", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
              T3 Advisors
            </p>
            <div style={{ width: 48, height: 1, backgroundColor: GOLD, opacity: 0.4, margin: "12px 0 24px" }} />
          </div>
          <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 62, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: F }}>
              {t("hero_headline")}
            </h1>
          </div>
          <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
            <p style={{ marginTop: 28, fontSize: 20, lineHeight: 1.75, color: `${CH}BB`, maxWidth: 620 }}>
              {t.rich("hero_sub", { b: (chunks) => <strong style={{ color: CH }}>{chunks}</strong> })}
            </p>
          </div>
          <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both" }}>
            <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
              <Link
                href="investors"
                onMouseEnter={() => setHoverInv(true)}
                onMouseLeave={() => setHoverInv(false)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 30px", borderRadius: 6, fontSize: 15, fontWeight: 600,
                  backgroundColor: hoverInv ? "#13321F" : F, color: WW, textDecoration: "none",
                  boxShadow: BTN_SHADOW,
                  transition: "background-color 0.2s ease",
                }}
              >
                {t("hero_cta_investors")} <ArrowRight size={16} />
              </Link>
              <Link
                href="sellers"
                onMouseEnter={() => setHoverSell(true)}
                onMouseLeave={() => setHoverSell(false)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 30px", borderRadius: 6, fontSize: 15, fontWeight: 600,
                  backgroundColor: hoverSell ? "rgba(27,67,50,0.07)" : "transparent",
                  color: F, textDecoration: "none",
                  border: `2px solid ${F}`,
                  boxShadow: hoverSell ? "0 6px 20px rgba(27,67,50,0.20)" : "none",
                  transition: "background-color 0.18s ease, box-shadow 0.18s ease",
                }}
              >
                {t("hero_cta_sellers")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAT BAR ──────────────────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden", backgroundColor: F, padding: "28px 40px" }}>
        <NoiseOverlay id="stats" opacity={0.05} />
        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            { valKey: "stat1_value", labelKey: "stat1_label" },
            { valKey: "stat2_value", labelKey: "stat2_label" },
            { valKey: "stat3_value", labelKey: "stat3_label" },
          ].map(({ valKey, labelKey }, i) => (
            <ScrollReveal key={valKey} delay={i * 0.12}>
              <DarkCard style={{ padding: "28px 32px", textAlign: "center", height: "100%" }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 58, fontWeight: 600, lineHeight: 1, color: GOLD }}>{t(valKey)}</p>
                <p style={{ marginTop: 12, fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: `${WW}CC` }}>{t(labelKey)}</p>
              </DarkCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── LA OPORTUNIDAD ────────────────────────────── */}
      <section style={{ padding: "72px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <Card>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 44, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
              {t("thesis_headline")}
            </h2>
            <div style={{ marginTop: 16, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
            <p style={{ marginTop: 28, fontSize: 20, lineHeight: 1.8, color: `${CH}CC` }}>{t("thesis_p1")}</p>
            <p style={{ marginTop: 18, fontSize: 20, fontWeight: 600, lineHeight: 1.8, color: CH }}>{t("thesis_p2")}</p>
            <div style={{ marginTop: 36, display: "flex", justifyContent: "flex-end" }}>
              <Link
                href="why-venezuela"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "18px 40px", borderRadius: 6, fontSize: 20, fontWeight: 700,
                  background: "none", color: GOLD, border: `2px solid ${GOLD}`,
                  boxShadow: "none", textDecoration: "none",
                  transition: "background 0.18s, box-shadow 0.18s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = WW;
                  (e.currentTarget as HTMLElement).style.boxShadow = BTN_SHADOW;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "none";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {t("thesis_link")} <ArrowRight size={18} />
              </Link>
            </div>
          </Card>
        </ScrollReveal>
      </section>

      {/* gold rule removed — background change handles separation */}

      {/* ── CÓMO TRABAJAMOS ───────────────────────────── */}
      <section style={{ backgroundColor: "#F2EFE8", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
                {t("services_headline")}
              </h2>
              <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
              <p style={{ marginTop: 20, fontSize: 19, color: `${CH}AA` }}>{t("services_sub")}</p>
            </div>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {steps.map(({ num, Icon, titleKey, descKey }, i) => (
              <ScrollReveal key={num} delay={i * 0.12}>
                <Card style={{ padding: "48px 40px", height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
                    <Icon size={44} color={GOLD} strokeWidth={1} />
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 52, fontWeight: 700, color: GOLD, opacity: 0.15, lineHeight: 1 }}>{num}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 26, fontWeight: 600, color: F }}>{t(titleKey)}</h3>
                  <p style={{ marginTop: 16, fontSize: 18, lineHeight: 1.85, color: `${CH}CC` }}>{t(descKey)}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA vendedores */}
          <ScrollReveal delay={0.2}>
            <div style={{ marginTop: 48, borderTop: `1px solid rgba(27,67,50,0.12)`, paddingTop: 40, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 22, fontWeight: 600, color: F }}>
                  ¿Tiene un activo que quiere vender o busca financiación?
                </p>
                <p style={{ marginTop: 10, fontSize: 17, color: `${CH}99`, lineHeight: 1.6 }}>
                  El primer paso es siempre una conversación. Sin compromisos.
                </p>
              </div>
              <Link
                href="contact"
                style={{
                  flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "18px 44px", borderRadius: 6, fontSize: 19, fontWeight: 700,
                  backgroundColor: GOLD, color: CH, border: "none", textDecoration: "none",
                  boxShadow: "none", transition: "background 0.18s, box-shadow 0.18s",
                }}
                onMouseEnter={e => {
                  const b = e.currentTarget as HTMLElement;
                  b.style.backgroundColor = "#b8932e";
                  b.style.boxShadow = BTN_SHADOW;
                }}
                onMouseLeave={e => {
                  const b = e.currentTarget as HTMLElement;
                  b.style.backgroundColor = GOLD;
                  b.style.boxShadow = "none";
                }}
              >
                Hablemos <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTORES ──────────────────────────────────── */}
      <section style={{ padding: "72px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ marginBottom: 52 }}>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
              {t("verticals_headline")}
            </h2>
            <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
            <p style={{ marginTop: 20, fontSize: 19, color: `${CH}AA` }}>{t("verticals_sub")}</p>
          </div>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {sectors.map(({ Icon, labelKey, descKey, vertical }, i) => (
            <ScrollReveal key={labelKey} delay={i * 0.08}>
              <Link
                href={`portfolio?vertical=${vertical}`}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                  padding: "44px 36px", borderRadius: 10, backgroundColor: WW, textDecoration: "none",
                  height: "100%",
                  boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  const b = e.currentTarget as HTMLElement;
                  b.style.boxShadow = "0 12px 40px rgba(27,67,50,0.15)";
                }}
                onMouseLeave={e => {
                  const b = e.currentTarget as HTMLElement;
                  b.style.boxShadow = "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)";
                }}
              >
                <Icon size={48} color={GOLD} strokeWidth={1} style={{ marginBottom: 24 }} />
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 22, fontWeight: 600, color: F }}>{t(labelKey)}</p>
                <p style={{ marginTop: 12, fontSize: 17, lineHeight: 1.65, color: `${CH}88` }}>{t(descKey)}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── PRESENCIA LOCAL ───────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", backgroundColor: "#0D2318", borderTop: `1px solid rgba(201,168,76,0.25)` }}>
        <NoiseOverlay id="presencia" opacity={0.04} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "80px 40px", display: "grid", gridTemplateColumns: "2fr 3fr", gap: 64, alignItems: "center" }}>
          <ScrollReveal direction="left">
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, opacity: 0.75, marginBottom: 20 }}>
                Red de operación
              </p>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 42, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15, color: WW }}>
                Presencia local,<br />alcance<br />internacional
              </h2>
              <div style={{ marginTop: 20, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
              <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.85, color: `${WW}77` }}>
                T3 Advisors opera con un equipo en el terreno en Venezuela y capacidad de comunicación profesional desde Europa. Combinamos décadas de experiencia en bienes raíces comerciales venezolanos con los estándares de presentación y proceso que el capital internacional exige.
              </p>
              <Link
                href="about"
                style={{ marginTop: 32, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, color: GOLD, textDecoration: "none", letterSpacing: "0.04em" }}
              >
                {t("team_link")} <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15} direction="right">
            <div style={{ padding: 8, borderRadius: 12, border: "1px solid rgba(201,168,76,0.12)", background: "rgba(201,168,76,0.03)" }}>
              <PresenciaMap />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA FINAL — dos paths ─────────────────────── */}
      <div style={{ backgroundColor: "#F2EFE8", padding: "48px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <ScrollReveal>
            <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              {GOLD_LINE}
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 24, fontWeight: 600, color: F }}>{t("cta_invest_title")}</h3>
              <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.75, color: `${CH}BB` }}>{t("cta_invest_sub")}</p>
              <div style={{ marginTop: "auto", paddingTop: 28 }}>
                <Link
                  href="portfolio"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "13px 30px", borderRadius: 6, fontSize: 15, fontWeight: 600,
                    backgroundColor: GOLD, color: CH, textDecoration: "none", boxShadow: BTN_SHADOW,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#b8932e"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = GOLD; }}
                >
                  {t("cta_invest_btn")} <ArrowRight size={16} />
                </Link>
              </div>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              {GOLD_LINE}
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 24, fontWeight: 600, color: F }}>{t("cta_sell_title")}</h3>
              <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.75, color: `${CH}BB` }}>{t("cta_sell_sub")}</p>
              <div style={{ marginTop: "auto", paddingTop: 28 }}>
                <Link
                  href="contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "13px 30px", borderRadius: 6, fontSize: 15, fontWeight: 600,
                    backgroundColor: GOLD, color: CH, textDecoration: "none", boxShadow: BTN_SHADOW,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#b8932e"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = GOLD; }}
                >
                  {t("cta_sell_btn")} <ArrowRight size={16} />
                </Link>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
}
