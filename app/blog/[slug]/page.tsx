import PostHeader from "./_components/post-header";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { default: Post, metadata } = await import(`@/posts/${slug}.mdx`);

  return (
    <>
      <PostHeader slug={slug} metadata={metadata} />

      <div className="prose">
        <Post />
      </div>
    </>
  );
}
