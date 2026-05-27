import React from 'react'

import type { Locale } from '@/i18n/config'

import { HeaderThemeProvider } from './HeaderTheme'
import { LocaleProvider } from './Locale'
import { ThemeProvider } from './Theme'

export const Providers: React.FC<{
  children: React.ReactNode
  initialLocale: Locale
}> = ({ children, initialLocale }) => {
  return (
    <ThemeProvider>
      <LocaleProvider initialLocale={initialLocale}>
        <HeaderThemeProvider>{children}</HeaderThemeProvider>
      </LocaleProvider>
    </ThemeProvider>
  )
}
