import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { site } from "@/config/site";
import { getBlogPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/formatters";
import redis from "@/lib/redis";
import { MDX } from "./mdx";

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata | undefined> {
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

export default async function Post(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.description,
            url: `${site.url}/blog/${post.slug}`,
          }),
        }}
      />

      <h1 className="mb-2 text-3xl font-bold tracking-tighter">
        {post.metadata.title}
      </h1>
      <p className="mb-4 text-muted-foreground">{post.metadata.description}</p>
      <div className="mb-8 flex items-center justify-between text-sm text-muted-foreground">
        <span>{formatDate(post.metadata.date)}</span>
        <Suspense fallback={<>... views</>}>
          <Views slug={post.slug} />
        </Suspense>
      </div>

      <article className="prose prose-neutral">
        <MDX source={post.content} />
      </article>
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  const viewsData = (await redis.get("views")) as {
    slug: string;
    views: number;
  }[];

  const postViews = viewsData.find((view) => view.slug === slug);
  if (postViews) {
    postViews.views += 1;
  } else {
    viewsData.push({ slug, views: 1 });
  }

  await redis.set("views", JSON.stringify(viewsData));

  return <>{postViews?.views.toLocaleString()} views</>;
}
