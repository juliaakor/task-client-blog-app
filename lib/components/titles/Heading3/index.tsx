import clsx from 'clsx';

import { HeadingProps } from '../types';

export const Heading3 = ({ children, className }: HeadingProps) => {
  return <h3 className={clsx('text-[1.75rem] font-bold leading-9 text-dark-blue', className)}>{children}</h3>;
};
