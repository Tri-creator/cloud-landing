import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'price', 'featured'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Product Name',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Short Tagline',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Product Image',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Indoor Camera', value: 'indoor' },
        { label: 'Outdoor Camera', value: 'outdoor' },
        { label: 'PTZ Camera', value: 'ptz' },
        { label: 'Doorbell Camera', value: 'doorbell' },
        { label: 'Floodlight Camera', value: 'floodlight' },
      ],
      required: true,
    },
    {
      name: 'resolution',
      type: 'select',
      options: [
        { label: '1080p Full HD', value: '1080p' },
        { label: '2K', value: '2k' },
        { label: '4K Ultra HD', value: '4k' },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: 'Key Features',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
      label: 'Price (USD)',
      min: 0,
    },
    {
      name: 'originalPrice',
      type: 'number',
      label: 'Original Price (USD) - for showing discount',
      min: 0,
    },
    {
      name: 'badge',
      type: 'text',
      label: 'Badge (e.g. "Best Seller", "New")',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Product',
      defaultValue: false,
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
