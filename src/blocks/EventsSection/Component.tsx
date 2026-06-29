import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Link from 'next/link'
import EventCarousel from '@/components/EventsCarousel'

export const EventSection = async () => {
  const payload = await getPayload({ config: configPromise })

  const events = await payload.find({
    collection: 'events',
    depth: 1,
    limit: 10,
    sort: '-publishedAt',
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      publishedAt: true,
      meta: true,
      heroImage: true,
    },
  })

  return (
    <section id="events" className="events-section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <span className="section-badge mb-4">Events</span>
          <h2 className="section-heading mb-4">Sự kiện</h2>
        </div>

        <EventCarousel events={events.docs} />

        <div className="news-view-all">
          <Link href="/events" className="view-all-btn">
            Xem tất cả
          </Link>
        </div>
      </div>
    </section>
  )
}