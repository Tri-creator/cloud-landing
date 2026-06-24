'use client'

import { useState } from 'react'

const videos = [
  {
    title: 'Demo 1',
    src: '/demo/demo-1.mp4',
    poster: '/demo/poster-1.jpg',
    description: 'Video giới thiệu',
  },
  {
    title: 'Demo 2',
    src: '/demo/demo-2.mp4',
    poster: '/demo/poster-2.jpg',
    description: 'Video trình bày',
  },
]

export default function DemoPage() {
  const [activeVideo, setActiveVideo] = useState(videos[0])

  return (
    <main className="demo-page">
      <section className="demo-layout">
        <div className="demo-left">
          <div className="demo-video-wrapper">
            <h1>{activeVideo.title}</h1>
          <video
            key={activeVideo.src}
            className="demo-main-video"
            controls
            poster={activeVideo.poster}
          >
            <source src={activeVideo.src} type="video/mp4" />
          </video>
          </div>
        </div>

        <aside className="demo-right">
          

          <div className="demo-description">
            <p>{activeVideo.description}</p>
          </div>
        </aside>
      </section>

      <section className="demo-list">
        <h2>Video khác</h2>

        <div className="demo-list-grid">
          {videos.map((video) => (
            <button
              key={video.src}
              className={`demo-item ${
                activeVideo.src === video.src ? 'active' : ''
              }`}
              onClick={() => setActiveVideo(video)}
            >
              <div className="demo-item-thumb">
                <img src={video.poster} alt={video.title} />
              </div>

              <div>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}