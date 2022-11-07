import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import cn from "classnames";
import { MobileMenu } from "../MobileMenu";
import { IoMoon, IoSunny } from "react-icons/io5";

type NavItemProps = {
  href: string;
  text: string;
};

const NavItem = ({ href, text }: NavItemProps) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        {text}
      </a>
    </Link>
  );
};

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <nav className="mx-2 mt-8">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <MobileMenu />
          <NavItem href="/" text="Home" />
          <NavItem href="/blog" text="Blog" />
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (theme === "dark" ? <IoSunny /> : <IoMoon />)}
        </button>
      </div>
    </nav>
  );
};
