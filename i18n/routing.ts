import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

export function isRtl(locale: string) {
  return locale === "ar";
}

export function htmlLang(locale: string) {
  return locale === "ar" ? "ar-OM" : "en-OM";
}

export function ogLocale(locale: string) {
  return locale === "ar" ? "ar_OM" : "en_OM";
}

export function localizedPath(locale: string, path: string) {
  const clean = path === "/" ? "" : path;
  if (locale === "ar") return clean ? `/ar${clean}` : "/ar";
  return clean || "/";
}
