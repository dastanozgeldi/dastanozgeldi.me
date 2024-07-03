"use client";
import { SOCIAL_LINKS } from "@/config/links";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="mb-5 md:mb-10 flex items-center justify-between">
      <span className="text-md md:text-lg whitespace-nowrap font-bold">
        <Link href="/">
          <span className="cursor-pointer pr-2">
            hi, i&apos;m dastan ozgeldi
          </span>
        </Link>
      </span>
      <div className="flex items-center justify-center gap-3">
        {SOCIAL_LINKS.map(({ href, icon }) => (
          <a
            key={href}
            className="duration-300 rounded-full p-3 hover:bg-secondary"
            href={href}
          >
            {icon}
          </a>
        ))}
      </div>
    </header>
  );
};
