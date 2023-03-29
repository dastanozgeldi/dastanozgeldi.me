import { Section } from "@/components/Section";

export const LastEvent = () => {
  return (
    <Section title="Last Event">
      {/* Embedded Video */}
      <div className="aspect-w-16 aspect-h-9 my-4">
        <iframe
          className="rounded-lg"
          src="https://www.youtube.com/embed/ES7R_t6z7S8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </Section>
  );
};
