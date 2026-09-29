import { setRequestLocale, getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBanner } from "@/components/CtaBanner";
import { pageMetadata } from "@/lib/seo";
import { getPages } from "@/content/catalog";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const page = getPages(locale).about;
  return pageMetadata({ locale, title: page.title, description: page.description, path: "/about" });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale).about;
  const nav = await getTranslations("nav");

  return (
    <>
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: page.crumb, path: "/about" },
        ]}
      />
      <article className="container-page section pt-10">
        <h1 className="font-display text-5xl md:text-6xl">{page.h1}</h1>
        <div className="mt-8 max-w-3xl space-y-5 text-foreground/85">
          {page.paragraphs?.map((p) => (
            <p key={p.slice(0, 32)} className={p === page.paragraphs?.[0] ? "text-lg text-muted-foreground" : undefined}>
              {p}
            </p>
          ))}
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
