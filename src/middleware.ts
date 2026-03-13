import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANONICAL_HOST = 'atfro.com';
const CANONICAL_ORIGIN = 'https://atfro.com';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get('host') ?? '';
  const proto = request.headers.get('x-forwarded-proto');
  const isHttps = proto ? proto.split(',')[0].trim() === 'https' : url.protocol === 'https:';

  // Force HTTPS (when behind proxy or direct)
  if (!isHttps) {
    const target = new URL(request.url);
    target.protocol = 'https:';
    target.host = CANONICAL_HOST;
    return NextResponse.redirect(target.toString(), 301);
  }

  // Force non-www (canonical domain)
  if (host.startsWith('www.')) {
    return NextResponse.redirect(CANONICAL_ORIGIN + url.pathname + url.search, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)'],
};
