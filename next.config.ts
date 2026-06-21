import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Native Next.js deployment on Vercel (no static export).
  // Vercel handles image optimization, dynamic routes, and caching automatically.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
