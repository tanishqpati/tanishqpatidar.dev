import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group py-5 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-medium group-hover:underline underline-offset-4">
            {post.title}
          </h2>
          {post.date && (
            <time
              dateTime={post.date}
              className="text-xs text-zinc-500 shrink-0"
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          )}
        </div>
        {post.summary && (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {post.summary}
          </p>
        )}
        {post.tags.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="text-[11px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </Link>
    </article>
  );
}
