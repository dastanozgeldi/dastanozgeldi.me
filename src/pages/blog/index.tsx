import Link from "next/link";
import { Page } from "layouts";
import { getSortedPostsData } from "lib/posts";

export const getStaticProps = () => {
  return {
    props: {
      posts: getSortedPostsData(),
    },
  };
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
    <a>
      <div className="my-2 p-4 duration-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <span className="text-gray-500">{data.date}</span>
      </div>
    </a>
  </Link>
);

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <Page title="Blog">
      {posts.length > 0 ? (
        <div>
          <p className="bg-gray-200 dark:bg-gray-800 mt-4 mb-8 rounded-xl px-8 py-4">
            I enjoy writing about my progress throughout some period of time.
          </p>
          {posts.map(({ id, data }) => (
            <PostItem key={id} id={id} data={data} />
          ))}
        </div>
      ) : (
        <p className="bg-gray-200 dark:bg-gray-800 mt-4 mb-8 rounded-xl px-8 py-4">
          Posts haven&apos;t been published yet.
        </p>
      )}
    </Page>
  );
};

export default Blog;
