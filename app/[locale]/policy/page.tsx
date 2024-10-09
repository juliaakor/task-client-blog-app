/* eslint-disable camelcase */
import { unstable_setRequestLocale } from 'next-intl/server';

import { HomeProps } from '@app/[locale]/types';

export default function PrivacyPolicy({ params: { locale } }: HomeProps) {
  unstable_setRequestLocale(locale);

  return <main>Privacy Policy</main>;
}
