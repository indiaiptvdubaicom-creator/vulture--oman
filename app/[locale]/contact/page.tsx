import { setRequestLocale, getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProposalForm } from "@/components/ProposalForm";
import { pageMetadata } from "@/lib/seo";
import { getPages } from "@/content/catalog";
import { hasEmail, hasPhone, site } from "@/content/site";

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
              <li dir="ltr">{site.phone}</li>
            ) : null}
            {hasEmail() ? (
              <li dir="ltr">{site.email}</li>
            ) : null}
          </ul>
        </div>
        <ProposalForm />
      </section>
    </>
  );
}
