"use client";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="mb-5 md:mb-10 flex items-center justify-between">
      <span className="text-md md:text-lg whitespace-nowrap font-bold">
        <Link href="/">
          <span className="cursor-pointer pr-2">hi, i&apos;m dastan ozgeldi</span>
        </Link>
      </span>
    </header>
  );
};
