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
  return (
    <section className="customer-logos-section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <span className="section-badge mb-4">CUSTOMERS</span>
            <h2 className="customer-title">KHÁCH HÀNG CỦA VCV</h2>

            <div className="customer-marquee">
                <div className="customer-track">
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="customer-logo">
                <img src={logo} alt="" />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}