import clsx from 'clsx';

import { ButtonProps } from './types';

const buttonStyles: Record<string, string> = {
  brand: 'bg-yellow hover:bg-yellow-hover',
  white: 'bg-white-01 hover:bg-white-03 text-lg',
};

export const Button = ({ children, className, label, name, styleType, ...props }: ButtonProps) => {
  const buttonClasses = clsx('w-full p-4 px-5 font-bold text-dark-blue', buttonStyles[styleType], className);

  return (
    <button className={buttonClasses} type="button" aria-label={name} {...props}>
      {children}
      {label}
    </button>
  );
};
