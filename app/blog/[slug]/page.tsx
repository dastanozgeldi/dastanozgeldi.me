import { Suspense } from "react";
import { formatDate } from "@/lib/formatters";
import Views from "./_components/views";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { default: Post, metadata } = await import(`@/posts/${slug}.mdx`);

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
