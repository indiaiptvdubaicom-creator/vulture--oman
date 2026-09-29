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
  const page = getPages(locale).eventProductionOman;
  return pageMetadata({
    locale,
    title: page.title,
    description: page.description,
    path: "/event-production-oman",
  });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale).eventProductionOman;
  const nav = await getTranslations("nav");
  const path = "/event-production-oman";

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
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          {locale === "ar" ? (
            <>
              هذه الصفحة عرض لوضع طاقم تقني ومنادٍ للعرض في القاعة. للمنهج الإنتاجي الأطول — المخططات وثقافة البروفة وأطقم السفر — انظر{" "}
              <Link href="/services/event-production-oman" className="text-gold">
                خدمات إنتاج الفعاليات
              </Link>
              .
            </>
          ) : (
            <>
              This page is the offer to put a technical crew and a show-caller in the room. For the
              longer production method — plots, rehearsal culture, travelling kits — see{" "}
              <Link href="/services/event-production-oman" className="text-gold">
                event production services
              </Link>
              .
            </>
          )}
        </p>
        <p className="mt-5 max-w-3xl text-muted-foreground">{page.paragraphs?.[1]}</p>
        <p className="mt-5 max-w-3xl text-muted-foreground">
          {locale === "ar" ? (
            <>
              إذا احتجت مسار الضيف كاملاً — التسجيل والبروتوكول والضيافة والتفكيك — فابدأ بـ{" "}
              <Link href="/event-management-oman" className="text-gold">
                تعيين إدارة الفعاليات
              </Link>
              . ويبقى الإنتاج داخل ذلك الموجز.
            </>
          ) : (
            <>
              If you need the whole guest journey — registration, protocol, hospitality, teardown —
              start with{" "}
              <Link href="/event-management-oman" className="text-gold">
                hiring event management
              </Link>
              . Production still sits inside that brief.
            </>
          )}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <GoldButton href={page.primaryCta?.href || "/contact"}>{page.primaryCta?.label}</GoldButton>
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
