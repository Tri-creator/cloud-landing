# Landing-Cloud — Agent Instructions

## Project Overview

Payload CMS v3 + Next.js 16 landing page manager. Goal: manage landing pages and global site config as dynamically as possible via admin panel. Bilingual (en / vi).

Stack: **Payload 3.84** · **Next.js 16** · **React 19** · **PostgreSQL** (via `@payloadcms/db-postgres`) · **TypeScript** · **pnpm**

Reference: [`CLAUDE.md`](./CLAUDE.md) → [`/.claude/skills/payload/SKILL.md`](./.claude/skills/payload/SKILL.md)

---

## Essential Commands

```bash
pnpm dev              # Start dev server (port 3000)
pnpm build            # Production build + sitemap
pnpm start            # Serve production build

pnpm test:int         # Vitest integration tests (tests/int/)
pnpm test:e2e         # Playwright e2e tests (tests/e2e/)

pnpm generate:types   # Regenerate src/payload-types.ts after schema changes
pnpm generate:importmap  # Regenerate admin import map after adding admin components

pnpm lint             # ESLint check
pnpm lint:fix         # ESLint auto-fix
```

> Always run `pnpm generate:types` after modifying any collection/block/global config.

---

## Architecture

### Collections (`src/collections/`)

| Slug           | Purpose                                                  |
| -------------- | -------------------------------------------------------- |
| `pages`        | Layout-builder pages with Hero + blocks + SEO            |
| `posts`        | Blog/news articles; draft-enabled; richtext Lexical      |
| `products`     | Security cameras (category, resolution, features, price) |
| `testimonials` | Customer testimonials (name, role, rating 1–5, featured) |
| `categories`   | Nested taxonomy for posts (`nestedDocsPlugin`)           |
| `media`        | Uploads to `public/media`; focal point; multiple sizes   |
| `users`        | Admin auth users                                         |

### Globals (`src/Footer/`, `src/Header/`)

Each global lives in its own directory alongside `config.ts`, `Component.tsx`, `RowLabel.tsx`, and a `hooks/` subfolder.

### Layout Blocks (`src/blocks/`)

Every block has exactly two files:

- `config.ts` — Payload block field definition
- `Component.tsx` — React render component

`RenderBlocks.tsx` dispatches to the correct component by block type.

Current blocks: `ArchiveBlock` · `Banner` · `CallToAction` · `Code` · `Content` · `FAQBlock` · `FeaturesBlock` · `Form` · `HeroBanner` · `MediaBlock` · `PricingBlock` · `ProductsBlock` · `RelatedPosts` · `TestimonialsBlock`

### Heros (`src/heros/`)

`RenderHero.tsx` dispatches hero types: `HighImpact` · `LowImpact` · `MediumImpact` · `PostHero`

### Plugins (`src/plugins/index.ts`)

`redirectsPlugin` · `nestedDocsPlugin` · `seoPlugin` · `formBuilderPlugin` · `searchPlugin`

---

## Key Conventions

### File Structure

- Collections with hooks → `CollectionName/index.ts` + `hooks/` subdir
- Simple collections → single file (`Categories.ts`, `Media.ts`)
- New blocks → create `src/blocks/BlockName/config.ts` + `Component.tsx`, register in `RenderBlocks.tsx`

### Access Control

Centralized in `src/access/`:

- `anyone.ts` — public
- `authenticated.ts` — logged-in users only
- `authenticatedOrPublished.ts` — public if published, auth otherwise

### Path Alias

`@/` maps to `src/`. Use it for all internal imports.

### TypeScript Types

`src/payload-types.ts` is **auto-generated** — never edit by hand. Run `pnpm generate:types` after schema changes.

### Localization

All user-facing fields support `en` / `vi`. Add `localized: true` to fields that need translation. Default locale is `en` with fallback enabled.

### Revalidation Pattern

Collections that affect the frontend use `afterChange` / `afterDelete` hooks with `revalidatePath` / `revalidateTag`. See `Posts/hooks/` and `Pages/hooks/` for examples.

### defaultPopulate

`Pages` and `Posts` define `defaultPopulate` for type-safe shallow population — follow the same pattern for new collections.

### Seeding

Seed endpoint at `src/endpoints/seed/`. Use for local dev data setup.

---

## Environment Variables

```env
DATABASE_URL=postgresql://...
PAYLOAD_SECRET=...
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
CRON_SECRET=...
PREVIEW_SECRET=...
```

---

## Testing

- **Integration**: Vitest · `tests/int/` · `pnpm test:int`
- **E2E**: Playwright · `tests/e2e/` · `pnpm test:e2e`
- Test helpers: `tests/helpers/login.ts`, `tests/helpers/seedUser.ts`

---

## Common Pitfalls

- After any schema change, run `pnpm generate:types` and `pnpm generate:importmap`
- Blocks must be registered in **both** the collection/page `layout` field array **and** `RenderBlocks.tsx`
- Do not edit `src/payload-types.ts` manually
- PostgreSQL is the actual DB adapter (not MongoDB despite `.env.example` comment)
- All `@payloadcms/*` packages must stay on the **same version** (`3.84.0`)
