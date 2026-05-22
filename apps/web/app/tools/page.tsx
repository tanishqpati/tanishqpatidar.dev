import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description: "Small things I built.",
};

export default function ToolsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Tools</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Small utilities. More soon.
      </p>
      <p className="text-sm text-zinc-500">
        Nothing here yet. Each tool will live at <code>/tools/&lt;name&gt;</code>.
      </p>
    </div>
  );
}
