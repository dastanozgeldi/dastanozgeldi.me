import { Section } from "components/Section";
import { BiLinkExternal } from "react-icons/bi";

export const About = () => {
  return (
    <Section title="About">
      <p className="indent-4">
        I&apos;m a high-school sophomore with a passion for building different
        kinds of software. I&apos;m also the co-founder of the{" "}
        <a
          className="text-teal-400 font-semibold"
          href="https://github.com/jolshylar/"
        >
          Jolshylar
        </a>{" "}
        software development team.
      </p>
      <a
        className="flex gap-2 py-2 px-8 my-4 items-center w-max mx-auto rounded-md text-gray-100 bg-teal-500 hover:bg-teal-600 hover:duration-500"
        href="https://github.com/dastanozgeldi"
      >
        GitHub <BiLinkExternal className="w-4 h-4" />
      </a>
    </Section>
  );
};
