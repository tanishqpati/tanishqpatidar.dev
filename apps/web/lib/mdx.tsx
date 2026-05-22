import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...rest }: ComponentPropsWithoutRef<"a">) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="underline underline-offset-4 decoration-zinc-400 hover:decoration-zinc-900 dark:hover:decoration-zinc-100"
        {...rest}
      >
        {children}
      </a>
    );
  },
};
