"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PortfolioRequestDialog } from "./portfolio-request-dialog";
import type { Vertical } from "@/data/portfolio-listings";

const F    = "#1B4332";
const GOLD = "#C9A84C";
const CH   = "#2C2C2C";
const BTN_SHADOW =
  "0 4px 14px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)";

const SESSION_KEY = "t3_portfolio_unlocked";

const DISK_NAMES: Record<"es" | "en", string> = {
  es: "t3-portfolio-es.pdf",
  en: "t3-portfolio-en.pdf",
};

const FRIENDLY_NAMES: Record<"es" | "en", string> = {
  es: "Portafolio T3 Advisors.pdf",
  en: "T3 Advisors Portfolio.pdf",
};

function readUnlocked(): ("es" | "en")[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return [];
    return raw
      .split(",")
      .map((s) => s.trim())
      .filter((l): l is "es" | "en" => l === "es" || l === "en");
  } catch {
    return [];
  }
}

function writeUnlocked(langs: ("es" | "en")[]) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(SESSION_KEY, langs.join(","));
  } catch {
    /* noop */
  }
}

function triggerDownload(lang: "es" | "en") {
  const a = document.createElement("a");
  a.href = `/portfolio/${DISK_NAMES[lang]}`;
  a.download = FRIENDLY_NAMES[lang];
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

async function triggerDownloads(langs: ("es" | "en")[]) {
  for (let i = 0; i < langs.length; i++) {
    triggerDownload(langs[i]);
    if (i < langs.length - 1) {
      // Small gap so browsers don't bundle/block sequential downloads.
      await new Promise((r) => setTimeout(r, 250));
    }
  }
}

type Variant = "gold" | "gold-large";

interface Props {
  /** When the button lives inside a sector card, pre-select that vertical. */
  defaultVertical?: Vertical;
  label: string;
  variant?: Variant;
  /** Optional style overrides (merged on top of the variant defaults). */
  style?: React.CSSProperties;
  className?: string;
}

export function PortfolioCTAButton({
  defaultVertical,
  label,
  variant = "gold",
  style,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hover, setHover] = useState(false);

  function handleClick() {
    const unlocked = readUnlocked();
    if (unlocked.length > 0) {
      // Already submitted in this session — re-trigger downloads directly.
      void triggerDownloads(unlocked);
      return;
    }
    setShowSuccess(false);
    setOpen(true);
  }

  function handleSubmitSuccess(langs: ("es" | "en")[]) {
    writeUnlocked(langs);
    void triggerDownloads(langs);
    setShowSuccess(true);
  }

  // Variant styles match the existing CTAs visually.
  const baseStyle: React.CSSProperties =
    variant === "gold-large"
      ? {
          padding: "14px 36px",
          fontSize: 16,
        }
      : {
          padding: "12px 32px",
          fontSize: 15,
        };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          borderRadius: 6,
          fontWeight: 700,
          fontFamily: "var(--font-heading)",
          backgroundColor: hover ? "#b8932e" : GOLD,
          color: CH,
          textDecoration: "none",
          border: "none",
          cursor: "pointer",
          boxShadow: hover
            ? BTN_SHADOW
            : "0 2px 8px rgba(0,0,0,0.18)",
          transition: "background-color 0.18s, box-shadow 0.18s",
          ...baseStyle,
          ...style,
        }}
      >
        {label} <ArrowRight size={variant === "gold-large" ? 18 : 16} />
      </button>

      <PortfolioRequestDialog
        open={open}
        onOpenChange={setOpen}
        defaultVertical={defaultVertical}
        onSubmitSuccess={handleSubmitSuccess}
        showSuccess={showSuccess}
      />
    </>
  );
}

// Re-export for convenience.
export { F as PORTFOLIO_FOREST };
