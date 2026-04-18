import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { alternates } from "@/lib/seo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("about_title"),
    description: t("about_desc"),
    alternates: alternates(locale, "/about"),
    openGraph: {
      title: t("about_title"),
      description: t("about_desc"),
      type: "website",
    },
  };
}

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";
const BTN_SHADOW = "0 4px 14px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)";

const teamMembers = [
  { nameKey: "team1_name", roleKey: "team1_role", focusKey: "team1_focus", bioKey: "team1_bio" },
  { nameKey: "team2_name", roleKey: "team2_role", focusKey: "team2_focus", bioKey: "team2_bio" },
  { nameKey: "team3_name", roleKey: "team3_role", focusKey: "team3_focus", bioKey: "team3_bio" },
] as const;

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", backgroundColor: WW, color: CH }}>

      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section className="px-5 py-10 md:px-10 md:py-20" style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
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
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16 }}>
            <p className="text-base md:text-[19px]" style={{ lineHeight: 1.75, color: `${CH}BB` }}>{t("hero_p1")}</p>
            <p className="text-base md:text-[19px]" style={{ lineHeight: 1.75, color: `${CH}BB` }}>{t("hero_p2")}</p>
          </div>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── EQUIPO ──────────────────────────────────────── */}
      <section className="px-5 py-10 md:px-10 md:py-[72px]" style={{ backgroundColor: "#F2EFE8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 className="text-2xl md:text-[36px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, letterSpacing: "-0.02em", color: F, textAlign: "center" }}>
              {t("team_headline")}
            </h2>
            <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "14px auto 52px" }} />
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.nameKey} delay={i * 0.1}>
                {i > 0 && (
                  <div style={{ width: "100%", height: 1, backgroundColor: GOLD, opacity: 0.25, marginBottom: 56 }} />
                )}
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-11 md:text-left" style={{ paddingBottom: i < teamMembers.length - 1 ? 56 : 0 }}>
                  <div className="w-28 h-28 md:w-40 md:h-40 text-3xl md:text-5xl" style={{
                    borderRadius: "50%", flexShrink: 0,
                    backgroundColor: F, border: `3px solid ${GOLD}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-heading)", fontWeight: 700, color: GOLD,
                  }}>
                    {t(member.nameKey).split(" ").slice(0, 2).map((w: string) => w[0]).join("")}
                  </div>
                  <div style={{ flex: 1, paddingTop: 12 }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 600, color: F }}>
                      {t(member.nameKey)}
                    </h3>
                    <p style={{ marginTop: 8, fontSize: 15, fontWeight: 700, color: GOLD, letterSpacing: "0.03em" }}>
                      {t(member.roleKey)} · {t(member.focusKey)}
                    </p>
                    <p className="text-base md:text-[17px]" style={{ marginTop: 20, lineHeight: 1.8, color: `${CH}CC` }}>
                      {t(member.bioKey)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── MODELO OPERATIVO ────────────────────────────── */}
      <section className="px-5 py-10 md:px-10 md:py-[72px]">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 className="text-2xl md:text-[36px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
              {t("model_headline")}
            </h2>
            <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, marginBottom: 32 }} />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="px-5 py-8 md:px-11 md:py-10" style={{
              backgroundColor: WW, borderRadius: 10,
              boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <p className="text-base md:text-lg" style={{ lineHeight: 1.8, color: `${CH}CC` }}>{t("model_p1")}</p>
                <p className="text-base md:text-lg" style={{ lineHeight: 1.8, color: `${CH}CC` }}>{t("model_p2")}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="px-5 py-12 md:px-10 md:py-20" style={{ backgroundColor: F, textAlign: "center" }}>
        <ScrollReveal>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div style={{ width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, margin: "0 auto 36px" }} />
            <h2 className="text-2xl md:text-[34px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, lineHeight: 1.3, color: WW }}>
              {t("cta_headline")}
            </h2>
            <div style={{ marginTop: 40 }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 40px", borderRadius: 6, fontSize: 16, fontWeight: 700,
                  fontFamily: "var(--font-heading)",
                  backgroundColor: GOLD, color: CH, textDecoration: "none",
                  boxShadow: BTN_SHADOW,
                }}
              >
                {t("cta_button")} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
