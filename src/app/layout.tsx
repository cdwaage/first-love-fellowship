import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "First Love Fellowship — Gathered around Jesus. Defined by love.",
    template: "%s | First Love Fellowship",
  },
  description:
    "A community in Lincoln, California built around one thing — the love of Jesus, received and given freely.",
  metadataBase: new URL("https://thefirstlovefellowship.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thefirstlovefellowship.com",
    siteName: "First Love Fellowship",
    title: "First Love Fellowship — Gathered around Jesus. Defined by love.",
    description:
      "A community in Lincoln, California built around one thing — the love of Jesus, received and given freely.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "First Love Fellowship — Gathered around Jesus. Defined by love.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Love Fellowship — Gathered around Jesus. Defined by love.",
    description:
      "A community in Lincoln, California built around one thing — the love of Jesus, received and given freely.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-cream text-charcoal antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
