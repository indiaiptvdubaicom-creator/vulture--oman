import { setRequestLocale, getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { getHome, getPages } from "@/content/catalog";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const page = getPages(locale).faq;
  return pageMetadata({ locale, title: page.title, description: page.description, path: "/faq" });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale).faq;
  const home = getHome(locale);
  const faqs = [...home.homeFaqs, ...(page.extraFaqs || [])];
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: page.crumb, path: "/faq" },
        ]}
      />
      <section className="container-page section max-w-3xl pt-10">
        <h1 className="font-display text-5xl">{page.h1}</h1>
        <p className="mt-5 text-muted-foreground">{page.lede}</p>
        <div className="mt-10">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
