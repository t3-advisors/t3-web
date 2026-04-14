import type { MetadataRoute } from "next";

const BASE = "https://www.t3-advisors.com";
const locales = ["es", "en"] as const;

const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/portfolio", priority: 0.9, changeFrequency: "weekly" },
  { path: "/why-venezuela", priority: 0.8, changeFrequency: "monthly" },
  { path: "/investors", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sellers", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const url = `${BASE}/${locale}${page.path === "/" ? "" : page.path}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  return entries;
}
