import clsx from 'clsx';
import Image from 'next/image';

import { Button } from '@lib/components/Button';
import { PostCardProps } from '@lib/components/cards/types';
import { Typography } from '@lib/components/Typography';
import { TypographyTags } from '@lib/components/Typography/types';

export const PostCardLarge = ({
  buttonLinkTitle,
  category,
  className,
  image,
  imageClassName,
  label,
  onClickButtonClick,
  preview,
  subTitle,
  title,
}: PostCardProps) => {
  const postInfo = [
    { tag: 'cap3', value: subTitle },
    { tag: 'cap1', value: category },
    { tag: 'h2', value: title },
    { tag: 'label', value: label },
    { tag: 'body1', value: preview },
  ];

  return (
    <div className={clsx('flex gap-8 justify-between', className)}>
      <div className="flex flex-col self-center gap-4 w-3/5">
        {postInfo.map(({ tag, value }) => (
          <Typography key={tag} className="text-inherit" tag={tag as TypographyTags}>
            {value}
          </Typography>
        ))}
        <div className="w-1/3">
          {buttonLinkTitle && (
            <Button label={buttonLinkTitle} name="Link button" styleType="brand" onClick={onClickButtonClick} />
          )}
        </div>
      </div>
      {image && (
        <Image className={clsx('w-2/5 min-w-2/5 h-80 object-cover', imageClassName)} src={image} alt={title} priority />
      )}
    </div>
  );
};
