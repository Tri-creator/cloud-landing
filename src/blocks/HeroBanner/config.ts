import type { Block } from 'payload'

export const HeroBanner: Block = {
  slug: 'heroBanner',
  interfaceName: 'HeroBannerBlock',
  labels: {
    singular: 'Hero Banner',
    plural: 'Hero Banners',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text (e.g. "New Release")',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Main Heading',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Sub Heading',
    },
    {
      name: 'primaryCTA',
      type: 'group',
      label: 'Primary CTA Button',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Get Started' },
        { name: 'href', type: 'text', defaultValue: '#products' },
      ],
    },
    {
      name: 'secondaryCTA',
      type: 'group',
      label: 'Secondary CTA Button',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Watch Demo' },
        { name: 'href', type: 'text', defaultValue: '#demo' },
      ],
    },
    {
      name: 'backgroundVideo',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Video (optional)',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image (fallback)',
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Hero Stats',
      maxRows: 4,
      fields: [
        { name: 'value', type: 'text', required: true, label: 'Value (e.g. "10M+")' },
        { name: 'label', type: 'text', required: true, label: 'Label (e.g. "Cameras Sold")' },
      ],
    },
  ],
}
