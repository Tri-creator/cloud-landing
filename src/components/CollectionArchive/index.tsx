import { cn } from '@/utilities/ui'
import React from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'

import type { Post } from '@/payload-types'

export type Props = {
  posts: Post[]
}

export const CollectionArchive: React.FC<Props> = ({ posts }) => {
  return (
    <div className={cn('container')}>
      <div className="all-news-grid">
        {posts?.map((post) => {
          if (typeof post !== 'object' || post === null) return null

          return (
            <Link href={`/posts/${post.slug}`} className="all-news-card" key={post.id}>
              <div className="all-news-image">
                {post.heroImage && typeof post.heroImage !== 'string' && (
                  <Media resource={post.heroImage} size="33vw" />
                )}
              </div>

              <h2>{post.title}</h2>

              {post.meta?.description && <p>{post.meta.description}</p>}
            </Link>
          )
        })}
      </div>
    </div>
  )
}