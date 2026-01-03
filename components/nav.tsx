"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = ["/blog", "/projects"];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Image
          src="/pfp.jpg"
          alt="brand"
          width={32}
          height={32}
          className="rounded-full border border-blue-500"
        />
      </Link>
      <div className="flex items-center gap-4">
        {links.map((link) => (
          <Link
            key={link}
            href={link}
            className={cn(
              "font-mono tracking-tighter",
              pathname === link && "underline underline-offset-1.5"
            )}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
}
