import type { NextPage } from "next";
import Page from "../components/Layout/Page";
import Profile from "../components/Home/Profile";
import About from "../components/Home/About";
import Bio from "../components/Home/Bio";
import TechStack from "../components/Home/TechStack";
import Contacts from "../components/Home/Contacts";
import Notification from "../components/Notification";

const Home: NextPage = () => {
  return (
    <Page title="Home">
      <Notification>
        Salem! I&apos;m a full-stack developer from Almaty, Kazakhstan.
      </Notification>
      <Profile />
      <About />
      <Bio />
      <TechStack />
      <Contacts />
    </Page>
  );
};

export default Home;
