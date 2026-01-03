import "@/styles/globals.css";
import { Metadata } from "next";
import { site } from "@/config/site";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  description: site.description,
  keywords: site.keywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    site: "@dastanozgeldi",
    creator: "@dastanozgeldi",
    images: [`${site.url}/images/og.png`],
  },
  openGraph: {
    url: site.url,
    type: "website",
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: "en-US",
    images: [
      {
        url: `${site.url}/images/og.png`,
        width: 1200,
        height: 630,
        alt: site.description,
        type: "image/png",
      },
    ],
  },
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
      <body className="py-3 px-6 max-w-2xl m-auto min-h-screen flex flex-col space-y-6">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
