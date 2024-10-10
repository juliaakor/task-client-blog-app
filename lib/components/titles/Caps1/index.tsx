import clsx from 'clsx';

import { HeadingProps } from '../types';

export const Caps1 = ({ children, className }: HeadingProps) => {
  return (
    <h1 className={clsx('text-base font-semibold leading-5 tracking-widest text-dark-blue', className)}>{children}</h1>
  );
};
