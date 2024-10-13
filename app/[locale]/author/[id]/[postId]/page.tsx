import parse from 'html-react-parser';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { getAllPosts } from '@api/getAllPosts';
import { getPostById } from '@api/getPostById';
import { getUserById } from '@api/getUserById';
import { CategoryTranslation } from '@components/CategoryList/types';
import { JoinSection } from '@components/JoinSection';
import { PostsList } from '@components/PostsList';
import { ENV } from '@constants/env';
import { CATEGORY_ICONS } from '@constants/layout';
import { PageContent } from '@lib/components/PageContent';
import { Typography } from '@lib/components/Typography';
import { dateToString } from '@lib/format/dateToString';

import { PostProps } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const replaceComponent = (domNode: any) => {
  if (domNode.name === 'typography') {
    return (
      <Typography className={domNode.attribs.className} tag={domNode.attribs.tag}>
        {domNode.children[0].data}
      </Typography>
    );
  }

  return null;
};

export default async function Post({ params }: PostProps) {
  const t = await getTranslations('blog');

  const {
    category,
    content,
    createdAt,
    image = '',
    name,
    userId,
  } = await getPostById(params.postId, ENV.NEXT_PUBLIC_BASE_URL);
  const user = await getUserById(userId, ENV.NEXT_PUBLIC_BASE_URL);
  const { avatar = '', name: userName } = user;

  const { posts } = await getAllPosts({ category, limit: 3, page: 1, userId }, ENV.NEXT_PUBLIC_BASE_URL);

  const categoriesValues = t.raw('categories.values') as Record<string, CategoryTranslation>;
  const { icon: categoryIcon, label: cateroryLabel } = {
    icon: CATEGORY_ICONS[`${category}`],
    label: categoriesValues[`${category}`]?.title,
  };

  const parsedPost = parse(content, { replace: replaceComponent });

  return (
    <main>
      <PageContent>
        <div className="w-1/2 max-768:w-3/4">
          <div className="flex gap-4 mb-6">
            <Image
              className="rounded-full object-cover w-12 h-12"
              src={avatar}
              alt="Blog image"
              width={48}
              height={48}
            />
            <div>
              <Typography className="text-light-blue" tag="h3">
                {userName}
              </Typography>
              <Typography className="text-light-gray" tag="body1">
                {t('postHeader.dateFull', {
                  date: dateToString(createdAt, 'full', params.locale),
                })}
              </Typography>
            </div>
          </div>
          <Typography className="mb-8" tag="h1">
            {name}
          </Typography>
          <Typography className="flex gap-2" tag="h4">
            <Image src={categoryIcon} alt={cateroryLabel} />
            {cateroryLabel}
          </Typography>
        </div>
        <Image className="w-full" src={image} alt="Blog image" />
        <div className="w-1/2 flex flex-col gap-12 max-768:w-3/4">{parsedPost}</div>
        <div>
          <Typography className="mb-16" tag="h2">
            {t('nextPostsHeader')}
          </Typography>
          <div className="flex gap-16 flex-wrap">
            <PostsList
              className="flex-col"
              imageClassName="w-[29rem] min-w-[29rem] items-stretch w-auto"
              posts={posts.map((post) => ({ ...post, user }))}
              locale={params.locale}
            />
          </div>
        </div>
        <div className="w-1/3 max-768:w-3/5 max-425:4/5 m-auto">
          <JoinSection />
        </div>
      </PageContent>
    </main>
  );
}
