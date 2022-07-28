import { IoLogoTwitter, IoLogoLinkedin, IoMail } from "react-icons/io5";
import Section from "../Section";

export default function Contacts() {
  return (
    <Section title="Contacts">
      <div className="flex flex-col">
        <button className="contact">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/dastanozgeldi"
          >
            <IoLogoTwitter /> @dastanozgeldi
          </a>
        </button>
        <button className="contact">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/dosek"
          >
            <IoLogoLinkedin /> @dosek
          </a>
        </button>
        <button className="contact">
          <a target="_blank" rel="noreferrer" href="mailto:ozgdastan@gmail.com">
            <IoMail /> ozgdastan@gmail.com
          </a>
        </button>
      </div>
    </Section>
  );
}
