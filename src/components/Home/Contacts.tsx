import { IoLogoTwitter, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { ExternalLink } from "../ExternalLink";
import { Section } from "../Section";

const CONTACT_BUTTON =
  "max-w-max rounded-md text-teal-400 py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 hover:duration-500";

export const Contacts = () => {
  return (
    <Section title="Contacts">
      <div className="flex flex-col">
        <button className={CONTACT_BUTTON}>
          <ExternalLink href="https://twitter.com/dastanozgeldi">
            <IoLogoTwitter /> @dastanozgeldi
          </ExternalLink>
        </button>
        <button className={CONTACT_BUTTON}>
          <ExternalLink href="https://linkedin.com/in/dastanozgeldi">
            <IoLogoLinkedin /> @dastanozgeldi
          </ExternalLink>
        </button>
        <button className={CONTACT_BUTTON}>
          <ExternalLink href="mailto:ozgdastan@gmail.com">
            <IoMail /> ozgdastan@gmail.com
          </ExternalLink>
        </button>
      </div>
    </Section>
  );
};
