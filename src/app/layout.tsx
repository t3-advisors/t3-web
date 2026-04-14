import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "T3 Advisors",
  description:
    "Investment advisory and commercial real estate intermediation in Venezuela.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
