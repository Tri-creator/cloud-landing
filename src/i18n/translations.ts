import type { Locale } from './config'

/**
 * Static translation dictionary for hardcoded UI strings.
 * Use t(key, locale) wherever JSX text is NOT sourced from Payload.
 *
 * Add new keys here whenever you add static text to a component.
 * For Payload-managed content, use localized: true on the field instead.
 */
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    

    // Footer
    'footer.tagline': 'Professional cloud security cameras — smarter security, always on.',
    'footer.col.products': 'Products',
    'footer.col.solutions': 'Solutions',
    'footer.col.company': 'Company',
    'footer.col.support': 'Support',
    'footer.copyright': '© {year} VCV Cloud. All rights reserved.',

    // Product categories
    'product.indoor': 'Indoor Cameras',
    'product.outdoor': 'Outdoor Cameras',
    'product.ptz': 'PTZ Cameras',
    'product.doorbell': 'Doorbell Cameras',
    'product.floodlight': 'Floodlight Cameras',

    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.contactUs': 'Contact Us',
    'common.viewAll': 'View All',
    'common.readMore': 'Read More',
  },
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.products': 'Sản phẩm',
    'nav.features': 'Tính năng',
    'nav.pricing': 'Bảng giá',
    'nav.about': 'Giới thiệu',
    'nav.contact': 'Liên hệ',

    // Footer
    'footer.tagline': 'Camera an ninh đám mây chuyên nghiệp — bảo mật thông minh, luôn trực tuyến.',
    'footer.col.products': 'Sản phẩm',
    'footer.col.solutions': 'Giải pháp',
    'footer.col.company': 'Công ty',
    'footer.col.support': 'Hỗ trợ',
    'footer.copyright': '© {year} VCV Cloud. Bảo lưu mọi quyền.',

    // Product categories
    'product.indoor': 'Camera trong nhà',
    'product.outdoor': 'Camera ngoài trời',
    'product.ptz': 'Camera PTZ',
    'product.doorbell': 'Camera chuông cửa',
    'product.floodlight': 'Camera đèn pha',

    // Common
    'common.learnMore': 'Tìm hiểu thêm',
    'common.getStarted': 'Bắt đầu ngay',
    'common.contactUs': 'Liên hệ với chúng tôi',
    'common.viewAll': 'Xem tất cả',
    'common.readMore': 'Đọc thêm',
  },
} as const

export type TranslationKey = keyof (typeof translations)['en']

/**
 * Translate a static UI string.
 *
 * @example
 * t('footer.tagline', 'vi')           // → "Camera an ninh đám mây..."
 * t('footer.copyright', 'en', { year: '2026' }) // → "© 2026 VCV Cloud..."
 */
export function t(key: TranslationKey, locale: Locale, vars?: Record<string, string>): string {
  const dict = translations[locale] ?? translations.en
  let str: string =
    (dict as Record<string, string>)[key] ?? (translations.en as Record<string, string>)[key] ?? key

  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(`{${k}}`, v)
    }
  }

  return str
}
