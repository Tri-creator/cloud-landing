import { Config } from '@/payload-types'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'
import { type DataFromGlobalSlug, getPayload } from 'payload'

import { DEFAULT_LOCALE, type Locale } from '@/i18n/config'

type Global = keyof Config['globals']

async function getGlobal<T extends Global>(
  slug: T,
  depth = 0,
  locale: Locale = DEFAULT_LOCALE,
): Promise<DataFromGlobalSlug<T>> {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
    locale,
  })

  return global
}

/**
 * Returns an unstable_cache function keyed by slug + locale.
 * Cache is invalidated via the `global_${slug}` tag (revalidateTag covers all locales).
 */
export const getCachedGlobal = <T extends Global>(
  slug: T,
  depth = 0,
  locale: Locale = DEFAULT_LOCALE,
) =>
  unstable_cache(async () => getGlobal<T>(slug, depth, locale), [slug, String(depth), locale], {
    tags: [`global_${slug}`],
  })
