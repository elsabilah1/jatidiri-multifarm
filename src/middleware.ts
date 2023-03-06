import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
const PUBLIC_FILE = /\.(.*)$/

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const jwt = request.cookies.get('token')

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  if (!jwt && !pathname.startsWith('/signin')) {
    request.nextUrl.pathname = '/signin'
    return NextResponse.redirect(request.nextUrl)
  }

  if (jwt) {
    if (pathname === '/signin' || pathname === '/') {
      request.nextUrl.pathname = '/home'
      return NextResponse.redirect(request.nextUrl)
    }

    const animalPath = ['/sheep', '/goat', '/cow'].find((p) => pathname === p)
    if (animalPath) {
      request.nextUrl.pathname = animalPath + '/male'
      return NextResponse.redirect(request.nextUrl)
    }

    const otherPath = ['/shed', '/hpp'].find((p) => pathname === p)
    if (otherPath) {
      request.nextUrl.pathname = otherPath + '/goat'
      return NextResponse.redirect(request.nextUrl)
    }
  }
}