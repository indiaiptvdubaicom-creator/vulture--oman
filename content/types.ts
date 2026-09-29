export type Faq = { q: string; a: string };

export type RelatedLink = { href: string; label: string };

export type ServiceDoc = {
  slug: string;
  nav: string;
  group: string;
  title: string;
  h1: string;
  description: string;
  lede: string;
  overview: string[];
  includes: string[];
  capabilities: string[];
  formats: string[];
  oman: string[];
  approach: string[];
  audience: string;
  faqs: Faq[];
  relatedServices: RelatedLink[];
  relatedIndustries: RelatedLink[];
  relatedLocations: RelatedLink[];
};

export type IndustryDoc = {
  slug: string;
  nav: string;
  title: string;
  h1: string;
  description: string;
  lede: string;
  body: string[];
  formats: string[];
  considerations: string[];
  faqs: Faq[];
  relatedServices: RelatedLink[];
  relatedLocations: RelatedLink[];
};

export type LocationDoc = {
  slug: string;
  name: string;
  card: string;
  title: string;
  h1: string;
  description: string;
  lede: string;
  opportunities: string[];
  venues: string[];
  logistics: string[];
  eventTypes: string[];
  faqs: Faq[];
  relatedServices: RelatedLink[];
  relatedIndustries: RelatedLink[];
};

export type ArticleDoc = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  date: string;
  category: string;
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
  relatedServices: RelatedLink[];
  relatedLocations: RelatedLink[];
};
