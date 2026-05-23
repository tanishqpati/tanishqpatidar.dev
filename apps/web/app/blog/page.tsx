import type { Metadata } from "next";
import { readPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on backend, event-driven systems, AI integrations, and engineering practice.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Tanishq Patidar",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  const posts = readPosts();

  return (
    <div>
      <p className="text-sm text-zinc-500">
        <span className="accent">$</span> ls /blog
      </p>
      <h1 className="mt-1 text-2xl font-semibold tracking-tight">blog</h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 font-sans">
        {posts.length} {posts.length === 1 ? "entry" : "entries"} · newest
        first.
      </p>

      <div className="mt-8">
        {posts.length === 0 ? (
          <p className="text-sm text-zinc-500">{"// no posts yet"}</p>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>
    </div>
  );
}
