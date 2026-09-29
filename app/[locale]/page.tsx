import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HeroSlider } from "@/components/HeroSlider";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, webPageJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { getHome, getIndustries, getLocations } from "@/content/catalog";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata({
    locale,
    title: t("titleDefault"),
    description: t("description"),
    path: "/",
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });
  const meta = await getTranslations({ locale, namespace: "meta" });
  const common = await getTranslations({ locale, namespace: "common" });
  const home = getHome(locale);
  const industries = getIndustries(locale);
  const locations = getLocations(locale);

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: meta("titleDefault"),
          description: meta("description"),
          path: "/",
          locale,
        })}
      />
      <JsonLd data={faqJsonLd(home.homeFaqs)} />
      <HeroSlider slides={home.slides} homeTitle={meta("titleDefault")} />

      <section className="border-y border-border bg-card/60">
        <div className="container-page py-12">
          <h2 className="font-display text-3xl md:text-4xl">{t("completeTitle")}</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">{t("completeBody")}</p>
        </div>
        <div className="container-page grid gap-8 pb-12 md:grid-cols-4">
          {home.capabilities.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-2xl text-gold">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold rtl:normal-case rtl:tracking-wide">
            {t("servicesKicker")}
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">{t("pillarsTitle")}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t("pillarsBody")}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {home.pillars.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-sm border border-border bg-card p-8 transition hover:border-gold/50"
              >
                <h3 className="font-display text-3xl group-hover:text-gold">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-gold/90 rtl:normal-case rtl:tracking-wide">
                  {item.items.map((chip) => (
                    <li key={chip} className="rounded-full border border-gold/25 px-3 py-1">
                      {chip}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-block text-sm text-gold">{common("explore")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section star-motif bg-muted/40">
        <div className="container-page">
          <h2 className="font-display text-4xl md:text-5xl">{t("programmesTitle")}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t("programmesBody")}</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {home.categories.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm border border-border bg-background/70 p-7 hover:border-gold/40"
              >
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">{t("whyTitle")}</h2>
            <p className="mt-4 text-muted-foreground">{t("whyBody")}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {home.whyUs.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-2xl text-gold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container-page">
          <h2 className="font-display text-4xl">{t("formatsTitle")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {home.formats.map((item) => (
              <Link key={item.href} href={item.href} className="border-t border-gold/40 pt-5">
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="font-display text-4xl">{t("sectorsTitle")}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t("sectorsBody")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((item) => (
              <Link
                key={item.slug}
                href={`/industries/${item.slug}`}
                className="rounded-full border border-border px-4 py-2 text-sm hover:border-gold hover:text-gold"
              >
                {item.nav}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-page">
          <h2 className="font-display text-4xl">{t("locationsTitle")}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t("locationsBody")}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((item) => (
              <Link
                key={item.slug}
                href={`/locations/${item.slug}`}
                className="rounded-sm border border-border bg-background p-6 hover:border-gold/40"
              >
                <h3 className="font-display text-2xl">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.card}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="font-display text-4xl">{t("workTitle")}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t("workBody")}</p>
          <Link href="/projects" className="mt-6 inline-flex items-center gap-2 text-gold">
            {t("workLink")}
          </Link>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container-page">
          <h2 className="font-display text-4xl">{t("productionTitle")}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {home.production.map((item) => (
              <div key={item.title} className="border-s border-gold/40 ps-5">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">{t("hospitalityTitle")}</h2>
            <p className="mt-4 text-muted-foreground">{t("hospitalityBody")}</p>
          </div>
          <div className="grid gap-6">
            {home.hospitality.map((item) => (
              <div key={item.title} className="rounded-sm border border-border p-6">
                <h3 className="font-display text-2xl text-gold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="container-page">
          <h2 className="font-display text-4xl">{t("processTitle")}</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-5">
            {home.process.map((step) => (
              <li key={step.n}>
                <p className="text-sm tracking-[0.2em] text-gold" dir="ltr">
                  {step.n}
                </p>
                <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-4xl">{t("faqTitle")}</h2>
          <div className="mt-8">
            <FaqAccordion faqs={home.homeFaqs} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
