# KJ Marketing Sweden — Next.js site

## Strict design system rule

**Every UI primitive comes from `@blimpify-im/ui`.** No raw HTML/CSS layout
helpers, no Tailwind, no hand-rolled components. The single re-export point is
[src/lib/ui.ts](src/lib/ui.ts) — adding a new design-system primitive means
extending that file, not importing somewhere else.

If a component is missing from the design system, add it there. Never inline
a custom version here.

## Stack

- Next.js 15 (App Router) + React 19
- `@blimpify-im/ui` (linked locally via `file:../../blimpify-ui`)
- `next-intl` for sv/en routing with localized pathnames
- `react-calendly` popup for booking actions
- Resend for the contact form mail delivery

## How content is wired

Sections are real React components. Text strings are read from the existing
JSON in `../kjmarketingsweden-builder-1/public/content/{sv,en}/pages/*.json`
through the `@builder/*` tsconfig path alias and the helpers in
[src/content/loader.ts](src/content/loader.ts).

To edit text: edit the JSON in the builder folder.
To edit layout: edit the React section in `src/sections/`.

## Run locally

```bash
cd KjMarketingsweden26/site
npm install
cp .env.example .env.local   # fill RESEND_API_KEY to enable real mail delivery
npm run dev
# http://localhost:3000 → redirects to /sv
```

## Routes

| Page       | sv URL       | en URL          |
|------------|--------------|-----------------|
| Home       | `/sv`        | `/en`           |
| Services   | `/sv/tjanster`  | `/en/services` |
| Portfolio  | `/sv/portfolio` | `/en/portfolio` |
| Results    | `/sv/resultat`  | `/en/results`  |
| Contact    | `/sv/kontakt`   | `/en/contact`  |

## Deploy to Vercel

1. Push the monorepo to GitHub
2. New Vercel Project → Root Directory: `KjMarketingsweden26/site/`
3. Add env vars from `.env.example`
