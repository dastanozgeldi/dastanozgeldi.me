import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { config } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.url,
    images: [
      {
        url: config.image,
        alt: config.title,
      },
    ],
    siteName: config.title,
    locale: config.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: config.title,
    description: config.description,
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
      <body className={`text-foreground bg-background ${inter.className}`}>
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
