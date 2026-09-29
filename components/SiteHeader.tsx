"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { BrandMarkClient } from "./BrandMarkClient";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/industries", key: "industries" },
  { href: "/locations", key: "locations" },
  { href: "/blog", key: "blog" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = pathname !== "/" || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        solid ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4 py-5">
        <BrandMarkClient />
        <nav className="hidden items-center gap-4 lg:flex xl:gap-5" aria-label={t("primary")}>
          {NAV.map((item) => {
            const current = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                aria-current={current ? "page" : undefined}
                className={`text-sm ${current ? "text-gold" : "text-foreground/85 hover:text-gold"}`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            prefetch={false}
            className="inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground hover:bg-[#e8c07a]"
          >
            {t("proposal")}
          </Link>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
            <span aria-hidden className="grid gap-1.5">
              <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-50 bg-background/96 px-6 py-6 backdrop-blur-md lg:hidden"
        >
          <div className="mb-8 flex items-center justify-between gap-3">
            <BrandMarkClient compact />
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <button
                type="button"
                className="h-11 w-11 rounded-full border border-border"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">{t("closeMenu")}</span>
                ×
              </button>
            </div>
          </div>
          <nav className="grid gap-4" aria-label={t("mobile")}>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className="font-display text-3xl text-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/contact"
              prefetch={false}
              className="mt-4 inline-flex justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
            >
              {t("proposal")}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
