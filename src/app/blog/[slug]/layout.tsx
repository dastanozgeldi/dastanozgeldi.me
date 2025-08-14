import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Button asChild variant="outline" className="mt-6">
        <Link href="/blog">
          <ArrowLeftIcon className="w-4 h-4" /> see all posts
        </Link>
      </Button>
    </>
  );
}
