import postsData from "@/config/posts.json";
import redis from "./redis";

export type Post = {
  slug: string;
  date: string;
  title: string;
  views: number;
  viewsFormatted: string;
};

// shape of the HSET in redis
type Views = {
  [key: string]: string;
};

export const getPosts = async () => {
  const allViews: null | Views = await redis.get("views");
  const posts = postsData.posts.map((post): Post => {
    const views = Number(allViews?.[post.slug] ?? 0);
    return {
      ...post,
      views,
      viewsFormatted: views.toLocaleString(),
    };
  });
  return posts;
};
