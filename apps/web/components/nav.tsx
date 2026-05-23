import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/blog", label: "blog" },
  { href: "/resume", label: "cv" },
  // { href: "/tools", label: "tools" }, // hidden until first tool ships
];

export function Nav() {
  return (
    <header className="border-b border-dashed border-zinc-300 dark:border-zinc-800 sticky top-0 z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur">
      <nav className="mx-auto max-w-2xl px-6 py-3 flex items-center justify-between text-sm">
        <Link href="/" className="tlink text-zinc-700 dark:text-zinc-300">
          <span className="accent">~/</span>tanishq.dev
        </Link>
        <ul className="flex items-center gap-5">
          {links.map((l) => (
            <li key={l.href} className="flex items-center gap-1.5">
              <span className="accent select-none">$</span>
              <Link
                href={l.href}
                className="tlink text-zinc-600 dark:text-zinc-400"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
