import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from '@/i18n';
import { getRedirectUrlForLocales } from '@lib/routing/getRedirectUrlForLocales';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const redirectedUrl = getRedirectUrlForLocales(pathname, request);
  if (redirectedUrl) {
    return NextResponse.redirect(redirectedUrl);
  }

  return handleI18nRouting(request);
}
