import { notFound } from 'next/navigation';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { getRequestConfig } from 'next-intl/server';

import { getTranslationsByLocale } from '@messages/loadTranslations';

export const locales = ['en', 'ru'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  const messages = await getTranslationsByLocale(locale);

  return {
    messages,
  };
});

export const routing = defineRouting({
  defaultLocale: 'en',
  locales,
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
