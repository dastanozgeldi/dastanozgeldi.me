import type { NextPage } from "next";
import Page from "../components/Page";
import Profile from "../components/Home/Profile";
import Work from "../components/Home/Work";
import Bio from "../components/Home/Bio";
import Interests from "../components/Home/Interests";
import Contacts from "../components/Home/Contacts";

const Home: NextPage = () => {
  return (
    <Page title="Home">
      <div className="max-w-[480px] mx-auto">
        <div className="bg-[#303030] mt-4 mb-8 rounded-xl px-8 py-4">
          Salem! I&apos;m a full-stack developer from Kazakhstan
        </div>
        <Profile />
        <Work />
        <Bio />
        <Interests />
        <Contacts />
      </div>
    </Page>
  );
};

export default Home;
