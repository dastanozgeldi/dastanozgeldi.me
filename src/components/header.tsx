"use client";
import { SOCIAL_LINKS } from "@/config/links";

export const Header = () => {
  return (
    <header className="mb-5 flex items-center justify-between">
      <span className="text-md md:text-lg whitespace-nowrap font-bold pr-2">
        hi, i&apos;m dastan ozgeldi
      </span>
      <div className="flex items-center justify-center gap-2">
        {SOCIAL_LINKS.map(({ href, icon }) => (
          <a
            key={href}
            className="duration-300 rounded-full p-2 hover:bg-secondary"
            href={href}
          >
            {icon}
          </a>
        ))}
      </div>
    </header>
  );
};
