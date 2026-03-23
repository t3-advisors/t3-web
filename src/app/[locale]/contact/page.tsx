import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contacto — T3 Advisors",
  description: "Contáctenos para explorar oportunidades de inversión en Venezuela.",
};

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", backgroundColor: WW, color: CH }}>

      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section style={{ padding: "80px 40px 64px", maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
          T3 Advisors
        </p>
        <div style={{ width: 40, height: 1, backgroundColor: GOLD, opacity: 0.4, margin: "12px auto 24px" }} />
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: F }}>
          {t("title")}
        </h1>
        <p style={{ marginTop: 24, fontSize: 19, lineHeight: 1.75, color: `${CH}BB`, maxWidth: 580, margin: "24px auto 0" }}>
          {t("subtitle")}
        </p>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD }} />

      {/* ── FORMULARIO + DATOS ──────────────────────────── */}
      <section style={{ padding: "64px 40px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "3fr 2fr", gap: 32 }}>

          {/* Form Card */}
          <div style={{
            backgroundColor: WW, borderRadius: 10, padding: "48px 52px",
            boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
          }}>
            <ContactForm />
          </div>

          {/* Info Card */}
          <div style={{
            backgroundColor: WW, borderRadius: 10, padding: "48px 44px",
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
                  <MapPin size={20} color={GOLD} />
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: F }}>
                    {t("locations_label")}
                  </h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <p style={{ fontSize: 17, color: `${CH}CC` }}>Caracas, Venezuela</p>
                  <p style={{ fontSize: 17, color: `${CH}CC` }}>Madrid, España</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
