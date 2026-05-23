import type { Metadata } from "next";
import Link from "next/link";
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
  const url = `/blog/${slug}`;
  return {
    title: meta.title,
    description: meta.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: meta.title,
      description: meta.summary,
      publishedTime: meta.date || undefined,
      authors: ["Tanishq Patidar"],
      tags: meta.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.summary,
    },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.summary,
    datePublished: meta.date,
    keywords: meta.tags.join(", "),
    author: { "@type": "Person", name: "Tanishq Patidar" },
    url: `https://tanishqpatidar.dev/blog/${slug}`,
    mainEntityOfPage: `https://tanishqpatidar.dev/blog/${slug}`,
  };

  return (
    <>
      <header className="mb-10">
        <Link
          href="/blog"
          className="tlink text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          <span className="accent">$</span> cd ..
        </Link>
        <div className="mt-6 flex items-baseline gap-3 text-sm text-zinc-500">
          {meta.date && (
            <time dateTime={meta.date} className="tabular-nums">
              [{meta.date}]
            </time>
          )}
          {meta.tags.map((t) => (
            <span key={t} className="text-xs">#{t}</span>
          ))}
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {meta.title}
        </h1>
        {meta.summary && (
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 font-sans text-[15px] leading-7">
            {meta.summary}
          </p>
        )}
      </header>
      <article className="prose">
        <MDX />
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
