import configPromise from '@payload-config'
import { getPayload } from 'payload'
import ContactForm from '@/components/ContactForm'

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
    </main>
  )
}