import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Eye, Presentation, Lock, BarChart3 } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sellers/faq-section";

export const metadata: Metadata = {
  title: "Para Vendedores — T3 Advisors",
  description: "Cómo T3 Advisors lleva su activo a términos. Proceso completo de 6 fases, FAQ.",
};

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";

const phaseKeys = [1, 2, 3, 4, 5, 6] as const;
const whyIcons = [Eye, Presentation, Lock, BarChart3] as const;
const whyKeys  = [1, 2, 3, 4] as const;

export default function SellersPage() {
  const t = useTranslations("sellersPage");

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

      {/* ── 6 FASES ─────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F2EFE8", padding: "72px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
            {t("process_headline")}
          </h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
          <p style={{ marginTop: 20, fontSize: 18, color: `${CH}AA` }}>{t("process_sub")}</p>

          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 16 }}>
            {phaseKeys.map((n) => (
              <div key={n} style={{
                backgroundColor: WW, borderRadius: 10, padding: "36px 40px",
                boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
                display: "flex", gap: 28, alignItems: "flex-start",
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
                  backgroundColor: F, border: `2px solid ${GOLD}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 700, color: WW,
                }}>
                  {n}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 600, color: F }}>
                    {t(`phase${n}_title`)}
                  </h3>
                  <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: `${CH}CC` }}>
                      <span style={{ fontWeight: 700, color: CH }}>{t("label_what_we_do")} </span>
                      {t(`phase${n}_do`)}
                    </p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: `${CH}CC` }}>
                      <span style={{ fontWeight: 700, color: CH }}>{t("label_what_you_need")} </span>
                      {t(`phase${n}_need`)}
                    </p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: `${CH}CC` }}>
                      <span style={{ fontWeight: 700, color: CH }}>{t("label_what_to_expect")} </span>
                      {t(`phase${n}_expect`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ──────────────────────────────────── */}
      <section style={{ backgroundColor: F, padding: "80px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "0 auto 36px" }} />
          <p style={{
            fontFamily: "var(--font-heading)", fontSize: 30, fontStyle: "italic",
            lineHeight: 1.55, color: WW, letterSpacing: "-0.01em",
          }}>
            &ldquo;{t("pullquote_text")}&rdquo;
          </p>
          <p style={{ marginTop: 28, fontSize: 14, fontWeight: 600, letterSpacing: "0.06em", color: `${WW}99`, textTransform: "uppercase" }}>
            — {t("pullquote_attribution")}
          </p>
          <div style={{ width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "28px auto 0", opacity: 0.4 }} />
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── POR QUÉ T3 ──────────────────────────────────── */}
      <section style={{ padding: "72px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F, textAlign: "center" }}>
            {t("why_headline")}
          </h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "14px auto 48px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {whyKeys.map((n, i) => {
              const Icon = whyIcons[i];
              return (
                <div key={n} style={{
                  backgroundColor: WW, borderRadius: 10, padding: "36px 36px",
                  boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
                }}>
                  <Icon size={40} color={GOLD} strokeWidth={1.25} />
                  <h3 style={{ marginTop: 20, fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: F }}>
                    {t(`why${n}_title`)}
                  </h3>
                  <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.75, color: `${CH}BB` }}>
                    {t(`why${n}_text`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── FAQ ─────────────────────────────────────────── */}
      <FaqSection />

      {/* ── CTA FINAL ───────────────────────────────────── */}
      <CtaBand
        headline={t("cta_headline")}
        sub={t("cta_sub")}
        primaryHref="contact"
        primaryLabel={t("cta_btn")}
      />
    </div>
  );
}
