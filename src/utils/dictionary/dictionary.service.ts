import { Locale } from '@/models'

const dictionaries = {
  en: async () => await import('./en.dictionary').then((module) => module.default),
  es: async () => await import('./es.dictionary').then((module) => module.default),
  pt: async () => await import('./pt.dictionary').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => await dictionaries[locale]()
