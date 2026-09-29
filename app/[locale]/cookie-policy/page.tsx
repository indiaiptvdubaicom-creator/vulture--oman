import { setRequestLocale, getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { getPages } from "@/content/catalog";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const page = getPages(locale).cookies;
  return pageMetadata({ locale, title: page.title, description: page.description, path: "/cookie-policy" });
}

export default async function CookiePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale).cookies;
  const nav = await getTranslations("nav");
  return (
    <>
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: page.crumb, path: "/cookie-policy" },
        ]}
      />
      <article className="container-page section max-w-3xl pt-10">
        <h1 className="font-display text-5xl">{page.h1}</h1>
        <div className="mt-8 space-y-4 text-muted-foreground">
          {page.paragraphs?.map((p) => (
            <p key={p.slice(0, 28)}>{p}</p>
          ))}
        </div>
      </article>
    </>
  );
}
