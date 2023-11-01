import { NowPlaying } from "@/components/now-playing";
import { Icons } from "./icons";

export const Footer = () => {
  const links = [
    {
      href: "https://github.com/dastanozgeldi",
      icon: <Icons.github className="w-5 h-5" />,
    },
    {
      href: "https://linkedin.com/in/dastanozgeldi",
      icon: <Icons.linkedin className="w-5 h-5" />,
    },
    {
      href: "https://youtube.com/@dastanozgeldi",
      icon: <Icons.youtube className="w-5 h-5" />,
    },
    {
      href: "https://instagram.com/dastanozgeldi",
      icon: <Icons.instagram className="w-5 h-5" />,
    },
    {
      href: "mailto:ozgdastan@gmail.com",
      icon: <Icons.mail className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="w-full border-t-[1px] border-t-gray-500 p-4 max-w-[60ch] mx-auto space-y-4">
      <NowPlaying />

      {/* Social Links */}
      <div className="flex items-center justify-center gap-3">
        {links.map(({ href, icon }) => (
          <a
            key={href}
            className="duration-300 rounded-full p-3 hover:bg-secondary"
            href={href}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-center">
        © Dastan Özgeldi {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
};
