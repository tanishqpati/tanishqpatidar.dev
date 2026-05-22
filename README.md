# tanishqpatidar.dev

Personal site — blog, resume, and a slot for future tools.

## Stack (Phase 1)

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- `@next/mdx` + `gray-matter` for posts/resume
- `rehype-pretty-code` + Shiki for code highlighting
- Turborepo (workspaces under `apps/*`)

## Quickstart

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Routes

- `/` — home
- `/blog` — post index
- `/blog/[slug]` — individual post (sourced from `apps/web/content/posts/*.mdx`)
- `/resume` — MDX resume + downloadable PDF (drop a real one at `apps/web/public/resume.pdf`)
- `/tools` — placeholder; add a tool by creating `apps/web/app/tools/<name>/page.tsx`

## Adding a post

Drop a new `.mdx` file in `apps/web/content/posts/`:

```mdx
---
title: My Post
date: 2026-05-23
summary: One-line teaser.
tags: [tag-a, tag-b]
---

Body in MDX.
```

## Adding a tool

```bash
mkdir -p apps/web/app/tools/my-tool
# create page.tsx (UI) and optionally route.ts (server endpoint)
```

## Scripts

| Command          | What it does                                |
| ---------------- | ------------------------------------------- |
| `pnpm dev`       | Run dev server                              |
| `pnpm build`     | Production build                            |
| `pnpm start`     | Serve the production build                  |
| `pnpm lint`      | ESLint                                      |
| `pnpm typecheck` | `tsc --noEmit`                              |

## Roadmap

Phase 1 (this) ships on Vercel. Later phases migrate to AWS (S3 + CloudFront + Lambda@Edge + DynamoDB), add CDK infra-as-code, GitHub Actions CI/CD, and an AI semantic search feature.
