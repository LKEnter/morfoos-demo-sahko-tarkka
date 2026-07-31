import type { Metadata } from "next";
import localFont from "next/font/local";
import { MorfoosGlobalProvider } from "@morfoos/core/providers";
import Header from "./components/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "./fonts/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

// Fallback baseline metadata metrics
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={satoshi.variable}>
      <body>
        {/* Automatically activates case-insensitive link delegation and form monitoring */}
        <MorfoosGlobalProvider
          siteId={process.env.NEXT_PUBLIC_SITE_ID || "development_fallback"}
          autoTrackClicks={true}
        >
          <Header />
          {children}
          <Footer />
        </MorfoosGlobalProvider>
      </body>
    </html>
  );
}