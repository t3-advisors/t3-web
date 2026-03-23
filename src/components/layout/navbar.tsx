"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LocaleSwitcher } from "./locale-switcher";

const F    = "#1B4332";
const WW   = "#F8F6F0";

const navLinks = [
  { href: "/why-venezuela", key: "why_venezuela" },
  { href: "/investors",     key: "investors"     },
  { href: "/sellers",       key: "sellers"       },
  { href: "/portfolio",     key: "portfolio"     },
  { href: "/about",         key: "about"         },
] as const;

export function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    return pathname === `/${locale}${href}`;
  }

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      backgroundColor: "rgba(248,246,240,0.96)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(27,67,50,0.12)",
      boxShadow: "0 2px 16px rgba(27,67,50,0.08)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "0 40px", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href={`/${locale}`} style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo/final_1_bold_tight_green_transparent.png"
            alt="T3 Advisors"
            width={200}
            height={80}
            style={{ height: 42, width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 32, fontFamily: "var(--font-heading)" }}
          className="hidden lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}${link.href}`}
              style={{
                fontSize: 15, fontWeight: 700, letterSpacing: "0.01em",
                color: F,
                opacity: isActive(link.href) ? 1 : 0.72,
                textDecoration: "none",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={e => {
                if (!isActive(link.href)) {
                  (e.currentTarget as HTMLElement).style.opacity = "0.72";
                }
              }}
            >
              {t(link.key)}
            </Link>
          ))}

          <LocaleSwitcher locale={locale} />

          <Link
            href={`/${locale}/contact`}
            style={{
              padding: "9px 22px", borderRadius: 6, fontSize: 14, fontWeight: 700,
              backgroundColor: F, color: WW, textDecoration: "none",
              boxShadow: "0 2px 8px rgba(27,67,50,0.25)",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#13321F"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = F; }}
          >
            {t("contact")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: F, background: "none", border: "none", cursor: "pointer" }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div style={{
          borderTop: "1px solid rgba(27,67,50,0.12)",
          padding: "12px 40px 20px",
          backgroundColor: WW,
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}${link.href}`}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block", padding: "10px 0",
                fontSize: 15, fontWeight: 700, color: F,
                opacity: isActive(link.href) ? 1 : 0.72,
                textDecoration: "none",
              }}
            >
              {t(link.key)}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            onClick={() => setMobileOpen(false)}
            style={{
              display: "inline-block", marginTop: 12,
              padding: "9px 22px", borderRadius: 6,
              fontSize: 14, fontWeight: 700,
              backgroundColor: F, color: WW, textDecoration: "none",
            }}
          >
            {t("contact")}
          </Link>
          <div style={{ marginTop: 16 }}>
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      )}
    </nav>
  );
}
