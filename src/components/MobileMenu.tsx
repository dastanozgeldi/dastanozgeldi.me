import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useState, useEffect } from "react";
import styles from "styles/mobile-menu.module.css";
import { IoClose, IoMenu } from "react-icons/io5";

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    { enterDelay: 20, exitDelay: 300 }
  );

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    const cleanup = () => {
      document.body.style.overflow = "";
    };
    return cleanup;
  }, []);

  return (
    <div>
      <button
        className={cn(styles.burger, "md:hidden")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <IoMenu
          data-hide={isMenuOpen}
          className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
        />
        <IoClose
          data-hide={!isMenuOpen}
          className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
        />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            "flex flex-col absolute bg-gray-50 dark:bg-[#181818]",
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "150ms" }}
          >
            <Link
              href="/"
              className="flex w-auto pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "250ms" }}
          >
            <Link
              href="/blog"
              className="flex w-auto pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
