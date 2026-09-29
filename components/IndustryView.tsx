import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "./Breadcrumbs";
import { CtaBanner } from "./CtaBanner";
import { FaqAccordion } from "./FaqAccordion";
import { JsonLd } from "./JsonLd";
import { faqJsonLd } from "@/lib/schema";
import { getIndustryDoc } from "@/content/catalog";

export async function IndustryView({ slug, locale }: { slug: string; locale: string }) {
  const item = getIndustryDoc(locale, slug);
  if (!item) notFound();
  const t = await getTranslations("common");
  const nav = await getTranslations("nav");

  return (
    <>
      <JsonLd data={faqJsonLd(item.faqs)} />
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: nav("industries"), path: "/industries" },
          { name: item.nav, path: `/industries/${item.slug}` },
        ]}
      />
      <article className="container-page section pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold rtl:normal-case rtl:tracking-wide">
          {t("industry")}
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl">{item.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{item.lede}</p>
        <div className="mt-10 max-w-3xl space-y-5 text-foreground/85">
          {item.body.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <h2 className="mt-14 font-display text-3xl">{t("typicalFormats")}</h2>
        <ul className="mt-4 grid gap-2 text-muted-foreground">
          {item.formats.map((f) => (
            <li key={f}>— {f}</li>
          ))}
        </ul>
        <h2 className="mt-14 font-display text-3xl">{t("whatWePlan")}</h2>
        <ul className="mt-4 grid gap-2 text-muted-foreground">
          {item.considerations.map((f) => (
            <li key={f}>— {f}</li>
          ))}
        </ul>
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
            <h2 className="font-display text-2xl text-gold">{t("locations")}</h2>
            <ul className="mt-4 grid gap-2">
              {item.relatedLocations.map((l) => (
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
