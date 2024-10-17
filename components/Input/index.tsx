import clsx from 'clsx';
import { useField } from 'formik';
import { useId } from 'react';
import { ErrorMessage } from 'task-blog-ui-lib';

import { defaultControlStyle } from '@constants/defaults';

import { InputProps } from './types';

export const Input = ({ className, inputClassName, label, name, type, ...props }: InputProps) => {
  const [field, meta] = useField(name);
  const inputId = name + useId();

  return (
    <div className={clsx('', className)}>
      <ErrorMessage isError={meta.touched && !!meta.error} errorText={meta.error} />
      <input
        className={clsx(defaultControlStyle, inputClassName, 'py-4 pl-6')}
        aria-label={label}
        id={inputId}
        type={type}
        {...field}
        {...props}
      />
    </div>
  );
};
