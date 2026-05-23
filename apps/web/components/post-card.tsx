import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group py-4 border-b border-dashed border-zinc-300 dark:border-zinc-800 last:border-b-0">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex items-baseline gap-3 text-sm">
          {post.date && (
            <time
              dateTime={post.date}
              className="text-zinc-500 tabular-nums shrink-0"
            >
              [{post.date}]
            </time>
          )}
          <h2 className="text-zinc-800 dark:text-zinc-200 group-hover:underline underline-offset-4 decoration-dashed">
            {post.title}
          </h2>
        </div>
        {post.summary && (
          <p className="mt-1 ml-[6.5ch] text-sm text-zinc-500 dark:text-zinc-400">
            {post.summary}
          </p>
        )}
        {post.tags.length > 0 && (
          <ul className="mt-1.5 ml-[6.5ch] flex flex-wrap gap-x-2 gap-y-0.5 text-xs text-zinc-500">
            {post.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        )}
      </Link>
    </article>
  );
}
