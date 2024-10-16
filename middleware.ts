import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from '@/i18n';

export default function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({ ...routing, localeDetection: false });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
