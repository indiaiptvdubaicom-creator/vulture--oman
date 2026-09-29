import type { Locale } from "@/i18n/routing";
import * as enHome from "@/content/home";
import * as arHome from "@/content/ar/home";
import { services as enServices, serviceHubs as enHubs, getService as getEnService, getHub as getEnHub } from "@/content/services";
import { services as arServices, serviceHubs as arHubs, getService as getArService, getHub as getArHub } from "@/content/ar/services";
import { industries as enIndustries, getIndustry as getEnIndustry } from "@/content/industries";
import { industries as arIndustries, getIndustry as getArIndustry } from "@/content/ar/industries";
import { locations as enLocations, operatingTowns as enTowns, getLocation as getEnLocation } from "@/content/locations";
import { locations as arLocations, operatingTowns as arTowns, getLocation as getArLocation } from "@/content/ar/locations";
import { articles as enArticles, getArticle as getEnArticle } from "@/content/blog";
import { articles as arArticles, getArticle as getArArticle } from "@/content/ar/blog";
import { pages as enPages } from "@/content/pages";
import { pages as arPages } from "@/content/ar/pages";

export {
  getNav,
  getFooterExplore,
  getFooterServices,
  getFooterLocations,
  getSiteDescription,
} from "@/content/chrome";

export function getHome(locale: string) {
  return locale === "ar" ? arHome : enHome;
}

export function getServices(locale: string) {
  return locale === "ar" ? arServices : enServices;
}

export function getServiceHubs(locale: string) {
  return locale === "ar" ? arHubs : enHubs;
}

export function getServiceDoc(locale: string, slug: string) {
  return locale === "ar" ? getArService(slug) : getEnService(slug);
}

export function getHubDoc(locale: string, slug: string) {
  return locale === "ar" ? getArHub(slug) : getEnHub(slug);
}

export function getIndustries(locale: string) {
  return locale === "ar" ? arIndustries : enIndustries;
}

export function getIndustryDoc(locale: string, slug: string) {
  return locale === "ar" ? getArIndustry(slug) : getEnIndustry(slug);
}

export function getLocations(locale: string) {
  return locale === "ar" ? arLocations : enLocations;
}

export function getOperatingTowns(locale: string) {
  return locale === "ar" ? arTowns : enTowns;
}

export function getLocationDoc(locale: string, slug: string) {
  return locale === "ar" ? getArLocation(slug) : getEnLocation(slug);
}

export function getArticles(locale: string) {
  return locale === "ar" ? arArticles : enArticles;
}

export function getArticleDoc(locale: string, slug: string) {
  return locale === "ar" ? getArArticle(slug) : getEnArticle(slug);
}

export function getPages(locale: string) {
  return locale === "ar" ? arPages : enPages;
}

export type { Locale };
