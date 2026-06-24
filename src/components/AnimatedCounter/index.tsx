import { useEffect, useState, useRef } from 'react';
type Props = {
  value: number
  suffix: string
  duration?: number
}
export default function AnimatedCounter ({ value, suffix = '', duration = 1 }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    let start = 0
    const increment = value / (duration / 1)
    const timer = setInterval(() => {      
        start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1)
    return () => clearInterval(timer)
  }, [value, duration])
  return (
  <span ref={ref}>
    {count}
    {suffix}
    </span>
  )
}