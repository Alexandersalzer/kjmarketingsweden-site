import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Swedish is the default locale and stays unprefixed in the URL. Everything that
// isn't an /en route (and isn't an API/static asset, per the matcher) is
// rewritten internally to /sv/... so it renders the [lang]=sv tree while the
// address bar keeps the clean Swedish URL. /en/... renders [lang]=en as-is.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return NextResponse.next();
  }
  const url = req.nextUrl.clone();
  url.pathname = `/sv${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip API routes, Next internals, and any file with an extension.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
