"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LocaleSwitcher } from "./locale-switcher";

const navLinks = [
  { href: "/why-venezuela", key: "why_venezuela" },
  { href: "/investors", key: "investors" },
  { href: "/sellers", key: "sellers" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    const localized = `/${locale}${href}`;
    return pathname === localized;
  }

  return (
    <nav className="sticky top-0 z-50 bg-forest text-warm-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/logo/final_1_bold_tight_white_transparent.png"
            alt="T3 Advisors"
            width={200}
            height={80}
            className="h-[49px] w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}${link.href}`}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-gold ${
                isActive(link.href) ? "text-gold" : "text-warm-white/80"
              }`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t(link.key)}
            </Link>
          ))}
          <LocaleSwitcher locale={locale} />
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-warm-white/10 px-6 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}${link.href}`}
              className={`block py-2 text-sm font-semibold tracking-wide transition-colors hover:text-gold ${
                isActive(link.href) ? "text-gold" : "text-warm-white/80"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="pt-2">
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      )}
    </nav>
  );
}
