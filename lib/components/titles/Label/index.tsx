import clsx from 'clsx';

import { HeadingProps } from '../types';

export const Label = ({ children, className }: HeadingProps) => {
  return <h6 className={clsx('text-sm font-medium leading-5 text-dark-blue', className)}>{children}</h6>;
};
