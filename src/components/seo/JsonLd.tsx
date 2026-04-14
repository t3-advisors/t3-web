type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const BASE = "https://www.t3-advisors.com";

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "T3 Advisors",
        url: BASE,
        logo: `${BASE}/logo/t3-logo.png`,
        description:
          "Firma de asesoría especializada en inversión y bienes raíces comerciales en Venezuela. Conectamos capital internacional con activos reales.",
        areaServed: {
          "@type": "Country",
          name: "Venezuela",
        },
        knowsAbout: [
          "Commercial Real Estate Investment",
          "Venezuela Investment Advisory",
          "Asset Intermediation",
          "Capital Raise",
          "Inversión en Venezuela",
          "Bienes raíces comerciales",
          "Venta de activos",
        ],
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "T3 Advisors",
        url: BASE,
        inLanguage: ["es", "en"],
        description:
          "Investment advisory and commercial real estate intermediation in Venezuela.",
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  locale,
  items,
}: {
  locale: string;
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE}/${locale}`,
          },
          ...items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: item.name,
            item: `${BASE}/${locale}${item.path}`,
          })),
        ],
      }}
    />
  );
}
