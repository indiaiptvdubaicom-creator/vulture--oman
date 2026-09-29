import { site } from "@/content/site";
import { localeAbsUrl, schemaLang } from "@/lib/seo";
import { localizedPath } from "@/i18n/routing";

export function organizationJsonLd(locale = "en", description?: string) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    "@id": `${site.url}/#organization`,
    name: site.name,
    description: description || site.description,
    url: site.url,
    inLanguage: ["en-OM", "ar-OM"],
    areaServed: {
      "@type": "Country",
      name: locale === "ar" ? "سلطنة عُمان" : "Oman",
    },
    availableLanguage: ["en", "ar"],
    knowsAbout:
      locale === "ar"
        ? [
            "إدارة الفعاليات في عُمان",
            "إنتاج المؤتمرات في مسقط",
            "تصميم أجنحة المعارض",
            "إنتاج الفعاليات",
            "الضيافة المؤسسية في عُمان",
          ]
        : [
            "Event management in Oman",
            "Conference production in Muscat",
            "Exhibition stand design",
            "Event production",
            "Corporate hospitality in Oman",
          ],
  };

  if (site.phone) data.telephone = site.phone;
  if (site.email) data.email = site.email;
  if (site.address) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: locale === "ar" ? "مسقط" : "Muscat",
      addressCountry: "OM",
    };
  }

  return data;
}

export function websiteJsonLd(locale = "en", description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: schemaLang(locale),
    description: description || site.description,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function webPageJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  locale?: string;
}) {
  const locale = opts.locale || "en";
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.title,
    description: opts.description,
    url: localeAbsUrl(locale, opts.path),
    inLanguage: schemaLang(locale),
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[], locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: localeAbsUrl(locale, item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  area?: string;
  locale?: string;
}) {
  const locale = opts.locale || "en";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: localeAbsUrl(locale, opts.path),
    inLanguage: schemaLang(locale),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: opts.area || (locale === "ar" ? "سلطنة عُمان" : "Oman"),
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  date: string;
  locale?: string;
}) {
  const locale = opts.locale || "en";
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.date,
    inLanguage: schemaLang(locale),
    author: { "@type": "Organization", name: site.name },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: localeAbsUrl(locale, opts.path),
  };
}

