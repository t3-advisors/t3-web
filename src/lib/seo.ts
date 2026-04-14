import type { Metadata } from "next";

const BASE = "https://www.t3-advisors.com";

/**
 * Generate alternates (canonical + hreflang) for a page.
 * @param locale - current locale ("es" | "en")
 * @param path - page path without locale prefix, e.g. "/portfolio" or "" for home
 */
export function alternates(locale: string, path: string): Metadata["alternates"] {
  const canonical = `${BASE}/${locale}${path}`;
  return {
    canonical,
    languages: {
      es: `${BASE}/es${path}`,
      en: `${BASE}/en${path}`,
    },
  };
}
