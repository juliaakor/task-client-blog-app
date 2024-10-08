import clsx from 'clsx';
import { useField } from 'formik';
import { useId } from 'react';

import { defaultControlStyle } from '@/lib/components/controls/defaults';
import { ErrorMessage } from '@/lib/components/ErrorMessage';

import { InputProps } from './types';

export const Input = ({ className, label, name, type, ...props }: InputProps) => {
  const [field, meta] = useField(name);
  const inputId = name + useId();

  return (
    <div className={clsx('', className)}>
      <ErrorMessage isError={meta.touched && !!meta.error} errorText={meta.error} />
      <input
        className={clsx(defaultControlStyle, 'py-4 pl-6')}
        aria-label={label}
        id={inputId}
        type={type}
        {...field}
        {...props}
      />
    </div>
  );
};
