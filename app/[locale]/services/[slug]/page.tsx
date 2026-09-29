import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ServiceView } from "@/components/ServiceView";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBanner } from "@/components/CtaBanner";
import { pageMetadata } from "@/lib/seo";
import { getHubDoc, getServiceDoc, getServiceHubs, getServices } from "@/content/catalog";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  const services = getServices("en");
  const hubs = getServiceHubs("en");
  return [
    ...services.map((item) => ({ slug: item.slug })),
    ...hubs.map((item) => ({ slug: item.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceDoc(locale, slug);
  if (service) {
    return pageMetadata({
      locale,
      title: service.title,
      description: service.description,
      path: `/services/${service.slug}`,
    });
  }
  const hub = getHubDoc(locale, slug);
  if (hub) {
    return pageMetadata({
      locale,
      title: `${hub.title}`,
      description: hub.intro,
      path: `/services/${hub.slug}`,
    });
  }
  return {};
}

export default async function ServiceSlugPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const service = getServiceDoc(locale, slug);
  if (service) return <ServiceView service={service} path={`/services/${service.slug}`} locale={locale} />;

  const hub = getHubDoc(locale, slug);
  if (!hub) notFound();
  const nav = await getTranslations("nav");
  const commonT = await getTranslations("common");

  return (
    <>
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: nav("services"), path: "/services" },
          { name: hub.title, path: `/services/${hub.slug}` },
        ]}
      />
      <section className="container-page section pt-10">
        <h1 className="font-display text-5xl">
          {hub.title} {commonT("inOman")}
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{hub.intro}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {hub.slugs.map((item) => {
            const doc = getServiceDoc(locale, item);
            if (!doc) return null;
            return (
              <Link
                key={item}
                href={`/services/${item}`}
                className="rounded-sm border border-border p-6 hover:border-gold/40"
              >
                <h2 className="font-display text-2xl">{doc.h1}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{doc.lede}</p>
              </Link>
            );
          })}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
