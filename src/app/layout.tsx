import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gordonridge.ca"),
  title: {
    default: "Gordonridge Community Development Initiative | Scarborough",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Gordonridge Community Development Initiative is a Black, resident-led Scarborough community organization connecting seniors, youth and families through community programs, leadership and support.",
  keywords: [
    "Gordonridge Community Development Initiative",
    "Scarborough",
    "Toronto Community Housing",
    "Intergenerational programs",
    "Black-led community",
    "Seniors wellness",
    "Youth leadership",
    "Food support",
  ],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: "/gordonridge-logo.png",
    apple: "/gordonridge-logo.png",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.mission,
    url: siteConfig.contact.website,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/gordonridge/community/gordonridge-community-court-aerial.jpeg",
        width: 1200,
        height: 630,
        alt: "Gordonridge Community Court and Recreation Space",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable}`}>
      <head>
        {/* Google Material Symbols Outlined stylesheet */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-[#FDFBF7] font-sans text-[#0F1E2E] antialiased selection:bg-[#34A853] selection:text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[68px] lg:pt-[76px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
