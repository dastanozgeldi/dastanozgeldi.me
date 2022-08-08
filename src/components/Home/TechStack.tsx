import Section from "../Section";

export default function TechStack() {
  return (
    <Section title="My current tech-stack">
      <p>
        I&apos;m currently focused on full-stack. I use t3 tech: Next.js,
        Next-Auth, Prisma, TailwindCSS, tRPC and Planetscale.
      </p>
      <p>
        My recent project is called{" "}
        <a
          className="font-bold text-teal-400"
          href="https://tapsyr.dosek.xyz"
          target="_blank"
          rel="noreferrer"
        >
          Tapsyr
        </a>{" "}
        - the only to do app you&apos;ll ever need.
      </p>
    </Section>
  );
}
