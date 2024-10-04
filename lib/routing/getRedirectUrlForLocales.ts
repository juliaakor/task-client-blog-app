import { NextRequest } from 'next/server';

import { locales } from '@/i18n';

const FIRST_PATH_SEGMENT_REGEX = /^\/([^/]+)(\/.*)?$/;
const PATH_WITHOUT_LOCALE_REGEX = /^\/[^/]+(\/.*)?$/;

export const getFirstPathSegment = (pathname: string) => {
  const match = pathname.match(FIRST_PATH_SEGMENT_REGEX);

  return match?.[1] || null;
};

export const createRedirectUrl = (locale: string, pathname: string, request: NextRequest) => {
  const match = pathname.match(PATH_WITHOUT_LOCALE_REGEX);
  const newPath = `/${locale}${match?.[1] || ''}`;

  const url = request.nextUrl.clone();
  url.pathname = newPath;

  return url;
};

export const getRedirectUrlForLocales = (pathname: string, request: NextRequest) => {
  const firstSegment = getFirstPathSegment(pathname);

  if (firstSegment && locales.includes(firstSegment)) {
    return null;
  }

  return createRedirectUrl('en', pathname, request);
};
