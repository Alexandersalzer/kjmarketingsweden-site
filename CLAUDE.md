# Project rules

## Source of truth (READ FIRST)
- This site is a migration of the production site, whose layout/content lives in
  `../kjmarketingsweden-builder-1/public/` (JSON: `pages/`, `shells/`, `design/`).
- Before building or "fixing" any section, find the matching production JSON
  pattern AND the design-system component it renders (in
  `node_modules/@blimpify-im/ui/dist/...`). Reproduce the production behaviour —
  aspect ratios, widths, variants, sticky/grid layout — instead of guessing.
- If the design system already has a component for it (e.g. Flag, the process
  grid, the portfolio carousel item), use it. Do not hand-roll a lookalike.

## Stack
- Next.js 15, app router, TypeScript
- @blimpify-im/ui for ALL components and layout — no exceptions
- No CSS frameworks (no Tailwind, no Bootstrap, nothing)
- Bilingual sv/en (no i18n framework, no next-intl). Swedish is the default and
  stays unprefixed (`/`, `/portfolio`); English is served under `/en` via the
  `[lang]` segment + `src/middleware.ts`. All user-facing copy goes through
  `t(svString, lang)` from `src/i18n` — write the Swedish string inline and wrap
  it; `t` returns it unchanged for sv and the mapped translation for en. Add new
  English translations to `OVERRIDES` in `src/i18n/index.ts`. Build locale-aware
  links with `localePath(lang, path)`. Never hard-code a visible string unwrapped.

## Component usage
- Always import from @blimpify-im/ui via src/lib/ui.ts barrel
- Never write raw <div> or <p> for content — use Body, Heading, Box
- Never write inline styles except for bento grid row/colSpan overrides
- Layout primitives: Section, Container, VStack, HStack, Grid, GridItem, MasonryGrid, Card, Box
- Typography: Heading, Body, Display
- Never reinvent a component that exists in @blimpify-im/ui

## SEO
- Per-page SEO (title, description, keywords, OG, Twitter, structured data) lives
  in `src/data/seo.ts` (sv + en), sourced from the production content `seo` blocks.
- Pages set metadata via `pageMetadata(route, lang, path)` from `src/lib/seo.ts`
  (handles canonical + sv/en hreflang). Favicons + manifest are site-wide in the
  root layout (`siteIcons`/`siteManifest`, hosted on the CDN). JSON-LD via `<JsonLd>`.
- Mirror the production site's SEO exactly; the live site wins over stale JSON.

## API
- Contact form posts to /api/send-email
- Never use /api/contact

## Code style
- No comments unless explaining a non-obvious decision
- Keep pages under 250 lines — split into src/components/sections/ if longer
- All structural data (image URLs, logos, testimonials) lives in src/data/assets.ts
- No JSON config files
- No content loaders

## Design system dependency
- `@blimpify-im/ui` must always be a published version from GitHub Packages.
  NEVER commit a `file:` dependency — the path resolves only on a dev machine
  and Vercel fails every import with "Module not found".
- Publish the design system via `git push` (or CI), never a manual
  `npm publish` from a local copy. If publishing manually is unavoidable, run
  `git fetch && git status` in `../alsa-design-system` FIRST — its version
  field has not been committed since 3.2.1317, so a stale checkout silently
  ships old code as a new version and the site loses changes with a green build.
- After repointing the dependency, verify with a clean install in an empty
  directory (`npm ci` with only package.json/package-lock.json/.npmrc). Simply
  reverting the lockfile is not enough: it keeps `"link": true` pointing at the
  local path, which produces a broken symlink.

## Do not touch
- src/app/globals.css
- .npmrc
- package.json dependencies (only drop next-intl and react-calendly)
