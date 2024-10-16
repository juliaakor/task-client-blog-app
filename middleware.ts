import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from '@/i18n';

const API_PATH = '/api/';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(API_PATH)) {
    return NextResponse.next();
  }

  const handleI18nRouting = createMiddleware({ ...routing, localeDetection: false });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
