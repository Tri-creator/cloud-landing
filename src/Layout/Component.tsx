/**
 * LayoutTheme – Server Component
 *
 * Reads the `layout` Payload global and injects CSS custom-property overrides
 * into <head> so every page inherits the design-system tokens set in the admin.
 *
 * Strategy:
 *  • globals.css provides the base defaults (oklch values)
 *  • This component outputs an inline <style> with only the tokens that have
 *    been explicitly set by an admin, overriding the defaults.
 *  • Because the <style> tag is not inside a CSS @layer, it automatically wins
 *    over Tailwind's @layer utilities / @layer base rules.
 *  • Google Fonts are loaded dynamically via <link> when the admin picks a
 *    non-system font family.
 */
import { getCachedGlobal } from '@/utilities/getGlobals'

// ─── Constants ────────────────────────────────────────────────────────────────

/** Font values that ship with the project and need no Google Fonts request. */
const SYSTEM_FONTS = new Set(['geist', 'geist-mono', 'inherit', ''])

const FONT_WEIGHTS = 'wght@300;400;500;600;700'

/** camelCase field name → CSS custom-property name for color tokens */
const COLOR_VAR_MAP: Record<string, string> = {
  background: '--background',
  foreground: '--foreground',
  primary: '--primary',
  primaryForeground: '--primary-foreground',
  secondary: '--secondary',
  secondaryForeground: '--secondary-foreground',
  accent: '--accent',
  accentForeground: '--accent-foreground',
  muted: '--muted',
  mutedForeground: '--muted-foreground',
  card: '--card',
  cardForeground: '--card-foreground',
  popover: '--popover',
  popoverForeground: '--popover-foreground',
  border: '--border',
  input: '--input',
  ring: '--ring',
  destructive: '--destructive',
}

/** containerWidth select value → CSS max-width */
const CONTAINER_WIDTHS: Record<string, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

type ColorTokens = Partial<Record<string, string | null | undefined>>

function buildColorBlock(tokens: ColorTokens | undefined, selector: string): string {
  if (!tokens) return ''
  const lines = Object.entries(COLOR_VAR_MAP)
    .filter(([field]) => tokens[field])
    .map(([field, cssVar]) => `  ${cssVar}: ${tokens[field]};`)
  return lines.length ? `${selector} {\n${lines.join('\n')}\n}` : ''
}

function buildGoogleFontsUrl(families: (string | undefined | null)[]): string | null {
  const unique = [...new Set(families.filter((f): f is string => !!f && !SYSTEM_FONTS.has(f)))]
  if (!unique.length) return null
  const params = unique.map((f) => `family=${encodeURIComponent(f)}:${FONT_WEIGHTS}`).join('&')
  return `https://fonts.googleapis.com/css2?${params}&display=swap`
}

// ─── Typography helpers ───────────────────────────────────────────────────────

type TypographyData = {
  bodyFont?: string | null
  headingFont?: string | null
  monoFont?: string | null
  baseFontSize?: string | null
  headingFontWeight?: string | null
  lineHeight?: string | null
}

type SpacingData = {
  radius?: string | null
  containerWidth?: string | null
}

function buildTypographyCss(typography: TypographyData): string[] {
  const parts: string[] = []
  const bodyFont = typography.bodyFont ?? ''
  const headingFont = typography.headingFont ?? 'inherit'
  const monoFont = typography.monoFont ?? ''

  if (typography.baseFontSize && typography.baseFontSize !== '16px') {
    parts.push(`html {\n  font-size: ${typography.baseFontSize};\n}`)
  }

  const bodyLines: string[] = []
  if (typography.lineHeight && typography.lineHeight !== '1.5')
    bodyLines.push(`  line-height: ${typography.lineHeight};`)
  if (bodyFont && !SYSTEM_FONTS.has(bodyFont))
    bodyLines.push(`  font-family: '${bodyFont}', system-ui, sans-serif;`)
  if (bodyLines.length) parts.push(`body {\n${bodyLines.join('\n')}\n}`)

  const headingLines: string[] = []
  if (headingFont && headingFont !== 'inherit')
    headingLines.push(`  font-family: '${headingFont}', system-ui, sans-serif;`)
  if (typography.headingFontWeight && typography.headingFontWeight !== '700')
    headingLines.push(`  font-weight: ${typography.headingFontWeight};`)
  if (headingLines.length) parts.push(`h1, h2, h3, h4, h5, h6 {\n${headingLines.join('\n')}\n}`)

  if (monoFont && !SYSTEM_FONTS.has(monoFont))
    parts.push(`code, kbd, samp, pre {\n  font-family: '${monoFont}', ui-monospace, monospace;\n}`)

  return parts
}

function buildSpacingCss(spacing: SpacingData): string[] {
  const parts: string[] = []
  if (spacing.radius) parts.push(`:root {\n  --radius: ${spacing.radius};\n}`)
  if (spacing.containerWidth && CONTAINER_WIDTHS[spacing.containerWidth]) {
    parts.push(`.container { max-width: ${CONTAINER_WIDTHS[spacing.containerWidth]}; }`)
  }
  return parts
}

// ─── Component ────────────────────────────────────────────────────────────────

export async function LayoutTheme() {
  const layout = await getCachedGlobal('layout', 0)()

  const lightColors = layout?.lightColors ?? {}
  const darkColors = layout?.darkColors ?? {}
  const typography: TypographyData = layout?.typography ?? {}
  const spacing: SpacingData = layout?.spacing ?? {}

  const cssParts: string[] = [
    buildColorBlock(lightColors as ColorTokens, ':root'),
    buildColorBlock(darkColors as ColorTokens, "[data-theme='dark']"),
    ...buildSpacingCss(spacing),
    ...buildTypographyCss(typography),
  ].filter(Boolean)

  const css = cssParts.join('\n\n')
  const googleFontsUrl = buildGoogleFontsUrl([
    typography.bodyFont,
    typography.headingFont,
    typography.monoFont,
  ])

  if (!css && !googleFontsUrl) return null

  return (
    <>
      {googleFontsUrl && (
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* eslint-disable-next-line react/no-unknown-property */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href={googleFontsUrl} rel="stylesheet" />
        </>
      )}
      {css && <style dangerouslySetInnerHTML={{ __html: css }} />}
    </>
  )
}
