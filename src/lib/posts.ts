import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src", "assets", "posts");

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

  // @ts-ignore: next-line
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else return 0;
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
