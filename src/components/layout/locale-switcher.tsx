"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const F    = "#1B4332";
const GOLD = "#C9A84C";

export function LocaleSwitcher({ locale }: { locale: string }) {
  const t = useTranslations("locale_switcher");
  // `usePathname` from next-intl returns the current path WITHOUT the locale
  // prefix, so we can reuse it and let <Link locale=...> prepend the new one.
  const pathname = usePathname();
  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      style={{
        padding: "4px 10px", borderRadius: 4,
        border: `1px solid rgba(27,67,50,0.28)`,
        fontSize: 12, fontWeight: 700,
        color: F,
        textDecoration: "none",
        letterSpacing: "0.05em",
        transition: "border-color 0.15s, color 0.15s",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = GOLD;
        el.style.color = GOLD;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(27,67,50,0.28)";
        el.style.color = F;
      }}
    >
      {t(otherLocale)}
    </Link>
  );
}
