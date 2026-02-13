"use client";

import { Pricing } from "@/components/ui/pricing-card";

const demoPlans = [
  {
    name: "High-Converting Landing Page",
    features: [
      "Goal-driven strategy and page structure",
      "Conversion-focused copy and layout",
      "Clean, modern UI aligned with your brand",
      "Mobile-optimized and responsive design",
      "Fast-loading, performance-optimized build",
      "Analytics and conversion tracking setup",
    ],
    shortFeatures: [
      "Goal-driven strategy & structure",
      "Conversion-focused copy & layout",
      "Clean, modern UI brand alignment",
      "Mobile-optimized & responsive",
      "Fast-loading, optimized build",
      "Analytics & tracking setup",
    ],
    description: "For launches, campaigns, and offers that need fast, measurable results.",
    buttonText: "Let's Build Yours",
    href: "https://cal.com/santhosh-perumal",
    isPopular: false,
  },
  {
    name: "Websites, Web Apps & E-Commerce",
    features: [
      "Strategy, planning, and workflow alignment",
      "Custom website (up to 5–6 pages), web app, or e-commerce build",
      "Clean UI/UX for users and administrators",
      "Secure authentication, payments, and user flows (as needed)",
      "Mobile-responsive, SEO-ready, and fast-loading",
      "Scalable deployment with launch support",
    ],
    shortFeatures: [
      "Strategy & workflow alignment",
      "Custom site, web app or e-com build",
      "Clean UI/UX for users & admins",
      "Secure auth, payments & user flows",
      "Mobile-responsive, SEO-ready",
      "Scalable deployment support",
    ],
    description: "For businesses that need a strong online presence or a system that actually works.",
    buttonText: "Let's Build Yours",
    href: "https://cal.com/santhosh-perumal",
    isPopular: false,
  },
  {
    name: "SaaS Products (MVP → Scale)",
    features: [
      "MVP scoping and feature prioritization",
      "UX flows focused on retention and usability",
      "Scalable frontend and backend architecture",
      "Authentication, roles, and subscriptions",
      "Analytics, feedback, and iteration setup",
      "Clean, scale-ready codebase",
    ],
    shortFeatures: [
      "MVP scoping & prioritization",
      "Retention-focused UX flows",
      "Scalable frontend & backend",
      "Auth, roles & subscriptions",
      "Analytics & feedback setup",
      "Clean, scale-ready codebase",
    ],
    description: "For founders turning ideas into usable, growth-ready products.",
    buttonText: "Let's Build Yours",
    href: "https://cal.com/santhosh-perumal",
    isPopular: false,
  },
];

function PricingBasic() {
  return (
    <div id="services" className="w-full">
      <Pricing
        plans={demoPlans}
        title="Plans"
        description="Transparent pricing for every stage of growth."
      />
    </div>
  );
}

export { PricingBasic };

