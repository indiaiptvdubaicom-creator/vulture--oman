import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { industries } from "@/content/industries";
import { getIndustryDoc } from "@/content/catalog";
import { IndustryView } from "@/components/IndustryView";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getIndustryDoc(locale, slug);
  if (!item) return {};
  return pageMetadata({
    locale,
    title: item.title,
    description: item.description,
    path: `/industries/${item.slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <IndustryView slug={slug} locale={locale} />;
}
