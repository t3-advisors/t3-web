import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { alternates } from "@/lib/seo";
import { HomepageContent } from "@/components/homepage/HomepageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("home_title"),
    description: t("home_desc"),
    alternates: alternates(locale, ""),
    openGraph: {
      title: t("home_title"),
      description: t("home_desc"),
      type: "website",
    },
  };
}

export default function HomePage() {
  return <HomepageContent />;
}
