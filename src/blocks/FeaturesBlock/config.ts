import type { Block } from 'payload'

export const FeaturesBlock: Block = {
  slug: 'features',
  interfaceName: 'FeaturesBlock',
  labels: {
    singular: 'Features Section',
    plural: 'Features Sections',
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
      name: 'features',
      type: 'array',
      label: 'Features',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: '🎥 Camera', value: 'camera' },
            { label: '☁️ Cloud', value: 'cloud' },
            { label: '🔒 Security', value: 'shield' },
            { label: '📱 Mobile', value: 'mobile' },
            { label: '🌙 Night Vision', value: 'moon' },
            { label: '🔔 Alerts', value: 'bell' },
            { label: '🔊 Audio', value: 'audio' },
            { label: '🤖 AI', value: 'ai' },
            { label: '⚡ Fast', value: 'zap' },
            { label: '🌐 Network', value: 'wifi' },
          ],
          defaultValue: 'camera',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Feature Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Feature Description',
        },
      ],
    },
  ],
}
