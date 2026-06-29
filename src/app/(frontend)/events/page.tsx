import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Link from 'next/link'
import { Media } from '@/components/Media'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function EventsPage() {
  const payload = await getPayload({ config: configPromise })

  const events = await payload.find({
    collection: 'events',
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
      <section className="container">
        <div className="all-news-list-header">
          <span className="section-badge">EVENTS</span>
          <h1>Tất cả sự kiện</h1>
        </div>

        <div className="all-news-list">
          {events.docs.map((event) => {
            const date = event.publishedAt ? new Date(event.publishedAt) : null

            return (
              <Link href={`/events/${event.slug}`} className="all-news-list-item" key={event.id}>
                <div className="all-news-list-image">
                  {event.heroImage && typeof event.heroImage !== 'string' && (
                    <Media resource={event.heroImage} size="33vw" />
                  )}
                </div>

                <div className="all-news-list-content">
                  <h2>{event.title}</h2>

                  {date && (
                    <div className="all-news-list-date">
                      {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                    </div>
                  )}

                  {event.meta?.description && <p>{event.meta.description}</p>}

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
    title: 'View All Events',
  }
}