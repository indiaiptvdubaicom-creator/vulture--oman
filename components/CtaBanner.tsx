import { getTranslations } from "next-intl/server";
import { GoldButton } from "./GoldButton";

export async function CtaBanner() {
  const t = await getTranslations("cta");
  return (
    <section className="section bg-linear-to-r from-[#1a1512] to-[#23180f]">
      <div className="container-page text-center">
        <h2 className="font-display text-4xl md:text-5xl">{t("heading")}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t("body")}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <GoldButton href="/contact">{t("proposal")}</GoldButton>
          <GoldButton href="/services" variant="ghost">
            {t("services")}
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
