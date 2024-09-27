import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { getRedirectUrlIfNeeded } from '@lib/routing/getRedirectUrlIfNeeded';

const handleI18nRouting = createMiddleware({
  defaultLocale: 'en',

  locales: ['en', 'ru'],
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const redirectedUrl = getRedirectUrlIfNeeded(pathname, request);
  if (redirectedUrl) {
    return NextResponse.redirect(redirectedUrl);
  }

  return handleI18nRouting(request);
}
