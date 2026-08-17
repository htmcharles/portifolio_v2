# Hatuma Charles — Portfolio

Personal site for Hatuma Charles, a software engineer in Kigali trained at Rwanda Coding Academy.

## Stack

- Next.js 15 (static export)
- TypeScript
- Tailwind CSS
- Framer Motion

## Local

```bash
git clone https://github.com/htmcharles/portifolio_v2.git
cd portifolio_v2
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Certificates

Drop a PDF into `public/certificates/<issuer>/`. If the issuer already exists in the list, the file attaches to that row. No description text is required.

## Deploy

Render Static Site:

- Build: `pnpm install --frozen-lockfile; pnpm run build`
- Publish directory: `out`
- Env: `NEXT_PUBLIC_SITE_URL=https://hatumacharles.onrender.com`
