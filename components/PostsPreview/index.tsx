import { getTranslations } from 'next-intl/server';

import { getPostById } from '@/api/getPostById';
import { Typography } from '@/lib/components/Typography';
import { getAllPosts } from '@api/getAllPosts';
import { getUserById } from '@api/getUserById';
import { ENV } from '@constants/env';
import { PostCard } from '@lib/components/cards/PostCard';
import { dateToString } from '@lib/format/dateToString';

import { FeaturedPost } from '../FeaturedPost';

export const PostsPreview = async () => {
  const t = await getTranslations('blog');
  const homeTranslations = await getTranslations('home.sectionTitles');
  const commonTranslations = await getTranslations('common');

  const featuredPost = await getPostById(process.env.FEATURED_POST_ID_HOME_PAGE as string, ENV.NEXT_PUBLIC_BASE_URL);
  const featuredPostUser = await getUserById(featuredPost.userId, ENV.NEXT_PUBLIC_BASE_URL);

  const { posts: fetchedPosts } = await getAllPosts({ limit: 4, page: 1 }, ENV.NEXT_PUBLIC_BASE_URL);

  const postsWithUser = await Promise.all(
    fetchedPosts.map(async (post) => {
      const user = await getUserById(post.userId, ENV.NEXT_PUBLIC_BASE_URL);

      return {
        ...post,
        user,
      };
    })
  );

  return (
    <div className="grid grid-cols-2">
      <div>
        <Typography className="mb-8" tag="h2">
          {homeTranslations('featuredPost')}
        </Typography>
        <div className="border border-white-03 p-8">
          <FeaturedPost
            post={{ ...featuredPost, user: featuredPostUser }}
            isSubTitleSection
            className="flex-col-reverse w-full [&_div]:w-full p-0 [&_button]:w-1/3"
            imageClassName="w-full min-w-[29rem] float-top"
            buttonLinkTitle={commonTranslations.raw('buttons.readMoreButtonTitle')}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-8 px-8">
          <Typography tag="h2">{homeTranslations('allPosts')}</Typography>
          <Typography tag="body1">{commonTranslations('buttons.viewAllButtonTitle')}</Typography>
        </div>
        <div className="px-8 flex flex-col items-stretch aspect-auto">
          {postsWithUser.map(({ createdAt, id, name, user }) => (
            <PostCard
              key={id}
              type="small"
              className="h-1/4"
              title={name || ''}
              label={t('postHeader.dateShortAndAuthor', {
                author: user.name,
                date: dateToString(createdAt || '', 'short', 'ru'),
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
