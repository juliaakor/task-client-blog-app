import { DateTimeFormatOptions } from 'next-intl';

import { locales } from '@/i18n';

const localeMap: Record<string, string> = {
  en: 'en-US',
  ru: 'ru-RU',
};

export type DateFormat = 'full' | 'short';

export const dateToString = (
  dateStr: string,
  format: DateFormat = 'short',
  locale: (typeof locales)[number] = 'en'
) => {
  const date = new Date(dateStr);

  const options: DateTimeFormatOptions =
    format === 'full'
      ? { day: 'numeric', month: 'long', year: 'numeric' }
      : { day: 'numeric', month: 'short', year: 'numeric' };

  const localeCode = localeMap[locale] || localeMap.en;

  return date.toLocaleDateString(localeCode, options);
};
