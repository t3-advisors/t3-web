import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-charcoal text-warm-white/70">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-lg font-semibold text-warm-white">
              T3 Advisors
            </p>
            <p className="mt-1 text-sm">{t("tagline")}</p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              href={`/${locale}/privacy`}
              className="transition-colors hover:text-warm-white"
            >
              {t("privacy")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="transition-colors hover:text-warm-white"
            >
              {locale === "es" ? "Contacto" : "Contact"}
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-warm-white/10 pt-6 text-center text-xs">
          &copy; {year} T3 Advisors. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
