import Head from "next/head";

type PageProps = {
  children: React.ReactNode;
  title: string;
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
