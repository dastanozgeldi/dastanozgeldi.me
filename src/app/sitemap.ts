import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();

  const blogUrls = posts.map((post) => ({
    url: `https://ozgeldi.tech/blog/${post.slug}`,
  }));

  return [
    {
      url: site.url,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
