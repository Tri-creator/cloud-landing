export const LOCALES = ['en', 'vi'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'
export const LOCALE_COOKIE = 'locale'

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  vi: 'VI',
}

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: '🇬🇧',
  vi: '🇻🇳',
}

export const LOCALE_FULL_LABELS: Record<Locale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
}
