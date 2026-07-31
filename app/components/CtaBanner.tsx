"use client";

import { useState, type FormEvent } from "react";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { CONTACT } from "../lib/contact";

const SERVICE_OPTIONS = [
  "Sähköurakointi",
  "Huollot ja vikakorjaukset",
  "Teollisuuden sähkötyöt",
  "Taloyhtiöt",
  "Suunnittelu",
  "Energiaratkaisut & ohjaus",
];

const inputClass =
  "w-full rounded-md border border-black/10 bg-[var(--color-secondary)] px-4 py-2.5 text-sm text-[var(--color-foreground)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:bg-white focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2";

export default function CtaBanner() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <section className="bg-[var(--color-primary)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            {status === "sent" ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-[0_20px_60px_rgba(17,17,17,0.25)]">
                <CheckCircle2 className="h-9 w-9 text-[var(--color-primary)]" />
                <h3 className="mt-4 text-base font-semibold text-[var(--color-foreground)]">
                  Kiitos pyynnöstäsi!
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
                  Palaamme asiaan mahdollisimman pian tarjouksen kanssa.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(17,17,17,0.25)] sm:p-8"
              >
                <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                  Pyydä tarjous muutamassa minuutissa
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="cta-name"
                      className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]"
                    >
                      Nimi
                    </label>
                    <input
                      id="cta-name"
                      name="name"
                      type="text"
                      required
                      className={inputClass}
                      placeholder="Etunimi Sukunimi"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cta-phone"
                      className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]"
                    >
                      Puhelin
                    </label>
                    <input
                      id="cta-phone"
                      name="phone"
                      type="tel"
                      required
                      className={inputClass}
                      placeholder="040 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cta-service"
                    className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]"
                  >
                    Palvelu
                  </label>
                  <select id="cta-service" name="service" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Valitse palvelu
                    </option>
                    {SERVICE_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="cta-message"
                    className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]"
                  >
                    Viesti
                  </label>
                  <textarea
                    id="cta-message"
                    name="message"
                    rows={3}
                    className={inputClass}
                    placeholder="Kerro lyhyesti kohteesta ja tarpeesta."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {status === "sending" ? "Lähetetään…" : "Pyydä tarjous"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              Tarvitsetko luotettavan sähköalan kumppanin?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
              Täytä lomake, niin suunnitellaan kohteellesi toimiva ratkaisu — tai soita
              suoraan, niin jutellaan tarpeestasi heti.
            </p>

            <a
              href={CONTACT.phoneHref}
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Soita meille {CONTACT.phoneLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
