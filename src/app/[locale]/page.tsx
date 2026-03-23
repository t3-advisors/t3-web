import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Hotel,
  Wheat,
  Factory,
  HeartPulse,
  ArrowRight,
  ChevronRight,
  FileText,
  Users,
  Handshake,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "T3 Advisors — Activos comerciales en Venezuela",
  description:
    "Conectamos capital internacional con activos reales en Venezuela. Más de 50 oportunidades en 5 sectores: bienes raíces, hotelería, agroindustria, industrial y salud.",
  openGraph: {
    title: "T3 Advisors — Activos comerciales en Venezuela",
    description:
      "Los activos comerciales en Venezuela se transan a una fracción de lo que cuestan en la región. T3 Advisors conecta inversionistas con estas oportunidades.",
    type: "website",
  },
};

const sectors = [
  { icon: Building2, key: "vertical_re", descKey: "vertical_re_desc" },
  { icon: Hotel, key: "vertical_hos", descKey: "vertical_hos_desc" },
  { icon: Wheat, key: "vertical_ag", descKey: "vertical_ag_desc" },
  { icon: Factory, key: "vertical_ind", descKey: "vertical_ind_desc" },
  { icon: HeartPulse, key: "vertical_hc", descKey: "vertical_hc_desc" },
] as const;

