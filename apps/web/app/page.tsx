import Link from "next/link";
import { readPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export default function HomePage() {
  const recent = readPosts().slice(0, 3);

  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Tanishq Patidar</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Engineer. I build things on the web and write about it.
        </p>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            Recent posts
          </h2>
          <Link
            href="/blog"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            All posts →
          </Link>
        </div>
        {recent.length === 0 ? (
          <p className="text-sm text-zinc-500 py-4">No posts yet.</p>
        ) : (
          <div>
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
