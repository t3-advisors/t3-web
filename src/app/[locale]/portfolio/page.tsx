import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { listings } from "@/data/portfolio-listings";
import { PortfolioClient } from "@/components/portfolio/portfolio-client";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Portafolio — T3 Advisors",
  description: "Oportunidades de inversión en Venezuela. Más de 50 activos comerciales en 6 sectores.",
};

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";

export default function PortfolioPage() {
  const t = useTranslations("portfolioPage");
  const locale = useLocale();

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", backgroundColor: WW, color: CH }}>

      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section style={{ padding: "80px 40px 64px", maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
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

      {/* ── FILTROS + GRID ──────────────────────────────── */}
      <section style={{ padding: "52px 40px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <PortfolioClient listings={listings} locale={locale} />
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <CtaBand
        headline={t("cta_headline")}
        sub={t("cta_sub")}
        primaryHref="contact"
        primaryLabel={t("cta_btn_access")}
        secondaryHref="contact"
        secondaryLabel={t("cta_btn_contact")}
      />
    </div>
  );
}
