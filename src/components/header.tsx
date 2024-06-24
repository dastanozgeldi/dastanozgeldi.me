"use client";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="mb-5 md:mb-10 flex items-center justify-between">
      <span className="text-md md:text-lg whitespace-nowrap font-bold">
        <Link href="/">
          <span className="font-serif cursor-pointer pr-2">Dastan Ozgeldi</span>
        </Link>
      </span>
    </header>
  );
};
