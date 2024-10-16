import clsx from 'clsx';
import Image from 'next/image';

import { PostCardProps } from '@lib/components/cards/types';
import { Typography } from '@lib/components/Typography';
import { TypographyTags } from '@lib/components/Typography/types';

export const PostCardMedium = ({
  category,
  className,
  image,
  imageClassName,
  label,
  preview,
  title,
}: PostCardProps) => {
  const postInfo = [
    { tag: 'label', value: label },
    { tag: 'cap1', value: category },
    { tag: 'h2', value: title },
    { tag: 'body1', value: preview },
  ];

  return (
    <div className={clsx('flex gap-8', className)}>
      {image && <Image className={clsx('w-72 min-w-72 h-80 object-cover', imageClassName)} src={image} alt={title} />}
      <div className="flex flex-col self-center gap-4 text-foreground">
        {postInfo.map(({ tag, value }) => (
          <Typography key={tag} className="text-inherit" tag={tag as TypographyTags}>
            {value}
          </Typography>
        ))}
      </div>
    </div>
  );
};
