import clsx from 'clsx';

import { HeadingProps } from '../types';

export const Heading4 = ({ children, className }: HeadingProps) => {
  return <h4 className={clsx('text-2xl font-bold leading-8 text-dark-blue', className)}>{children}</h4>;
};
