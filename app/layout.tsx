import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Root({ children }: Props) {
  return children;
}
