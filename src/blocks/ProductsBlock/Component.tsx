import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { ProductsShowcaseBlock as ProductsShowcaseBlockType, Product } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'

export const ProductsBlockComponent: React.FC<ProductsShowcaseBlockType & { disableInnerContainer?: boolean }> = async ({
  badge,
  heading,
  subheading,
  showFeaturedOnly,
  maxProducts,
  ctaLabel,
  ctaHref,
  displayMode,
}) => {
  const payload = await getPayload({ config: configPromise })
  const { docs: products } = await payload.find({
    collection: 'products',
    limit: maxProducts || 6,
    where: showFeaturedOnly ? { featured: { equals: true } } : {},
    sort: 'order',
  })

  const isFeaturedMode = displayMode === 'featured' && products.length > 0
  const featuredProduct = isFeaturedMode ? products[0] : null
  const gridProducts = isFeaturedMode ? products.slice(1) : products

  return (
    <section id="products" className="products-section py-24">
      <div className="container">
        {/* Section header */}
        <div className="section-header text-center mb-16">
          {badge && <div className="section-badge mb-4">{badge}</div>}
          {heading && <h2 className="section-heading mb-4">{heading}</h2>}
          {subheading && <p className="section-subheading max-w-2xl mx-auto">{subheading}</p>}
        </div>

        {/* Featured product */}
        {featuredProduct && (
          <div className="featured-product-card mb-12">
            <div className="featured-product-image">
              {featuredProduct.image && typeof featuredProduct.image === 'object' && featuredProduct.image.url && (
                <Image
                  src={featuredProduct.image.url}
                  alt={featuredProduct.name}
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <div className="featured-product-info">
              {featuredProduct.badge && (
                <span className="product-badge featured-badge">{featuredProduct.badge}</span>
              )}
              <h3 className="featured-product-name">{featuredProduct.name}</h3>
              {featuredProduct.tagline && (
                <p className="featured-product-tagline">{featuredProduct.tagline}</p>
              )}
              {featuredProduct.description && (
                <p className="featured-product-desc">{featuredProduct.description}</p>
              )}
              {Array.isArray(featuredProduct.features) && featuredProduct.features.length > 0 && (
                <ul className="featured-product-features">
                  {(featuredProduct.features as { feature: string; id?: string | null }[]).map((f, i) => (
                    <li key={i} className="featured-feature-item">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-cyan-400 flex-shrink-0">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>{f.feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="featured-product-pricing">
                {featuredProduct.originalPrice && (
                  <span className="original-price">${featuredProduct.originalPrice}</span>
                )}
                {featuredProduct.price && (
                  <span className="current-price">${featuredProduct.price}</span>
                )}
              </div>
              <button className="btn-buy-now">Buy Now</button>
            </div>
          </div>
        )}

        {/* Product grid */}
        {gridProducts.length > 0 && (
          <div className="products-grid">
            {gridProducts.map((product) => (
              <ProductCard key={product.id} product={product as Product} />
            ))}
          </div>
        )}

        {/* CTA */}
        {ctaLabel && ctaHref && (
          <div className="text-center mt-12">
            <Link href={ctaHref} className="btn-outline-primary">
              {ctaLabel}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card group">
      {product.badge && (
        <span className="product-badge">{product.badge}</span>
      )}
      <div className="product-image-wrapper">
        {product.image && typeof product.image === 'object' && product.image.url ? (
          <Image
            src={product.image.url}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="product-image-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-16 h-16 opacity-30">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
        )}
      </div>
      <div className="product-info">
        <div className="product-category-tag">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        {product.tagline && <p className="product-tagline">{product.tagline}</p>}
        {product.resolution && <div className="product-resolution">{product.resolution}</div>}
        <div className="product-pricing">
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
          {product.price && (
            <span className="current-price">${product.price}</span>
          )}
        </div>
        <button className="btn-add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
