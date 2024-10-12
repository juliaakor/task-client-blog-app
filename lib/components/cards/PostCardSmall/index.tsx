import clsx from 'clsx';

import { Typography } from '@lib/components/Typography';
import { TypographyTags } from '@lib/components/Typography/types';

import { PostCardProps } from '../types';

export const PostCardSmall = ({ className, label, title }: PostCardProps) => {
  const postInfo = [
    { className: 'mb-2 text-inherit', tag: 'label', value: label },
    { className: 'text-inherit', tag: 'h4', value: title },
  ];

  return (
    <div className={clsx('p-8 bg-transparent hover:bg-beige-01 text-foreground', className)}>
      {postInfo.map(({ className, tag, value }) => (
        <Typography key={tag} className={className} tag={tag as TypographyTags}>
          {value}
        </Typography>
      ))}
    </div>
  );
};
