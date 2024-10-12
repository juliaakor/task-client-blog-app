'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import { Button } from '@lib/components/Button';
import { Typography } from '@lib/components/Typography';

import { ErrorProps } from './types';

export default function Error({ error, reset }: ErrorProps) {
  const t = useTranslations('common');

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  const resetPage = () => {
    reset();
  };

  return (
    <div className="w-max p-14 m-auto">
      <Typography className="mb-6" tag="h2">
        {t('pageError')}
      </Typography>
      <Button
        styleType="brand"
        type="button"
        onClick={resetPage}
        name="reset"
        label={t('buttons.resetPageButtonTitle')}
      />
    </div>
  );
}
