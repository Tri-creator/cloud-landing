import { cookies } from 'next/headers'

import { DEFAULT_LOCALE, LOCALE_COOKIE, LOCALES, type Locale } from './config'

/**
 * Server-side utility — reads the locale cookie.
 * Falls back to DEFAULT_LOCALE when cookie is absent or invalid.
 * Call this in any Server Component / Route Handler.
 */
export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const value = cookieStore.get(LOCALE_COOKIE)?.value
  return LOCALES.includes(value as Locale) ? (value as Locale) : DEFAULT_LOCALE
}
