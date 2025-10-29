import "@/styles/globals.css";
import { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon, TwitterIcon } from "lucide-react";
import { PostHogProvider } from "@/components/PostHogProvider";

const inter = Inter({ subsets: ["latin"] });

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

const links = [
  {
    href: "https://github.com/dastanozgeldi",
    icon: <GithubIcon className="w-5 h-5" />,
  },
  {
    href: "https://x.com/dastanozgeldi",
    icon: <TwitterIcon className="w-5 h-5" />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("p-3 max-w-2xl m-auto", inter.className)}>
        <PostHogProvider>
          <header className="mb-3 flex items-center justify-between">
            <span className="text-md md:text-lg whitespace-nowrap font-bold pr-2">
              <Link href="/">hi, i&apos;m dastan ozgeldi</Link>
            </span>
            <div className="flex items-center justify-center gap-2">
              {links.map(({ href, icon }) => (
                <Button key={href} variant="ghost" size="icon" asChild>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {icon}
                  </a>
                </Button>
              ))}
            </div>
          </header>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
