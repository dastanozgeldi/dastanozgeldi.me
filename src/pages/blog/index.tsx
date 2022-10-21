import Link from "next/link";
import Page from "../../components/Layout/Page";
import { getSortedPostsData } from "../../lib/posts";

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <Page title="Blog">
      <p className="bg-gray-200 dark:bg-gray-700 mt-4 mb-8 rounded-xl px-8 py-4">
        I enjoy writing about my progress throughout some period of time.
      </p>
      {posts &&
        posts.map(({ id, data }) => (
          <Link key={id} href={`/blog/${id}`}>
            <a>
              <div className="my-2 p-4 duration-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <span className="text-gray-500">{data.date}</span>
              </div>
            </a>
          </Link>
        ))}
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: { posts: getSortedPostsData() },
  };
}
