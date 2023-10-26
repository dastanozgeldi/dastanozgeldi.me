import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const title = "Dastan Özgeldi";
const description = "Building digital products, brands, and experience.";
const image = "https://dastanozgeldi.me/brand.png";
const url = "https://dastanozgeldi.me/";
const locale = "en-US";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  openGraph: {
    title,
    description,
    url,
    images: [
      {
        url: image,
        alt: title,
      },
    ],
    siteName: title,
    locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    site: "@dastanozgeldi",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/brand.png",
    apple: "/brand.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`dark:text-gray-100 dark:bg-zinc-950 ${inter.className}`}
      >
        <main className="p-6 pt-3 md:pt-6 max-w-2xl m-auto">
          <Header />
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
