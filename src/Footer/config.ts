import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // ── Brand ─────────────────────────────────────────────────────────
        {
          label: 'Brand',
          fields: [
            {
              name: 'brandName',
              type: 'text',
              localized: true,
              defaultValue: 'VCV Cloud',
              admin: { description: 'Site name shown next to the logo.' },
            },
            {
              name: 'tagline',
              type: 'textarea',
              localized: true,
              defaultValue: 'Professional cloud security cameras — smarter security, always on.',
            },
          ],
        },

        // ── Link Columns ───────────────────────────────────────────────────
        {
          label: 'Link Columns',
          fields: [
            {
              name: 'columns',
              type: 'array',
              maxRows: 4,
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Footer/RowLabel#RowLabel',
                },
              },
              fields: [
                {
                  name: 'title',
                  type: 'textarea',
                  localized: true,
                  required: true,
                },
                {
                  name: 'content',
                  type: 'textarea',
                  localized: true,
                },
                {
                  name: 'links',
                  type: 'array',
                  maxRows: 10,
                  fields: [link({ appearances: false })],
                  admin: { initCollapsed: true },
                },
              ],
            },
          ],
        },

        // ── Social Links ───────────────────────────────────────────────────
        {
          label: 'Social Links',
          fields: [
            {
              name: 'socialLinks',
              type: 'array',
              maxRows: 8,
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Twitter / X', value: 'twitter' },
                    { label: 'YouTube', value: 'youtube' },
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'TikTok', value: 'tiktok' },
                    { label: 'GitHub', value: 'github' },
                  ],
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  admin: { placeholder: 'https://...' },
                },
              ],
            },
          ],
        },

        // ── Copyright ──────────────────────────────────────────────────────
        {
          label: 'Copyright',
          fields: [
            {
              name: 'copyrightText',
              type: 'text',
              localized: true,
              defaultValue: '© {year} VCV Cloud. All rights reserved.',
              admin: { description: 'Use {year} as a placeholder for the current year.' },
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
