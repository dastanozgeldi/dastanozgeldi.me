import { IoLogoGithub, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="p-4 max-w-[60ch] mx-auto space-y-4">
      {/* Social Links */}
      <div className="flex items-center justify-center gap-3">
        <a
          className="duration-300 rounded-full p-3 hover:bg-gray-200 hover:dark:bg-gray-700"
          href="https://github.com/Dositan"
        >
          <IoLogoGithub className="w-5 h-5" />
        </a>
        <a
          className="duration-300 rounded-full p-3 hover:bg-gray-200 hover:dark:bg-gray-700"
          href="https://twitter.com/dastanozgeldi"
        >
          <IoLogoTwitter className="w-5 h-5" />
        </a>
        <a
          className="duration-300 rounded-full p-3 hover:bg-gray-200 hover:dark:bg-gray-700"
          href="https://instagram.com/dastanozgeldi"
        >
          <IoLogoInstagram className="w-5 h-5" />
        </a>
      </div>
      <p>© Dastan Ozgeldi 2022. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
