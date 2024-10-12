import Image from 'next/image';
import { useTranslations } from 'next-intl';

import peopleLookingAtTheSea from '@assets/images/peopleLookingAtTheSea.png';
import { Statistics } from '@components/common/Statistics';
import { Typography } from '@lib/components/Typography';

export const IntroSection = () => {
  const t = useTranslations('about');

  return (
    <div className="grid grid-rows-[auto auto] grid-cols-[auto auto auto auto]">
      <div className="min-w-[6.75rem] bg-transparent" />
      <div className="p-16 z-10 bg-white-01 row-start-1 col-start-2 col-end-2 max-425:col-start-1">
        <Typography tag="cap1">{t('subTitle')}</Typography>
        <Typography tag="h1">{t('slogan')}</Typography>
      </div>
      <Typography
        className="row-start-1 col-start-4 max-425:col-start-2 max-425:col-end-5 text-dark-gray px-8 py-20"
        tag="body1"
      >
        {t('pageInfo')}
      </Typography>
      <Image
        className="z-0 w-full h-full object-cover row-start-2 col-span-4"
        src={peopleLookingAtTheSea}
        alt="People Looking At The Sea"
      />
      <Statistics className="z-10 row-start-2 col-start-2 col-span-2 max-768:col-end-5 max-425:col-start-1" />
    </div>
  );
};
