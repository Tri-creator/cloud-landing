import type { GlobalConfig, TextField } from 'payload'

import { revalidateLayout } from './hooks/revalidateLayout'

// ---------------------------------------------------------------------------
// Helper – tạo một text field chuẩn cho color token
// ---------------------------------------------------------------------------
const colorField = (name: string, label: string): TextField => ({
  name,
  type: 'text',
  label,
  admin: {
    placeholder: 'oklch(…) | #rrggbb | hsl(…)',
    description: 'CSS color value. Bỏ trống = dùng giá trị mặc định trong globals.css.',
  },
})

// Danh sách token màu dùng chung cho cả light và dark tab
const colorTokens = [
  colorField('background', 'Nền trang  (--background)'),
  colorField('foreground', 'Chữ chính  (--foreground)'),
  colorField('primary', 'Primary  (--primary)'),
  colorField('primaryForeground', 'Chữ trên Primary  (--primary-foreground)'),
  colorField('secondary', 'Secondary  (--secondary)'),
  colorField('secondaryForeground', 'Chữ trên Secondary  (--secondary-foreground)'),
  colorField('accent', 'Accent  (--accent)'),
  colorField('accentForeground', 'Chữ trên Accent  (--accent-foreground)'),
  colorField('muted', 'Muted  (--muted)'),
  colorField('mutedForeground', 'Chữ Muted  (--muted-foreground)'),
  colorField('card', 'Nền thẻ  (--card)'),
  colorField('cardForeground', 'Chữ thẻ  (--card-foreground)'),
  colorField('popover', 'Popover  (--popover)'),
  colorField('popoverForeground', 'Chữ Popover  (--popover-foreground)'),
  colorField('border', 'Đường viền  (--border)'),
  colorField('input', 'Input  (--input)'),
  colorField('ring', 'Ring / Focus  (--ring)'),
  colorField('destructive', 'Destructive  (--destructive)'),
]

// Font options
const bodyFontOptions = [
  { label: 'Geist (Mặc định hệ thống)', value: 'geist' },
  { label: 'Inter', value: 'Inter' },
  { label: 'DM Sans', value: 'DM Sans' },
  { label: 'Plus Jakarta Sans', value: 'Plus Jakarta Sans' },
  { label: 'Nunito', value: 'Nunito' },
  { label: 'Nunito Sans', value: 'Nunito Sans' },
  { label: 'Open Sans', value: 'Open Sans' },
  { label: 'Lato', value: 'Lato' },
  { label: 'Roboto', value: 'Roboto' },
  { label: 'Poppins', value: 'Poppins' },
  { label: 'Montserrat', value: 'Montserrat' },
  { label: 'Raleway', value: 'Raleway' },
  { label: 'Source Sans 3', value: 'Source Sans 3' },
  { label: 'Outfit', value: 'Outfit' },
]

const headingFontOptions = [
  { label: 'Kế thừa từ thân bài (inherit)', value: 'inherit' },
  { label: 'Playfair Display', value: 'Playfair Display' },
  { label: 'Merriweather', value: 'Merriweather' },
  { label: 'Libre Baskerville', value: 'Libre Baskerville' },
  { label: 'Cormorant Garamond', value: 'Cormorant Garamond' },
  { label: 'DM Serif Display', value: 'DM Serif Display' },
  { label: 'Space Grotesk', value: 'Space Grotesk' },
  { label: 'Sora', value: 'Sora' },
  { label: 'Lexend', value: 'Lexend' },
  ...bodyFontOptions.slice(1), // all body fonts are valid heading fonts too
]

const monoFontOptions = [
  { label: 'Geist Mono (Mặc định hệ thống)', value: 'geist-mono' },
  { label: 'Fira Code', value: 'Fira Code' },
  { label: 'JetBrains Mono', value: 'JetBrains Mono' },
  { label: 'Source Code Pro', value: 'Source Code Pro' },
  { label: 'Inconsolata', value: 'Inconsolata' },
  { label: 'IBM Plex Mono', value: 'IBM Plex Mono' },
]

