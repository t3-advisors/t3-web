import {
  Html, Head, Body, Container, Section,
  Heading, Text, Hr,
} from "@react-email/components";

const VERTICAL_LABELS: Record<string, { es: string; en: string }> = {
  re:  { es: "Inmobiliario",  en: "Real Estate"    },
  hos: { es: "Hotelería",     en: "Hospitality"    },
  ag:  { es: "Agroindustria", en: "Agribusiness"   },
  ind: { es: "Industrial",    en: "Industrial"     },
  hc:  { es: "Salud",         en: "Healthcare"     },
  min: { es: "Minería",       en: "Mining"         },
};

const LANG_LABELS: Record<"es" | "en", { es: string; en: string }> = {
  es: { es: "español", en: "Spanish" },
  en: { es: "inglés",  en: "English" },
};

function joinLanguages(langs: ("es" | "en")[], locale: "es" | "en"): string {
  const labels = langs.map((l) => LANG_LABELS[l][locale]);
  if (labels.length === 0) return "";
  if (labels.length === 1) return labels[0];
  const last = labels[labels.length - 1];
  let sep: string;
  if (locale === "es") {
    // Regla fonética del español: "y" pasa a "e" cuando la siguiente
    // palabra empieza con sonido "i" (i- o hi-, pero no "hie-").
    const next = last.trim().toLowerCase();
    const needsE =
      (next.startsWith("i") || next.startsWith("hi")) && !next.startsWith("hie");
    sep = needsE ? " e " : " y ";
  } else {
    sep = " and ";
  }
  return labels.slice(0, -1).join(", ") + sep + last;
}

const copy = {
  es: {
    subject: "Portafolio recibido — T3 Advisors",
    greeting: (name: string) => `Hola ${name},`,
    body: "Gracias por su interés en las oportunidades de T3 Advisors. Adjunto a este correo encontrará nuestro portafolio actual.",
    attachmentHeading: "Portafolio adjunto",
    attachmentBody: (langs: string) => `Encontrará el documento con nuestras oportunidades activas en ${langs}.`,
    sectorsLabel: "Sectores de su interés",
    nextStepsHeading: "Próximos pasos",
    nextStepsBody: "Un miembro del equipo revisará su perfil y le contactará en las próximas 24 a 48 horas para discutir las oportunidades que mejor se ajusten a su interés.",
    moreInfoHeading: "¿Desea el detalle completo de alguna oportunidad?",
    moreInfoBody: "Si desea información completa sobre alguna oportunidad específica del portafolio, puede solicitarla respondiendo directamente a este correo, o contactándonos por WhatsApp o llamada al número de abajo. Con mucho gusto firmamos un acuerdo de confidencialidad (NDA) para compartirle el detalle completo.",
    contactHeading: "Contacto directo",
    phoneLabel: "WhatsApp / llamada",
    closing: "Un saludo,",
    signature: "El equipo de T3 Advisors",
  },
  en: {
    subject: "Portfolio received — T3 Advisors",
    greeting: (name: string) => `Hello ${name},`,
    body: "Thank you for your interest in T3 Advisors opportunities. Attached to this email you will find our current portfolio.",
    attachmentHeading: "Portfolio attached",
    attachmentBody: (langs: string) => `You will find the document with our active opportunities in ${langs}.`,
    sectorsLabel: "Your sectors of interest",
    nextStepsHeading: "Next steps",
    nextStepsBody: "A member of our team will review your profile and reach out within 24 to 48 hours to discuss the opportunities that best match your interests.",
    moreInfoHeading: "Would you like full details on a specific opportunity?",
    moreInfoBody: "If you would like complete information on any specific opportunity in the portfolio, you can request it by replying directly to this email, or by contacting us via WhatsApp or call at the number below. We are happy to sign a non-disclosure agreement (NDA) so we can share the full details with you.",
    contactHeading: "Direct contact",
    phoneLabel: "WhatsApp / call",
    closing: "Best,",
    signature: "The T3 Advisors team",
  },
};

// Brand palette
const FOREST = "#1B4332";
const GOLD   = "#C9A84C";
const WHITE  = "#F8F6F0";
const CHAR   = "#2C2C2C";
const MUTED  = "#6B6B6B";
const LINE   = "#E5E0D8";

