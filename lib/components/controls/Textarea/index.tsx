import clsx from 'clsx';
import { useField } from 'formik';
import { useId } from 'react';

import { InputProps } from './types';
import { ErrorMessage } from '../../ErrorMessage';
import { defaultControlStyle } from '../defaults';

export const Textarea = ({ className, label, name, ...props }: InputProps) => {
  const [field, meta] = useField(name);
  const textareaId = name + useId();

  return (
    <div className={clsx('', className)}>
      <ErrorMessage isError={meta.touched && !!meta.error} errorText={meta.error} />
      <textarea
        className={clsx(defaultControlStyle, 'py-4 pl-6 resize-none')}
        aria-label={label}
        id={textareaId}
        {...field}
        {...props}
      />
    </div>
  );
};
