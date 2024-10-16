import { useTranslations } from 'next-intl';

import { ROUTES } from '@/constants/navigation';
import { Link } from '@/i18n';

export const Logo = () => {
  const t = useTranslations('common');

  return (
    <Link href={ROUTES.home}>
      <h5 className="text-white-01 text-2xl font-bold leading-10 cursor-pointer">{t('logoTitle')}</h5>
    </Link>
  );
};
