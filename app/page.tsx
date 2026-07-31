import React from "react";
import { generateMorfoosSEO } from "@morfoos/core/seo";
import { LocalBusinessSchema } from "@morfoos/core/components/schemas";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Process from "./components/Process";
import References from "./components/References";
import Testimonials from "./components/Testimonials";
import EnergySection from "./components/EnergySection";
import Faq from "./components/Faq";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";

// 1. Compile immutable page structural SEO parameters
export const generateMetadata = () => generateMorfoosSEO({
  title: "Tarkka Sähköpalvelu | Sähköurakointi suunnittelusta käyttöönottoon",
  description: "Sähköurakointia koteihin, yrityksille ja teollisuuteen Etelä-Suomessa. Vuosien kokemus, määräysten mukaiset tarkastukset ja dokumentointi.",
  path: "/",
  ogImage: "/assets/default-og.jpg"
});

export default function Page() {
  return (
    <main className="w-full">
      {/* 2. Structured JSON-LD Schema data injected cleanly into the markup */}
      <LocalBusinessSchema
        name="Tarkka Sähköpalvelu"
        phone="+358400000023"
        email="info@sahko-tarkka.fi"
        address={{
          streetAddress: "Esimerkkikatu 1",
          addressLocality: "Helsinki",
          postalCode: "00100",
          addressCountry: "FI"
        }}
      />

      <Hero />
      <About />
      <Services />
      <Industries />
      <Process />
      <References />
      <Testimonials />
      <EnergySection />
      <Faq />
      <CtaBanner />
      <Contact />
    </main>
  );
}
