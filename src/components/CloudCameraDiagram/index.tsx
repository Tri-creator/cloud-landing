'use client'

import React from 'react'
import { BeamContainer, BeamNode } from '@/components/ui/animated-beam'
import {
  Cctv,
  Router,
  Cloud,
  Building2,
  Smartphone,
  Monitor,
  Server,
  HardDrive,
} from 'lucide-react'

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

const IconBox = ({ children }: { children: React.ReactNode }) => {
  return <div className="diagram-icon">{children}</div>
}

export default function CloudCameraDiagram() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <section className="cloud-diagram-section">
      <div className="container">
        <div className="cloud-diagram-header">
          <span className="section-badge">CHUỖI BÁN LẺ</span>
        </div>

        <div className="diagram-scale-area">
          <BeamContainer ref={containerRef} className="beam-container diagram-scale-inner">
            <div className="store-box old-store-box">
              <span>CỬA HÀNG CŨ</span>
            </div>

            <BeamNode className="diagram-node camera-old">
              <h3>Camera</h3>
              <IconBox>
                <Cctv />
              </IconBox>
            </BeamNode>

            <BeamNode className="diagram-node camera-old2">
              <h3>Camera</h3>
              <IconBox>
                <Cctv />
              </IconBox>
            </BeamNode>

            <BeamNode className="diagram-node camera-old3">
              <h3>Camera</h3>
              <IconBox>
                <Cctv />
              </IconBox>
            </BeamNode>

            <BeamNode className="diagram-node recorder-old">
              <h3>Đầu ghi hình</h3>
              <IconBox>
                <HardDrive />
              </IconBox>
            </BeamNode>

            <BeamNode className="diagram-node switch-old">
              <h3>Switch</h3>
              <IconBox>
                <Server />
              </IconBox>
            </BeamNode>

            <BeamNode className="diagram-node modem-old">
              <h3>Modem Internet</h3>
              <IconBox>
                <Router />
              </IconBox>
            </BeamNode>

            <div className="store-box new-store-box">
              <span>CỬA HÀNG MỚI</span>
            </div>

            <BeamNode className="diagram-node camera-firmware">
              <h3>Camera Firmware</h3>
              <IconBox>
                <Cctv />
              </IconBox>
            </BeamNode>

            <BeamNode className="diagram-node camera-firmware2">
              <h3>Camera Firmware</h3>
              <IconBox>
                <Cctv />
              </IconBox>
            </BeamNode>

            <BeamNode className="diagram-node switch-new">
              <h3>Switch</h3>
              <IconBox>
                <Server />
              </IconBox>
            </BeamNode>

            <BeamNode className="diagram-node modem-new">
              <h3>Modem Internet</h3>
              <IconBox>
                <Router />
              </IconBox>
            </BeamNode>

            <BeamNode className="diagram-node network">
              <h3>Network</h3>
              <IconBox>
                <Cloud />
              </IconBox>
            </BeamNode>

            <BeamNode className="diagram-node cloud-camera">
              <h3>Cloud Camera</h3>
              <p>Tiếp nhận & lưu trữ hình ảnh Camera</p>
              <p>Xem và xem lại hình ảnh Camera</p>
              <IconBox>
                <Building2 />
              </IconBox>
            </BeamNode>

            <BeamNode className="diagram-node manager-phone">
              <h3>Mobile</h3>
              <IconBox>
                <Smartphone />
              </IconBox>
            </BeamNode>

            <BeamNode className="diagram-node manager-pc">
              <h3>Web</h3>
              <IconBox>
                <Monitor />
              </IconBox>
            </BeamNode>

            <PathBeam d="M 170 100 H 300" delay={0} color="#00d4ff" />
            <PathBeam d="M 170 180 H 300" delay={0} color="#00d4ff" />
            <PathBeam d="M 170 290 H 320 V 200" delay={0} color="#00d4ff" />
            <PathBeam d="M 670 310 H 430 V 200" delay={0.3} color="#f59e0b" />
            <PathBeam d="M 410 150 V 330 H 600" delay={0.6} color="#f59e0b" />
            <PathBeam d="M 420 150 H 540" delay={0.9} color="#a23e00" />
            <PathBeam d="M 660 150 H 780 V 300" delay={1.2} color="#8b5cf6" />

            <PathBeam d="M 200 590 H 330" delay={0} color="#10b981" />
            <PathBeam d="M 200 480 H 400 V 570" delay={0} color="#10b981" />
            <PathBeam d="M 450 560 H 560" delay={0.4} color="#0039aa" />
            <PathBeam d="M 680 560 H 780 V 320" delay={0.8} color="#ff0f9f" />

            <PathBeam d="M 880 300 H 980 V 120" delay={1.4} color="#00d4ff" />
            <PathBeam d="M 1050 220 H 860 V 350" delay={1.4} color="#00d4ff" />
            <PathBeam d="M 880 320 H 1110 V 620" delay={1.7} color="#10b981" />
            <PathBeam d="M 1050 620 V 330 H 900" delay={0.3} color="#10b981" />
            <PathBeam d="M 870 630 H 850 V 300" delay={0.3} color="#ff0000" />
            <PathBeam d="M 880 320 H 830 V 620" delay={2} color="#ff0000" />
          </BeamContainer>
        </div>
      </div>
    </section>
  )
}