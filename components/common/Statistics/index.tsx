import { useTranslations } from 'next-intl';

import { Typography } from '@lib/components/Typography';

import { StatisticsProps, StatValue } from './types';

export const Statistics = ({ className }: StatisticsProps) => {
  const t = useTranslations('about');
  const stats = t.raw('statistics') as StatValue[];

  return (
    <div className={className}>
      <div className="grid grid-cols-8 grid-rows-[auto auto]">
        {stats.map(({ title, value }) => (
          <div key={title} className="bg-yellow px-8 py-12 col-span-2 text-center">
            <Typography tag="title">{value}</Typography>
            <Typography tag="body1">{title}</Typography>
          </div>
        ))}
        <div className="h-6 bg-light-blue col-span-3 row-start-2" />
        <div className="h-6 bg-yellow col-span-5 col-start-4 row-start-2" />
      </div>
    </div>
  );
};
