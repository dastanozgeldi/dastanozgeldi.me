import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="p-2 border-b-2">
      <div className="flex justify-between">
        <Logo />
        <div className="flex gap-2">
          <Link href="/posts">Posts</Link>
          <a
            className="flex items-center gap-2"
            href="https://travel.dosek.xyz"
            target="_blank"
            rel="noreferrer"
          >
            Traveling <BiLinkExternal width={20} height={20} />
          </a>
          <a className="flex items-center gap-2" href="/resume.pdf">
            Resume <BiLinkExternal width={20} height={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
