import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="font-mono tracking-tight underline">
        <Image
          src="/pfp.jpg"
          alt="brand"
          width={32}
          height={32}
          className="rounded-full border border-blue-500"
        />
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/blog" className="font-mono tracking-tight underline">
          blog
        </Link>
        <Link href="/projects" className="font-mono tracking-tight underline">
          projects
        </Link>
        <Link
          href="/resume.pdf"
          target="_blank"
          className="font-mono tracking-tight underline"
        >
          resume
        </Link>
      </div>
    </nav>
  );
}
