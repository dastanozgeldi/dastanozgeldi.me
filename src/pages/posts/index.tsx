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
          <div
            className="border-gray-900 dark:border-white my-8 border-2 rounded-2xl"
            key={id}
          >
            {/* eslint-disable @next/next/no-img-element */}
            <img
              className="rounded-t-xl border-b-2"
              src={data.preview}
              alt="Post Preview"
            />
            <div className="text-center p-4">
              <Link href={`/posts/${id}`}>
                <a>
                  <span className="highlight">{data.date}</span> - {data.title}
                </a>
              </Link>
            </div>
          </div>
        ))}
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: { posts: getSortedPostsData() },
  };
}
