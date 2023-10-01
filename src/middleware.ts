import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest } from 'next/server'
import { Locale, Locales } from './models'

const locales: Locales = ['en', 'es', 'pt']
const defaultLocale: Locale = 'en'

function getLocale(request: NextRequest) {
  const languageInCookies = request.cookies.get('language')?.value
  const languageInCookiesMatch = languageInCookies === 'en' || languageInCookies === 'es' || languageInCookies === 'pt'
  const language = languageInCookiesMatch ? languageInCookies : request.headers.get('accept-language')

  const headers = { 'accept-language': language ?? '' }
  const languages = new Negotiator({ headers }).languages()
  const locale = match(languages, locales, defaultLocale)
  return locale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  const pathnameHasAssets = pathname.includes('/assets/')

  if (pathnameHasLocale || pathnameHasAssets) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
