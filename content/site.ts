export const site = {
  name: "Vulture Events Oman",
  shortName: "Vulture Events",
  locale: "en-OM",
  country: "OM",
  market: "Oman",
  city: "Muscat",
  description:
    "Vulture Events Oman plans and produces conferences, exhibitions, ceremonies and guest programmes across the Sultanate, with operations centred in Muscat.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  /** Empty until the Oman business supplies real NAP. Do not invent values. */
  phone: "",
  email: "",
  address: "",
  whatsapp: "",
} as const;

export function hasPhone() {
  return Boolean(site.phone);
}

export function hasEmail() {
  return Boolean(site.email);
}

export function hasAddress() {
  return Boolean(site.address);
}

export function hasWhatsapp() {
  return Boolean(site.whatsapp);
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerExplore = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/locations", label: "Locations" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerServices = [
  { href: "/services/event-management-oman", label: "Event Management" },
  { href: "/services/corporate-events-oman", label: "Corporate Events" },
  { href: "/services/exhibition-stand-design-oman", label: "Exhibition Stand Design" },
  { href: "/services/exhibition-stand-construction-oman", label: "Exhibition Stand Construction" },
  { href: "/services/event-production-oman", label: "Event Production" },
  { href: "/services/event-branding-oman", label: "Event Branding" },
  { href: "/services/audio-visual-oman", label: "Audio Visual" },
  { href: "/services/event-staffing-oman", label: "Event Staffing" },
] as const;

export const footerLocations = [
  { href: "/locations/muscat", label: "Muscat" },
  { href: "/locations/salalah", label: "Salalah" },
  { href: "/locations/sohar", label: "Sohar" },
  { href: "/locations/nizwa", label: "Nizwa" },
  { href: "/locations/sur", label: "Sur" },
  { href: "/locations/duqm", label: "Duqm" },
  { href: "/locations/khasab", label: "Khasab" },
] as const;
