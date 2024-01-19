export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de', 'sr']
} as const

export type Locale = (typeof i18n)['locales'][number]
