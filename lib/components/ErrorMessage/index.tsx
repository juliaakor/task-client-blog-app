import clsx from 'clsx';
import { ErrorMessageProps } from './types';

export const ErrorMessage = ({ isError, errorText }: ErrorMessageProps) => {
  return (
    <div
      className={clsx(
        'text-xs h-1 text-error pt-1 opacity-100 z-50 float-right relative top-2 right-2',
        isError && 'opacity-100'
      )}
    >
      {errorText}
    </div>
  );
};
