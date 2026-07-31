import Image from "next/image";
import { MapPin, CheckCircle2, Home, Building2, Factory, Building } from "lucide-react";
import { sectionH2Class, sectionLedeClass } from "../lib/sectionTypography";

const INDUSTRY_BADGE = {
  Koti: Home,
  Yritys: Building2,
  Teollisuus: Factory,
  Taloyhtiö: Building,
} as const;

const REFERENCE_PROJECTS = [
  {
    tag: "Yritys" as const,
    title: "Liikekiinteistön sähköremontti",
    location: "Pääkaupunkiseutu",
    image: "/assets/images/references/liikekiinteisto.webp",
    summary:
      "Toimitilan koko sähköjärjestelmän uusiminen käytön aikana, ilman häiriötä vuokralaisten arkeen.",
    items: [
      "Jakokeskusten uusiminen",
      "Valaistuksen modernisointi",
      "Käyttöönottomittaukset",
      "Täysi dokumentointi",
    ],
  },
  {
    tag: "Teollisuus" as const,
    title: "Tehtaan sähköasennus",
    location: "Etelä-Suomi",
    image: "/assets/images/references/tehdas.webp",
    summary:
      "Tuotantolinjan sähköistys ja automaatioliitännät toteutettuna tuotantokatkoja minimoiden.",
    items: [
      "Tuotantolinjan sähköistys",
      "Kaapelihyllyasennukset",
      "Automaatiojärjestelmän liitännät",
      "Turvallisuustarkastukset",
    ],
  },
  {
    tag: "Taloyhtiö" as const,
    title: "Kerrostalon linjasaneeraus",
    location: "Pääkaupunkiseutu",
    image: "/assets/images/references/kerrostalo.webp",
    summary:
      "Koko kiinteistön sähkölinjojen ja yleisten tilojen valaistuksen uusiminen asukkaita kuunnellen.",
    items: [
      "Sähkölinjojen uusiminen",
      "Yleisten tilojen valaistus",
      "Mittarikeskusten päivitys",
      "Käyttöönottopöytäkirjat",
    ],
  },
  {
    tag: "Yritys" as const,
    title: "Toimiston sähköjärjestelmät",
    location: "Etelä-Suomi",
    image: "/assets/images/references/toimisto.webp",
    summary:
      "Avotoimiston sähkösuunnittelu ja asennus, dokumentoituna käyttöönottoon asti.",
    items: [
      "Sähkösuunnittelu",
      "Avotoimiston asennukset",
      "Verkko- ja sähköinfran yhdistäminen",
      "Dokumentointi käyttöönottoon",
    ],
  },
];

export default function References() {
  return (
    <section id="referenssit" className="bg-[var(--color-secondary)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className={sectionH2Class}>Toteutettuja projekteja.</h2>
            <p className={sectionLedeClass}>
              Kiinteistöistä teollisuuslaitoksiin — jokainen kohde dokumentoitu ja
              tarkastettu.
            </p>
          </div>
          <span className="shrink-0 text-sm font-medium text-[var(--color-muted)]">
            +200 toteutettua kohdetta
          </span>
        </div>

        <div className="mt-16 flex flex-col gap-16 lg:gap-20">
          {REFERENCE_PROJECTS.map((project, index) => {
            const BadgeIcon = INDUSTRY_BADGE[project.tag];
            const reversed = index % 2 === 1;
            return (
              <article
                key={project.title}
                className={`flex flex-col overflow-hidden rounded-2xl md:flex-row md:items-stretch ${
                  reversed ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="relative aspect-[16/10] md:aspect-auto md:w-[65%]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 65vw"
                    quality={70}
                    className="object-cover"
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[var(--color-foreground)] shadow-sm">
                    <BadgeIcon className="h-3.5 w-3.5 text-[var(--color-primary)]" strokeWidth={2} />
                    {project.tag}
                  </span>
                </div>

                <div className="flex flex-col justify-center bg-[var(--color-primary)] p-8 sm:p-10 md:w-[35%]">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-white/85">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {project.summary}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {project.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#yhteystiedot"
                    className="mt-5 inline-block text-sm font-semibold text-white underline underline-offset-4"
                  >
                    Lue lisää →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
