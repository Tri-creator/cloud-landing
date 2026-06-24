'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'

export default function NewsCarousel({ posts }: any) {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -1200,
      behavior: 'smooth',
    })
  }

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 1200,
      behavior: 'smooth',
    })
  }

  return (
    <div className="news-carousel-wrapper">
      <button
        className="news-arrow news-arrow-left"
        onClick={scrollLeft}
      >
        ❮
      </button>

      <div
        ref={sliderRef}
        className="news-carousel"
      >
        {posts.map((post: any) => (
          <Link
            href={`/posts/${post.slug}`}
            className="news-card"
            key={post.id}
          >
            <div className="news-image">
              {post.heroImage &&
                typeof post.heroImage !== 'string' && (
                  <Media
                    resource={post.heroImage}
                    size="33vw"
                  />
                )}
            </div>

            <h3>{post.title}</h3>
          </Link>
        ))}
      </div>

      <button
        className="news-arrow news-arrow-right"
        onClick={scrollRight}
      >
        ❯
      </button>
    </div>
  )
}