'use client'
import React, { useState } from 'react'
import type { FAQBlock as FAQBlockType } from '@/payload-types'

export const FAQBlockComponent: React.FC<FAQBlockType & { disableInnerContainer?: boolean }> = ({
  badge,
  heading,
  subheading,
  items,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="faq-section py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="section-header text-center mb-16">
            {badge && <div className="section-badge mb-4">{badge}</div>}
            {heading && <h2 className="section-heading mb-4">{heading}</h2>}
            {subheading && <p className="section-subheading max-w-2xl mx-auto">{subheading}</p>}
          </div>

          {/* FAQ items */}
          {Array.isArray(items) && items.length > 0 && (
            <div className="faq-list">
              {items.map((item, i) => (
                <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                  >
                    <span>{item.question}</span>
                    <span className={`faq-chevron ${openIndex === i ? 'rotate-180' : ''}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
