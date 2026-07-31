/** Shared contact details */
export const CONTACT = {
  companyName: "Tarkka Sähköpalvelu",
  phoneLabel: "040 000 0023",
  phoneHref: "tel:+358400000023",
  emailLabel: "info@sahko-tarkka.fi",
  emailHref: "mailto:info@sahko-tarkka.fi",
  addressLine1: "Esimerkkikatu 1",
  addressLine2: "00100 Helsinki",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Esimerkkikatu+1%2C+00100+Helsinki%2C+Suomi",
} as const;

export const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Esimerkkikatu+1,+00100+Helsinki,+Suomi&output=embed&z=13";

export const OPENING_HOURS = [
  { day: "Ma–Pe", hours: "07:00–16:00" },
  { day: "La–Su", hours: "Suljettu" },
] as const;