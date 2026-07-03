import SiteHeader from '@/components/SiteHeader'

const documents = [
  {
    title: 'Hướng dẫn sử dụng Website VCloud',
    subtitle: 'Người dùng',
    image: '/clients/9.png',
    file: 'https://drive.google.com/file/d/137Nm1hg43O-t3kueRHkgdlpYq2dwA8QL/view?usp=sharing',
  },
  {
    title: 'Hướng dẫn sử dụng Website VCloud Biển số xe',
    subtitle: 'Người dùng',
    image: '/clients/9.png',
    file: 'https://drive.google.com/file/d/1kM2mQlv7hnaqgm7IoOhFZpvmFsp90Vip/view?usp=sharing',
  },
  {
    title: 'Hướng dẫn sử dụng ứng dụng di động VCloud',
    subtitle: 'Người dùng',
    image: '/clients/9.png',
    file: 'https://drive.google.com/file/d/1pMUcJi0gE1TQ8kTemoM_MBSzeZ12Bk2h/view?usp=sharing',
  },
  {
    title: 'Hướng dẫn sử dụng Desktop App VCloud',
    subtitle: 'Người dùng',
    image: '/clients/9.png',
    file: 'https://drive.google.com/file/d/1En2y26KrdDVS1aYZ9pdlFub7mZZju9Lm/view?usp=sharing',
  },
]

export default function DocumentsPage() {
  return (
    <main className="documents-page">
      <SiteHeader />

      <section className="documents-container">
        <h1>TÀI LIỆU HƯỚNG DẪN SỬ DỤNG</h1>

        <div className="documents-grid">
          {documents.map((doc, index) => (
            <div className="document-card" key={index}>
              <img src={doc.image} alt={doc.title} />

              <h2>{doc.title}</h2>
              <p>– {doc.subtitle}</p>

              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="document-download"
              >
                Tải xuống
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}