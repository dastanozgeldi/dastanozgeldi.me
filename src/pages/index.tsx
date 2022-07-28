import type { NextPage } from "next";
import Page from "../components/Page";
import Profile from "../components/Profile";
import Section from "../components/Section";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const Home: NextPage = () => {
  return (
    <Page title="Home">
      <div className="max-w-[480px] mx-auto">
        {/* Welcoming */}
        <div className="bg-[#303030] mt-4 mb-8 rounded-xl px-8 py-4">
          Salem! I&apos;m a full-stack developer from Kazakhstan
        </div>
        {/* About Me */}
        <Profile />
        {/* Work */}
        <Section title="Work">
          <p className="indent-4">
            I&apos;m a high-school sophomore with a passion for building
            different kinds of software. I&apos;m also the co-founder of
            software development teams like `Jolshylar` and `DBD`
          </p>
          <div className="text-center mt-4">
            <button className="rounded-md text-black bg-teal-300">
              <a
                className="flex gap-2 items-center py-2 px-8"
                href="https://github.com/Dositan"
              >
                GitHub <ExternalLinkIcon width={20} height={20} />
              </a>
            </button>
          </div>
        </Section>
        {/* Bio */}
        <Section title="Bio">
          <div className="indent-0">
            2019 - Introduction to Programming, Python
            <br />
            2020 - Coding Discord Bots w/ Discord.py
            <br />
            2021 - Building CLI tools, Simple Games w/ Pygame
            <br />
            2022 - Web Development
          </div>
        </Section>
        {/* Interests */}
        <Section title="I'm interested in">
          <p>
            CLI tools, Frontend Development, Backend Development, Machine
            Learning
          </p>
        </Section>
      </div>
    </Page>
  );
};

export default Home;
