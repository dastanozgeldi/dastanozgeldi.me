import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { site } from "@/config/site";
import { getBlogPostBySlug } from "@/lib/blog";
import redis from "@/lib/redis";
import { ViewCounter } from "../view-counter";
import { MDX } from "../[slug]/mdx";

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
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

export default function Post({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

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

      <h1 className="mb-2 text-3xl font-medium tracking-tighter">
        {post.metadata.title}
      </h1>
      <p className="mb-4 text-neutral-600">{post.metadata.description}</p>
      <div className="mb-8 flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600">
          {formatDate(post.metadata.date)}
        </p>
        <Suspense>
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

  return <ViewCounter slug={slug} allViews={viewsData} />;
}
