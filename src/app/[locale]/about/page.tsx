import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Globe, Cpu, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros — T3 Advisors",
  description: "Firma de asesoría en bienes raíces comerciales enfocada en Venezuela. Conozca al equipo y nuestro modelo operativo.",
  openGraph: {
    title: "Sobre Nosotros — T3 Advisors",
    description: "Por qué nació T3, nuestro equipo, y cómo operamos.",
    type: "website",
  },
};

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";
const BTN_SHADOW = "0 4px 14px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)";

const teamMembers = [
  { icon: Globe, nameKey: "team2_name", roleKey: "team2_role", focusKey: "team2_focus", bioKey: "team2_bio" },
  { icon: Cpu,   nameKey: "team3_name", roleKey: "team3_role", focusKey: "team3_focus", bioKey: "team3_bio" },
] as const;

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", backgroundColor: WW, color: CH }}>

      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section style={{ padding: "80px 40px 72px", maxWidth: 860, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
          T3 Advisors
        </p>
        <div style={{ width: 40, height: 1, backgroundColor: GOLD, opacity: 0.4, margin: "12px 0 24px" }} />
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: F }}>
          {t("hero_headline")}
        </h1>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ fontSize: 19, lineHeight: 1.75, color: `${CH}BB` }}>{t("hero_p1")}</p>
          <p style={{ fontSize: 19, lineHeight: 1.75, color: `${CH}BB` }}>{t("hero_p2")}</p>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── EQUIPO ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F2EFE8", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F, textAlign: "center" }}>
            {t("team_headline")}
          </h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "14px auto 52px" }} />

          {/* Tovi — card prominente */}
          <div style={{
            backgroundColor: WW, borderRadius: 10, padding: "48px 52px",
            boxShadow: "0 8px 32px rgba(44,44,44,0.12), 0 2px 8px rgba(44,44,44,0.07)",
            borderTop: `4px solid ${GOLD}`,
            marginBottom: 24,
          }}>
            <div style={{ display: "flex", gap: 36, alignItems: "flex-start" }}>
              <div style={{
                width: 76, height: 76, borderRadius: 10, flexShrink: 0,
                backgroundColor: F, display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 700, color: GOLD,
              }}>
                AT
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 600, color: F }}>
                  {t("team1_name")}
                </h3>
                <p style={{ marginTop: 6, fontSize: 15, fontWeight: 700, color: GOLD, letterSpacing: "0.03em" }}>
                  {t("team1_role")} · {t("team1_focus")}
                </p>
                <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.8, color: `${CH}CC` }}>
                  {t("team1_bio")}
                </p>
              </div>
            </div>
          </div>

          {/* Guillermo + Fernando */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {teamMembers.map((member) => (
              <div key={member.nameKey} style={{
                backgroundColor: WW, borderRadius: 10, padding: "36px 36px",
                boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
              }}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 8, flexShrink: 0,
                    backgroundColor: F, display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700, color: GOLD,
                  }}>
                    {t(member.nameKey).split(" ").map((n: string) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: F }}>
                      {t(member.nameKey)}
                    </h3>
                    <p style={{ marginTop: 4, fontSize: 13, fontWeight: 700, color: GOLD, letterSpacing: "0.03em" }}>
                      {t(member.roleKey)} · {t(member.focusKey)}
                    </p>
                    <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.75, color: `${CH}CC` }}>
                      {t(member.bioKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── MODELO OPERATIVO ────────────────────────────── */}
      <section style={{ padding: "72px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
            {t("model_headline")}
          </h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, marginBottom: 32 }} />

          <div style={{
            backgroundColor: WW, borderRadius: 10, padding: "40px 44px",
            boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: `${CH}CC` }}>{t("model_p1")}</p>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: `${CH}CC` }}>{t("model_p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: F, padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "0 auto 36px" }} />
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 34, fontWeight: 600, lineHeight: 1.3, color: WW }}>
            {t("cta_headline")}
          </h2>
          <div style={{ marginTop: 40 }}>
            <Link
              href="contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 40px", borderRadius: 6, fontSize: 16, fontWeight: 700,
                fontFamily: "var(--font-heading)",
                backgroundColor: GOLD, color: CH, textDecoration: "none",
                boxShadow: BTN_SHADOW,
              }}
            >
              {t("cta_button")} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
