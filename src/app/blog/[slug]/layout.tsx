import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Link
        href="/blog"
        className="mt-6 gap-1 flex items-center justify-center"
      >
        <ArrowLeftIcon className="w-5 h-5" /> see all posts
      </Link>
    </>
  );
}
