import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight, Scale, ShieldCheck, Calculator, Award, HardHat,
  Building2, ShieldAlert, Banknote, TrendingUp,
} from "lucide-react";
import { alternates } from "@/lib/seo";
import { CtaBand } from "@/components/sections/cta-band";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("investors_title"),
    description: t("investors_desc"),
    alternates: alternates(locale, "/investors"),
    openGraph: {
      title: t("investors_title"),
      description: t("investors_desc"),
      type: "website",
    },
  };
}

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";

const steps = [1, 2, 3, 4, 5, 6, 7] as const;
const allies = [
  { icon: TrendingUp, n: 6 },
  { icon: Scale,      n: 1 },
  { icon: ShieldCheck,n: 2 },
  { icon: Calculator, n: 3 },
  { icon: Award,      n: 4 },
  { icon: HardHat,    n: 5 },
] as const;
const foreignTopics = [
  { key: "ofac",        Icon: ShieldAlert, highlight: true  },
  { key: "vehicles",    Icon: Building2,   highlight: false },
  { key: "legal",       Icon: Scale,       highlight: false },
  { key: "repatriation",Icon: Banknote,    highlight: false },
] as const;
const riskKeys = [1, 2, 3, 4] as const;
const natReqs = [1, 2, 3, 4, 5, 6] as const;

