import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { getPages } from "@/content/catalog";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [] as { slug: string }[];
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const page = getPages(locale).projectEmpty;
  return {
    ...pageMetadata({ locale, title: page.title, description: page.description, path: "/projects" }),
    robots: { index: false, follow: false },
  };
}

export default async function ProjectTemplatePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale).projectEmpty;
  return (
    <section className="container-page section pt-32">
      <h1 className="font-display text-4xl">{page.h1}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{page.lede}</p>
    </section>
  );
}
