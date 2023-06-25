import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "iOS Developer at nFactorial Incubator.",
};

const About = () => {
  return (
    <section className="pb-24">
      <h1 className="text-2xl font-serif">About me</h1>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I&apos;m Dastan.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I&apos;m currently participating in{" "}
          <b>nFactorial Incubator as an iOS Developer</b>, building app
          utilizing the power of <b>generative AI</b>. I focus on crafting and
          developing real-world applications that our society needs.
        </p>
        <hr />
        <p>
          I&apos;m passionate about many creative pursuits, including design and
          of course coding. This combination of interests eventually led me to
          my current role, frontend development.
        </p>
        <p>
          I love software development, especially getting feedback from users
          motivates me a lot. It&apos;s especially exciting to improve users
          experience and let them focus solely on production. Just build.
        </p>
        <p className="mb-8">
          Outside of these, I develop minimal digital products. I develop
          packages that will both solve the problems I have on the web and
          facilitate our development process.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
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
