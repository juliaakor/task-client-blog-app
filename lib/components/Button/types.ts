import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonType {
  Brand = 'brand',
  White = 'white',
}

export type ButtonTypeUnion = `${ButtonType}`;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: ButtonTypeUnion;
  onClick?: () => void;
  label: string;
  name: string;
  children?: ReactNode;
  className?: string;
}
