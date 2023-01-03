import Head from "next/head";
import { PropsWithChildren } from "react";

type PageProps = PropsWithChildren & {
  title: string;
  className?: string;
};

export const Page = ({ children, title }: PageProps) => {
  const t = `${title} | Dastan Ozgeldi`;
  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
          <meta name="og:title" content={t} />
        </Head>
      )}
      {children}
    </>
  );
};
