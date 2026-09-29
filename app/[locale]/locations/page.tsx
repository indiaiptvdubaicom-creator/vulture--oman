import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBanner } from "@/components/CtaBanner";
import { pageMetadata } from "@/lib/seo";
import { getLocations, getOperatingTowns, getPages } from "@/content/catalog";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const page = getPages(locale).locationsHub;
  return pageMetadata({ locale, title: page.title, description: page.description, path: "/locations" });
}

export default async function LocationsHub({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale).locationsHub;
  const locations = getLocations(locale);
  const towns = getOperatingTowns(locale);
  const nav = await getTranslations("nav");
  return (
    <>
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: page.crumb, path: "/locations" },
        ]}
      />
      <section className="container-page section pt-10">
        <h1 className="font-display text-5xl">{page.h1}</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{page.lede}</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {locations.map((item) => (
            <Link
              key={item.slug}
              href={`/locations/${item.slug}`}
              className="rounded-sm border border-border p-8 hover:border-gold/40"
            >
              <h2 className="font-display text-3xl">{item.name}</h2>
              <p className="mt-3 text-muted-foreground">{item.card}</p>
            </Link>
          ))}
        </div>
        <div className="mt-16 rounded-sm border border-border bg-card/50 p-8">
          <h2 className="font-display text-3xl">{page.townsTitle}</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">{page.townsIntro}</p>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {towns.map((item) => (
              <li key={item.name}>
                <h3 className="font-display text-xl text-gold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
