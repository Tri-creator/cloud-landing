'use client'

import React, { useEffect, useState } from 'react'
import type { PricingBlock as PricingBlockType } from '@/payload-types'
import { CalendarDays, HardDrive, Star } from 'lucide-react'

export const PricingBlockComponent: React.FC<
  PricingBlockType & { disableInnerContainer?: boolean }
> = ({ badge, heading, subheading, plans }) => {
  const [billing, setBilling] = useState<'day' | 'storage'>('day')
  const [page, setPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const displayPlans = plans?.filter((plan: any) => plan.billingType === billing) || []

  const plansPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(displayPlans.length / plansPerPage)

  const visiblePlans = displayPlans.slice(
    page * plansPerPage,
    page * plansPerPage + plansPerPage,
  )

  const changePage = (type: 'next' | 'prev') => {
    if (totalPages <= 1 || animate) return

    setDirection(type)
    setAnimate(true)

    setTimeout(() => {
      setPage((prev) =>
        type === 'next'
          ? (prev + 1) % totalPages
          : (prev - 1 + totalPages) % totalPages,
      )

      setAnimate(false)
    }, 220)
  }

  const changeBilling = (type: 'day' | 'storage') => {
    setBilling(type)
    setPage(0)
    setAnimate(false)
  }

  return (
    <section id="pricing" className="pricing-section py-24">
      <div className="container">
        <div className="section-header text-center mb-12">
          {badge && <div className="section-badge mb-4">{badge}</div>}
          {heading && <h2 className="section-heading mb-4">{heading}</h2>}
          {subheading && <p className="section-subheading max-w-2xl mx-auto">{subheading}</p>}
        </div>

        <div className="billing-toggle-wrapper mb-12">
          <button
            type="button"
            onClick={() => changeBilling('day')}
            className={`billing-btn ${billing === 'day' ? 'active' : ''}`}
          >
            Theo ngày
          </button>

          <button
            type="button"
            onClick={() => changeBilling('storage')}
            className={`billing-btn ${billing === 'storage' ? 'active' : ''}`}
          >
            Theo dung lượng
          </button>
        </div>

        {visiblePlans.length > 0 && (
          <div className="pricing-slider">
            {totalPages > 1 && (
              <button
                type="button"
                className="pricing-arrow pricing-arrow-left"
                onClick={() => changePage('prev')}
              >
                ❮
              </button>
            )}

            <div className="pricing-viewport">
              <div className={`pricing-grid pricing-grid-animated ${visiblePlans.length === 2 ? 'pricing-grid-two' : ''} ${animate
                ? direction === 'next'
                ? 'pricing-slide-out-left'
                : 'pricing-slide-out-right'
                : 'pricing-slide-in'
              }`}
            >
                {visiblePlans.map((plan: any, i) => (
                  <div
                    key={`${billing}-${page}-${i}`}
                    className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
                  >
                    {plan.highlighted && (
                      <div className="most-popular-badge">PHỔ BIẾN NHẤT</div>
                    )}

                    <div className="pricing-plan-icon">
                      {plan.highlighted ? (
                        <Star size={30} />
                      ) : billing === 'day' ? (
                        <CalendarDays size={30} />
                      ) : (
                        <HardDrive size={30} />
                      )}
                    </div>

                    <div className="plan-header">
                      <h3 className="plan-name">{plan.name}</h3>
                    </div>

                    {Array.isArray(plan.features) && (
                      <ul className="plan-features">
                        {plan.features.map((feat: any, fi: number) => (
                          <li key={fi} className="plan-feature-item">
                            <svg
                              viewBox="0 0 24 24"
                              className="feature-check"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                fill="#00d4ff"
                                stroke="#00d4ff"
                                strokeWidth="2"
                              />
                              <path
                                d="M8 12.5L10.8 15.3L16.5 9.6"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>

                            <span>{feat.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <a
                      href={plan.ctaHref || '#'}
                      className={`plan-cta ${
                        plan.highlighted ? 'plan-cta-primary' : 'plan-cta-outline'
                      }`}
                    >
                      {plan.ctaLabel || 'Liên hệ bán hàng'}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {totalPages > 1 && (
              <button
                type="button"
                className="pricing-arrow pricing-arrow-right"
                onClick={() => changePage('next')}
              >
                ❯
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}