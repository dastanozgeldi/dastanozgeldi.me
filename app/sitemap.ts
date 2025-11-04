import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const blogUrls = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: site.url,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
