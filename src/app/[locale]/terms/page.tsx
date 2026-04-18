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
    title: t("terms_title"),
    description: t("terms_desc"),
    alternates: alternates(locale, "/terms"),
    openGraph: {
      title: t("terms_title"),
      description: t("terms_desc"),
      type: "website",
    },
  };
}

export default function TermsPage() {
  const t = useTranslations("terms");
  const sections = t.raw("sections") as LegalSection[];

  return (
    <LegalPage
      title={t("title")}
      intro={t("intro")}
      sections={sections}
    />
  );
}
