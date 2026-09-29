import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services, serviceHubs } from "@/content/services";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { articles } from "@/content/blog";
import { localizedPath } from "@/i18n/routing";
import { absUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "/",
    "/about",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    "/services",
    "/industries",
    "/locations",
    "/blog",
    "/projects",
    "/event-management-oman",
    "/event-management-muscat",
    "/event-management-salalah",
    "/event-management-sohar",
    "/event-production-oman",
    ...serviceHubs.map((item) => `/services/${item.slug}`),
    ...services.map((item) => `/services/${item.slug}`),
    ...industries.map((item) => `/industries/${item.slug}`),
    ...locations.map((item) => `/locations/${item.slug}`),
    ...articles.map((item) => `/blog/${item.slug}`),
  ];

  return paths.flatMap((path) => {
    const en = absUrl(localizedPath("en", path));
    const ar = absUrl(localizedPath("ar", path));
    const languages = { "en-OM": en, "ar-OM": ar, "x-default": en };
    return [
      {
        url: en,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: path === "/" ? 1 : 0.7,
        alternates: { languages },
      },
      {
        url: ar,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: path === "/" ? 0.95 : 0.7,
        alternates: { languages },
      },
    ];
  });
}
