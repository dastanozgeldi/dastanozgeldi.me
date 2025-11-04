import Link from "next/link";
import Separator from "./separator";

export default function Block({
  title,
  link,
  children,
}: {
  title: string;
  link: { label: string; href: string };
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg tracking-tighter font-mono">{title}</h3>
        <Link
          href={link.href}
          className="decoration-neutral-400 font-medium underline decoration-[0.1em] underline-offset-2"
        >
          {link.label}
        </Link>
      </div>
      {children}
      <Separator />
    </>
  );
}
