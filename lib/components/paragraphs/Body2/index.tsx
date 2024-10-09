import clsx from 'clsx';

import { ParagraphProps } from '../types';

export const Body2 = ({ children, className }: ParagraphProps) => {
  return <p className={clsx('font-normal text-sm leading-5 text-dark-blue', className)}>{children}</p>;
};
