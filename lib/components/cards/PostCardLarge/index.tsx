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
    { className: '', tag: 'cap3', value: subTitle },
    { className: '', tag: 'cap1', value: category },
    { className: '', tag: 'h2', value: title },
    { className: 'text-dark-gray', tag: 'label', value: label },
    { className: 'text-light-gray', tag: 'body1', value: preview },
  ];

  return (
    <div className={clsx('flex gap-8 justify-between max-768:flex-col-reverse max-768:items-center', className)}>
      <div className="flex flex-col self-center gap-4 w-3/5 max-768:4/5 max-425:w-full">
        {postInfo.map(({ className, tag, value }) => (
          <Typography key={tag} className={clsx('text-inherit', className)} tag={tag as TypographyTags}>
            {value}
          </Typography>
        ))}
        <div className="w-2/5 max-768:w-full">
          {buttonLinkTitle && (
            <Button label={buttonLinkTitle} name="Link button" styleType="brand" onClick={onClickButtonClick} />
          )}
        </div>
      </div>
      {image && (
        <Image
          className={clsx('w-2/5 min-w-2/5 h-80 object-cover max-768:w-3/5 max-425:w-full', imageClassName)}
          src={image}
          alt={title}
          priority
        />
      )}
    </div>
  );
};
