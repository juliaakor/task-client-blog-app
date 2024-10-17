import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Typography } from 'task-blog-ui-lib';

import { FEATURED_LOGOS } from '@constants/layout';

export const LogoList = () => {
  const t = useTranslations('home');

  return (
    <div className="flex gap-16 flex-wrap justify-center">
      <div>
        <Typography tag="body2" className="text-dark-gray">
          {t('featured.title')}
        </Typography>
        <Typography tag="h4" className="text-dark-gray">
          {t('featured.subTitle')}
        </Typography>
      </div>
      {FEATURED_LOGOS.map(({ alt, src }) => (
        <Image key={alt} src={src} alt={alt} />
      ))}
    </div>
  );
};
