"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

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
}

export function CtaBand({ headline, sub, primaryHref, primaryLabel, secondaryHref, secondaryLabel }: CtaBandProps) {
  const [hp, setHp] = useState(false);
  const [hs, setHs] = useState(false);

  return (
    <section style={{ backgroundColor: F, padding: "72px 40px", textAlign: "center" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ width: 48, height: 1, backgroundColor: GOLD, opacity: 0.5, margin: "0 auto 32px" }} />
        <h2 style={{
          fontFamily: "var(--font-heading)", fontSize: 34, fontWeight: 600,
          lineHeight: 1.3, color: WW, letterSpacing: "-0.01em",
        }}>
          {headline}
        </h2>
        {sub && (
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.75, color: `${WW}B3` }}>{sub}</p>
        )}
        <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
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
              transform: hp ? "translateY(-1px)" : "none",
              transition: "background-color 0.18s, box-shadow 0.18s, transform 0.15s",
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
    </section>
  );
}
