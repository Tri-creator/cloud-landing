'use client'

import React from 'react'
import { BeamContainer, BeamNode } from '@/components/ui/animated-beam'

function PathBeam({
  d,
  delay = 0,
  color = '#00d4ff',
}: {
  d: string
  delay?: number
  color?: string
}) {
  return (
    <svg className="beam-svg">
      <path d={d} className="beam-path-base" />
      <path
        d={d}
        className="beam-path-animated"
        stroke={color}
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  )
}

export default function CloudCameraDiagram() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <section className="cloud-diagram-section">
      <div className="container">
        <div className="cloud-diagram-header">
          <span className="section-badge">RETAIL CHAIN</span>
        </div>
        
        <BeamContainer ref={containerRef} className="beam-container">
          <div className="store-box old-store-box">
            <span>CỬA HÀNG CŨ</span>
          </div>
          <BeamNode className="diagram-node camera-old">
            <h3>Camera</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-10 bi bi-webcam" viewBox="0 0 16 16">
  <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9.269c.144.162.33.324.531.475a7 7 0 0 0 .907.57l.014.006.003.002A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.003-.002.014-.007a5 5 0 0 0 .268-.148 7 7 0 0 0 .639-.421c.2-.15.387-.313.531-.475H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/>
  <path d="M8 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
          </BeamNode>
          <BeamNode className="diagram-node camera-old2">
            <h3>Camera</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-10 bi bi-webcam" viewBox="0 0 16 16">
  <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9.269c.144.162.33.324.531.475a7 7 0 0 0 .907.57l.014.006.003.002A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.003-.002.014-.007a5 5 0 0 0 .268-.148 7 7 0 0 0 .639-.421c.2-.15.387-.313.531-.475H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/>
  <path d="M8 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
          </BeamNode>
          <BeamNode className="diagram-node camera-old3">
            <h3>Camera</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-10 bi bi-webcam" viewBox="0 0 16 16">
  <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9.269c.144.162.33.324.531.475a7 7 0 0 0 .907.57l.014.006.003.002A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.003-.002.014-.007a5 5 0 0 0 .268-.148 7 7 0 0 0 .639-.421c.2-.15.387-.313.531-.475H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/>
  <path d="M8 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
          </BeamNode>

          <BeamNode className="diagram-node recorder-old">
            <h3>Đầu ghi hình
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-10 bi bi-displayport-fill" viewBox="0 0 16 16">
  <path d="M1 5a1 1 0 0 0-1 1v3.191a1 1 0 0 0 .553.894l1.618.81a1 1 0 0 0 .447.105H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm1.5 2h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8H3v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5"/>
</svg>
          </BeamNode>

          <BeamNode className="diagram-node switch-old">
            <br></br>
            <h3>Switch</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-10 bi bi-displayport" viewBox="0 0 16 16">
  <path d="M2.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V8h10v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M1 5a1 1 0 0 0-1 1v3.191a1 1 0 0 0 .553.894l1.618.81a1 1 0 0 0 .447.105H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm0 1h14v4H2.618L1 9.191z"/>
