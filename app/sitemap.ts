import { caseStudies } from "@/app/lib/case-studies";
import type { MetadataRoute } from "next";

const SITE_URL = "https://withwebzy.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/case-study`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${SITE_URL}/case-study/${study.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
