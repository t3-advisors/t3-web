import type { Metadata } from "next";
import { HomepageContent } from "@/components/homepage/HomepageContent";

export const metadata: Metadata = {
  title: "T3 Advisors — Activos comerciales en Venezuela",
  description:
    "Conectamos capital internacional con activos reales en Venezuela. Más de 50 oportunidades en 6 sectores: bienes raíces, hotelería, agroindustria, industrial, salud y minería.",
  openGraph: {
    title: "T3 Advisors — Activos comerciales en Venezuela",
    description:
      "Los activos comerciales en Venezuela se transan a una fracción de lo que cuestan en la región. T3 Advisors conecta inversionistas con estas oportunidades.",
    type: "website",
  },
};

export default function HomePage() {
  return <HomepageContent />;
}
