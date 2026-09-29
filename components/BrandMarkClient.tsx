"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function BrandMarkClient({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("brand");

  return (
    <Link href="/" className="flex items-center gap-3" aria-label={t("homeAria")}>
      <svg
        width={compact ? 36 : 44}
        height={compact ? 36 : 44}
        viewBox="0 0 44 44"
        aria-hidden="true"
      >
        <rect width="44" height="44" rx="8" fill="#100c0a" />
        <path
          d="M22 8c1.2 4.6 3.8 8 8.6 10.2-3.4 1.2-6.2 3.4-8.6 6.8-2.4-3.4-5.2-5.6-8.6-6.8C18.2 16 20.8 12.6 22 8Z"
          fill="#deae62"
        />
        <path
          d="M10 28.5c4.2-1.6 8.2-.6 12 2.8 3.8-3.4 7.8-4.4 12-2.8-1.8 4.6-5.8 7.2-12 8.2-6.2-1-10.2-3.6-12-8.2Z"
          fill="#deae62"
          opacity="0.85"
        />
      </svg>
      <span className="leading-tight">
        <span className="block font-display text-lg font-semibold tracking-wide text-gold sm:text-xl">
          {t("short")}
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground rtl:normal-case rtl:tracking-wide">
          {t("market")}
        </span>
      </span>
    </Link>
  );
}
