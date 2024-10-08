import clsx from 'clsx';
import { useField } from 'formik';
import { useId } from 'react';

import { InputProps } from './types';
import { ErrorMessage } from '../../ErrorMessage';

export const Textarea = ({ className, label, name, ...props }: InputProps) => {
  const [field, meta] = useField(name);
  const textareaId = name + useId();

  return (
    <div className={clsx('', className)}>
      <textarea
        className="w-full border rounded-sm border-light-gray focus:border-dark-gray py-4 pl-6 text-light-gray leading-7 resize-none"
        aria-label={label}
        id={textareaId}
        {...field}
        {...props}
      />
      <ErrorMessage isError={meta.touched && !!meta.error} errorText={meta.error} />
    </div>
  );
};
