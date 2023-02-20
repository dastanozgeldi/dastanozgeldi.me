import { Page } from "components/Page";
import { Profile } from "components/Home/Profile";
import { About } from "components/Home/About";
import { Bio } from "components/Home/Bio";
import { Contacts } from "components/Home/Contacts";

const Home = () => {
  return (
    <Page title="Home">
      <p className="bg-gray-200 dark:bg-gray-800 mt-4 mb-8 rounded-xl px-8 py-4">
        Salem! I&apos;m a full-stack developer from Almaty, Kazakhstan.
      </p>
      <Profile />
      <About />
      <Bio />
      <Contacts />
    </Page>
  );
};

export default Home;
