import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "¿Por qué Venezuela? — T3 Advisors",
  description:
    "La tesis de inversión en Venezuela. Datos, precedentes históricos, riesgos y oportunidades en bienes raíces comerciales.",
};

const tableRows = [
  { assetKey: "prices_row1_asset", caracasKey: "prices_row1_caracas", bogotaKey: "prices_row1_bogota", sdKey: "prices_row1_santo_domingo", panamaKey: "prices_row1_panama" },
  { assetKey: "prices_row2_asset", caracasKey: "prices_row2_caracas", bogotaKey: "prices_row2_bogota", sdKey: "prices_row2_santo_domingo", panamaKey: "prices_row2_panama" },
  { assetKey: "prices_row3_asset", caracasKey: "prices_row3_caracas", bogotaKey: "prices_row3_bogota", sdKey: "prices_row3_santo_domingo", panamaKey: "prices_row3_panama" },
  { assetKey: "prices_row4_asset", caracasKey: "prices_row4_caracas", bogotaKey: "prices_row4_bogota", sdKey: "prices_row4_santo_domingo", panamaKey: "prices_row4_panama" },
] as const;

const precedents = [
  { titleKey: "precedents_argentina_title", statKey: "precedents_argentina_stat", statLabelKey: "precedents_argentina_stat_label", textKey: "precedents_argentina_text" },
  { titleKey: "precedents_colombia_title", statKey: "precedents_colombia_stat", statLabelKey: "precedents_colombia_stat_label", textKey: "precedents_colombia_text" },
  { titleKey: "precedents_myanmar_title", statKey: "precedents_myanmar_stat", statLabelKey: "precedents_myanmar_stat_label", textKey: "precedents_myanmar_text" },
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
    <>
      {/* Page Header */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">T3 Advisors</p>
          <div className="mx-auto mt-3 h-px w-10 bg-gold/40" />
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-forest md:text-[52px] md:leading-tight">
            {t("hero_headline")}
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-charcoal/80">
            {t("hero_intro")}
          </p>
        </div>
      </section>

      {/* Section 1: El contexto */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_280px]">
            <div className="max-w-[640px]">
              <h2 className="text-3xl font-semibold text-forest">
                {t("context_headline")}
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-charcoal/80">
                <p>{t("context_p1")}</p>
                <p>{t("context_p2")}</p>
                <p>{t("context_p3")}</p>
                <p>{t("context_p4")}</p>
              </div>
            </div>
            <div className="flex flex-col items-center rounded border border-gold/30 bg-forest/5 p-8 text-center">
              <p className="text-7xl font-semibold text-forest" style={{ fontFamily: "var(--font-heading)" }}>
                {t("context_callout_value")}
              </p>
              <div className="mx-auto mt-3 h-px w-10 bg-gold/40" />
              <p className="mt-3 text-sm leading-snug text-charcoal/70">
                {t("context_callout_label")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Dislocación de precios + Tabla */}
      <section className="bg-stone/10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-semibold text-forest">
            {t("prices_headline")}
          </h2>
          <div className="mt-6 max-w-[640px] space-y-4 leading-relaxed text-charcoal/80">
            <p>{t("prices_p1")}</p>
            <p>{t("prices_p2")}</p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-forest/20">
                  <th className="py-3 pr-4 text-left font-semibold text-charcoal">
                    {t("prices_table_asset")}
                  </th>
                  <th className="border-l-4 border-gold bg-forest/5 px-4 py-3 text-left font-semibold text-forest">
                    {t("prices_table_caracas")}
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-charcoal/70">
                    {t("prices_table_bogota")}
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-charcoal/70">
                    {t("prices_table_santo_domingo")}
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-charcoal/70">
                    {t("prices_table_panama")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className="border-b border-stone/50">
                    <td className="py-3 pr-4 font-medium text-charcoal">
                      {t(row.assetKey)}
                    </td>
                    <td className="border-l-4 border-gold bg-forest/5 px-4 py-3 font-semibold text-forest">
                      {t(row.caracasKey)}
                    </td>
                    <td className="px-4 py-3 text-charcoal/70">
                      {t(row.bogotaKey)}
                    </td>
                    <td className="px-4 py-3 text-charcoal/70">
                      {t(row.sdKey)}
                    </td>
                    <td className="px-4 py-3 text-charcoal/70">
                      {t(row.panamaKey)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs italic text-charcoal/60">
            {t("prices_table_note")}
          </p>
        </div>
      </section>

      {/* Section 3: Precedentes históricos */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-semibold text-forest">
            {t("precedents_headline")}
          </h2>
          <p className="mt-4 max-w-[640px] text-charcoal/70">
            {t("precedents_intro")}
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {precedents.map((p) => (
              <div key={p.titleKey}>
                <h3 className="text-lg font-semibold text-forest">
                  {t(p.titleKey)}
                </h3>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-4xl font-semibold text-gold md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                    {t(p.statKey)}
                  </span>
                  <span className="text-sm font-medium text-charcoal/60">
                    {t(p.statLabelKey)}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                  {t(p.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="bg-forest px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[800px] text-center">
          <div className="mx-auto mb-8 h-px w-12 bg-gold/50" />
          <p className="text-2xl italic leading-relaxed text-warm-white md:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
            &ldquo;{t("pullquote_text")}&rdquo;
          </p>
          <p className="mt-6 text-sm font-medium tracking-wide text-stone">
            — {t("pullquote_attribution")}
          </p>
          <p className="mt-6 text-sm italic text-warm-white/60">
            {t("pullquote_note")}
          </p>
        </div>
      </section>

      {/* Section 4: Los riesgos */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-semibold text-forest">
            {t("risks_headline")}
          </h2>
          <p className="mt-4 text-charcoal/70">
            {t("risks_intro")}
          </p>
          <div className="mt-10 space-y-8">
            {risks.map((risk) => (
              <div key={risk.titleKey} className="border-l-2 border-stone pl-6">
                <h3 className="font-semibold text-charcoal">
                  {t(risk.titleKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                  {t(risk.textKey)}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm italic text-charcoal/70">
            {t("risks_closing")}
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        headline={t("cta_headline")}
        primaryHref="portfolio"
        primaryLabel={t("cta_btn_portfolio")}
        secondaryHref="contact"
        secondaryLabel={t("cta_btn_contact")}
      />
    </>
  );
}
