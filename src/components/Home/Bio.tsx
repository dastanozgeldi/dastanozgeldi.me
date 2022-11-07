import { Section } from "../Section";

const H = ({ children }: { children: React.ReactNode }) => (
  <span className="text-yellow-500 font-semibold">{children}</span>
);

export const Bio = () => {
  return (
    <Section title="Bio">
      <H>2019</H> - Introduction to Programming, Python
      <br />
      <H>2020</H> - Coding Discord Bots w/ Discord.py
      <br />
      <H>2021</H> - Building CLI tools, Simple Games w/ Pygame
      <br />
      <H>2022</H> - Web Development
    </Section>
  );
};
