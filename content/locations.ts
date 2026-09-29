import type { LocationDoc } from "./types";

export const locations: LocationDoc[] = [
  {
    slug: "muscat",
    name: "Muscat",
    card: "Capital operations: OCEC-scale rooms, hotel ballrooms, ministries and Al Mouj–Qurum guest geography.",
    title: "Event Management in Muscat",
    h1: "Muscat as the operating centre for Oman events",
    description:
      "Event management in Muscat covering OCEC-scale conferences, hotel ceremonies, exhibitions and corporate programmes across the capital.",
    lede: "Most Oman briefs begin in Muscat — not because other cities do not matter, but because venue stock, crew and ministries concentrate here. We plan the capital as a working city, not a postcard.",
    opportunities: [
      "Congresses and exhibitions at Oman Convention & Exhibition Centre scale, including halls that can be divided and an auditorium/theatre inventory for plenary.",
      "Hotel ballrooms and garden receptions from Qurum and Shatti through Al Bustan-class rooms and Al Mouj hospitality.",
      "Ministry, embassy and headquarters programmes that need bilingual materials and discreet crew.",
      "Mall and public activations inside the capital’s retail centres, subject to each operator’s rules.",
    ],
    venues: [
      "Oman Convention & Exhibition Centre (Madinat Al Irfan) — exhibition halls, ballrooms, meeting rooms and theatre-scale plenary. We discuss it as a venue class, not as an exclusive partnership.",
      "Large Muscat hotel ballrooms, including Al Bustan Palace’s Majan-scale rooms and comparable five-star inventory in Qurum, Al Mouj and the airport corridor.",
      "Royal Opera House Muscat sits in the cultural geography of the city; we do not claim it as a booked venue unless a brief actually includes it.",
      "Districts that shape guest logistics: Muttrah and the old waterfront for destination overlays; Seeb and Al Khoudh for airport-side crew and freight; Ruwi and Bawshar for mixed commercial hosting.",
    ],
    logistics: [
      "Muscat International Airport is the usual arrival. Peak-hour coastal roads change load-in windows more than a spreadsheet suggests.",
      "Hotel engineering teams control power, hanging points and overnight build. Those conversations happen before creative is locked.",
      "Arabic and English wayfinding is expected in mixed rooms. We design the hierarchy, not a last-minute sticker layer.",
    ],
    eventTypes: [
      "Corporate conferences",
      "Government ceremonies",
      "Exhibitions and stands",
      "Product launches",
      "Gala dinners",
      "Weddings",
    ],
    faqs: [
      { q: "Where should a first-time host hold a conference in Muscat?", a: "Choose by delegate count, exhibition need and hotel-room adjacency. OCEC-scale halls suit congress plus exhibition. Hotel ballrooms suit single-room corporate days. We shortlist against the brief, not against a favourite venue." },
      { q: "Do you cover Seeb, Qurum, Al Mouj and Muttrah?", a: "Yes, as districts of the Muscat operation — not as separate thin websites. Guest hotels, crew bases and activation sites in those areas sit on the same production plan." },
      { q: "How far ahead should Muscat hotel ballrooms be held?", a: "For winter peak and National Day-adjacent dates, hold as soon as the date is real. Shoulder periods can move faster." },
      { q: "Can you combine OCEC exhibition with a hotel dinner?", a: "Yes. Transfers, dress code and timing must be designed as one guest journey or the evening will feel like a second event." },
      { q: "Is Muscat suitable for outdoor evening receptions?", a: "Many months yes, with wind, dew and lighting considered. Summer heat pushes programmes indoors or later." },
    ],
    relatedServices: [
      { href: "/services/conference-management-oman", label: "Conference management" },
      { href: "/services/event-management-oman", label: "Event management" },
      { href: "/services/exhibition-stand-design-oman", label: "Exhibition stand design" },
      { href: "/services/gala-dinners-oman", label: "Gala dinners" },
    ],
    relatedIndustries: [
      { href: "/industries/government-public-sector", label: "Government" },
      { href: "/industries/corporate", label: "Corporate" },
      { href: "/industries/banking-finance", label: "Banking" },
    ],
  },
  {
    slug: "salalah",
    name: "Salalah",
    card: "Khareef-season programmes, tourism hospitality and Dhofar cultural context.",
    title: "Event Management in Salalah",
    h1: "Salalah programmes planned for climate, culture and inventory",
    description:
      "Event management in Salalah and Dhofar, including Khareef-season gatherings, tourism programmes and coastal hotel events.",
    lede: "Salalah is not Muscat with greener hills. Khareef changes flights, hotel stock, outdoor risk and the kind of hospitality guests expect. We plan Dhofar as its own operating theatre.",
    opportunities: [
      "Tourism forums, hotel launches and incentive groups during and around the monsoon season.",
      "Corporate hospitality that wants Dhofari landscape without turning the brief into a sightseeing tour.",
      "Cultural programming that belongs to Dhofar — including Bar’ah and frankincense context — sourced with local performers and permissions.",
      "Beach-resort banquets and garden looks with a mandatory indoor fallback.",
    ],
    venues: [
      "Coastal resort banquet halls and gardens, including inventory in the class of Crowne Plaza Salalah and other beach hotels (used as venue types, not claimed exclusives).",
      "Festival overlay sites during Khareef require municipal coordination and weather plans.",
      "Smaller meeting rooms for workshops that should not compete with evening entertainment noise.",
    ],
    logistics: [
      "Salalah Airport is the gate. Peak Khareef seats and rooms sell out; holds need to be earlier than a Muscat dinner.",
      "Humidity affects LED, paper, outdoor fabrics and hair-and-makeup schedules. We specify accordingly.",
      "Freight from Muscat is a calendar item, not a courier afterthought.",
    ],
    eventTypes: ["Tourism events", "Incentive programmes", "Hotel launches", "Cultural evenings", "Corporate retreats"],
    faqs: [
      { q: "How should companies plan events during Khareef in Salalah?", a: "Hold rooms and flights early, assume moisture on every outdoor cue, and staff a producer who has walked the garden in drizzle — not only in photographs." },
      { q: "Can you organise events in Salalah from a Muscat team?", a: "Yes, with earlier freight, local crew partners and a site recce. We do not run Khareef shows as a same-week fly-in." },
      { q: "Is outdoor staging realistic in monsoon months?", a: "Sometimes, with cover, drainage and a complete indoor version. If the brief cannot afford both, we recommend indoor from the start." },
      { q: "Do you include Dhofari cultural performance?", a: "When the brief asks for it, we source locally appropriate programming such as Bar’ah — not a generic Gulf folklore set." },
      { q: "What guest counts do Salalah resort halls typically hold?", a: "Banquet halls in the larger resorts can approach a thousand guests; many briefings are smaller. We size technical to the actual room." },
    ],
    relatedServices: [
      { href: "/services/destination-events-oman", label: "Destination events" },
      { href: "/services/dhofar-cultural-programming", label: "Dhofar cultural programming" },
      { href: "/services/frankincense-welcome-rituals", label: "Frankincense welcome" },
    ],
    relatedIndustries: [
      { href: "/industries/hospitality-tourism", label: "Hospitality & tourism" },
      { href: "/industries/corporate", label: "Corporate" },
    ],
  },
  {
    slug: "sohar",
    name: "Sohar",
    card: "Port, industry and north Batinah conferences with a shorter hotel inventory than Muscat.",
    title: "Event Management in Sohar",
    h1: "Industrial-city events with port timing",
    description:
      "Event management in Sohar for industrial conferences, port stakeholder days and corporate gatherings in north Al Batinah.",
    lede: "Sohar programmes are shaped by the port and the plants around it. Guests may be engineers, officials and visiting principals sharing one morning. The plan has to be short, clear and technically reliable.",
    opportunities: [
      "Stakeholder days for logistics, metals and energy-adjacent businesses.",
      "Dealer, contractor and staff conferences that do not justify a full Muscat movement.",
      "Roadshow stops on a Muscat–Sohar–Duqm sequence.",
    ],
    venues: [
      "Hotel meeting inventory in Sohar is tighter than the capital. Ballrooms exist; spectacle has to be sized to the room.",
      "On-site industrial venues need HSE, power and shade as first-class constraints.",
    ],
    logistics: [
      "Road freight from Muscat is predictable if it leaves on time. Same-morning load-in from the capital is a risk we will name.",
      "Heat on outdoor plant visits requires water, shade and a realistic walking route.",
      "Interpretation may be needed for mixed contractor rooms.",
    ],
    eventTypes: ["Industrial conferences", "Port briefings", "Staff conventions", "Roadshow stops"],
    faqs: [
      { q: "Can you run a conference in Sohar without moving the whole Muscat kit?", a: "Often yes. We spec a travelling technical package and hire locally where it is reliable, rather than over-freighting a ballroom." },
      { q: "How do Sohar events differ from Muscat?", a: "Shorter programmes, industrial guest mix, tighter hotels, and more attention to heat and gate times." },
      { q: "Is Sohar used as a roadshow city?", a: "Yes. It sits naturally between the capital and the north, and pairs with Duqm when the brief is national." },
      { q: "Do you handle plant-visit logistics?", a: "We coordinate the ceremonial and hospitality layer and work to the site’s HSE rules. The plant remains in charge of access." },
      { q: "What about bilingual materials?", a: "Arabic and English are planned into slides and wayfinding, especially when contractor crews and visiting principals share a room." },
    ],
    relatedServices: [
      { href: "/services/conference-management-oman", label: "Conference management" },
      { href: "/services/roadshows-oman", label: "Roadshows" },
      { href: "/services/venue-logistics-oman", label: "Venue logistics" },
    ],
    relatedIndustries: [
      { href: "/industries/maritime-logistics", label: "Maritime & logistics" },
      { href: "/industries/oil-gas-energy", label: "Oil, gas & energy" },
    ],
  },
  {
    slug: "nizwa",
    name: "Nizwa",
    card: "Interior destination offsites, heritage context and leadership retreats.",
    title: "Event Management in Nizwa",
    h1: "Interior gatherings with heritage in the guest journey",
    description:
      "Destination events and offsites in Nizwa, planned around interior geography, heritage context and smaller venue stock.",
    lede: "Nizwa briefs usually want the interior’s character without turning the day into a tour. We use heritage as guest context — fort, souq, mountain light — while the meeting still starts on time.",
    opportunities: [
      "Leadership offsites that need distance from Muscat without a coastal resort template.",
      "Cultural evenings that sit after a working day.",
      "Smaller official or community programmes connected to the interior.",
    ],
    venues: [
      "Hotel and lodge inventory is more intimate than capital ballrooms. Staging must be sized honestly.",
      "Heritage sites may appear as guest experiences. We do not imply private hire of forts or monuments unless the brief and permissions exist.",
    ],
    logistics: [
      "Transfer time from Muscat is part of the agenda, not a footnote.",
      "Sunset looks are beautiful and short. Lighting plots must not depend on a perfect sky.",
      "Supplier depth is thinner; key technical may travel with the crew.",
    ],
    eventTypes: ["Leadership offsites", "Heritage dinners", "Small conferences", "Incentive overlays"],
    faqs: [
      { q: "Is Nizwa realistic for a 400-person gala?", a: "Only if a specific venue can take it. Many Nizwa briefs are smaller; we will not force a capital-scale show into an intimate room." },
      { q: "Can a Nizwa offsite include a souq or fort visit?", a: "As a guest experience, yes, with timing and permissions. It is not a substitute for a meeting room that works." },
      { q: "Do you bring production from Muscat?", a: "Usually the technical spine travels, with local support for labour and hospitality." },
      { q: "What season works best?", a: "Cooler months are kinder for outdoor legs. Summer programmes stay indoors and shorter." },
      { q: "How do we keep it from feeling like tourism?", a: "Give the working sessions a proper room and treat cultural stops as hosted chapters with a start and end time." },
    ],
    relatedServices: [
      { href: "/services/destination-events-oman", label: "Destination events" },
      { href: "/services/corporate-events-oman", label: "Corporate events" },
      { href: "/services/traditional-omani-hospitality", label: "Omani hospitality" },
    ],
    relatedIndustries: [
      { href: "/industries/corporate", label: "Corporate" },
      { href: "/industries/hospitality-tourism", label: "Hospitality & tourism" },
    ],
  },
  {
    slug: "sur",
    name: "Sur",
    card: "Sharqiyah coast gatherings with a Muscat freight line and smaller supplier base.",
    title: "Event Management in Sur",
    h1: "Coastal Sharqiyah events with honest logistics",
    description:
      "Event management in Sur for coastal corporate gatherings, community programmes and energy-adjacent meetings in Ash Sharqiyah.",
    lede: "Sur is close enough to Muscat to tempt a same-day plan, and far enough to punish it. We treat the drive and the thinner vendor list as design constraints.",
    opportunities: [
      "Regional corporate and community programmes.",
      "Energy-adjacent or coastal stakeholder meetings that want to stay in Sharqiyah.",
      "Small destination dinners with a maritime character — still produced, not improvised.",
    ],
    venues: [
      "Hotel and hall inventory is limited compared with Muscat. We spec technical to the room we actually have.",
      "Outdoor coastal looks need wind plans.",
    ],
    logistics: [
      "Freight from Muscat should leave the night before for morning shows.",
      "Crew housing is booked as part of the estimate, not hoped for on arrival.",
      "Backup equipment is more important when local hire is thin.",
    ],
    eventTypes: ["Regional conferences", "Dinners", "Stakeholder briefings", "Community programmes"],
    faqs: [
      { q: "Can a Sur event be run as a Muscat day trip?", a: "For a light meeting, sometimes. For production with staging and guests, overnight crew is the safer plan." },
      { q: "What is the usual guest scale?", a: "Often tens to low hundreds. Tell us the count before we draw a stage." },
      { q: "Do you cover nearby Sharqiyah towns from Sur?", a: "When the brief names them, yes, as part of the same logistics sheet — not as extra doorway pages." },
      { q: "Is outdoor sound realistic on the coast?", a: "With wind, maybe not. We prefer a room that holds speech, then add a terrace for hospitality." },
      { q: "How do you keep cost honest?", a: "By not importing a capital-scale kit into a room that cannot use it. The estimate matches the venue." },
    ],
    relatedServices: [
      { href: "/services/corporate-events-oman", label: "Corporate events" },
      { href: "/services/venue-logistics-oman", label: "Venue logistics" },
      { href: "/services/event-production-oman", label: "Event production" },
    ],
    relatedIndustries: [
      { href: "/industries/oil-gas-energy", label: "Oil, gas & energy" },
      { href: "/industries/corporate", label: "Corporate" },
    ],
  },
  {
    slug: "duqm",
    name: "Duqm",
    card: "SEZ briefings, industrial visits and long-distance logistics from Muscat.",
    title: "Event Management in Duqm",
    h1: "SEZ and industrial programmes with camp-to-hotel reality",
    description:
      "Event management in Duqm for special economic zone briefings, official visits and industrial conferences that depend on long-distance logistics.",
    lede: "Duqm is a planning problem before it is a design problem. Distances, housing mix and industrial calendars decide what kind of event is even possible.",
    opportunities: [
      "SEZ stakeholder conferences and official visits.",
      "Contractor and investor briefings that combine a site tour with a closed-room session.",
      "Workforce or community gatherings sized to actual facilities.",
    ],
    venues: [
      "Hotel and camp facilities vary by project phase. We recce rather than assume a capital ballroom exists.",
      "Outdoor industrial ceremonies need shade, mics that work in wind, and a clock that respects site shifts.",
    ],
    logistics: [
      "Most technical freight originates in Muscat. Lead times are longer; there is no next-hour spare LED panel.",
      "Crew housing, meals and rest are production line items.",
      "Flights and road options both appear in the risk register.",
    ],
    eventTypes: ["SEZ conferences", "Official visits", "Site inaugurations", "Investor walkthroughs"],
    faqs: [
      { q: "How early should a Duqm event be planned?", a: "Earlier than a Muscat equivalent — often several additional weeks for freight, housing and site access." },
      { q: "Can you support a ministerial visit to Duqm?", a: "We can produce the ceremonial and hospitality layer to a protocol pack. Access remains with the host and site." },
      { q: "Do you fabricate stands in Duqm?", a: "Complex scenic usually builds in Muscat and travels. Simple elements can finish on site if the workshop plan allows." },
      { q: "What fails most often?", a: "Optimistic same-week logistics, under-specified power, and guest lists that ignore housing limits." },
      { q: "Is Duqm paired with other cities?", a: "Often with Muscat for the main congress and Duqm for the site chapter, or as a roadshow beat with Sohar." },
    ],
    relatedServices: [
      { href: "/services/government-events-oman", label: "Government events" },
      { href: "/services/conference-management-oman", label: "Conference management" },
      { href: "/services/roadshows-oman", label: "Roadshows" },
    ],
    relatedIndustries: [
      { href: "/industries/maritime-logistics", label: "Maritime & logistics" },
      { href: "/industries/oil-gas-energy", label: "Oil, gas & energy" },
      { href: "/industries/construction-real-estate", label: "Construction" },
    ],
  },
  {
    slug: "khasab",
    name: "Khasab",
    card: "Musandam destination incentives and small luxury groups with sea-condition planning.",
    title: "Event Management in Khasab",
    h1: "Musandam programmes for small, high-touch groups",
    description:
      "Destination events in Khasab and Musandam for incentive groups and VIP gatherings, planned around fjord geography and sea conditions.",
    lede: "Khasab is a destination brief, usually for fewer guests who expect the landscape to be part of the hospitality. We still write a run of show, because fjords do not excuse a late transfer.",
    opportunities: [
      "Incentive groups and leadership rewards that want Musandam without an unstructured cruise.",
      "Small official or corporate hospitality with a mountain-and-sea setting.",
      "Evening programmes sized to intimate venues.",
    ],
    venues: [
      "Hotel and dhow-based hospitality depend on season and sea state. We plan indoor equivalents.",
      "Scenic locations are guest experiences, not unpermitted stages.",
    ],
    logistics: [
      "Access is the event. Flights, road and sea legs are timed before entertainment is discussed.",
      "Weather can cancel a water chapter; the programme must still complete on land.",
      "Technical kits stay light and redundant.",
    ],
    eventTypes: ["Incentives", "VIP hospitality", "Small dinners", "Leadership retreats"],
    faqs: [
      { q: "Is Khasab suitable for a large conference?", a: "Rarely. The geography favours smaller groups. Large congresses belong in Muscat." },
      { q: "What happens if the sea is rough?", a: "The water chapter moves to a land programme we already designed. We do not invent a backup at the harbour." },
      { q: "Do you operate dhows yourselves?", a: "We coordinate licensed operators inside the guest journey. Marine operations stay with those operators." },
      { q: "How many nights do you recommend?", a: "Most incentive briefs need at least one night so transfers do not eat the programme." },
      { q: "Can this combine with Muscat?", a: "Yes: capital working sessions, then a Musandam chapter, if the calendar and guest stamina allow." },
    ],
    relatedServices: [
      { href: "/services/destination-events-oman", label: "Destination events" },
      { href: "/services/vip-luxury-events-oman", label: "VIP & luxury events" },
    ],
    relatedIndustries: [
      { href: "/industries/hospitality-tourism", label: "Hospitality & tourism" },
      { href: "/industries/corporate", label: "Corporate" },
    ],
  },
];

export const operatingTowns = [
  {
    name: "Seeb, Bawshar, Muttrah, Qurum and Al Mouj",
    note: "Muscat districts covered on the capital page — guest hotels, crew bases and activation geography, not separate websites.",
  },
  {
    name: "Barka, Rustaq and Nakhal",
    note: "South Batinah civic, hotel and heritage-adjacent briefs, planned from Muscat with local venue rules.",
  },
  {
    name: "Ibri and Al Buraimi",
    note: "Dhahirah and border-corridor programmes where freight and guest housing need an honest calendar.",
  },
  {
    name: "Bahla and Ibra",
    note: "Interior and Sharqiyah towns used as destination or community chapters, not as doorway pages.",
  },
];

export function getLocation(slug: string) {
  return locations.find((item) => item.slug === slug);
}
