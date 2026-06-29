'use client'

import { useEffect, useState } from 'react'
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
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    const header = document.querySelector('.site-header') as HTMLElement | null

    if (!section) return

    const headerHeight = header?.offsetHeight || 0
    const sectionTop = section.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: sectionTop - headerHeight - 12,
      behavior: 'smooth',
    })

    setActiveId(id)
  }

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home'

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (!section) return

        const rect = section.getBoundingClientRect()

        if (rect.top <= 140 && rect.bottom >= 140) {
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
        <img width="200" height="200" src="/clients/8.png" alt="VCV Cloud Camera"></img>
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}
        </button>
        <nav className={`site-nav ${open ? 'show' : ''}`}>
         {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
               scrollToSection(item.id)
                setOpen(false)
            }}
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