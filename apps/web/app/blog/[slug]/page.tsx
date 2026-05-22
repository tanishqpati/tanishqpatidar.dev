import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostMetaBySlug, listPostSlugs } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return listPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMetaBySlug(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.summary,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getPostMetaBySlug(slug);
  if (!meta) notFound();

  const { default: MDX } = await import(`@/content/posts/${slug}.mdx`);

  return (
    <article className="prose">
      <header className="mb-8 not-prose">
        <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
        {meta.date && (
          <time
            dateTime={meta.date}
            className="block mt-2 text-sm text-zinc-500"
          >
            {new Date(meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
      </header>
      <MDX />
    </article>
  );
}
