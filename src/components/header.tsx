"use client";

import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  return (
    <header className="mb-5 md:mb-10 flex items-center justify-between">
      <span className="text-md md:text-lg whitespace-nowrap font-bold">
        <Link href="/">
          <span className="font-serif cursor-pointer pr-2">Dastan Ozgeldi</span>
        </Link>
      </span>

      <div className="flex flex-row ml-0 sm:ml-2 space-x-2 items-center justify-center sm:justify-end">
        <Link href="/blog">blog</Link>
        <ThemeToggle />
      </div>
    </header>
  );
};