// ---------------------------------------------------------------------------
// Global config
// ---------------------------------------------------------------------------
export const Layout: GlobalConfig = {
  slug: 'layout',
  label: 'Giao diện (Design System)',
  access: { read: () => true },
  hooks: { afterChange: [revalidateLayout] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // ── Tab 1: Light mode colors ────────────────────────────────────────
        {
          name: 'lightColors',
          label: '🌅 Màu sáng (Light Mode)',
          fields: colorTokens,
        },
        // ── Tab 2: Dark mode colors ─────────────────────────────────────────
        {
          name: 'darkColors',
          label: '🌙 Màu tối (Dark Mode)',
          fields: colorTokens,
        },
        // ── Tab 3: Typography ───────────────────────────────────────────────
        {
          name: 'typography',
          label: '✏️ Typography',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'bodyFont',
                  type: 'select',
                  label: 'Font thân bài',
                  defaultValue: 'geist',
                  options: bodyFontOptions,
                  admin: { width: '33%' },
                },
                {
                  name: 'headingFont',
                  type: 'select',
                  label: 'Font tiêu đề',
                  defaultValue: 'inherit',
                  options: headingFontOptions,
                  admin: { width: '33%' },
                },
                {
                  name: 'monoFont',
                  type: 'select',
                  label: 'Font code (Mono)',
                  defaultValue: 'geist-mono',
                  options: monoFontOptions,
                  admin: { width: '33%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'baseFontSize',
                  type: 'select',
                  label: 'Cỡ chữ gốc (html)',
                  defaultValue: '16px',
                  options: [
                    { label: '14px (Nhỏ)', value: '14px' },
                    { label: '16px (Tiêu chuẩn)', value: '16px' },
                    { label: '18px (Lớn)', value: '18px' },
                  ],
                  admin: { width: '33%' },
                },
                {
                  name: 'headingFontWeight',
                  type: 'select',
                  label: 'Độ đậm tiêu đề',
                  defaultValue: '700',
                  options: [
                    { label: '400 – Regular', value: '400' },
                    { label: '500 – Medium', value: '500' },
                    { label: '600 – SemiBold', value: '600' },
                    { label: '700 – Bold', value: '700' },
                    { label: '800 – ExtraBold', value: '800' },
                    { label: '900 – Black', value: '900' },
                  ],
                  admin: { width: '33%' },
                },
                {
                  name: 'lineHeight',
                  type: 'select',
                  label: 'Khoảng cách dòng',
                  defaultValue: '1.5',
                  options: [
                    { label: '1.4 – Gọn', value: '1.4' },
                    { label: '1.5 – Tiêu chuẩn', value: '1.5' },
                    { label: '1.6 – Thoáng', value: '1.6' },
                    { label: '1.75 – Rộng', value: '1.75' },
                  ],
                  admin: { width: '33%' },
                },
              ],
            },
          ],
        },
        // ── Tab 4: Spacing & Shape ──────────────────────────────────────────
        {
          name: 'spacing',
          label: '📐 Kích thước & Bo góc',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'radius',
                  type: 'select',
                  label: 'Bo góc cơ bản (--radius)',
                  defaultValue: '0.625rem',
                  admin: {
                    description: 'Tất cả component (button, card, input…) thừa kế từ biến này.',
                    width: '50%',
                  },
                  options: [
                    { label: 'Vuông – 0', value: '0' },
                    { label: 'Nhỏ – 0.25rem', value: '0.25rem' },
                    { label: 'Vừa – 0.5rem', value: '0.5rem' },
                    { label: 'Mặc định – 0.625rem', value: '0.625rem' },
                    { label: 'Lớn – 0.75rem', value: '0.75rem' },
                    { label: 'Rất lớn – 1rem', value: '1rem' },
                    { label: 'Tròn – 9999px', value: '9999px' },
                  ],
                },
                {
                  name: 'containerWidth',
                  type: 'select',
                  label: 'Độ rộng container tối đa',
                  defaultValue: 'xl',
                  admin: { width: '50%' },
                  options: [
                    { label: 'Nhỏ – 640px', value: 'sm' },
                    { label: 'Trung – 768px', value: 'md' },
                    { label: 'Bình thường – 1024px', value: 'lg' },
                    { label: 'Rộng – 1280px (mặc định)', value: 'xl' },
                    { label: 'Rất rộng – 1536px', value: '2xl' },
                    { label: 'Toàn màn hình', value: 'full' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

// Keep legacy export alias so old imports don't break
export default Layout
