import type { Metadata } from "next";
import { site } from "@/content/site";
import { htmlLang, localizedPath, ogLocale } from "@/i18n/routing";

export function absUrl(path: string) {
  return `${site.url}${path === "/" ? "" : path}`;
}

export function localeAbsUrl(locale: string, path: string) {
  return absUrl(localizedPath(locale, path));
}

export function pageMetadata(opts: {
  locale: string;
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const { locale, title, description, path } = opts;
  const canonical = localeAbsUrl(locale, path);
  const en = localeAbsUrl("en", path);
  const ar = localeAbsUrl("ar", path);

  return {
    title: opts.absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: {
        "en-OM": en,
        "ar-OM": ar,
        "x-default": en,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale(locale),
      alternateLocale: locale === "ar" ? ["en_OM"] : ["ar_OM"],
      siteName: site.name,
      title,
      description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      language: htmlLang(locale),
    },
  };
}

export function schemaLang(locale: string) {
  return locale === "ar" ? "ar-OM" : "en-OM";
}
