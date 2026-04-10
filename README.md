# Startup Ideas

A Next.js (App Router) demo: curated “startup idea” listings with search, filters, a Brickly-inspired long-form layout, and a sample investor-style summary block.

## Prerequisites

- Node.js 20+ recommended
- npm (ships with Node)

## Local setup

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local` if you want to override the site URL locally (optional). By default, metadata uses `http://localhost:3000`.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | No | Public URL of the site, **no trailing slash** (e.g. `https://startup-ideas.vercel.app`). Drives `metadataBase` for Open Graph and social previews. Defaults to `http://localhost:3000` when unset. |

Copy from `.env.example` and commit **only** `.env.example`, not `.env.local`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint |

## Deploy on Vercel

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Under **Environment Variables**, add:
   - **Name:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** your production URL, e.g. `https://<project>.vercel.app` (use the real domain once you have it; update if you add a custom domain).
5. Deploy. After the first deploy, update `NEXT_PUBLIC_SITE_URL` to the final URL if it changed, then redeploy so link previews use the correct base.

No extra `vercel.json` is required for a standard Next.js app.

## Attribution

UI structure and copy rhythm are **inspired by** [Brickly](https://bricklyhomes.netlify.app/) (investor-style long-form landing). This project is an independent demo with original branding and data.
