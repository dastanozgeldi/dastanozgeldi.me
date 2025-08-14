import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getBlogPosts } from "@/lib/blog";
import redis from "@/lib/redis";
import { formatDate } from "@/lib/formatters";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on programming, lifestyle, and more.",
};

export default function Page() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );

  return (
    <>
      <h1 className="text-2xl font-medium tracking-tighter mb-6">blog</h1>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="flex w-full flex-col gap-y-1">
              <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4">
                {post.metadata.title.toLowerCase()}
              </p>
              <p className="prose prose-neutral">
                {post.metadata.description.toLowerCase()}
              </p>
              <div className="text-sm text-muted-foreground">
                {formatDate(post.metadata.date, {
                  short: true,
                }).toLowerCase()}
                {" / "}
                <Suspense fallback={<>loading views...</>}>
                  <AllViews slug={post.slug} />
                </Suspense>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

async function AllViews({ slug }: { slug: string }) {
  const allViews = (await redis.get("views")) as {
    slug: string;
    views: number;
  }[];

  const views = allViews.find((view) => view.slug === slug)?.views ?? 0;

  return <>{views.toLocaleString()} views</>;
}
