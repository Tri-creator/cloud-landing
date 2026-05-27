import type { Block } from 'payload'

export const ProductsBlock: Block = {
  slug: 'productsShowcase',
  interfaceName: 'ProductsShowcaseBlock',
  labels: {
    singular: 'Products Showcase',
    plural: 'Products Showcases',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Section Badge',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Section Heading',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Subheading',
    },
    {
      name: 'displayMode',
      type: 'select',
      label: 'Display Mode',
      defaultValue: 'grid',
      options: [
        { label: 'Grid', value: 'grid' },
        { label: 'Featured + Grid', value: 'featured' },
      ],
    },
    {
      name: 'showFeaturedOnly',
      type: 'checkbox',
      label: 'Show Featured Products Only',
      defaultValue: false,
    },
    {
      name: 'maxProducts',
      type: 'number',
      label: 'Max Products to Show',
      defaultValue: 6,
      min: 1,
      max: 20,
    },
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'CTA Button Label',
      defaultValue: 'View All Products',
    },
    {
      name: 'ctaHref',
      type: 'text',
      label: 'CTA Button URL',
      defaultValue: '/products',
    },
  ],
}
