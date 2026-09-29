import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { getArticles, getPages } from "@/content/catalog";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const page = getPages(locale).blogHub;
  return pageMetadata({ locale, title: page.title, description: page.description, path: "/blog" });
}

export default async function BlogIndex({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale).blogHub;
  const articles = getArticles(locale);
  const nav = await getTranslations("nav");
  return (
    <>
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: page.crumb, path: "/blog" },
        ]}
      />
      <section className="container-page section pt-10">
        <h1 className="font-display text-5xl">{page.h1}</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{page.lede}</p>
        <div className="mt-12 grid gap-6">
          {articles.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="rounded-sm border border-border p-6 hover:border-gold/40 md:grid md:grid-cols-[160px_1fr] md:gap-8"
            >
              <p className="text-xs uppercase tracking-wider text-gold rtl:normal-case rtl:tracking-wide">
                {item.category}
              </p>
              <div>
                <h2 className="font-display text-2xl">{item.h1}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{item.lede}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
