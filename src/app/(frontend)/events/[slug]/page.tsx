import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const dynamic = 'force-static'
export const revalidate = 600

type Args = {
  params: Promise<{
    slug: string
  }>
}

export default async function EventPage({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'events',
    depth: 2,
    limit: 1,
    overrideAccess: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const event = result.docs[0]

  if (!event) {
    return <main className="container py-24">Không tìm thấy sự kiện.</main>
  }

  const date = event.publishedAt ? new Date(event.publishedAt) : null

  return (
    <main className="post-hero">
      <section className="container">
        <div className="post-hero-category">EVENT</div>

        <h1 className="post-hero-title">{event.title}</h1>

        {date && (
          <div className="post-hero-date-text">
            {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
          </div>
        )}

        {event.heroImage && typeof event.heroImage !== 'string' && (
          <div className="post-hero-image">
            <Media resource={event.heroImage} />
          </div>
        )}

        {event.content && (
          <div className="container py-12">
            <RichText data={event.content} />
          </div>
        )}
      </section>
    </main>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise

  return {
    title: `Event - ${slug}`,
  }
}