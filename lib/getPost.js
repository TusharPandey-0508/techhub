import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getPost(slug) {
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return {
    meta: data,
    content: htmlContent,
  };
}

