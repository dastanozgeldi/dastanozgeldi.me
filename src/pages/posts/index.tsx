import Link from "next/link";
import Page from "../../components/Layout/Page";
import Notification from "../../components/Notification";
import { getSortedPostsData } from "../../lib/posts";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <Page title="Posts">
      <Notification>
        I enjoy writing about my progress throughout some period of time.
      </Notification>
      {posts &&
        posts.map(({ id, data }: Post) => (
          <Link key={id} href={`/posts/${id}`}>
            <a>
              <div className="my-8">
                <h1 className="text-4xl font-extrabold">{data.title}</h1>
                <span className="highlight">{data.date}</span>
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
