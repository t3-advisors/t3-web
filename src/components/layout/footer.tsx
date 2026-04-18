import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const footerLinks = [
  { href: "/why-venezuela", key: "why_venezuela" },
  { href: "/investors", key: "investors" },
  { href: "/sellers", key: "sellers" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Footer(_props: { locale?: string }) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-charcoal">
      {/* Gold separator */}
      <div className="h-px bg-gold" />

      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1: Logo + tagline */}
          <div>
            <Image
              src="/logo/final_1_bold_tight_white_transparent.png"
              alt="T3 Advisors"
              width={140}
              height={56}
              className="h-14 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-stone">
              {t("tagline")}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-semibold text-warm-white" style={{ fontFamily: "var(--font-heading)" }}>
              {t("navigation")}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone transition-colors hover:text-warm-white"
                  >
                    {nav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-semibold text-warm-white" style={{ fontFamily: "var(--font-heading)" }}>
              {t("contact_heading")}
            </h3>
            <div className="mt-4 space-y-2 text-sm text-stone">
              <p>{t("email")}</p>
              <p className="mt-4 text-stone/70">{t("locations")}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-warm-white/10 pt-6 flex flex-col items-center gap-2 text-center text-xs text-stone/60 sm:flex-row sm:justify-between">
          <p>&copy; {year} T3 Advisors. {t("rights")}</p>
          <Link
            href="/privacy"
            className="transition-colors hover:text-warm-white"
          >
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
