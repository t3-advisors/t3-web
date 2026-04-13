import {
  Html, Head, Body, Container, Section,
  Heading, Text,
} from "@react-email/components";

const VERTICAL_LABELS: Record<string, { es: string; en: string }> = {
  re:  { es: "Inmobiliario",  en: "Real Estate"    },
  hos: { es: "Hotelería",     en: "Hospitality"    },
  ag:  { es: "Agroindustria", en: "Agribusiness"   },
  ind: { es: "Industrial",    en: "Industrial"     },
  hc:  { es: "Salud",         en: "Healthcare"     },
  min: { es: "Minería",       en: "Mining"         },
};

const copy = {
  es: {
    subject: "Solicitud recibida — T3 Advisors",
    greeting: (name: string) => `Hola ${name},`,
    body: "Hemos recibido tu solicitud de información. Nuestro equipo revisará tu perfil y te enviará las oportunidades disponibles en los sectores de tu interés:",
    closing: "Si tienes alguna pregunta adicional, no dudes en responder a este correo.",
    signature: "El equipo de T3 Advisors",
  },
  en: {
    subject: "Request received — T3 Advisors",
    greeting: (name: string) => `Hello ${name},`,
    body: "We have received your information request. Our team will review your profile and send you the available opportunities in your sectors of interest:",
    closing: "If you have any additional questions, feel free to reply to this email.",
    signature: "The T3 Advisors team",
  },
};

interface BuyerConfirmationProps {
  name: string;
  locale: string;
  verticals: string[];
}

export function BuyerConfirmation({ name, locale, verticals }: BuyerConfirmationProps) {
  const t = copy[locale as keyof typeof copy] ?? copy.es;
  const lang = (locale === "en" ? "en" : "es") as "es" | "en";

  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#F8F6F0", fontFamily: "sans-serif", margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: 520, margin: "40px auto", backgroundColor: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>

          <Section style={{ backgroundColor: "#1B4332", padding: "24px 32px" }}>
            <Text style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C" }}>
              T3 Advisors
            </Text>
          </Section>

          <Section style={{ padding: "32px 32px 40px" }}>
            <Text style={{ fontSize: 16, color: "#2C2C2C", margin: "0 0 20px" }}>
              {t.greeting(name)}
            </Text>
            <Text style={{ fontSize: 16, lineHeight: 1.7, color: "#2C2C2C", margin: "0 0 16px" }}>
              {t.body}
            </Text>

            {/* Sector list */}
            <Section style={{ backgroundColor: "#F8F6F0", borderRadius: 6, padding: "16px 20px", margin: "0 0 24px" }}>
              {verticals.map(v => (
                <Text key={v} style={{ margin: "4px 0", fontSize: 15, color: "#1B4332", fontWeight: 600 }}>
                  · {VERTICAL_LABELS[v]?.[lang] ?? v}
                </Text>
              ))}
            </Section>

            <Text style={{ fontSize: 16, color: "#2C2C2C", margin: "0 0 32px" }}>
              {t.closing}
            </Text>
            <Text style={{ fontSize: 15, color: "#1B4332", fontWeight: 600, margin: 0 }}>
              {t.signature}
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

export const buyerConfirmationSubject = (locale: string) =>
  (copy[locale as keyof typeof copy] ?? copy.es).subject;
