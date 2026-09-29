import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { GoldButton } from "@/components/GoldButton";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { getPages } from "@/content/catalog";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const page = getPages(locale).eventManagementOman;
  return pageMetadata({
    locale,
    title: page.title,
    description: page.description,
    path: "/event-management-oman",
  });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale).eventManagementOman;
  const nav = await getTranslations("nav");
  const path = "/event-management-oman";

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: page.title,
          description: page.description,
          path,
          locale,
        })}
      />
      <JsonLd
        data={serviceJsonLd({
          name: page.h1,
          description: page.description,
          path,
          locale,
        })}
      />
      {page.faqs ? <JsonLd data={faqJsonLd(page.faqs)} /> : null}
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: page.crumb, path },
        ]}
      />
      <article className="container-page section pt-10">
        {page.kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold rtl:normal-case rtl:tracking-wide">
            {page.kicker}
          </p>
        ) : null}
        <h1 className="mt-3 font-display text-5xl md:text-6xl">{page.h1}</h1>
        {page.paragraphs?.[0] ? (
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            {page.paragraphs[0]}{" "}
            <Link href="/services/event-management-oman" className="text-gold">
              {locale === "ar" ? "صفحة خدمة إدارة الفعاليات" : "event management service page"}
            </Link>
            .
          </p>
        ) : null}
        {page.paragraphs?.slice(1).map((p) => (
          <p key={p.slice(0, 24)} className="mt-5 max-w-3xl text-muted-foreground">
            {p}
          </p>
        ))}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <GoldButton href={page.primaryCta?.href || "/contact"}>
            {page.primaryCta?.label}
          </GoldButton>
          <GoldButton href={page.secondaryCta?.href || "/services"} variant="ghost">
            {page.secondaryCta?.label}
          </GoldButton>
        </div>
        <section className="mt-16 max-w-3xl">
          <h2 className="font-display text-3xl">{page.sections?.[0]?.heading}</h2>
          <ul className="mt-5 grid gap-2 text-muted-foreground">
            {page.items?.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </section>
        {page.faqs ? (
          <section className="mt-16 max-w-3xl">
            <h2 className="font-display text-3xl">{page.sections?.[1]?.heading}</h2>
            <div className="mt-6">
              <FaqAccordion faqs={page.faqs} />
            </div>
          </section>
        ) : null}
      </article>
      <CtaBanner />
    </>
  );
}
