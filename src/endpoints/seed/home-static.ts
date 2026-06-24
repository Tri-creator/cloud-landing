import type { RequiredDataFromCollectionSlug } from 'payload'

// Cloud Camera landing page static seed – shown before DB is seeded
export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'none',
    richText: undefined,
  },
  meta: {
    description: 'VCV Cloud Camera – Professional cloud security cameras with AI-powered detection, 24/7 cloud storage, and real-time mobile alerts.',
    title: 'VCV Cloud Camera – Smarter Security, Always On',
  },
  title: 'Home',
  layout: [
    // Hero Banner
    {
      blockType: 'heroBanner',
      badge: '🚀 Introducing VCV Cloud Camera 2.0',
      heading: 'See Everything.\nMiss Nothing.',
      subheading:
        'Professional-grade cloud security cameras with AI-powered person & vehicle detection, unlimited cloud storage, and instant mobile alerts — all managed from one dashboard.',
      primaryCTA: { label: 'Shop Now', href: '#why-vcv' },
      secondaryCTA: { label: 'Watch Demo', href: '/demo' },
      stats: [
        { value: '10M+', label: 'Cameras Sold' },
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '4K', label: 'Ultra HD' },
        { value: '24/7', label: 'Cloud Storage' },
      ],
    },
    // Features
    {
      blockType: 'features',
      badge: 'Why VCV',
      heading: 'Built for the way you live & work',
      subheading:
        'Every feature is engineered to give you complete peace of mind — whether you\'re home, at the office, or halfway around the world.',
      features: [
        {
          icon: 'ai',
          title: 'AI Smart Detection',
          description:
            'Distinguish between people, vehicles, animals, and packages — eliminating false alarms and keeping you focused on what matters.',
        },
        {
          icon: 'cloud',
          title: 'Unlimited Cloud Storage',
          description:
            'All footage is encrypted and backed up to the cloud automatically. Access any clip from any device, anytime.',
        },
        {
          icon: 'shield',
          title: 'Bank-Grade Encryption',
          description:
            'AES-256 encryption at rest and TLS 1.3 in transit ensures your footage is private and protected at all times.',
        },
        {
          icon: 'mobile',
          title: 'Live Mobile View',
          description:
            'Watch live HD streams from all your cameras simultaneously on your smartphone or tablet with our free app.',
        },
        {
          icon: 'moon',
          title: 'Color Night Vision',
          description:
            'Full-color footage even in pitch-black conditions with our advanced IR + Starlight sensor technology.',
        },
        {
          icon: 'bell',
          title: 'Instant Push Alerts',
          description:
            'Get notified within seconds of any detected event. Customize alert zones and schedules to suit your needs.',
        },
        {
          icon: 'audio',
          title: 'Two-Way Audio',
          description:
            'Built-in microphone and speaker let you listen and speak to visitors, delivery people, or intruders in real time.',
        },
        {
          icon: 'zap',
          title: 'Easy 3-Minute Setup',
          description:
            'No technician required. Plug in, connect to Wi-Fi, and you\'re live in under 3 minutes with our guided app.',
        },
      ],
    },
    // Products
    // Pricing
    {
      blockType: 'pricing',
      badge: 'Cloud Plans',
      heading: 'Simple, transparent pricing',
      subheading: 'Start free, upgrade anytime. No hidden fees, no contracts.',
      plans: [
        {
          name: 'Starter',
          description: 'Perfect for home use',
          price: 0,
          annualPrice: 0,
          highlighted: false,
          ctaLabel: 'Start Free',
          ctaHref: '#signup',
          features: [
            { text: '2 cameras', included: true },
            { text: '7-day cloud storage', included: true },
            { text: '1080p recording', included: true },
            { text: 'Mobile app access', included: true },
            { text: 'AI Smart Detection', included: false },
            { text: 'Unlimited storage', included: false },
          ],
        },
        {
          name: 'Pro',
          description: 'For serious home security',
          price: 9,
          annualPrice: 7,
          highlighted: true,
          ctaLabel: 'Get Pro',
          ctaHref: '#signup',
          features: [
            { text: 'Up to 10 cameras', included: true },
            { text: '30-day cloud storage', included: true },
            { text: '4K Ultra HD recording', included: true },
            { text: 'AI Smart Detection', included: true },
            { text: 'Two-way audio', included: true },
            { text: 'Priority support', included: true },
          ],
        },
        {
          name: 'Business',
          description: 'Enterprise-grade security',
          price: 29,
          annualPrice: 23,
          highlighted: false,
          ctaLabel: 'Contact Sales',
          ctaHref: '#contact',
          features: [
            { text: 'Unlimited cameras', included: true },
            { text: '90-day cloud storage', included: true },
            { text: '4K Ultra HD recording', included: true },
            { text: 'AI Smart Detection', included: true },
            { text: 'Custom alert rules', included: true },
            { text: 'Dedicated account manager', included: true },
          ],
        },
      ],
    },
    // Testimonials
    {
      blockType: 'testimonialsSection',
      badge: 'Customer Stories',
      heading: 'Trusted by millions of families & businesses',
      subheading: 'Don\'t just take our word for it — hear from real VCV customers.',
      showAll: false,
      limit: 6,
    },
    // FAQ
    {
      blockType: 'faq',
      badge: 'FAQ',
      heading: 'Frequently asked questions',
      subheading: 'Everything you need to know about VCV Cloud Camera.',
      items: [
        {
          question: 'Does VCV Cloud Camera require a subscription?',
          answer:
            'No subscription is required to use your camera — you get 7 days of free cloud storage on our Starter plan. For longer storage, AI features, and more cameras, our Pro and Business plans start from $9/month.',
        },
        {
          question: 'How long is footage stored in the cloud?',
          answer:
            'Starter: 7 days, Pro: 30 days, Business: 90 days. You can also download and save clips locally at any time through the app.',
        },
        {
          question: 'Is my footage private and secure?',
          answer:
            'Absolutely. All footage is encrypted with AES-256 at rest and TLS 1.3 in transit. Only you can access your footage — VCV employees cannot view it.',
        },
        {
          question: 'Can I view my cameras remotely?',
          answer:
            'Yes! The free VCV app (iOS & Android) lets you watch live streams, review recordings, and receive alerts from anywhere in the world.',
        },
        {
          question: 'What happens if my internet goes down?',
          answer:
            'Our cameras with local storage support (SD card slot) will continue recording locally. When your internet reconnects, footage is automatically synced to the cloud.',
        },
        {
          question: 'How difficult is setup?',
          answer:
            'Most customers have their camera live in under 3 minutes. Simply plug in, download the app, and follow the step-by-step guide. No drilling or electrician required for indoor cameras.',
        },
      ],
    },
    
  ],
}
