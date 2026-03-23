import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Globe, Cpu, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre Nosotros — T3 Advisors",
  description:
    "Firma de asesoría en bienes raíces comerciales enfocada en Venezuela. Conozca al equipo y nuestro modelo operativo.",
  openGraph: {
    title: "Sobre Nosotros — T3 Advisors",
    description:
      "Por qué nació T3, nuestro equipo, y cómo operamos.",
    type: "website",
  },
};

const teamMembers = [
  {
    icon: MapPin,
    nameKey: "team1_name",
    roleKey: "team1_role",
    focusKey: "team1_focus",
    bioKey: "team1_bio",
    prominent: true,
  },
  {
    icon: Globe,
    nameKey: "team2_name",
    roleKey: "team2_role",
    focusKey: "team2_focus",
    bioKey: "team2_bio",
    prominent: false,
  },
  {
    icon: Cpu,
    nameKey: "team3_name",
    roleKey: "team3_role",
    focusKey: "team3_focus",
    bioKey: "team3_bio",
    prominent: false,
  },
] as const;

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      {/* Page Header */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[800px]">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">T3 Advisors</p>
          <div className="mt-3 h-px w-10 bg-gold/40" />
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-forest md:text-[52px] md:leading-tight">
            {t("hero_headline")}
          </h1>
          <div className="mt-8 space-y-4">
            <p className="text-lg leading-relaxed text-charcoal/80">
              {t("hero_p1")}
            </p>
            <p className="text-lg leading-relaxed text-charcoal/80">
              {t("hero_p2")}
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-stone/10 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-3xl font-semibold text-forest">
            {t("team_headline")}
          </h2>

          {/* Tovi — prominent */}
          <div className="mx-auto mt-14 max-w-[640px] rounded border border-stone bg-warm-white p-8" style={{ borderTop: "3px solid #C9A84C" }}>
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded bg-forest text-xl font-semibold text-warm-white" style={{ fontFamily: "var(--font-heading)" }}>
                AT
              </div>
              <div>
                <h3 className="text-xl font-semibold text-forest">
                  {t("team1_name")}
                </h3>
                <p className="mt-1 text-sm font-semibold text-gold">
                  {t("team1_role")} · {t("team1_focus")}
                </p>
                <p className="mt-3 leading-relaxed text-charcoal/80">
                  {t("team1_bio")}
                </p>
              </div>
            </div>
          </div>

          {/* Guillermo + Fernando — side by side */}
          <div className="mx-auto mt-8 grid max-w-[640px] gap-6 sm:max-w-none sm:grid-cols-2">
            {teamMembers.filter((m) => !m.prominent).map((member) => (
              <div
                key={member.nameKey}
                className="rounded border border-stone bg-warm-white p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-forest text-sm font-semibold text-warm-white" style={{ fontFamily: "var(--font-heading)" }}>
                    {t(member.nameKey).split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-forest">
                      {t(member.nameKey)}
                    </h3>
                    <p className="text-sm font-semibold text-gold">
                      {t(member.roleKey)} · {t(member.focusKey)}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                      {t(member.bioKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-semibold text-forest">
            {t("model_headline")}
          </h2>
          <div className="mt-8 space-y-4">
            <p className="leading-relaxed text-charcoal/80">
              {t("model_p1")}
            </p>
            <p className="leading-relaxed text-charcoal/80">
              {t("model_p2")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest px-6 py-20 text-center text-warm-white md:py-28">
        <div className="mx-auto max-w-[680px]">
          <div className="mx-auto mb-6 h-px w-12 bg-gold/50" />
          <h2 className="text-3xl font-semibold leading-snug">
            {t("cta_headline")}
          </h2>
          <Link
            href="contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-10 bg-gold px-8 text-charcoal hover:bg-gold/90"
            )}
          >
            {t("cta_button")} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
