'use client'
import React, { useState } from 'react'
import type { PricingBlock as PricingBlockType } from '@/payload-types'

export const PricingBlockComponent: React.FC<PricingBlockType & { disableInnerContainer?: boolean }> = ({
  badge,
  heading,
  subheading,
  plans,
}) => {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <section id="pricing" className="pricing-section py-24">
      <div className="container">
        {/* Section header */}
        <div className="section-header text-center mb-12">
          {badge && <div className="section-badge mb-4">{badge}</div>}
          {heading && <h2 className="section-heading mb-4">{heading}</h2>}
          {subheading && <p className="section-subheading max-w-2xl mx-auto">{subheading}</p>}
        </div>

        {/* Billing toggle */}
        <div className="billing-toggle-wrapper mb-12">
          <button
            onClick={() => setBilling('monthly')}
            className={`billing-btn ${billing === 'monthly' ? 'active' : ''}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`billing-btn ${billing === 'annual' ? 'active' : ''}`}
          >
            Annual
            <span className="save-badge">Save 20%</span>
          </button>
        </div>

        {/* Plans grid */}
        {Array.isArray(plans) && plans.length > 0 && (
          <div className="pricing-grid">
            {plans.map((plan, i) => {
              const price = billing === 'annual' && plan.annualPrice ? plan.annualPrice : plan.price
              return (
                <div key={i} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
                  {plan.highlighted && (
                    <div className="most-popular-badge">Most Popular</div>
                  )}
                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    {plan.description && <p className="plan-description">{plan.description}</p>}
                  </div>
                  <div className="plan-price">
                    <span className="price-currency">$</span>
                    <span className="price-amount">{price}</span>
                    <span className="price-period">/mo</span>
                  </div>
                  {billing === 'annual' && (
                    <p className="annual-note">Billed annually</p>
                  )}
                  {/* Features list */}
                  {Array.isArray(plan.features) && plan.features.length > 0 && (
                    <ul className="plan-features">
                      {plan.features.map((feat, fi) => (
                        <li key={fi} className={`plan-feature-item ${feat.included ? '' : 'excluded'}`}>
                          {feat.included ? (
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-cyan-400 flex-shrink-0">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600 flex-shrink-0">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                            </svg>
                          )}
                          <span>{feat.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={plan.ctaHref || '#'}
                    className={`plan-cta ${plan.highlighted ? 'plan-cta-primary' : 'plan-cta-outline'}`}
                  >
                    {plan.ctaLabel || 'Get Started'}
                  </a>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
