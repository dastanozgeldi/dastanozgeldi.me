import { Section } from "../Section";

export const LastNews = () => {
  return (
    <Section title="Last News">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/y41Q4n_O0zs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Section>
  );
};
