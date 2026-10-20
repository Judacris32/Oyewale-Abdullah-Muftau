export const site = {
  name: "Oyewale Abdullah Muftau",
  shortName: "Oyewale Muftau",
  firstName: "Oyewale",
  role: "Data Analyst",
  location: "Manchester, United Kingdom",
  city: "Manchester, UK",
  email: "oyewale25@gmail.com",
  linkedin: "https://www.linkedin.com/in/oyewale-muftau",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://oyewalemuftau.com").replace(/\/$/, ""),
  tagline: "Data that holds up, from the field to the boardroom.",
  description:
    "Oyewale Abdullah Muftau is a Manchester-based data analyst and data scientist with a foundation in electrical and power systems engineering, specialising in data analysis, machine learning and predictive modelling. Winner of two national analytics awards.",
  /** Edit this one line to change availability copy across the site. */
  availability: "Open to data analyst roles, consulting projects and team training.",
  replyTime: "I read every message myself and reply within two working days.",
} as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/recognition", label: "Recognition" },
  { href: "/press", label: "Press" },
] as const;
