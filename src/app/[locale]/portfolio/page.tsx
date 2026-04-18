import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Landmark,
  Hotel,
  Wheat,
  Zap,
  Activity,
  Gem,
  type LucideIcon,
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
    title: t("portfolio_title"),
    description: t("portfolio_desc"),
    alternates: alternates(locale, "/portfolio"),
    openGraph: {
      title: t("portfolio_title"),
      description: t("portfolio_desc"),
      type: "website",
    },
  };
}

const F = "#1B4332";
const GOLD = "#C9A84C";
const WW = "#F8F6F0";
const CH = "#2C2C2C";
const STONE = "#F2EFE8";
const BTN_SHADOW = "0 4px 14px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)";

interface SectorDef {
  id: string;
  Icon: LucideIcon;
  gradient: string;
  dark: boolean;
  imgLeft: boolean;
}

const sectors: SectorDef[] = [
  {
    id: "re",
    Icon: Landmark,
    gradient: "linear-gradient(145deg, #2C3E50 0%, #34495E 35%, #415B6E 70%, #546E7A 100%)",
    dark: false,
    imgLeft: true,
  },
  {
    id: "hos",
    Icon: Hotel,
    gradient: "linear-gradient(145deg, #0D4F4E 0%, #14706E 35%, #1A8B88 70%, #0F5E5C 100%)",
    dark: true,
    imgLeft: false,
  },
  {
    id: "ag",
    Icon: Wheat,
    gradient: "linear-gradient(145deg, #2D5016 0%, #3A6420 35%, #4A7C34 70%, #3E6B22 100%)",
    dark: false,
    imgLeft: true,
  },
  {
    id: "ind",
    Icon: Zap,
    gradient: "linear-gradient(145deg, #2E3B42 0%, #3D4E56 35%, #4A5E68 70%, #37474F 100%)",
    dark: true,
    imgLeft: false,
  },
  {
    id: "hc",
    Icon: Activity,
    gradient: "linear-gradient(145deg, #1B5E3D 0%, #258B5A 35%, #2D9B6A 70%, #1B7048 100%)",
    dark: false,
    imgLeft: true,
  },
  {
    id: "min",
    Icon: Gem,
    gradient: "linear-gradient(145deg, #3E2723 0%, #5D4037 35%, #6D4C41 70%, #4E342E 100%)",
    dark: true,
    imgLeft: false,
  },
];

