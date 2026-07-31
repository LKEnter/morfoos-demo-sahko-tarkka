import Image from "next/image";
import { Home, Building, Factory, Store, Wheat, Landmark } from "lucide-react";

const INDUSTRIES = [
  {
    icon: Home,
    title: "Kodit",
    description: "Uudis- ja saneerauskohteet.",
    image: "/assets/images/industries/kodit.jpg",
  },
  {
    icon: Building,
    title: "Taloyhtiöt",
    description: "Huollot ja sähköurakat.",
    image: "/assets/images/industries/taloyhtiot.jpg",
  },
  {
    icon: Factory,
    title: "Teollisuus",
    description: "Asennukset ja kunnossapito.",
    image: "/assets/images/industries/teollisuus.jpg",
  },
  {
    icon: Store,
    title: "Liiketilat",
    description: "Toimitilojen sähkötyöt.",
    image: "/assets/images/industries/liiketilat.jpg",
  },
  {
    icon: Wheat,
    title: "Maatilat",
    description: "Tuotanto- ja talousrakennukset.",
    image: "/assets/images/industries/maatilat.jpg",
  },
  {
    icon: Landmark,
    title: "Julkinen sektori",
    description: "Kunnat ja julkiset kiinteistöt.",
    image: "/assets/images/industries/julkinen-sektori.jpg",
  },
];

export default function Industries() {
  return (
    <section id="toimialat" className="bg-[var(--color-secondary)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl">
            Kenelle teemme töitä.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {INDUSTRIES.map(({ icon: Icon, title, description, image }) => (
            <div
              key={title}
              className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white"
            >
              <div className="relative aspect-square w-full sm:aspect-[4/3]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute top-2 right-0 flex h-11 w-11 items-center justify-center rounded-full rounded-tr-none rounded-br-none bg-[var(--color-primary)] shadow-[0_6px_16px_rgba(74,80,157,0.4)]">
                  <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={1.75} />
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-[var(--color-foreground)] sm:text-base">
                  {title}
                </h3>
                <p className="mt-1 text-xs text-[var(--color-muted)] sm:text-sm">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
