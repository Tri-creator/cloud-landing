'use client'

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

import { setLocaleAction } from '@/i18n/actions'
import { DEFAULT_LOCALE, type Locale } from '@/i18n/config'

// ─── Context ─────────────────────────────────────────────────────────────────

type LocaleContextValue = {
  locale: Locale
  /** Change locale — writes cookie + updates all subscribers instantly, no router.refresh() */
  setLocale: (locale: Locale) => Promise<void>
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: async () => {},
})

// ─── Provider ─────────────────────────────────────────────────────────────────

interface LocaleProviderProps {
  children: React.ReactNode
  /** Initial locale read server-side from cookie — prevents hydration mismatch */
  initialLocale: Locale
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children, initialLocale }) => {
  const [localeValue, setLocaleValue] = useState<Locale>(initialLocale)

  const setLocale = useCallback(
    async (next: Locale) => {
      if (next === localeValue) return
      await setLocaleAction(next)
      setLocaleValue(next)
    },
    [localeValue],
  )

  const value = useMemo(() => ({ locale: localeValue, setLocale }), [localeValue, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext)
}
