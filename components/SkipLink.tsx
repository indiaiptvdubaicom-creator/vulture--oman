import { getTranslations } from "next-intl/server";

export async function SkipLink() {
  const t = await getTranslations("nav");
  return (
    <a
      href="#main"
      className="absolute left-4 top-4 z-[60] -translate-y-24 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-transform focus:translate-y-0 rtl:left-auto rtl:right-4"
    >
      {t("skip")}
    </a>
  );
}
