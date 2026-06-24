import configPromise from '@payload-config'
import { getPayload } from 'payload'
import NewsCarousel from '@/components/NewsCarousel'
import Link from 'next/link'
export const NewsSection = async () => {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
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
    <section id="news" className="news-section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <span className="section-badge mb-4">News</span>
          <h2 className="section-heading mb-4">TIN TỨC</h2>
          <p className="section-subheading"></p>
        </div>
        
        <NewsCarousel posts={posts.docs} />
      </div>
      <div className="news-view-all">
        <Link href="/posts" className="view-all-btn">
          View All News
        </Link>
      </div>
    </section>
  )
}