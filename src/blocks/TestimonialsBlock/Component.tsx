import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { TestimonialsSectionBlock as TestimonialsSectionBlockType } from '@/payload-types'
import Image from 'next/image'

export const TestimonialsBlockComponent: React.FC<TestimonialsSectionBlockType & { disableInnerContainer?: boolean }> = async ({
  badge,
  heading,
  subheading,
  showAll,
  limit,
}) => {
  const payload = await getPayload({ config: configPromise })
  const { docs: testimonials } = await payload.find({
    collection: 'testimonials',
    limit: showAll ? 100 : (limit || 6),
    where: { featured: { equals: true } },
    sort: 'order',
  })

  return (
    <section id="testimonials" className="testimonials-section py-24">
      <div className="container">
        {/* Section header */}
        <div className="section-header text-center mb-16">
          {badge && <div className="section-badge mb-4">{badge}</div>}
          {heading && <h2 className="section-heading mb-4">{heading}</h2>}
          {subheading && <p className="section-subheading max-w-2xl mx-auto">{subheading}</p>}
        </div>

        {testimonials.length > 0 ? (
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                {/* Stars */}
                <div className="testimonial-stars">
                  {Array.from({ length: parseInt(t.rating || '5') }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-amber-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="testimonial-content">
                  &ldquo;{t.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {t.avatar && typeof t.avatar === 'object' && t.avatar.url ? (
                      <Image
                        src={t.avatar.url}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="avatar-placeholder">
                        {t.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="testimonial-author-info">
                    <div className="testimonial-name">{t.name}</div>
                    {t.role && <div className="testimonial-role">{t.role}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            No testimonials yet. Add some in the admin panel.
          </div>
        )}
      </div>
    </section>
  )
}
