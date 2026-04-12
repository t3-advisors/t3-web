import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
  { nameKey: "team1_name", roleKey: "team1_role", focusKey: "team1_focus", bioKey: "team1_bio" },
  { nameKey: "team2_name", roleKey: "team2_role", focusKey: "team2_focus", bioKey: "team2_bio" },
  { nameKey: "team3_name", roleKey: "team3_role", focusKey: "team3_focus", bioKey: "team3_bio" },
] as const;

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", backgroundColor: WW, color: CH }}>

      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section style={{ padding: "80px 40px 72px", maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
            T3 Advisors
          </p>
          <div style={{ width: 40, height: 1, backgroundColor: GOLD, opacity: 0.4, margin: "12px auto 24px" }} />
        </div>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: F }}>
            {t("hero_headline")}
          </h1>
        </div>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{ fontSize: 19, lineHeight: 1.75, color: `${CH}BB` }}>{t("hero_p1")}</p>
            <p style={{ fontSize: 19, lineHeight: 1.75, color: `${CH}BB` }}>{t("hero_p2")}</p>
          </div>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── EQUIPO ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F2EFE8", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F, textAlign: "center" }}>
              {t("team_headline")}
            </h2>
            <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "14px auto 52px" }} />
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.nameKey} delay={i * 0.1}>
                {i > 0 && (
                  <div style={{ width: "100%", height: 1, backgroundColor: GOLD, opacity: 0.25, marginBottom: 56 }} />
                )}
                <div style={{ display: "flex", gap: 44, alignItems: "flex-start", paddingBottom: i < teamMembers.length - 1 ? 56 : 0 }}>
                  <div style={{
                    width: 160, height: 160, borderRadius: "50%", flexShrink: 0,
                    backgroundColor: F, border: `3px solid ${GOLD}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-heading)", fontSize: 48, fontWeight: 700, color: GOLD,
                  }}>
                    {t(member.nameKey).split(" ").slice(0, 2).map((w: string) => w[0]).join("")}
                  </div>
                  <div style={{ flex: 1, paddingTop: 12 }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 600, color: F }}>
                      {t(member.nameKey)}
                    </h3>
                    <p style={{ marginTop: 8, fontSize: 15, fontWeight: 700, color: GOLD, letterSpacing: "0.03em" }}>
                      {t(member.roleKey)} · {t(member.focusKey)}
                    </p>
                    <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.8, color: `${CH}CC` }}>
                      {t(member.bioKey)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── MODELO OPERATIVO ────────────────────────────── */}
      <section style={{ padding: "72px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
              {t("model_headline")}
            </h2>
            <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, marginBottom: 32 }} />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div style={{
              backgroundColor: WW, borderRadius: 10, padding: "40px 44px",
              boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <p style={{ fontSize: 18, lineHeight: 1.8, color: `${CH}CC` }}>{t("model_p1")}</p>
                <p style={{ fontSize: 18, lineHeight: 1.8, color: `${CH}CC` }}>{t("model_p2")}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: F, padding: "80px 40px", textAlign: "center" }}>
        <ScrollReveal>
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
        </ScrollReveal>
      </section>
    </div>
  );
}
