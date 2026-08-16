import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Original agency site
      { source: "/case-study", destination: "/products", permanent: true },
      { source: "/case-study/:slug", destination: "/products", permanent: true },
      { source: "/services", destination: "/technology", permanent: true },
      { source: "/pricing", destination: "/contact", permanent: true },
      { source: "/business-software", destination: "/technology", permanent: true },
      // Previous revamp
      { source: "/what-we-do", destination: "/technology", permanent: true },
      { source: "/approach", destination: "/company", permanent: true },
      // The portfolio was retired, so every old case-study URL lands on
      // Products rather than a per-project page that no longer exists.
      { source: "/work", destination: "/products", permanent: true },
      { source: "/work/:slug", destination: "/products", permanent: true },
      // Careers was retired — Webzy is not hiring publicly and the page
      // implied otherwise. Anyone landing there wants to reach us.
      { source: "/careers", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
