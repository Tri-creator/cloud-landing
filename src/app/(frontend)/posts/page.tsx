import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Link from 'next/link'
import { Media } from '@/components/Media'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 100,
    sort: '-publishedAt',
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      meta: true,
      heroImage: true,
      publishedAt: true,
    },
  })

  return (
    <main className="all-news-list-page">
      <PageClient />

      <section className="container">
        <div className="all-news-list-header">
          <span className="section-badge">NEWS</span>
          <h1>View All News</h1>
        </div>

        <div className="all-news-list">
          {posts.docs.map((post) => {
            const date = post.publishedAt ? new Date(post.publishedAt) : null

            return (
              <Link href={`/posts/${post.slug}`} className="all-news-list-item" key={post.id}>
                <div className="all-news-list-image">
                  {post.heroImage && typeof post.heroImage !== 'string' && (
                    <Media resource={post.heroImage} size="33vw" />
                  )}
                </div>

                <div className="all-news-list-content">
                  <h2>{post.title}</h2>

                  {date && (
                    <div className="all-news-list-date">
                      {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                    </div>
                  )}

                  {post.meta?.description && <p>{post.meta.description}</p>}

                  <span className="all-news-readmore">Xem thêm</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'View All News',
  }
}