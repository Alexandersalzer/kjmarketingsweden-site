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

## API
- Contact form posts to /api/send-email
- Never use /api/contact

## Code style
- No comments unless explaining a non-obvious decision
- Keep pages under 250 lines — split into src/components/sections/ if longer
- All structural data (image URLs, logos, testimonials) lives in src/data/assets.ts
- No JSON config files
- No content loaders

## Do not touch
- src/app/globals.css
- .npmrc
- package.json dependencies (only drop next-intl and react-calendly)
