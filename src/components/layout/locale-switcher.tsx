"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function LocaleSwitcher({ locale }: { locale: string }) {
  const t = useTranslations("locale_switcher");
  const pathname = usePathname();
  const otherLocale = locale === "es" ? "en" : "es";

  // Replace the locale segment in the pathname
  const segments = pathname.split("/");
  segments[1] = otherLocale;
  const otherPath = segments.join("/");

  return (
    <Link
      href={otherPath}
      className="rounded border border-warm-white/30 px-2 py-1 text-xs font-semibold transition-colors hover:border-gold hover:text-gold"
    >
      {t(otherLocale)}
    </Link>
  );
}
