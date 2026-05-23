import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description: "Small utilities I built. Each tool lives at /tools/<name>.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <div>
      <p className="text-sm text-zinc-500">
        <span className="accent">$</span> ls /tools
      </p>
      <h1 className="mt-1 text-2xl font-semibold tracking-tight">tools</h1>
      <p className="mt-4 text-sm text-zinc-500 font-sans">
        Nothing here yet. Each tool will live at{" "}
        <code className="font-mono text-zinc-700 dark:text-zinc-300">
          /tools/&lt;name&gt;
        </code>
        .
      </p>
    </div>
  );
}
