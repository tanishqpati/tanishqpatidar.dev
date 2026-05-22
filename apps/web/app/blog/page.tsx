import type { Metadata } from "next";
import { readPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Posts.",
};

export default function BlogIndexPage() {
  const posts = readPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Blog</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Notes on what I&apos;m building.
      </p>
      {posts.length === 0 ? (
        <p className="text-sm text-zinc-500">No posts yet.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
