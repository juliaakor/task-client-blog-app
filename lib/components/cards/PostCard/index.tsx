import { postCardComponents, PostCardProps } from './types';

export const PostCard = ({ type, ...restProps }: PostCardProps) => {
  const Component = postCardComponents[type];

  return <Component {...restProps} />;
};
