import Head from "next/head";
import { ReactNode } from "react";

export default function Page({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const t = `${title} | Dastan Ozgeldi`;
  return (
    <article className="p-4">
      {title && (
        <Head>
          <title>{t}</title>
          <meta name="og:title" content={t} />
        </Head>
      )}
      {children}
    </article>
  );
}
