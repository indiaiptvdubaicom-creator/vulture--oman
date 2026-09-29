import type { IndustryDoc } from "./types";

export const industries: IndustryDoc[] = [
  {
    slug: "government-public-sector",
    nav: "Government",
    title: "Government Event Management in Oman",
    h1: "Official programmes with protocol in the room",
    description:
      "Event management for government and public-sector gatherings in Oman, including bilingual materials, arrival order and discreet production.",
    lede: "Public programmes in Oman are judged on order, language and dignity as much as on staging. We plan the ceremony as a produced sequence, not a decorated hall.",
    body: [
      "Ministerial openings, commemorations, National Day-adjacent programmes and sector forums each carry a different guest mix. The production plan starts with who enters when, which languages appear on titles, and how the room photographs for the official record.",
      "We coordinate with the host office on name order, seating, and the line between public imagery and restricted areas. Crew are briefed to be present and quiet. Technical looks are designed to support speeches first; spectacle is added only when the brief asks for it.",
      "Muscat is the usual centre for official work. When a programme moves to a governorate, freight, local permissions and overnight crew are written into the same document so the capital-quality cue sheet still holds.",
    ],
    formats: ["Official openings", "Forums and round tables", "Commemorative ceremonies", "National Day-related programmes"],
    considerations: [
      "Arabic-forward titles with accurate English support",
      "Arrival choreography and holding rooms",
      "Media positions that do not interrupt protocol",
      "Security liaison without turning the event into a fortress",
    ],
    faqs: [
      { q: "How should companies plan events during official periods in Oman?", a: "Lock the host’s protocol pack early: names, languages, arrival, and what may be filmed. Production then follows that pack rather than decorating around it." },
      { q: "Can you work in Arabic and English for government events?", a: "Yes. Scripts, slides, wayfinding and hosting can be planned bilingually. We do not rely on last-minute machine translation for guest-facing lines." },
    ],
    relatedServices: [
      { href: "/services/government-events-oman", label: "Government events" },
      { href: "/services/omani-majlis-experiences", label: "Majlis experiences" },
      { href: "/services/event-production-oman", label: "Event production" },
    ],
    relatedLocations: [
      { href: "/locations/muscat", label: "Muscat" },
      { href: "/locations/nizwa", label: "Nizwa" },
    ],
  },
  {
    slug: "corporate",
    nav: "Corporate",
    title: "Corporate Event Management in Oman",
    h1: "Internal and client programmes that respect the working day",
    description:
      "Corporate events in Oman covering town halls, leadership offsites, partner days and internal conferences, produced from Muscat.",
    lede: "Corporate gatherings in Oman fail when they look generic. They work when the agenda, the room and the guest mix are designed together.",
    body: [
      "Most corporate briefs in Muscat begin with a date hold in a hotel or headquarters space, a mixed Omani and expatriate audience, and a leadership team that needs the room to feel composed. We map registration, sessions, hospitality and the evening without forcing every hour onto a stage.",
      "Content support — slides, bilingual titles, recording — sits with production so IT is not improvising at doors. If the programme includes a plant visit, a majlis dinner or a roadshow stop, those legs are scheduled as operations, not as afterthoughts.",
    ],
    formats: ["Town halls", "Leadership offsites", "Partner days", "Internal conferences"],
    considerations: ["Headquarters versus hotel acoustics", "Ramadan timing when relevant", "Mixed-language decks", "Confidential breakouts"],
    faqs: [
      { q: "How early should I plan a corporate event in Oman?", a: "Six to nine months for large hotel or OCEC-scale rooms in peak months. Four to eight weeks can work for smaller briefings if the venue is already held." },
    ],
    relatedServices: [
      { href: "/services/corporate-events-oman", label: "Corporate events" },
      { href: "/services/conference-management-oman", label: "Conference management" },
    ],
    relatedLocations: [
      { href: "/locations/muscat", label: "Muscat" },
      { href: "/locations/sohar", label: "Sohar" },
    ],
  },
  {
    slug: "banking-finance",
    nav: "Banking & Finance",
    title: "Banking and Finance Events in Oman",
    h1: "Measured rooms for financial audiences",
    description:
      "Event production for banks, insurers and financial institutions in Oman, with an emphasis on discretion, timing and bilingual clarity.",
    lede: "Financial audiences notice overstatement. We keep staging precise, hospitality calm, and materials accurate in both languages.",
    body: [
      "AGMs, analyst briefings, staff conventions and client dinners in Muscat need a different temperature from a consumer launch. Lighting stays flattering without becoming theatrical. Sound is specified for speech. Branding is present and quiet.",
      "Data rooms, registration lists and photography rules are agreed with the host’s communications team. If interpretation is required, feeds are tested before doors — not during the chairman’s remarks.",
    ],
    formats: ["AGMs", "Client dinners", "Staff conventions", "Product briefings"],
    considerations: ["Confidential guest lists", "Speech-first audio", "Controlled photography", "Bilingual statutory slides"],
    faqs: [
      { q: "Do you handle discreet financial hospitality in Muscat?", a: "Yes. Smaller dining rooms, arrival privacy and photography limits are planned as production notes, not as verbal promises on the day." },
    ],
    relatedServices: [
      { href: "/services/gala-dinners-oman", label: "Gala dinners" },
      { href: "/services/corporate-events-oman", label: "Corporate events" },
    ],
    relatedLocations: [{ href: "/locations/muscat", label: "Muscat" }],
  },
  {
    slug: "oil-gas-energy",
    nav: "Oil, Gas & Energy",
    title: "Oil, Gas and Energy Events in Oman",
    h1: "Site-aware programmes for energy audiences",
    description:
      "Conferences, contractor days and ceremonial visits for Oman’s energy sector, planned around HSE, remote sites and mixed stakeholder rooms.",
    lede: "Energy events in Oman often split between a Muscat hotel room and a site that has its own rules. We plan both legs as one programme.",
    body: [
      "Safety days, contractor forums, investor visits and inauguration ceremonies each carry HSE and access constraints that a generic event template ignores. We ask for site rules before we draw a stage. Crew induction, PPE, photography limits and transport from Muscat are scheduled like technical cues.",
      "When the gathering stays in the capital, the room still needs the tone of the sector: clear information, reliable recording, and hospitality that does not slow a dense agenda. We do not name clients we have not been authorised to publish.",
    ],
    formats: ["Safety and contractor days", "Technical conferences", "Site visits with a ceremonial close", "Stakeholder dinners"],
    considerations: ["HSE induction for crew", "Remote freight", "Interpretation for mixed contractor rooms", "Outdoor heat and shade"],
    faqs: [
      { q: "Can you produce events near industrial sites outside Muscat?", a: "Yes. Duqm, Sohar and other industrial locations are treated as operating sites with earlier freight, crew housing and site-access windows." },
    ],
    relatedServices: [
      { href: "/services/conference-management-oman", label: "Conference management" },
      { href: "/services/venue-logistics-oman", label: "Venue logistics" },
    ],
    relatedLocations: [
      { href: "/locations/muscat", label: "Muscat" },
      { href: "/locations/duqm", label: "Duqm" },
      { href: "/locations/sohar", label: "Sohar" },
    ],
  },
  {
    slug: "construction-real-estate",
    nav: "Construction & Real Estate",
    title: "Construction and Real Estate Events in Oman",
    h1: "Reveals that survive dust, heat and a mixed guest list",
    description:
      "Groundbreakings, sales galleries and project launches in Oman, produced with a split between site reality and hospitality finish.",
    lede: "A project launch in Muscat often has two rooms: the site and the dinner. We produce the handoff so guests never feel the join.",
    body: [
      "Hard-hat visits, topping-out moments and gallery openings need weather plans, vehicle access and a guest journey that still feels considered in evening clothes. Branding on a construction edge has to be engineered, not taped.",
      "Sales events lean on model displays, lighting and a quiet registration line. We keep the reveal honest to the project rather than drowning it in generic spectacle.",
    ],
    formats: ["Groundbreakings", "Sales gallery evenings", "Topping out", "Investor walkthroughs"],
    considerations: ["Heat and shade", "Access roads", "Model lighting", "Bilingual project names"],
    faqs: [
      { q: "Can you run a site ceremony and a hotel dinner on the same day?", a: "Yes, if transport, dress change and timing are designed as one run of show. We will say so if the distance makes that unwise." },
    ],
    relatedServices: [
      { href: "/services/product-launches-oman", label: "Product launches" },
      { href: "/services/event-branding-oman", label: "Event branding" },
    ],
    relatedLocations: [
      { href: "/locations/muscat", label: "Muscat" },
      { href: "/locations/duqm", label: "Duqm" },
    ],
  },
  {
    slug: "hospitality-tourism",
    nav: "Hospitality & Tourism",
    title: "Hospitality and Tourism Events in Oman",
    h1: "Guest programmes that still have a show caller",
    description:
      "Hotel launches, famils, tourism forums and Khareef-season programmes in Oman, produced as events rather than itineraries.",
    lede: "Tourism work in Oman is not a brochure. It is a timed guest journey with rooms, transfers and a programme that holds in heat, humidity or protocol.",
    body: [
      "Hotel openings, destination famils and tourism conferences need the same discipline as a corporate congress — plus weather, inventory and cultural programming that belong to the governorate. Salalah during Khareef is a different operating picture from a Muscat ballroom in winter.",
      "We keep entertainment and heritage elements inside the run of show so they welcome guests instead of stalling dinner.",
    ],
    formats: ["Hotel launches", "Destination famils", "Tourism forums", "Seasonal programmes in Dhofar"],
    considerations: ["Khareef humidity and inventory", "Transfer times", "Cultural performance permissions", "Outdoor fallback"],
    faqs: [
      { q: "How should companies plan events during Khareef?", a: "Hold rooms early, assume moisture on outdoor looks, and build an indoor version of every garden cue. Crew and freight from Muscat need more calendar than a capital-city dinner." },
    ],
    relatedServices: [
      { href: "/services/destination-events-oman", label: "Destination events" },
      { href: "/services/dhofar-cultural-programming", label: "Dhofar cultural programming" },
    ],
    relatedLocations: [
      { href: "/locations/muscat", label: "Muscat" },
      { href: "/locations/salalah", label: "Salalah" },
      { href: "/locations/khasab", label: "Khasab" },
    ],
  },
  {
    slug: "healthcare",
    nav: "Healthcare",
    title: "Healthcare Conference Management in Oman",
    h1: "Scientific rooms with exhibition discipline",
    description:
      "Medical conferences, workshops and healthcare exhibitions in Oman, with CME-style flow, poster areas and bilingual support.",
    lede: "Healthcare programmes live or die on session flow. We treat faculty, posters, exhibition and catering as one circulation plan.",
    body: [
      "Muscat medical gatherings often combine plenary, breakouts, a modest exhibition and industry meetings. We plan wayfinding so delegates are not late to workshops, and we spec audio for speech rather than entertainment.",
      "Sponsor presence is designed so it does not crowd clinical dignity. Recording and streaming, when requested, are tested with the same seriousness as the main PA.",
    ],
    formats: ["Scientific congresses", "Workshops", "Satellite symposia", "Healthcare exhibitions"],
    considerations: ["Faculty hospitality", "Poster lighting", "Quiet rooms", "Exhibition aisle widths"],
    faqs: [
      { q: "What does conference management include for medical events?", a: "Agenda logistics, faculty care, registration, room turns, exhibition build, technical plots and a show-caller who protects session start times." },
    ],
    relatedServices: [
      { href: "/services/conference-management-oman", label: "Conference management" },
      { href: "/services/exhibition-management-oman", label: "Exhibition management" },
    ],
    relatedLocations: [{ href: "/locations/muscat", label: "Muscat" }],
  },
  {
    slug: "education",
    nav: "Education",
    title: "Education Events in Oman",
    h1: "Ceremonies and conferences for campuses",
    description:
      "Graduations, academic conferences and school showcases in Oman, produced with family flow and ceremonial pacing.",
    lede: "Education events mix protocol with family logistics. Seating, names and photography have to be right, or the day feels careless.",
    body: [
      "Convocations and prize days in Muscat need name pronunciation checks, processional timing and overflow plans. Academic conferences need the same session discipline as any congress, often on campus rooms that were not designed as theatres.",
      "We spec lighting that flatters formal dress without washing out faces for the official photographer.",
    ],
    formats: ["Graduations", "Academic conferences", "Open days", "Awards evenings"],
    considerations: ["Name lists", "Family seating", "Campus power", "Bilingual programmes"],
    faqs: [
      { q: "Can you produce a graduation in a hotel ballroom and a campus hall?", a: "Yes. Each room gets its own plot for processional width, screen size and overflow. We will not pretend the two spaces behave the same." },
    ],
    relatedServices: [
      { href: "/services/award-ceremonies-oman", label: "Award ceremonies" },
      { href: "/services/event-production-oman", label: "Event production" },
    ],
    relatedLocations: [
      { href: "/locations/muscat", label: "Muscat" },
      { href: "/locations/nizwa", label: "Nizwa" },
    ],
  },
  {
    slug: "technology-telecom",
    nav: "Technology & Telecom",
    title: "Technology and Telecom Events in Oman",
    h1: "Demo-reliable launches and partner summits",
    description:
      "Product drops, partner summits and telecom briefings in Oman, with content ops and demo power treated as production, not IT leftovers.",
    lede: "Technology rooms fail when the demo fails. We build power, signal and content rehearsal into the same plan as the stage.",
    body: [
      "Launches and partner days in Muscat often need LED, low-latency switching and a backup path if a live demo drops. We assign a content operator, not a volunteer with a laptop.",
      "Guest mix may include government, enterprise and media. Messaging on screens is checked in both languages before doors.",
    ],
    formats: ["Product drops", "Partner summits", "Developer or customer days", "Press reveals"],
    considerations: ["Demo power isolation", "Recording", "LED pixel pitch", "Press lock-up rooms"],
    faqs: [
      { q: "What does event production include for a tech launch?", a: "Scenic, LED, switching, rehearsal, show-calling, press positions and a content desk that can recover a failed cue without stopping the room." },
    ],
    relatedServices: [
      { href: "/services/product-launches-oman", label: "Product launches" },
      { href: "/services/led-screens-oman", label: "LED screens" },
    ],
    relatedLocations: [{ href: "/locations/muscat", label: "Muscat" }],
  },
  {
    slug: "automotive",
    nav: "Automotive",
    title: "Automotive Events in Oman",
    h1: "Vehicle reveals with load-in engineered first",
    description:
      "Automotive launches, displays and showroom activations in Oman, planned around vehicle access, flooring and reveal choreography.",
    lede: "Cars do not behave like catering. We start with ramps, floor loads, turning circles and fumes — then we design the reveal.",
    body: [
      "Muscat hotel ballrooms, outdoor decks and showrooms each treat vehicles differently. The production plan includes overnight load-in, protective flooring, battery or fuel rules, and a reveal cue that does not scratch a launch car.",
      "Media want a clean hero angle. Guests want to walk the product. Those two jobs are plotted as separate paths, not a scrum around the same bumper.",
    ],
    formats: ["Model reveals", "Showroom evenings", "Display days", "Test-drive overlays where sites allow"],
    considerations: ["Floor loading", "Ventilation", "Turntable power", "Hero camera positions"],
    faqs: [
      { q: "Can you manage an automotive reveal in a Muscat hotel?", a: "Often yes, if the hotel’s engineering team signs off load-in and flooring. We will decline a room that cannot take the vehicle safely." },
    ],
    relatedServices: [
      { href: "/services/product-launches-oman", label: "Product launches" },
      { href: "/services/brand-activations-oman", label: "Brand activations" },
    ],
    relatedLocations: [
      { href: "/locations/muscat", label: "Muscat" },
      { href: "/locations/sohar", label: "Sohar" },
    ],
  },
  {
    slug: "maritime-logistics",
    nav: "Maritime & Logistics",
    title: "Maritime and Logistics Events in Oman",
    h1: "Port-city programmes with industrial timing",
    description:
      "Stakeholder events for ports, shipping and logistics in Sohar, Duqm, Salalah and Muscat, planned around access, heat and operational calendars.",
    lede: "Oman’s ports are a distinct events geography. We plan for industrial sites, limited hotel stock and guests who may arrive from vessels or camps.",
    body: [
      "Sohar, Duqm and Salalah each have their own access culture. A stakeholder breakfast in a port hotel is not a Muscat gala. We design shorter programmes, stronger logistics, and technical kits that travel.",
      "When the brief includes a site tour, PPE, buses and a ceremonial close are one sheet. We do not treat the port as a scenic backdrop.",
    ],
    formats: ["Port stakeholder days", "Terminal briefings", "SEZ conferences", "Crew or contractor gatherings"],
    considerations: ["Gate timings", "Heat", "Limited AV inventory on site", "Translation for mixed crews"],
    faqs: [
      { q: "Can you organise events in Duqm and Sohar?", a: "Yes. Both are planned as remote-leaning operating sites: earlier freight from Muscat, crew housing, and a tighter technical spec that can travel." },
    ],
    relatedServices: [
      { href: "/services/roadshows-oman", label: "Roadshows" },
      { href: "/services/conference-management-oman", label: "Conference management" },
    ],
    relatedLocations: [
      { href: "/locations/sohar", label: "Sohar" },
      { href: "/locations/duqm", label: "Duqm" },
      { href: "/locations/salalah", label: "Salalah" },
    ],
  },
  {
    slug: "luxury-retail",
    nav: "Luxury & Retail",
    title: "Luxury and Retail Events in Oman",
    h1: "Private client evenings and public activations that respect the floor",
    description:
      "Luxury dinners, boutique launches and mall activations in Oman, designed around taste, traffic and mall operating rules.",
    lede: "Retail in Muscat is not a blank canvas. Mall hours, common-area rules and private-client privacy all change the production.",
    body: [
      "Private client dinners need arrival privacy and a table that photographs without feeling like a set. Mall activations need a hook that does not block circulation, a staff briefing that matches brand tone, and a build that can vanish on schedule.",
      "We keep Arabic and English on the activation so passing guests are not guessing the offer.",
    ],
    formats: ["Private client dinners", "Boutique launches", "Mall activations", "Pop-up displays"],
    considerations: ["Mall load-in windows", "Noise limits", "Queue design", "Brand colour accuracy"],
    faqs: [
      { q: "Can you run a mall activation in Muscat?", a: "Yes, within the centre’s operating rules. We design for footfall, not for blocking it, and we staff bilingual hosts who can close a simple next step." },
    ],
    relatedServices: [
      { href: "/services/brand-activations-oman", label: "Brand activations" },
      { href: "/services/vip-luxury-events-oman", label: "VIP & luxury events" },
    ],
    relatedLocations: [{ href: "/locations/muscat", label: "Muscat" }],
  },
  {
    slug: "sports-entertainment",
    nav: "Sports & Entertainment",
    title: "Sports and Entertainment Events in Oman",
    h1: "Hospitality and live programmes with crowd discipline",
    description:
      "Sport hospitality, concert overlays and entertainment programmes in Oman, produced with crowd flow, riders and show-calling.",
    lede: "Live entertainment is still an event operation: gates, sound limits, artist riders and a guest journey that does not collapse at peak.",
    body: [
      "Hospitality suites, fan zones and concert overlays in Muscat need crowd maths as much as lighting looks. We plan stewarding, accessible routes and a technical plot that respects venue noise rules.",
      "Artist riders are treated as production documents. If a request cannot be met in the room, we say so before contracts harden.",
    ],
    formats: ["Match hospitality", "Concert overlays", "Fan activations", "Award-style entertainment evenings"],
    considerations: ["Crowd flow", "Noise", "Artist power", "Broadcast positions if required"],
    faqs: [
      { q: "Do you provide entertainment as well as production?", a: "We produce the programme and can source suitable live elements for the brief. We do not publish a novelty-act catalogue copied from another market." },
    ],
    relatedServices: [
      { href: "/services/event-production-oman", label: "Event production" },
      { href: "/services/live-entertainment-oman", label: "Live entertainment" },
    ],
    relatedLocations: [
      { href: "/locations/muscat", label: "Muscat" },
      { href: "/locations/salalah", label: "Salalah" },
    ],
  },
  {
    slug: "manufacturing",
    nav: "Manufacturing",
    title: "Manufacturing Events in Oman",
    h1: "Plant ceremonies and contractor rooms that respect the site",
    description:
      "Event management for manufacturing and industrial hosts in Oman, including safety days, plant visits, inaugurations and contractor forums in Muscat, Sohar and Duqm.",
    lede: "Factory and plant programmes fail when they are treated like hotel galas. We plan around HSE, shift patterns and the distance from Muscat.",
    body: [
      "Inaugurations, safety stand-downs, contractor briefings and customer plant tours in Oman usually sit on industrial land — Sohar, Duqm, Rusayl-class parks and similar sites — not in a ballroom that can ignore PPE. The ceremonial layer still needs a clock: arrival, briefing, tour groups, shade, and a room that can hold speeches without fighting generators.",
      "We ask for site rules before we draw a stage. Crew induction, photography limits, power isolation and bus movements are written as cues. Hospitality is sized to the workforce and visiting guests, not copied from a capital-city dinner. If the brief includes a Muscat evening after a plant morning, those legs are one journey.",
    ],
    formats: ["Safety days", "Plant inaugurations", "Contractor forums", "Customer visits"],
    considerations: ["HSE induction for crew", "Heat and shade for outdoor groups", "Shift-aware timing", "Freight from Muscat workshops"],
    faqs: [
      {
        q: "Can you produce an event inside an Oman factory or plant?",
        a: "Yes, as the ceremonial and hospitality layer, working to the site’s access and safety rules. The plant remains in charge of operations. We do not override HSE for a look.",
      },
      {
        q: "Do manufacturing events always stay on site?",
        a: "Not always. Many briefs split a plant visit with a hotel briefing in Sohar, Duqm or Muscat. We schedule transfers so the second room is not an afterthought.",
      },
    ],
    relatedServices: [
      { href: "/services/corporate-events-oman", label: "Corporate events" },
      { href: "/services/venue-logistics-oman", label: "Venue logistics" },
      { href: "/services/government-events-oman", label: "Government events" },
    ],
    relatedLocations: [
      { href: "/locations/sohar", label: "Sohar" },
      { href: "/locations/duqm", label: "Duqm" },
      { href: "/locations/muscat", label: "Muscat" },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}
