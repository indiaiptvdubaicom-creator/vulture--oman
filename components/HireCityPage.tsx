import { setRequestLocale, getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBanner } from "@/components/CtaBanner";
import { GoldButton } from "@/components/GoldButton";
import { pageMetadata } from "@/lib/seo";
import { getPages } from "@/content/catalog";
import type { StaticPage } from "@/content/pages";

type Key = "eventManagementMuscat" | "eventManagementSalalah" | "eventManagementSohar";

const PATHS: Record<Key, string> = {
  eventManagementMuscat: "/event-management-muscat",
  eventManagementSalalah: "/event-management-salalah",
  eventManagementSohar: "/event-management-sohar",
};

export async function HireCityPage({
  params,
  pageKey,
}: {
  params: Promise<{ locale: string }>;
  pageKey: Key;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = getPages(locale)[pageKey] as StaticPage;
  const nav = await getTranslations("nav");
  const path = PATHS[pageKey];
  return (
    <>
      <Breadcrumbs
        items={[
          { name: nav("home"), path: "/" },
          { name: page.crumb, path },
        ]}
      />
      <article className="container-page section pt-10">
        <h1 className="font-display text-5xl md:text-6xl">{page.h1}</h1>
        {page.paragraphs?.map((p, i) => (
          <p
            key={p.slice(0, 24)}
            className={`mt-5 max-w-3xl ${i === 0 ? "mt-6 text-lg text-muted-foreground" : "text-muted-foreground"}`}
          >
            {p}
          </p>
        ))}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <GoldButton href={page.primaryCta?.href || "/contact"}>{page.primaryCta?.label}</GoldButton>
          <GoldButton href={page.secondaryCta?.href || "/locations"} variant="ghost">
            {page.secondaryCta?.label}
          </GoldButton>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}

export function hireMetadata(locale: string, pageKey: Key) {
  const page = getPages(locale)[pageKey] as StaticPage;
  return pageMetadata({
    locale,
    title: page.title,
    description: page.description,
    path: PATHS[pageKey],
  });
}
