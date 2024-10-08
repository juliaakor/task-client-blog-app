import clsx from 'clsx';

import { HeadingProps } from '../types';

export const Heading1 = ({ children, className }: HeadingProps) => {
  return <h1 className={clsx('text-5xl font-bold leading-[4rem] text-dark-blue', className)}>{children}</h1>;
};
