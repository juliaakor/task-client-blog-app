import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { getTranslations } from 'next-intl/server';

import { PostCard } from '@lib/components/cards/PostCard';
import { dateToString } from '@lib/format/dateToString';

import { FeaturedPostProps } from './types';

export const FeaturedPost = async ({
  buttonLinkTitle,
  className,
  dateType,
  imageClassName,
  locale,
  post,
}: FeaturedPostProps) => {
  const t = await getTranslations('blog');
  const categories = t.raw('categories.values');

  const { category, createdAt, image, name, preview, user } = post;
  const label = t('postHeader.dateShortAndAuthor', {
    author: user?.name,
    date: dateToString(createdAt || '', dateType, locale as 'ru' | 'en'),
  });

  return (
    <div className={clsx(className, 'py-20 px-20')}>
      <PostCard
        type="large"
        className={className}
        imageClassName={imageClassName}
        preview={preview}
        title={name}
        label={label}
        category={categories[`${category}.title`]}
        image={image as StaticImageData}
        subTitle="Featured"
        buttonLinkTitle={buttonLinkTitle}
      />
    </div>
  );
};
