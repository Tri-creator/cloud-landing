'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const logos = [
  '/clients/1.png',
  '/clients/2.png',
  '/clients/3.png',
  '/clients/4.png',
  '/clients/5.png',
  '/clients/6.png',
  '/clients/7.png',
]

export const CustomerLogos = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ],
  )

  return (
    <section id="customers" className="customer-logos-section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <span className="section-badge mb-4">KHÁCH HÀNG</span>
        </div>

        <div className="customer-slider">

          <button
            className="customer-arrow customer-arrow-left"
            onClick={() => emblaApi?.scrollPrev()}
          >
            ❮
          </button>

          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {logos.map((logo, index) => (
                <div className="embla__slide" key={index}>
                  <div className="customer-logo">
                    <img src={logo} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="customer-arrow customer-arrow-right"
            onClick={() => emblaApi?.scrollNext()}
          >
            ❯
          </button>

        </div>
      </div>
    </section>
  )
}