import {
  Html, Head, Body, Container, Section,
  Heading, Text,
} from "@react-email/components";

const copy = {
  es: {
    subject: "Recibimos tu mensaje — T3 Advisors",
    greeting: (name: string) => `Hola ${name},`,
    body: "Hemos recibido tu mensaje. Nuestro equipo lo revisará y se pondrá en contacto contigo en un plazo máximo de 48 horas hábiles.",
    closing: "Gracias por comunicarte con nosotros.",
    signature: "El equipo de T3 Advisors",
  },
  en: {
    subject: "We received your message — T3 Advisors",
    greeting: (name: string) => `Hello ${name},`,
    body: "We have received your message. Our team will review it and get back to you within 48 business hours.",
    closing: "Thank you for reaching out.",
    signature: "The T3 Advisors team",
  },
};

interface SellerConfirmationProps {
  name: string;
  locale: string;
}

export function SellerConfirmation({ name, locale }: SellerConfirmationProps) {
  const t = copy[locale as keyof typeof copy] ?? copy.es;

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
            <Text style={{ fontSize: 16, lineHeight: 1.7, color: "#2C2C2C", margin: "0 0 20px" }}>
              {t.body}
            </Text>
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

export const sellerConfirmationSubject = (locale: string) =>
  (copy[locale as keyof typeof copy] ?? copy.es).subject;
