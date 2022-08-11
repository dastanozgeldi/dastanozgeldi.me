import Link from "next/link";
import Page from "../../components/Layout/Page";
import Notification from "../../components/Notification";
import { getSortedPostsData } from "../../lib/posts";

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <Page title="Blog">
      <Notification>
        I enjoy writing about my progress throughout some period of time.
      </Notification>
      {posts &&
        posts.map(({ id, data }: Post) => (
          <Link key={id} href={`/blog/${id}`}>
            <a>
              <div className="my-8">
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