</svg>
          </BeamNode>

          <BeamNode className="diagram-node modem-old">
            <h3>Modem Internet</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-10 bi bi-router" viewBox="0 0 16 16">
  <path d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707"/>
  <path d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707ZM2.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0"/>
  <path d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86zM14.5 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5z"/>
  <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
          </BeamNode>
          <div className="store-box new-store-box">
            <span>CỬA HÀNG MỚI</span>
          </div>
          <BeamNode className="diagram-node camera-firmware">
            <h3>Camera Firmware</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-10 bi bi-webcam" viewBox="0 0 16 16">
  <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9.269c.144.162.33.324.531.475a7 7 0 0 0 .907.57l.014.006.003.002A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.003-.002.014-.007a5 5 0 0 0 .268-.148 7 7 0 0 0 .639-.421c.2-.15.387-.313.531-.475H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/>
  <path d="M8 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
          </BeamNode>
          <BeamNode className="diagram-node camera-firmware2">
            <h3>Camera Firmware</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-10 bi bi-webcam" viewBox="0 0 16 16">
  <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9.269c.144.162.33.324.531.475a7 7 0 0 0 .907.57l.014.006.003.002A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.003-.002.014-.007a5 5 0 0 0 .268-.148 7 7 0 0 0 .639-.421c.2-.15.387-.313.531-.475H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/>
  <path d="M8 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
          </BeamNode>

          <BeamNode className="diagram-node switch-new">
            <h3>Switch</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-10 bi bi-displayport" viewBox="0 0 16 16">
  <path d="M2.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V8h10v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M1 5a1 1 0 0 0-1 1v3.191a1 1 0 0 0 .553.894l1.618.81a1 1 0 0 0 .447.105H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm0 1h14v4H2.618L1 9.191z"/>
</svg>
          </BeamNode>

          <BeamNode className="diagram-node modem-new">
            <h3>Modem Internet</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-10 bi bi-router" viewBox="0 0 16 16">
  <path d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707"/>
  <path d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707ZM2.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0"/>
  <path d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86zM14.5 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5z"/>
  <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
          </BeamNode>

          <BeamNode className="diagram-node network">
            <h3>Network</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-10 bi bi-cloud" viewBox="0 0 16 16">
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg>
          </BeamNode>

          <BeamNode className="diagram-node cloud-camera">
            <h3>Cloud Camera</h3>
            <p>Tiếp nhận & lưu trữ hình ảnh Camera</p>
            <p>Xem và xem lại hình ảnh Camera</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-19 bi bi-building" viewBox="0 0 16 16">
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
</svg>
          </BeamNode>

          <BeamNode className="diagram-node manager-phone">
            <h3>Mobi</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-10 bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
          </BeamNode>

          <BeamNode className="diagram-node manager-pc">
            <h3>Web</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="relative left-19 bi bi-display" viewBox="0 0 16 16">
  <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145"/>
</svg>
          </BeamNode>

          {/* Cửa hàng cũ */}
          <PathBeam d="M 170 100 H 300" delay={0} color="#00d4ff" />
          <PathBeam d="M 170 180 H 300" delay={0} color="#00d4ff" />
          <PathBeam d="M 170 290 H 320 V 200" delay={0} color="#00d4ff" />
          <PathBeam d="M 670 310 H 430 V 200" delay={0.3} color="#f59e0b" />
          <PathBeam d="M 410 150 V 330 H 600" delay={0.6} color="#f59e0b" />
          <PathBeam d="M 420 150 H 540" delay={0.9} color="#a23e00" />
          <PathBeam d="M 660 150 H 780 V 300" delay={1.2} color="#8b5cf6" />

          {/* Cửa hàng mới */}
          <PathBeam d="M 200 590 H 330" delay={0} color="#10b981" />
          <PathBeam d="M 200 480 H 400 V 570" delay={0} color="#10b981" />
          <PathBeam d="M 450 560 H 560" delay={0.4} color="#0039aa" />
          <PathBeam d="M 680 560 H 780 V 320" delay={0.8} color="#ff0f9f" />

          {/* Network tới Cloud Camera và người dùng */}
          <PathBeam d="M 880 300 H 980 V 120" delay={1.4} color="#00d4ff" />
          <PathBeam d="M 1050 220 H 860 V 350" delay={1.4} color="#00d4ff" />
          <PathBeam d="M 880 320 H 1110 V 620" delay={1.7} color="#10b981" />
          <PathBeam d="M 1050 620 V 330 H 900" delay={0.3} color="#10b981" />
          <PathBeam d="M 870 630 H 850 V 300" delay={0.3} color="#ff0000" />
          <PathBeam d="M 880 320 H 830 V 620" delay={2} color="#ff0000" />
          
        </BeamContainer>
      </div>
    </section>
  )
}