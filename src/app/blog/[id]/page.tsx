import { getAllPostsIds, getPostData } from "@/lib/posts";
import styles from "@/styles/Post.module.css";

const Post = async ({ params }: any) => {
  const postData = await getPostData(params.id);

  return (
    <div className="pb-24">
      <h1 className="text-center font-extrabold text-2xl sm:text-4xl">
        {postData.data.title}
      </h1>
      <p className="text-center text-gray-500">{postData.data.date}</p>
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const paths = getAllPostsIds();
  return { paths, fallback: false };
};
