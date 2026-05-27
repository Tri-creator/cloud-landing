'use client'
import React, { useState, useEffect } from 'react'
import type { HeroBannerBlock as HeroBannerBlockType } from '@/payload-types'
import Link from 'next/link'

const ICONS = {
  play: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  arrowRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 ml-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
}

export const HeroBannerComponent: React.FC<HeroBannerBlockType & { disableInnerContainer?: boolean }> = ({
  badge,
  heading,
  subheading,
  primaryCTA,
  secondaryCTA,
  stats,
}) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-banner relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="hero-bg absolute inset-0" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <div className="hero-gradient absolute inset-0" />
        <div className="hero-grid absolute inset-0" />
        {/* Floating orbs */}
        <div className="orb orb-1 absolute" />
        <div className="orb orb-2 absolute" />
        <div className="orb orb-3 absolute" />
      </div>

      <div className="container relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 hero-badge mb-6 animate-fade-in-up">
              <span className="badge-dot" />
              <span>{badge}</span>
            </div>
          )}

          {/* Heading */}
          {heading && (
            <h1 className="hero-heading mb-6 animate-fade-in-up animation-delay-100">
              {heading}
            </h1>
          )}

          {/* Subheading */}
          {subheading && (
            <p className="hero-subheading mb-10 animate-fade-in-up animation-delay-200">
              {subheading}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in-up animation-delay-300">
            {primaryCTA?.label && (
              <Link href={primaryCTA.href || '#'} className="btn-primary-hero group">
                {primaryCTA.label}
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  {ICONS.arrowRight}
                </span>
              </Link>
            )}
            {secondaryCTA?.label && (
              <Link href={secondaryCTA.href || '#'} className="btn-secondary-hero group">
                {ICONS.play}
                {secondaryCTA.label}
              </Link>
            )}
          </div>

          {/* Stats */}
          {Array.isArray(stats) && stats.length > 0 && (
            <div className="hero-stats-grid animate-fade-in-up animation-delay-400">
              {stats.map((stat, i) => (
                <div key={i} className="hero-stat-item">
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  )
}
