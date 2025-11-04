import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { site } from "@/config/site";
import { getBlogPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/formatters";
import Views from "./_components/views";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return;
  }

  const publishedTime = formatDate(post.metadata.date);

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      publishedTime,
      type: "article",
      url: `${site.url}/blog/${post.slug}`,
    },
    twitter: {
      title: post.metadata.title,
      description: post.metadata.description,
      card: "summary_large_image",
      creator: "@dastanozgeldi",
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const { default: Post } = await import(`@/posts/${slug}.mdx`);
  return (
    <>
      <Suspense fallback={<>... views</>}>
        <Views slug={slug} />
      </Suspense>
      <div className="prose">
        <Post />
      </div>
    </>
  );
}
