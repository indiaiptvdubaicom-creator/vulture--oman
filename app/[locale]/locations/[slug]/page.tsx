import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { locations } from "@/content/locations";
import { getLocationDoc } from "@/content/catalog";
import { LocationView } from "@/components/LocationView";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getLocationDoc(locale, slug);
  if (!item) return {};
  return pageMetadata({
    locale,
    title: item.title,
    description: item.description,
    path: `/locations/${item.slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <LocationView slug={slug} locale={locale} />;
}
