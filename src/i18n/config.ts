export const LOCALES = ['en', 'vi'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'vi'
export const LOCALE_COOKIE = 'locale'

export const LOCALE_LABELS: Record<Locale, string> = {
  vi: 'VI',
  en: 'EN',
}

export const LOCALE_FLAGS: Record<Locale, string> = {
  vi: '🇻🇳',
  en: '🇬🇧',
}

export const LOCALE_FULL_LABELS: Record<Locale, string> = {
  vi: 'Tiếng Việt',
  en: 'English',
}
