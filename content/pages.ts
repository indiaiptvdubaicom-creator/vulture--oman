import type { Faq } from "./types";

export type StaticPage = {
  title: string;
  description: string;
  h1: string;
  crumb: string;
  kicker?: string;
  lede?: string;
  paragraphs?: string[];
  items?: string[];
  faqs?: Faq[];
  extraFaqs?: Faq[];
  sections?: { heading: string; paragraphs?: string[]; items?: string[]; faqs?: Faq[] }[];
  template?: { title: string; text: string }[];
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  townsTitle?: string;
  townsIntro?: string;
  countNote?: string;
};

export const pages = {
  about: {
    title: "About Vulture Events Oman",
    description:
      "Vulture Events Oman is an event management and production team centred in Muscat, delivering programmes across the Sultanate.",
    h1: "A production team written for Oman",
    crumb: "About",
    paragraphs: [
      "Vulture Events Oman plans and produces conferences, exhibitions, ceremonies and guest programmes in the Sultanate. Operations are centred in Muscat. Delivery follows the brief — including Salalah, Sohar, the interior and Musandam — with logistics treated as design, not as an apology after the moodboard.",
      "We are not a tourism desk and we are not a relocated brochure from another market. The rooms here have their own engineering rules, the guest mix is often bilingual, and official programmes carry protocol that cannot be improvised at the door.",
      "The working method is simple: one producer owns the timeline, the cue sheet and the teardown. Planning, technical, staffing and hospitality report to that person so the client is not chairing a vendor meeting during registration.",
      "We do not publish invented project counts, satisfaction percentages or client names. When a host authorises a case study, it will appear in the projects archive with the facts that can be stood behind.",
      "Legal entity details, Muscat address, phone and email will be shown here once the Oman business supplies them. Until then, start with a proposal briefing.",
    ],
  },
  contact: {
    title: "Request a Proposal | Contact",
    description:
      "Brief Vulture Events Oman for conferences, exhibitions, ceremonies and guest programmes across the Sultanate.",
    h1: "Discuss your brief",
    crumb: "Contact",
    lede: "Share the date, city, guest count and the outcome you need. A producer will reply using the contact details you provide. We do not display invented phone numbers or copied addresses from another country.",
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Answers about event management, production, language support and nationwide delivery in Oman.",
    h1: "Questions we answer before a recce",
    crumb: "FAQ",
    lede: "Short, operational answers. No invented statistics.",
    extraFaqs: [
      {
        q: "What does event production include?",
        a: "Scenic, lighting, sound, LED, crew, rehearsal and a show-caller. Planning and hospitality can sit beside it, but production is the live machine in the room.",
      },
      {
        q: "How should companies plan events during Khareef?",
        a: "Hold Salalah rooms and flights early, specify moisture-aware kit, and design an indoor twin for every outdoor cue.",
      },
      {
        q: "What is included in exhibition management?",
        a: "Floorplans, exhibitor communication, build windows, aisle and power control, opening readiness and breakdown — for the organiser, the exhibitor, or both if scoped.",
      },
      {
        q: "Do you produce Eid gatherings as well as Ramadan programmes?",
        a: "Yes. Eid is planned as its own calendar: family flow, hotel stock and a celebratory tone. It is not a leftover iftar run of show.",
      },
    ],
  },
  projects: {
    title: "Projects",
    description:
      "Oman event case studies are published only with client approval. The project template is ready for authorised work.",
    h1: "Selected work, when it can be told",
    crumb: "Projects",
    lede: "Project pages will use a fixed structure so authorised Oman programmes can be published without inventing a portfolio. We will not create clients, logos, testimonials or results to fill this archive.",
    paragraphs: [
      "If you are a host willing to publish a programme produced in Oman, mention that in your proposal briefing. Until then, the template below is the public record of how stories will be written.",
    ],
    template: [
      { title: "Challenge", text: "What the host needed the room, the guests or the record to achieve." },
      { title: "Objective", text: "The measurable or ceremonial outcome we were asked to protect." },
      { title: "Creative direction", text: "How the look and guest journey were set without overstating the brief." },
      { title: "Planning", text: "Timeline, suppliers, permissions and bilingual materials." },
      { title: "Production", text: "Stage, lighting, sound, LED and the crew plot." },
      { title: "Guest experience", text: "Arrival, hospitality, seating and how the programme felt to walk." },
      { title: "Execution", text: "Rehearsal, show call and how the day actually ran." },
      { title: "Results", text: "Only facts the host authorises — never invented numbers." },
      { title: "Gallery", text: "Approved stills and clips, captioned for Oman locations." },
      { title: "Services", text: "Which disciplines were in the brief." },
      { title: "Location", text: "The Oman city or site where the programme ran." },
      { title: "Industry", text: "The sector context, when it is relevant to the story." },
    ],
  },
  projectEmpty: {
    title: "Project",
    description: "Individual project URLs go live only when a real, approved Oman case study exists.",
    h1: "Project story",
    crumb: "Project",
    lede: "Individual project URLs go live only when a real, approved Oman case study exists. This template is intentionally empty.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "Privacy policy for Vulture Events Oman website visitors.",
    h1: "Privacy Policy",
    crumb: "Privacy Policy",
    lede: "Template effective 17 September 2026. Independent of any other country’s policy.",
    paragraphs: [
      "This policy describes how Vulture Events Oman may handle information submitted through this website, including proposal briefings. It is a working template until the Oman legal entity, address and data-protection contact are confirmed.",
      "Information you send via the proposal form is used to respond to your briefing. We do not sell mailing lists. Honeypot fields are used to reduce automated spam.",
      "The site may use strictly necessary cookies to operate. Analytics, if added later, will be described here before they run.",
      "Questions about personal data should be sent through the contact form until a dedicated privacy email for the Oman company is published.",
      "This template is intended to be read under the laws of the Sultanate of Oman.",
    ],
  },
  terms: {
    title: "Terms",
    description: "Website terms for Vulture Events Oman.",
    h1: "Website terms",
    crumb: "Terms",
    paragraphs: [
      "This website presents event-management services offered in the Sultanate of Oman. Content is for information. A proposal and written confirmation form the commercial agreement for any programme.",
      "Photographs are used to illustrate production and hospitality. They are not a claim that a pictured venue is exclusive to us.",
      "We do not publish fabricated case studies, testimonials or performance statistics. If a page is empty, it is empty on purpose.",
      "These terms are a template governed by the laws of the Sultanate of Oman.",
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description: "Cookie policy for the Vulture Events Oman website.",
    h1: "Cookie policy",
    crumb: "Cookie Policy",
    paragraphs: [
      "This site uses cookies or similar storage only as needed to operate pages and forms. We have not enabled advertising cookies.",
      "If measurement tools are introduced later, this page will list them before they collect data.",
      "You can control cookies in your browser settings.",
    ],
  },
  servicesHub: {
    title: "Event, Exhibition and Production Services in Oman",
    description:
      "Event management, exhibitions, production, branding, staffing and Omani hospitality services from Vulture Events Oman.",
    h1: "Services for events produced in Oman",
    crumb: "Services",
    lede: "Browse by discipline. Each page is written for a distinct job — planning is not production, design is not construction, and Omani hospitality is not a generic entertainment catalogue.",
    countNote: "dedicated service pages · Muscat-centred operations · nationwide delivery",
  },
  industriesHub: {
    title: "Industries We Serve in Oman",
    description:
      "Event solutions for government, energy, manufacturing, corporate, healthcare, maritime and other sectors operating in Oman.",
    h1: "Events shaped by the sector you operate in",
    crumb: "Industries",
    lede: "A ministry ceremony, an energy site visit and a mall activation do not share a template. These pages explain how the room, the compliance tone and the guest mix change in Oman.",
  },
  locationsHub: {
    title: "Event Management Locations in Oman",
    description:
      "Event production coverage across Muscat, Salalah, Sohar, Nizwa, Sur, Duqm and Khasab, plus operating towns briefed from the capital.",
    h1: "Events delivered across Oman",
    crumb: "Locations",
    lede: "Muscat is the operating centre. Full city pages exist only where the geography, climate and briefs are different enough to deserve their own essay — venues, freight and the kinds of programmes that actually happen there.",
    townsTitle: "Other Oman towns we are briefed to deliver",
    townsIntro:
      "These places have real event demand but not enough unique venue stock to justify thin extra websites. They sit on the Muscat operation unless a brief names them as a destination chapter.",
  },
  blogHub: {
    title: "Oman Event Planning Insights",
    description:
      "Independent articles on conference planning, production, Khareef, National Day, hospitality and logistics for events in Oman.",
    h1: "Notes from producing events in Oman",
    crumb: "Blog",
    lede: "Practical writing for hosts and in-house teams. Not a recycled Gulf events blog with the country name changed.",
  },
  eventManagementOman: {
    title: "Hire an Event Management Company in Oman",
    description:
      "Brief Vulture Events Oman to plan and produce complete programmes across the Sultanate — conferences, ceremonies, exhibitions and guest hospitality, operated from Muscat.",
    h1: "Hire an event management company in Oman",
    crumb: "Hire event management in Oman",
    kicker: "Commercial brief",
    paragraphs: [
      "This is the hiring page — the offer to appoint one producer for a complete programme in the Sultanate. It is not the service encyclopaedia. If you need the full scope of planning disciplines, see the",
      "Hosts brief us when the date is real and the outcome is public: a conference that must start on time, a ceremony that must honour names, an exhibition that must work on the floor, a dinner that must feel considered. Staging, LED and sound are part of that delivery. They are not the only thing we do.",
      "Typical Oman briefs sit in Muscat hotel and convention rooms, then travel when required to Salalah, Sohar, Nizwa or a named industrial site. Arabic and English guest materials are planned together. We do not invent project counts or client lists to win the meeting.",
    ],
    items: [
      "One producer who owns the timeline, suppliers and teardown",
      "Conference, ceremony, exhibition and hospitality sequences as one guest journey",
      "Production capability (stage, lighting, sound, LED) inside the same plan",
      "Muscat-centred operations with nationwide freight when the city is named",
    ],
    faqs: [
      {
        q: "What does an event management company in Oman actually deliver?",
        a: "A complete producer: brief, venue coordination, run of show, technical, staffing, hospitality and teardown. Production sits inside that job — it is not the whole company.",
      },
      {
        q: "How is this different from hiring only an AV crew?",
        a: "An AV crew runs kit. Event management owns the guest journey, the agenda, protocol, suppliers and the clock. You can still hire us for production alone; this page is for hosts who need the whole programme held.",
      },
      {
        q: "Where do you operate?",
        a: "Muscat is the operating centre. Salalah, Sohar, Nizwa, Sur, Duqm, Khasab and other named Oman cities are planned as delivery sites when the brief requires them.",
      },
    ],
    primaryCta: { href: "/contact", label: "Request a Proposal" },
    secondaryCta: { href: "/services", label: "Browse services" },
    sections: [{ heading: "What you are appointing" }, { heading: "Before the first meeting" }],
  },
  eventManagementMuscat: {
    title: "Event Management in Muscat",
    description:
      "Event management in Muscat for conferences, hotel programmes, exhibitions and ceremonies, produced by Vulture Events Oman.",
    h1: "Event management, based in Muscat",
    crumb: "Event management Muscat",
    paragraphs: [
      "This page is the commercial offer to hire a producer in the capital — distinct from the Muscat location guide, which explains geography and venues. Here the job is delivery: one lead, a cue sheet, and a room that works.",
      "Typical briefs: OCEC-scale congresses, hotel leadership days, ministry-adjacent ceremonies, exhibition stands and gala evenings in Qurum, Al Mouj and other districts. Seeb, Muttrah, Bawshar and Al Khoudh sit inside this same operation.",
    ],
    primaryCta: { href: "/contact", label: "Request a Proposal" },
    secondaryCta: { href: "/locations/muscat", label: "Muscat location guide" },
  },
  eventManagementSalalah: {
    title: "Event Management in Salalah",
    description:
      "Event management in Salalah for Khareef-season programmes, hotel gatherings and Dhofar hospitality, produced by Vulture Events Oman.",
    h1: "Hire a producer for Salalah",
    crumb: "Event management Salalah",
    paragraphs: [
      "Salalah delivery is a different commercial job from the Dhofar location essay. You are asking a Muscat-centred team to freight, recce and show-call in a climate and hotel market that peaks in Khareef.",
      "We hold indoor twins for outdoor looks, source Dhofari cultural programming locally when the brief wants it, and will say no to same-week spectaculars that cannot physically arrive.",
    ],
    primaryCta: { href: "/contact", label: "Request a Proposal" },
    secondaryCta: { href: "/locations/salalah", label: "Salalah location guide" },
  },
  eventManagementSohar: {
    title: "Event Management in Sohar",
    description:
      "Event management in Sohar for industrial conferences, port stakeholder days and north Batinah corporate gatherings.",
    h1: "Event management for Sohar briefs",
    crumb: "Event management Sohar",
    paragraphs: [
      "Sohar work is usually shorter, more industrial, and more honest about hotel inventory than a capital gala. This page is the hire-us offer; the location page covers port geography and heat.",
      "We spec travelling technical, bilingual contractor rooms, and freight that actually left Muscat the night before — not a same-morning gamble.",
    ],
    primaryCta: { href: "/contact", label: "Request a Proposal" },
    secondaryCta: { href: "/locations/sohar", label: "Sohar location guide" },
  },
  eventProductionOman: {
    title: "Hire Event Production in Oman",
    description:
      "Appoint Vulture Events Oman for staging, LED, lighting, sound, rehearsal and show-calling across the Sultanate, specified for the actual room.",
    h1: "Hire event production in Oman",
    crumb: "Hire event production in Oman",
    kicker: "Commercial brief",
    paragraphs: [
      "This page is the offer to put a technical crew and a show-caller in the room.",
      "Oman venues range from convention halls to hotel ballrooms with modest hanging points to gardens that look generous until the wind arrives. We spec power, access and sightlines before locking a look. Rehearsal is not optional on programmes with speeches, interpretation or reveals.",
      "If you need the whole guest journey — registration, protocol, hospitality, teardown — start with hiring event management. Production still sits inside that brief.",
    ],
    items: [
      "Stage, scenic and bilingual title positions",
      "Lighting and sound specified for speech first",
      "LED walls and a content desk that actually feeds them",
      "Cue-to-cue rehearsal and a named caller on comms",
    ],
    faqs: [
      {
        q: "What does event production in Oman include?",
        a: "Scenic, lighting, sound, LED, crew, rehearsal and a named show-caller specified for the room you actually have — in Muscat or in a travelling kit for another governorate.",
      },
      {
        q: "Can production sit inside a fuller management brief?",
        a: "Yes. Many Oman programmes need both. If you only need the live machine in the room, this page is the commercial offer. Planning, hospitality and stands can be added on the proposal form.",
      },
      {
        q: "Do you work outside Muscat?",
        a: "Yes. Freight, power and crew housing are planned for the named city. Same-week spectaculars that cannot physically arrive are declined.",
      },
    ],
    primaryCta: { href: "/contact", label: "Request a Proposal" },
    secondaryCta: { href: "/services/audio-visual-oman", label: "Audio visual detail" },
    sections: [{ heading: "What production covers" }, { heading: "Before we recce" }],
  },
} satisfies Record<string, StaticPage>;
