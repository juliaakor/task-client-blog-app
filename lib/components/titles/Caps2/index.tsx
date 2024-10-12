import clsx from 'clsx';

import { HeadingProps } from '../types';

export const Caps2 = ({ children, className }: HeadingProps) => {
  return <h1 className={clsx('text-5xl font-bold leading-[4rem] uppercase text-dark-blue', className)}>{children}</h1>;
};
