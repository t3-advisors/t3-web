"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LocaleSwitcher } from "./locale-switcher";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/sectors", key: "sectors" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    const localized = `/${locale}${href === "/" ? "" : href}`;
    return pathname === localized || pathname === `/${locale}` && href === "/";
  }

  return (
    <nav className="sticky top-0 z-50 bg-forest text-warm-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/logo/t3-logo.png"
            alt="T3 Advisors"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-lg font-semibold tracking-tight">
            T3 Advisors
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}${link.href === "/" ? "" : link.href}`}
              className={`text-sm transition-colors hover:text-gold ${
                isActive(link.href) ? "text-gold" : "text-warm-white/80"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <LocaleSwitcher locale={locale} />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-warm-white/10 px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}${link.href === "/" ? "" : link.href}`}
              className={`block py-2 text-sm transition-colors hover:text-gold ${
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
