"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { localizedPath } from "@/i18n/routing";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("nav");
  const enHref = localizedPath("en", pathname);
  const arHref = localizedPath("ar", pathname);

  return (
    <nav
      aria-label={t("language")}
      className={`flex items-center gap-2 text-sm font-semibold ${className}`}
    >
      <a
        href={enHref}
        hrefLang="en-OM"
        aria-current={locale === "en" ? "true" : undefined}
        aria-label={t("switchToEnglish")}
        className={`rounded-sm px-1 py-1 focus-visible:outline-offset-4 ${
          locale === "en" ? "text-gold" : "text-foreground/80 hover:text-gold"
        }`}
      >
        {t("en")}
      </a>
      <span aria-hidden className="text-muted-foreground">
        |
      </span>
      <a
        href={arHref}
        hrefLang="ar-OM"
        lang="ar"
        aria-current={locale === "ar" ? "true" : undefined}
        aria-label={t("switchToArabic")}
        className={`rounded-sm px-1 py-1 focus-visible:outline-offset-4 ${
          locale === "ar" ? "text-gold" : "text-foreground/80 hover:text-gold"
        }`}
      >
        {t("ar")}
      </a>
    </nav>
  );
}
