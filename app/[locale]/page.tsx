/* eslint-disable camelcase */
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { HomeProps } from './types';

export default function Home({ params }: HomeProps) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations('home');

  return (
    <main>
      {t('title')} {params.locale}
    </main>
  );
}
