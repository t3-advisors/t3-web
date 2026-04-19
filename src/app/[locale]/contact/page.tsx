import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { alternates } from "@/lib/seo";
import { ContactForm } from "@/components/contact/contact-form";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// WhatsApp brand icon (Lucide doesn't ship brand icons for trademark reasons).
// Path sourced from the WhatsApp brand guidelines / simple-icons.
function WhatsAppIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zm-7.01 15.24h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14 0-.31-.02-.48-.02-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.18-.47-.31z"/>
    </svg>
  );
}

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
      <section className="px-5 pt-12 pb-10 md:px-10 md:pt-20 md:pb-16" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
          <p style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
            T3 Advisors
          </p>
          <div style={{ width: 40, height: 1, backgroundColor: GOLD, opacity: 0.4, margin: "12px 0 24px" }} />
        </div>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
          <h1 className="text-[32px] md:text-[52px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: F }}>
            {t("title")}
          </h1>
        </div>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
          <p className="text-base md:text-[19px]" style={{ marginTop: 24, lineHeight: 1.75, color: `${CH}BB`, maxWidth: 580 }}>
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── FORMULARIO + DATOS ──────────────────────────── */}
      <section className="py-10 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-[3fr_2fr] md:gap-8 md:px-10" style={{ maxWidth: 1100, margin: "0 auto" }}>

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
                  <p style={{ fontSize: 17, lineHeight: 1.6 }}>
                    <a
                      href={`mailto:${t("email_value")}`}
                      className="no-underline transition-colors duration-200 hover:underline"
                      style={{ color: `${CH}CC` }}
                    >
                      {t("email_value")}
                    </a>
                  </p>
                </div>

                <div style={{ height: 1, backgroundColor: "rgba(27,67,50,0.10)" }} />

                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <WhatsAppIcon size={20} color={GOLD} />
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: F }}>
                      {t("phone_label")}
                    </h3>
                  </div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: `${CH}BB`, marginBottom: 4 }}>
                    {t("phone_name")}
                  </p>
                  <p style={{ fontSize: 17, lineHeight: 1.6 }}>
                    <a
                      href={`https://wa.me/${t("phone_value").replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline transition-colors duration-200 hover:underline"
                      style={{ color: `${CH}CC` }}
                    >
                      {t("phone_value")}
                    </a>
                  </p>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
