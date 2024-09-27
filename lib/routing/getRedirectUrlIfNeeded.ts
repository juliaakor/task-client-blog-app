import { NextRequest } from 'next/server';

import { locales } from '@/i18n';

export const getFirstPathSegment = (pathname: string): string | null => {
  const match = pathname.match(/^\/([^/]+)(\/.*)?$/);

  return match ? match[1] : null;
};

export const createRedirectUrl = (locale: string, pathname: string, request: NextRequest): URL => {
  const match = pathname.match(/^\/[^/]+(\/.*)?$/);
  const newPath = `${locale}${match ? match[1] || '' : ''}`;

  const url = request.nextUrl.clone();
  url.pathname = newPath;

  return url;
};

export const getRedirectUrlIfNeeded = (pathname: string, request: NextRequest): URL | null => {
  const firstSegment = getFirstPathSegment(pathname);

  if (!firstSegment || !locales.includes(firstSegment)) {
    return createRedirectUrl('/en', pathname, request);
  }

  return null;
};
