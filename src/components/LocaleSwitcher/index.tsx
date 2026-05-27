'use client'

import React, { useTransition } from 'react'

import { LOCALE_FLAGS, LOCALE_FULL_LABELS, LOCALES } from '@/i18n/config'
import { useLocale } from '@/providers/Locale'

/**
 * No props needed — reads & sets locale via LocaleProvider context.
 * Locale change is instant (no router.refresh()); only the Header re-fetches.
 */
export const LocaleSwitcher: React.FC = () => {
  const { locale: currentLocale, setLocale } = useLocale()
  const [isPending, startTransition] = useTransition()

  const handleSwitch = (next: typeof currentLocale) => {
    if (next === currentLocale || isPending) return
    startTransition(async () => {
      await setLocale(next)
    })
  }

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-border bg-background p-0.5">
      {LOCALES.map((locale) => {
        const isActive = locale === currentLocale
        return (
          <button
            key={locale}
            onClick={() => handleSwitch(locale)}
            disabled={isPending}
            aria-label={`Switch to ${LOCALE_FULL_LABELS[locale]}`}
            aria-pressed={isActive}
            className={[
              'flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold transition-all',
              isActive
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
            ].join(' ')}
          >
            <span aria-hidden="true">{LOCALE_FLAGS[locale]}</span>
            <span>{locale.toUpperCase()}</span>
          </button>
        )
      })}
    </div>
  )
}
