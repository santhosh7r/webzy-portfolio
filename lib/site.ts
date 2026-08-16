export const site = {
  name: "Webzy",
  legalName: "Webzy Inc.",
  url: "https://webzyinc.com",
  tagline: "Building new technology through innovation, engineering and scientific thinking.",
  /** The one sentence the whole site is built to support. */
  thesis:
    "Webzy develops technology across software, intelligence and engineering — turning ambitious ideas into working systems.",
  description:
    "Webzy is a technology company. We develop software, intelligent systems and engineering research — building the technology that makes new things possible.",
  email: "contact@webzyinc.com",
  /**
   * Display form and dial form of the same number. The dial form carries the
   * country code so the link works from outside India; change both together.
   */
  phone: "+91 98439 65684",
  phoneHref: "tel:+919843965684",

  /** Cal.com. One booking link, used everywhere a call is offered. */
  bookingUrl: "https://cal.com/santhosh-perumal/15min",
  calLink: "santhosh-perumal/15min",
  calNamespace: "15min",

  gaMeasurementId: "G-RV2WD39ZNH",
  googleSiteVerification: "TSyix6K7GzXw9h76jf6eKx0P5LbcFzM_il3_1Cdc_EM",
} as const;

export const primaryNav = [
  { href: "/technology", label: "Technology" },
  { href: "/products", label: "Products" },
  { href: "/research", label: "Research" },
  { href: "/company", label: "Company" },
] as const;

export const companyNav = [
  { href: "/company", label: "Company" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

export const buildNav = [
  { href: "/technology", label: "Technology" },
  { href: "/products", label: "Products" },
  { href: "/research", label: "Research" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

/**
 * How to reach a person. Social accounts are deliberately absent — none are
 * listed until there is one worth pointing at.
 */
export const contactNav = [
  { href: `mailto:${site.email}`, label: site.email },
  { href: site.phoneHref, label: site.phone },
] as const;
