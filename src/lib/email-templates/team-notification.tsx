import {
  Html, Head, Body, Container, Section,
  Heading, Text, Hr, Row, Column,
} from "@react-email/components";

const VERTICAL_LABELS: Record<string, string> = {
  re: "Inmobiliario",
  hos: "Hotelería",
  ag: "Agroindustria",
  ind: "Industrial",
  hc: "Salud",
  min: "Minería",
};

const TX_LABELS: Record<string, string> = {
  full_sale: "Venta del activo",
  equity: "Venta de equity",
  partners: "Buscar socios",
  financing: "Buscar financiamiento",
};

const PRICE_LABELS: Record<string, string> = {
  under_1m: "< $1M",
  "1m_5m": "$1M – $5M",
  "5m_15m": "$5M – $15M",
  "15m_50m": "$15M – $50M",
  over_50m: "> $50M",
};

interface TeamNotificationProps {
  mode: "buyer" | "seller";
  name: string;
  email: string;
  company?: string;
  phone?: string;
  locale: string;
  // buyer
  verticals?: string[];
  // seller
  transactionTypes?: string[];
  assetType?: string;
  location?: string;
  priceRange?: string;
  message?: string;
  sheetsError?: string;
}

function Field({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <Row style={{ marginBottom: 8 }}>
      <Column style={{ width: 160, color: "#666", fontSize: 14 }}>{label}</Column>
      <Column style={{ fontSize: 14, color: "#1a1a1a" }}>{value}</Column>
    </Row>
  );
}

export function TeamNotification({
  mode, name, email, company, phone, locale,
  verticals, transactionTypes, assetType, location, priceRange, message,
  sheetsError,
}: TeamNotificationProps) {
  const isBuyer = mode === "buyer";
  const modeLabel = isBuyer ? "Inversionista" : "Vendedor";
  const accentColor = isBuyer ? "#1B4332" : "#7B3A10";

  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#F8F6F0", fontFamily: "sans-serif", margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: 560, margin: "40px auto", backgroundColor: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>

          {/* Header */}
          <Section style={{ backgroundColor: accentColor, padding: "24px 32px" }}>
            <Text style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C" }}>
              T3 Advisors
            </Text>
            <Heading as="h1" style={{ margin: "8px 0 0", fontSize: 22, fontWeight: 600, color: "#F8F6F0" }}>
              Nuevo lead — {modeLabel}
            </Heading>
          </Section>

          {/* Body */}
          <Section style={{ padding: "28px 32px" }}>
            <Field label="Nombre" value={name} />
            <Field label="Email" value={email} />
            <Field label="Empresa" value={company} />
            <Field label="Teléfono" value={phone} />
            <Field label="Idioma" value={locale === "en" ? "Inglés" : "Español"} />

            <Hr style={{ margin: "20px 0", borderColor: "#E5E0D8" }} />

            {isBuyer ? (
              <Field
                label="Sectores"
                value={(verticals || []).map(v => VERTICAL_LABELS[v] || v).join(", ")}
              />
            ) : (
              <>
                <Field
                  label="Tipo operación"
                  value={(transactionTypes || []).map(t => TX_LABELS[t] || t).join(", ")}
                />
                <Field label="Tipo activo" value={assetType ? (VERTICAL_LABELS[assetType] || assetType) : undefined} />
                <Field label="Ubicación" value={location} />
                <Field label="Rango precio" value={priceRange ? (PRICE_LABELS[priceRange] || priceRange) : undefined} />
                {message && (
                  <>
                    <Hr style={{ margin: "20px 0", borderColor: "#E5E0D8" }} />
                    <Text style={{ fontSize: 13, color: "#666", margin: "0 0 6px" }}>Mensaje</Text>
                    <Text style={{ fontSize: 14, color: "#1a1a1a", margin: 0, lineHeight: 1.6 }}>{message}</Text>
                  </>
                )}
              </>
            )}

            {sheetsError && (
              <>
                <Hr style={{ margin: "20px 0", borderColor: "#E5E0D8" }} />
                <Text style={{ fontSize: 13, color: "#c0392b", margin: 0 }}>
                  ⚠ No se pudo guardar en Google Sheets. Agregar manualmente.<br />
                  Error: {sheetsError}
                </Text>
              </>
            )}
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
