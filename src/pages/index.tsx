import type { NextPage } from "next";
import Page from "../components/Page";
import Profile from "../components/Home/Profile";
import Work from "../components/Home/Work";
import Bio from "../components/Home/Bio";
import TechStack from "../components/Home/TechStack";
import Contacts from "../components/Home/Contacts";

const Home: NextPage = () => {
  return (
    <Page title="Home">
      <div className="bg-[#303030] mt-4 mb-8 rounded-xl px-8 py-4">
        Salem! I&apos;m a full-stack developer from Kazakhstan
      </div>
      <Profile />
      <Work />
      <Bio />
      <TechStack />
      <Contacts />
    </Page>
  );
};

export default Home;
