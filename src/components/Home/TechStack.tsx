import { Section } from "../Section";

export const TechStack = () => {
  return (
    <Section title="Tech Stack">
      <p>
        I&apos;m currently focused on full-stack. I use t3 tech: Next.js,
        Next-Auth, Prisma, TailwindCSS, tRPC and Planetscale.
      </p>
      <p>
        My recent project is called{" "}
        <a
          className="font-medium text-teal-400"
          href="https://tapsyr.dosek.xyz/"
        >
          Tapsyr
        </a>{" "}
        - the only to do app you&apos;ll ever need.
      </p>
    </Section>
  );
};