export default function InvestorsPage() {
  const t = useTranslations("investorsPage");

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", backgroundColor: WW, color: CH }}>

      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section className="px-5 pt-12 pb-10 md:px-10 md:pt-20 md:pb-[72px]" style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0s both" }}>
          <p style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
            T3 Advisors
          </p>
          <div style={{ width: 40, height: 1, backgroundColor: GOLD, opacity: 0.4, margin: "12px auto 24px" }} />
        </div>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
          <h1 className="text-[32px] md:text-[52px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: F }}>
            {t("hero_headline")}
          </h1>
        </div>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
          <p className="text-base md:text-[19px]" style={{ marginTop: 24, lineHeight: 1.75, color: `${CH}BB`, maxWidth: 620, margin: "24px auto 0" }}>
            {t("hero_intro")}
          </p>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── PROCESO: 7 PASOS ────────────────────────────── */}
      <section className="px-5 py-10 md:px-10 md:py-[72px]" style={{ backgroundColor: "#F2EFE8" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 className="text-2xl md:text-[36px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, letterSpacing: "-0.02em", color: F, textAlign: "center" }}>
              {t("process_headline")}
            </h2>
            <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "14px auto 52px" }} />
          </ScrollReveal>

          <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((n, i) => (
              <ScrollReveal key={n} delay={i * 0.08}>
                <div className="flex gap-4 md:gap-7">
                  {/* Rail */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: "50%",
                      backgroundColor: F, border: `2px solid ${GOLD}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 700, color: WW,
                      flexShrink: 0,
                    }}>
                      {n}
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{ width: 1, flexGrow: 1, backgroundColor: GOLD, opacity: 0.35, margin: "6px 0" }} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="px-5 py-4 md:px-7 md:py-4 md:pb-7" style={{
                    paddingBottom: i < steps.length - 1 ? 32 : 0,
                    backgroundColor: WW, borderRadius: 10,
                    marginLeft: 0, marginBottom: i < steps.length - 1 ? 12 : 0, flex: 1,
                    boxShadow: "0 4px 20px rgba(44,44,44,0.07), 0 1px 6px rgba(44,44,44,0.05)",
                  }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 600, color: F }}>
                      {t(`step${n}_title`)}
                    </h3>
                    <p style={{ marginTop: 8, fontSize: 16, lineHeight: 1.75, color: `${CH}CC` }}>
                      {t(`step${n}_text`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA PORTFOLIO ───────────────────────────────── */}
      <CtaBand
        headline={t("cta1_headline")}
        primaryHref="/portfolio"
        primaryLabel={t("cta1_btn")}
      />

      {/* ── RED DE ALIADOS ──────────────────────────────── */}
      <section className="px-5 py-10 md:px-10 md:py-[72px]" style={{ backgroundColor: WW }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 className="text-2xl md:text-[36px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
              {t("allies_headline")}
            </h2>
            <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
            <p className="text-base md:text-lg" style={{ marginTop: 24, lineHeight: 1.75, color: `${CH}CC`, maxWidth: 640 }}>
              {t("allies_intro")}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5" style={{ marginTop: 40 }}>
            {allies.map(({ icon: Icon, n }, i) => (
              <ScrollReveal key={n} delay={i * 0.1}>
                <div className="px-5 py-6 md:px-8 md:py-9" style={{
                  height: "100%",
                  backgroundColor: WW, borderRadius: 10,
                  boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
                }}>
                  <Icon size={40} color={GOLD} strokeWidth={1.25} />
                  <h3 style={{ marginTop: 20, fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 600, color: F }}>
                    {t(`ally${n}_title`)}
                  </h3>
                  <p style={{ marginTop: 10, fontSize: 16, lineHeight: 1.75, color: `${CH}BB` }}>
                    {t(`ally${n}_desc`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ marginTop: 40, display: "flex", gap: 24, alignItems: "stretch" }}>
              <div style={{ width: 4, borderRadius: 2, backgroundColor: GOLD, flexShrink: 0 }} />
              <p style={{ fontSize: 23, fontStyle: "italic", lineHeight: 1.8, color: CH }}>
                {t("allies_closing")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── RIESGOS ─────────────────────────────────────── */}
      <section className="px-5 py-10 md:px-10 md:py-[72px]" style={{ backgroundColor: "#F2EFE8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 className="text-2xl md:text-[36px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
              {t("risks_headline")}
            </h2>
            <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, marginBottom: 32 }} />
            <p className="text-base md:text-lg" style={{ lineHeight: 1.75, color: `${CH}CC` }}>
              {t("risks_text")}
            </p>
            <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
              <Link
                href="/why-venezuela"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 36px", borderRadius: 6,
                  fontSize: 16, fontWeight: 700, fontFamily: "var(--font-heading)",
                  backgroundColor: GOLD, color: CH, textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                }}
              >
                {t("risks_link")} <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── INVERSIÓN EXTRANJERA ────────────────────────── */}
      <section className="px-5 py-10 md:px-10 md:py-[72px]">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 className="text-2xl md:text-[36px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
              {t("foreign_headline")}
            </h2>
            <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, marginBottom: 24 }} />
            <p className="text-base md:text-lg" style={{ lineHeight: 1.75, color: `${CH}CC`, maxWidth: 640, marginBottom: 40 }}>
              {t("foreign_intro")}
            </p>
          </ScrollReveal>

          {/* ── REQUISITOS POR NACIONALIDAD ── */}
          <ScrollReveal>
            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 600, color: F, letterSpacing: "-0.01em", marginBottom: 24 }}>
                {t("reqs_headline")}
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                {/* EE.UU. */}
                <div className="px-5 py-6 md:px-9 md:py-8" style={{ backgroundColor: WW, borderRadius: 10, boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)" }}>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 40, lineHeight: 1, marginBottom: 12 }}>🇺🇸</div>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: F }}>
                      {t("reqs_us_title")}
                    </h4>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    {natReqs.map(n => (
                      <li key={n} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GOLD, flexShrink: 0, marginTop: 8 }} />
                        <span style={{ fontSize: 15, lineHeight: 1.65, color: `${CH}CC` }}>{t(`reqs_us_${n}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Europa */}
                <div className="px-5 py-6 md:px-9 md:py-8" style={{ backgroundColor: WW, borderRadius: 10, boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)" }}>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 40, lineHeight: 1, marginBottom: 12 }}>🇪🇺</div>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: F }}>
                      {t("reqs_eu_title")}
                    </h4>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    {natReqs.map(n => (
                      <li key={n} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GOLD, flexShrink: 0, marginTop: 8 }} />
                        <span style={{ fontSize: 15, lineHeight: 1.65, color: `${CH}CC` }}>{t(`reqs_eu_${n}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p style={{ marginTop: 16, fontSize: 13, fontStyle: "italic", lineHeight: 1.7, color: `${CH}77` }}>
                {t("reqs_disclaimer")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 600, color: F, letterSpacing: "-0.01em", marginBottom: 24 }}>
              {t("foreign_considerations_headline")}
            </h3>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {foreignTopics.map(({ key, Icon, highlight }, i) => (
              <ScrollReveal key={key} delay={i * 0.1}>
                <div className="flex flex-col gap-4 md:flex-row md:gap-9" style={{
                  backgroundColor: WW, borderRadius: 10, padding: "28px 20px",
                  boxShadow: highlight
                    ? "0 8px 32px rgba(27,67,50,0.14), 0 2px 8px rgba(27,67,50,0.08)"
                    : "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
                  borderLeft: highlight ? `4px solid ${GOLD}` : "4px solid transparent",
                }}>
                  <div style={{ flexShrink: 0, paddingTop: 4 }}>
                    <Icon size={57} color={GOLD} strokeWidth={1.25} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: F }}>
                        {t(`foreign_${key}_title`)}
                      </h3>
                      {highlight && (
                        <span style={{
                          fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
                          padding: "3px 10px", borderRadius: 4,
                          backgroundColor: `${GOLD}18`, color: GOLD,
                          textTransform: "uppercase",
                        }}>
                          {t("foreign_ofac_badge")}
                        </span>
                      )}
                    </div>
                    <p className="text-base md:text-[17px]" style={{ marginTop: 10, lineHeight: 1.75, color: `${CH}CC` }}>
                      {t(`foreign_${key}_text`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ marginTop: 48, display: "flex", gap: 24, alignItems: "stretch" }}>
              <div style={{ width: 4, borderRadius: 2, backgroundColor: GOLD, flexShrink: 0 }} />
              <p style={{ fontSize: 20, fontStyle: "italic", lineHeight: 1.8, color: CH }}>
                {t("foreign_closing")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────── */}
      <CtaBand
        headline={t("cta2_headline")}
        sub={t("cta2_sub")}
        primaryHref="/contact?mode=buyer"
        primaryLabel={t("cta2_btn")}
      />
    </div>
  );
}
