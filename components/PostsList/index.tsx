import { StaticImageData } from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n';
import { Typography } from '@/lib/components/Typography';
import { dateToString } from '@/lib/format/dateToString';
import { ROUTES } from '@constants/navigation';
import { PostCard } from '@lib/components/cards/PostCard';

import { PostsListProps } from './types';

export const PostsList = async ({
  className,
  dateType = 'short',
  imageClassName,
  locale,
  posts = [],
}: PostsListProps) => {
  const t = await getTranslations('blog');
  const categories = t.raw('categories.values');

  if (posts?.length === 0)
    return (
      <Typography className="m-8 text-center" tag="h3">
        No posts
      </Typography>
    );

  return (
    <>
      {posts.map(({ category, createdAt, id, image, name, preview, user, userId }) => {
        return (
          <Link key={id} href={ROUTES.post.replace('[id]', userId).replace('[postId]', id)}>
            <PostCard
              type="medium"
              className={className}
              imageClassName={imageClassName}
              preview={preview}
              title={name}
              label={t('postHeader.dateShortAndAuthor', {
                author: user?.name,
                date: dateToString(createdAt || '', dateType, locale as 'ru' | 'en'),
              })}
              category={categories[`${category}.title`]}
              image={image as StaticImageData}
            />
          </Link>
        );
      })}
    </>
  );
};
