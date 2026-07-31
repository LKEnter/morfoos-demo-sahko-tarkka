"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full rounded-md border border-black/10 bg-white px-4 py-2.5 text-sm text-[var(--color-foreground)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 600);
  };

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-xl border border-black/10 bg-white p-10 text-center">
        <CheckCircle2 className="h-9 w-9 text-[var(--color-primary)]" />
        <h3 className="mt-4 text-base font-semibold text-[var(--color-foreground)]">
          Kiitos viestistäsi!
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
          Palaamme asiaan mahdollisimman pian.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-black/10 bg-white p-6 sm:p-8 h-fit mt-auto"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]">
            Nimi
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Etunimi Sukunimi" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]">
            Puhelin
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="040 123 4567" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]">
          Sähköposti
        </label>
        <input id="email" name="email" type="email" required className={inputClass} placeholder="etunimi@esimerkki.fi" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]">
          Viesti
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={inputClass}
          placeholder="Kerro lyhyesti kohteesta ja tarpeesta."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Lähetetään…" : "Lähetä viesti"}
      </button>
    </form>
  );
}
