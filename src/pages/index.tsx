import { Page } from "layout/Page";
import { About, Bio, LastEvent, Profile } from "components/home";

const Home = () => {
  return (
    <Page title="Home">
      <p className="bg-gray-200 dark:bg-gray-800 mt-4 mb-8 rounded-xl px-8 py-4">
        Salem! I&apos;m a full-stack developer from Almaty, Kazakhstan.
      </p>
      <Profile />
      <About />
      <Bio />
      <LastEvent />
    </Page>
  );
};

export default Home;
