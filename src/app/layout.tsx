import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "T3 Advisors",
  description:
    "Asesoría de inversión e intermediación de bienes raíces comerciales en Venezuela.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
