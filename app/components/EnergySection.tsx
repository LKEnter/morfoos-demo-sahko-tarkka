import Image from "next/image";
import { CheckCircle2, Gauge, ArrowRight } from "lucide-react";

const OUTCOMES = [
  "Siirtää kulutuksen edullisille tunneille",
  "Pienentää sähkölaskua automaattisesti",
  "Etäohjaus ja kulutuksen seuranta",
  "Soveltuu uudis- ja saneerauskohteisiin",
];

export default function EnergySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-2">
          <div className="relative min-h-[18rem] bg-[var(--color-secondary)] lg:min-h-full">
            <Image
              src="/assets/images/services/energiaohjaus-device.jpg"
              alt="Älykäs ohjausyksikkö optimoi sähkönkulutusta"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/90 shadow-[0_8px_30px_rgba(17,17,17,0.25)] backdrop-blur-sm">
                <Gauge className="h-12 w-12 text-[var(--color-primary)]" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-foreground)] p-10 sm:p-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-light)]">
              Älykäs kulutuksen ohjaus
            </span>
            <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight text-white leading-tight md:text-4xl">
              Säästä sähkölaskussa automaattisesti.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
              Energiaohjausjärjestelmä ohjaa lämmityksen ja muun kulutuksen
              automaattisesti pörssisähkön halvimpiin tunteihin — asennettuna suoraan
              sähkökeskukseen.
            </p>

            <ul className="mt-7 space-y-3">
              {OUTCOMES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary-light)]" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#yhteystiedot"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Tutustu energiaohjaukseen <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
