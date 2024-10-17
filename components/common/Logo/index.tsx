import { useTranslations } from 'next-intl';

import { Link } from '@/i18n';
import { ROUTES } from '@constants/navigation';

export const Logo = () => {
  const t = useTranslations('common');

  return (
    <Link href={ROUTES.home}>
      <h5 className="text-white-01 text-2xl font-bold leading-10 cursor-pointer">{t('logoTitle')}</h5>
    </Link>
  );
};
