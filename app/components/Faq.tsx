"use client";

import { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Kuinka nopeasti saan sähköasentajan?",
    answer:
      "Vastaamme yleensä samana tai seuraavana arkipäivänä. Kiireellisissä vikatilanteissa pyrimme järjestämään asentajan mahdollisimman pian.",
  },
  {
    question: "Teettekö myös pienet sähkötyöt?",
    answer:
      "Kyllä, teemme sekä pieniä huoltotöitä että laajempia urakointikohteita kodeissa, yrityksissä ja teollisuudessa.",
  },
  {
    question: "Saanko tarjouksen etukäteen?",
    answer:
      "Kyllä. Annamme aina kirjallisen tarjouksen ennen töiden aloittamista, jotta kustannukset ovat selvillä etukäteen.",
  },
  {
    question: "Toimitatteko käyttöönottopöytäkirjat ja dokumentaation?",
    answer:
      "Kyllä, jokainen kohde dokumentoidaan ja tarkastetaan määräysten mukaisesti, ja saatte kaikki pöytäkirjat käyttöönne.",
  },
  {
    question: "Työskentelettekö myös taloyhtiöiden ja teollisuuden kohteissa?",
    answer: "Kyllä, teemme sähkötöitä kodeista taloyhtiöihin ja teollisuuslaitoksiin asti.",
  },
  {
    question: "Soveltuuko energiaohjaus myös vanhempiin kiinteistöihin?",
    answer: "Kyllä, älykäs kulutuksen ohjaus soveltuu sekä uudis- että saneerauskohteisiin.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="ukk" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl">
              Usein kysytyt kysymykset.
            </h2>
            <p className="mt-4 max-w-sm text-lg font-medium leading-relaxed text-[var(--color-foreground)]">
              Kokosimme vastaukset kysymyksiin, joita yleensä esiintyy sähkötöiden yhteydessä.
            </p>

            <div className="mt-8">
              <p className="text-sm text-[var(--color-muted)]">Etkö löytänyt vastausta?</p>
              <a
                href="#yhteystiedot"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)]"
              >
                Ota yhteyttä <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-black/10">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.question} className="border-b border-black/10">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`text-base font-medium transition-colors sm:text-lg ${
                          isOpen
                            ? "font-semibold text-[var(--color-primary)]"
                            : "text-[var(--color-foreground)]"
                        }`}
                      >
                        {item.question}
                      </span>
                      <Plus
                        className={`h-5 w-5 shrink-0 text-[var(--color-primary)] transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="min-h-0 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
