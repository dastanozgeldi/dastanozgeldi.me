import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";
import { NowPlaying } from "./NowPlaying";

export const Footer = () => (
  <footer className="w-full border-t-[1px] border-t-gray-500 p-4 max-w-[60ch] mx-auto space-y-4">
    <NowPlaying />

    {/* Social Links */}
    <div className="flex items-center justify-center gap-3">
      <a
        className="duration-300 rounded-full p-3 hover:bg-gray-200 hover:dark:bg-gray-700"
        href="https://github.com/dastanozgeldi"
      >
        <IoLogoGithub className="w-5 h-5" />
      </a>
      <a
        className="duration-300 rounded-full p-3 hover:bg-gray-200 hover:dark:bg-gray-700"
        href="https://youtube.com/@dastanozgeldi"
      >
        <IoLogoYoutube className="w-5 h-5" />
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

    {/* Copyright */}
    <p className="text-center">
      © Dastan Ozgeldi {new Date().getFullYear()}. All rights reserved.
    </p>
  </footer>
);
