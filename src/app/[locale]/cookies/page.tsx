import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { alternates } from "@/lib/seo";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("cookies_title"),
    description: t("cookies_desc"),
    alternates: alternates(locale, "/cookies"),
    openGraph: {
      title: t("cookies_title"),
      description: t("cookies_desc"),
      type: "website",
    },
  };
}

export default function CookiesPage() {
  const t = useTranslations("cookies");
  const sections = t.raw("sections") as LegalSection[];

  return (
    <LegalPage
      title={t("title")}
      intro={t("intro")}
      sections={sections}
    />
  );
}
