import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Eye, Presentation, Lock, BarChart3 } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sellers/faq-section";

export const metadata: Metadata = {
  title: "Para Vendedores — T3 Advisors",
  description:
    "Cómo T3 Advisors lleva su activo a términos. Proceso completo de 6 fases, FAQ.",
};

const phaseKeys = [1, 2, 3, 4, 5, 6] as const;

const whyIcons = [Eye, Presentation, Lock, BarChart3] as const;
const whyKeys = [1, 2, 3, 4] as const;

export default function SellersPage() {
  const t = useTranslations("sellersPage");

  return (
    <>
      {/* 1. Page Header */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-forest md:text-5xl">
            {t("hero_headline")}
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-lg text-charcoal/60">
            {t("hero_intro")}
          </p>
        </div>
      </section>

      {/* 2. 6 Phases Process */}
      <section className="bg-warm-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-semibold text-forest">
            {t("process_headline")}
          </h2>
          <p className="mt-4 text-charcoal/60">{t("process_sub")}</p>

          <div className="mt-12 space-y-12">
            {phaseKeys.map((n) => (
              <div key={n} className="grid grid-cols-[48px_1fr] gap-6">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-warm-white text-lg font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {n}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-forest">
                    {t(`phase${n}_title`)}
                  </h3>
                  <div className="mt-4 space-y-3 text-sm text-charcoal/80">
                    <p>
                      <span className="font-bold text-charcoal">
                        {t("label_what_we_do")}
                      </span>{" "}
                      {t(`phase${n}_do`)}
                    </p>
                    <p>
                      <span className="font-bold text-charcoal">
                        {t("label_what_you_need")}
                      </span>{" "}
                      {t(`phase${n}_need`)}
                    </p>
                    <p>
                      <span className="font-bold text-charcoal">
                        {t("label_what_to_expect")}
                      </span>{" "}
                      {t(`phase${n}_expect`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pull Quote Band */}
      <section className="bg-forest px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="text-xl italic text-warm-white">
            &ldquo;{t("pullquote_text")}&rdquo;
          </p>
        </div>
      </section>

      {/* 4. Why T3 */}
      <section className="bg-stone/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-3xl font-semibold text-forest">
            {t("why_headline")}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {whyKeys.map((n, i) => {
              const Icon = whyIcons[i];
              return (
                <div key={n} className="flex gap-4">
                  <div className="shrink-0">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest">
                      {t(`why${n}_title`)}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal/80">
                      {t(`why${n}_text`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <FaqSection />

      {/* 6. CTA Band */}
      <CtaBand
        headline={t("cta_headline")}
        sub={t("cta_sub")}
        primaryHref="contact"
        primaryLabel={t("cta_btn")}
      />
    </>
  );
}
