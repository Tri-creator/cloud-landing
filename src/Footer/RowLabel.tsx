'use client'
import type { Footer } from '@/payload-types'
import type { RowLabelProps } from '@payloadcms/ui'
import { useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Footer['columns']>[number]>()
  let num: number | string = ''
  if (data.rowNumber !== undefined) {
    num = data.rowNumber + 1
  }
  const title = data?.data?.title

  let label = `Column ${num}`
  if (title) {
    label = `Column ${num}: ${title}`
  }

  return <div>{label}</div>
}
