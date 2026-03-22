import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contacto — T3 Advisors",
  description:
    "Contáctenos para explorar oportunidades de inversión en Venezuela.",
};

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-forest md:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-4 max-w-[640px] text-lg text-charcoal/70">
            {t("subtitle")}
          </p>
        </div>

        {/* 2-column layout */}
        <div className="mt-16 grid gap-16 md:grid-cols-[3fr_2fr]">
          {/* Form */}
          <ContactForm />

          {/* Contact data */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold" />
                <h3 className="font-semibold text-forest">{t("email_label")}</h3>
              </div>
              <p className="mt-2 text-charcoal/80">{t("email_value")}</p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" />
                <h3 className="font-semibold text-forest">{t("locations_label")}</h3>
              </div>
              <div className="mt-2 space-y-1 text-charcoal/80">
                <p>Caracas, Venezuela</p>
                <p>Madrid, España</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
