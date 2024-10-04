import { useField } from 'formik';
import { useId } from 'react';

import { InputProps } from './types';

export const Input = ({ className = '', label, name, type, ...props }: InputProps) => {
  const [field, meta] = useField(name);
  const inputId = name + useId();

  return (
    <div className={` ${className}`}>
      <input
        className="w-full border border-light-gray py-4 pl-6 text-light-gray leading-7"
        aria-label={label}
        id={inputId}
        type={type}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <div className="text-red-700 pt-3">{meta.error}</div>}
    </div>
  );
};
