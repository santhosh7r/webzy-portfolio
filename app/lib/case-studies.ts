export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  year: number;
  preview: string;
  metadata: {
    client: string;
    services: string;
    visitLink?: string;
  };
  overview: string[];
  fullPageScreenshot: string;
}

const slugify = (text: string) =>
  text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

type CaseStudyData = Omit<CaseStudy, "slug">;

const caseStudiesData: CaseStudyData[] = [
  {
    title: "Aura Digital services Landing page",
    description:
      "Built a conversion-focused landing page for Aura Digital services",
    year: 2025,
    preview: "/aura.png",
    metadata: {
      client: "Aura Digital Services",
      services: "Web Design, Development",
      visitLink: "https://auradigitalservices.in",
    },
    overview: [
      "Aura Digital, a new player in the digital marketing space, needed a powerful landing page to launch their brand and generate leads. The goal was to create a visually stunning and highly persuasive online presence that would captivate visitors and drive conversions.",
    ],
    fullPageScreenshot: "/aurafullpage.png",
  },
  {
    title: "Ecoplast Interiors Website Redesign",
    description:
      "Built a straegy to redesign the website for Ecoplast Interiors",
    year: 2025,
    preview: "/eco.png",
    metadata: {
      client: "Ecoplast Interiors",
      services: "Strategy, Web Redesign",
      visitLink: "https://ecoplastinteriors.com",
    },
    overview: [
      "Ecoplast Interiors, an established name in sustainable interior design, approached us to redesign their outdated website. They wanted a fresh, modern platform that reflected their brand's ethos and showcased their impressive portfolio.",
    ],
    fullPageScreenshot: "/ecoplastfullpage.png",
  },
  {
    title: "Trendy Threads Ecommerce Website",
    description:
      "A conversion-focused ecommerce website designed to drive sales.",
    year: 2025,
    preview: "/arts.png",
    metadata: {
      client: "Trendy Threads",
      services: "Web Design, Development",
      visitLink: "https://trendythreads.art/",
    },
    overview: [
      "We built a conversion-focused ecommerce website with a strong emphasis on sales. The entire experience was designed around the Classes page, which is the main revenue driver for the client. Every layout decision, CTA, and user flow was optimized to reduce friction and push users toward taking action.",
    ],
    fullPageScreenshot: "/trendythreadsfullpage.png",
  },
  {
    title: "Custom CRM Software Development",
    description:
      "A custom-built CRM system developed to support internal operations and business growth.",
    year: 2026,
    preview: "/crmsoftware.png",
    metadata: {
      client: "Confidential (Fintech Company)",
      services: "CRM Software Development",
      visitLink: "#",
    },
    overview: [
      "We designed and developed a custom CRM solution for a fintech company. Due to confidentiality, the company name and live link cannot be shared. The system was built to streamline internal workflows, improve data visibility, and support scalable business operations.",
    ],
    fullPageScreenshot: "/crmsoftware.png",
  },
];

export const caseStudies: CaseStudy[] = caseStudiesData.map((study) => ({
  ...study,
  slug: slugify(study.title),
}));

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
