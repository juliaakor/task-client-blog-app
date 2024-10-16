'use client';

import { useTranslations } from 'next-intl';

import { ROUTES } from '@/constants/navigation';
import { useRouter } from '@/i18n';
import { Button } from '@/lib/components/Button';
import { Typography } from '@/lib/components/Typography';

export const JoinSection = () => {
  const t = useTranslations('common');
  const { push } = useRouter();

  const joinSection = t.raw('joinSection');

  const handleJoinNowClick = () => {
    push(ROUTES.contact);
  };

  return (
    <div className="text-center">
      <Typography tag="h2" className="mb-4">
        {joinSection.title}
      </Typography>
      <Typography tag="body2" className="mb-8">
        {joinSection.info}
      </Typography>
      <Button
        className="w-2/5"
        label={joinSection.redirectButtonTitle}
        name="join"
        styleType="brand"
        onClick={handleJoinNowClick}
      />
    </div>
  );
};
