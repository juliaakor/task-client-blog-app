import { getTranslations } from 'next-intl/server';

import { getPostById } from '@/lib/api/getPostById';
import { getUserById } from '@/lib/api/getUserById';
import { AllPostsWithPagination } from '@components/AllPostsWithPagination';
import { CategoryList } from '@components/CategoryList';
import { FeaturedPost } from '@components/FeaturedPost';
import { JoinSection } from '@components/JoinSection';
import { ENV } from '@constants/env';
import { PageContent } from '@lib/components/PageContent';
import { Typography } from '@lib/components/Typography';

import { BlogProps } from './types';

export default async function Blog({ params }: BlogProps) {
  const t = await getTranslations('home');
  const commonTranslations = await getTranslations('common');

  const post = await getPostById(process.env.FEATURED_POST_ID_BLOG_PAGE as string, ENV.NEXT_PUBLIC_BASE_URL);
  const user = await getUserById(post.userId, ENV.NEXT_PUBLIC_BASE_URL);

  return (
    <>
      <FeaturedPost
        post={{ ...post, user }}
        locale={params.locale}
        className="bg-white-03 py-20 px-20"
        buttonLinkTitle={commonTranslations('buttons.readMoreButtonTitle')}
      />
      <PageContent>
        <AllPostsWithPagination />

        <div>
          <Typography tag="h2" className="mb-12 text-left">
            {t('sectionTitles.allCatagories')}
          </Typography>
          <CategoryList isFullInfo cardClassName="w-72" />
        </div>

        <div className="w-1/3 max-768:w-3/5 max-425:4/5 m-auto">
          <JoinSection />
        </div>
      </PageContent>
    </>
  );
}