interface BuyerConfirmationProps {
  name: string;
  locale: string;
  verticals: string[];
  pdfLanguages: ("es" | "en")[];
}

export function BuyerConfirmation({ name, locale, verticals, pdfLanguages }: BuyerConfirmationProps) {
  const lang = (locale === "en" ? "en" : "es") as "es" | "en";
  const t = copy[lang];
  const langsText = joinLanguages(pdfLanguages, lang);

  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: WHITE, fontFamily: "sans-serif", margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: 560, margin: "40px auto", backgroundColor: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>

          {/* ── Header ── */}
          <Section style={{ backgroundColor: FOREST, padding: "24px 32px" }}>
            <Text style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD }}>
              T3 Advisors
            </Text>
          </Section>

          {/* ── Body ── */}
          <Section style={{ padding: "32px 32px 8px" }}>
            <Text style={{ fontSize: 16, color: CHAR, margin: "0 0 20px" }}>
              {t.greeting(name)}
            </Text>
            <Text style={{ fontSize: 16, lineHeight: 1.7, color: CHAR, margin: "0 0 24px" }}>
              {t.body}
            </Text>

            {/* Attachment callout — gold border + warm-white background */}
            <Section
              style={{
                border: `1px solid ${GOLD}`,
                borderRadius: 6,
                backgroundColor: WHITE,
                padding: "18px 20px",
                margin: "0 0 28px",
              }}
            >
              <Text
                style={{
                  margin: 0,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: GOLD,
                }}
              >
                {t.attachmentHeading}
              </Text>
              <Text style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.6, color: CHAR }}>
                {t.attachmentBody(langsText)}
              </Text>
            </Section>

            {/* Sectors of interest */}
            {verticals.length > 0 && (
              <>
                <Text style={{ fontSize: 13, color: MUTED, margin: "0 0 10px", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
                  {t.sectorsLabel}
                </Text>
                <Section style={{ margin: "0 0 24px" }}>
                  {verticals.map((v) => (
                    <Text key={v} style={{ margin: "4px 0", fontSize: 15, color: FOREST, fontWeight: 600 }}>
                      · {VERTICAL_LABELS[v]?.[lang] ?? v}
                    </Text>
                  ))}
                </Section>
              </>
            )}

            <Hr style={{ margin: "8px 0 24px", borderColor: LINE }} />

            {/* Next steps */}
            <Heading as="h2" style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 600, color: FOREST }}>
              {t.nextStepsHeading}
            </Heading>
            <Text style={{ fontSize: 15, lineHeight: 1.7, color: CHAR, margin: "0 0 28px" }}>
              {t.nextStepsBody}
            </Text>

            <Hr style={{ margin: "0 0 24px", borderColor: LINE }} />

            {/* More info / NDA */}
            <Heading as="h2" style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 600, color: FOREST }}>
              {t.moreInfoHeading}
            </Heading>
            <Text style={{ fontSize: 15, lineHeight: 1.7, color: CHAR, margin: "0 0 28px" }}>
              {t.moreInfoBody}
            </Text>

            <Hr style={{ margin: "0 0 24px", borderColor: LINE }} />

            {/* Direct contact */}
            <Heading as="h2" style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 600, color: FOREST }}>
              {t.contactHeading}
            </Heading>
            <Text style={{ margin: "0 0 2px", fontSize: 15, color: CHAR, fontWeight: 600 }}>
              Alejandro Tovar Alegrett
            </Text>
            <Text style={{ margin: "0 0 2px", fontSize: 15, color: CHAR }}>
              alejandro.tovar@t3-advisors.com
            </Text>
            <Text style={{ margin: "0 0 28px", fontSize: 15, color: CHAR }}>
              +58 424 143 4135 · {t.phoneLabel}
            </Text>

            <Text style={{ fontSize: 15, color: CHAR, margin: "0 0 6px" }}>
              {t.closing}
            </Text>
            <Text style={{ fontSize: 15, color: FOREST, fontWeight: 600, margin: "0 0 32px" }}>
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
