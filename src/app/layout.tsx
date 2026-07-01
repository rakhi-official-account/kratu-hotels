import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kratu Hotels | Premium Luxury Hospitality",
  description: "Reimagine luxury at Kratu Hotels. Discover bespoke accommodations, fine dining, sky lounges, and majestic banquet venues.",
  keywords: [
    "Kratu Hotels",
    "luxury hotel",
    "bespoke accommodations",
    "fine dining",
    "sky lounge",
    "premium hospitality",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-gold selection:text-background">
        {/* Scroll restoration reset — runs before page paint */}
        <Script
          id="scroll-reset"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.history && window.history.scrollRestoration) {
                window.history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
            `
          }}
        />
        <SmoothScroll>
          <CustomCursor />
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
