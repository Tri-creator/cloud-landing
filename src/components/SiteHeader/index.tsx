'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
const menuItems = [
  { label: 'Trang chủ', id: 'home' },
  { label: 'Giải pháp', id: 'why-vcv' },
  { label: 'Dịch vụ', id: 'pricing' },
  { label: 'Đánh giá', id: 'testimonials' },
  { label: 'Khách hàng', id: 'customers'},
  { label: 'Sự kiện', id: 'events' },
  { label: 'Tin tức', id: 'news' },
  { label: 'Câu hỏi', id: 'faq' },
]

export default function SiteHeader() {
  const [activeId, setActiveId] = useState('home')
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (id: string) => {
    setOpen(false)
    setActiveId(id)

    if (pathname !== '/') {
      router.push(`/#${id}`)
      return
    }

    const section = document.getElementById(id)
    const header = document.querySelector('.site-header') as HTMLElement | null

    if (!section) return

    const headerHeight = header?.offsetHeight || 0
    const sectionTop = section.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: sectionTop - headerHeight - 12,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')

    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash)
        const header = document.querySelector('.site-header') as HTMLElement | null

        if (!section) return

        const headerHeight = header?.offsetHeight || 0
        const sectionTop = section.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
          top: sectionTop - headerHeight - 12,
          behavior: 'smooth',
        })

        setActiveId(hash)
      }, 300)
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home'

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (!section) return

        const rect = section.getBoundingClientRect()

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = item.id
        }
      })

      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <img width="170" height="170" src="/clients/8.png" alt="VCV Cloud Camera"></img>

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>

        <nav className={`site-nav ${open ? 'show' : ''}`}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={activeId === item.id ? 'active' : ''}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}