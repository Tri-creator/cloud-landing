'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'

export default function EventCarousel({ events }: any) {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -1200, behavior: 'smooth' })
  }

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 1200, behavior: 'smooth' })
  }

  return (
    <div className="news-carousel-wrapper">
      <button className="news-arrow news-arrow-left" onClick={scrollLeft}>
        ❮
      </button>

      <div ref={sliderRef} className="news-carousel">
        {events.map((event: any) => (
          <Link href={`/events/${event.slug}`} className="news-card" key={event.id}>
            <div className="news-image">
              {event.heroImage && typeof event.heroImage !== 'string' && (
                <Media resource={event.heroImage} size="33vw" />
              )}
            </div>

            <h3>{event.title}</h3>
            <div className="news-line" />
            <p>{event.meta?.description}</p>
          </Link>
        ))}
      </div>

      <button className="news-arrow news-arrow-right" onClick={scrollRight}>
        ❯
      </button>
    </div>
  )
}