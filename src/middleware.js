// src/middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // ✅ Auto-fix duplicate language in URL (e.g., /en/en/about → /en/about)
  const langPattern = /^\/(en|hi)(?:\/\1)(\/.*)?$/
  const match = pathname.match(langPattern)
  if (match) {
    const lang = match[1]
    const rest = match[2] || ''
    return NextResponse.redirect(new URL(`/${lang}${rest}`, request.url))
  }

  // ✅ Redirect root `/` to `/en/`
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en/', request.url))
  }



  

  // ✅ Redirect /en/events → /en/exhibition and /hi/events → /hi/exhibition
  const redirectLangMatch = pathname.match(/^\/(en|hi)\/Events$/i)
  if (redirectLangMatch) {
    const lang = redirectLangMatch[1]
    return NextResponse.redirect(new URL(`/${lang}/Exhibition`, request.url))
  }

  // ✅ Protect admin dashboard routes
  if (pathname.startsWith('/nhdc-Admin')) {
    const token = request.cookies.get('token')?.value
    if (!token) {
      return NextResponse.redirect(new URL('/Login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/en/:path*', '/hi/:path*', '/nhdc-Admin/:path*'],
}
