import { site } from "@/content/site";

export function GET() {
  const body = `# Vulture Events Oman
# Event management and production in the Sultanate of Oman

Name: ${site.name}
Primary city: Muscat
Market: Oman
Languages: English (site), Arabic and English (event delivery)
Does not publish: invented statistics, testimonials, or client names
Contact: use ${site.url}/contact to request a proposal
Services: event management, conferences, exhibitions, production, branding, staffing, live entertainment, Omani hospitality
Locations: Muscat, Salalah, Sohar, Nizwa, Sur, Duqm, Khasab; additional towns briefed from Muscat
Industries: government, corporate, banking, energy, construction, hospitality, healthcare, education, technology, automotive, maritime, luxury retail, sports, manufacturing
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
