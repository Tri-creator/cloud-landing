import type { Block } from 'payload'

export const PricingBlock: Block = {
  slug: 'pricing',
  interfaceName: 'PricingBlock',
  labels: {
    singular: 'Pricing Section',
    plural: 'Pricing Sections',
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
      name: 'plans',
      type: 'array',
      label: 'Pricing Plans',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Plan Name',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Plan Description',
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          label: 'Monthly Price (USD)',
        },
        {
          name: 'annualPrice',
          type: 'number',
          label: 'Annual Price / month (USD)',
        },
        {
          name: 'highlighted',
          type: 'checkbox',
          label: 'Most Popular / Highlighted',
          defaultValue: false,
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features included',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
            {
              name: 'included',
              type: 'checkbox',
              defaultValue: true,
            },
          ],
        },
        {
          name: 'ctaLabel',
          type: 'text',
          defaultValue: 'Get Started',
          label: 'CTA Button Label',
        },
        {
          name: 'ctaHref',
          type: 'text',
          defaultValue: '#contact',
          label: 'CTA Button URL',
        },
      ],
    },
  ],
}
