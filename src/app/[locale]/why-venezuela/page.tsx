import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "¿Por qué Venezuela? — T3 Advisors",
  description: "La tesis de inversión en Venezuela. Datos, precedentes históricos, riesgos y oportunidades en bienes raíces comerciales.",
};

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";

const tableRows = [
  { assetKey: "prices_row1_asset", caracasKey: "prices_row1_caracas", bogotaKey: "prices_row1_bogota", sdKey: "prices_row1_santo_domingo", panamaKey: "prices_row1_panama" },
  { assetKey: "prices_row2_asset", caracasKey: "prices_row2_caracas", bogotaKey: "prices_row2_bogota", sdKey: "prices_row2_santo_domingo", panamaKey: "prices_row2_panama" },
  { assetKey: "prices_row3_asset", caracasKey: "prices_row3_caracas", bogotaKey: "prices_row3_bogota", sdKey: "prices_row3_santo_domingo", panamaKey: "prices_row3_panama" },
  { assetKey: "prices_row4_asset", caracasKey: "prices_row4_caracas", bogotaKey: "prices_row4_bogota", sdKey: "prices_row4_santo_domingo", panamaKey: "prices_row4_panama" },
] as const;

const precedents = [
  { titleKey: "precedents_argentina_title", statKey: "precedents_argentina_stat", statLabelKey: "precedents_argentina_stat_label", textKey: "precedents_argentina_text" },
  { titleKey: "precedents_colombia_title",  statKey: "precedents_colombia_stat",  statLabelKey: "precedents_colombia_stat_label",  textKey: "precedents_colombia_text"  },
  { titleKey: "precedents_myanmar_title",   statKey: "precedents_myanmar_stat",   statLabelKey: "precedents_myanmar_stat_label",   textKey: "precedents_myanmar_text"   },
  { titleKey: "precedents_kurdistan_title", statKey: "precedents_kurdistan_stat", statLabelKey: "precedents_kurdistan_stat_label", textKey: "precedents_kurdistan_text" },
] as const;

const risks = [
  { titleKey: "risk1_title", textKey: "risk1_text" },
  { titleKey: "risk2_title", textKey: "risk2_text" },
  { titleKey: "risk3_title", textKey: "risk3_text" },
  { titleKey: "risk4_title", textKey: "risk4_text" },
  { titleKey: "risk5_title", textKey: "risk5_text" },
] as const;

