import Page from "../../components/Page";
import { getAllPostsIds, getPostData } from "../../lib/posts";

export default function Post({
  postData,
}: {
  postData: { data: { title: string; date: string }; contentHtml: string };
}) {
  return (
    <Page title={postData.data.title}>
      <article>
        <h1 className="text-center text-2xl sm:text-4xl">
          {postData.data.title}
        </h1>
        <p className="text-center">{postData.data.date}</p>
        <div
          className="post"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: { postData },
  };
}
