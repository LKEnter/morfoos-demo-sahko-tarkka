"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT } from "../lib/contact";

const NAV_LINKS = [
  { label: "Etusivu", href: "#etusivu" },
  { label: "Palvelut", href: "#palvelut" },
  { label: "Toimialat", href: "#toimialat" },
  { label: "Miksi me", href: "#miksi-me" },
  { label: "Referenssit", href: "#referenssit" },
  { label: "Yhteystiedot", href: "#yhteystiedot" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-secondary)] bg-[var(--color-background)]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#etusivu" className="flex shrink-0 items-center">
          <Image
            src="/assets/images/brand/logo.svg"
            alt="Tarkka Sähköpalvelu"
            width={280}
            height={56}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-foreground)]/80 transition-colors hover:text-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-[var(--color-foreground)]"
          >
            <Phone className="h-4 w-4 text-[var(--color-primary)]" />
            {CONTACT.phoneLabel}
          </a>
          <a
            href="#yhteystiedot"
            className="rounded-md bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] transition-opacity hover:opacity-90"
          >
            Pyydä tarjous
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--color-foreground)] lg:hidden"
          aria-label={isOpen ? "Sulje valikko" : "Avaa valikko"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--color-secondary)] bg-[var(--color-background)] lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT.phoneHref}
              className="mt-2 flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold text-[var(--color-foreground)]"
            >
              <Phone className="h-4 w-4 text-[var(--color-primary)]" />
              {CONTACT.phoneLabel}
            </a>
            <a
              href="#yhteystiedot"
              onClick={() => setIsOpen(false)}
              className="mt-1 rounded-md bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-semibold text-[var(--color-on-primary)]"
            >
              Pyydä tarjous
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
