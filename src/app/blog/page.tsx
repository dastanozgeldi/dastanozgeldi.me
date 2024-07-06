import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Suspense } from "react";
import { getBlogPosts } from "@/blog";
import { AllViews } from "./all-views";

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
    <section>
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
              <p className="text-sm text-neutral-600">
                {new Date(post.metadata.date)
                  .toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                  .toLowerCase()}
                <Suspense>
                  {" • "}
                  <AllViews slug={post.slug} />
                </Suspense>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
