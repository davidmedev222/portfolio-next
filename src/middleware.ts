import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest } from 'next/server'

const locales = ['en', 'es', 'pt']
const defaultLocale = 'en'

function getLocale(request: NextRequest) {
  const browserLanguage = request.headers.get('accept-language') ?? ''
  const headers = { 'accept-language': browserLanguage }
  const languages = new Negotiator({ headers }).languages()
  const locale = match(languages, locales, defaultLocale)
  console.log(languages)
  console.log(locale)
  return locale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)']
}
