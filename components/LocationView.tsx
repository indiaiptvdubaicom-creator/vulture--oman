import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "./Breadcrumbs";
import { CtaBanner } from "./CtaBanner";
import { FaqAccordion } from "./FaqAccordion";
import { JsonLd } from "./JsonLd";
import { faqJsonLd } from "@/lib/schema";
import { getLocationDoc } from "@/content/catalog";

export async function LocationView({ slug, locale }: { slug: string; locale: string }) {
  const item = getLocationDoc(locale, slug);
  if (!item) notFound();
  const t = await getTranslations("common");
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd data={faqJsonLd(item.faqs)} />
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: nav("locations"), path: "/locations" },
          { name: item.name, path: `/locations/${item.slug}` },
        ]}
      />
      <article className="container-page section pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold rtl:normal-case rtl:tracking-wide">
          {t("location")}
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl">{item.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{item.lede}</p>
        <h2 className="mt-14 font-display text-3xl">{t("opportunities")}</h2>
        <ul className="mt-4 grid gap-3 text-muted-foreground">
          {item.opportunities.map((f) => (
            <li key={f.slice(0, 24)}>— {f}</li>
          ))}
        </ul>
        <h2 className="mt-14 font-display text-3xl">{t("venueNotes")}</h2>
        <div className="mt-4 space-y-4 text-muted-foreground">
          {item.venues.map((f) => (
            <p key={f.slice(0, 24)}>{f}</p>
          ))}
        </div>
        <h2 className="mt-14 font-display text-3xl">{t("logistics")}</h2>
        <ul className="mt-4 grid gap-3 text-muted-foreground">
          {item.logistics.map((f) => (
            <li key={f.slice(0, 24)}>— {f}</li>
          ))}
        </ul>
        <h2 className="mt-14 font-display text-3xl">{t("eventTypes")}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.eventTypes.map((f) => (
            <span key={f} className="rounded-full border border-gold/30 px-4 py-1.5 text-sm">
              {f}
            </span>
          ))}
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-gold">{t("relatedServices")}</h2>
            <ul className="mt-4 grid gap-2">
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
            <h2 className="font-display text-2xl text-gold">{t("industries")}</h2>
            <ul className="mt-4 grid gap-2">
              {item.relatedIndustries.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 max-w-3xl">
          <h2 className="font-display text-3xl">{t("questions")}</h2>
          <div className="mt-6">
            <FaqAccordion faqs={item.faqs} />
          </div>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
