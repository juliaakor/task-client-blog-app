import { TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  value?: string;
  label?: string;
  name: string;
  onInputChange?: (value: string) => void;
}
