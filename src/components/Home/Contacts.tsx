import { IoLogoTwitter, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { ExternalLink } from "components/ExternalLink";
import { Section } from "components/Section";
import { styles } from "styles";

export const Contacts = () => {
  return (
    <Section title="Contacts">
      <div className="flex flex-col">
        <button className={styles.buttonContact}>
          <ExternalLink href="https://twitter.com/dastanozgeldi">
            <IoLogoTwitter /> @dastanozgeldi
          </ExternalLink>
        </button>
        <button className={styles.buttonContact}>
          <ExternalLink href="https://linkedin.com/in/dastanozgeldi">
            <IoLogoLinkedin /> @dastanozgeldi
          </ExternalLink>
        </button>
        <button className={styles.buttonContact}>
          <ExternalLink href="mailto:ozgdastan@gmail.com">
            <IoMail /> ozgdastan@gmail.com
          </ExternalLink>
        </button>
      </div>
    </Section>
  );
};
