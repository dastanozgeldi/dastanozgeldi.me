import { Icons } from "@/components/icons";
import { Link } from "next-view-transitions";

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
        <Icons.back className="w-5 h-5" /> see all posts
      </Link>
    </>
  );
}
