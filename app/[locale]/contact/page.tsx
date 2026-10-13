import { setRequestLocale, getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProposalForm } from "@/components/ProposalForm";
import { pageMetadata } from "@/lib/seo";
import { getPages } from "@/content/catalog";
import { hasEmail, hasPhone, hasWhatsapp, site } from "@/content/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const page = getPages(locale).contact;
  return pageMetadata({ locale, title: page.title, description: page.description, path: "/contact" });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale).contact;
  const nav = await getTranslations("nav");
  const footer = await getTranslations("footer");

  return (
    <>
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: page.crumb, path: "/contact" },
        ]}
      />
      <section className="container-page section grid gap-12 pt-10 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-5xl">{page.h1}</h1>
          <p className="mt-5 text-muted-foreground">{page.lede}</p>
          <ul className="mt-8 grid gap-2 text-sm text-foreground/80">
            <li>{footer("muscatOman")}</li>
            {hasPhone() ? (
              <li dir="ltr">
                <a href={`tel:${site.phone}`} className="hover:text-gold">
                  +971 54 127 8113
                </a>
              </li>
            ) : null}
            {hasEmail() ? (
              <li dir="ltr">{site.email}</li>
            ) : null}
          </ul>
          {hasPhone() || hasWhatsapp() ? (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {hasPhone() ? (
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:bg-[#e8c07a]"
                >
                  Call Us
                </a>
              ) : null}
              {hasWhatsapp() ? (
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-foreground/35 px-6 py-3 text-sm font-semibold text-foreground hover:border-gold hover:text-gold"
                >
                  WhatsApp Us
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
        <ProposalForm />
      </section>
    </>
  );
}
