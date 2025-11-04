import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { site } from "@/config/site";
import { formatDate } from "@/lib/formatters";
import Views from "./_components/views";

// export async function generateMetadata(props: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata | undefined> {
//   const params = await props.params;
//   const post = getBlogPostBySlug(params.slug);
//   if (!post) {
//     return;
//   }

//   const publishedTime = formatDate(post.metadata.date);

//   return {
//     title: post.metadata.title,
//     description: post.metadata.description,
//     openGraph: {
//       title: post.metadata.title,
//       description: post.metadata.description,
//       publishedTime,
//       type: "article",
//       url: `${site.url}/blog/${post.slug}`,
//     },
//     twitter: {
//       title: post.metadata.title,
//       description: post.metadata.description,
//       card: "summary_large_image",
//       creator: "@dastanozgeldi",
//     },
//   };
// }

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { default: Post, metadata } = await import(`@/posts/${slug}.mdx`);
  console.log(metadata);
  return (
    <>
      <header>
        <h1 className="text-2xl font-bold">{metadata.title}</h1>
        <p className="text-sm text-muted-foreground flex items-center justify-between">
          <span>
            {formatDate(metadata.date, {
              short: true,
            }).toLowerCase()}
          </span>
          <Suspense fallback={<>... views</>}>
            <Views slug={slug} />
          </Suspense>
        </p>
      </header>
      <div className="prose">
        <Post />
      </div>
    </>
  );
}
