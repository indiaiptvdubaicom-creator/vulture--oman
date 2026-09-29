import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBanner } from "@/components/CtaBanner";
import { pageMetadata } from "@/lib/seo";
import { getIndustries, getPages } from "@/content/catalog";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const page = getPages(locale).industriesHub;
  return pageMetadata({ locale, title: page.title, description: page.description, path: "/industries" });
}

export default async function IndustriesHub({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale).industriesHub;
  const industries = getIndustries(locale);
  const nav = await getTranslations("nav");
  return (
    <>
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: page.crumb, path: "/industries" },
        ]}
      />
      <section className="container-page section pt-10">
        <h1 className="font-display text-5xl">{page.h1}</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{page.lede}</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <Link
              key={item.slug}
              href={`/industries/${item.slug}`}
              className="rounded-sm border border-border p-6 hover:border-gold/40"
            >
              <h2 className="font-display text-2xl">{item.nav}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{item.lede}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
