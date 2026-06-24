'use client'

import React, { forwardRef } from 'react'

export const BeamContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => {
  return (
    <div ref={ref} className={`beam-container ${className}`} {...props}>
      {children}
    </div>
  )
})

BeamContainer.displayName = 'BeamContainer'

export const BeamNode = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => {
  return (
    <div ref={ref} className={`beam-node ${className}`} {...props}>
      {children}
    </div>
  )
})

BeamNode.displayName = 'BeamNode'

type AnimatedBeamProps = {
  containerRef: React.RefObject<HTMLDivElement | null>
  fromRef: React.RefObject<HTMLDivElement | null>
  toRef: React.RefObject<HTMLDivElement | null>
  duration?: number
  delay?: number
  reverse?: boolean
  gradientStartColor?: string
  gradientStopColor?: string
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  duration = 3,
  delay = 0,
  reverse = false,
  gradientStartColor = '#00d4ff',
  gradientStopColor = '#2563eb',
}: AnimatedBeamProps) {
  const [path, setPath] = React.useState('')

  React.useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return

      const container = containerRef.current.getBoundingClientRect()
      const from = fromRef.current.getBoundingClientRect()
      const to = toRef.current.getBoundingClientRect()

      const startX = from.left + from.width / 2 - container.left
      const startY = from.top + from.height / 2 - container.top
      const endX = to.left + to.width / 2 - container.left
      const endY = to.top + to.height / 2 - container.top

      const midX = (startX + endX) / 2
      const midY = (startY + endY) / 2 - 40

      setPath(`M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`)
    }

    updatePath()
    window.addEventListener('resize', updatePath)

    return () => window.removeEventListener('resize', updatePath)
  }, [containerRef, fromRef, toRef])

  const gradientId = React.useId()

  return (
    <svg className="beam-svg">
      <defs>
        <linearGradient id={gradientId}>
          <stop offset="0%" stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor} />
        </linearGradient>
      </defs>

      <path d={path} className="beam-path-base" />

      <path
        d={path}
        className="beam-path-animated"
        stroke={`url(#${gradientId})`}
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      />
    </svg>
  )
}