'use server'

import { cookies } from 'next/headers'

import { DEFAULT_LOCALE, LOCALE_COOKIE, LOCALES, type Locale } from './config'

/**
 * Server Action — persists locale preference in a cookie.
 * Called from the LocaleSwitcher client component.
 */
export async function setLocaleAction(locale: Locale): Promise<void> {
  if (!LOCALES.includes(locale)) return

  const cookieStore = await cookies()
  cookieStore.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60, // 1 year
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })
}

/**
 * Returns the current locale from cookie, defaulting to DEFAULT_LOCALE.
 * Safe to call from Server Actions.
 */
export async function getLocaleAction(): Promise<Locale> {
  const cookieStore = await cookies()
  const value = cookieStore.get(LOCALE_COOKIE)?.value
  return LOCALES.includes(value as Locale) ? (value as Locale) : DEFAULT_LOCALE
}
