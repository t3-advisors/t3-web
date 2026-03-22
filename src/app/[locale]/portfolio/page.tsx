import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { listings } from "@/data/portfolio-listings";
import { PortfolioClient } from "@/components/portfolio/portfolio-client";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Portafolio — T3 Advisors",
  description:
    "Oportunidades de inversión en Venezuela. Más de 50 activos comerciales en 5 sectores.",
};

export default function PortfolioPage() {
  const t = useTranslations("portfolioPage");
  const locale = useLocale();

  return (
    <>
      {/* Page Header */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-forest md:text-5xl">
            {t("hero_headline")}
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-charcoal/80">
            {t("hero_intro")}
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <PortfolioClient listings={listings} locale={locale} />
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        headline={t("cta_headline")}
        sub={t("cta_sub")}
        primaryHref="contact"
        primaryLabel={t("cta_btn_access")}
        secondaryHref="contact"
        secondaryLabel={t("cta_btn_contact")}
      />
    </>
  );
}
