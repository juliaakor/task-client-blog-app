import clsx from 'clsx';

import { HeadingProps } from '../types';

export const Heading2 = ({ children, className }: HeadingProps) => {
  return <h2 className={clsx('text-4xl font-bold leading-[3rem] text-dark-blue', className)}>{children}</h2>;
};
