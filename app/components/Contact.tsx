import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT, OPENING_HOURS, MAP_EMBED_SRC } from "../lib/contact";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="yhteystiedot" className="bg-[var(--color-secondary)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl">
          Ota yhteyttä.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="space-y-5">
              <a href={CONTACT.phoneHref} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                  <Phone className="h-4 w-4 text-[var(--color-primary)]" />
                </span>
                <span className="text-sm font-medium text-[var(--color-foreground)]">
                  {CONTACT.phoneLabel}
                </span>
              </a>
              <a href={CONTACT.emailHref} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                  <Mail className="h-4 w-4 text-[var(--color-primary)]" />
                </span>
                <span className="text-sm font-medium text-[var(--color-foreground)]">
                  {CONTACT.emailLabel}
                </span>
              </a>
              <a
                href={CONTACT.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                  <MapPin className="h-4 w-4 text-[var(--color-primary)]" />
                </span>
                <span className="text-sm font-medium text-[var(--color-foreground)]">
                  {CONTACT.addressLine1}, {CONTACT.addressLine2}
                </span>
              </a>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                  <Clock className="h-4 w-4 text-[var(--color-primary)]" />
                </span>
                <span className="space-y-0.5 text-sm font-medium text-[var(--color-foreground)]">
                  {OPENING_HOURS.map((row) => (
                    <div key={row.day}>
                      {row.day}: {row.hours}
                    </div>
                  ))}
                </span>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-black/10">
              <iframe
                src={MAP_EMBED_SRC}
                className="h-64 w-full grayscale"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tarkka Sähköpalvelu sijainti kartalla"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
