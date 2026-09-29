import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export async function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const t = await getTranslations("common");
  const locale = await getLocale();
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items, locale)} />
      <nav aria-label={t("breadcrumb")} className="container-page pt-28 text-sm text-muted-foreground">
        <ol className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <li key={item.path} className="flex items-center gap-2">
              {i > 0 ? (
                <span aria-hidden className="inline-block rtl:rotate-180">
                  /
                </span>
              ) : null}
              {i === items.length - 1 ? (
                <span className="text-foreground">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-gold">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
