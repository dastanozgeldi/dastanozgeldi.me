import Hero from "@/components/hero";
import { metadata } from "@/lib/meta";

export async function generateMetadata({ params }: any) {
  return metadata;
}

const Home = () => {
  return (
    <div className="flex flex-col items-center py-24">
      <Hero />
    </div>
  );
};

export default Home;
