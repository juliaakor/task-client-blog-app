import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';
import { NextRequest, NextResponse } from 'next/server';

const handleI18nRouting = createMiddleware({
  locales: ['en', 'ru'],

  defaultLocale: 'en',
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const shouldHandle = pathname === '/' || new RegExp(`^/(${locales.join('|')})(/.*)?$`).test(pathname);

  if (!shouldHandle) {
    const defaultUrl = request.nextUrl.clone();
    defaultUrl.pathname = `/en`;

    return NextResponse.redirect(defaultUrl);
  }

  return handleI18nRouting(request);
}
