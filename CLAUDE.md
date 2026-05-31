# Project rules

## Stack
- Next.js 15, app router, TypeScript
- @blimpify-im/ui for ALL components and layout — no exceptions
- No CSS frameworks (no Tailwind, no Bootstrap, nothing)
- Swedish only — no i18n, no next-intl, no translation keys

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