export default function WhyVenezuelaPage() {
  const t = useTranslations("whyVenezuela");

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

      {/* ── EL CONTEXTO ─────────────────────────────────── */}
      <section style={{ padding: "72px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 48, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
                {t("context_headline")}
              </h2>
              <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, marginBottom: 28 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {(["context_p1", "context_p2", "context_p3", "context_p4"] as const).map((k) => (
                  <p key={k} style={{ fontSize: 18, lineHeight: 1.8, color: `${CH}CC` }}>{t(k)}</p>
                ))}
              </div>
            </div>
            {/* Callout stat */}
            <div style={{
              backgroundColor: WW, borderRadius: 10, padding: "44px 36px", textAlign: "center",
              boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
              borderTop: `4px solid ${GOLD}`,
            }}>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: 72, fontWeight: 600, lineHeight: 1, color: F }}>
                {t("context_callout_value")}
              </p>
              <div style={{ width: 40, height: 1, backgroundColor: GOLD, opacity: 0.4, margin: "16px auto" }} />
              <p style={{ fontSize: 15, lineHeight: 1.55, color: `${CH}BB` }}>
                {t("context_callout_label")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── TABLA DE PRECIOS ────────────────────────────── */}
      <section style={{ backgroundColor: "#F2EFE8", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
            {t("prices_headline")}
          </h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, marginBottom: 24 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640, marginBottom: 40 }}>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: `${CH}CC` }}>{t("prices_p1")}</p>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: `${CH}CC` }}>{t("prices_p2")}</p>
          </div>

          {/* Table in a Card */}
          <div style={{
            backgroundColor: WW, borderRadius: 10, padding: "8px",
            boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
            overflowX: "auto",
          }}>
            <table style={{ width: "100%", minWidth: 600, borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr style={{ borderBottom: `2px solid rgba(27,67,50,0.15)` }}>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontWeight: 700, color: CH }}>
                    {t("prices_table_asset")}
                  </th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontWeight: 700, color: F, backgroundColor: `${F}09`, borderLeft: `4px solid ${GOLD}` }}>
                    {t("prices_table_caracas")}
                  </th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontWeight: 600, color: `${CH}AA` }}>
                    {t("prices_table_bogota")}
                  </th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontWeight: 600, color: `${CH}AA` }}>
                    {t("prices_table_santo_domingo")}
                  </th>
                  <th style={{ padding: "16px 20px", textAlign: "left", fontWeight: 600, color: `${CH}AA` }}>
                    {t("prices_table_panama")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid rgba(44,44,44,0.08)` }}>
                    <td style={{ padding: "14px 20px", fontWeight: 600, color: CH }}>{t(row.assetKey)}</td>
                    <td style={{ padding: "14px 20px", fontWeight: 700, color: F, backgroundColor: `${F}09`, borderLeft: `4px solid ${GOLD}` }}>{t(row.caracasKey)}</td>
                    <td style={{ padding: "14px 20px", color: `${CH}88` }}>{t(row.bogotaKey)}</td>
                    <td style={{ padding: "14px 20px", color: `${CH}88` }}>{t(row.sdKey)}</td>
                    <td style={{ padding: "14px 20px", color: `${CH}88` }}>{t(row.panamaKey)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, fontStyle: "italic", color: `${CH}66` }}>
            {t("prices_table_note")}
          </p>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── PRECEDENTES HISTÓRICOS ──────────────────────── */}
      <section style={{ padding: "72px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
            {t("precedents_headline")}
          </h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, marginBottom: 24 }} />
          <p style={{ fontSize: 18, lineHeight: 1.75, color: `${CH}CC`, maxWidth: 640, marginBottom: 44 }}>
            {t("precedents_intro")}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {precedents.map((p) => (
              <div key={p.titleKey} style={{
                backgroundColor: WW, borderRadius: 10, padding: "36px 36px",
                boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
              }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: F }}>
                  {t(p.titleKey)}
                </h3>
                <div style={{ marginTop: 16, display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 600, lineHeight: 1, color: GOLD }}>
                    {t(p.statKey)}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: `${CH}77` }}>
                    {t(p.statLabelKey)}
                  </span>
                </div>
                <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.75, color: `${CH}CC` }}>
                  {t(p.textKey)}
                </p>
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
            fontFamily: "var(--font-heading)", fontSize: 28, fontStyle: "italic",
            lineHeight: 1.6, color: WW, letterSpacing: "-0.01em",
          }}>
            &ldquo;{t("pullquote_text")}&rdquo;
          </p>
          <p style={{ marginTop: 28, fontSize: 14, fontWeight: 600, letterSpacing: "0.06em", color: `${WW}99`, textTransform: "uppercase" }}>
            — {t("pullquote_attribution")}
          </p>
          <p style={{ marginTop: 12, fontSize: 14, fontStyle: "italic", color: `${WW}66` }}>
            {t("pullquote_note")}
          </p>
          <div style={{ width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "36px auto 0", opacity: 0.35 }} />
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── LOS RIESGOS ─────────────────────────────────── */}
      <section style={{ backgroundColor: "#F2EFE8", padding: "72px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
            {t("risks_headline")}
          </h2>
          <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, marginBottom: 24 }} />
          <p style={{ fontSize: 18, lineHeight: 1.75, color: `${CH}CC`, marginBottom: 40 }}>
            {t("risks_intro")}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {risks.map((risk) => (
              <div key={risk.titleKey} style={{
                backgroundColor: WW, borderRadius: 10, padding: "28px 32px",
                boxShadow: "0 4px 20px rgba(44,44,44,0.08), 0 1px 6px rgba(44,44,44,0.04)",
                borderLeft: `4px solid ${GOLD}`,
              }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 600, color: F }}>
                  {t(risk.titleKey)}
                </h3>
                <p style={{ marginTop: 10, fontSize: 16, lineHeight: 1.75, color: `${CH}CC` }}>
                  {t(risk.textKey)}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 36, textAlign: "center", fontSize: 15, fontStyle: "italic", color: `${CH}88` }}>
            {t("risks_closing")}
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────── */}
      <CtaBand
        headline={t("cta_headline")}
        primaryHref="portfolio"
        primaryLabel={t("cta_btn_portfolio")}
        secondaryHref="contact"
        secondaryLabel={t("cta_btn_contact")}
      />
    </div>
  );
}
