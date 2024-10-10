import { typographyComponents, TypographyProps } from './types';

export const Typography = ({ children, className, tag }: TypographyProps) => {
  const Component = typographyComponents[tag];

  return <Component className={className}>{children}</Component>;
};
