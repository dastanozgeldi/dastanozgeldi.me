import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="p-4 border-b-2">
      <ul className="flex justify-between">
        <li>
          <Logo />
        </li>
        <div className="flex gap-4">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <a href="https://travel.dosek.xyz">Travel Blog</a>
          </li>
          <li>
            <a href="/resume.pdf">Resume</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
