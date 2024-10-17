'use client';

import { useTranslations } from 'next-intl';
import { Button, Typography } from 'task-blog-ui-lib';

import { useRouter } from '@/i18n';
import { ROUTES } from '@constants/navigation';

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
