import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  value?: string;
  label?: string;
  name: string;
  type: string;
  onInputChange?: (value: string) => void;
}
