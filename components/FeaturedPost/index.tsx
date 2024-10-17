'use client';

import { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import { PostCard } from 'task-blog-ui-lib';

import { useRouter } from '@/i18n';
import { ROUTES } from '@constants/navigation';
import { dateToString } from '@lib/format/dateToString';

import { FeaturedPostProps } from './types';

export const FeaturedPost = ({
  buttonLinkTitle,
  className,
  dateType,
  hasSubTitleName,
  imageClassName,
  isSubTitleSection,
  locale,
  post: { category, createdAt, id, image, name, preview, user, userId },
}: FeaturedPostProps) => {
  const t = useTranslations('blog');
  const router = useRouter();

  const label = t('postHeader.dateShortAndAuthor', {
    author: user?.name,
    date: dateToString(createdAt || '', dateType, locale as 'ru' | 'en'),
  });

  const categoryLabel = t(`categories.values.${category}.title`);

  const handleOnButtonClick = () => {
    router.push(ROUTES.post.replace('[id]', userId).replace('[postId]', id));
  };

  const subTitle = isSubTitleSection
    ? `${t('featuredSubTitles.category')} ${categoryLabel}`
    : t('featuredSubTitles.post');

  return (
    <div className={className}>
      <PostCard
        type="large"
        className={className}
        imageClassName={imageClassName}
        preview={preview}
        title={name}
        label={label}
        category={!isSubTitleSection ? categoryLabel : ''}
        image={image as StaticImageData}
        subTitle={hasSubTitleName ? subTitle : ''}
        buttonLinkTitle={buttonLinkTitle}
        onClickButtonClick={handleOnButtonClick}
      />
    </div>
  );
};
