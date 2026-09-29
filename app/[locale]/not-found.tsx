import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <section className="container-page flex min-h-[70vh] flex-col justify-center pt-32">
      <p className="text-sm tracking-[0.25em] text-gold">{t("code")}</p>
      <h1 className="mt-3 font-display text-5xl">{t("title")}</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">{t("body")}</p>
      <Link href="/" className="mt-8 text-gold">
        {t("home")}
      </Link>
    </section>
  );
}
