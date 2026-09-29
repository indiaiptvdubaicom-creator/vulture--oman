import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { getArticleDoc } from "@/content/catalog";
import { articles as enArticles } from "@/content/blog";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return enArticles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getArticleDoc(locale, slug);
  if (!item) return {};
  return pageMetadata({
    locale,
    title: item.title,
    description: item.description,
    path: `/blog/${item.slug}`,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const item = getArticleDoc(locale, slug);
  if (!item) notFound();
  const path = `/blog/${item.slug}`;
  const nav = await getTranslations("nav");
  const t = await getTranslations("common");

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: item.title,
          description: item.description,
          path,
          date: item.date,
          locale,
        })}
      />
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: nav("blog"), path: "/blog" },
          { name: item.title, path },
        ]}
      />
      <article className="container-page section pt-10">
        <p className="text-xs uppercase tracking-[0.28em] text-gold rtl:normal-case rtl:tracking-wide">
          {item.category}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl md:text-6xl">{item.h1}</h1>
        <p className="mt-4 text-sm text-muted-foreground" dir="ltr">
          {item.date}
        </p>
        <p className="mt-8 max-w-3xl text-lg text-muted-foreground">{item.lede}</p>
        {item.sections.map((section) => (
          <section key={section.heading} className="mt-12 max-w-3xl">
            <h2 className="font-display text-3xl">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-foreground/85">
                {p}
              </p>
            ))}
          </section>
        ))}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-gold">{t("relatedServices")}</h2>
            <ul className="mt-3 grid gap-2">
              {item.relatedServices.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-gold">{t("locations")}</h2>
            <ul className="mt-3 grid gap-2">
              {item.relatedLocations.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
