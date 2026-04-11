import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Link from "next/link";
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
import { CtaBand } from "@/components/sections/cta-band";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Portafolio de Inversión — T3 Advisors",
  description:
    "Seis sectores de inversión en Venezuela: inmobiliario, hotelería, agroindustria, industrial, salud y minería.",
  openGraph: {
    title: "Portafolio de Inversión — T3 Advisors",
    description: "Activos reales en seis sectores clave de la economía venezolana.",
    type: "website",
  },
};

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
      <section style={{ padding: "80px 40px 72px", maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
            T3 Advisors
          </p>
          <div style={{ width: 40, height: 1, backgroundColor: GOLD, opacity: 0.4, margin: "12px auto 24px" }} />
        </div>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: F }}>
            {t("hero_headline")}
          </h1>
        </div>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
          <p style={{ marginTop: 24, fontSize: 19, lineHeight: 1.75, color: `${CH}BB`, maxWidth: 640, margin: "24px auto 0" }}>
            {t("hero_intro")}
          </p>
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
              <div style={{
                maxWidth: 1200,
                margin: "0 auto",
                display: "flex",
                flexDirection: sector.imgLeft ? "row" : "row-reverse",
                alignItems: "stretch",
                minHeight: 520,
              }}>

                {/* ── Sector image ── */}
                <div style={{ flex: "0 0 52%", position: "relative", overflow: "hidden", background: sector.gradient }}>
                  <img
                    src={`/images/portfolio/${sector.id}.jpg`}
                    alt={t(`sector_label_${sector.id}`)}
                    style={{
                      position: "absolute", inset: 0,
                      width: "100%", height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.03) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.12) 100%)",
                    pointerEvents: "none",
                  }} />
                </div>

                {/* ── Text content ── */}
                <div style={{
                  flex: 1,
                  position: "relative",
                  overflow: "hidden",
                  padding: sector.imgLeft ? "72px 40px 72px 56px" : "72px 56px 72px 40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}>
                  {/* Decorative number */}
                  <p style={{
                    position: "absolute",
                    bottom: -30,
                    ...(sector.imgLeft ? { right: -8 } : { left: -8 }),
                    fontSize: 220,
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    color: headingColor,
                    opacity: 0.035,
                    lineHeight: 1,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}>
                    {sectorNum}
                  </p>

                  {/* Sector icon */}
                  <sector.Icon size={28} color={GOLD} strokeWidth={1.2} />

                  {/* Sector name */}
                  <h2 style={{
                    marginTop: 14,
                    fontFamily: "var(--font-heading)",
                    fontSize: 40, fontWeight: 600, lineHeight: 1.15,
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
                      href={`contact?interest=${sector.id}`}
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
                </div>

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
        primaryHref="contact"
        primaryLabel={t("cta_btn")}
      />
    </div>
  );
}