const steps = [
  { num: "01", titleKey: "step1_title", descKey: "step1_desc", icon: FileText },
  { num: "02", titleKey: "step2_title", descKey: "step2_desc", icon: Users },
  { num: "03", titleKey: "step3_title", descKey: "step3_desc", icon: Handshake },
] as const;

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <>
      {/* Hero — Warm White background */}
      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
            T3 Advisors
          </p>
          <div className="mt-3 h-px w-12 bg-gold/40" />
          <h1 className="mt-6 text-[42px] font-semibold leading-[1.15] tracking-tight text-forest md:text-[54px] lg:text-[66px] lg:leading-[1.1]">
            {t("hero_headline")}
          </h1>
          <p className="mt-7 max-w-[620px] text-lg leading-relaxed text-charcoal/75 md:text-xl">
            {t.rich("hero_sub", {
              b: (chunks) => <strong className="font-semibold text-charcoal">{chunks}</strong>,
            })}
          </p>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row">
            <Link
              href="investors"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-forest px-8 text-warm-white hover:bg-forest/90"
              )}
            >
              {t("hero_cta_investors")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="sellers"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-forest px-8 text-forest hover:bg-forest/5"
              )}
            >
              {t("hero_cta_sellers")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stat Bar — Forest Green */}
      <section className="bg-forest">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid divide-y divide-warm-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="px-10 py-14 text-center">
              <p className="text-[64px] font-semibold leading-none text-gold md:text-[76px]" style={{ fontFamily: "var(--font-heading)" }}>
                {t("stat1_value")}
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-widest text-warm-white/80">
                {t("stat1_label")}
              </p>
            </div>
            <div className="px-10 py-14 text-center">
              <p className="text-[64px] font-semibold leading-none text-gold md:text-[76px]" style={{ fontFamily: "var(--font-heading)" }}>
                {t("stat2_value")}
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-widest text-warm-white/80">
                {t("stat2_label")}
              </p>
            </div>
            <div className="px-10 py-14 text-center">
              <p className="text-[64px] font-semibold leading-none text-gold md:text-[76px]" style={{ fontFamily: "var(--font-heading)" }}>
                {t("stat3_value")}
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-widest text-warm-white/80">
                {t("stat3_label")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold separator */}
      <div className="h-px bg-gold" />

      {/* Tesis Appetizer */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_1.4fr]">
            {/* Left: headline */}
            <div className="pt-10 md:pt-12">
              <h2 className="text-4xl font-semibold tracking-tight text-forest md:text-5xl">
                {t("thesis_headline")}
              </h2>
              <div className="mt-4 h-1 w-16 bg-gold" />
            </div>

            {/* Right: card */}
            <div className="rounded-lg bg-stone/20 p-10 shadow-xl shadow-charcoal/8 md:p-12">
              <p className="text-lg leading-relaxed text-charcoal/80">
                {t("thesis_p1")}
              </p>
              <p className="mt-5 text-lg font-semibold leading-relaxed text-charcoal">
                {t("thesis_p2")}
              </p>
              <div className="mt-8 flex justify-end">
                <Link
                  href="why-venezuela"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-gold text-charcoal hover:bg-gold/90"
                  )}
                >
                  {t("thesis_link")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold separator */}
      <div className="h-px bg-gold" />

      {/* Qué Hacemos — 3 cards */}
      <section className="bg-stone/10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-forest">
              {t("services_headline")}
            </h2>
            <p className="mx-auto mt-3 max-w-[640px] text-charcoal/70">
              {t("services_sub")}
            </p>
          </div>
          {/* Flow — desktop: horizontal pipeline, mobile: vertical stack */}
          <div className="mt-14">
            {/* Rail (desktop only) */}
            <div className="relative mb-10 hidden md:block">
              <div className="absolute left-[calc(1/6*100%)] right-[calc(1/6*100%)] top-1/2 h-px -translate-y-1/2 bg-gold/35" />
              <div className="flex">
                {steps.map((step) => (
                  <div key={step.num} className="flex flex-1 flex-col items-center gap-2">
                    <span className="text-[11px] font-bold tracking-[0.22em] text-gold">
                      {step.num}
                    </span>
                    <div className="relative z-10 h-3.5 w-3.5 rounded-full border-2 border-gold bg-stone/10" />
                  </div>
                ))}
              </div>
            </div>

            {/* Step content */}
            <div className="flex flex-col gap-0 md:flex-row">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="flex flex-1 flex-col md:flex-row">
                    <div className="flex-1 px-2 md:px-6 first:pl-0 last:pr-0">
                      {/* Mobile: show number inline */}
                      <span className="mb-4 block text-[11px] font-bold tracking-[0.22em] text-gold md:hidden">
                        {step.num}
                      </span>
                      <Icon className="h-7 w-7 text-gold" />
                      <h3 className="mt-4 text-xl font-semibold text-forest">
                        {t(step.titleKey)}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                        {t(step.descKey)}
                      </p>
                    </div>
                    {/* Arrow connector between steps (desktop) */}
                    {i < steps.length - 1 && (
                      <div className="hidden items-start pt-1 md:flex">
                        <ChevronRight className="h-5 w-5 text-gold/50" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band — Portfolio */}
      <section className="bg-forest px-6 py-20 text-center text-warm-white md:py-28">
        <div className="mx-auto max-w-[680px]">
          <div className="mx-auto mb-6 h-px w-12 bg-gold/50" />
          <h2 className="text-3xl font-semibold leading-snug">
            {t("cta_portfolio_headline")}
          </h2>
          <p className="mt-5 text-lg text-warm-white/70">
            {t("cta_portfolio_sub")}
          </p>
          <Link
            href="portfolio"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-10 bg-gold px-8 text-charcoal hover:bg-gold/90"
            )}
          >
            {t("cta_portfolio_button")} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Gold separator */}
      <div className="h-px bg-gold" />

      {/* Verticales Grid */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-forest">
              {t("verticals_headline")}
            </h2>
            <p className="mt-3 text-charcoal/70">
              {t("verticals_sub")}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Link
                  key={sector.key}
                  href="portfolio"
                  className="group flex flex-col items-center gap-3 rounded border border-stone bg-warm-white p-6 text-center transition-colors hover:border-forest"
                >
                  <Icon className="h-9 w-9 text-gold" />
                  <span className="text-sm font-semibold text-forest">
                    {t(sector.key)}
                  </span>
                  <span className="text-xs leading-snug text-charcoal/60">
                    {t(sector.descKey)}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Brief */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-3xl font-semibold text-forest">
            {t("team_headline")}
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-gold/40" />
          <p className="mt-6 leading-relaxed text-charcoal/80">
            {t("team_desc")}
          </p>
          <Link
            href="about"
            className="mt-8 inline-flex items-center text-sm font-semibold text-gold transition-colors hover:text-gold/80"
          >
            {t("team_link")} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA Band Final — Contact */}
      <section className="bg-forest px-6 py-20 text-center text-warm-white md:py-28">
        <div className="mx-auto max-w-[680px]">
          <div className="mx-auto mb-6 h-px w-12 bg-gold/50" />
          <h2 className="text-3xl font-semibold leading-snug">
            {t("cta_contact_headline")}
          </h2>
          <p className="mt-5 text-lg text-warm-white/70">
            {t("cta_contact_sub")}
          </p>
          <Link
            href="contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-10 bg-gold px-8 text-charcoal hover:bg-gold/90"
            )}
          >
            {t("cta_contact_button")} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
