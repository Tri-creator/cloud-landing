---
applyTo: 'src/blocks/**'
---

# Block Authoring Conventions

Every block in this project follows a strict two-file structure:

```
src/blocks/BlockName/
  config.ts       ← Payload block field definition
  Component.tsx   ← React render component
```

## `config.ts` Template

```ts
import type { Block } from 'payload'

export const MyBlock: Block = {
  slug: 'myBlock',
  interfaceName: 'MyBlock',
  fields: [
    // fields here — add localized: true for translatable content
  ],
}
```

## `Component.tsx` Template

```tsx
import React from 'react'
import type { MyBlock as MyBlockType } from '@/payload-types'

export const MyBlockComponent: React.FC<MyBlockType & { id?: string }> = (props) => {
  const {} = props
  return <section>{/* render */}</section>
}
```

## Registration Checklist

After creating a new block:

1. Add to the page/post `layout` field array in the collection config
2. Import and add to `blockComponents` map in `src/blocks/RenderBlocks.tsx`
3. Run `pnpm generate:types` to update `src/payload-types.ts`
4. For localized fields, add `localized: true` on each translatable field

## Localization

Fields supporting both `en` and `vi` must have `localized: true`:

```ts
{
  name: 'heading',
  type: 'text',
  localized: true,
}
```
