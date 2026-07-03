import SiteHeader from '@/components/SiteHeader'
const documents = [
  {
    title: 'Hướng dẫn sử dụng Website VCloud',
    subtitle: 'Người dùng',
    image: '/clients/9.png',
    file: '/docs/1.pdf',
  },
  {
    title: 'Hướng dẫn sử dụng Website VCloud Biển số xe',
    subtitle: 'Người dùng',
    image: '/clients/9.png',
    file: '/docs/2.pdf',
  },
  {
    title: 'Hướng dẫn sử dụng ứng dụng di động VCloud',
    subtitle: 'Người dùng',
    image: '/clients/9.png',
    file: '/docs/3.pdf',
  },
  {
    title: 'Hướng dẫn sử dụng Desktop App VCloud',
    subtitle: 'Người dùng',
    image: '/clients/9.png',
    file: '/docs/4.pdf',
  },
]

export default function DocumentsPage() {
  return (
    <main className="documents-page">
      <SiteHeader/>
      <section className="documents-container">
        <h1>TÀI LIỆU HƯỚNG DẪN SỬ DỤNG</h1>

        <div className="documents-grid">
          {documents.map((doc, index) => (
            <div className="document-card" key={index}>
              <img src={doc.image} alt={doc.title} />

              <h2>{doc.title}</h2>
              <p>– {doc.subtitle}</p>

              <a href={doc.file} target="_blank" rel="noopener noreferrer">
                Tải xuống
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}