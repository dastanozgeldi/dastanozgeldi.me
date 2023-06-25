import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fn) => {
    const id = fn.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fn);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const { data } = matter(fileContents);

    return {
      id,
      data,
    };
  });

  return allPostsData.sort(({ data: a }, { data: b }) => {
    let d1 = a.date;
    let d2 = b.date;
    d1 = d1.split("-").reverse().join("");
    d2 = d2.split("-").reverse().join("");
    return d1 > d2 ? -1 : d1 < d2 ? 1 : 0;
  });
};

export const getAllPostsIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fn) => {
    return {
      params: {
        id: fn.replace(/\.md$/, ""),
      },
    };
  });
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return { id, contentHtml, data };
};
