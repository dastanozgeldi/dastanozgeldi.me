import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read about my thoughts on full-stack development, AI and my general progress.",
};

type Post = {
  id: string;
  data: {
    title: string;
    date: string;
  };
};

const PostItem = ({ id, data }: Post) => (
  <Link href={`/blog/${id}`}>
    <div className="my-2 p-4 duration-500 hover:bg-secondary rounded-md">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <span className="text-gray-500">{data.date}</span>
    </div>
  </Link>
);

const Blog = () => {
  const posts = getSortedPostsData();

  return (
    <div className="pb-24">
      {posts.length > 0 ? (
        <div>
          <p className="bg-secondary mt-4 mb-8 rounded-xl px-8 py-4">
            I enjoy writing about my progress throughout some period of time.
          </p>
          {posts.map(({ id, data }) => (
            <PostItem key={id} id={id} data={data as any} />
          ))}
        </div>
      ) : (
        <p className="bg-secondary mt-4 mb-8 rounded-xl px-8 py-4">
          Posts haven&apos;t been published yet.
        </p>
      )}
    </div>
  );
};

export default Blog;
