import Link from "next/link";
import { readPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export default function HomePage() {
  const recent = readPosts().slice(0, 3);

  return (
    <div>
      <section className="mb-14">
        <p className="text-sm text-zinc-500">
          <span className="accent">&gt;</span> whoami
        </p>
        <h1 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          tanishq patidar<span className="cursor" aria-hidden="true" />
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400 font-sans">
          Backend-focused full-stack engineer. I design event-driven systems,
          ship multi-tenant SaaS, and write about the bits worth writing down.
        </p>
      </section>

      <section>
        <div className="flex items-baseline gap-2 mb-3 text-sm">
          <span className="text-zinc-700 dark:text-zinc-300">
            <span className="accent">#</span> recent
          </span>
          <span className="leader" aria-hidden="true" />
          <Link
            href="/blog"
            className="tlink text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 shrink-0"
          >
            $ ls /blog →
          </Link>
        </div>
        {recent.length === 0 ? (
          <p className="text-sm text-zinc-500 py-4">{"// no posts yet"}</p>
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
