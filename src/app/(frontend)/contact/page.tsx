import configPromise from '@payload-config'
import { getPayload } from 'payload'
import ContactForm from '@/components/ContactForm'
import SiteHeader from '@/components/SiteHeader'
import { Facebook, PhoneCall, Instagram, Mail } from "lucide-react";
export default async function ContactPage() {
  const payload = await getPayload({ config: configPromise })

  const forms = await payload.find({
    collection: 'forms',
    limit: 1,
    where: {
      title: {
        equals: 'Contact Form',
      },
    },
  })

  const form = forms.docs[0]

  return (
    <main className="contact-page">
      <SiteHeader/>
      <section className="contact-container">
        <div className="contact-info">
          <h1>Liên hệ VCV VIỆT NAM</h1>

          <p>
            Hãy liên hệ với VCV Việt Nam để được hỗ trợ sớm nhất về những thắc mắc,
            sự cố phát sinh trong quá trình sử dụng sản phẩm và dịch vụ.
          </p>

          <h2>THÔNG TIN LIÊN HỆ</h2>

          <ul>
            <li><strong>Địa chỉ:</strong> Số 300/7 Nguyễn Văn Lượng, Phường 16, Quận Gò Vấp, TP.HCM</li>
            <li><strong>SĐT:</strong> 039 397 9911</li>
            <li><strong>Email:</strong> hotro@vcv.vn</li>
          </ul>
           <div className="contact-socials">
  <a
    href="https://www.facebook.com/vigilancecloudvideo"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-social-btn"
  >
    <Facebook size={22} />
  </a>
  <a
    href="https://www.instagram.com/vigilancecloudvideo"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-social-btn"
  >
    <Instagram size={22} />
  </a>

  <a
    href="mailto:support@vcloud.vn"
    className="contact-social-btn"
  >
    <Mail size={22} />
  </a>
  <a
    href="tel:0393979911"
    className="contact-social-btn"
  >
    <PhoneCall size={22} />
  </a>
</div>
        </div>

        <div className="contact-form-box">
          <h2>HỖ TRỢ GIẢI ĐÁP</h2>

          {form ? (
            <ContactForm formId={form.id} />
          ) : (
            <p>Chưa tạo form Contact Form trong Admin.</p>
          )}
          
        </div>
       
      </section>
      {/* Google Map */}
<section className="contact-map-section">
  <div className="container">
    <div className="contact-map">
      <iframe
        title="VCV Việt Nam"
        src="https://www.google.com/maps?q=300/7+Nguyễn+Văn+Lượng,+Phường+16,+Quận+Gò+Vấp,+TP.HCM&output=embed"
        width="100%"
        height="420"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>

    </main>
  )
}