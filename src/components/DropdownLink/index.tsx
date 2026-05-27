import { cn } from '@/utilities/ui'
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { CMSLink } from '../Link'

export const CMSNav: React.FC<{ items: any }> = ({ items }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  /**
   * {
    "label": "Giải pháp",
    "subMenuItems": [
        {
            "id": "6a028724d9d7453e935e6fbb",
            "link": {
                "type": "reference",
                "newTab": null,
                "reference": {
                    "relationTo": "pages",
                    "value": {
                        "id": 8,
                        "title": "Demo",
                        "slug": "demo"
                    }
                },
                "url": null,
                "label": "Nhà máy, Nhà xưởng & Kho bãi"
            }
        }
    ]
}
   */

  return (
    <nav ref={navRef} className="flex items-center gap-6 h-full relative">
      <div className=" group h-full flex items-center">
        <button
          onClick={() => setOpenDropdown(openDropdown === 0 ? null : 0)}
          className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer outline-none"
        >
          {items.label}
          <ChevronDown
            className={cn('transition-transform duration-200', openDropdown === 0 && 'rotate-180')}
            size={16}
          />
        </button>

        {/* Menu con (Absolute) */}
        {openDropdown === 0 && (
          <ul
            className={cn(
              'absolute top-full z-50 min-w-50  border p-2 shadow-lg rounded-md py-2 animate-in fade-in slide-in-from-top-1',
              items.justify === 'end' ? 'right-0' : 'left-0',
            )}
          >
            {items.subMenuItems?.map((sub: any, sIdx: number) => (
              <li key={sIdx} className="transition-colors">
                <CMSLink {...sub.link} appearance="inline" onClick={() => setOpenDropdown(null)} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
