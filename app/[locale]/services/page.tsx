import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBanner } from "@/components/CtaBanner";
import { pageMetadata } from "@/lib/seo";
import { getPages, getServiceDoc, getServiceHubs, getServices } from "@/content/catalog";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const page = getPages(locale).servicesHub;
  return pageMetadata({ locale, title: page.title, description: page.description, path: "/services" });
}

export default async function ServicesHub({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale).servicesHub;
  const hubs = getServiceHubs(locale);
  const services = getServices(locale);
  const nav = await getTranslations("nav");

  return (
    <>
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: page.crumb, path: "/services" },
        ]}
      />
      <section className="container-page section pt-10">
        <h1 className="font-display text-5xl">{page.h1}</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{page.lede}</p>
        <div className="mt-16 grid gap-12">
          {hubs.map((hub) => (
            <div key={hub.slug}>
              <h2 className="font-display text-3xl text-gold">
                <Link href={`/services/${hub.slug}`}>{hub.title}</Link>
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">{hub.intro}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {hub.slugs.map((slug) => {
                  const service = getServiceDoc(locale, slug);
                  if (!service) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={`/services/${slug}`}
                        className="block rounded-sm border border-border p-5 hover:border-gold/40"
                      >
                        <span className="font-display text-xl">{service.nav}</span>
                        <span className="mt-2 block text-sm text-muted-foreground">{service.lede}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm text-muted-foreground">
          {services.length} {page.countNote}
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
