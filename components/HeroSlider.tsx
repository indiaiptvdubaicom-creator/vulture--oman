"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export type HeroSlide = {
  eyebrow: string;
  headline: string;
  support: string;
  cta: string;
  ctaHref: string;
  image: string;
  alt: string;
};

const DWELL = 6500;
const INTERACTIVE = new Set(["INPUT", "TEXTAREA", "BUTTON", "SELECT", "A"]);

export function HeroSlider({ slides, homeTitle }: { slides: HeroSlide[]; homeTitle: string }) {
  const t = useTranslations("common");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [warm, setWarm] = useState(false);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    const idle = window.setTimeout(() => setWarm(true), 1200);
    return () => {
      mq.removeEventListener("change", onChange);
      window.clearTimeout(idle);
    };
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(next, DWELL);
    return () => window.clearInterval(id);
  }, [paused, reduced, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag && INTERACTIVE.has(tag)) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") {
        e.preventDefault();
        setPaused((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const live = paused || reduced ? "polite" : "off";
  const slide = slides[index];

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden"
      aria-roledescription="carousel"
      aria-label={t("carousel")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
      onTouchStart={(e) => {
        touchStart.current = e.changedTouches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStart.current == null) return;
        const delta = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(delta) > 50) {
          if (delta < 0) next();
          else prev();
        }
        touchStart.current = null;
      }}
    >
      {slides.map((item, i) => {
        const nearby =
          i === index ||
          (warm &&
            (i === (index + 1) % slides.length || i === (index - 1 + slides.length) % slides.length));
        return (
          <div
            key={item.headline}
            id={`hero-slide-${i}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${slides.length}`}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== index}
          >
            {nearby ? (
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority={i === 0 && index === 0}
                fetchPriority={i === index ? "high" : "low"}
                quality={65}
                sizes="100vw"
                className={`object-cover ${i === index && !reduced ? "animate-slowzoom" : "scale-100"}`}
              />
            ) : null}
            <div className="absolute inset-0 bg-linear-to-b from-background/35 via-background/55 to-background/92" />
          </div>
        );
      })}

      <div className="relative z-10 flex min-h-[100svh] items-end pb-24 pt-32 md:items-center md:pb-0">
        <div className="container-page max-w-3xl">
          <h1 className="sr-only">{homeTitle}</h1>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold rtl:normal-case rtl:tracking-wide">
            {slide.eyebrow}
          </p>
          <p
            className="mt-4 font-display text-4xl font-semibold leading-[1.15] text-foreground md:text-6xl"
            aria-live={live}
          >
            {slide.headline}
          </p>
          <p className="mt-5 max-w-xl text-base text-foreground/80 md:text-lg">{slide.support}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={slide.ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:bg-[#e8c07a]"
            >
              {slide.cta}
              <span aria-hidden className="inline-block rtl:rotate-180">
                →
              </span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-foreground/35 px-6 py-3 text-sm font-semibold text-foreground hover:border-gold hover:text-gold"
            >
              {t("viewCapabilities")}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10">
        <div className="container-page flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label={t("slides")}>
            {slides.map((item, i) => (
              <button
                key={item.headline}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-controls={`hero-slide-${i}`}
                aria-label={`${t("showSlide")} ${i + 1}: ${item.headline}`}
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-2.5 bg-foreground/35"}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-foreground/30 text-foreground"
              onClick={prev}
              aria-label={t("prevSlide")}
            >
              <span aria-hidden className="inline-block rtl:rotate-180">
                ‹
              </span>
            </button>
            {!reduced ? (
              <button
                type="button"
                className="grid h-11 min-w-11 place-items-center rounded-full border border-foreground/30 px-3 text-xs font-semibold uppercase tracking-wider text-foreground rtl:normal-case rtl:tracking-wide"
                onClick={() => setPaused((p) => !p)}
                aria-pressed={paused}
                aria-label={paused ? t("play") : t("pause")}
              >
                {paused ? t("play") : t("pause")}
              </button>
            ) : null}
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-foreground/30 text-foreground"
              onClick={next}
              aria-label={t("nextSlide")}
            >
              <span aria-hidden className="inline-block rtl:rotate-180">
                ›
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
