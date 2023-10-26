import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "iOS Developer at nFactorial Incubator.",
};

const About = () => {
  return (
    <section className="pb-24">
      <h1 className="text-2xl">About me</h1>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hello, I&apos;m Dastan.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
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
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/dastanozgeldi"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">GitHub</div>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/dastanozgeldi"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">LinkedIn</div>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/@dastanozgeldi"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">YouTube</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
