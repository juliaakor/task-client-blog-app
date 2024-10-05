import { TextareaHTMLAttributes } from 'react';

export interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label: string;
  type?: string;
  name: string;
}
