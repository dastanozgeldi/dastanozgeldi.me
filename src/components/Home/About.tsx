import Section from "../Section";
import { BiLinkExternal } from "react-icons/bi";
import ExternalLink from "../ExternalLink";

export default function About() {
  return (
    <Section title="About">
      <p className="indent-4">
        I&apos;m a high-school sophomore with a passion for building different
        kinds of software. I&apos;m also the co-founder of the{" "}
        <ExternalLink href="https://github.com/jolshylar/">
          Jolshylar
        </ExternalLink>{" "}
        software development team.
      </p>
      <a
        className="flex gap-2 py-2 px-8 my-4 items-center w-max mx-auto rounded-md text-gray-100 bg-teal-500 hover:bg-teal-600 hover:duration-500"
        href="https://github.com/Dositan"
      >
        GitHub <BiLinkExternal className="w-4 h-4" />
      </a>
    </Section>
  );
}
