import { getLocale } from '@/i18n/getLocale'
import { getCachedGlobal } from '@/utilities/getGlobals'

import { HeaderClient } from './Component.client'

export async function Header() {
  const locale = await getLocale()
  const headerData = await getCachedGlobal('header', 1, locale)()
  return <HeaderClient data={headerData} initialLocale={locale} />
}
