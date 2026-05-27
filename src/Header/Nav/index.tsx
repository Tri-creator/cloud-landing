'use client'

import React from 'react'

import type { Locale } from '@/i18n/config'
import type { Header as HeaderType } from '@/payload-types'

import { CMSNav } from '@/components/DropdownLink'
import { CMSLink } from '@/components/Link'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'

export const HeaderNav: React.FC<{ data: HeaderType; locale: Locale }> = ({ data, locale }) => {
  const navItems = data?.navItems || []
  const justify = data?.justify || 'start'
  const alignItems = data?.alignItems || 'start'
  return (
    <nav className={`flex relative h-full w-full gap-3 items-${alignItems} justify-${justify}`}>
      {navItems.map(({ itemType, dropdown, link }, i) => {
        if (itemType === 'icon') {
          return <CMSLink key={i} {...link} appearance="link" />
        } else if (itemType === 'dropdown') {
          return <CMSNav key={i} items={dropdown} />
        } else {
          return <CMSLink key={i} {...link} appearance="link" />
        }
      })}
      <LocaleSwitcher />
    </nav>
  )
}
