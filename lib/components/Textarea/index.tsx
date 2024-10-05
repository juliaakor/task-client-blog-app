import { useField } from 'formik';
import { useId } from 'react';

import { InputProps } from './types';

export const Textarea = ({ className = '', label, name, ...props }: InputProps) => {
  const [field, meta] = useField(name);
  const textareaId = name + useId();

  return (
    <div className={` ${className}`}>
      <textarea
        className="w-full border border-light-gray py-4 pl-6 text-light-gray leading-7"
        aria-label={label}
        id={textareaId}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <div className="text-red-700 pt-3">{meta.error}</div>}
    </div>
  );
};
