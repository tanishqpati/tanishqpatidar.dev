export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-2xl px-6 py-6 text-sm text-zinc-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Tanishq Patidar</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
