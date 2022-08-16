import { IoLogoTwitter, IoLogoLinkedin, IoMail } from "react-icons/io5";
import ExternalLink from "../ExternalLink";
import Section from "../Section";

export default function Contacts() {
  return (
    <Section title="Contacts">
      <div className="flex flex-col">
        <button className="contact">
          <ExternalLink href="https://twitter.com/dastanozgeldi">
            <IoLogoTwitter /> @dastanozgeldi
          </ExternalLink>
        </button>
        <button className="contact">
          <ExternalLink href="https://linkedin.com/in/dastanozgeldi">
            <IoLogoLinkedin /> @dastanozgeldi
          </ExternalLink>
        </button>
        <button className="contact">
          <ExternalLink href="mailto:ozgdastan@gmail.com">
            <IoMail /> ozgdastan@gmail.com
          </ExternalLink>
        </button>
      </div>
    </Section>
  );
}
