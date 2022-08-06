import Section from "../Section";
import { BiLinkExternal } from "react-icons/bi";

export default function Work() {
  return (
    <Section title="Work">
      <p className="indent-4">
        I&apos;m a high-school sophomore with a passion for building different
        kinds of software. I&apos;m also the co-founder of software development
        teams like <span>`Jolshylar`</span> and <span>`DBD`</span>.
      </p>
      <div className="text-center mt-4">
        <button className="rounded-md text-black bg-primary">
          <a
            className="flex gap-2 items-center py-2 px-8"
            href="https://github.com/Dositan"
          >
            GitHub <BiLinkExternal width={20} height={20} />
          </a>
        </button>
      </div>
    </Section>
  );
}
