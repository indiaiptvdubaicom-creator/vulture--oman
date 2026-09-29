import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BrandMark } from "./BrandMark";
import {
  getFooterExplore,
  getFooterLocations,
  getFooterServices,
} from "@/content/chrome";
import { hasAddress, hasEmail, hasPhone, site } from "@/content/site";

export async function SiteFooter() {
  const locale = await getLocale();
  const t = await getTranslations("footer");
  const explore = getFooterExplore(locale);
  const services = getFooterServices(locale);
  const locations = getFooterLocations(locale);

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <BrandMark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">{t("blurb")}</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-gold">{t("explore")}</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} prefetch={false} className="text-foreground/80 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl text-gold">{t("ourServices")}</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} prefetch={false} className="text-foreground/80 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl text-gold">{t("getInTouch")}</h2>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
            <li>{t("muscatOman")}</li>
            {hasAddress() ? <li>{site.address}</li> : null}
            {hasPhone() ? (
              <li>
                <a href={`tel:${site.phone}`} className="hover:text-gold" dir="ltr">
                  {site.phone}
                </a>
              </li>
            ) : null}
            {hasEmail() ? (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold" dir="ltr">
                  {site.email}
                </a>
              </li>
            ) : (
              <li>
                <Link href="/contact" prefetch={false} className="hover:text-gold">
                  {t("requestProposal")}
                </Link>
              </li>
            )}
          </ul>
          <h2 className="mt-8 font-display text-xl text-gold">{t("locations")}</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {locations.map((item) => (
              <li key={item.href}>
                <Link href={item.href} prefetch={false} className="text-foreground/80 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Vulture Events Oman. {t("rights")}
          </p>
          <p className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" prefetch={false} className="hover:text-gold">
              {t("privacy")}
            </Link>
            <Link href="/terms" prefetch={false} className="hover:text-gold">
              {t("terms")}
            </Link>
            <Link href="/cookie-policy" prefetch={false} className="hover:text-gold">
              {t("cookies")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
