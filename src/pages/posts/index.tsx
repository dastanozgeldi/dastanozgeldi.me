import Link from "next/link";
import Page from "../../components/Page";
import { getSortedPostsData } from "../../lib/posts";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <Page title="Posts">
      <h1 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-800">
        I like to write.
      </h1>
      {posts &&
        posts.map(({ id, data }: Post) => (
          <div className="border-white border-2 rounded-xl my-4" key={id}>
            {/* eslint-disable @next/next/no-img-element */}
            <img
              className="rounded-t-xl border-b-2"
              src={data.preview}
              alt="Post Preview"
            />
            <div className="text-center p-4">
              <Link href={`/posts/${id}`}>
                <a>
                  <span>{data.date}</span> - {data.title}
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
