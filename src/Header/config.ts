import { link } from '@/fields/link'
import type { GlobalConfig } from 'payload'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'height',
      type: 'number',
      label: 'Chiều cao Header (px)',
      defaultValue: 80,
      admin: {
        description: 'Nhập số pixel (ví dụ: 80)',
        position: 'sidebar', // Đưa sang cột phải cho gọn giao diện chính
      },
    },
    {
      name: 'justify',
      type: 'select',
      label: 'Căn chỉnh',
      defaultValue: 'start',
      options: [
        { label: 'Trái', value: 'start' },
        { label: 'Giữa', value: 'center' },
        { label: 'Phải', value: 'end' },
        { label: 'Cách đều', value: 'between' },
      ],
      admin: {
        description: 'Chọn cách căn chỉnh nội dung',

        position: 'sidebar', // Đưa sang cột phải cho gọn giao diện chính
      },
    },
    {
      name: 'alignItems',
      type: 'select',
      label: 'Căn chỉnh theo trục dọc',
      defaultValue: 'start',
      options: [
        { label: 'Trái', value: 'start' },
        { label: 'Giữa', value: 'center' },
        { label: 'Phải', value: 'end' },
      ],
      admin: {
        description: 'Chọn cách căn chỉnh nội dung theo trục dọc',

        position: 'sidebar', // Đưa sang cột phải cho gọn giao diện chính
      },
    },
    {
      name: 'navItems',
      type: 'array',
      maxRows: 8,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'justify',
              type: 'select',
              label: 'Căn chỉnh',
              defaultValue: 'start',
              options: [
                { label: 'Trái', value: 'start' },
                { label: 'Giữa', value: 'center' },
                { label: 'Phải', value: 'end' },
              ],
              admin: { width: '25%' },
            },
            {
              name: 'itemType',
              type: 'select',
              label: 'Loại hiển thị',
              defaultValue: 'single',
              options: [
                { label: 'Link đơn', value: 'single' },
                { label: 'Dropdown', value: 'dropdown' },
                { label: 'Icon Only', value: 'icon' }, // 2. Thêm loại Icon
              ],
              admin: { width: '40%' },
            },
            {
              name: 'icon',
              type: 'select',
              label: 'Chọn Icon',
              options: [
                { label: 'User', value: 'user' },
                { label: 'Search', value: 'search' },
                { label: 'Cart', value: 'shopping-cart' },
                { label: 'Bell', value: 'bell' },
              ],
              admin: {
                width: '35%',
                // Chỉ hiện khi chọn loại là Icon hoặc Dropdown (nếu dropdown cần icon)
                condition: (_, siblingData) => siblingData?.itemType === 'icon',
              },
            },
          ],
        },
        // Field Link dành cho cả Single Link và Icon
        link({
          appearances: false,
          // Thêm admin condition trực tiếp vào link function nếu nó hỗ trợ override
          overrides: {
            admin: {
              condition: (_, siblingData) => ['single', 'icon'].includes(siblingData?.itemType),
            },
          },
        }),
        // Dropdown vẫn giữ nguyên như cũ
        {
          name: 'dropdown',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData?.itemType === 'dropdown',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Tiêu đề Dropdown',
              localized: true,
              required: true,
            },
            {
              name: 'subMenuItems',
              type: 'array',
              fields: [link({ appearances: false })],
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
