import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { PageContent } from 'task-blog-ui-lib';

import { FeaturedPost } from '@components/FeaturedPost';
import { HomePageContent } from '@components/HomePageContent';
import { PostsPreview } from '@components/PostsPreview';
import { ENV } from '@constants/env';
import { getPostById } from '@lib/api/getPostById';
import { getUserById } from '@lib/api/getUserById';

import { HomePageProps } from './types';

export default async function Home({ params }: HomePageProps) {
  const t = await getTranslations('common');

  const headerPost = await getPostById(process.env.HEADER_POST_ID_HOME_PAGE as string, ENV.NEXT_PUBLIC_BASE_URL);
  const headerPostUser = await getUserById(headerPost.userId, ENV.NEXT_PUBLIC_BASE_URL);

  return (
    <main>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={headerPost.image || ''}
            alt="Background image"
            className="h-full object-cover transform -scale-x-100"
          />
        </div>
        <div className="relative z-10 bg-dark-shadow pb-32 pt-20">
          <FeaturedPost
            className="flex-col w-full h-full text-white-01 p-20 max-768:p-10 pr-0 max-425:w-auto m-0 self-start items-start text-left [&_p]:text-white-01 [&_div]:self-start [&_div_div]:gap-6 [&_h2]:text-6xl [&_button]:mt-12"
            imageClassName="hidden"
            post={{ ...headerPost, user: headerPostUser }}
            locale={params.locale}
            buttonLinkTitle={t('buttons.readMoreButtonTitle')}
            isSubTitleSection
          />
        </div>
      </div>
      <PageContent>
        <div>
          <PostsPreview />
        </div>
        <HomePageContent />
      </PageContent>
    </main>
  );
}
