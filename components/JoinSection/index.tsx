'use client';

import { useTranslations } from 'next-intl';

import { ROUTES } from '@/constants/navigation';
import { useRouter } from '@/i18n';
import { Button } from '@/lib/components/Button';
import { Body2 } from '@/lib/components/paragraphs/Body2';
import { Heading2 } from '@/lib/components/titles/Heading2';

export const JoinSection = () => {
  const t = useTranslations('common');
  const { push } = useRouter();

  const joinSection = t.raw('joinSection');

  const handleJoinNowClick = () => {
    push(ROUTES.contact);
  };

  return (
    <div className="text-center">
      <Heading2 className="mb-4">{joinSection.title}</Heading2>
      <Body2 className="mb-8">{joinSection.info}</Body2>
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
