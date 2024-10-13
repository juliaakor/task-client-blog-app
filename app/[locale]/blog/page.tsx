import { getTranslations } from 'next-intl/server';

import { getPostById } from '@api/getPostById';
import { getUserById } from '@api/getUserById';
import { AllPostsWithPagination } from '@components/AllPostsWithPagination';
import { CategoryList } from '@components/CategoryList';
import { FeaturedPost } from '@components/FeaturedPost';
import { JoinSection } from '@components/JoinSection';
import { ENV } from '@constants/env';
import { PageContent } from '@lib/components/PageContent';
import { Typography } from '@lib/components/Typography';

export default async function Blog() {
  const t = await getTranslations('home');
  const post = await getPostById('29f5beff-7847-4c76-8411-0cbb6e5a8114', ENV.NEXT_PUBLIC_BASE_URL);
  const user = await getUserById(post.userId, ENV.NEXT_PUBLIC_BASE_URL);

  return (
    <>
      <FeaturedPost post={{ ...post, user }} className="bg-white-03" buttonLinkTitle="Read More >" />
      <PageContent>
        <div>
          <AllPostsWithPagination />
        </div>

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
