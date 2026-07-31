"use client";

import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Erittäin ammattitaitoinen toiminta — se mitä luvattiin, se myös pidettiin ja asiakkaana olin koko ajan tietoinen toteuttamisaikataulusta.",
    author: "Matti Virtanen",
    role: "Asiakasarvostelu",
    initials: "MV",
  },
  {
    quote:
      "Isot kiitokset nopeasta ja ammattitaitoisesta asennuksesta. Suosittelen lämpimästi!",
    author: "Laura Nieminen",
    role: "Asiakasarvostelu",
    initials: "LN",
  },
  {
    quote:
      "Kohteliasta, nopeaa ja hyvää palvelua. Asiantuntevaa apua vuorokauden ajasta riippumatta. Suosittelen.",
    author: "Sari Korhonen",
    role: "Asiakasarvostelu",
    initials: "SK",
  },
  {
    quote:
      "Erittäin hyvä, nopea ja ammattitaitoinen palvelu. Kaikki meni suunnitelmien mukaan ja ratkaisu toimii kuten pitää.",
    author: "Jukka Lehtonen",
    role: "Asiakasarvostelu",
    initials: "JL",
  },
  {
    quote:
      "Ammattitaitoinen, reipas ja työnsä osaava. Teki sen minkä lupasi. Voin suositella.",
    author: "Anna Heikkinen",
    role: "Asiakasarvostelu",
    initials: "AH",
  },
  {
    quote:
      "Nopea, ammattitaitoinen ja ystävällinen palvelu! Jälki priimaa, hyvät ja toimivat ratkaisut.",
    author: "Timo Salminen",
    role: "Asiakasarvostelu",
    initials: "TS",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-[var(--color-secondary)] px-4 py-2 text-sm">
              <span className="flex text-[var(--color-primary)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </span>
              <span className="font-semibold text-[var(--color-foreground)]">5,0</span>
              <span className="text-[var(--color-muted)]">· esimerkkiarvosteluja</span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl">
              Mitä asiakkaamme sanovat.
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-[var(--color-muted)]">
              Asiakkaidemme luottamus ansaitaan jokaisessa työssä — oli kyse kodista, taloyhtiöstä tai yrityksestä.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative rounded-2xl bg-[var(--color-secondary)] px-8 py-12 sm:px-14 sm:py-16">
              <Quote
                className="pointer-events-none absolute left-6 top-4 h-24 w-24 text-[var(--color-primary)]/10 sm:h-32 sm:w-32"
                strokeWidth={1}
              />
              <div className="relative flex text-[var(--color-primary)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="relative mt-6 max-w-2xl text-xl font-medium leading-relaxed text-[var(--color-foreground)] sm:text-2xl">
                {active.quote}
              </p>
              <div className="relative mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                  {active.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-foreground)]">
                    {active.author}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">{active.role}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Edellinen arvostelu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Seuraava arvostelu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
