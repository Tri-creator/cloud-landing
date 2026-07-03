'use client'

import React, { useState, useEffect } from 'react'
import type { HeroBannerBlock as HeroBannerBlockType } from '@/payload-types'
import Link from 'next/link'
import { Cctv, ShieldCheck, Monitor, Cloud } from 'lucide-react'

const ICONS = {
  play: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  arrowRight: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-5 h-5 ml-1"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
}

const AnimatedStatValue = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0)

  const number = parseFloat(value.replace(/[^0-9.]/g, '')) || 0
  const prefix = value.startsWith('$') ? '$' : ''
  const suffix = value.replace(/[0-9.]/g, '')

  useEffect(() => {
    let animationFrame: number
    const duration = 18000
    const startTime = performance.now()

    const easeOutExpo = (x: number) => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
    }

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutExpo(progress)

      setCount(number * easedProgress)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(number)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [number])

  const display = value.includes('.') ? count.toFixed(1) : Math.floor(count).toString()

  return (
    <>
      {prefix}
      {display}
      {suffix}
    </>
  )
}
const ResolutionAnimation = () => {
  const levels = ['720p', '1080p', '2K', '4K']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index >= levels.length - 1) return

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1)
    }, 700)

    return () => clearTimeout(timer)
  }, [index])

  return (
    <span key={levels[index]} className="resolution-animation">
      {levels[index]}
    </span>
  )
}
export const HeroBannerComponent: React.FC<
  HeroBannerBlockType & { disableInnerContainer?: boolean }
> = ({ badge, heading, subheading, primaryCTA, secondaryCTA, stats }) => {
  const [scrollY, setScrollY] = useState(0)

  const statIcons = [
    <Cctv key="cctv" size={34} strokeWidth={2} />,
    <ShieldCheck key="shield" size={34} strokeWidth={2} />,
    <Monitor key="monitor" size={34} strokeWidth={2} />,
    <Cloud key="cloud" size={34} strokeWidth={2} />,
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="hero-banner relative min-h-screen flex items-center overflow-hidden">
      <div className="hero-bg absolute inset-0" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <div className="hero-gradient absolute inset-0" />
        <div className="hero-grid absolute inset-0" />
        <div className="orb orb-1 absolute" />
        <div className="orb orb-2 absolute" />
        <div className="orb orb-3 absolute" />
      </div>

      <div className="container relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <div className="inline-flex items-center gap-2 hero-badge mb-6 animate-fade-in-up">
              <span className="badge-dot" />
              <span>{badge}</span>
            </div>
          )}

          {heading && (
            <h1 className="hero-heading mb-6 animate-fade-in-up animation-delay-100">
              {heading}
            </h1>
          )}

          {subheading && (
            <p className="hero-subheading mb-10 animate-fade-in-up animation-delay-200">
              {subheading}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in-up animation-delay-300">
            {primaryCTA?.label && (
              <button
                type="button"
                className="btn-primary-hero group"
                onClick={() => {
                  document.getElementById('why-vcv')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }}
              >
                {primaryCTA.label}
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  {ICONS.arrowRight}
                </span>
              </button>
            )}

            {secondaryCTA?.label && (
              <Link href={secondaryCTA.href || '#'} className="btn-secondary-hero group">
                {ICONS.play}
                {secondaryCTA.label}
              </Link>
            )}
          </div>

          {Array.isArray(stats) && stats.length > 0 && (
            <div className="hero-stats-grid animate-fade-in-up animation-delay-400">
              {stats.map((stat, i) => (
                <div key={i} className="hero-stat-item">
                  <div className="hero-stat-value">
                      {stat.value === '24/7' ? (
    '24/7'
  ) : stat.value === '4K' ? (
    <ResolutionAnimation />
  ) : (
    <AnimatedStatValue value={stat.value} />
  )}
                  </div>

                  <div className="hero-stat-label">{stat.label}</div>

                  <div className="hero-stat-icon">{statIcons[i]}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  )
}