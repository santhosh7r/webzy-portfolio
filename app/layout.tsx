import { Footercomp } from "@/components/sections/footer-section";
import NavBar from "@/components/ui/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-RV2WD39ZNH";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const pinyonScript = localFont({
  src: "./fonts/PinyonScript-Regular.ttf",
  variable: "--font-pinyon-script",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://withwebzy.com";
const SITE_NAME = "Webzy";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Webzy | Conversion-Focused Web Design & Development",
    template: "%s | Webzy",
  },
  description:
    "Webzy designs and builds fast, beautiful, conversion-focused websites for startups, personal brands, and growing businesses worldwide — launched in as little as 7 days.",
  keywords: [
    "Webzy",
    "web design agency",
    "website development",
    "conversion-focused websites",
    "Next.js development",
    "landing page design",
    "ecommerce website development",
    "custom CRM development",
    "business website design",
    "startup website design",
    "SEO friendly websites",
    "responsive web design",
    "portfolio website design",
    "freelance web developer",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: "Santhosh Perumal", url: SITE_URL }],
  creator: "Santhosh Perumal",
  publisher: SITE_NAME,
  category: "Web Design & Development",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Webzy | Conversion-Focused Web Design & Development",
    description:
      "We craft SEO-ready, mobile-friendly, high-converting websites for startups and brands worldwide. Let's build your digital identity.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/webzy.png",
        width: 1904,
        height: 987,
        alt: "Webzy — Conversion-Focused Web Design & Development",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webzy | Conversion-Focused Web Design & Development",
    description:
      "Professional, high-converting websites built with speed, design, and growth in mind — trusted by brands worldwide.",
    images: ["/webzy.png"],
  },
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },

  // ✅ Google Search Console Verification
  verification: {
    google: "TSyix6K7GzXw9h76jf6eKx0P5LbcFzM_il3_1Cdc_EM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: ["Webzy Agency", "Webzy Web Design", "withwebzy"],
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/webzy.png`,
        slogan: "Conversion-Focused Web Design & Development",
        description:
          "Webzy designs and builds fast, beautiful, conversion-focused websites for startups, personal brands, and growing businesses worldwide.",
        email: "contact@withwebzy.com",
        founder: {
          "@type": "Person",
          name: "Santhosh Perumal",
          url: "https://santhoshperumal.com",
        },
        sameAs: [
          "https://www.instagram.com/withwebzy",
          "https://www.youtube.com/@santhosh7r",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: "Webzy Agency",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/webzy.png`,
        description:
          "Conversion-focused web design and development — landing pages, ecommerce, business websites, and custom CRM software.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
        serviceType: [
          "Web Design",
          "Web Development",
          "Ecommerce Development",
          "Landing Page Design",
          "Custom CRM Development",
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${pinyonScript.variable} antialiased bg-black`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <NavBar />
        {children}
        <Footercomp />
      </body>
    </html>
  );
}
