import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { alternates } from "@/lib/seo";
import { ContactForm } from "@/components/contact/contact-form";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("contact_title"),
    description: t("contact_desc"),
    alternates: alternates(locale, "/contact"),
    openGraph: {
      title: t("contact_title"),
      description: t("contact_desc"),
      type: "website",
    },
  };
}

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", backgroundColor: WW, color: CH }}>

      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section className="px-5 pt-12 pb-10 md:px-10 md:pt-20 md:pb-16" style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
          <p style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
            T3 Advisors
          </p>
          <div style={{ width: 40, height: 1, backgroundColor: GOLD, opacity: 0.4, margin: "12px auto 24px" }} />
        </div>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
          <h1 className="text-[32px] md:text-[52px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: F }}>
            {t("title")}
          </h1>
        </div>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
          <p className="text-base md:text-[19px]" style={{ marginTop: 24, lineHeight: 1.75, color: `${CH}BB`, maxWidth: 580, margin: "24px auto 0" }}>
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── FORMULARIO + DATOS ──────────────────────────── */}
      <section className="px-5 py-10 md:px-10 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[3fr_2fr] md:gap-8" style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Form Card */}
          <ScrollReveal direction="left">
            <div className="px-5 py-8 md:px-[52px] md:py-12" style={{
              backgroundColor: WW, borderRadius: 10,
              boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
            }}>
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </ScrollReveal>

          {/* Info Card */}
          <ScrollReveal delay={0.15} direction="right">
            <div className="px-5 py-8 md:px-11 md:py-12" style={{
              backgroundColor: WW, borderRadius: 10,
              boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
              borderTop: `4px solid ${GOLD}`,
              alignSelf: "start",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <Mail size={20} color={GOLD} />
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: F }}>
                      {t("email_label")}
                    </h3>
                  </div>
                  <p style={{ fontSize: 17, color: `${CH}CC`, lineHeight: 1.6 }}>{t("email_value")}</p>
                </div>

                <div style={{ height: 1, backgroundColor: "rgba(27,67,50,0.10)" }} />

                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <Phone size={20} color={GOLD} />
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: F }}>
                      {t("phone_label")}
                    </h3>
                  </div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: `${CH}BB`, marginBottom: 4 }}>
                    {t("phone_name")}
                  </p>
                  <p style={{ fontSize: 17, color: `${CH}CC`, lineHeight: 1.6 }}>{t("phone_value")}</p>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
