import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  allowedDevOrigins: ["17c0a41b-8045-4350-a451-0a69e138176f-00-pkvd5ctpue4e.kirk.replit.dev"],

  // El back office (repo t3-admin) se sirve bajo t3-advisors.com/admin por
  // Multi-Zones: esta web publica reenvia todo /admin al deploy de la app,
  // que ya vive con basePath /admin. Sin prefijo de idioma: /admin queda
  // excluido del middleware de next-intl en src/middleware.ts.
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "https://t3-admin-eight.vercel.app/admin",
      },
      {
        source: "/admin/:path*",
        destination: "https://t3-admin-eight.vercel.app/admin/:path*",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
