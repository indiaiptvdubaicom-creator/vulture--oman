"use client";

import { useState } from "react";

export function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((faq, i) => {
        const expanded = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={faq.q}>
            <h3>
              <button
                type="button"
                id={buttonId}
                className="flex w-full items-center justify-between gap-4 py-5 text-start font-display text-xl"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : i)}
              >
                <span className="min-w-0 flex-1">{faq.q}</span>
                <span aria-hidden className="shrink-0 text-gold">
                  {expanded ? "−" : "+"}
                </span>
              </button>
            </h3>
            <p
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!expanded}
              className="pb-5 text-muted-foreground"
            >
              {faq.a}
            </p>
          </div>
        );
      })}
    </div>
  );
}
