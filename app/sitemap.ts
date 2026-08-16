import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string;
    priority: number;
    freq: "weekly" | "monthly" | "yearly";
  }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/technology", priority: 0.9, freq: "monthly" },
    { path: "/products", priority: 0.9, freq: "monthly" },
    { path: "/research", priority: 0.8, freq: "monthly" },
    { path: "/company", priority: 0.8, freq: "monthly" },
    { path: "/journal", priority: 0.6, freq: "weekly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
    { path: "/privacy", priority: 0.2, freq: "yearly" },
    { path: "/terms", priority: 0.2, freq: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
