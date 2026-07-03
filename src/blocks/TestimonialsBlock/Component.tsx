import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { TestimonialsSectionBlock as TestimonialsSectionBlockType } from '@/payload-types'
import TestimonialsCarousel from './TestimonialsCarousel'

export const TestimonialsBlockComponent: React.FC<
  TestimonialsSectionBlockType & { disableInnerContainer?: boolean }
> = async ({
  badge,
  heading,
  subheading,
  showAll,
  limit,
}) => {
  const payload = await getPayload({ config: configPromise })

  const { docs: testimonials } = await payload.find({
    collection: 'testimonials',
    limit: showAll ? 100 : limit || 6,
    where: { featured: { equals: true } },
    sort: 'order',
  })

  return (
    <section id="testimonials" className="testimonials-section py-24">
      <div className="container">
        <div className="section-header text-center mb-16">
          {badge && <div className="section-badge mb-4">{badge}</div>}
          {heading && <h2 className="section-heading mb-4">{heading}</h2>}
          {subheading && (
            <p className="section-subheading max-w-2xl mx-auto">
              {subheading}
            </p>
          )}
        </div>

        {testimonials.length > 0 ? (
          <TestimonialsCarousel testimonials={testimonials} />
        ) : (
          <div className="text-center text-gray-500 py-12">
            No testimonials yet. Add some in the admin panel.
          </div>
        )}
      </div>
    </section>
  )
}