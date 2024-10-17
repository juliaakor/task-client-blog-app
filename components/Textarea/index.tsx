import clsx from 'clsx';
import { useField } from 'formik';
import { useId } from 'react';
import { ErrorMessage } from 'task-blog-ui-lib';

import { defaultControlStyle } from '@constants/defaults';

import { TextareaProps } from './types';

export const Textarea = ({ className, label, name, ...props }: TextareaProps) => {
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
