import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'rating', 'featured', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Customer Name',
    },
    {
      name: 'role',
      type: 'text',
      label: 'Role / Title (e.g. "Homeowner", "Business Owner")',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Avatar Photo',
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Testimonial Content',
    },
    {
      name: 'rating',
      type: 'select',
      options: [
        { label: '⭐ 1 Star', value: '1' },
        { label: '⭐⭐ 2 Stars', value: '2' },
        { label: '⭐⭐⭐ 3 Stars', value: '3' },
        { label: '⭐⭐⭐⭐ 4 Stars', value: '4' },
        { label: '⭐⭐⭐⭐⭐ 5 Stars', value: '5' },
      ],
      defaultValue: '5',
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Show on Landing Page',
      defaultValue: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
