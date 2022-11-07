import { Page } from "../../components/Layout/Page";
import { getAllPostsIds, getPostData } from "../../lib/posts";

type PostProps = {
  postData: {
    data: { title: string; date: string };
    contentHtml: string;
  };
};

export default function Post({ postData }: PostProps) {
  return (
    <Page title={postData.data.title}>
      <h1 className="text-center font-extrabold text-2xl sm:text-4xl">
        {postData.data.title}
      </h1>
      <p className="text-center text-gray-500">{postData.data.date}</p>
      <div
        className="post"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </Page>
  );
}

export const getStaticPaths = async () => {
  const paths = getAllPostsIds();
  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const postData = await getPostData(params.id);
  return {
    props: { postData },
  };
};
