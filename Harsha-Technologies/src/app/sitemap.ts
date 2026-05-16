import type { MetadataRoute } from "next";
import { business } from "@/content/site";
import { getAllAreaSlugs } from "@/content/areas-data";
import { getAllBrandSlugs } from "@/content/brands-data";
import { getAllServiceSlugs } from "@/content/services-data";
import { getAllBlogSlugs } from "@/content/blog-data";
import { getAllAmcSlugs } from "@/content/amc-data";

const now = new Date("2026-04-29");

type SitemapRoute = {
  url: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

function buildRoutes(): SitemapRoute[] {
  const routes: SitemapRoute[] = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" },
    { url: "/printer-repair-service-locations-hyderabad", priority: 0.9, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" },
    { url: "/reviews", priority: 0.8, changeFrequency: "monthly" },
    { url: "/areas", priority: 0.9, changeFrequency: "monthly" },
    { url: "/brands", priority: 0.9, changeFrequency: "monthly" },
    { url: "/business-amc", priority: 0.9, changeFrequency: "monthly" },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { url: "/request-callback", priority: 0.8, changeFrequency: "monthly" },
    { url: "/areas/kukatpally-printer-repair", priority: 0.9, changeFrequency: "monthly" },
    { url: "/brands/hp-printer-repair", priority: 0.9, changeFrequency: "monthly" },
    { url: "/business-amc/office-printer-amc-hyderabad", priority: 0.9, changeFrequency: "monthly" }
  ];

  getAllAreaSlugs().forEach((slug) => {
    routes.push({ url: `/areas/${slug}`, priority: 0.8, changeFrequency: "monthly" });
  });

  getAllBrandSlugs().forEach((slug) => {
    routes.push({ url: `/brands/${slug}`, priority: 0.8, changeFrequency: "monthly" });
  });

  getAllServiceSlugs().forEach((slug) => {
    routes.push({ url: `/services/${slug}`, priority: 0.8, changeFrequency: "monthly" });
  });

  getAllBlogSlugs().forEach((slug) => {
    routes.push({ url: `/blog/${slug}`, priority: 0.7, changeFrequency: "monthly" });
  });

  getAllAmcSlugs().forEach((slug) => {
    routes.push({ url: `/business-amc/${slug}`, priority: 0.8, changeFrequency: "monthly" });
  });

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return buildRoutes().map(({ url, priority, changeFrequency }) => ({
    url: `${business.domain}${url}`,
    lastModified: now,
    changeFrequency,
    priority
  }));
}
