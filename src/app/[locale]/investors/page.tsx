import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Scale,
  ShieldCheck,
  Calculator,
  Award,
  HardHat,
} from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Para Inversionistas — T3 Advisors",
  description:
    "Cómo funciona invertir en Venezuela con T3 Advisors. Proceso paso a paso, red de aliados, riesgos.",
};

const steps = [1, 2, 3, 4, 5, 6, 7] as const;

const allies = [
  { icon: Scale, n: 1 },
  { icon: ShieldCheck, n: 2 },
  { icon: Calculator, n: 3 },
  { icon: Award, n: 4 },
  { icon: HardHat, n: 5 },
] as const;

const foreignTopics = ["vehicles", "legal", "ofac", "repatriation"] as const;

export default function InvestorsPage() {
  const t = useTranslations("investorsPage");

  return (
    <>
      {/* 1. Page Header */}
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

      {/* 2. Process: 7-step vertical timeline */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-12 text-center text-3xl font-semibold text-forest">
            {t("process_headline")}
          </h2>

          <div className="mx-auto max-w-[640px]">
            {steps.map((n, i) => (
              <div key={n}>
                <div className="grid grid-cols-[48px_1fr] gap-x-6 gap-y-0">
                  {/* Numbered circle */}
                  <div className="flex justify-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest text-base font-semibold text-warm-white" style={{ fontFamily: "var(--font-heading)" }}>
                      {n}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="pb-2 pt-2">
                    <h3 className="font-semibold text-forest">
                      {t(`step${n}_title`)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/80">
                      {t(`step${n}_text`)}
                    </p>
                  </div>
                </div>

                {/* Connector line between steps */}
                {i < steps.length - 1 && (
                  <div className="grid grid-cols-[48px_1fr] gap-x-6">
                    <div className="flex justify-center">
                      <div className="h-10 w-px bg-gold/60" />
                    </div>
                    <div />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Band (portfolio) */}
      <CtaBand
        headline={t("cta1_headline")}
        primaryHref="portfolio"
        primaryLabel={t("cta1_btn")}
      />

      {/* 4. Professional Allies */}
      <section className="bg-stone/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-semibold text-forest">
            {t("allies_headline")}
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal/80">
            {t("allies_intro")}
          </p>

          <div className="mt-10 space-y-6">
            {allies.map(({ icon: Icon, n }) => (
              <div key={n} className="flex items-start gap-4">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <h3 className="font-bold text-forest">
                    {t(`ally${n}_title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/80">
                    {t(`ally${n}_desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 leading-relaxed text-charcoal/80">
            {t("allies_closing")}
          </p>
        </div>
      </section>

      {/* 5. Risks brief */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-3xl font-semibold text-forest">
            {t("risks_headline")}
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal/80">
            {t("risks_text")}
          </p>
          <Link
            href="/why-venezuela"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold/80"
          >
            {t("risks_link")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 6. Foreign investment */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-semibold text-forest">
            {t("foreign_headline")}
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal/80">
            {t("foreign_intro")}
          </p>

          <div className="mt-10 space-y-8">
            {foreignTopics.map((topic) => (
              <div key={topic}>
                <h3 className="text-lg font-bold text-forest">
                  {t(`foreign_${topic}_title`)}
                </h3>
                <p className="mt-2 leading-relaxed text-charcoal/80">
                  {t(`foreign_${topic}_text`)}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 leading-relaxed text-charcoal/80">
            {t("foreign_closing")}
          </p>
        </div>
      </section>

      {/* 7. CTA Band final */}
      <CtaBand
        headline={t("cta2_headline")}
        sub={t("cta2_sub")}
        primaryHref="contact"
        primaryLabel={t("cta2_btn")}
      />
    </>
  );
}
