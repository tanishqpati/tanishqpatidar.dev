import type { Metadata } from "next";
import Resume from "@/content/resume.mdx";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Tanishq Patidar — Backend-focused full-stack engineer. Resume / CV.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "CV — Tanishq Patidar",
    url: "/resume",
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Tanishq Patidar",
    jobTitle: "Backend Engineer",
    email: "mailto:tanishq.pati@gmail.com",
    url: "https://tanishqpatidar.dev/resume",
    worksFor: { "@type": "Organization", name: "Mosaic Wellness" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Lovely Professional University",
    },
  },
};

export default function ResumePage() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-8 gap-4 flex-wrap">
        <div>
          <p className="text-sm text-zinc-500">
            <span className="accent">$</span> cat resume.md
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">cv</h1>
        </div>
        <a
          href="/resume.pdf"
          download
          className="tlink text-sm px-3 py-1.5 border border-dashed border-zinc-400 dark:border-zinc-700 hover:border-current rounded text-zinc-700 dark:text-zinc-300"
        >
          [ download.pdf ]
        </a>
      </div>
      <article className="prose">
        <Resume />
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
