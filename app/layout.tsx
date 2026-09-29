import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Naskh_Arabic, Noto_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import { htmlLang, isRtl, ogLocale } from "@/i18n/routing";
import { site } from "@/content/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-display-next",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-next",
  display: "swap",
});

const arabicSans = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic-sans",
  display: "swap",
  preload: false,
});

const arabicDisplay = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["500", "600", "700"],
  variable: "--font-arabic-display",
  display: "swap",
  preload: false,
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(site.url),
    title: {
      default: t("titleDefault"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: ogLocale(locale),
      siteName: site.name,
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "meta" });
  const dir = isRtl(locale) ? "rtl" : "ltr";
  const latinFonts = `${display.variable} ${sans.variable}`;
  const fonts = dir === "rtl" ? `${latinFonts} ${arabicSans.variable} ${arabicDisplay.variable}` : latinFonts;
  const clientMessages = {
    nav: messages.nav,
    brand: messages.brand,
    form: messages.form,
    common: messages.common,
  };

  return (
    <html
      lang={htmlLang(locale)}
      dir={dir}
      className={fonts}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <NextIntlClientProvider locale={locale} messages={clientMessages as typeof messages} timeZone="Asia/Muscat">
          <JsonLd data={organizationJsonLd(locale, t("description"))} />
          <JsonLd data={websiteJsonLd(locale, t("description"))} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
