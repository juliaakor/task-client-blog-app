import clsx from 'clsx';

import { HeadingProps } from '../types';

export const Title = ({ children, className }: HeadingProps) => {
  return <h1 className={clsx('text-[3.5rem] font-bold leading-[4rem] text-dark-blue', className)}>{children}</h1>;
};
