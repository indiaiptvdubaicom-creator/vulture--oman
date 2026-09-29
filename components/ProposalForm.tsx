"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const EVENT_TYPES = [
  ["conference", "Conference"],
  ["corporate", "Corporate event"],
  ["exhibition", "Exhibition"],
  ["launch", "Product launch"],
  ["government", "Government / official"],
  ["gala", "Gala / awards"],
  ["wedding", "Wedding / private"],
  ["destination", "Destination programme"],
  ["festival", "Festival / cultural"],
  ["other", "Other"],
] as const;

const BUDGETS = [
  ["discuss", "To be discussed"],
  ["under5", "Under OMR 5,000"],
  ["mid", "OMR 5,000–15,000"],
  ["upper", "OMR 15,000–40,000"],
  ["plus", "OMR 40,000+"],
] as const;

const SERVICES = [
  ["management", "Event management"],
  ["production", "Production / AV"],
  ["stand", "Exhibition stand"],
  ["staffing", "Staffing"],
  ["hospitality", "Hospitality"],
  ["branding", "Branding"],
  ["entertainment", "Entertainment"],
] as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ProposalForm() {
  const t = useTranslations("form");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_website") || "").trim()) {
      setStatus("ok");
      return;
    }

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const eventType = String(data.get("eventType") || "").trim();
    if (!name) {
      setStatus("error");
      setMessage(t("errorName"));
      return;
    }
    if (!EMAIL.test(email)) {
      setStatus("error");
      setMessage(t("errorEmail"));
      return;
    }
    if (!eventType) {
      setStatus("error");
      setMessage(t("errorType"));
      return;
    }

    const payload = {
      ...Object.fromEntries(data.entries()),
      name,
      email,
      services: data.getAll("services").map(String),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/proposal", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(t("errorSend"));
    }
  }

  if (status === "ok") {
    return (
      <p className="rounded-sm border border-gold/40 bg-card p-8 text-lg" role="status">
        {t("success")}
      </p>
    );
  }

  const field = "mt-2 w-full rounded-sm border border-border bg-input px-4 py-3 text-start text-foreground";
  const label = "block text-sm font-medium";

  return (
    <form onSubmit={onSubmit} className="grid gap-6" noValidate>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <p>
          <label htmlFor="name" className={label}>
            {t("name")}
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </p>
        <p>
          <label htmlFor="company" className={label}>
            {t("company")}
          </label>
          <input id="company" name="company" autoComplete="organization" className={field} />
        </p>
        <p>
          <label htmlFor="email" className={label}>
            {t("email")}
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} dir="ltr" />
        </p>
        <p>
          <label htmlFor="phone" className={label}>
            {t("phone")}
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} dir="ltr" />
        </p>
        <p>
          <label htmlFor="eventType" className={label}>
            {t("eventType")}
          </label>
          <select id="eventType" name="eventType" required className={field}>
            <option value="">{t("select")}</option>
            {EVENT_TYPES.map(([key, value]) => (
              <option key={key} value={value}>
                {t(`types.${key}`)}
              </option>
            ))}
          </select>
        </p>
        <p>
          <label htmlFor="eventDate" className={label}>
            {t("eventDate")}
          </label>
          <input id="eventDate" name="eventDate" type="date" className={field} />
        </p>
        <p>
          <label htmlFor="eventLocation" className={label}>
            {t("eventLocation")}
          </label>
          <input
            id="eventLocation"
            name="eventLocation"
            placeholder={t("locationPlaceholder")}
            className={field}
          />
        </p>
        <p>
          <label htmlFor="guests" className={label}>
            {t("guests")}
          </label>
          <input id="guests" name="guests" inputMode="numeric" className={field} />
        </p>
      </div>
      <fieldset>
        <legend className={label}>{t("requiredServices")}</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {SERVICES.map(([key, value]) => (
            <label key={key} className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="services" value={value} className="accent-gold" />
              {t(`services.${key}`)}
            </label>
          ))}
        </div>
      </fieldset>
      <p>
        <label htmlFor="budget" className={label}>
          {t("budget")}
        </label>
        <select id="budget" name="budget" className={field}>
          {BUDGETS.map(([key, value]) => (
            <option key={key} value={value}>
              {t(`budgets.${key}`)}
            </option>
          ))}
        </select>
      </p>
      <p>
        <label htmlFor="message" className={label}>
          {t("message")}
        </label>
        <textarea id="message" name="message" rows={5} className={field} />
      </p>
      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:bg-[#e8c07a] disabled:opacity-60"
      >
        {status === "sending" ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
