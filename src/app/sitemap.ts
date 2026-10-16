import { MetadataRoute } from "next";
import { NEWS_ARTICLES } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://natwargoyal.com";

  const staticRoutes = [
    "",
    "/about",
    "/biography",
    "/political-journey",
    "/social-work",
    "/awards",
    "/gallery",
    "/news",
    "/updates",
    "/media",
    "/contact",
    "/privacy-policy",
    "/accessibility",
    "/hi",
    "/en",
    "/hi/biography",
    "/en/biography",
    "/hi/about",
    "/en/about",
    "/hi/political-journey",
    "/en/political-journey",
    "/hi/social-work",
    "/en/social-work",
    "/hi/gallery",
    "/en/gallery",
    "/hi/news",
    "/en/news",
    "/hi/contact",
    "/en/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-16"),
    changeFrequency: route.includes("/news") || route.includes("/updates") ? "daily" : "monthly",
    priority: route === "" || route === "/hi" || route === "/en" ? 1.0 : 0.8,
  }));

  const newsEntries: MetadataRoute.Sitemap = NEWS_ARTICLES.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date("2026-10-16"),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...newsEntries];
}
