"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { listings } from "@/data/portfolio-listings";
import { useIsMobile } from "@/hooks/use-mobile";

const F = "#1B4332";
const GOLD = "#C9A84C";
const WW = "#F8F6F0";

const SECTOR_LABELS: Record<string, { es: string; en: string }> = {
  re:  { es: "BIENES RAÍCES",       en: "REAL ESTATE" },
  hos: { es: "HOTELERÍA & TURISMO", en: "HOSPITALITY & TOURISM" },
  ag:  { es: "AGROINDUSTRIA",       en: "AGRIBUSINESS" },
  ind: { es: "INDUSTRIAL / ENERGÍA",en: "INDUSTRIAL / ENERGY" },
  hc:  { es: "SALUD",               en: "HEALTHCARE" },
  min: { es: "MINERÍA",             en: "MINING" },
};

const TX_LABELS: Record<string, { es: string; en: string }> = {
  sale:          { es: "Venta",         en: "Sale" },
  capital_raise: { es: "Capital Raise", en: "Capital Raise" },
};

// Show a representative sample across verticals
const CAROUSEL_IDS = ["2", "1", "3", "4", "5", "11", "6"];
const ITEMS = CAROUSEL_IDS.map((id) => listings.find((l) => l.id === id)!);

const CARD_W_DESKTOP = 340;
const CARD_GAP = 20;

export function PortfolioCarousel() {
  const locale = useLocale();
  const t = useTranslations("portfolioPage");
  const isEs = locale === "es";
  const isMobile = useIsMobile();

  const visible = isMobile ? 1 : 3;

  const [idx, setIdx] = useState(0);
  const idxRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const max = ITEMS.length - visible;

  // Reset index when switching breakpoints
  useEffect(() => {
    if (idx > max) {
      idxRef.current = 0;
      setIdx(0);
    }
  }, [max, idx]);

  // Measure container for mobile translateX
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goTo = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(max, i));
    idxRef.current = clamped;
    setIdx(clamped);
  }, [max]);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = idxRef.current >= max ? 0 : idxRef.current + 1;
      idxRef.current = next;
      setIdx(next);
    }, 3600);
    return () => clearInterval(timer);
  }, [max]);

  const step = isMobile ? containerWidth + CARD_GAP : CARD_W_DESKTOP + CARD_GAP;
  const translateX = idx * step;

  return (
    <div>
      <div ref={containerRef} style={{ overflow: "hidden", borderRadius: 4 }}>
        <div style={{
          display: "flex",
          gap: CARD_GAP,
          transform: `translateX(-${translateX}px)`,
          transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
          willChange: "transform",
        }}>
          {ITEMS.map((item) => {
            const sector = SECTOR_LABELS[item.vertical]?.[isEs ? "es" : "en"] ?? item.vertical;
            const txLabel = TX_LABELS[item.transactionType]?.[isEs ? "es" : "en"] ?? item.transactionType;
            const title = isEs ? item.titleEs : item.titleEn;
            const size = isEs ? item.sizeEs : item.sizeEn;
            const highlight = isEs ? item.highlightEs : item.highlightEn;

            return (
              <div
                key={item.id}
                className="px-5 py-6 md:px-7 md:py-8"
                style={{
                  flex: isMobile ? `0 0 ${containerWidth}px` : `0 0 ${CARD_W_DESKTOP}px`,
                  backgroundColor: WW,
                  borderRadius: 10,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 280,
                }}
              >
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: GOLD }}>{sector}</p>
                <h3 style={{ marginTop: 12, fontFamily: "'Montserrat', sans-serif", fontSize: 19, fontWeight: 600, color: F, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ marginTop: 8, fontSize: 14, color: `${F}88` }}>{size}</p>
                <p style={{ marginTop: 6, fontSize: 13, lineHeight: 1.55, color: `${F}66`, flex: 1 }}>{highlight}</p>
                <div style={{ marginTop: "auto", paddingTop: 12, borderTop: `1px solid rgba(27,67,50,0.10)`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 20, fontWeight: 700, color: F }}>{item.priceRange}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 4, backgroundColor: `${F}12`, color: F, letterSpacing: "0.08em", textTransform: "uppercase" }}>{txLabel}</span>
                </div>
                <p style={{ marginTop: 12, fontSize: 11, color: `${F}44`, fontStyle: "italic" }}>
                  {t("nda_note")}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={() => goTo(idx - 1)}
          disabled={idx === 0}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", border: `1px solid rgba(201,168,76,0.4)`, backgroundColor: "transparent", color: GOLD, cursor: idx === 0 ? "default" : "pointer", opacity: idx === 0 ? 0.3 : 1, transition: "opacity 0.2s" }}
        >
          <ChevronLeft size={18} />
        </button>
        {Array.from({ length: max + 1 }, (_, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            style={{ width: idx === i ? 24 : 8, height: 8, borderRadius: 4, backgroundColor: idx === i ? GOLD : `rgba(201,168,76,0.3)`, cursor: "pointer", transition: "all 0.3s" }}
          />
        ))}
        <button
          onClick={() => goTo(idx + 1)}
          disabled={idx === max}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", border: `1px solid rgba(201,168,76,0.4)`, backgroundColor: "transparent", color: GOLD, cursor: idx === max ? "default" : "pointer", opacity: idx === max ? 0.3 : 1, transition: "opacity 0.2s" }}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
