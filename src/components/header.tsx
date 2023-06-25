"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";
import SupportButton from "./post/support";

const headerItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/dashboard": {
    name: "dashboard",
  },
  "/blog": {
    name: "blog",
  },
};

const MainNav = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-col sm:flex-row mb-5 md:mb-10 items-center">
      <span className="text-md md:text-lg whitespace-nowrap font-bold">
        <Link href="/">
          <span className="font-serif cursor-pointer pr-2">Dastan Özgeldi</span>
        </Link>
      </span>

      <nav
        id="nav"
        className={
          "font-mono text-xs grow justify-end items-center flex gap-1 md:gap-3"
        }
      >
        {Object.entries(headerItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <>
              <Button variant={"link"} key={path} asChild>
                <Link href={path}>
                  {path === pathname ? (
                    <span className="font-semibold">{name}</span>
                  ) : (
                    name
                  )}
                </Link>
              </Button>
            </>
          );
        })}
      </nav>

      <div className="flex flex-row ml-0 sm:ml-2 space-x-2 items-center justify-center sm:justify-end w-28">
        <ThemeToggle />
        <SupportButton />
      </div>
    </header>
  );
};

export default MainNav;
