import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqAccordion } from "./FaqAccordion";
import { CtaBanner } from "./CtaBanner";
import { JsonLd } from "./JsonLd";
import { faqJsonLd, serviceJsonLd } from "@/lib/schema";
import type { ServiceDoc } from "@/content/types";

export async function ServiceView({
  service,
  path,
  locale,
}: {
  service: ServiceDoc;
  path: string;
  locale: string;
}) {
  const t = await getTranslations("common");
  const nav = await getTranslations("nav");
  const crumbs = [
    { name: nav("home"), path: "/" },
    { name: nav("services"), path: "/services" },
    { name: service.nav, path },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd
        data={serviceJsonLd({
          name: service.h1,
          description: service.description,
          path,
          locale,
        })}
      />
      <Breadcrumbs items={crumbs} />
      <article className="container-page section pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold rtl:normal-case rtl:tracking-wide">
          {t("service")}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl md:text-6xl">{service.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{service.lede}</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {service.overview.map((p) => (
              <p key={p.slice(0, 40)} className="text-foreground/85">
                {p}
              </p>
            ))}
          </div>
          <aside className="rounded-sm border border-border bg-card p-6">
            <h2 className="font-display text-2xl text-gold">{t("whoFor")}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{service.audience}</p>
          </aside>
        </div>

        <section className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">{t("includes")}</h2>
            <ul className="mt-5 grid gap-2 text-muted-foreground">
              {service.includes.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl">{t("capabilities")}</h2>
            <ul className="mt-5 grid gap-2 text-muted-foreground">
              {service.capabilities.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl">{t("formats")}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.formats.map((item) => (
              <span key={item} className="rounded-full border border-gold/30 px-4 py-1.5 text-sm">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl">{t("omanNotes")}</h2>
          <div className="mt-5 space-y-4 text-muted-foreground">
            {service.oman.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl">{t("approach")}</h2>
          <div className="mt-5 space-y-4 text-muted-foreground">
            {service.approach.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl text-gold">{t("relatedServices")}</h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {service.relatedServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-gold">{t("industries")}</h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {service.relatedIndustries.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-gold">{t("locations")}</h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {service.relatedLocations.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="font-display text-3xl">{t("questions")}</h2>
          <div className="mt-6">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </section>
      </article>
      <CtaBanner />
    </>
  );
}
