import { useTranslations } from 'next-intl';

import { HomeProps } from './types';

export default function Home({ params }: HomeProps) {
  const t = useTranslations('home');

  return (
    <main>
      {t('title')} {params.locale}
    </main>
  );
}
