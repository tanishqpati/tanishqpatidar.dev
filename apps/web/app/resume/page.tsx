import type { Metadata } from "next";
import Resume from "@/content/resume.mdx";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume.",
};

export default function ResumePage() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
        <a
          href="/resume.pdf"
          download
          className="text-sm px-3 py-1.5 rounded border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          Download PDF
        </a>
      </div>
      <article className="prose">
        <Resume />
      </article>
    </div>
  );
}
