import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Eye, Presentation, Lock, BarChart3, Briefcase, UserCheck, Clock, Trophy } from "lucide-react";
import { alternates } from "@/lib/seo";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sellers/faq-section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("sellers_title"),
    description: t("sellers_desc"),
    alternates: alternates(locale, "/sellers"),
    openGraph: {
      title: t("sellers_title"),
      description: t("sellers_desc"),
      type: "website",
    },
  };
}

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

      {/* ── 6 FASES ─────────────────────────────────────── */}
      <section className="px-5 py-10 md:px-10 md:py-[72px]" style={{ backgroundColor: "#F2EFE8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 className="text-2xl md:text-[36px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
              {t("process_headline")}
            </h2>
            <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2 }} />
            <p className="text-base md:text-lg" style={{ marginTop: 20, color: `${CH}AA` }}>{t("process_sub")}</p>
          </ScrollReveal>

          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 0 }}>
            {phaseKeys.map((n, i) => (
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
                    {i < phaseKeys.length - 1 && (
                      <div style={{ width: 1, flexGrow: 1, backgroundColor: GOLD, opacity: 0.35, margin: "6px 0" }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, paddingBottom: i < phaseKeys.length - 1 ? 36 : 0 }}>
                    <h3 className="text-xl md:text-[28px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, color: F, marginBottom: 20, lineHeight: "52px" }}>
                      {t(`phase${n}_title`)}
                    </h3>

                    {/* 3 sub-cards */}
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
                      {([
                        { Icon: Briefcase, labelKey: "label_what_we_do",    contentKey: `phase${n}_do` },
                        { Icon: UserCheck, labelKey: "label_what_you_need", contentKey: `phase${n}_need` },
                        { Icon: Clock,     labelKey: "label_what_to_expect",contentKey: `phase${n}_expect` },
                      ] as const).map(({ Icon, labelKey, contentKey }) => {
                        const text = t(contentKey);
                        const lines = text.split("\n");
                        return (
                          <div key={labelKey} className="px-4 py-5 md:px-5 md:py-6" style={{
                            backgroundColor: WW, borderRadius: 8,
                            boxShadow: "0 4px 16px rgba(44,44,44,0.07), 0 1px 4px rgba(44,44,44,0.04)",
                          }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                              <Icon size={26} color={GOLD} strokeWidth={1.5} />
                              <p style={{
                                fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 900,
                                letterSpacing: "0.02em", textTransform: "uppercase", color: GOLD,
                              }}>
                                {t(labelKey)}
                              </p>
                            </div>
                            <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                              {lines.map((line, li) => (
                                <li key={li} style={{ fontSize: 16, lineHeight: 1.7, color: `${CH}BB`, listStyleType: "disc" }}>
                                  {line}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ── HONORARIOS ──────────────────────────────── */}
          <ScrollReveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10 px-5 py-8 md:px-12 md:py-10" style={{
              marginTop: 48,
              backgroundColor: F, borderRadius: 12,
              boxShadow: "0 12px 48px rgba(27,67,50,0.30)",
            }}>
              <Trophy size={56} color={GOLD} strokeWidth={1.25} style={{ flexShrink: 0 }} />
              <div>
                <h3 style={{
                  fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 600,
                  color: WW, marginBottom: 12, letterSpacing: "-0.01em",
                }}>
                  {t("fee_headline")}
                </h3>
                <p className="text-base md:text-[17px]" style={{ lineHeight: 1.75, color: `${WW}CC` }}>
                  {t("fee_body")}
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── PULL QUOTE ──────────────────────────────────── */}
      <section className="px-5 py-12 md:px-10 md:py-20" style={{ backgroundColor: F }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <ScrollReveal>
            <div style={{ width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "0 auto 36px" }} />
            <p className="text-xl md:text-[30px]" style={{
              fontFamily: "var(--font-heading)", fontStyle: "italic",
              lineHeight: 1.55, color: WW, letterSpacing: "-0.01em",
            }}>
              &ldquo;{t("pullquote_text")}&rdquo;
            </p>
            <p style={{ marginTop: 28, fontSize: 14, fontWeight: 600, letterSpacing: "0.06em", color: `${WW}99`, textTransform: "uppercase" }}>
              — {t("pullquote_attribution")}
            </p>
            <div style={{ width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "28px auto 0", opacity: 0.4 }} />
          </ScrollReveal>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── POR QUÉ T3 ──────────────────────────────────── */}
      <section className="px-5 py-10 md:px-10 md:py-[72px]">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 className="text-2xl md:text-[36px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, letterSpacing: "-0.02em", color: F, textAlign: "center" }}>
              {t("why_headline")}
            </h2>
            <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "14px auto 48px" }} />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {whyKeys.map((n, i) => {
              const Icon = whyIcons[i];
              return (
                <ScrollReveal key={n} delay={i * 0.1}>
                  <div className="px-5 py-6 md:px-9 md:py-9" style={{
                    backgroundColor: WW, borderRadius: 10,
                    boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
                    height: "100%",
                  }}>
                    <Icon size={40} color={GOLD} strokeWidth={1.25} />
                    <h3 style={{ marginTop: 20, fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: F }}>
                      {t(`why${n}_title`)}
                    </h3>
                    <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.75, color: `${CH}BB` }}>
                      {t(`why${n}_text`)}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── FAQ ─────────────────────────────────────────── */}
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>

      {/* ── CTA FINAL ───────────────────────────────────── */}
      <CtaBand
        headline={t("cta_headline")}
        sub={t("cta_sub")}
        primaryHref="/contact?mode=seller"
        primaryLabel={t("cta_btn")}
      />
    </div>
  );
}
