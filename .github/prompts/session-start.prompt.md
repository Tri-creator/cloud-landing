---
name: session-start
description: >
  Use when starting a new coding session in this project. Loads essential
  project context, recent schema state, and suggests next steps.
---

# Session Start — Landing-Cloud

## Project Snapshot

**Payload CMS v3 landing page manager** — bilingual (en/vi), PostgreSQL, Next.js 16.

## Orientation Checklist

Before writing any code this session, confirm:

1. **Schema up to date?**  
   If you modified collections/blocks/globals last session, run:

   ```bash
   pnpm generate:types
   pnpm generate:importmap
   ```

2. **Dev server running?**

   ```bash
   pnpm dev   # http://localhost:3000 (frontend + /admin)
   ```

3. **What are you working on today?**  
   Common tasks in this project:
   - Add a new landing page block → `src/blocks/NewBlock/`
   - Add a field to a collection → edit `src/collections/CollectionName/`
   - Change global header/footer → `src/Header/` or `src/Footer/`
   - Add localized content → add `localized: true` to fields

## Quick Reference

| Task               | Where                                           |
| ------------------ | ----------------------------------------------- |
| Add block          | `src/blocks/` + register in `RenderBlocks.tsx`  |
| Add hero           | `src/heros/` + register in `RenderHero.tsx`     |
| Add collection     | `src/collections/` + add to `payload.config.ts` |
| Add plugin         | `src/plugins/index.ts`                          |
| Access control     | `src/access/`                                   |
| Shared field types | `src/fields/`                                   |
| Utilities          | `src/utilities/`                                |

## Test Before Committing

```bash
pnpm lint:fix          # Fix lint issues
pnpm test:int          # Integration tests
pnpm test:e2e          # E2E tests (requires running server)
```

See [`AGENTS.md`](../AGENTS.md) for full project conventions.
