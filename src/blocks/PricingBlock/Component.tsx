'use client'

import React, { useState } from 'react'
import type { PricingBlock as PricingBlockType } from '@/payload-types'

export const PricingBlockComponent: React.FC<
  PricingBlockType & { disableInnerContainer?: boolean }
> = ({ badge, heading, subheading, plans }) => {
  const [billing, setBilling] = useState<'day' | 'storage'>('day')

  const displayPlans = plans?.filter((plan: any) => plan.billingType === billing)

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
            onClick={() => setBilling('day')}
            className={`billing-btn ${billing === 'day' ? 'active' : ''}`}
          >
            Theo ngày
          </button>

          <button
            type="button"
            onClick={() => setBilling('storage')}
            className={`billing-btn ${billing === 'storage' ? 'active' : ''}`}
          >
            Theo dung lượng
          </button>
        </div>

        {Array.isArray(displayPlans) && displayPlans.length > 0 && (
          <div className="pricing-grid">
            {displayPlans.map((plan, i) => (
              <div key={i} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                </div>

                {Array.isArray(plan.features) && (
                  <ul className="plan-features">
                    {plan.features.map((feat, fi) => (
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
                          stroke="#00AEEF"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12.5L10.8 15.3L16.5 9.6"
                          stroke="#00AEEF"
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

                <a href={plan.ctaHref || '#'} className="plan-cta plan-cta-outline">
                  {plan.ctaLabel || 'Liên hệ bán hàng'}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}