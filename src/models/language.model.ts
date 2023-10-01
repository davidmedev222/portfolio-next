import dictionary from '@/utils/dictionary/en.dictionary'

export type Locale = 'en' | 'es' | 'pt'
export type Locales = Locale[]
export type Dictionary = typeof dictionary
export type Header = Dictionary['header']
export type Home = Dictionary['home']
export type Projects = Dictionary['projects']
export type About = Dictionary['about']
export type Contact = Dictionary['contact']
export type Footer = Dictionary['footer']
