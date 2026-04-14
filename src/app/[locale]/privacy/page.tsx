import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { alternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("privacy_title"),
    description: t("privacy_desc"),
    alternates: alternates(locale, "/privacy"),
    openGraph: {
      title: t("privacy_title"),
      description: t("privacy_desc"),
      type: "website",
    },
  };
}

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <>
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[800px]">
          <h1 className="text-4xl font-semibold tracking-tight text-forest md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-8 leading-relaxed text-charcoal/80">
            {t("body")}
          </p>
        </div>
      </section>
    </>
  );
}
