import { StaticImageData } from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n';
import { Typography } from '@/lib/components/Typography';
import { ROUTES } from '@constants/navigation';
import { PostCard } from '@lib/components/cards/PostCard';

import { PostsListProps } from './types';

export const PostsList = async ({ posts = [] }: PostsListProps) => {
  const t = await getTranslations('blog.categories.values');

  if (posts?.length === 0)
    return (
      <Typography className="m-8 text-center" tag="h3">
        No posts
      </Typography>
    );

  return (
    <>
      {posts.map(({ category, id, image, name, preview, userId }) => (
        <Link key={id} href={ROUTES.post.replace('[id]', userId).replace('[postId]', id)}>
          <PostCard
            type="medium"
            imageClassName="w-[26rem] min-w-[26rem] items-stretch h-auto max-768:min-w-[15rem] max-768:w-[15rem]"
            preview={preview}
            title={name}
            category={t(`${category}.title`)}
            image={image as StaticImageData}
          />
        </Link>
      ))}
    </>
  );
};
