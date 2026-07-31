import Image from "next/image";
import { Zap, Wrench, Factory, Building, PenTool, Gauge, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Zap,
    title: "Sähköurakointi",
    description: "Avaimet käteen -periaatteella toteutetut uudis- ja saneerauskohteet.",
    image: "/assets/images/services/sahkourakointi.webp",
  },
  {
    icon: Wrench,
    title: "Huollot ja vikakorjaukset",
    description: "Ennakoiva huolto ja nopeat vikakorjaukset kotitalouksille ja yrityksille.",
    image: "/assets/images/services/huollot.webp",
  },
  {
    icon: Factory,
    title: "Teollisuuden sähkötyöt",
    description: "Tuotantolinjojen, jakokeskusten ja teollisuusautomaation sähköasennukset.",
    image: "/assets/images/services/teollisuus.webp",
  },
  {
    icon: Building,
    title: "Taloyhtiöt",
    description: "Linjasaneeraukset, yleisten tilojen sähkötyöt ja ylläpitosopimukset.",
    image: "/assets/images/services/taloyhtiot.webp",
  },
  {
    icon: PenTool,
    title: "Suunnittelu",
    description: "Sähkösuunnittelu ja dokumentointi kohteisiin, joissa vaaditaan jäljitettävyyttä.",
    image: "/assets/images/services/suunnittelu.webp",
  },
  {
    icon: Gauge,
    title: "Energiaratkaisut & ohjaus",
    description: "Energiaoptimointi ja älykäs kulutuksen ohjaus kodeissa ja kiinteistöissä.",
    image: "/assets/images/services/energiaohjaus.webp",
  },
];

export default function Services() {
  return (
    <section id="palvelut" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl">
            Kaikki sähkötyöt ammattitaidolla.
          </h2>
          <a
            href="#yhteystiedot"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)]"
          >
            Kaikki palvelut <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description, image }) => (
            <div
              key={title}
              className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-shadow hover:shadow-[0_16px_40px_rgba(17,17,17,0.08)]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  loading="lazy"
                  quality={70}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 380px"
                  className="object-cover"
                />
                <span className="absolute top-2 right-0 flex h-11 w-11 items-center justify-center rounded-full rounded-tr-none rounded-br-none bg-[var(--color-primary)] shadow-[0_6px_16px_rgba(74,80,157,0.4)]">
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-base font-semibold text-[var(--color-foreground)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {description}
                </p>
                <a
                  href="#yhteystiedot"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)]"
                >
                  Lue lisää <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
