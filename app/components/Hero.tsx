import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT } from "../lib/contact";

const STAT_CARDS = [
  { value: "Vuosien", label: "Kokemus sähköalalta." },
  { value: "100%", label: "Dokumentoidut käyttöönotot." },
];

export default function Hero() {
  return (
    <section
      id="etusivu"
      className="flex min-h-[calc(100svh-6rem)] items-center bg-white"
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-14 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div>
          <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-[3.25rem]">
            Sähköasennukset, jotka kestävät tarkastelun.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Kodit, yritykset ja teollisuus — kaikki sähkötyöt suunnittelusta
            käyttöönottoon, aina dokumentoituna ja määräysten mukaisesti.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Phone className="h-4 w-4" />Soita nyt
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-black/10 px-7 py-3.5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-secondary)]"
            >
              Pyydä tarjous
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            {STAT_CARDS.map((stat) => (
              <div
                key={stat.label}
                className="max-w-[13rem] rounded-xl bg-[var(--color-primary)]/[0.06] px-5 py-4"
              >
                <div className="text-2xl font-semibold text-[var(--color-primary)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-[var(--color-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <svg
            className="pointer-events-none absolute -left-10 top-1/3 hidden h-40 w-40 -translate-y-1/2 text-[var(--color-primary)]/25 lg:block"
            viewBox="0 0 160 160"
            fill="none"
          >
            <path
              d="M2 20C50 20 20 80 70 80C120 80 90 140 158 140"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/6]">
            <Image
              src="/assets/images/hero/hero-electrician.jpg"
              alt="Sähköasentaja työskentelee jakokeskuksen parissa"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-6 max-w-[15rem] rounded-xl bg-white p-4 shadow-[0_12px_40px_rgba(17,17,17,0.14)] sm:left-8">
            <p className="text-xs leading-relaxed text-[var(--color-muted)]">
              &ldquo;Etelä-Suomen luotettava kumppani sähköurakoinnissa vuosien
              kokemuksella.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
