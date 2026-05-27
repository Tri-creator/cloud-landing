'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

import type { Locale } from '@/i18n/config'
import type { Header } from '@/payload-types'
import { useLocale } from '@/providers/Locale'

import { HeaderNav } from './Nav'

interface HeaderClientProps {
  /** Initial data — server-rendered for correct first paint & SEO */
  data: Header
  /** Locale that was used to fetch `data` on the server */
  initialLocale: Locale
}

/**
 * CSR Header — re-fetches from Payload REST API whenever the locale context
 * changes. No router.refresh() needed; only this component re-renders.
 */
export const HeaderClient: React.FC<HeaderClientProps> = ({ data: initialData, initialLocale }) => {
  const [data, setData] = useState<Header>(initialData)
  const { locale } = useLocale()
  const fetchedLocaleRef = useRef<Locale>(initialLocale)

  const [theme, setTheme] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  // Re-fetch header data when locale changes (CSR)
  useEffect(() => {
    if (locale === fetchedLocaleRef.current) return
    fetchedLocaleRef.current = locale

    fetch(`/api/globals/header?locale=${locale}&depth=1`)
      .then((res) => res.json())
      .then((json: Header) => setData(json))
      .catch(() => {
        // Keep current data on error — silent fail, UX stays intact
      })
  }, [locale])

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const remHeight = `${(Number(data.height) / 16).toFixed(4).replace(/\.?0+$/, '')}rem`

  return (
    <header
      className={`vcv-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'vcv-header-scrolled' : ''}`}
      style={{ height: remHeight }}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container h-full">
        <HeaderNav data={data} locale={locale} />
      </div>
    </header>
  )
}
