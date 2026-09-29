import { setRequestLocale, getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBanner } from "@/components/CtaBanner";
import { pageMetadata } from "@/lib/seo";
import { getPages } from "@/content/catalog";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const page = getPages(locale).projects;
  return pageMetadata({ locale, title: page.title, description: page.description, path: "/projects" });
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale).projects;
  const nav = await getTranslations("nav");

  return (
    <>
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: page.crumb, path: "/projects" },
        ]}
      />
      <section className="container-page section pt-10">
        <h1 className="font-display text-5xl">{page.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{page.lede}</p>
        {page.paragraphs?.map((p) => (
          <p key={p.slice(0, 24)} className="mt-8 max-w-3xl text-muted-foreground">
            {p}
          </p>
        ))}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {page.template?.map((item) => (
            <article key={item.title} className="rounded-sm border border-border bg-card/60 p-6">
              <h2 className="font-display text-2xl text-gold">{item.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
