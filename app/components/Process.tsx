import { Search, PenTool, Zap, FileCheck2, Wrench } from "lucide-react";

const PROCESS_STEPS = [
  {
    icon: Search,
    title: "Kartoitus",
    description: "Käymme kohteen läpi ja määrittelemme tarpeet.",
  },
  {
    icon: PenTool,
    title: "Suunnittelu",
    description: "Laadimme toteutussuunnitelman ja varmistamme määräysten täyttymisen.",
  },
  {
    icon: Zap,
    title: "Asennus",
    description: "Toteutamme sähkötyöt turvallisesti ja sovitussa aikataulussa.",
  },
  {
    icon: FileCheck2,
    title: "Tarkastus",
    description: "Suoritamme mittaukset, käyttöönottotarkastukset ja dokumentoinnin.",
  },
  {
    icon: Wrench,
    title: "Käyttöönotto & tuki",
    description: "Luovutamme työn ja autamme myös tulevissa huolloissa ja laajennuksissa.",
  },
];

export default function Process() {
  return (
    <section id="prosessi" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs">
              {PROCESS_STEPS.length}
            </span>
            vaihetta
          </span>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl">
            Insinöörimäinen eteneminen.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Jokainen projekti etenee samaa, jäljitettävää polkua — kartoituksesta
            dokumentoituun käyttöönottoon.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-6 hidden h-px bg-[var(--color-primary)]/25 lg:block" />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-5">
            {PROCESS_STEPS.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="relative">
                {index < PROCESS_STEPS.length - 1 && (
                  <span className="absolute left-12 top-full h-6 w-px bg-[var(--color-primary)]/25 lg:hidden" />
                )}
                <div className="relative rounded-xl border border-black/[0.08] bg-white p-6">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <Icon className="h-4 w-4 shrink-0 text-[var(--color-primary)]" strokeWidth={1.75} />
                    <h3 className="text-base font-semibold text-[var(--color-foreground)]">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
