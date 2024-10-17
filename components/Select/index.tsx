import clsx from 'clsx';
import { useField } from 'formik';
import { useId } from 'react';
import { ErrorMessage } from 'task-blog-ui-lib';

import { defaultControlStyle } from '@constants/defaults';

import { SelectProps } from './types';

export const Select = ({ className, defaultLabel, label, name, options, ...props }: SelectProps) => {
  const [field, meta] = useField(name);
  const selectId = name + useId();

  return (
    <div className={clsx('', className)}>
      <ErrorMessage isError={meta.touched && !!meta.error} errorText={meta.error} />
      <select className={clsx(defaultControlStyle, 'py-4 pl-6')} aria-label={label} id={selectId} {...field} {...props}>
        <option value="" disabled>
          {defaultLabel}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
