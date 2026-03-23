import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Scale, ShieldCheck, Calculator, Award, HardHat,
} from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Para Inversionistas — T3 Advisors",
  description: "Cómo funciona invertir en Venezuela con T3 Advisors. Proceso paso a paso, red de aliados, riesgos.",
};

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";

const steps = [1, 2, 3, 4, 5, 6, 7] as const;
const allies = [
  { icon: Scale,      n: 1 },
  { icon: ShieldCheck,n: 2 },
  { icon: Calculator, n: 3 },
  { icon: Award,      n: 4 },
  { icon: HardHat,    n: 5 },
] as const;
const foreignTopics = ["vehicles", "legal", "ofac", "repatriation"] as const;
const riskKeys = [1, 2, 3, 4] as const;

export default function InvestorsPage() {
  const t = useTranslations("investorsPage");

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", backgroundColor: WW, color: CH }}>

      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section style={{ padding: "80px 40px 72px", maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
          T3 Advisors
        </p>
        <div style={{ width: 40, height: 1, backgroundColor: GOLD, opacity: 0.4, margin: "12px auto 24px" }} />
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: F }}>
          {t("hero_headline")}
        </h1>
        <p style={{ marginTop: 24, fontSize: 19, lineHeight: 1.75, color: `${CH}BB`, maxWidth: 620, margin: "24px auto 0" }}>
          {t("hero_intro")}
        </p>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── PROCESO: 7 PASOS ────────────────────────────── */}
      <section style={{ backgroundColor: "#F2EFE8", padding: "72px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F, textAlign: "center" }}>
            {t("process_headline")}
          </h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "14px auto 52px" }} />

          <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((n, i) => (
              <div key={n} style={{ display: "flex", gap: 28 }}>
                {/* Rail */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    backgroundColor: F, border: `2px solid ${GOLD}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 700, color: WW,
                    flexShrink: 0,
                  }}>
                    {n}
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: 1, flexGrow: 1, backgroundColor: GOLD, opacity: 0.35, margin: "6px 0" }} />
                  )}
                </div>
                {/* Content */}
                <div style={{
                  paddingBottom: i < steps.length - 1 ? 32 : 0, paddingTop: 10,
                  backgroundColor: WW, borderRadius: 10, marginBottom: i < steps.length - 1 ? 0 : 0,
                  padding: "16px 28px 28px",
                  marginLeft: 0, marginBottom: i < steps.length - 1 ? 12 : 0, flex: 1,
                  boxShadow: "0 4px 20px rgba(44,44,44,0.07), 0 1px 6px rgba(44,44,44,0.05)",
                }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 600, color: F }}>
                    {t(`step${n}_title`)}
                  </h3>
                  <p style={{ marginTop: 8, fontSize: 16, lineHeight: 1.75, color: `${CH}CC` }}>
                    {t(`step${n}_text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA PORTFOLIO ───────────────────────────────── */}
      <CtaBand
        headline={t("cta1_headline")}
        primaryHref="portfolio"
        primaryLabel={t("cta1_btn")}
      />

      {/* ── RED DE ALIADOS ──────────────────────────────── */}
      <section style={{ backgroundColor: WW, padding: "72px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
            {t("allies_headline")}
          </h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
          <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.75, color: `${CH}CC`, maxWidth: 640 }}>
            {t("allies_intro")}
          </p>

          <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {allies.map(({ icon: Icon, n }) => (
              <div key={n} style={{
                backgroundColor: WW, borderRadius: 10, padding: "36px 32px",
                boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
              }}>
                <Icon size={40} color={GOLD} strokeWidth={1.25} />
                <h3 style={{ marginTop: 20, fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 600, color: F }}>
                  {t(`ally${n}_title`)}
                </h3>
                <p style={{ marginTop: 10, fontSize: 16, lineHeight: 1.75, color: `${CH}BB` }}>
                  {t(`ally${n}_desc`)}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 36, fontSize: 17, lineHeight: 1.75, color: `${CH}CC` }}>
            {t("allies_closing")}
          </p>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── RIESGOS ─────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F2EFE8", padding: "72px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
            {t("risks_headline")}
          </h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, marginBottom: 32 }} />
          <p style={{ fontSize: 18, lineHeight: 1.75, color: `${CH}CC` }}>
            {t("risks_text")}
          </p>
          <div style={{ marginTop: 28 }}>
            <Link
              href="why-venezuela"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 15, fontWeight: 700, color: GOLD, textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              {t("risks_link")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── INVERSIÓN EXTRANJERA ────────────────────────── */}
      <section style={{ padding: "72px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
            {t("foreign_headline")}
          </h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, marginBottom: 24 }} />
          <p style={{ fontSize: 18, lineHeight: 1.75, color: `${CH}CC`, maxWidth: 640, marginBottom: 40 }}>
            {t("foreign_intro")}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {foreignTopics.map((topic) => (
              <div key={topic} style={{
                backgroundColor: WW, borderRadius: 10, padding: "36px 32px",
                boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
                borderLeft: `4px solid ${GOLD}`,
              }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: F }}>
                  {t(`foreign_${topic}_title`)}
                </h3>
                <p style={{ marginTop: 14, fontSize: 17, lineHeight: 1.75, color: `${CH}CC` }}>
                  {t(`foreign_${topic}_text`)}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 36, fontSize: 17, lineHeight: 1.75, color: `${CH}CC` }}>
            {t("foreign_closing")}
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────── */}
      <CtaBand
        headline={t("cta2_headline")}
        sub={t("cta2_sub")}
        primaryHref="contact"
        primaryLabel={t("cta2_btn")}
      />
    </div>
  );
}