export default function PortfolioPage() {
  const t = useTranslations("portfolioPage");

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", backgroundColor: WW, color: CH }}>

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="px-5 pt-12 pb-10 md:px-10 md:pt-20 md:pb-[72px]" style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
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
          <div style={{ maxWidth: 840, margin: "32px auto 0" }}>
            <p className="text-base md:text-[19px]" style={{ lineHeight: 1.8, color: `${CH}BB` }}>
              {t("hero_intro_1")}
            </p>
            <p className="text-base md:text-[19px]" style={{ marginTop: 24, lineHeight: 1.8, color: `${CH}BB` }}>
              {t.rich("hero_intro_2", {
                b: (chunks) => <strong style={{ color: CH, fontWeight: 700 }}>{chunks}</strong>,
              })}
            </p>
          </div>
        </div>
      </section>

      {/* gold line */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── SECTOR SECTIONS ───────────────────────────── */}
      {sectors.map((sector, i) => {
        const bg = sector.dark ? F : STONE;
        const headingColor = sector.dark ? WW : F;
        const textColor = sector.dark ? `${WW}BB` : `${CH}BB`;
        const sectorNum = String(i + 1).padStart(2, "0");

        return (
          <section key={sector.id} id={sector.id} style={{ backgroundColor: bg }}>
            <ScrollReveal>
              <div className={`flex flex-col ${sector.imgLeft ? "md:flex-row" : "md:flex-row-reverse"} md:min-h-[520px]`} style={{ alignItems: "stretch" }}>

                {/* ── Image: bleeds to screen edge, same visual split as before ── */}
                <div className="h-56 sm:h-64 md:h-auto md:flex-[0_0_calc(50vw+24px)]" style={{
                  position: "relative", overflow: "hidden",
                  background: sector.gradient,
                  boxShadow: sector.imgLeft
                    ? "8px 0 32px rgba(0,0,0,0.22)"
                    : "-8px 0 32px rgba(0,0,0,0.22)",
                  zIndex: 1,
                }}>
                  <img
                    src={`/images/portfolio/${sector.id}.jpg`}
                    alt={t(`sector_label_${sector.id}`)}
                    style={{
                      position: "absolute", inset: 0,
                      width: "100%", height: "100%",
                      objectFit: "cover",
                      objectPosition: sector.id === "re" ? "center 40%" : undefined,
                    }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.03) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.12) 100%)",
                    pointerEvents: "none",
                  }} />
                </div>

                {/* ── Text panel: fills remaining space, content constrained to original width ── */}
                <div style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: sector.imgLeft ? "flex-start" : "flex-end",
                }}>
                  {/* Inner content — same 576px width as original (48% of 1200) */}
                  <div className={`px-5 py-10 ${sector.imgLeft ? "md:py-[72px] md:pl-14 md:pr-10" : "md:py-[72px] md:pr-14 md:pl-10"}`} style={{
                    width: "100%",
                    maxWidth: 576,
                    position: "relative",
                    overflow: "hidden",
                  }}>

                  {/* Decorative number — bottom-right of content block, slightly inset */}
                  <p className="text-[80px] md:text-[160px]" style={{
                    position: "absolute",
                    bottom: 1,
                    right: 28,
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    color: headingColor,
                    opacity: 0.08,
                    lineHeight: 1,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}>
                    {sectorNum}
                  </p>

                  {/* Sector icon */}
                  <sector.Icon size={28} color={GOLD} strokeWidth={1.2} />

                  {/* Sector name */}
                  <h2 className="text-[26px] md:text-[40px]" style={{
                    marginTop: 14,
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600, lineHeight: 1.15,
                    letterSpacing: "-0.02em", color: headingColor,
                  }}>
                    {t(`sector_label_${sector.id}`)}
                  </h2>

                  <div style={{
                    width: 40, height: 2, backgroundColor: GOLD,
                    borderRadius: 1, margin: "18px 0 20px", opacity: 0.6,
                  }} />

                  {/* Investment thesis subtitle */}
                  <p style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 20, fontWeight: 500, lineHeight: 1.4,
                    color: sector.dark ? `${WW}BB` : `${F}BB`,
                  }}>
                    {t(`sector_title_${sector.id}`)}
                  </p>

                  {/* Thesis paragraphs */}
                  <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.8, color: textColor }}>
                    {t(`sector_p1_${sector.id}`)}
                  </p>
                  <p style={{ marginTop: 14, fontSize: 17, lineHeight: 1.8, color: textColor }}>
                    {t(`sector_p2_${sector.id}`)}
                  </p>

                  {/* CTA */}
                  <div style={{ marginTop: 36 }}>
                    <Link
                      href={`/contact?interest=${sector.id}`}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "12px 32px", borderRadius: 6,
                        fontSize: 15, fontWeight: 700,
                        fontFamily: "var(--font-heading)",
                        backgroundColor: GOLD, color: CH,
                        textDecoration: "none", boxShadow: BTN_SHADOW,
                      }}
                    >
                      {t("sector_cta")} <ArrowRight size={16} />
                    </Link>
                  </div>

                  </div>{/* end inner content */}
                </div>{/* end text panel */}

              </div>
            </ScrollReveal>
          </section>
        );
      })}

      {/* gold line */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── CTA FINAL ─────────────────────────────────── */}
      <CtaBand
        headline={t("cta_headline")}
        sub={t("cta_sub")}
        primaryHref="/contact"
        primaryLabel={t("cta_btn")}
        light
      />
    </div>
  );
}
