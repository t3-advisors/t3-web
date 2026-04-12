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
  { href: "",               key: "home"          },
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
      {/* Desktop — 3-column grid */}
      <div
        className="hidden lg:grid"
        style={{
          maxWidth: 1200, margin: "0 auto",
          padding: "0 40px", height: 72,
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        {/* LEFT — logo */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Link href={`/${locale}`} style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo/final_1_bold_tight_green_transparent.png"
              alt="T3 Advisors"
              width={200}
              height={80}
              style={{ height: 42, width: "auto" }}
            />
          </Link>
        </div>

        {/* CENTER — nav links */}
        <div style={{
          display: "flex", alignItems: "center", gap: 28,
          fontFamily: "var(--font-heading)",
        }}>
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.key}
                href={`/${locale}${link.href}`}
                style={{
                  fontSize: 15, fontWeight: 700, letterSpacing: "0.01em",
                  color: F,
                  opacity: active ? 1 : 0.72,
                  textDecoration: "none",
                  padding: "5px 10px",
                  borderRadius: 6,
                  transition: "opacity 0.15s, font-size 0.15s, box-shadow 0.15s, background-color 0.15s",
                  boxShadow: active ? "0 2px 10px rgba(27,67,50,0.13)" : "none",
                  backgroundColor: active ? "rgba(27,67,50,0.07)" : "transparent",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.opacity = "1";
                  el.style.fontSize = "16px";
                  el.style.boxShadow = "0 4px 14px rgba(27,67,50,0.15)";
                  el.style.backgroundColor = "rgba(27,67,50,0.07)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.opacity = active ? "1" : "0.72";
                  el.style.fontSize = "15px";
                  el.style.boxShadow = active ? "0 2px 10px rgba(27,67,50,0.13)" : "none";
                  el.style.backgroundColor = active ? "rgba(27,67,50,0.07)" : "transparent";
                }}
              >
                {t(link.key)}
              </Link>
            );
          })}
        </div>

        {/* RIGHT — locale switcher + Contacto button */}
        <div style={{
          display: "flex", alignItems: "center", gap: 16,
          justifyContent: "flex-end",
        }}>
          <LocaleSwitcher locale={locale} />
          <Link
            href={`/${locale}/contact`}
            style={{
              padding: "9px 22px", borderRadius: 6, fontSize: 14, fontWeight: 700,
              backgroundColor: F, color: WW, textDecoration: "none",
              fontFamily: "var(--font-heading)",
              boxShadow: "0 2px 8px rgba(27,67,50,0.25)",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#13321F"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = F; }}
          >
            {t("contact")}
          </Link>
        </div>
      </div>

      {/* Mobile — simple row */}
      <div
        className="flex lg:hidden"
        style={{
          padding: "0 24px", height: 64,
          alignItems: "center", justifyContent: "space-between",
        }}
      >
        <Link href={`/${locale}`} style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo/final_1_bold_tight_green_transparent.png"
            alt="T3 Advisors"
            width={200}
            height={80}
            style={{ height: 36, width: "auto" }}
          />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: F, background: "none", border: "none", cursor: "pointer" }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            borderTop: "1px solid rgba(27,67,50,0.12)",
            padding: "12px 24px 20px",
            backgroundColor: WW,
          }}
        >
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
                fontFamily: "var(--font-heading)",
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
              fontFamily: "var(--font-heading)",
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
