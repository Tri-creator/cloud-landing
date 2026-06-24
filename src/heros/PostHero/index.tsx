import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatDateTime } from '@/utilities/formatDateTime'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, heroImage, publishedAt, title } = post



  return (
    <section className="post-hero">
      <div className="container">
        <div className="post-hero-category">
          {categories?.map((category, index) => {
            if (typeof category === 'object' && category !== null) {
              const isLast = index === categories.length - 1

              return (
                <React.Fragment key={index}>
                  {category.title || 'TIN TỨC'}
                  {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                </React.Fragment>
              )
            }

            return null
          })}
        </div>

        <h1 className="post-hero-title">{title}</h1>

        {heroImage && typeof heroImage !== 'string' && (
          <div className="post-hero-image">
            <Media priority resource={heroImage} />
          </div>
        )}

        {publishedAt && (
          <time className="post-hero-date-text" dateTime={publishedAt}>
            {formatDateTime(publishedAt)}
          </time>
        )}
      </div>
    </section>
  )
}