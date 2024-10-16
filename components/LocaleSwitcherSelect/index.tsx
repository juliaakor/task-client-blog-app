'use client';

import clsx from 'clsx';
import { ChangeEvent, useTransition } from 'react';

import { usePathname, useRouter } from '@/i18n';

import { LocaleSwitcherSelectProps } from './types';

export default function LocaleSwitcherSelect({ children, defaultValue, label }: LocaleSwitcherSelectProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <label
      htmlFor="locale-switcher"
      className={clsx(
        'relative text-light-gray w-max float-right flex items-center filter hover:brightness-150',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        id="locale-switcher"
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
