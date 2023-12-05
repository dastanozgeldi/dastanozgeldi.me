import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "iOS Developer at nFactorial Incubator.",
};

const About = () => {
  return (
    <section className="pb-24">
      <h1 className="text-2xl">About me</h1>

      <p className="my-5">Hello, I&apos;m Dastan.</p>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I&apos;m passionate about many fields of programming, including web,
          mobile development and generative AI.
        </p>
        <p>
          I love building different types of applications, especially receiving
          feedback from users hugely inspires me. It&apos;s especially amusing
          to make users&apos; lives easier and let them focus on direct results.
        </p>
        <p className="mb-8">
          Besides, I love developing chatbots. I work on bots for different
          groups of users using the power of generative AI that serves with the
          same purpose - automating a certain task.
        </p>
      </div>
    </section>
  );
};

export default About;
