import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  allowedDevOrigins: ["17c0a41b-8045-4350-a451-0a69e138176f-00-pkvd5ctpue4e.kirk.replit.dev"],
};

export default withNextIntl(nextConfig);
