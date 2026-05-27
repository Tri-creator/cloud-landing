import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonialsSection',
  interfaceName: 'TestimonialsSectionBlock',
  labels: {
    singular: 'Testimonials Section',
    plural: 'Testimonials Sections',
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
      name: 'showAll',
      type: 'checkbox',
      label: 'Show All Testimonials (ignores limit)',
      defaultValue: false,
    },
    {
      name: 'limit',
      type: 'number',
      label: 'Max Testimonials to Show',
      defaultValue: 6,
      min: 1,
      max: 20,
    },
  ],
}
