import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT } from "@/app/lib/contact";

const SERVICE_LINKS = [
  { label: "Sähköurakointi", href: "#palvelut" },
  { label: "Suunnittelu", href: "#palvelut" },
  { label: "Teollisuuden sähkötyöt", href: "#palvelut" },
  { label: "Energiaratkaisut & ohjaus", href: "#palvelut" },
];

const COMPANY_LINKS = [
  { label: "Referenssit", href: "#referenssit" },
  { label: "UKK", href: "#ukk" },
  { label: "Yhteystiedot", href: "#yhteystiedot" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <Image
              src="/assets/images/brand/logo.svg"
              alt={CONTACT.companyName}
              width={280}
              height={56}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
              Sähköurakointia suunnittelusta käyttöönottoon — koteihin, yrityksille ja
              teollisuuteen. Vuosien kokemuksella.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-[var(--color-foreground)]">
              Palvelut
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-[var(--color-foreground)]">
              Yritys
            </h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-[var(--color-foreground)]">
              Yhteystiedot
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                <a href={CONTACT.phoneHref} className="hover:text-[var(--color-primary)]">
                  {CONTACT.phoneLabel}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                <a href={CONTACT.emailHref} className="hover:text-[var(--color-primary)]">
                  {CONTACT.emailLabel}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                <a
                  href={CONTACT.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary)]"
                >
                  {CONTACT.addressLine1}, {CONTACT.addressLine2}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()} {CONTACT.companyName}. Kaikki oikeudet
            pidätetään.
          </p>
        </div>
      </div>
    </footer>
  );
}
