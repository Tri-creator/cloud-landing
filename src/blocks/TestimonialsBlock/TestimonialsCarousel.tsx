'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: any[]
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  })

  return (
    <div className="testimonial-carousel">
      <button
        className="testimonial-arrow testimonial-arrow-left"
        onClick={() => emblaApi?.scrollPrev()}
      >
        ❮
      </button>

      <div className="testimonial-embla" ref={emblaRef}>
        <div className="testimonial-embla-container">
          {testimonials.map((t) => (
            <div className="testimonial-embla-slide" key={t.id}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {Array.from({
                    length: parseInt(t.rating || '5'),
                  }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-amber-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="testimonial-content">
                  "{t.content}"
                </blockquote>

                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {t.avatar?.url ? (
                      <Image
                        src={t.avatar.url}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="avatar-placeholder">
                        {t.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="testimonial-author-info">
                    <div className="testimonial-name">
                      {t.name}
                    </div>

                    {t.role && (
                      <div className="testimonial-role">
                        {t.role}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="testimonial-arrow testimonial-arrow-right"
        onClick={() => emblaApi?.scrollNext()}
      >
        ❯
      </button>
    </div>
  )
}