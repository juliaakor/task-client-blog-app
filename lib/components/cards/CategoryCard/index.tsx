import { categoryCardComponents, CategoryCardProps } from './types';

export const CategoryCard = ({ type, ...restProps }: CategoryCardProps) => {
  const Component = categoryCardComponents[type];

  return <Component {...restProps} />;
};
