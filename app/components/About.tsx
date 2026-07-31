import Image from "next/image";

const STATS = [
  { value: "Vuosien", label: "Kokemusta alalta", valueClass: "text-3xl md:text-4xl" },
  { value: "Vuosien", label: "Alan kokemusta", valueClass: "text-2xl md:text-3xl" },
  {
    value: "100%",
    label: "Dokumentoidut käyttöönottotarkastukset",
    valueClass: "text-3xl md:text-4xl",
  },
  {
    value: "Kodit · Yritykset · Teollisuus",
    label: "Palvelemme kaikkia kohteita",
    valueClass: "text-base md:text-lg",
  },
];

export default function About() {
  return (
    <section id="miksi-me" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-6 lg:gap-2">
          <div className="">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl">
              <span className="text-[var(--color-primary)]">Tarkka Sähköpalvelu.</span>{" "}
              Sähköalan kumppani, joka pysyy mukana koko projektin ajan.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              Emme jätä asiakasta yksin suunnitelmien tai dokumenttien kanssa. Hoidamme
              kartoituksesta käyttöönottoon asti — kotien, yritysten ja teollisuuden
              kohteissa.
            </p>
          </div>
        </div>

        <div className="relative mt-12">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-[var(--color-foreground)] sm:aspect-[16/7]">
            <Image
              src="/assets/images/about/about-team.webp"
              alt="Sähköasentaja tarkistaa suunnitelmia kohteessa"
              fill
              sizes="(max-width: 1023px) 100vw, 1200px"
              quality={70}
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="relative mx-auto -mt-12 w-[92%] rounded-xl bg-white px-2 py-6 shadow-[0_8px_40px_rgba(17,17,17,0.12)] sm:-mt-14 sm:w-[85%] sm:px-4 md:w-4/5">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10 lg:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-4 py-4 md:py-2 text-center sm:px-6">
                  <div
                    className={`font-bold text-[var(--color-primary)] ${stat.valueClass}`}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs leading-snug text-[var(--color-muted)] sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
