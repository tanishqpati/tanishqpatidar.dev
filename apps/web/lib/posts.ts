import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function readPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data } = matter(raw);
    const rawDate = data.date;
    const isoDate =
      rawDate instanceof Date
        ? rawDate.toISOString().slice(0, 10)
        : rawDate
          ? String(rawDate)
          : "";
    return {
      slug,
      title: String(data.title ?? slug),
      date: isoDate,
      summary: String(data.summary ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    } satisfies PostMeta;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostMetaBySlug(slug: string): PostMeta | undefined {
  return readPosts().find((p) => p.slug === slug);
}

export function listPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
