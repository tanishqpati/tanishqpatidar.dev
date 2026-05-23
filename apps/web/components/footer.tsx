export function Footer() {
  return (
    <footer className="border-t border-dashed border-zinc-300 dark:border-zinc-800">
      <div className="mx-auto max-w-2xl px-6 py-5 text-xs text-zinc-500 flex flex-wrap items-center justify-between gap-3">
        <span>
          <span className="accent select-none">$</span> echo &quot;© {new Date().getFullYear()} Tanishq Patidar&quot;
        </span>
        <div className="flex items-center gap-4">
          <a
            href="mailto:tanishq.pati@gmail.com"
            className="tlink hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="tlink hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="tlink hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
