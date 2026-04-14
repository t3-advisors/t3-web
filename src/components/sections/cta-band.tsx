"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";
const BTN_SHADOW = "0 4px 14px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)";

interface CtaBandProps {
  headline: string;
  sub?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  light?: boolean;
}

export function CtaBand({ headline, sub, primaryHref, primaryLabel, secondaryHref, secondaryLabel, light = false }: CtaBandProps) {
  const [hp, setHp] = useState(false);
  const [hs, setHs] = useState(false);

  const bg        = light ? "#F2EFE8" : F;
  const headingCl = light ? F  : WW;
  const subCl     = light ? `${CH}99` : `${WW}B3`;

  return (
    <section className="px-5 py-10 md:px-10 md:py-[72px]" style={{ backgroundColor: bg, textAlign: "center" }}>
      <ScrollReveal>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ width: 48, height: 1, backgroundColor: GOLD, opacity: 0.5, margin: "0 auto 32px" }} />
        <h2 className="text-2xl md:text-[34px]" style={{
          fontFamily: "var(--font-heading)", fontWeight: 600,
          lineHeight: 1.3, color: headingCl, letterSpacing: "-0.01em",
        }}>
          {headline}
        </h2>
        {sub && (
          <p className="text-base md:text-lg" style={{ marginTop: 20, lineHeight: 1.75, color: subCl }}>{sub}</p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10 md:gap-4">
          <Link
            href={primaryHref}
            onMouseEnter={() => setHp(true)}
            onMouseLeave={() => setHp(false)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700,
              fontFamily: "var(--font-heading)",
              backgroundColor: hp ? "#b8932e" : GOLD, color: CH, textDecoration: "none",
              boxShadow: hp ? BTN_SHADOW : "0 2px 8px rgba(0,0,0,0.18)",
              transition: "background-color 0.18s, box-shadow 0.18s",
            }}
          >
            {primaryLabel} <ArrowRight size={18} />
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              onMouseEnter={() => setHs(true)}
              onMouseLeave={() => setHs(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 36px", borderRadius: 6, fontSize: 16, fontWeight: 700,
                fontFamily: "var(--font-heading)",
                backgroundColor: hs ? "rgba(248,246,240,0.12)" : "transparent",
                color: WW, textDecoration: "none",
                border: "1.5px solid rgba(248,246,240,0.38)",
                transition: "background-color 0.18s",
              }}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
